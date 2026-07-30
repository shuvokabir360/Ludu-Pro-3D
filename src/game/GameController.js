import { PlayerManager } from './PlayerManager.js';
import { LudoRules } from './LudoRules.js';
import { AIPlayer } from './AIPlayer.js';
import { DicePhysics } from '../dice/DicePhysics.js';
import {
  BASE_YARD_POSITIONS,
  getTrackWorldPosition,
  getHomeStretchWorldPosition
} from '../board/BoardCoordinates.js';
import { SNAKES, LADDERS, getSnakeLadderWorldPosition } from './SnakesLaddersData.js';
import { soundManager } from '../audio/SoundManager.js';
import { networkManager } from './NetworkManager.js';

export const GAME_STATES = {
  IDLE: 'IDLE',
  WAITING_FOR_ROLL: 'WAITING_FOR_ROLL',
  ROLLING: 'ROLLING',
  SELECTING_TOKEN: 'SELECTING_TOKEN',
  MOVING_TOKEN: 'MOVING_TOKEN',
  TURN_COMPLETE: 'TURN_COMPLETE',
  GAME_OVER: 'GAME_OVER'
};

export class GameController {
  constructor(sceneManager, cameraManager, tokenManager, dice3D, uiManager, particleSystem, fireworks, boardBuilder, snakesLaddersBoard) {
    this.sceneManager = sceneManager;
    this.cameraManager = cameraManager;
    this.tokenManager = tokenManager;
    this.dice3D = dice3D;
    this.uiManager = uiManager;
    this.particleSystem = particleSystem;
    this.fireworks = fireworks;
    this.boardBuilder = boardBuilder;
    this.snakesLaddersBoard = snakesLaddersBoard;

    this.dicePhysics = new DicePhysics(dice3D);
    this.playerManager = new PlayerManager();

    this.currentState = GAME_STATES.IDLE;
    this.lastRollValue = 0;
    this.consecutiveSixes = 0;
    this.validTokens = [];
    this.turnTimer = null;
    this.turnTimeRemaining = 15;

    this.bindEvents();
  }

  bindEvents() {
    this.uiManager.on('onRollClicked', () => this.handleRollDice());
    this.uiManager.on('onTokenSelected', (token) => this.handleTokenSelected(token));

    // Live Real-Time Network Sync Listeners for Online Rooms
    networkManager.on('onRoomUpdated', (roomData) => {
      if (this.gameMode !== 'online_room' || !roomData || !roomData.players) return;
      const playersList = Object.values(roomData.players);
      playersList.forEach(p => {
        if (this.playerManager.players[p.playerIndex]) {
          this.playerManager.players[p.playerIndex].name = p.name;
          this.playerManager.players[p.playerIndex].avatar = p.avatar || '🎲';
          this.playerManager.players[p.playerIndex].isActiveSlot = true;
        }
      });
      this.uiManager.hud.initPlayerCards(this.playerManager.players);
    });

    networkManager.on('onDiceRollReceived', (diceData) => {
      if (this.gameMode !== 'online_room' || !diceData) return;
      if (this.playerManager.getActivePlayer().idx !== networkManager.myPlayerIndex) {
        this.lastRollValue = Number(diceData.value);
        this.dice3D.setValue(this.lastRollValue);
        this.processRollResult(this.lastRollValue);
      }
    });

    networkManager.on('onMoveReceived', (moveData) => {
      if (this.gameMode !== 'online_room' || !moveData) return;
      if (moveData.playerIdx !== networkManager.myPlayerIndex) {
        const token = this.tokenManager.getToken(moveData.playerIdx, moveData.tokenIdx);
        if (token) {
          this.handleTokenSelected(token);
        }
      }
    });
  }

  startNewGame(mode = 'vs_ai', count = 4, difficulty = 'Medium', userProfile = null) {
    this.currentState = GAME_STATES.WAITING_FOR_ROLL;
    this.gameMode = mode;

    // Toggle 3D Board Styles based on Mode
    if (mode === 'snake_ludu') {
      if (this.boardBuilder) this.boardBuilder.setVisible(false);
      if (this.snakesLaddersBoard) this.snakesLaddersBoard.setVisible(true);
    } else {
      if (this.boardBuilder) this.boardBuilder.setVisible(true);
      if (this.snakesLaddersBoard) this.snakesLaddersBoard.setVisible(false);
    }

    this.playerManager.setupPlayers(mode, count, difficulty, userProfile);
    this.tokenManager.setupActiveTokens(this.playerManager.players);
    this.consecutiveSixes = 0;

    // 🐍 Snake Ludu: only 1 token per player, start at cell 1
    if (mode === 'snake_ludu') {
      this.playerManager.players.forEach(player => {
        if (!player.isActiveSlot) return;
        // Hide tokens 1, 2, 3 — only use token 0
        for (let t = 1; t < 4; t++) {
          const extraToken = this.tokenManager.getToken(player.idx, t);
          if (extraToken) extraToken.meshGroup.visible = false;
        }
        // Place token 0 at trackIndex 1 (start position cell 1 on the board)
        const token0 = this.tokenManager.getToken(player.idx, 0);
        if (token0) {
          token0.trackIndex = 1;
          token0.isFinished = false;
          // Place at start position on Snake board (cell 1)
          const startPos = getSnakeLadderWorldPosition(1);
          if (startPos) token0.setPosition(startPos);
        }
      });
    }

    this.uiManager.hud.initPlayerCards(this.playerManager.players);
    this.uiManager.showScreen('gameplay');
    this.beginTurn();
  }

  stopGame() {
    this.currentState = GAME_STATES.IDLE;
    this.stopTurnTimer();
    this.tokenManager.clearSelectableTokens();

    // Restore standard Ludo board on exit/reset
    if (this.boardBuilder) this.boardBuilder.setVisible(true);
    if (this.snakesLaddersBoard) this.snakesLaddersBoard.setVisible(false);
  }

  beginTurn() {
    if (this.currentState === GAME_STATES.IDLE) return;

    const activePlayer = this.playerManager.getActivePlayer();
    this.currentState = GAME_STATES.WAITING_FOR_ROLL;

    // Adapt 3D Dice color to active player's corner color
    this.dice3D.setActivePlayerColor(activePlayer.idx);

    // Focus camera on active player corner
    this.cameraManager.focusPlayerCorner(activePlayer.idx);

    // Update 3D Base Yard Active Turn Blinking Glow
    if (this.boardBuilder && this.boardBuilder.setActivePlayerTurn) {
      this.boardBuilder.setActivePlayerTurn(activePlayer.idx);
    }

    // Update HUD
    this.uiManager.hud.clearRollResultBadge();
    this.uiManager.hud.updatePlayerTurn(activePlayer);
    this.startTurnTimer();

    // Enable dice button for human, or trigger AI roll
    if (activePlayer.isAI) {
      this.dice3D.setClickable(false);
      setTimeout(() => {
        if (this.currentState === GAME_STATES.IDLE) return;
        this.handleRollDice();
      }, 450);
    } else {
      this.dice3D.setClickable(true);
      this.uiManager.hud.setRollButtonEnabled(true);
    }
  }

  startTurnTimer() {
    this.stopTurnTimer();
    this.turnTimeRemaining = 15;
    this.uiManager.hud.updateTimer(this.turnTimeRemaining);

    this.turnTimer = setInterval(() => {
      this.turnTimeRemaining--;
      this.uiManager.hud.updateTimer(this.turnTimeRemaining);

      if (this.turnTimeRemaining <= 0) {
        this.stopTurnTimer();
        this.handleTurnTimeout();
      }
    }, 1000);
  }

  stopTurnTimer() {
    if (this.turnTimer) {
      clearInterval(this.turnTimer);
      this.turnTimer = null;
    }
  }

  handleTurnTimeout() {
    const activePlayer = this.playerManager.getActivePlayer();
    if (this.currentState === GAME_STATES.WAITING_FOR_ROLL) {
      // Auto roll on timeout
      this.handleRollDice();
    } else if (this.currentState === GAME_STATES.SELECTING_TOKEN && this.validTokens.length > 0) {
      // Auto pick first valid token
      this.tokenManager.setSelectableTokens(activePlayer.idx, this.validTokens);
      const autoToken = this.tokenManager.getToken(activePlayer.idx, this.validTokens[0]);
      this.handleTokenSelected(autoToken);
    }
  }

  handleRollDice() {
    if (this.currentState !== GAME_STATES.WAITING_FOR_ROLL) return;
    this.currentState = GAME_STATES.ROLLING;
    this.uiManager.hud.setRollButtonEnabled(false);

    const activePlayer = this.playerManager.getActivePlayer();

    this.dicePhysics.roll(null, (rollResult) => {
      if (this.currentState === GAME_STATES.IDLE) return;
      this.lastRollValue = Number(rollResult);
      this.uiManager.hud.showRollResultBadge(rollResult);

      if (this.gameMode === 'online_room' && activePlayer.idx === networkManager.myPlayerIndex) {
        networkManager.sendDiceRoll(this.lastRollValue, activePlayer.color);
      }

      if (this.lastRollValue === 6) {
        soundManager.playSixJingle();
        this.consecutiveSixes++;
        if (this.consecutiveSixes >= 3) {
          // Penalty: 3 consecutive 6s forfeits turn
          this.uiManager.showToast('3 Consecutive Sixes! Turn Forfeited', 'warning');
          this.consecutiveSixes = 0;
          setTimeout(() => {
            if (this.currentState === GAME_STATES.IDLE) return;
            this.endTurn();
          }, 400);
          return;
        }
      } else {
        this.consecutiveSixes = 0;
      }

      this.evaluateTurnMoves();
    });
  }

  evaluateTurnMoves() {
    const activePlayer = this.playerManager.getActivePlayer();
    const playerTokens = this.tokenManager.playerTokens[activePlayer.idx];

    // 🐍 Snake Ludu: each player has only 1 token (token 0), always movable
    if (this.gameMode === 'snake_ludu') {
      const token = this.tokenManager.getToken(activePlayer.idx, 0);
      if (!token || token.isFinished) {
        setTimeout(() => {
          if (this.currentState === GAME_STATES.IDLE) return;
          this.endTurn();
        }, 400);
        return;
      }
      const currentCell = token.trackIndex < 1 ? 0 : token.trackIndex;
      if (currentCell + this.lastRollValue > 100) {
        this.uiManager.showToast(`Need exact roll to reach 100!`, 'info');
        setTimeout(() => {
          if (this.currentState === GAME_STATES.IDLE) return;
          this.endTurn();
        }, 400);
        return;
      }
      this.validTokens = [0];
      this.currentState = GAME_STATES.SELECTING_TOKEN;
      this.tokenManager.setSelectableTokens(activePlayer.idx, [0]);
      // Auto-select single token
      setTimeout(() => {
        if (this.currentState === GAME_STATES.IDLE) return;
        this.handleTokenSelected(token);
      }, 200);
      return;
    }

    this.validTokens = LudoRules.getValidMoveTokens(activePlayer.idx, playerTokens, this.lastRollValue);

    if (this.validTokens.length === 0) {
      // No valid moves available
      this.uiManager.showToast(`No moves for ${activePlayer.name}`, 'info');
      setTimeout(() => {
        if (this.currentState === GAME_STATES.IDLE) return;
        this.endTurn();
      }, 400);
      return;
    }

    this.currentState = GAME_STATES.SELECTING_TOKEN;
    // Set valid tokens selectable for both AI and Human to guarantee move authorization
    this.tokenManager.setSelectableTokens(activePlayer.idx, this.validTokens);

    if (activePlayer.isAI) {
      // AI chooses best move
      const chosenTokenIdx = AIPlayer.selectBestMove(
        activePlayer.idx,
        this.validTokens,
        playerTokens,
        this.tokenManager.tokens,
        this.lastRollValue,
        activePlayer.aiDifficulty
      );
      const chosenToken = this.tokenManager.getToken(activePlayer.idx, chosenTokenIdx);
      setTimeout(() => {
        if (this.currentState === GAME_STATES.IDLE) return;
        this.handleTokenSelected(chosenToken);
      }, 350);
    } else {
      // Highlight valid pawns for human selection
      // Check if all valid tokens are in base yard (all equivalent yard choices)
      const allValidInYard = this.validTokens.every(idx => {
        const t = playerTokens[idx];
        return t && t.trackIndex === -1 && t.homeStepIndex === -1;
      });

      if (this.validTokens.length === 1 || allValidInYard) {
        // Auto-select if only 1 choice available or all choices are identical yard tokens
        const autoTokenIdx = this.validTokens[0];
        const autoToken = this.tokenManager.getToken(activePlayer.idx, autoTokenIdx);
        setTimeout(() => {
          if (this.currentState === GAME_STATES.IDLE) return;
          this.handleTokenSelected(autoToken);
        }, 150);
      }
    }
  }

  handleTokenSelected(token) {
    if (this.currentState !== GAME_STATES.SELECTING_TOKEN || !token) return;
    if (this.gameMode !== 'snake_ludu' && !token.isSelectable && !this.validTokens.includes(token.tokenIdx)) return;

    this.stopTurnTimer();
    this.currentState = GAME_STATES.MOVING_TOKEN;
    this.tokenManager.clearSelectableTokens();

    // 🐍 SNAKE & LADDER (Snake Ludu) Special Mode Handler
    if (this.gameMode === 'snake_ludu') {
      const currentCell = token.trackIndex < 1 ? 1 : token.trackIndex;
      const targetCell = Math.min(100, currentCell + this.lastRollValue);
      const pathPoints = [];

      for (let cell = currentCell + 1; cell <= targetCell; cell++) {
        pathPoints.push(getSnakeLadderWorldPosition(cell));
      }

      this.cameraManager.zoomInAction(token.meshGroup.position);
      this.tokenManager.pathAnimator.animatePath(token, pathPoints, () => {
        if (this.currentState === GAME_STATES.IDLE) return;
        token.trackIndex = targetCell;
        this.cameraManager.zoomOutReset();

        // Check Snakes 🐍 & Ladders 🪜
        if (SNAKES[targetCell]) {
          const snakeTail = SNAKES[targetCell];
          soundManager.playCapture();
          this.uiManager.showToast(`Bitten by a Snake! 🐍 (${targetCell} ➔ ${snakeTail})`, 'warning');
          token.trackIndex = snakeTail;
          const tailPos = getSnakeLadderWorldPosition(snakeTail);
          this.tokenManager.pathAnimator.animateCapture(token, tailPos, () => {
            if (this.currentState === GAME_STATES.IDLE) return;
            this.endTurn();
          });
          return;
        } else if (LADDERS[targetCell]) {
          const ladderTop = LADDERS[targetCell];
          soundManager.playVictory();
          this.uiManager.showToast(`Climbed a Ladder! 🪜 (${targetCell} ➔ ${ladderTop})`, 'success');
          token.trackIndex = ladderTop;
          const topPos = getSnakeLadderWorldPosition(ladderTop);
          this.tokenManager.pathAnimator.animatePath(token, [topPos], () => {
            if (this.currentState === GAME_STATES.IDLE) return;
            this.endTurn();
          });
          return;
        }

        if (targetCell === 100) {
          token.isFinished = true;
          soundManager.playVictory();
          this.uiManager.showToast(`${this.playerManager.getActivePlayer().name} won Snake Ludu! 🎉`, 'success');
          this.handleGameOver();
          return;
        }

        this.endTurn();
      });
      return;
    }

    const helpers = {
      getTrackWorldPosition,
      getHomeStretchWorldPosition,
      BASE_YARD_POSITIONS
    };

    const moveData = LudoRules.calculateMovePath(token, this.lastRollValue, helpers);
    if (!moveData) {
      this.endTurn();
      return;
    }

    // Dynamic camera zoom-in during pawn move
    this.cameraManager.zoomInAction(token.meshGroup.position);

    // Animate pawn path movement step-by-step
    this.tokenManager.pathAnimator.animatePath(token, moveData.pathPoints, () => {
      if (this.currentState === GAME_STATES.IDLE) return;
      // Update token state variables
      token.trackIndex = moveData.newTrackIndex;
      token.homeStepIndex = moveData.newHomeStepIndex;
      token.isFinished = moveData.isFinished;

      if (moveData.pathPoints && moveData.pathPoints.length > 0) {
        token.setPosition(moveData.pathPoints[moveData.pathPoints.length - 1]);
      }

      // Update stacked token spatial positions
      this.tokenManager.updateStackedTokenPositions();

      // Reset camera zoom
      this.cameraManager.zoomOutReset();

      this.processMoveConsequences(token, moveData);
    });
  }

  processMoveConsequences(token, moveData) {
    const activePlayer = this.playerManager.getActivePlayer();
    let grantExtraTurn = (this.lastRollValue === 6);

    // 1. Check Pawn Reaching Center Home
    if (moveData.isFinished) {
      grantExtraTurn = true;
      activePlayer.finishedCount++;
      soundManager.playVictory();
      this.particleSystem.spawnSparkles(token.meshGroup.position);
      this.uiManager.showToast(`${activePlayer.name}'s token reached Home!`, 'success');

      if (activePlayer.finishedCount === 4) {
        const rank = this.playerManager.registerPlayerFinished(activePlayer.idx);
        if (this.playerManager.isGameOver()) {
          this.handleGameOver();
          return;
        }
      }
    }

    // 2. Check Capture of Opponent Pawn
    const victimToken = LudoRules.checkForCapture(token, moveData.newTrackIndex, this.tokenManager.tokens);
    if (victimToken) {
      grantExtraTurn = true;
      const basePos = BASE_YARD_POSITIONS[victimToken.playerIdx][victimToken.tokenIdx];

      // Reset victim token state
      victimToken.trackIndex = -1;
      victimToken.homeStepIndex = -1;

      this.particleSystem.spawnCaptureBurst(token.meshGroup.position);
      this.uiManager.showToast(`Captured ${this.playerManager.players[victimToken.playerIdx].name}'s pawn!`, 'capture');

      this.tokenManager.pathAnimator.animateCapture(token, victimToken, basePos, () => {
        if (this.currentState === GAME_STATES.IDLE) return;
        if (grantExtraTurn) {
          this.uiManager.showToast('Extra Turn Granted!', 'success');
          this.beginTurn();
        } else {
          this.endTurn();
        }
      });
      return;
    }

    if (grantExtraTurn && activePlayer.finishedCount < 4) {
      this.uiManager.showToast('Extra Turn Granted!', 'success');
      this.beginTurn();
    } else {
      this.endTurn();
    }
  }

  endTurn() {
    if (this.currentState === GAME_STATES.IDLE) return;
    this.stopTurnTimer();
    this.tokenManager.clearSelectableTokens();
    this.playerManager.nextTurn();
    this.beginTurn();
  }

  handleGameOver() {
    this.stopTurnTimer();
    this.currentState = GAME_STATES.GAME_OVER;
    this.fireworks.startFireworks();

    soundManager.playVictory();
    setTimeout(() => {
      if (this.currentState === GAME_STATES.IDLE) return;
      this.uiManager.showVictoryModal(this.playerManager.rankings, this.playerManager.players);
    }, 1500);
  }
}

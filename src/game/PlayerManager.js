import { PLAYER_COLORS } from '../board/BoardCoordinates.js';

/**
 * Player State & Session Manager (2P, 3P, 4P modes, AI vs Human)
 */
export class PlayerManager {
  constructor() {
    this.playerCount = 4; // 2, 3, 4
    this.activePlayerIdx = 0;
    this.players = [];
    this.rankings = []; // Finished players in order [1st, 2nd, 3rd, 4th]
  }

  setupPlayers(mode = 'vs_ai', count = 4, aiDifficulty = 'Medium', userProfile = null) {
    this.playerCount = count;
    this.rankings = [];
    this.activePlayerIdx = 0;
    this.players = [];

    const defaultNames = ['Red Commander', 'Green Bot', 'Yellow Bot', 'Blue Bot'];
    const defaultAvatars = ['👑', '🤖', '🦊', '⚡'];

    // Map player active slots based on count:
    // 2 Players: Red (0) & Yellow (2)
    // 3 Players: Red (0), Green (1), Yellow (2)
    // 4 Players: Red (0), Green (1), Yellow (2), Blue (3)
    const activeSlots = count === 2 ? [0, 2] : count === 3 ? [0, 1, 2] : [0, 1, 2, 3];

    [0, 1, 2, 3].forEach(idx => {
      const isActiveSlot = activeSlots.includes(idx);
      let isAI = true;
      let name = defaultNames[idx];
      let avatar = defaultAvatars[idx];

      if (idx === 0) {
        // Player 0 is always human user
        isAI = false;
        if (userProfile) {
          name = userProfile.name || 'Player 1';
          avatar = userProfile.avatar || '👑';
        }
      } else if (mode === 'pass_play') {
        isAI = false;
        name = `Player ${idx + 1}`;
        avatar = ['🔴', '🟢', '🟡', '🔵'][idx];
      } else if (mode === 'online_room') {
        isAI = false;
        name = `Online Player ${idx + 1}`;
        avatar = ['🔴', '🟢', '🟡', '🔵'][idx];
      } else if (mode === 'snake_ludu') {
        isAI = false;
        name = `Player ${idx + 1}`;
        avatar = ['🔴', '🟢', '🟡', '🔵'][idx];
      }

      this.players.push({
        idx,
        color: PLAYER_COLORS[idx],
        name,
        avatar,
        isAI,
        isActiveSlot,
        aiDifficulty,
        finishedCount: 0,
        rank: null
      });
    });
  }

  getActivePlayer() {
    return this.players[this.activePlayerIdx];
  }

  nextTurn() {
    const activeSlots = this.playerCount === 2 ? [0, 2] : this.playerCount === 3 ? [0, 1, 2] : [0, 1, 2, 3];

    let attempts = 0;
    do {
      this.activePlayerIdx = (this.activePlayerIdx + 1) % 4;
      attempts++;
    } while (
      (!activeSlots.includes(this.activePlayerIdx) || this.players[this.activePlayerIdx].rank !== null) &&
      attempts < 10
    );

    return this.getActivePlayer();
  }

  registerPlayerFinished(playerIdx) {
    const p = this.players[playerIdx];
    if (p.rank === null) {
      this.rankings.push(playerIdx);
      p.rank = this.rankings.length;
    }
    return p.rank;
  }

  isGameOver() {
    const activeSlots = this.playerCount === 2 ? [0, 2] : this.playerCount === 3 ? [0, 1, 2] : [0, 1, 2, 3];
    const unfinishedPlayers = activeSlots.filter(idx => this.players[idx].rank === null);
    return unfinishedPlayers.length <= 1; // Game ends when 1 or 0 players remain
  }
}

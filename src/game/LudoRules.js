import {
  SAFE_TRACK_INDEXES,
  PLAYER_START_TRACK_INDEX,
  TRACK_STEPS_BEFORE_HOME
} from '../board/BoardCoordinates.js';

/**
 * Official Standard Ludo Rule Verification Engine
 */
export class LudoRules {
  /**
   * Calculates path of 3D cell points for a pawn moving `diceValue` steps
   * Returns: { pathPoints: Vector3[], newTrackIndex: number, newHomeStepIndex: number, isFinished: boolean }
   */
  static calculateMovePath(token, diceValue, boardCoordinatesHelpers) {
    const { getTrackWorldPosition, getHomeStretchWorldPosition, BASE_YARD_POSITIONS } = boardCoordinatesHelpers;
    const playerIdx = token.playerIdx;
    const pathPoints = [];
    const roll = Number(diceValue);

    let currentTrackIdx = token.trackIndex;
    let currentHomeStep = token.homeStepIndex;

    // CASE 1: Pawn in Base Yard -> Must roll 6 to exit to start cell
    if (currentTrackIdx === -1 && currentHomeStep === -1) {
      if (roll === 6) {
        const startTrackIdx = PLAYER_START_TRACK_INDEX[playerIdx];
        pathPoints.push(getTrackWorldPosition(startTrackIdx));
        return {
          pathPoints,
          newTrackIndex: startTrackIdx,
          newHomeStepIndex: -1,
          isFinished: false
        };
      }
      return null; // Invalid move
    }

    // CASE 2: Pawn currently in Home Stretch (0..4 leading to center 5)
    if (currentHomeStep >= 0) {
      if (currentHomeStep + roll > 5) {
        return null; // Cannot overshoot central home
      }

      for (let s = 1; s <= roll; s++) {
        pathPoints.push(getHomeStretchWorldPosition(playerIdx, currentHomeStep + s));
      }

      const nextHomeStep = currentHomeStep + roll;
      return {
        pathPoints,
        newTrackIndex: -1,
        newHomeStepIndex: nextHomeStep,
        isFinished: nextHomeStep === 5
      };
    }

    // CASE 3: Pawn currently on Outer Track (0..51)
    const playerStartIdx = PLAYER_START_TRACK_INDEX[playerIdx];
    // Calculate total steps taken on track so far
    let stepsTaken = (currentTrackIdx - playerStartIdx + 52) % 52;

    let targetTrackIdx = currentTrackIdx;
    let targetHomeStep = -1;

    for (let step = 1; step <= roll; step++) {
      stepsTaken++;

      if (stepsTaken > TRACK_STEPS_BEFORE_HOME) {
        // Turning into Home Stretch
        const stretchStep = stepsTaken - TRACK_STEPS_BEFORE_HOME - 1;
        if (stretchStep > 5) {
          return null; // Exceeds exact home target count
        }
        targetTrackIdx = -1;
        targetHomeStep = stretchStep;
        pathPoints.push(getHomeStretchWorldPosition(playerIdx, stretchStep));
      } else {
        // Advancing along 52-cell track
        targetTrackIdx = (currentTrackIdx + step) % 52;
        pathPoints.push(getTrackWorldPosition(targetTrackIdx));
      }
    }

    return {
      pathPoints,
      newTrackIndex: targetTrackIdx,
      newHomeStepIndex: targetHomeStep,
      isFinished: targetHomeStep === 5
    };
  }

  /**
   * Check if pawn lands on an enemy pawn to trigger a capture
   * Returns: capturedToken instance or null
   */
  static checkForCapture(movingToken, newTrackIdx, allTokensMap) {
    // Captures can ONLY occur on outer track cells that are NOT safe stars
    if (newTrackIdx < 0 || SAFE_TRACK_INDEXES.includes(newTrackIdx)) {
      return null;
    }

    let enemyToken = null;

    Object.values(allTokensMap).forEach(token => {
      if (
        token.playerIdx !== movingToken.playerIdx &&
        token.trackIndex === newTrackIdx &&
        !token.isFinished
      ) {
        enemyToken = token;
      }
    });

    return enemyToken;
  }

  /**
   * Evaluates all playable token indexes for player given dice roll
   */
  static getValidMoveTokens(playerIdx, playerTokens, diceValue) {
    const validIndexes = [];
    const roll = Number(diceValue);

    playerTokens.forEach((token, idx) => {
      if (token.isFinished) return;

      // Pawn in base yard requires 6
      if (token.trackIndex === -1 && token.homeStepIndex === -1) {
        if (roll === 6) validIndexes.push(idx);
        return;
      }

      // Pawn in home stretch
      if (token.homeStepIndex >= 0) {
        if (token.homeStepIndex + roll <= 5) validIndexes.push(idx);
        return;
      }

      // Pawn on track
      const startIdx = PLAYER_START_TRACK_INDEX[playerIdx];
      const stepsTaken = (token.trackIndex - startIdx + 52) % 52;
      if (stepsTaken + roll <= TRACK_STEPS_BEFORE_HOME + 6) {
        validIndexes.push(idx);
      }
    });

    return validIndexes;
  }
}

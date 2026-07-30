import { LudoRules } from './LudoRules.js';
import { SAFE_TRACK_INDEXES, PLAYER_START_TRACK_INDEX } from '../board/BoardCoordinates.js';

/**
 * Intelligent AI Decision Algorithm with Easy, Medium, and Hard Difficulty
 */
export class AIPlayer {
  /**
   * Selects best token index to move for AI player
   */
  static selectBestMove(playerIdx, validTokenIndexes, playerTokens, allTokensMap, diceValue, difficulty = 'Medium') {
    if (!validTokenIndexes || validTokenIndexes.length === 0) return null;
    if (validTokenIndexes.length === 1) return validTokenIndexes[0];
    const roll = Number(diceValue);

    // EASY DIFFICULTY: Random pick
    if (difficulty === 'Easy') {
      const randIdx = Math.floor(Math.random() * validTokenIndexes.length);
      return validTokenIndexes[randIdx];
    }

    // MEDIUM / HARD DIFFICULTY: Heuristic evaluation matrix
    let bestTokenIdx = validTokenIndexes[0];
    let maxScore = -Infinity;

    validTokenIndexes.forEach(tokenIdx => {
      const token = playerTokens[tokenIdx];
      let score = 0;

      // 1. Exiting base on 6 (high score if no tokens on track yet)
      if (token.trackIndex === -1 && token.homeStepIndex === -1 && roll === 6) {
        const tokensOnTrack = playerTokens.filter(t => t && (t.trackIndex >= 0 || t.homeStepIndex >= 0));
        score += tokensOnTrack.length === 0 ? 120 : 60;
      }

      // 2. Evaluate target position
      if (token.trackIndex >= 0) {
        const startIdx = PLAYER_START_TRACK_INDEX[playerIdx];
        const currentSteps = (token.trackIndex - startIdx + 52) % 52;
        const targetSteps = currentSteps + roll;

        // Reaching center home
        if (token.homeStepIndex + diceValue === 6) {
          score += 150;
        }

        // Entering home stretch
        if (currentSteps < 51 && targetSteps >= 51) {
          score += 80;
        }

        // Target track index
        const targetTrackIdx = (token.trackIndex + diceValue) % 52;

        // Capturing enemy token
        const captureVictim = LudoRules.checkForCapture(token, targetTrackIdx, allTokensMap);
        if (captureVictim) {
          score += (difficulty === 'Hard') ? 200 : 120;
        }

        // Landing on safe star cell
        if (SAFE_TRACK_INDEXES.includes(targetTrackIdx)) {
          score += 50;
        }

        // Hard AI: Distance to home weight (prioritize tokens closer to home)
        if (difficulty === 'Hard') {
          score += currentSteps * 2;
        }
      }

      if (score > maxScore) {
        maxScore = score;
        bestTokenIdx = tokenIdx;
      }
    });

    return bestTokenIdx;
  }
}

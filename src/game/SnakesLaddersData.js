import * as THREE from 'three';
import { CELL_SIZE } from '../board/BoardCoordinates.js';

/**
 * Snake & Ladder (Snake Ludu) Board Configuration & Positional Mappings
 */

// 🐍 Snakes: Head -> Tail
export const SNAKES = {
  98: 28,
  95: 56,
  88: 24,
  64: 18,
  52: 11,
  48: 26,
  36: 6,
  16: 3
};

// 🪜 Ladders: Bottom -> Top
export const LADDERS = {
  4: 25,
  13: 46,
  33: 70,
  42: 63,
  50: 69,
  62: 81,
  74: 92
};

/**
 * Calculates 3D World Position for 1-100 Grid Cell on Snake & Ladder Board
 * 10x10 serpentine grid layout
 */
export function getSnakeLadderWorldPosition(cellNum, yOffset = 0.22) {
  if (cellNum < 1) cellNum = 1;
  if (cellNum > 100) cellNum = 100;

  const zeroIndex = cellNum - 1;
  const row = Math.floor(zeroIndex / 10); // 0 to 9
  let col = zeroIndex % 10;

  // Serpentine layout: odd rows go right-to-left
  if (row % 2 === 1) {
    col = 9 - col;
  }

  // Centered 10x10 board coordinates
  const startX = -4.5 * CELL_SIZE;
  const startZ = 4.5 * CELL_SIZE;

  const x = startX + col * CELL_SIZE;
  const z = startZ - row * CELL_SIZE;

  return new THREE.Vector3(x, yOffset, z);
}

import * as THREE from 'three';

/**
 * Precision 3D Grid Mapping for Classic Standard Ludo Board
 * Matches exact classic board layout:
 * - Top-Left: RED (0)
 * - Top-Right: GREEN (1)
 * - Bottom-Right: YELLOW (2)
 * - Bottom-Left: BLUE (3)
 */

export const CELL_SIZE = 0.85;
export const BOARD_Y = 0.2;

export const PLAYER_COLORS = {
  0: { name: 'Red', hex: 0xef4444, css: '#ef4444', label: 'RED' },
  1: { name: 'Green', hex: 0x22c55e, css: '#22c55e', label: 'GREEN' },
  2: { name: 'Yellow', hex: 0xfacc15, css: '#facc15', label: 'YELLOW' },
  3: { name: 'Blue', hex: 0x2563eb, css: '#2563eb', label: 'BLUE' }
};

export const SAFE_TRACK_INDEXES = [0, 8, 13, 21, 26, 34, 39, 47];

export function getGridWorldPosition(col, row, yOffset = BOARD_Y) {
  const x = (col - 7) * CELL_SIZE;
  const z = (row - 7) * CELL_SIZE;
  return new THREE.Vector3(x, yOffset, z);
}

/**
 * 4 Base Yard Star Placement Centers matching the image
 */
export const BASE_YARD_POSITIONS = {
  0: [ // RED - Top Left (center 2.5, 2.5)
    getGridWorldPosition(1.5, 1.5, BOARD_Y + 0.05),
    getGridWorldPosition(3.5, 1.5, BOARD_Y + 0.05),
    getGridWorldPosition(1.5, 3.5, BOARD_Y + 0.05),
    getGridWorldPosition(3.5, 3.5, BOARD_Y + 0.05)
  ],
  1: [ // GREEN - Top Right (center 11.5, 2.5)
    getGridWorldPosition(10.5, 1.5, BOARD_Y + 0.05),
    getGridWorldPosition(12.5, 1.5, BOARD_Y + 0.05),
    getGridWorldPosition(10.5, 3.5, BOARD_Y + 0.05),
    getGridWorldPosition(12.5, 3.5, BOARD_Y + 0.05)
  ],
  2: [ // YELLOW - Bottom Right (center 11.5, 11.5)
    getGridWorldPosition(10.5, 10.5, BOARD_Y + 0.05),
    getGridWorldPosition(12.5, 10.5, BOARD_Y + 0.05),
    getGridWorldPosition(10.5, 12.5, BOARD_Y + 0.05),
    getGridWorldPosition(12.5, 12.5, BOARD_Y + 0.05)
  ],
  3: [ // BLUE - Bottom Left (center 2.5, 11.5)
    getGridWorldPosition(1.5, 10.5, BOARD_Y + 0.05),
    getGridWorldPosition(3.5, 10.5, BOARD_Y + 0.05),
    getGridWorldPosition(1.5, 12.5, BOARD_Y + 0.05),
    getGridWorldPosition(3.5, 12.5, BOARD_Y + 0.05)
  ]
};

/**
 * 52 Outer Track Grid Coordinates (col, row)
 */
export const TRACK_GRID_COORDS = [
  // 0..5: RED Starting track going RIGHT along row 6 (col 1 -> col 5)
  { col: 1, row: 6 }, { col: 2, row: 6 }, { col: 3, row: 6 }, { col: 4, row: 6 }, { col: 5, row: 6 },
  // 5..10: Going UP along col 6 (row 5 -> row 0)
  { col: 6, row: 5 }, { col: 6, row: 4 }, { col: 6, row: 3 }, { col: 6, row: 2 }, { col: 6, row: 1 }, { col: 6, row: 0 },
  // 11: Top center turn (col 7, row 0)
  { col: 7, row: 0 },
  // 12..17: GREEN Starting track going DOWN along col 8 (row 0 -> row 5)
  { col: 8, row: 0 }, { col: 8, row: 1 }, { col: 8, row: 2 }, { col: 8, row: 3 }, { col: 8, row: 4 }, { col: 8, row: 5 },
  // 18..23: Going RIGHT along row 6 (col 9 -> col 14)
  { col: 9, row: 6 }, { col: 10, row: 6 }, { col: 11, row: 6 }, { col: 12, row: 6 }, { col: 13, row: 6 }, { col: 14, row: 6 },
  // 24: Right center turn (col 14, row 7)
  { col: 14, row: 7 },
  // 25..30: YELLOW Starting track going LEFT along row 8 (col 14 -> col 9)
  { col: 14, row: 8 }, { col: 13, row: 8 }, { col: 12, row: 8 }, { col: 11, row: 8 }, { col: 10, row: 8 }, { col: 9, row: 8 },
  // 31..36: Going DOWN along col 8 (row 9 -> row 14)
  { col: 8, row: 9 }, { col: 8, row: 10 }, { col: 8, row: 11 }, { col: 8, row: 12 }, { col: 8, row: 13 }, { col: 8, row: 14 },
  // 37: Bottom center turn (col 7, row 14)
  { col: 7, row: 14 },
  // 38..43: BLUE Starting track going UP along col 6 (row 14 -> row 9)
  { col: 6, row: 14 }, { col: 6, row: 13 }, { col: 6, row: 12 }, { col: 6, row: 11 }, { col: 6, row: 10 }, { col: 6, row: 9 },
  // 44..49: Going LEFT along row 8 (col 5 -> col 0)
  { col: 5, row: 8 }, { col: 4, row: 8 }, { col: 3, row: 8 }, { col: 2, row: 8 }, { col: 1, row: 8 }, { col: 0, row: 8 },
  // 50..51: Turn left-center (col 0, row 7, col 0, row 6)
  { col: 0, row: 7 }, { col: 0, row: 6 }
];

/**
 * 6 Home Stretch grid coordinates for each player (5 colored path cells + 1 center home cell)
 */
export const HOME_STRETCH_GRID_COORDS = {
  0: [ // RED Stretch (Right along row 7: col 1..5, center 7)
    { col: 1, row: 7 }, { col: 2, row: 7 }, { col: 3, row: 7 }, { col: 4, row: 7 }, { col: 5, row: 7 }, { col: 7, row: 7 }
  ],
  1: [ // GREEN Stretch (Down along col 7: row 1..5, center 7)
    { col: 7, row: 1 }, { col: 7, row: 2 }, { col: 7, row: 3 }, { col: 7, row: 4 }, { col: 7, row: 5 }, { col: 7, row: 7 }
  ],
  2: [ // YELLOW Stretch (Left along row 7: col 13..9, center 7)
    { col: 13, row: 7 }, { col: 12, row: 7 }, { col: 11, row: 7 }, { col: 10, row: 7 }, { col: 9, row: 7 }, { col: 7, row: 7 }
  ],
  3: [ // BLUE Stretch (Up along col 7: row 13..9, center 7)
    { col: 7, row: 13 }, { col: 7, row: 12 }, { col: 7, row: 11 }, { col: 7, row: 10 }, { col: 7, row: 9 }, { col: 7, row: 7 }
  ]
};

export const PLAYER_START_TRACK_INDEX = {
  0: 0,   // RED start (col 1, row 6)
  1: 13,  // GREEN start (col 8, row 1)
  2: 26,  // YELLOW start (col 13, row 8)
  3: 39   // BLUE start (col 6, row 13)
};

export const TRACK_STEPS_BEFORE_HOME = 50;

export function getTrackWorldPosition(index) {
  const coord = TRACK_GRID_COORDS[index % 52];
  return getGridWorldPosition(coord.col, coord.row);
}

export function getHomeStretchWorldPosition(playerIdx, stepIdx) {
  const coords = HOME_STRETCH_GRID_COORDS[playerIdx];
  const clampedStep = Math.min(stepIdx, coords.length - 1);
  const coord = coords[clampedStep];
  return getGridWorldPosition(coord.col, coord.row);
}

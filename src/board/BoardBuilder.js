import * as THREE from 'three';
import { CELL_SIZE, getGridWorldPosition, SAFE_TRACK_INDEXES, TRACK_GRID_COORDS, PLAYER_COLORS } from './BoardCoordinates.js';

/**
 * Precision 3D Classic Ludo Board Builder matching official rules, classic 4-color triangles & safe stars
 */
export class BoardBuilder {
  constructor(scene) {
    this.scene = scene;
    this.boardGroup = new THREE.Group();
    this.boardGroup.name = 'LudoBoard3D';
    this.safeStars = [];

    this.yardGlowMaterials = {};
    this.activePlayerTurn = 0;

    this.createBoardMaterials();
    this.buildWoodenFrame();
    this.buildMarbleSurface();
    this.buildBaseYards();
    this.buildTrackCells();
    this.buildHomeStretchArrows();
    this.buildCenterTriangles();

    this.boardGroup.matrixAutoUpdate = false;
    this.boardGroup.updateMatrix();

    this.scene.add(this.boardGroup);
  }

  setActivePlayerTurn(playerIdx) {
    this.activePlayerTurn = playerIdx;
    [0, 1, 2, 3].forEach(idx => {
      const mat = this.yardGlowMaterials[idx];
      if (!mat) return;
      if (idx !== playerIdx) {
        mat.opacity = 0.0;
        mat.emissiveIntensity = 0.0;
      }
    });
  }

  update(time) {
    if (this.activePlayerTurn !== null && this.yardGlowMaterials[this.activePlayerTurn]) {
      const mat = this.yardGlowMaterials[this.activePlayerTurn];
      const pulse = Math.sin(time * 7) * 0.5 + 0.5;
      mat.opacity = 0.7 + pulse * 0.3;
      mat.emissiveIntensity = 0.8 + pulse * 2.4;
    }
  }

  setVisible(visible) {
    this.boardGroup.visible = visible;
  }

  createBoardMaterials() {
    this.woodMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e110a,
      roughness: 0.4,
      metalness: 0.1
    });

    this.marbleMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.05
    });

    // Outer Base Corner Backgrounds matching reference image (Warm Amber Gold & Sage Olive Green)
    this.cornerBgMaterials = {
      0: new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.3, metalness: 0.15 }), // Warm Amber Gold Top-Left
      1: new THREE.MeshStandardMaterial({ color: 0x65a30d, roughness: 0.3, metalness: 0.15 }), // Sage Olive Green Top-Right
      2: new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.3, metalness: 0.15 }), // Warm Amber Gold Bottom-Right
      3: new THREE.MeshStandardMaterial({ color: 0x65a30d, roughness: 0.3, metalness: 0.15 })  // Sage Olive Green Bottom-Left
    };

    // 4 Team Accent Materials for Rotated Diamond Plates
    this.playerMaterials = {
      0: new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.2, metalness: 0.25 }), // Red
      1: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.2, metalness: 0.25 }), // Green
      2: new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.2, metalness: 0.35 }), // Yellow
      3: new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.2, metalness: 0.25 })  // Blue
    };

    // 3D Raised Track Discs (Yellow Discs & Soft Blue Discs on Home Stretches)
    this.discYellowMaterial = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      emissive: 0xeab308,
      emissiveIntensity: 0.25,
      roughness: 0.15,
      metalness: 0.3
    });

    this.discBlueMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.25,
      roughness: 0.15,
      metalness: 0.3
    });

    this.goldTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.3,
      metalness: 0.85,
      roughness: 0.15
    });

    this.whiteTileMaterial = new THREE.MeshStandardMaterial({
      color: 0xfffbeb,
      roughness: 0.1,
      metalness: 0.05
    });

    this.whiteArrowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfde047,
      emissiveIntensity: 0.45,
      metalness: 0.6,
      roughness: 0.1
    });

    this.blackLineMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000
    });

    this.sharedBoxGeo = new THREE.BoxGeometry(CELL_SIZE - 0.04, 0.04, CELL_SIZE - 0.04);
  }

  buildWoodenFrame() {
    const frameSize = 15 * CELL_SIZE + 0.6;
    const frameThickness = 0.4;

    const frameGeo = new THREE.BoxGeometry(frameSize, frameThickness, frameSize);
    const frameMesh = new THREE.Mesh(frameGeo, this.woodMaterial);
    frameMesh.position.y = -frameThickness / 2;
    frameMesh.receiveShadow = true;
    frameMesh.matrixAutoUpdate = false;
    frameMesh.updateMatrix();
    this.boardGroup.add(frameMesh);
  }

  buildMarbleSurface() {
    const surfaceSize = 15 * CELL_SIZE;
    const surfaceGeo = new THREE.BoxGeometry(surfaceSize, 0.2, surfaceSize);
    const marbleMesh = new THREE.Mesh(surfaceGeo, this.marbleMaterial);
    marbleMesh.position.y = 0.1;
    marbleMesh.receiveShadow = true;
    marbleMesh.matrixAutoUpdate = false;
    marbleMesh.updateMatrix();
    this.boardGroup.add(marbleMesh);
  }

  buildBaseYards() {
    // 4 Base Yards: Red=Top-Left, Green=Top-Right, Yellow=Bottom-Right, Blue=Bottom-Left
    const baseOffsets = [
      { col: 2.5, row: 2.5, playerIdx: 0 },   // RED Top-Left
      { col: 11.5, row: 2.5, playerIdx: 1 },  // GREEN Top-Right
      { col: 11.5, row: 11.5, playerIdx: 2 }, // YELLOW Bottom-Right
      { col: 2.5, row: 11.5, playerIdx: 3 }   // BLUE Bottom-Left
    ];

    baseOffsets.forEach(({ col, row, playerIdx }) => {
      const pos = getGridWorldPosition(col, row, 0.21);
      const yardSize = 6 * CELL_SIZE;

      // Outer Glowing Blinking Light Frame around active turn yard
      const borderFrameSize = yardSize + 0.18;
      const borderGeo = new THREE.BoxGeometry(borderFrameSize, 0.08, borderFrameSize);
      const glowMat = new THREE.MeshStandardMaterial({
        color: PLAYER_COLORS[playerIdx].hex,
        emissive: PLAYER_COLORS[playerIdx].hex,
        emissiveIntensity: playerIdx === 0 ? 1.5 : 0.0,
        transparent: true,
        opacity: playerIdx === 0 ? 0.9 : 0.0,
        roughness: 0.1,
        metalness: 0.8
      });
      const glowMesh = new THREE.Mesh(borderGeo, glowMat);
      glowMesh.position.set(pos.x, pos.y - 0.005, pos.z);
      glowMesh.matrixAutoUpdate = false;
      glowMesh.updateMatrix();
      this.boardGroup.add(glowMesh);
      this.yardGlowMaterials[playerIdx] = glowMat;

      // 1. Outer Base Corner Background Block (Warm Amber / Olive Green matching reference image)
      const yardGeo = new THREE.BoxGeometry(yardSize, 0.05, yardSize);
      const yardMesh = new THREE.Mesh(yardGeo, this.cornerBgMaterials[playerIdx]);
      yardMesh.position.copy(pos);
      yardMesh.receiveShadow = true;
      yardMesh.matrixAutoUpdate = false;
      yardMesh.updateMatrix();
      this.boardGroup.add(yardMesh);

      // 2. Rotated 45-Degree Diamond Outer Border Frame
      const outerDiamondSize = 4.3 * CELL_SIZE;
      const outerDiamondGeo = new THREE.BoxGeometry(outerDiamondSize, 0.062, outerDiamondSize);
      const outerDiamondMesh = new THREE.Mesh(outerDiamondGeo, this.goldTrimMaterial);
      outerDiamondMesh.position.set(pos.x, pos.y + 0.008, pos.z);
      outerDiamondMesh.rotation.y = Math.PI / 4;
      outerDiamondMesh.matrixAutoUpdate = false;
      outerDiamondMesh.updateMatrix();
      this.boardGroup.add(outerDiamondMesh);

      // 3. Rotated 45-Degree Diamond Base Plate (45° Rotated Team Colored Diamond!)
      const diamondSize = 4.15 * CELL_SIZE;
      const diamondGeo = new THREE.BoxGeometry(diamondSize, 0.065, diamondSize);
      const diamondMesh = new THREE.Mesh(diamondGeo, this.playerMaterials[playerIdx]);
      diamondMesh.position.set(pos.x, pos.y + 0.012, pos.z);
      diamondMesh.rotation.y = Math.PI / 4;
      diamondMesh.receiveShadow = true;
      diamondMesh.matrixAutoUpdate = false;
      diamondMesh.updateMatrix();
      this.boardGroup.add(diamondMesh);

      // 4. Inner Cream Diamond Grid Partition Accent
      const innerDiamondSize = 3.8 * CELL_SIZE;
      const innerDiamondGeo = new THREE.BoxGeometry(innerDiamondSize, 0.07, innerDiamondSize);
      const innerDiamondMesh = new THREE.Mesh(innerDiamondGeo, this.whiteTileMaterial);
      innerDiamondMesh.position.set(pos.x, pos.y + 0.015, pos.z);
      innerDiamondMesh.rotation.y = Math.PI / 4;
      innerDiamondMesh.matrixAutoUpdate = false;
      innerDiamondMesh.updateMatrix();
      this.boardGroup.add(innerDiamondMesh);

      // 5. Core Colored Diamond Surface
      const coreDiamondSize = 3.65 * CELL_SIZE;
      const coreDiamondGeo = new THREE.BoxGeometry(coreDiamondSize, 0.075, coreDiamondSize);
      const coreDiamondMesh = new THREE.Mesh(coreDiamondGeo, this.playerMaterials[playerIdx]);
      coreDiamondMesh.position.set(pos.x, pos.y + 0.018, pos.z);
      coreDiamondMesh.rotation.y = Math.PI / 4;
      coreDiamondMesh.matrixAutoUpdate = false;
      coreDiamondMesh.updateMatrix();
      this.boardGroup.add(coreDiamondMesh);

      // 4 Circular Cream Pawn Standing Spots inside rotated diamond
      const pawnOffsetCoords = [
        { c: col - 1, r: row - 1 },
        { c: col + 1, r: row - 1 },
        { c: col - 1, r: row + 1 },
        { c: col + 1, r: row + 1 }
      ];

      pawnOffsetCoords.forEach(offset => {
        const starPos = getGridWorldPosition(offset.c, offset.r, 0.24);
        this.addBaseStarBadge(starPos, this.playerMaterials[playerIdx]);
      });
    });
  }

  addBaseStarBadge(worldPos, material) {
    const starGroup = new THREE.Group();
    starGroup.position.set(worldPos.x, worldPos.y + 0.02, worldPos.z);

    // 1. White/Cream Circular Standing Disc matching reference image
    const padGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.03, 32);
    const padMat = new THREE.MeshStandardMaterial({
      color: 0xfffbeb,
      roughness: 0.15,
      metalness: 0.05
    });
    const padMesh = new THREE.Mesh(padGeo, padMat);
    padMesh.receiveShadow = true;
    starGroup.add(padMesh);

    // 2. Outer Black Line Border Ring
    const ringGeo = new THREE.TorusGeometry(0.34, 0.02, 12, 32);
    const ringMesh = new THREE.Mesh(ringGeo, this.blackLineMaterial);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0.016;
    starGroup.add(ringMesh);

    // 3. Inner Gold Accent Ring
    const goldRingGeo = new THREE.TorusGeometry(0.24, 0.015, 12, 32);
    const goldRingMesh = new THREE.Mesh(goldRingGeo, this.goldTrimMaterial);
    goldRingMesh.rotation.x = Math.PI / 2;
    goldRingMesh.position.y = 0.018;
    starGroup.add(goldRingMesh);

    starGroup.matrixAutoUpdate = false;
    starGroup.updateMatrix();
    this.boardGroup.add(starGroup);
  }

  buildTrackCells() {
    TRACK_GRID_COORDS.forEach((coord, idx) => {
      const pos = getGridWorldPosition(coord.col, coord.row, 0.21);

      let mat = this.whiteTileMaterial;

      // Color starting track entry cells
      if (idx === 0) mat = this.playerMaterials[0];   // Red Start (col 1, row 6)
      else if (idx === 13) mat = this.playerMaterials[1]; // Green Start (col 8, row 1)
      else if (idx === 26) mat = this.playerMaterials[2]; // Yellow Start (col 13, row 8)
      else if (idx === 39) mat = this.playerMaterials[3]; // Blue Start (col 6, row 13)

      const cellMesh = new THREE.Mesh(this.sharedBoxGeo, mat);
      cellMesh.position.copy(pos);
      cellMesh.receiveShadow = true;
      cellMesh.matrixAutoUpdate = false;
      cellMesh.updateMatrix();
      this.boardGroup.add(cellMesh);

      // Add Grid Outline Border Line
      this.addGridBorder(pos);

      // Add Safe Zone 3D Star Badge for safe track indexes
      if (SAFE_TRACK_INDEXES.includes(idx)) {
        let starMat = this.whiteTileMaterial;
        if (idx === 0) starMat = this.playerMaterials[0];
        else if (idx === 13) starMat = this.playerMaterials[1];
        else if (idx === 26) starMat = this.playerMaterials[2];
        else if (idx === 39) starMat = this.playerMaterials[3];
        else {
          starMat = this.goldTrimMaterial;
        }
        this.addBaseStarBadge(pos, starMat);
      }
    });

    // Build 5 Colored Home Column Cells for each player with 3D Track Discs matching reference image
    [0, 1, 2, 3].forEach(playerIdx => {
      for (let step = 0; step < 5; step++) {
        let col = 7, row = 7;
        if (playerIdx === 0) col = 1 + step;        // Red Stretch (Right)
        else if (playerIdx === 1) row = 1 + step;   // Green Stretch (Down)
        else if (playerIdx === 2) col = 13 - step;  // Yellow Stretch (Left)
        else if (playerIdx === 3) row = 13 - step;  // Blue Stretch (Up)

        const pos = getGridWorldPosition(col, row, 0.22);

        // Home Stretch Grid Tile Box
        const stretchMesh = new THREE.Mesh(this.sharedBoxGeo, this.playerMaterials[playerIdx]);
        stretchMesh.position.copy(pos);
        stretchMesh.receiveShadow = true;
        stretchMesh.matrixAutoUpdate = false;
        stretchMesh.updateMatrix();
        this.boardGroup.add(stretchMesh);

        this.addGridBorder(pos);

        // 3D Raised Circular Track Discs (Yellow & Soft Blue Discs) matching reference image
        const discGeo = new THREE.CylinderGeometry(0.30, 0.30, 0.025, 32);
        const discMat = (playerIdx === 0 || playerIdx === 2) ? this.discBlueMaterial : this.discYellowMaterial;
        const discMesh = new THREE.Mesh(discGeo, discMat);
        discMesh.position.set(pos.x, pos.y + 0.015, pos.z);
        discMesh.matrixAutoUpdate = false;
        discMesh.updateMatrix();
        this.boardGroup.add(discMesh);
      }
    });
  }

  addGridBorder(worldPos) {
    const borderGeo = new THREE.BoxGeometry(CELL_SIZE - 0.02, 0.005, CELL_SIZE - 0.02);
    const borderMesh = new THREE.Mesh(borderGeo, this.blackLineMaterial);
    borderMesh.position.set(worldPos.x, worldPos.y - 0.015, worldPos.z);
    borderMesh.matrixAutoUpdate = false;
    borderMesh.updateMatrix();
    this.boardGroup.add(borderMesh);
  }

  buildHomeStretchArrows() {
    const shape = new THREE.Shape();
    shape.moveTo(-0.15, -0.06);
    shape.lineTo(0.02, -0.06);
    shape.lineTo(0.02, -0.14);
    shape.lineTo(0.18, 0.0);
    shape.lineTo(0.02, 0.14);
    shape.lineTo(0.02, 0.06);
    shape.lineTo(-0.15, 0.06);
    shape.closePath();

    const arrowGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.02, bevelEnabled: false });

    // Place arrows on home stretch cells pointing into center
    [0, 1, 2, 3].forEach(playerIdx => {
      for (let step = 0; step < 4; step++) {
        let col = 7, row = 7, rotZ = 0;
        if (playerIdx === 0) { col = 1 + step; rotZ = 0; }                 // Red Arrow Right
        else if (playerIdx === 1) { row = 1 + step; rotZ = -Math.PI / 2; }  // Green Arrow Down
        else if (playerIdx === 2) { col = 13 - step; rotZ = Math.PI; }      // Yellow Arrow Left
        else if (playerIdx === 3) { row = 13 - step; rotZ = Math.PI / 2; }  // Blue Arrow Up

        const pos = getGridWorldPosition(col, row, 0.24);
        const arrowMesh = new THREE.Mesh(arrowGeo, this.whiteArrowMaterial);
        arrowMesh.position.copy(pos);
        arrowMesh.rotation.x = -Math.PI / 2;
        arrowMesh.rotation.z = rotZ;
        arrowMesh.scale.set(1.1, 1.1, 1.1);

        arrowMesh.matrixAutoUpdate = false;
        arrowMesh.updateMatrix();
        this.boardGroup.add(arrowMesh);
      }
    });
  }

  /**
   * Classic 4 Colored Home Triangles (Red, Green, Yellow, Blue) meeting at center
   */
  buildCenterTriangles() {
    const centerPos = getGridWorldPosition(7, 7, 0.23);
    const centerGroup = new THREE.Group();
    centerGroup.position.copy(centerPos);

    const halfSize = (1.5 * CELL_SIZE);

    // 4 Triangles meeting at (0,0)
    // 1. RED Triangle (Left: points right to center)
    const redShape = new THREE.Shape();
    redShape.moveTo(-halfSize, -halfSize);
    redShape.lineTo(-halfSize, halfSize);
    redShape.lineTo(0, 0);
    redShape.closePath();
    const redGeo = new THREE.ExtrudeGeometry(redShape, { depth: 0.04, bevelEnabled: false });
    const redMesh = new THREE.Mesh(redGeo, this.playerMaterials[0]);
    redMesh.rotation.x = -Math.PI / 2;
    centerGroup.add(redMesh);

    // 2. GREEN Triangle (Top: points down to center)
    const greenShape = new THREE.Shape();
    greenShape.moveTo(-halfSize, -halfSize);
    greenShape.lineTo(halfSize, -halfSize);
    greenShape.lineTo(0, 0);
    greenShape.closePath();
    const greenGeo = new THREE.ExtrudeGeometry(greenShape, { depth: 0.04, bevelEnabled: false });
    const greenMesh = new THREE.Mesh(greenGeo, this.playerMaterials[1]);
    greenMesh.rotation.x = -Math.PI / 2;
    centerGroup.add(greenMesh);

    // 3. YELLOW Triangle (Right: points left to center)
    const yellowShape = new THREE.Shape();
    yellowShape.moveTo(halfSize, -halfSize);
    yellowShape.lineTo(halfSize, halfSize);
    yellowShape.lineTo(0, 0);
    yellowShape.closePath();
    const yellowGeo = new THREE.ExtrudeGeometry(yellowShape, { depth: 0.04, bevelEnabled: false });
    const yellowMesh = new THREE.Mesh(yellowGeo, this.playerMaterials[2]);
    yellowMesh.rotation.x = -Math.PI / 2;
    centerGroup.add(yellowMesh);

    // 4. BLUE Triangle (Bottom: points up to center)
    const blueShape = new THREE.Shape();
    blueShape.moveTo(-halfSize, halfSize);
    blueShape.lineTo(halfSize, halfSize);
    blueShape.lineTo(0, 0);
    blueShape.closePath();
    const blueGeo = new THREE.ExtrudeGeometry(blueShape, { depth: 0.04, bevelEnabled: false });
    const blueMesh = new THREE.Mesh(blueGeo, this.playerMaterials[3]);
    blueMesh.rotation.x = -Math.PI / 2;
    centerGroup.add(blueMesh);

    // Central Gold Star Motif
    this.addCenterGoldStar(centerGroup);

    centerGroup.matrixAutoUpdate = false;
    centerGroup.updateMatrix();
    this.boardGroup.add(centerGroup);
  }

  addCenterGoldStar(centerGroup) {
    const shape = new THREE.Shape();
    const points = 8;
    const outerRadius = 0.35;
    const innerRadius = 0.18;

    for (let i = 0; i < points * 2; i++) {
      const r = (i % 2 === 0) ? outerRadius : innerRadius;
      const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();

    const starGeo = new THREE.ShapeGeometry(shape);
    const starMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      emissive: 0xfacc15,
      emissiveIntensity: 0.35,
      roughness: 0.2,
      metalness: 0.8
    });
    const starMesh = new THREE.Mesh(starGeo, starMat);
    starMesh.rotation.x = -Math.PI / 2;
    starMesh.position.y = 0.045;
    centerGroup.add(starMesh);
  }
}

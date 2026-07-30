import * as THREE from 'three';
import { CELL_SIZE } from './BoardCoordinates.js';
import { SNAKES, LADDERS, getSnakeLadderWorldPosition } from '../game/SnakesLaddersData.js';

export class SnakesLaddersBoard {
  constructor(scene) {
    this.scene = scene;
    this.boardGroup = new THREE.Group();
    this.boardGroup.name = 'SnakesLaddersBoard3D';
    this.boardGroup.visible = false; // Hidden by default

    this.createMaterials();
    this.buildBase();
    this.buildGrid();
    this.buildLadders();
    this.buildSnakes();

    this.scene.add(this.boardGroup);
  }

  createMaterials() {
    this.woodFrameMaterial = new THREE.MeshStandardMaterial({
      color: 0x27160c,
      roughness: 0.5,
      metalness: 0.1
    });

    this.goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      roughness: 0.1,
      metalness: 0.9
    });
  }

  setVisible(visible) {
    this.boardGroup.visible = visible;
  }

  buildBase() {
    // 10x10 cells + border
    const boardSize = 10 * CELL_SIZE + 0.4;
    const thickness = 0.25;

    // Wood base frame
    const frameGeo = new THREE.BoxGeometry(boardSize, thickness, boardSize);
    const frameMesh = new THREE.Mesh(frameGeo, this.woodFrameMaterial);
    frameMesh.position.y = thickness / 2;
    frameMesh.receiveShadow = true;
    this.boardGroup.add(frameMesh);
  }

  buildGrid() {
    const vibrantColors = [
      '#ef4444', // Red
      '#f97316', // Orange
      '#eab308', // Yellow
      '#22c55e', // Green
      '#3b82f6', // Blue
      '#a855f7'  // Purple
    ];

    // Build 100 tiles
    for (let cell = 1; cell <= 100; cell++) {
      const color = vibrantColors[(cell - 1) % vibrantColors.length];
      const pos = getSnakeLadderWorldPosition(cell, 0.25);

      // Create Canvas-based tile texture to write numbers beautifully
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');

      // Tile background
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 128, 128);

      // Tile inner shadow/glow
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 6;
      ctx.strokeRect(3, 3, 122, 122);

      // Draw number
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 44px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 4;
      ctx.fillText(cell.toString(), 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const tileMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.2,
        metalness: 0.1
      });

      const tileGeo = new THREE.BoxGeometry(CELL_SIZE - 0.02, 0.02, CELL_SIZE - 0.02);
      const tileMesh = new THREE.Mesh(tileGeo, tileMaterial);
      tileMesh.position.copy(pos);
      tileMesh.receiveShadow = true;
      this.boardGroup.add(tileMesh);
    }
  }

  buildLadders() {
    Object.entries(LADDERS).forEach(([startCell, endCell]) => {
      const start = getSnakeLadderWorldPosition(parseInt(startCell), 0.26);
      const end = getSnakeLadderWorldPosition(parseInt(endCell), 0.26);

      const ladderGroup = new THREE.Group();

      // Vector math for parallel rails
      const dir = new THREE.Vector3().subVectors(end, start);
      const len = dir.length();
      const normDir = dir.clone().normalize();

      // Right vector orthogonal to up & direction
      const right = new THREE.Vector3(-normDir.z, 0, normDir.x).normalize().multiplyScalar(0.12);

      // Build rail helper
      const buildRail = (railStart, railEnd) => {
        const railDir = new THREE.Vector3().subVectors(railEnd, railStart);
        const railLen = railDir.length();
        
        const railGeo = new THREE.CylinderGeometry(0.025, 0.025, railLen, 8);
        const railMesh = new THREE.Mesh(railGeo, this.goldMaterial);

        // Position at midpoint
        const mid = new THREE.Vector3().addVectors(railStart, railEnd).multiplyScalar(0.5);
        railMesh.position.copy(mid);

        // Align cylinder with direction vector
        const up = new THREE.Vector3(0, 1, 0);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(up, railDir.clone().normalize());
        railMesh.setRotationFromQuaternion(quaternion);

        ladderGroup.add(railMesh);
      };

      buildRail(start.clone().add(right), end.clone().add(right));
      buildRail(start.clone().sub(right), end.clone().sub(right));

      // Build Rungs
      const rungCount = Math.max(3, Math.floor(len / 0.25));
      for (let i = 1; i < rungCount; i++) {
        const t = i / rungCount;
        const center = new THREE.Vector3().lerpVectors(start, end, t);

        const rungStart = center.clone().add(right);
        const rungEnd = center.clone().sub(right);
        const rungDir = new THREE.Vector3().subVectors(rungEnd, rungStart);
        const rungLen = rungDir.length();

        const rungGeo = new THREE.CylinderGeometry(0.015, 0.015, rungLen, 6);
        const rungMesh = new THREE.Mesh(rungGeo, this.goldMaterial);

        rungMesh.position.copy(center);

        const up = new THREE.Vector3(0, 1, 0);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(up, rungDir.clone().normalize());
        rungMesh.setRotationFromQuaternion(quaternion);

        ladderGroup.add(rungMesh);
      }

      this.boardGroup.add(ladderGroup);
    });
  }

  buildSnakes() {
    const snakeColors = [
      0x22c55e, // Bright Green
      0xeab308, // Yellow
      '#a855f7', // Purple
      '#ec4899', // Pink
      '#06b6d4'  // Cyan
    ];

    let snakeColorIndex = 0;

    Object.entries(SNAKES).forEach(([headCell, tailCell]) => {
      const start = getSnakeLadderWorldPosition(parseInt(headCell), 0.28);
      const end = getSnakeLadderWorldPosition(parseInt(tailCell), 0.27);

      const color = snakeColors[snakeColorIndex % snakeColors.length];
      snakeColorIndex++;

      // Create wiggly serpentine path points using sine wave offset
      const points = [];
      const steps = 16;
      
      const dir = new THREE.Vector3().subVectors(end, start);
      const right = new THREE.Vector3(-dir.z, 0, dir.x).normalize();

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const p = new THREE.Vector3().lerpVectors(start, end, t);
        
        // Add wiggles
        const wiggle = Math.sin(t * Math.PI * 4.5) * 0.18;
        p.addScaledVector(right, wiggle);
        
        // Arch upward in the middle
        p.y += Math.sin(t * Math.PI) * 0.12;

        points.push(p);
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.045, 8, false);
      const snakeMaterial = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.1,
        metalness: 0.1
      });

      const snakeMesh = new THREE.Mesh(tubeGeo, snakeMaterial);
      this.boardGroup.add(snakeMesh);

      // Build Snake Head (slightly larger sphere)
      const headGeo = new THREE.SphereGeometry(0.07, 8, 8);
      const headMesh = new THREE.Mesh(headGeo, snakeMaterial);
      headMesh.position.copy(start);
      this.boardGroup.add(headMesh);

      // Glowing yellow/red eyes
      const eyeGeo = new THREE.SphereGeometry(0.015, 4, 4);
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      
      const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
      eyeL.position.copy(start).add(new THREE.Vector3(0.04, 0.02, 0.02));
      const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
      eyeR.position.copy(start).add(new THREE.Vector3(0.04, 0.02, -0.02));

      this.boardGroup.add(eyeL);
      this.boardGroup.add(eyeR);
    });
  }
}

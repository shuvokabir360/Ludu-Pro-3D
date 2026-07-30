import * as THREE from 'three';
import { Token3D } from './Token3D.js';
import { PathAnimator } from './PathAnimator.js';
import {
  BASE_YARD_POSITIONS,
  getTrackWorldPosition,
  getHomeStretchWorldPosition,
  PLAYER_START_TRACK_INDEX
} from '../board/BoardCoordinates.js';

/**
 * TokenManager manages all 16 Pawns across 4 Players
 */
export class TokenManager {
  constructor(scene, cameraManager) {
    this.scene = scene;
    this.cameraManager = cameraManager;
    this.pathAnimator = new PathAnimator(cameraManager);
    this.tokensGroup = new THREE.Group();
    this.tokensGroup.name = 'AllTokens';

    // Map of token key `pawn_playerIdx_tokenIdx` => Token3D instance
    this.tokens = {};
    this.playerTokens = { 0: [], 1: [], 2: [], 3: [] };

    this.createAllTokens();
    this.scene.add(this.tokensGroup);
  }

  createAllTokens() {
    [0, 1, 2, 3].forEach(playerIdx => {
      for (let tokenIdx = 0; tokenIdx < 4; tokenIdx++) {
        const token = new Token3D(playerIdx, tokenIdx);
        const basePos = BASE_YARD_POSITIONS[playerIdx][tokenIdx];
        token.setPosition(basePos);

        this.tokens[token.id] = token;
        this.playerTokens[playerIdx].push(token);
        this.tokensGroup.add(token.meshGroup);
      }
    });
  }

  resetAllTokens(players = null) {
    this.setupActiveTokens(players);
  }

  setupActiveTokens(players = null) {
    const activeSlots = players ? players.filter(p => p.isActiveSlot).map(p => p.idx) : [0, 1, 2, 3];

    [0, 1, 2, 3].forEach(playerIdx => {
      const isActive = activeSlots.includes(playerIdx);
      this.playerTokens[playerIdx].forEach((token, tokenIdx) => {
        token.trackIndex = -1;
        token.homeStepIndex = -1;
        token.isFinished = false;
        token.setSelectable(false);
        const basePos = BASE_YARD_POSITIONS[playerIdx][tokenIdx];
        token.setPosition(basePos);

        // Hide pawns for inactive corner bases in 2P / 3P modes
        token.meshGroup.visible = isActive;
      });
    });
  }

  getToken(playerIdx, tokenIdx) {
    return this.tokens[`pawn_${playerIdx}_${tokenIdx}`];
  }

  clearSelectableTokens() {
    Object.values(this.tokens).forEach(t => t.setSelectable(false));
  }

  setSelectableTokens(playerIdx, selectableTokenIndexes) {
    this.clearSelectableTokens();
    selectableTokenIndexes.forEach(tokenIdx => {
      const token = this.getToken(playerIdx, tokenIdx);
      if (token) token.setSelectable(true);
    });
  }

  /**
   * Raycast detection for pawn clicking with 100% instant click response
   */
  raycastToken(raycaster) {
    const selectableTokens = Object.values(this.tokens).filter(t => t.isSelectable && t.meshGroup.visible);
    if (selectableTokens.length === 0) return null;

    // 1. Direct mesh raycasting including enlarged hitboxes
    const meshes = [];
    selectableTokens.forEach(t => {
      meshes.push(...t.meshGroup.children);
      if (t.dollGroup) meshes.push(...t.dollGroup.children);
      if (t.hitboxMesh) meshes.push(t.hitboxMesh);
    });

    const intersects = raycaster.intersectObjects(meshes, true);
    if (intersects.length > 0) {
      for (let i = 0; i < intersects.length; i++) {
        let obj = intersects[i].object;
        while (obj) {
          if (obj.name && obj.name.startsWith('pawn_')) {
            const parts = obj.name.split('_');
            const tokenId = `pawn_${parts[1]}_${parts[2]}`;
            if (this.tokens[tokenId] && this.tokens[tokenId].isSelectable) {
              return this.tokens[tokenId];
            }
          }
          obj = obj.parent;
        }
      }
    }

    // 2. Ground Plane Proximity Fallback (If user tapped near/around the pawn on the board)
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.2);
    const targetPoint = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(plane, targetPoint)) {
      let closestToken = null;
      let minDistance = 2.5; // Generous 2.5 unit touch radius tolerance for easy base yard taps

      selectableTokens.forEach(t => {
        const dist = t.meshGroup.position.distanceTo(targetPoint);
        if (dist < minDistance) {
          minDistance = dist;
          closestToken = t;
        }
      });

      if (closestToken) return closestToken;
    }

    return null;
  }

  /**
   * Updates stacked pawn offsets when multiple tokens occupy the exact same cell
   */
  updateStackedTokenPositions() {
    const trackOccupants = {};

    Object.values(this.tokens).forEach(t => {
      if (t.trackIndex >= 0 && !t.isFinished) {
        if (!trackOccupants[t.trackIndex]) trackOccupants[t.trackIndex] = [];
        trackOccupants[t.trackIndex].push(t);
      }
    });

    Object.entries(trackOccupants).forEach(([trackIdx, occupants]) => {
      if (occupants.length > 1) {
        const centerPos = getTrackWorldPosition(parseInt(trackIdx));
        const radius = 0.15;
        occupants.forEach((token, i) => {
          const angle = (i / occupants.length) * Math.PI * 2;
          token.meshGroup.position.x = centerPos.x + Math.cos(angle) * radius;
          token.meshGroup.position.z = centerPos.z + Math.sin(angle) * radius;
        });
      }
    });
  }

  update(delta, time) {
    Object.values(this.tokens).forEach(t => t.updateIdle(time));
  }
}

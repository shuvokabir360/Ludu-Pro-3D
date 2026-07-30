import * as THREE from 'three';
import { Renderer } from './engine/Renderer.js';
import { SceneManager } from './engine/SceneManager.js';
import { CameraManager } from './engine/CameraManager.js';
import { Lighting } from './engine/Lighting.js';

import { BoardBuilder } from './board/BoardBuilder.js';
import { SafeZoneManager } from './board/SafeZoneManager.js';
import { SnakesLaddersBoard } from './board/SnakesLaddersBoard.js';
import { TokenManager } from './tokens/TokenManager.js';
import { Dice3D } from './dice/Dice3D.js';

import { ParticleSystem } from './effects/ParticleSystem.js';
import { Fireworks } from './effects/Fireworks.js';

import { UIManager } from './ui/UIManager.js';
import { GameController } from './game/GameController.js';

class LudoApp {
  constructor() {
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.initEngine();
    this.initScene();
    this.initGame();
    this.bindWindowEvents();

    this.animate();
  }

  initEngine() {
    const container = document.getElementById('webgl-container');
    this.renderer = new Renderer(container);
    this.sceneManager = new SceneManager();
    this.cameraManager = new CameraManager(this.renderer.threeRenderer.domElement);
    this.lighting = new Lighting(this.sceneManager.scene);
  }

  initScene() {
    this.boardBuilder = new BoardBuilder(this.sceneManager.scene);
    this.safeZoneManager = new SafeZoneManager(this.boardBuilder);
    this.snakesLaddersBoard = new SnakesLaddersBoard(this.sceneManager.scene);

    this.tokenManager = new TokenManager(this.sceneManager.scene, this.cameraManager);
    this.dice3D = new Dice3D(this.sceneManager.scene);

    this.particleSystem = new ParticleSystem(this.sceneManager.scene);
    this.fireworks = new Fireworks(this.sceneManager.scene);
  }

  initGame() {
    this.uiManager = new UIManager();
    this.gameController = new GameController(
      this.sceneManager,
      this.cameraManager,
      this.tokenManager,
      this.dice3D,
      this.uiManager,
      this.particleSystem,
      this.fireworks,
      this.boardBuilder,
      this.snakesLaddersBoard
    );

    this.uiManager.setGameController(this.gameController);
    this.uiManager.showScreen('splash');
  }

  bindWindowEvents() {
    window.addEventListener('resize', () => {
      this.renderer.resize(this.cameraManager);
    });

    const canvas = this.renderer.threeRenderer.domElement;

    // Handle touch/click pawn selection raycasting
    const handlePointer = (clientX, clientY) => {
      this.mouse.x = (clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.cameraManager.camera);

      // Check if 3D dice was clicked
      if (this.dice3D.isClickable) {
        const diceIntersects = this.raycaster.intersectObjects(this.dice3D.diceGroup.children, true);
        if (diceIntersects.length > 0) {
          this.gameController.handleRollDice();
          return;
        }
      }

      // Check if selectable pawn was clicked
      const clickedToken = this.tokenManager.raycastToken(this.raycaster);
      if (clickedToken) {
        this.gameController.handleTokenSelected(clickedToken);
      }
    };

    let pointerStartX = 0;
    let pointerStartY = 0;
    let pointerStartTime = 0;

    canvas.addEventListener('pointerdown', (e) => {
      pointerStartX = e.clientX;
      pointerStartY = e.clientY;
      pointerStartTime = performance.now();
    });

    canvas.addEventListener('pointerup', (e) => {
      const dx = e.clientX - pointerStartX;
      const dy = e.clientY - pointerStartY;
      const dist = Math.hypot(dx, dy);
      const dt = performance.now() - pointerStartTime;

      // Only trigger if it was a genuine tap (not camera rotation drag)
      if (dist < 15 && dt < 600) {
        handlePointer(e.clientX, e.clientY);
      }
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // Update scene animations
    this.sceneManager.update(delta);
    this.cameraManager.update();
    if (this.boardBuilder && this.boardBuilder.update) {
      this.boardBuilder.update(elapsedTime);
    }
    this.safeZoneManager.update(delta);
    this.tokenManager.update(delta, elapsedTime);
    this.dice3D.update(elapsedTime);
    this.particleSystem.update(delta);
    this.fireworks.update(delta);

    // Render WebGL frame
    this.renderer.render(this.sceneManager.scene, this.cameraManager.camera);
  }
}

// Bootstrap Application on DOM Loaded
window.addEventListener('DOMContentLoaded', () => {
  new LudoApp();
});

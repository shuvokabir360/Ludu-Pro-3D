import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

/**
 * Camera System with Cinematic Slow-Motion Kick Action & Smooth Camera Tracking
 */
export class CameraManager {
  constructor(canvas) {
    this.canvas = canvas;
    const aspect = window.innerWidth / window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 150);

    // OrbitControls for manual tap/drag 360 degree 3D rotation
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2.25;

    this.defaultPos = new THREE.Vector3(0, 13, 0.01);
    this.defaultLookAt = new THREE.Vector3(0, 0, 0);

    this.updateFraming(aspect);
  }

  updateFraming(aspect = window.innerWidth / window.innerHeight) {
    if (!this.camera) return;

    this.camera.aspect = aspect;

    if (aspect < 1.0) {
      // PORTRAIT MODE
      const distance = 13.0;
      this.defaultPos.set(0, distance, 0.01);

      const targetWidth = 8.5;
      const targetHeight = 8.5;

      const fovForWidthRad = 2 * Math.atan((targetWidth / 2) / (distance * aspect));
      const fovForHeightRad = 2 * Math.atan((targetHeight / 2) / distance);

      const maxFovRad = Math.max(fovForWidthRad, fovForHeightRad);
      this.camera.fov = maxFovRad * (180 / Math.PI);

      if (this.controls) {
        this.controls.minDistance = 5;
        this.controls.maxDistance = 20;
      }
    } else {
      // LANDSCAPE MODE
      const distance = 18.0;
      this.defaultPos.set(0, distance, 0.01);

      const targetWidth = 24.0;
      const targetHeight = 15.5;

      const fovForWidthRad = 2 * Math.atan((targetWidth / 2) / (distance * aspect));
      const fovForHeightRad = 2 * Math.atan((targetHeight / 2) / distance);

      const maxFovRad = Math.max(fovForWidthRad, fovForHeightRad);
      this.camera.fov = maxFovRad * (180 / Math.PI);

      if (this.controls) {
        this.controls.minDistance = 8;
        this.controls.maxDistance = 35;
      }
    }

    this.defaultLookAt.set(0, 0, 0);

    this.camera.position.copy(this.defaultPos);
    this.camera.lookAt(this.defaultLookAt);
    this.camera.updateProjectionMatrix();

    if (this.controls) {
      this.controls.target.copy(this.defaultLookAt);
      this.controls.update();
    }
  }

  /**
   * Automatic Camera Animations Disabled per User Preference
   * Player maintains 100% manual OrbitControls zoom & rotation freedom.
   */
  zoomToKickAction(kickPos, onComplete) {
    if (onComplete) onComplete();
  }

  trackFlyingPawn(targetBasePos, onComplete) {
    if (onComplete) onComplete();
  }

  resetCameraSmooth(onComplete) {
    if (onComplete) onComplete();
  }

  focusPlayerCorner(playerIdx) {
    // No auto camera move - player controls framing
  }

  zoomInAction(targetPos) {
    // No auto camera move - player controls framing
  }

  zoomOutReset() {
    // No auto camera move - player controls framing
  }

  update() {
    if (this.controls) {
      this.controls.update();
    }
  }
}

import * as THREE from 'three';

/**
 * Realistic Studio PBR Lighting Setup with Soft Shadows
 */
export class Lighting {
  constructor(scene) {
    this.scene = scene;

    // 1. Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    // 2. Key Directional Shadow Light
    this.dirLight = new THREE.DirectionalLight(0xfff5ea, 1.8);
    this.dirLight.position.set(8, 16, 10);
    this.dirLight.castShadow = true;

    // Shadow Map Resolution Tuning for Mobile Performance
    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 35;
    this.dirLight.shadow.camera.left = -10;
    this.dirLight.shadow.camera.right = 10;
    this.dirLight.shadow.camera.top = 10;
    this.dirLight.shadow.camera.bottom = -10;
    this.dirLight.shadow.bias = -0.0005;

    this.scene.add(this.dirLight);

    // 3. Cool Blue Rim / Fill Light
    const rimLight = new THREE.DirectionalLight(0x60a5fa, 0.6);
    rimLight.position.set(-10, 10, -10);
    this.scene.add(rimLight);
  }
}

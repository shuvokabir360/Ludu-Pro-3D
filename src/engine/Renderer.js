import * as THREE from 'three';

/**
 * Responsive WebGL Renderer with Guaranteed Uncropped Board Framing
 */
export class Renderer {
  constructor(canvasContainer) {
    this.container = canvasContainer;

    this.threeRenderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
      precision: 'mediump',
      stencil: false,
      depth: true
    });

    this.threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.threeRenderer.setSize(window.innerWidth, window.innerHeight);

    // Color Space & ACES Tone Mapping
    this.threeRenderer.outputColorSpace = THREE.SRGBColorSpace;
    this.threeRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.threeRenderer.toneMappingExposure = 1.15;

    // Shadow Map Tuning for 3D Pawns
    this.threeRenderer.shadowMap.enabled = true;
    this.threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.threeRenderer.domElement);
  }

  resize(cameraOrManager) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.threeRenderer.setSize(width, height);
    if (cameraOrManager) {
      const aspect = width / height;

      if (typeof cameraOrManager.updateFraming === 'function') {
        cameraOrManager.updateFraming(aspect);
      } else {
        const camera = cameraOrManager;
        camera.aspect = aspect;

        if (aspect < 1.0) {
          const distance = 28.0;
          camera.position.set(0, distance, 0.01);
          const targetWidth = 16.5;
          const targetHeight = 25.0;

          const fovForWidthRad = 2 * Math.atan((targetWidth / 2) / (distance * aspect));
          const fovForHeightRad = 2 * Math.atan((targetHeight / 2) / distance);
          const maxFovRad = Math.max(fovForWidthRad, fovForHeightRad);
          camera.fov = maxFovRad * (180 / Math.PI);
        } else {
          const distance = 18.0;
          camera.position.set(0, distance, 0.01);
          const targetWidth = 24.0;
          const targetHeight = 15.5;

          const fovForWidthRad = 2 * Math.atan((targetWidth / 2) / (distance * aspect));
          const fovForHeightRad = 2 * Math.atan((targetHeight / 2) / distance);
          const maxFovRad = Math.max(fovForWidthRad, fovForHeightRad);
          camera.fov = maxFovRad * (180 / Math.PI);
        }
        camera.updateProjectionMatrix();
      }
    }
  }

  render(scene, camera) {
    this.threeRenderer.render(scene, camera);
  }
}

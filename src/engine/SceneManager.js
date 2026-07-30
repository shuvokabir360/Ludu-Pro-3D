import * as THREE from 'three';
import luxuryBgUrl from '../assets/luxury_bg.png';

/**
 * Three.js Full 3D Environment Scene (3D Table, Floor, Spotlights & Ambient Atmosphere)
 */
export class SceneManager {
  constructor() {
    this.scene = new THREE.Scene();
    this.createCosmicEnvironment();
    this.createEnvironmentMap();
  }

  /**
   * Builds 3D Luxury Wooden Gaming Table & Ambient Studio Environment:
   * - 3D Board rests naturally on a 3D Polished Mahogany Table with Gold Trim
   * - 4 Solid 3D Table Legs resting on a room floor
   * - Soft, lighter luxury studio ambient background
   */
  createCosmicEnvironment() {
    // 1. Softer, Lighter Luxury Background & Fog
    this.scene.background = new THREE.Color(0x1e293b);
    this.scene.fog = new THREE.FogExp2(0x1e293b, 0.008);

    // 2. 3D Polished Mahogany Gaming Table directly underneath the Ludo board
    const tableGeo = new THREE.BoxGeometry(22, 1.2, 22);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0x3d2314, // Rich Mahogany Walnut Wood
      roughness: 0.25,
      metalness: 0.15
    });
    this.tableMesh = new THREE.Mesh(tableGeo, tableMat);
    this.tableMesh.position.set(0, -0.65, 0);
    this.tableMesh.receiveShadow = true;
    this.scene.add(this.tableMesh);

    // 3D Metallic Gold Trim Bevel around Table Edge
    const goldTrimGeo = new THREE.BoxGeometry(22.4, 0.25, 22.4);
    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      metalness: 0.95,
      roughness: 0.15
    });
    this.goldTrim = new THREE.Mesh(goldTrimGeo, goldTrimMat);
    this.goldTrim.position.set(0, -0.08, 0);
    this.scene.add(this.goldTrim);

    // 3. 4 Solid 3D Table Legs
    const legGeo = new THREE.CylinderGeometry(0.8, 0.55, 12, 16);
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x27160c,
      roughness: 0.3,
      metalness: 0.1
    });

    const legPositions = [
      { x: -9.5, z: -9.5 },
      { x: 9.5, z: -9.5 },
      { x: -9.5, z: 9.5 },
      { x: 9.5, z: 9.5 }
    ];

    legPositions.forEach(pos => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(pos.x, -6.6, pos.z);
      this.scene.add(leg);
    });

    // 4. 3D Room Floor below the Table
    const floorGeo = new THREE.PlaneGeometry(100, 100);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.6,
      metalness: 0.1
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0, -12.6, 0);
    floorMesh.receiveShadow = true;
    this.scene.add(floorMesh);

    // 5. Overhead Soft Studio Warm Spotlight
    const mainSpot = new THREE.SpotLight(0xfffbeb, 3.5);
    mainSpot.position.set(10, 24, 12);
    mainSpot.angle = Math.PI / 3;
    mainSpot.penumbra = 0.4;
    mainSpot.castShadow = true;
    this.scene.add(mainSpot);

    // Ambient Soft Warm Fill Light
    const ambientLight = new THREE.AmbientLight(0xfef08a, 1.3);
    this.scene.add(ambientLight);

    // Secondary Rim Light
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    rimLight.position.set(-15, 18, -15);
    this.scene.add(rimLight);
  }

  /**
   * Generates procedural 3D Earth texture map with oceans, continents & clouds
   */
  createProceduralEarthTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Deep Ocean Blue Gradient
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
    oceanGrad.addColorStop(0, '#0369a1');
    oceanGrad.addColorStop(0.5, '#0284c7');
    oceanGrad.addColorStop(1, '#075985');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, 1024, 512);

    // Continents
    ctx.fillStyle = '#15803d';
    const landShapes = [
      { x: 220, y: 140, r: 90 }, { x: 280, y: 180, r: 70 },
      { x: 340, y: 320, r: 85 }, { x: 360, y: 380, r: 60 },
      { x: 520, y: 160, r: 70 }, { x: 550, y: 280, r: 95 }, { x: 570, y: 350, r: 65 },
      { x: 720, y: 150, r: 120 }, { x: 800, y: 200, r: 90 },
      { x: 840, y: 360, r: 55 }
    ];
    landShapes.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Swirling White Cloud Covers
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    for (let i = 0; i < 40; i++) {
      const cx = Math.random() * 1024;
      const cy = Math.random() * 512;
      const cr = 20 + Math.random() * 60;
      ctx.beginPath();
      ctx.ellipse(cx, cy, cr * 1.8, cr * 0.6, Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  createEnvironmentMap() {
    const pmremGenerator = new THREE.PMREMGenerator(new THREE.WebGLRenderer({ antialias: false }));
    const cubeScene = new THREE.Scene();
    cubeScene.background = new THREE.Color(0x020617);

    const light1 = new THREE.DirectionalLight(0xfff5ea, 2.5);
    light1.position.set(5, 12, 5);
    cubeScene.add(light1);

    const light2 = new THREE.DirectionalLight(0x38bdf8, 1.5);
    light2.position.set(-5, 8, -5);
    cubeScene.add(light2);

    const envMap = pmremGenerator.fromScene(cubeScene).texture;
    this.scene.environment = envMap;
    pmremGenerator.dispose();
  }

  update(delta = 0.016) {
    if (this.earthMesh) {
      this.earthMesh.rotation.y += 0.0012; // Earth rotation
    }
    if (this.saturnMesh) {
      this.saturnMesh.rotation.y += 0.0008;
    }
    if (this.starfield) {
      this.starfield.rotation.y += 0.0003; // Starfield drift
    }
    if (this.nebulaGroup) {
      this.nebulaGroup.rotation.y += 0.0006; // Drifting Nebula clouds
    }
  }
}

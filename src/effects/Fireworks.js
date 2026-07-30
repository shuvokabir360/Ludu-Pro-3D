import * as THREE from 'three';

/**
 * 3D Fireworks & Confetti Victory Particle Controller
 */
export class Fireworks {
  constructor(scene) {
    this.scene = scene;
    this.fireworksGroup = new THREE.Group();
    this.fireworksGroup.name = 'FireworksGroup';
    this.scene.add(this.fireworksGroup);
    this.particles = [];
    this.isSpawning = false;
    this.spawnTimer = null;
  }

  startFireworks() {
    this.isSpawning = true;
    this.spawnTimer = setInterval(() => {
      if (this.isSpawning) {
        const x = (Math.random() - 0.5) * 8;
        const y = Math.random() * 4 + 4;
        const z = (Math.random() - 0.5) * 8;
        this.createBurst(new THREE.Vector3(x, y, z));
      }
    }, 400);
  }

  stopFireworks() {
    this.isSpawning = false;
    if (this.spawnTimer) {
      clearInterval(this.spawnTimer);
      this.spawnTimer = null;
    }
  }

  createBurst(centerPos) {
    const colors = [0xef4444, 0x22c55e, 0xeab308, 0x3b82f6, 0xa855f7, 0xec4899];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const count = 35;
    const geo = new THREE.BoxGeometry(0.06, 0.06, 0.06);
    const mat = new THREE.MeshBasicMaterial({ color });

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(centerPos);

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const speed = Math.random() * 0.12 + 0.05;

      const velocity = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * speed,
        Math.cos(phi) * speed + 0.02,
        Math.sin(phi) * Math.sin(theta) * speed
      );

      this.fireworksGroup.add(mesh);
      this.particles.push({ mesh, velocity, life: 1.0, decay: 0.02 });
    }
  }

  update(delta) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= p.decay;
      p.velocity.y -= 0.002; // Gravity
      p.mesh.position.add(p.velocity);

      if (p.life <= 0) {
        this.fireworksGroup.remove(p.mesh);
        this.particles.splice(i, 1);
      }
    }
  }
}

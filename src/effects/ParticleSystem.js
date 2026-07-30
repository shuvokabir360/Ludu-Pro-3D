import * as THREE from 'three';

/**
 * High-Performance Object-Pooled Particle Emitter System
 * Eliminates Garbage Collection stutters during gameplay.
 */
export class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.particles = []; // Active particles
    this.pool = [];      // Inactive recycled particle meshes
    this.particleGroup = new THREE.Group();
    this.particleGroup.name = 'ParticleSystemGroup';
    this.scene.add(this.particleGroup);

    this.particleGeo = new THREE.SphereGeometry(0.04, 6, 6);
    this.sparkleMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      emissive: 0xfacc15,
      emissiveIntensity: 1.0,
      transparent: true,
      opacity: 0.9
    });

    this.captureMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xef4444,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.9
    });

    // Pre-allocate pool
    this.preallocatePool(50);
  }

  preallocatePool(size) {
    for (let i = 0; i < size; i++) {
      const mesh = new THREE.Mesh(this.particleGeo, this.sparkleMat);
      mesh.visible = false;
      this.particleGroup.add(mesh);
      this.pool.push(mesh);
    }
  }

  getParticleMesh(mat) {
    let mesh = this.pool.pop();
    if (!mesh) {
      mesh = new THREE.Mesh(this.particleGeo, mat);
      this.particleGroup.add(mesh);
    } else {
      mesh.material = mat;
    }
    mesh.visible = true;
    mesh.scale.set(1, 1, 1);
    return mesh;
  }

  spawnSparkles(posVector, count = 10) {
    for (let i = 0; i < count; i++) {
      const mesh = this.getParticleMesh(this.sparkleMat);
      mesh.position.copy(posVector);

      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.08,
        Math.random() * 0.1 + 0.05,
        (Math.random() - 0.5) * 0.08
      );

      this.particles.push({ mesh, velocity, life: 1.0, decay: 0.03 });
    }
  }

  spawnCaptureBurst(posVector, count = 16) {
    for (let i = 0; i < count; i++) {
      const mesh = this.getParticleMesh(this.captureMat);
      mesh.position.copy(posVector);

      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.14,
        Math.random() * 0.18 + 0.06,
        (Math.random() - 0.5) * 0.14
      );

      this.particles.push({ mesh, velocity, life: 1.0, decay: 0.04 });
    }
  }

  update(delta) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= p.decay;
      p.mesh.position.add(p.velocity);
      p.mesh.scale.multiplyScalar(0.95);

      if (p.life <= 0) {
        p.mesh.visible = false;
        this.pool.push(p.mesh); // Recycle mesh back to object pool
        this.particles.splice(i, 1);
      }
    }
  }
}

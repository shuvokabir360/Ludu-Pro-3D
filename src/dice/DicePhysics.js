import * as THREE from 'three';
import gsap from 'gsap';
import { soundManager } from '../audio/SoundManager.js';

/**
 * Dice Physics Tumble & Target Face Rotation Resolver
 */
export class DicePhysics {
  constructor(dice3D) {
    this.dice3D = dice3D;

    // Face rotations to point Face N (+Y upwards)
    this.faceRotations = {
      1: new THREE.Euler(-Math.PI / 2, 0, 0),
      6: new THREE.Euler(Math.PI / 2, 0, 0),
      2: new THREE.Euler(0, 0, Math.PI / 2),
      5: new THREE.Euler(0, 0, -Math.PI / 2),
      3: new THREE.Euler(0, 0, 0),
      4: new THREE.Euler(Math.PI, 0, 0)
    };
  }

  /**
   * Roll dice with random result 1..6 or predetermined target value
   */
  roll(targetValue = null, onComplete = null) {
    const group = this.dice3D.diceGroup;
    const mesh = this.dice3D.diceMesh;

    gsap.killTweensOf(group.position);
    gsap.killTweensOf(group.scale);
    gsap.killTweensOf(mesh.rotation);

    this.dice3D.isRolling = true;
    this.dice3D.setClickable(false);

    const outcome = targetValue || Math.floor(Math.random() * 6) + 1;
    soundManager.playDiceRoll();

    // Tumble height bounce animation
    gsap.to(group.position, {
      y: 2.8,
      duration: 0.35,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    });

    // Random spin rotations
    const extraTurnsX = (Math.floor(Math.random() * 3) + 2) * Math.PI * 2;
    const extraTurnsY = (Math.floor(Math.random() * 3) + 2) * Math.PI * 2;
    const extraTurnsZ = (Math.floor(Math.random() * 3) + 2) * Math.PI * 2;

    const targetRot = this.faceRotations[outcome];

    gsap.to(mesh.rotation, {
      x: extraTurnsX + targetRot.x,
      y: extraTurnsY + targetRot.y,
      z: extraTurnsZ + targetRot.z,
      duration: 0.7,
      ease: 'cubic.out',
      onComplete: () => {
        // Landing squash
        gsap.to(group.scale, {
          x: 1.2,
          y: 0.8,
          z: 1.2,
          duration: 0.08,
          yoyo: true,
          repeat: 1,
          ease: 'power1.inOut',
          onComplete: () => {
            this.dice3D.isRolling = false;
            if (onComplete) onComplete(outcome);
          }
        });
      }
    });
  }
}

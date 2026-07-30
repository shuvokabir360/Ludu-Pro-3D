import * as THREE from 'three';
import { PLAYER_COLORS } from '../board/BoardCoordinates.js';

/**
 * 3D Humanoid Character Doll Token Class with 3D Legs, Arms, Eyes & Team Cap
 */
export class Token3D {
  constructor(playerIdx, tokenIdx) {
    this.playerIdx = playerIdx;
    this.tokenIdx = tokenIdx;
    this.id = `pawn_${playerIdx}_${tokenIdx}`;
    this.meshGroup = new THREE.Group();
    this.meshGroup.name = this.id;

    // Pawn status states
    this.isSelectable = false;
    this.isHovered = false;
    this.trackIndex = -1;      // -1 = In Base Yard
    this.homeStepIndex = -1;  // -1 = Not in home stretch
    this.isFinished = false;  // Reached center home
    this.baseY = 0.2;

    this.buildTokenMesh();
  }

  buildTokenMesh() {
    const colorConfig = PLAYER_COLORS[this.playerIdx];

    // Main Doll Mesh Container (Rotates during walking animation)
    this.dollGroup = new THREE.Group();
    this.dollGroup.name = `${this.id}_DollGroup`;
    this.meshGroup.add(this.dollGroup);

    // Body Material matching team color code
    this.bodyMaterial = new THREE.MeshStandardMaterial({
      color: colorConfig.hex,
      roughness: 0.25,
      metalness: 0.2,
      emissive: colorConfig.hex,
      emissiveIntensity: 0.35
    });

    // 1. 3D Humanoid Character Legs & Shoes (পা ও জুতো)
    const legGeo = new THREE.CylinderGeometry(0.045, 0.04, 0.18, 16);
    const shoeGeo = new THREE.BoxGeometry(0.09, 0.06, 0.15);
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.8 });

    // Left Leg
    this.leftLegGroup = new THREE.Group();
    this.leftLegGroup.position.set(-0.09, 0.16, 0);

    const leftLegMesh = new THREE.Mesh(legGeo, this.bodyMaterial);
    leftLegMesh.position.y = -0.07;
    leftLegMesh.castShadow = true;
    this.leftLegGroup.add(leftLegMesh);

    const leftShoe = new THREE.Mesh(shoeGeo, shoeMat);
    leftShoe.position.set(0, -0.15, 0.03);
    leftShoe.castShadow = true;
    this.leftLegGroup.add(leftShoe);

    this.dollGroup.add(this.leftLegGroup);

    // Right Leg
    this.rightLegGroup = new THREE.Group();
    this.rightLegGroup.position.set(0.09, 0.16, 0);

    const rightLegMesh = new THREE.Mesh(legGeo, this.bodyMaterial);
    rightLegMesh.position.y = -0.07;
    rightLegMesh.castShadow = true;
    this.rightLegGroup.add(rightLegMesh);

    const rightShoe = new THREE.Mesh(shoeGeo, shoeMat);
    rightShoe.position.set(0, -0.15, 0.03);
    rightShoe.castShadow = true;
    this.rightLegGroup.add(rightShoe);

    this.dollGroup.add(this.rightLegGroup);

    // 2. Cute Chubby Torso / Suit (Player Color)
    const torsoGeo = new THREE.CylinderGeometry(0.16, 0.22, 0.32, 24);
    const torsoMesh = new THREE.Mesh(torsoGeo, this.bodyMaterial);
    torsoMesh.position.y = 0.34;
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    this.dollGroup.add(torsoMesh);

    // 3. Cute Cartoon Arms
    const armGeo = new THREE.SphereGeometry(0.065, 12, 12);
    const armMat = this.bodyMaterial;

    const leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.20, 0.36, 0);
    this.dollGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.20, 0.36, 0);
    this.dollGroup.add(rightArm);

    // 4. Cute Doll Round Head with Team Colored Cap Base
    const headGeo = new THREE.SphereGeometry(0.20, 24, 24);
    this.coreMaterial = new THREE.MeshStandardMaterial({
      color: colorConfig.hex,
      roughness: 0.3,
      metalness: 0.2,
      emissive: colorConfig.hex,
      emissiveIntensity: 0.45
    });
    const headMesh = new THREE.Mesh(headGeo, this.coreMaterial);
    headMesh.position.y = 0.62;
    headMesh.castShadow = true;
    this.dollGroup.add(headMesh);

    // 5. Big Friendly Cartoon Eyes with Sparkle Highlights
    const eyeGeo = new THREE.SphereGeometry(0.042, 12, 12);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });

    const pupilGeo = new THREE.SphereGeometry(0.016, 8, 8);
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Left Eye
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.075, 0.65, 0.17);
    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    leftPupil.position.set(-0.065, 0.66, 0.205);
    this.dollGroup.add(leftEye);
    this.dollGroup.add(leftPupil);

    // Right Eye
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.075, 0.65, 0.17);
    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
    rightPupil.position.set(0.065, 0.66, 0.205);
    this.dollGroup.add(rightEye);
    this.dollGroup.add(rightPupil);

    // Cute Smile Line
    const mouthGeo = new THREE.TorusGeometry(0.045, 0.01, 8, 16, Math.PI);
    const mouthMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mouth = new THREE.Mesh(mouthGeo, mouthMat);
    mouth.rotation.x = Math.PI;
    mouth.rotation.z = Math.PI;
    mouth.position.set(0, 0.57, 0.185);
    this.dollGroup.add(mouth);

    // 6. Team-Colored Crown / Cap Matching Player Color Code
    const crownGeo = new THREE.ConeGeometry(0.13, 0.22, 16);
    const crownMat = new THREE.MeshStandardMaterial({
      color: colorConfig.hex,
      emissive: colorConfig.hex,
      emissiveIntensity: 0.6,
      roughness: 0.25,
      metalness: 0.3
    });
    const crownMesh = new THREE.Mesh(crownGeo, crownMat);
    crownMesh.position.y = 0.87;
    this.dollGroup.add(crownMesh);

    // Elegant Gold Rim Base Ring around Cap
    const crownRimGeo = new THREE.TorusGeometry(0.13, 0.025, 12, 24);
    const crownRimMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15,
      metalness: 0.95,
      roughness: 0.15
    });
    const crownRimMesh = new THREE.Mesh(crownRimGeo, crownRimMat);
    crownRimMesh.rotation.x = Math.PI / 2;
    crownRimMesh.position.y = 0.77;
    this.dollGroup.add(crownRimMesh);

    // 7. Selection Indicator Halo Ring at base
    const haloGeo = new THREE.RingGeometry(0.32, 0.58, 32);
    this.haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xffea00,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.0
    });
    this.haloMesh = new THREE.Mesh(haloGeo, this.haloMaterial);
    this.haloMesh.rotation.x = -Math.PI / 2;
    this.haloMesh.position.y = 0.01;
    this.meshGroup.add(this.haloMesh);

    // 8. Floating Glowing Top Arrow/Star Marker
    const markerGeo = new THREE.OctahedronGeometry(0.12, 0);
    this.markerMat = new THREE.MeshStandardMaterial({
      color: 0xffea00,
      emissive: 0xffd700,
      emissiveIntensity: 1.8,
      roughness: 0.1
    });
    this.topMarkerMesh = new THREE.Mesh(markerGeo, this.markerMat);
    this.topMarkerMesh.position.y = 1.15;
    this.topMarkerMesh.visible = false;
    this.meshGroup.add(this.topMarkerMesh);

    // 9. Enlarged Invisible Hitbox for 100% Reliable Touch & Click Raycasting
    const hitboxGeo = new THREE.CylinderGeometry(0.55, 0.55, 1.4, 16);
    const hitboxMat = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0.0,
      depthWrite: false
    });
    this.hitboxMesh = new THREE.Mesh(hitboxGeo, hitboxMat);
    this.hitboxMesh.name = `${this.id}_Hitbox`;
    this.hitboxMesh.position.y = 0.6;
    this.meshGroup.add(this.hitboxMesh);
  }

  setSelectable(selectable) {
    this.isSelectable = selectable;
    if (selectable) {
      this.haloMaterial.opacity = 0.95;
      this.haloMaterial.color.setHex(0xffea00);
      this.coreMaterial.emissiveIntensity = 2.5;
      if (this.topMarkerMesh) this.topMarkerMesh.visible = true;
    } else {
      this.haloMaterial.opacity = 0.0;
      this.coreMaterial.emissiveIntensity = 0.45;
      if (this.topMarkerMesh) this.topMarkerMesh.visible = false;
      this.meshGroup.position.y = this.baseY;
      if (this.dollGroup) {
        this.dollGroup.rotation.z = 0;
      }
      this.resetLegs();
    }
  }

  resetLegs() {
    if (this.leftLegGroup) this.leftLegGroup.rotation.x = 0;
    if (this.rightLegGroup) this.rightLegGroup.rotation.x = 0;
  }

  setPosition(posVector) {
    this.baseY = posVector.y;
    this.meshGroup.position.copy(posVector);
  }

  updateIdle(time) {
    if (this.isSelectable) {
      // Lively vertical bouncing & leg kicking for selectable character
      const bounce = Math.abs(Math.sin(time * 7 + this.tokenIdx * 0.8)) * 0.18;
      this.meshGroup.position.y = this.baseY + bounce;

      if (this.dollGroup) {
        this.dollGroup.rotation.z = Math.sin(time * 6 + this.tokenIdx) * 0.08;
      }

      // Idle leg swing
      if (this.leftLegGroup && this.rightLegGroup) {
        const legAngle = Math.sin(time * 8) * 0.3;
        this.leftLegGroup.rotation.x = legAngle;
        this.rightLegGroup.rotation.x = -legAngle;
      }

      if (this.haloMesh) this.haloMesh.rotation.z = time * 3;
      if (this.topMarkerMesh) {
        this.topMarkerMesh.rotation.y = time * 4;
        this.topMarkerMesh.rotation.x = Math.sin(time * 5) * 0.2;
      }
    }
  }
}

import * as THREE from 'three';

/**
 * 3D Classic Luxury Red Dice Class - Always Red Body with Glowing White Pips
 */
export class Dice3D {
  constructor(scene) {
    this.scene = scene;
    this.diceGroup = new THREE.Group();
    this.diceGroup.name = 'Dice3DGroup';
    this.isRolling = false;
    this.isClickable = false;

    this.buildDiceMesh();
    this.scene.add(this.diceGroup);
    this.diceGroup.position.set(0, 0.8, 0);
  }

  buildDiceMesh() {
    const size = 1.25; // Large size for clear visibility
    const halfSize = size / 2;

    // 1. Classic Crimson Red Die Body (ALWAYS RED)
    const boxGeo = new THREE.BoxGeometry(size, size, size, 4, 4, 4);
    this.boxMat = new THREE.MeshStandardMaterial({
      color: 0xd62828,
      roughness: 0.12,
      metalness: 0.15,
      emissive: 0x440000,
      emissiveIntensity: 0.25
    });
    this.diceMesh = new THREE.Mesh(boxGeo, this.boxMat);
    this.diceMesh.castShadow = true;
    this.diceMesh.receiveShadow = true;
    this.diceGroup.add(this.diceMesh);

    // 2. Dark Crimson Socket Material behind dots
    this.socketMaterial = new THREE.MeshBasicMaterial({
      color: 0x660000
    });

    // 3. ALWAYS Pure Glowing White Pip Dots Material (ALWAYS WHITE)
    this.pipMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 2.5, // High-intensity glowing white light effect
      roughness: 0.05,
      metalness: 0.1
    });

    this.addPips(size);

    // 4. Active Player Clickable Pulsating Glow Ring
    const ringGeo = new THREE.RingGeometry(0.95, 1.35, 32);
    this.ringMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0
    });
    this.ringMesh = new THREE.Mesh(ringGeo, this.ringMat);
    this.ringMesh.rotation.x = -Math.PI / 2;
    this.ringMesh.position.y = -halfSize - 0.05;
    this.diceGroup.add(this.ringMesh);
  }

  addPips(size) {
    const pipRadius = 0.10;
    const socketRadius = 0.118;

    const socketGeo = new THREE.CylinderGeometry(socketRadius, socketRadius, 0.02, 16);
    const pipGeo = new THREE.SphereGeometry(pipRadius, 16, 16);

    const addDot = (x, y, z) => {
      // Dark Crimson Socket Ring
      const socket = new THREE.Mesh(socketGeo, this.socketMaterial);
      socket.position.set(x, y, z);

      if (Math.abs(x) > 0.4) socket.rotation.z = Math.PI / 2;
      else if (Math.abs(z) > 0.4) socket.rotation.x = Math.PI / 2;

      this.diceMesh.add(socket);

      // Pure White Glowing Dot
      const dot = new THREE.Mesh(pipGeo, this.pipMaterial);
      dot.position.set(x, y, z);
      this.diceMesh.add(dot);
    };

    const d = size * 0.25;       // Pip spacing from center
    const offset = size * 0.505; // Slightly offset from face surface for 3D depth

    // Face 1 (+Z) - Single Center Pip
    addDot(0, 0, offset);

    // Face 6 (-Z) - 6 Dots
    addDot(-d, d, -offset); addDot(d, d, -offset);
    addDot(-d, 0, -offset); addDot(d, 0, -offset);
    addDot(-d, -d, -offset); addDot(d, -d, -offset);

    // Face 2 (+X) - 2 Dots
    addDot(offset, d, -d); addDot(offset, -d, d);

    // Face 5 (-X) - 5 Dots
    addDot(-offset, 0, 0);
    addDot(-offset, d, d); addDot(-offset, d, -d);
    addDot(-offset, -d, d); addDot(-offset, -d, -d);

    // Face 3 (+Y) - 3 Dots
    addDot(-d, offset, -d); addDot(0, offset, 0); addDot(d, offset, d);

    // Face 4 (-Y) - 4 Dots
    addDot(-d, -offset, -d); addDot(d, -offset, -d);
    addDot(-d, -offset, d); addDot(d, -offset, d);
  }

  /**
   * Sets active player's color for the outer glow ring while keeping dice RED & pips WHITE
   */
  setActivePlayerColor(colorHexOrPlayerIdx) {
    const turnGlowColors = [0xef4444, 0x22c55e, 0xfacc15, 0x38bdf8];
    let ringHex = 0xfacc15;
    if (typeof colorHexOrPlayerIdx === 'number' && turnGlowColors[colorHexOrPlayerIdx] !== undefined) {
      ringHex = turnGlowColors[colorHexOrPlayerIdx];
    } else if (typeof colorHexOrPlayerIdx === 'number') {
      ringHex = colorHexOrPlayerIdx;
    }
    this.ringMat.color.setHex(ringHex);
  }

  setClickable(clickable) {
    this.isClickable = clickable;
    if (clickable) {
      this.ringMat.opacity = 0.95;
    } else {
      this.ringMat.opacity = 0;
    }
  }

  update(time) {
    if (this.isClickable && !this.isRolling) {
      this.diceGroup.position.y = 0.8 + Math.sin(time * 6) * 0.08;
      this.ringMesh.rotation.z = time * 3;
    }
  }
}

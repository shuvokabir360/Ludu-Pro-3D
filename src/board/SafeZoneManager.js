/**
 * Safe Zone & Home Path Emissive Pulsing Animation Controller
 */
export class SafeZoneManager {
  constructor(boardBuilder) {
    this.boardBuilder = boardBuilder;
    this.time = 0;
  }

  update(delta) {
    this.time += delta * 3;

    // Pulse safe stars rotation & height bobbing
    if (this.boardBuilder.safeStars) {
      this.boardBuilder.safeStars.forEach((starGroup, idx) => {
        starGroup.rotation.y = this.time * 0.5 + idx;
        starGroup.position.y = 0.24 + Math.sin(this.time * 2 + idx) * 0.015;
      });
    }

    // Pulse center crown rotation
    if (this.boardBuilder.centerCrown) {
      this.boardBuilder.centerCrown.rotation.y = this.time * 0.4;
    }
  }
}

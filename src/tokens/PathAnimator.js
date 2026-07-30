import gsap from 'gsap';
import { soundManager } from '../audio/SoundManager.js';

/**
 * GSAP 3D Character Walking, Slow-Mo Kick Action & Smooth Camera Tracking Controller
 */
export class PathAnimator {
  constructor(cameraManager) {
    this.cameraManager = cameraManager;
  }

  /**
   * Animates token step-by-step with 3D leg kicking & high parabolic jump
   */
  animatePath(token3D, pathPoints, onComplete) {
    if (!pathPoints || pathPoints.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    let stepIndex = 0;

    const stepToNextPoint = () => {
      if (stepIndex >= pathPoints.length) {
        // Reset rotation and legs when finished walking
        if (token3D.dollGroup) {
          gsap.to(token3D.dollGroup.rotation, { z: 0, x: 0, duration: 0.15 });
        }
        token3D.resetLegs();
        if (onComplete) onComplete();
        return;
      }

      const targetPos = pathPoints[stepIndex];
      const startPos = token3D.meshGroup.position.clone();
      const stepDuration = 0.22;

      // 1. Orient Character to face walking direction
      const dx = targetPos.x - startPos.x;
      const dz = targetPos.z - startPos.z;
      if (Math.abs(dx) > 0.01 || Math.abs(dz) > 0.01) {
        const targetAngle = Math.atan2(dx, dz);
        if (token3D.dollGroup) {
          gsap.to(token3D.dollGroup.rotation, {
            y: targetAngle,
            duration: 0.08,
            ease: 'power1.out'
          });
        }
      }

      // Play step jump sound
      soundManager.playTokenStep(stepIndex);

      // 2. 3D Leg Kicking Action on each hop
      if (token3D.leftLegGroup && token3D.rightLegGroup) {
        const legSwingAngle = (stepIndex % 2 === 0 ? 1 : -1) * 0.65;
        gsap.to(token3D.leftLegGroup.rotation, {
          x: legSwingAngle,
          duration: stepDuration / 2,
          yoyo: true,
          repeat: 1,
          ease: 'power1.inOut'
        });
        gsap.to(token3D.rightLegGroup.rotation, {
          x: -legSwingAngle,
          duration: stepDuration / 2,
          yoyo: true,
          repeat: 1,
          ease: 'power1.inOut'
        });
      }

      // 3. Single Unified GSAP Timeline for Hop (X, Z linear + Y parabolic arc)
      const tl = gsap.timeline({
        onComplete: () => {
          token3D.meshGroup.position.copy(targetPos);
          if (token3D.dollGroup) {
            gsap.to(token3D.dollGroup.scale, {
              x: 1.18,
              y: 0.82,
              z: 1.18,
              duration: 0.05,
              yoyo: true,
              repeat: 1,
              ease: 'power1.inOut'
            });
          }
          stepIndex++;
          stepToNextPoint();
        }
      });

      // Arc Up (First half of hop)
      tl.to(token3D.meshGroup.position, {
        x: startPos.x + (targetPos.x - startPos.x) * 0.5,
        y: Math.max(startPos.y, targetPos.y) + 0.48,
        z: startPos.z + (targetPos.z - startPos.z) * 0.5,
        duration: stepDuration / 2,
        ease: 'power2.out'
      });

      // Arc Down (Second half of hop)
      tl.to(token3D.meshGroup.position, {
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z,
        duration: stepDuration / 2,
        ease: 'power2.in'
      });
    };

    stepToNextPoint();
  }

  /**
   * Slow-Motion Cinematic Kick Action with Close-Up Camera & Smooth Yard Tracking
   */
  animateCapture(attackerToken, victimToken, targetBasePos, onComplete) {
    const kickPos = attackerToken ? attackerToken.meshGroup.position.clone() : targetBasePos;

    // STEP 1: Slow-Mo Camera Close-Up Zoom
    if (this.cameraManager) {
      this.cameraManager.zoomToKickAction(kickPos);
    }

    // STEP 2: Slow-Motion Wind-up Leg Lift + Whoosh Audio
    soundManager.playWhooshSound();

    if (attackerToken && attackerToken.rightLegGroup) {
      // Wind-up leg lift in slow motion (0.35s)
      gsap.to(attackerToken.rightLegGroup.rotation, {
        x: -Math.PI * 0.8,
        duration: 0.35,
        ease: 'power2.out',
        onComplete: () => {
          // STEP 3: Kick Strike Impact Moment + Kick SFX
          soundManager.playKickSound();

          // Rapid kick strike forward
          gsap.to(attackerToken.rightLegGroup.rotation, {
            x: 0,
            duration: 0.25,
            ease: 'back.out(2)',
            onComplete: () => {
              attackerToken.resetLegs();
            }
          });

          if (attackerToken.dollGroup) {
            gsap.to(attackerToken.dollGroup.rotation, {
              x: -0.35,
              duration: 0.15,
              yoyo: true,
              repeat: 1
            });
          }

          // STEP 4: Flying Air Sound + Victim 360 Spin Flip & Launch Arc
          soundManager.playFlySound();

          if (victimToken && victimToken.dollGroup) {
            gsap.to(victimToken.dollGroup.rotation, {
              x: Math.PI * 2,
              y: Math.PI * 2,
              duration: 0.75,
              ease: 'power2.out',
              onComplete: () => {
                victimToken.dollGroup.rotation.set(0, 0, 0);
              }
            });
          }

          const victimMesh = (victimToken && victimToken.meshGroup) ? victimToken.meshGroup : attackerToken.meshGroup;

          // STEP 5: Smooth Camera Tracking to Home Base Yard
          if (this.cameraManager) {
            this.cameraManager.trackFlyingPawn(targetBasePos);
          }

          // Launch Arc to Base Yard
          gsap.to(victimMesh.position, {
            x: targetBasePos.x,
            z: targetBasePos.z,
            duration: 0.75,
            ease: 'power2.inOut'
          });

          gsap.to(victimMesh.position, {
            y: targetBasePos.y + 2.8,
            duration: 0.38,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out',
            onComplete: () => {
              // STEP 6: Yard Landing Impact Sound & Bounce
              soundManager.playLandingThud();

              if (victimToken) {
                victimToken.setPosition(targetBasePos);
                victimToken.resetLegs();

                if (victimToken.dollGroup) {
                  gsap.to(victimToken.dollGroup.scale, {
                    x: 1.3,
                    y: 0.7,
                    z: 1.3,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: 'back.out(2)'
                  });
                }
              }

              // STEP 7: Reset Camera Smoothly back to Overview Framing
              setTimeout(() => {
                if (this.cameraManager) {
                  this.cameraManager.resetCameraSmooth(() => {
                    if (onComplete) onComplete();
                  });
                } else {
                  if (onComplete) onComplete();
                }
              }, 250);
            }
          });
        }
      });
    } else {
      // Fallback if leg group not initialized
      soundManager.playKickSound();
      soundManager.playFlySound();

      const victimMesh = (victimToken && victimToken.meshGroup) ? victimToken.meshGroup : attackerToken.meshGroup;
      gsap.to(victimMesh.position, {
        x: targetBasePos.x,
        z: targetBasePos.z,
        duration: 0.7,
        ease: 'power2.inOut',
        onComplete: () => {
          soundManager.playLandingThud();
          if (victimToken) victimToken.setPosition(targetBasePos);
          if (this.cameraManager) {
            this.cameraManager.resetCameraSmooth(onComplete);
          } else {
            if (onComplete) onComplete();
          }
        }
      });
    }
  }
}

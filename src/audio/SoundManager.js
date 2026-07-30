/**
 * Procedural Web Audio API + Howler.js Sound Manager for Ludo Pro 3D
 * Guarantees zero missing audio asset failures while supporting rich luxury SFX & BGM.
 */
export class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.sfxVolume = 0.9;
    this.musicVolume = 0.6;
    this.bgmOscillator = null;
    this.bgmGain = null;
    this.isBgmPlaying = false;

    this.initAudioContext();
  }

  initAudioContext() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      this.ctx = new AudioCtx();
    }
  }

  resumeContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolumes(sfxVol, musicVol) {
    this.sfxVolume = sfxVol;
    this.musicVolume = musicVol;
    if (this.bgmGain) {
      this.bgmGain.gain.setValueAtTime(this.musicVolume * 0.15, this.ctx ? this.ctx.currentTime : 0);
    }
  }

  /**
   * Play button click sound
   */
  playButtonClick() {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(this.sfxVolume * 0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  /**
   * Play dice roll tumble sound
   */
  playDiceRoll() {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const now = this.ctx.currentTime;
    const duration = 0.7;

    // White noise for dice rattling inside cup/hand
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(3, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(this.sfxVolume * 0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start(now);
    whiteNoise.stop(now + duration);

    // Hard wood click impacts on roll end
    setTimeout(() => this.playDiceLand(), 600);
  }

  /**
   * Play dice landing impact sound
   */
  playDiceLand() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.12);

    gain.gain.setValueAtTime(this.sfxVolume * 0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  /**
   * Play beautiful celebratory jingle when 6 is rolled!
   */
  playSixJingle() {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.05, now + 0.18);

        gain.gain.setValueAtTime(this.sfxVolume * 0.75, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.25);
      }, idx * 70);
    });
  }

  /**
   * Play pawn step jump sound
   */
  playTokenStep(pitchOffset = 0) {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const now = this.ctx.currentTime;
    const baseFreq = 440 + pitchOffset * 20;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.06);

    gain.gain.setValueAtTime(this.sfxVolume * 0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  /**
   * Play Slow-Motion Wind-up Leg Whoosh Sound Effect
   */
  playWhooshSound() {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(650, now + 0.35);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(this.sfxVolume * 0.7, now + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  /**
   * Play martial arts kick / lathi impact sound when attacking enemy pawn
   */
  playKickSound() {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const now = this.ctx.currentTime;

    // 1. Sharp Punchy Kick Impact Oscillator
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(450, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.22);

    gain.gain.setValueAtTime(this.sfxVolume * 1.0, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.22);

    // 2. High Kick Slap Noise Transient
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.1);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(this.sfxVolume * 0.9, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    noise.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + 0.1);
  }

  /**
   * Play Flying Whistle Sound Effect while pawn flies through air
   */
  playFlySound() {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, now);
    osc.frequency.exponentialRampToValueAtTime(350, now + 0.65);

    gain.gain.setValueAtTime(this.sfxVolume * 0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.65);
  }

  /**
   * Play Yard Landing Thud Impact Sound
   */
  playLandingThud() {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.25);

    gain.gain.setValueAtTime(this.sfxVolume * 0.85, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  /**
   * Play token capture shockwave crash sound
   */
  playCapture() {
    this.playKickSound();
  }

  /**
   * Play victory fanfare melody
   */
  playVictory() {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(this.sfxVolume * 0.6, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.3);
      }, idx * 120);
    });
  }

  /**
   * Play coin reward sound
   */
  playCoinReward() {
    if (!this.enabled || !this.ctx) return;
    this.resumeContext();

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'sine';
    osc1.frequency.setValueAtTime(987.77, now); // B5
    osc2.frequency.setValueAtTime(1318.51, now + 0.08); // E6

    gain.gain.setValueAtTime(this.sfxVolume * 0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.1);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.25);
  }

  /**
   * Ambient procedural background relaxing melody/pad
   */
  startBGM() {
    if (this.isBgmPlaying || !this.ctx) return;
    this.resumeContext();
    this.isBgmPlaying = true;

    // Create ambient chord loop using dual low oscillators
    const now = this.ctx.currentTime;
    this.bgmGain = this.ctx.createGain();
    this.bgmGain.gain.setValueAtTime(this.musicVolume * 0.1, now);
    this.bgmGain.connect(this.ctx.destination);

    const freqs = [130.81, 164.81, 196.00]; // C3, E3, G3 warm chord
    freqs.forEach(f => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);
      osc.connect(this.bgmGain);
      osc.start(now);
    });
  }

  stopBGM() {
    if (!this.isBgmPlaying) return;
    this.isBgmPlaying = false;
    if (this.bgmGain) {
      this.bgmGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx ? this.ctx.currentTime + 0.5 : 0);
    }
  }
}

export const soundManager = new SoundManager();

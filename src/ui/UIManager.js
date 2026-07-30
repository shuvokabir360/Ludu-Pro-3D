import * as THREE from 'three';
import { Storage } from '../data/Storage.js';
import { soundManager } from '../audio/SoundManager.js';
import { ScreenManager } from './ScreenManager.js';
import { HUD } from './HUD.js';
import { Modals } from './Modals.js';

/**
 * Master UI Architecture & Event Bus Coordinator
 */
export class UIManager {
  constructor() {
    this.data = Storage.load();
    this.soundManager = soundManager;
    this.gameController = null;
    this.listeners = {};

    this.hud = new HUD(this);
    this.screens = new ScreenManager(this);
    this.modals = new Modals(this);

    this.toastContainer = null;
    this.createToastDOM();
    this.updateWalletUI();
    this.bindHomeEvents();
  }

  setGameController(controller) {
    this.gameController = controller;
  }

  createToastDOM() {
    this.toastContainer = document.createElement('div');
    this.toastContainer.id = 'toast-container';
    this.toastContainer.className = 'toast-container';
    document.getElementById('app').appendChild(this.toastContainer);
  }

  updateWalletUI() {
    const coinsText = document.getElementById('home-coins-text');
    const gemsText = document.getElementById('home-gems-text');
    const nameText = document.getElementById('home-user-name');
    const levelText = document.getElementById('home-user-level');
    const avatarText = document.getElementById('home-user-avatar');

    if (coinsText) coinsText.innerText = this.data.profile.coins.toLocaleString();
    if (gemsText) gemsText.innerText = this.data.profile.gems.toLocaleString();
    if (nameText) nameText.innerText = this.data.profile.name;
    if (levelText) levelText.innerText = `Lvl ${this.data.profile.level}`;
    if (avatarText) avatarText.innerText = this.data.profile.avatar;
  }

  bindHomeEvents() {
    const el = (id) => document.getElementById(id);

    if (el('btn-open-store')) el('btn-open-store').onclick = () => this.modals.showStoreModal();
    if (el('btn-lucky-spin')) el('btn-lucky-spin').onclick = () => this.modals.showLuckySpinModal();
    if (el('btn-daily-rewards')) el('btn-daily-rewards').onclick = () => this.modals.showDailyRewardsModal();
    if (el('btn-leaderboard')) el('btn-leaderboard').onclick = () => this.modals.showLeaderboardModal();
    if (el('btn-achievements')) el('btn-achievements').onclick = () => this.modals.showAchievementsModal();
    if (el('btn-settings')) el('btn-settings').onclick = () => this.modals.showSettingsModal();
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 2200);
  }

  showFloatingText(text, x, y) {
    const floatEl = document.createElement('div');
    floatEl.className = 'floating-text-item';
    floatEl.style.left = `${x}px`;
    floatEl.style.top = `${y}px`;
    floatEl.innerText = text;
    document.getElementById('app').appendChild(floatEl);

    setTimeout(() => floatEl.remove(), 1200);
  }

  showScreen(name) {
    this.screens.showScreen(name);
  }

  showVictoryModal(rankings, players) {
    this.screens.populateVictoryScreen(rankings, players);
  }

  on(event, callback) {
    this.listeners[event] = callback;
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event](data);
    }
  }
}

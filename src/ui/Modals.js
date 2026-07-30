import { STORE_ITEMS } from '../data/StoreData.js';
import { ACHIEVEMENTS } from '../data/AchievementsData.js';
import { Storage } from '../data/Storage.js';
import { networkManager } from '../game/NetworkManager.js';

/**
 * Popups & Interactive Feature Modals Manager
 */
export class Modals {
  constructor(uiManager) {
    this.uiManager = uiManager;
    this.modalContainer = null;

    this.createModalsDOM();
  }

  createModalsDOM() {
    this.modalContainer = document.createElement('div');
    this.modalContainer.id = 'modals-overlay-container';
    this.modalContainer.className = 'modals-container hidden';

    this.modalContainer.innerHTML = `
      <div class="modal-backdrop"></div>
      <div id="active-modal-wrapper" class="glass-card modal-wrapper">
        <button id="btn-close-modal" class="btn-close-glass">✖</button>
        <div id="modal-dynamic-body" class="modal-body">
          <!-- Dynamic Content Rendered Here -->
        </div>
      </div>
    `;

    document.getElementById('app').appendChild(this.modalContainer);

    document.getElementById('btn-close-modal').addEventListener('click', () => this.closeModal());
    this.modalContainer.querySelector('.modal-backdrop').addEventListener('click', () => this.closeModal());
  }

  openModal(contentHTML) {
    document.getElementById('modal-dynamic-body').innerHTML = contentHTML;
    this.modalContainer.classList.remove('hidden');
    this.uiManager.soundManager.playButtonClick();
  }

  closeModal() {
    this.modalContainer.classList.add('hidden');
    this.uiManager.soundManager.playButtonClick();
  }

  // 1. STORE MODAL
  showStoreModal() {
    const data = this.uiManager.data;
    const html = `
      <h2 class="modal-title">LUXURY STORE</h2>
      <div class="store-tabs">
        <button class="store-tab-btn active" data-tab="boards">Boards</button>
        <button class="store-tab-btn" data-tab="pawns">Pawns</button>
        <button class="store-tab-btn" data-tab="dice">Dice</button>
      </div>

      <div id="store-grid-content" class="store-grid">
        ${this.renderStoreItems('boards', data)}
      </div>
    `;
    this.openModal(html);
    this.bindStoreEvents();
  }

  renderStoreItems(category, data) {
    const items = STORE_ITEMS[category] || [];
    const owned = data.inventory[`owned${category.charAt(0).toUpperCase() + category.slice(1)}`] || [];
    const equipped = data.inventory[`equipped${category.charAt(0).toUpperCase() + category.slice(1, -1)}`] || '';

    return items.map(item => {
      const isOwned = owned.includes(item.id);
      const isEquipped = equipped === item.id;
      const currencyIcon = item.currency === 'gems' ? '💎' : '🪙';

      let btnLabel = isEquipped ? 'EQUIPPED' : isOwned ? 'EQUIP' : `${currencyIcon} ${item.price}`;
      let btnClass = isEquipped ? 'btn-disabled' : isOwned ? 'btn-secondary-glass' : 'btn-primary-glow';

      return `
        <div class="glass-card store-item-card">
          <div class="store-item-icon">${item.icon}</div>
          <div class="store-item-details">
            <span class="store-item-name">${item.name}</span>
            <span class="store-item-sub">${item.subtitle}</span>
          </div>
          <button class="store-buy-btn ${btnClass}" data-cat="${category}" data-id="${item.id}" ${isEquipped ? 'disabled' : ''}>
            ${btnLabel}
          </button>
        </div>
      `;
    }).join('');
  }

  bindStoreEvents() {
    const body = document.getElementById('modal-dynamic-body');
    body.querySelectorAll('.store-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        body.querySelectorAll('.store-tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.dataset.tab;
        document.getElementById('store-grid-content').innerHTML = this.renderStoreItems(cat, this.uiManager.data);
        this.bindStoreEvents();
      });
    });

    body.querySelectorAll('.store-buy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.target.dataset.cat;
        const id = e.target.dataset.id;
        const item = STORE_ITEMS[cat].find(i => i.id === id);
        const ownedKey = `owned${cat.charAt(0).toUpperCase() + cat.slice(1)}`;
        const equipKey = `equipped${cat.charAt(0).toUpperCase() + cat.slice(1, -1)}`;

        if (this.uiManager.data.inventory[ownedKey].includes(id)) {
          // Equip item
          this.uiManager.data.inventory[equipKey] = id;
          Storage.save(this.uiManager.data);
          this.uiManager.showToast(`Equipped ${item.name}!`, 'success');
        } else {
          // Purchase item
          if (item.currency === 'coins' && this.uiManager.data.profile.coins >= item.price) {
            Storage.updateCoins(this.uiManager.data, -item.price);
            this.uiManager.data.inventory[ownedKey].push(id);
            this.uiManager.data.inventory[equipKey] = id;
            Storage.save(this.uiManager.data);
            this.uiManager.showToast(`Unlocked ${item.name}!`, 'success');
          } else if (item.currency === 'gems' && this.uiManager.data.profile.gems >= item.price) {
            Storage.updateGems(this.uiManager.data, -item.price);
            this.uiManager.data.inventory[ownedKey].push(id);
            this.uiManager.data.inventory[equipKey] = id;
            Storage.save(this.uiManager.data);
            this.uiManager.showToast(`Unlocked ${item.name}!`, 'success');
          } else {
            this.uiManager.showToast('Insufficient Currency!', 'warning');
          }
        }
        this.uiManager.updateWalletUI();
        document.getElementById('store-grid-content').innerHTML = this.renderStoreItems(cat, this.uiManager.data);
        this.bindStoreEvents();
      });
    });
  }

  // 2. LUCKY SPIN WHEEL MODAL
  showLuckySpinModal() {
    const html = `
      <h2 class="modal-title">LUCKY SPIN WHEEL</h2>
      <div class="spin-wheel-wrapper">
        <canvas id="lucky-spin-canvas" width="280" height="280"></canvas>
        <div class="wheel-pointer">▼</div>
      </div>
      <button id="btn-trigger-spin" class="btn-primary-glow btn-large mt-4">
        SPIN NOW
      </button>
    `;
    this.openModal(html);
    this.initSpinWheelCanvas();
  }

  initSpinWheelCanvas() {
    const canvas = document.getElementById('lucky-spin-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rewards = [100, 250, 500, 1000, 50, 2000];
    const colors = ['#ef4444', '#22c55e', '#eab308', '#3b82f6', '#a855f7', '#ec4899'];
    let currentAngle = 0;

    const drawWheel = (angle) => {
      const numSlices = rewards.length;
      const sliceAngle = (Math.PI * 2) / numSlices;
      ctx.clearRect(0, 0, 280, 280);

      for (let i = 0; i < numSlices; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(140, 140);
        ctx.arc(140, 140, 130, angle + i * sliceAngle, angle + (i + 1) * sliceAngle);
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(140, 140);
        ctx.rotate(angle + (i + 0.5) * sliceAngle);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.fillText(`🪙 ${rewards[i]}`, 50, 5);
        ctx.restore();
      }
    };

    drawWheel(currentAngle);

    document.getElementById('btn-trigger-spin').addEventListener('click', () => {
      const btn = document.getElementById('btn-trigger-spin');
      btn.disabled = true;
      let speed = 0.4;
      let friction = 0.985;

      const spinInterval = setInterval(() => {
        currentAngle += speed;
        speed *= friction;
        drawWheel(currentAngle);

        if (speed < 0.005) {
          clearInterval(spinInterval);
          const wonCoins = rewards[Math.floor(Math.random() * rewards.length)];
          Storage.updateCoins(this.uiManager.data, wonCoins);
          this.uiManager.updateWalletUI();
          this.uiManager.showToast(`You won 🪙 ${wonCoins} Coins!`, 'success');
          btn.disabled = false;
        }
      }, 16);
    });
  }

  // 3. DAILY REWARDS MODAL
  showDailyRewardsModal() {
    const rewards = [
      { day: 1, reward: '🪙 200' },
      { day: 2, reward: '🪙 400' },
      { day: 3, reward: '💎 10' },
      { day: 4, reward: '🪙 800' },
      { day: 5, reward: '🪙 1200' },
      { day: 6, reward: '💎 25' },
      { day: 7, reward: '🪙 5000' }
    ];

    const html = `
      <h2 class="modal-title">DAILY LOG-IN REWARDS</h2>
      <div class="daily-grid">
        ${rewards.map(r => `
          <div class="glass-card daily-card ${r.day === 1 ? 'active' : ''}">
            <span class="day-num">Day ${r.day}</span>
            <span class="day-reward">${r.reward}</span>
          </div>
        `).join('')}
      </div>
      <button id="btn-claim-daily" class="btn-primary-glow btn-large mt-4">CLAIM TODAY'S REWARD</button>
    `;
    this.openModal(html);

    document.getElementById('btn-claim-daily').addEventListener('click', () => {
      Storage.updateCoins(this.uiManager.data, 500);
      this.uiManager.updateWalletUI();
      this.uiManager.showToast('Claimed 🪙 500 Daily Bonus!', 'success');
      this.closeModal();
    });
  }

  // 4. LEADERBOARD MODAL
  showLeaderboardModal() {
    const dummyRanks = [
      { rank: 1, name: 'LudoKing99', coins: '142,500', avatar: '👑' },
      { rank: 2, name: 'MasterRoller', coins: '98,200', avatar: '🔥' },
      { rank: 3, name: 'CyberPawn', coins: '76,400', avatar: '⚡' },
      { rank: 4, name: 'Player 1 (You)', coins: '2,500', avatar: '👑' }
    ];

    const html = `
      <h2 class="modal-title">GLOBAL LEADERBOARD</h2>
      <div class="leaderboard-list">
        ${dummyRanks.map(r => `
          <div class="glass-card rank-row ${r.rank === 4 ? 'highlight' : ''}">
            <span class="rank-num">#${r.rank}</span>
            <span class="rank-avatar">${r.avatar}</span>
            <span class="rank-name">${r.name}</span>
            <span class="rank-coins">🪙 ${r.coins}</span>
          </div>
        `).join('')}
      </div>
    `;
    this.openModal(html);
  }

  // 5. ACHIEVEMENTS MODAL
  showAchievementsModal() {
    const html = `
      <h2 class="modal-title">ACHIEVEMENTS</h2>
      <div class="achievements-list">
        ${ACHIEVEMENTS.map(ach => `
          <div class="glass-card ach-card">
            <div class="ach-icon">${ach.icon}</div>
            <div class="ach-info">
              <span class="ach-title">${ach.title}</span>
              <span class="ach-sub">${ach.description}</span>
            </div>
            <button class="btn-secondary-glass ach-claim-btn" data-id="${ach.id}">
              🪙 ${ach.rewardCoins}
            </button>
          </div>
        `).join('')}
      </div>
    `;
    this.openModal(html);

    document.querySelectorAll('.ach-claim-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Storage.updateCoins(this.uiManager.data, 500);
        this.uiManager.updateWalletUI();
        this.uiManager.showToast('Claimed 🪙 500 Reward!', 'success');
        btn.disabled = true;
        btn.innerText = 'CLAIMED';
      });
    });
  }

  // 6. SETTINGS MODAL
  showSettingsModal() {
    const settings = this.uiManager.data.settings;
    const html = `
      <h2 class="modal-title">SETTINGS</h2>
      <div class="settings-form">
        <div class="setting-row">
          <label>Sound SFX</label>
          <input type="range" id="slider-sfx" min="0" max="1" step="0.1" value="${settings.sfxVolume}">
        </div>
        <div class="setting-row">
          <label>Music BGM</label>
          <input type="range" id="slider-bgm" min="0" max="1" step="0.1" value="${settings.musicVolume}">
        </div>
        <div class="setting-row">
          <label>Haptics & Vibration</label>
          <input type="checkbox" id="check-haptics" ${settings.haptics ? 'checked' : ''}>
        </div>
      </div>
      <button id="btn-save-settings" class="btn-primary-glow w-full mt-4">SAVE SETTINGS</button>
    `;
    this.openModal(html);

    document.getElementById('btn-save-settings').addEventListener('click', () => {
      settings.sfxVolume = parseFloat(document.getElementById('slider-sfx').value);
      settings.musicVolume = parseFloat(document.getElementById('slider-bgm').value);
      settings.haptics = document.getElementById('check-haptics').checked;

      Storage.save(this.uiManager.data);
      this.uiManager.soundManager.setVolumes(settings.sfxVolume, settings.musicVolume);
      this.uiManager.showToast('Settings Saved!', 'success');
      this.closeModal();
    });
  }

  // 7. PAUSE MODAL
  showPauseModal() {
    const settings = this.uiManager.data.settings;
    const html = `
      <h2 class="modal-title">GAME PAUSED</h2>
      
      <!-- Real-time Sound Control in Pause Menu -->
      <div class="settings-form" style="margin: 15px 0; background: rgba(255,255,255,0.05); padding: 12px; border-radius: 16px;">
        <div class="setting-row" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <label style="color:#e2e8f0; font-weight:700; font-size:0.85rem;">Sound SFX</label>
          <input type="range" id="pause-slider-sfx" min="0" max="1" step="0.1" value="${settings.sfxVolume}" style="width:120px;">
        </div>
        <div class="setting-row" style="display:flex; justify-content:space-between; align-items:center;">
          <label style="color:#e2e8f0; font-weight:700; font-size:0.85rem;">Music BGM</label>
          <input type="range" id="pause-slider-bgm" min="0" max="1" step="0.1" value="${settings.musicVolume}" style="width:120px;">
        </div>
      </div>

      <div class="pause-actions">
        <button id="btn-resume-game" class="btn-primary-glow btn-large w-full">RESUME MATCH</button>
        <button id="btn-quit-match" class="btn-secondary-glass btn-large w-full mt-3">QUIT TO MAIN MENU</button>
      </div>
    `;
    this.openModal(html);

    const sfxSlider = document.getElementById('pause-slider-sfx');
    const bgmSlider = document.getElementById('pause-slider-bgm');

    const updateVolumes = () => {
      settings.sfxVolume = parseFloat(sfxSlider.value);
      settings.musicVolume = parseFloat(bgmSlider.value);
      Storage.save(this.uiManager.data);
      this.uiManager.soundManager.setVolumes(settings.sfxVolume, settings.musicVolume);
    };

    sfxSlider.addEventListener('input', updateVolumes);
    bgmSlider.addEventListener('input', updateVolumes);

    document.getElementById('btn-resume-game').addEventListener('click', () => this.closeModal());
    document.getElementById('btn-quit-match').addEventListener('click', () => {
      this.closeModal();
      this.uiManager.screens.showScreen('home');
    });
  }

  showLoadingModal(message = 'Connecting to Firebase...') {
    const html = `
      <div style="text-align:center; padding: 25px 12px;">
        <div style="margin: 0 auto 16px auto; width: 44px; height: 44px; border: 4px solid rgba(250, 204, 21, 0.2); border-top: 4px solid #facc15; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
        <h3 style="color:#ffffff; font-weight:800; font-size:1.15rem; margin-bottom:6px; font-family:'Outfit',sans-serif;">${message}</h3>
        <p style="color:#94a3b8; font-size:0.85rem;">Please wait a moment...</p>
      </div>
    `;
    this.openModal(html);
  }

  showOnlineChoiceModal() {
    const html = `
      <h2 class="modal-title">ONLINE MULTIPLAYER</h2>
      <p class="modal-sub" style="text-align:center; color:#94a3b8; margin-bottom:14px;">Select an option to play with friends online</p>

      <div class="online-choice-container">
        <button id="modal-btn-create-room" class="btn-online-choice btn-online-choice-create">
          <span class="choice-icon">➕</span>
          <div>
            <span class="choice-title">CREATE PRIVATE ROOM</span>
            <span class="choice-sub">Host a match & get 6-digit invite code</span>
          </div>
        </button>

        <button id="modal-btn-join-room" class="btn-online-choice btn-online-choice-join">
          <span class="choice-icon">🔑</span>
          <div>
            <span class="choice-title">JOIN PRIVATE ROOM</span>
            <span class="choice-sub">Enter friend's 6-digit invite code</span>
          </div>
        </button>
      </div>
    `;
    this.openModal(html);

    document.getElementById('modal-btn-create-room').addEventListener('click', () => {
      this.showCreateRoomModal();
    });

    document.getElementById('modal-btn-join-room').addEventListener('click', () => {
      this.showJoinRoomModal();
    });
  }

  // 8. CREATE CUSTOM ROOM LOBBY MODAL
  async showCreateRoomModal() {
    this.showLoadingModal('Creating Online Room...');
    let roomCode = '......';
    try {
      roomCode = await networkManager.createPrivateRoom(this.uiManager.data.profile, 4);
    } catch (e) {
      this.uiManager.showToast('Firebase Connection Error: ' + e.message, 'warning');
      return;
    }

    const html = `
      <h2 class="modal-title">CUSTOM ROOM LOBBY</h2>
      <p class="modal-sub" style="text-align:center; color:#94a3b8; margin-bottom:12px;">Share this code with your friends to join</p>

      <div class="room-code-badge glass-card" style="text-align:center; padding:12px; margin-bottom:15px; background:linear-gradient(135deg, rgba(234,179,8,0.2), rgba(245,158,11,0.3)); border:2px dashed #facc15; border-radius:16px;">
        <span style="font-size:0.8rem; color:#fef08a; display:block; font-weight:700;">ROOM CODE (FIREBASE)</span>
        <span id="room-code-display" style="font-family:'Outfit',sans-serif; font-size:2.2rem; font-weight:900; color:#fff; letter-spacing:4px;">${roomCode}</span>
        <br/>
        <button id="btn-copy-room-code" class="btn-secondary-glass mt-2" style="font-size:0.8rem; padding:4px 14px; margin-top:8px;">📋 COPY CODE</button>
      </div>

      <div class="mode-options">
        <label class="mode-label" style="color:#fff; font-size:0.8rem; font-weight:800;">MAX PLAYERS:</label>
        <div class="segmented-control" id="custom-room-player-count">
          <button class="seg-btn" data-val="2">2P</button>
          <button class="seg-btn" data-val="3">3P</button>
          <button class="seg-btn active" data-val="4">4P</button>
        </div>
      </div>

      <div id="lobby-players-container" class="lobby-players-list" style="margin:12px 0;">
        <div class="glass-card" style="display:flex; align-items:center; gap:10px; padding:8px 12px; margin-bottom:6px; background:rgba(255,255,255,0.08);">
          <span>👑</span>
          <span style="font-weight:700; font-size:0.9rem; color:#fff;">${this.uiManager.data.profile.name} (Host)</span>
          <span style="margin-left:auto; color:#22c55e; font-size:0.75rem; font-weight:800;">READY</span>
        </div>
        <div class="glass-card" style="display:flex; align-items:center; gap:10px; padding:8px 12px; margin-bottom:6px; opacity:0.65;">
          <span>🟢</span>
          <span style="font-size:0.85rem; color:#94a3b8;">Waiting for Player 2...</span>
        </div>
        <div class="glass-card" style="display:flex; align-items:center; gap:10px; padding:8px 12px; margin-bottom:6px; opacity:0.65;">
          <span>🟡</span>
          <span style="font-size:0.85rem; color:#94a3b8;">Waiting for Player 3...</span>
        </div>
        <div class="glass-card" style="display:flex; align-items:center; gap:10px; padding:8px 12px; opacity:0.65;">
          <span>🔵</span>
          <span style="font-size:0.85rem; color:#94a3b8;">Waiting for Player 4...</span>
        </div>
      </div>

      <button id="btn-start-custom-room" class="btn-primary-glow btn-large w-full mt-3">START ROOM MATCH 🚀</button>
    `;
    this.openModal(html);

    // Listen to Firebase room player updates live in lobby
    networkManager.on('onRoomUpdated', (roomData) => {
      if (!roomData || !roomData.players) return;
      const players = Object.values(roomData.players);
      const container = document.getElementById('lobby-players-container');
      if (container) {
        container.innerHTML = players.map(p => `
          <div class="glass-card" style="display:flex; align-items:center; gap:10px; padding:8px 12px; margin-bottom:6px; background:rgba(255,255,255,0.08);">
            <span>${p.avatar || '🎲'}</span>
            <span style="font-weight:700; font-size:0.9rem; color:#fff;">${p.name} ${p.isHost ? '(Host)' : ''}</span>
            <span style="margin-left:auto; color:#22c55e; font-size:0.75rem; font-weight:800;">${p.isOnline ? 'ONLINE' : 'OFFLINE'}</span>
          </div>
        `).join('');
      }
    });

    document.getElementById('btn-copy-room-code').addEventListener('click', () => {
      navigator.clipboard.writeText(roomCode);
      this.uiManager.showToast('Room Code Copied!', 'success');
    });

    document.getElementById('btn-start-custom-room').addEventListener('click', () => {
      this.closeModal();
      const count = parseInt(document.querySelector('#custom-room-player-count .seg-btn.active').dataset.val);
      this.uiManager.gameController.startNewGame('online_room', count, 'Medium', this.uiManager.data.profile);
    });

    document.querySelectorAll('#custom-room-player-count .seg-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('#custom-room-player-count .seg-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  }

  // 9. JOIN CUSTOM ROOM MODAL
  showJoinRoomModal() {
    const html = `
      <h2 class="modal-title">JOIN PRIVATE ROOM</h2>
      <p class="modal-sub" style="text-align:center; color:#94a3b8; margin-bottom:14px;">Enter 6-digit Room Code to join game</p>

      <div class="setting-row" style="margin-bottom:16px;">
        <input type="text" id="input-room-code" placeholder="Enter Room Code (e.g. 482915)" style="width:100%; padding:14px; text-align:center; font-family:'Outfit',sans-serif; font-size:1.3rem; font-weight:800; border-radius:14px; border:2px solid var(--accent-gold); background:rgba(0,0,0,0.5); color:#fff; letter-spacing:2px;">
      </div>

      <button id="btn-submit-join-room" class="btn-primary-glow btn-large w-full">JOIN ROOM MATCH 🔑</button>
    `;
    this.openModal(html);

    document.getElementById('btn-submit-join-room').addEventListener('click', async () => {
      const code = document.getElementById('input-room-code').value.trim();
      if (!code || code.length < 5) {
        this.uiManager.showToast('Please enter a valid 6-digit Room Code!', 'warning');
        return;
      }

      this.showLoadingModal('Joining Online Room...');
      try {
        const playerData = await networkManager.joinPrivateRoom(code, this.uiManager.data.profile);
        this.closeModal();
        this.uiManager.gameController.startNewGame('online_room', 4, 'Medium', this.uiManager.data.profile);
      } catch (err) {
        this.closeModal();
        this.uiManager.showToast(err.message || 'Failed to join room', 'warning');
      }
    });
  }
}

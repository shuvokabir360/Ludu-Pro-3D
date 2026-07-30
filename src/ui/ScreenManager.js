/**
 * Full-Screen Navigation Controller (Splash, Home, ModeSelect, RoomLobby, Victory)
 */
export class ScreenManager {
  constructor(uiManager) {
    this.uiManager = uiManager;
    this.screens = {};
    this.currentScreen = null;

    this.createScreenDOMs();
  }

  createScreenDOMs() {
    const app = document.getElementById('app');

    // 1. SPLASH SCREEN
    const splash = document.createElement('div');
    splash.id = 'screen-splash';
    splash.className = 'screen-overlay screen-full splash-screen';
    splash.innerHTML = `
      <div class="splash-content">
        <div class="logo-container">
          <div class="logo-icon">🎲</div>
          <h1 class="logo-title">LUDO PRO 3D</h1>
          <p class="logo-subtitle">ULTIMATE LUXURY EXPERIENCE</p>
        </div>
        <div class="tap-to-start">
          <button id="btn-start-game" class="btn-primary-glow btn-large">
            TAP TO PLAY
          </button>
        </div>
      </div>
    `;
    app.appendChild(splash);
    this.screens['splash'] = splash;

    // 2. HOME SCREEN (PREMIUM REDESIGN)
    const home = document.createElement('div');
    home.id = 'screen-home';
    home.className = 'screen-overlay screen-full home-screen hidden';
    home.innerHTML = `
      <!-- Top Profile & Wallet Bar -->
      <div class="home-top-bar">
        <div id="user-profile-widget" class="glass-card profile-card">
          <span id="home-user-avatar" class="avatar-icon">👑</span>
          <div class="profile-details">
            <span id="home-user-name" class="user-name">Player 1</span>
            <div class="level-progress-bar">
              <div id="home-level-fill" class="level-fill" style="width: 60%"></div>
            </div>
            <span id="home-user-level" class="user-level">Lvl 1</span>
          </div>
        </div>

        <div class="wallet-container">
          <div class="glass-card wallet-item">
            <span>🪙</span>
            <span id="home-coins-text">2,500</span>
          </div>
          <div class="glass-card wallet-item">
            <span>💎</span>
            <span id="home-gems-text">50</span>
          </div>
        </div>
      </div>

      <!-- PREMIUM GAME CARDS SECTION -->
      <div class="home-center-content">

        <!-- CLASSIC LUDO CARD -->
        <div class="home-game-card home-card-ludo">
          <div class="home-card-glow"></div>
          <div class="home-card-icon">🎲</div>
          <h2 class="home-card-title">CLASSIC LUDO</h2>
          <p class="home-card-desc">Roll the dice & race to victory!</p>
          <div class="home-card-buttons">
            <button id="btn-ludo-offline" class="home-card-btn hcb-offline">
              <span class="hcb-icon">🏠</span>
              <div class="hcb-text">
                <span class="hcb-title">OFFLINE</span>
                <span class="hcb-sub">VS AI & Pass Play</span>
              </div>
            </button>
            <button id="btn-ludo-online" class="home-card-btn hcb-online">
              <span class="hcb-icon">🌐</span>
              <div class="hcb-text">
                <span class="hcb-title">ONLINE</span>
                <span class="hcb-sub">Private Rooms</span>
              </div>
            </button>
          </div>
        </div>

        <!-- SNAKE LUDO CARD -->
        <div class="home-game-card home-card-snake">
          <div class="home-card-glow"></div>
          <div class="home-card-icon">🐍</div>
          <h2 class="home-card-title">SNAKE LUDO</h2>
          <p class="home-card-desc">Climb ladders, dodge snakes!</p>
          <div class="home-card-buttons">
            <button id="btn-snake-offline" class="home-card-btn hcb-offline-green">
              <span class="hcb-icon">🏠</span>
              <div class="hcb-text">
                <span class="hcb-title">OFFLINE</span>
                <span class="hcb-sub">2-4 Players</span>
              </div>
            </button>
            <button id="btn-snake-online" class="home-card-btn hcb-online-green">
              <span class="hcb-icon">🌐</span>
              <div class="hcb-text">
                <span class="hcb-title">ONLINE</span>
                <span class="hcb-sub">Private Rooms</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- BOTTOM MENU BAR -->
      <div class="home-bottom-bar">
        <button id="btn-lucky-spin" class="bottom-menu-btn">
          <span>🎡</span><span>Spin</span>
        </button>
        <button id="btn-daily-rewards" class="bottom-menu-btn">
          <span>🎁</span><span>Daily</span>
        </button>
        <button id="btn-open-store" class="bottom-menu-btn">
          <span>🛒</span><span>Store</span>
        </button>
        <button id="btn-leaderboard" class="bottom-menu-btn">
          <span>🏆</span><span>Rank</span>
        </button>
        <button id="btn-achievements" class="bottom-menu-btn">
          <span>📜</span><span>Awards</span>
        </button>
        <button id="btn-settings" class="bottom-menu-btn">
          <span>⚙️</span><span>Settings</span>
        </button>
      </div>
    `;
    app.appendChild(home);
    this.screens['home'] = home;

    // 3. MODE SELECTION SCREEN (LUXURY & VIBRANT)
    const modeSelect = document.createElement('div');
    modeSelect.id = 'screen-mode-select';
    modeSelect.className = 'screen-overlay screen-full mode-screen hidden';
    modeSelect.innerHTML = `
      <div class="mode-header">
        <button id="btn-back-home" class="btn-icon-glass" title="Back">⬅️</button>
        <div class="mode-title-badge">
          <span>🎲 GAME MODES</span>
        </div>
        <div style="width: 40px;"></div>
      </div>

      <div class="mode-cards-container">
        <!-- Vs AI Card (Glowing Amber/Red Theme) -->
        <div class="mode-card mode-card-ai">
          <div class="mode-card-badge">POPULAR</div>
          <div class="mode-card-header">
            <span class="mode-icon">🤖</span>
            <div class="mode-header-text">
              <h3>HUMAN VS AI</h3>
              <span class="mode-sub">Smart Bot Battle</span>
            </div>
          </div>

          <div class="mode-options">
            <label class="mode-label">PLAYERS COUNT:</label>
            <div class="segmented-control" id="ai-player-count">
              <button class="seg-btn" data-val="2">2P</button>
              <button class="seg-btn" data-val="3">3P</button>
              <button class="seg-btn active" data-val="4">4P</button>
            </div>

            <label class="mode-label">BOT DIFFICULTY:</label>
            <div class="segmented-control" id="ai-difficulty-select">
              <button class="seg-btn" data-val="Easy">EASY</button>
              <button class="seg-btn active" data-val="Medium">MEDIUM</button>
              <button class="seg-btn" data-val="Hard">HARD</button>
            </div>
          </div>

          <button id="btn-start-vs-ai" class="btn-mode-start btn-start-ai">
            <span>START AI MATCH</span>
            <span class="arrow-icon">➔</span>
          </button>
        </div>

        <!-- Pass & Play Offline Card (Glowing Cyan/Purple Theme) -->
        <div class="mode-card mode-card-pass">
          <div class="mode-card-badge">OFFLINE</div>
          <div class="mode-card-header">
            <span class="mode-icon">👥</span>
            <div class="mode-header-text">
              <h3>PASS & PLAY</h3>
              <span class="mode-sub">Single Device Friends</span>
            </div>
          </div>

          <div class="mode-options">
            <label class="mode-label">PLAYERS COUNT:</label>
            <div class="segmented-control" id="pass-player-count">
              <button class="seg-btn" data-val="2">2P</button>
              <button class="seg-btn" data-val="3">3P</button>
              <button class="seg-btn active" data-val="4">4P</button>
            </div>
          </div>

          <button id="btn-start-pass-play" class="btn-mode-start btn-start-pass">
            <span>START PASS & PLAY</span>
            <span class="arrow-icon">➔</span>
          </button>
        </div>

        <!-- Online Multiplayer Card (Glowing Emerald Theme) -->
        <div class="mode-card mode-card-online">
          <div class="mode-card-badge">LIVE</div>
          <div class="mode-card-header">
            <span class="mode-icon">🌐</span>
            <div class="mode-header-text">
              <h3>ONLINE MULTIPLAYER</h3>
              <span class="mode-sub">Private Rooms & Global</span>
            </div>
          </div>
          <p class="mode-sub" style="margin: 10px 0;">Create custom rooms or join online friends around the world.</p>

          <div class="mode-btn-group">
            <button id="btn-create-room" class="btn-mode-sub btn-create">➕ Create Room</button>
            <button id="btn-join-room" class="btn-mode-sub btn-join">🔑 Join Room</button>
          </div>
        </div>

        <!-- Snake & Ladder (Snake Ludu) Card (Glowing Emerald/Gold Theme) -->
        <div class="mode-card mode-card-snake">
          <div class="mode-card-badge">HOT 🐍</div>
          <div class="mode-card-header">
            <span class="mode-icon">🪜</span>
            <div class="mode-header-text">
              <h3>SNAKE & LADDER</h3>
              <span class="mode-sub">Classic Snake Ludu (1-100)</span>
            </div>
          </div>

          <div class="mode-options">
            <label class="mode-label">PLAYERS COUNT:</label>
            <div class="segmented-control" id="snake-player-count">
              <button class="seg-btn" data-val="2">2P</button>
              <button class="seg-btn" data-val="3">3P</button>
              <button class="seg-btn active" data-val="4">4P</button>
            </div>
          </div>

          <button id="btn-start-snake-ludu" class="btn-mode-start btn-start-snake">
            <span>START SNAKE LUDO 🐍</span>
            <span class="arrow-icon">➔</span>
          </button>
        </div>
      </div>
    `;
    app.appendChild(modeSelect);
    this.screens['mode_select'] = modeSelect;

    // 4. VICTORY / GAME OVER SCREEN
    const victory = document.createElement('div');
    victory.id = 'screen-victory';
    victory.className = 'screen-overlay screen-full victory-screen hidden';
    victory.innerHTML = `
      <div class="victory-content glass-card">
        <h1 class="victory-title">MATCH FINISHED!</h1>
        <p class="victory-sub">Congratulations to the winners!</p>

        <!-- Podium Ranks -->
        <div id="podium-ranks-list" class="podium-list">
          <!-- Populated dynamically -->
        </div>

        <div class="victory-reward-badge">
          <span>🪙 Reward: +500 Coins</span>
        </div>

        <div class="victory-actions">
          <button id="btn-victory-rematch" class="btn-primary-glow">REMATCH</button>
          <button id="btn-victory-home" class="btn-secondary-glass">MAIN MENU</button>
        </div>
      </div>
    `;
    app.appendChild(victory);
    this.screens['victory'] = victory;

    this.bindEvents();
  }

  bindEvents() {
    // Splash button
    document.getElementById('btn-start-game').addEventListener('click', () => {
      this.uiManager.soundManager.playButtonClick();
      this.showScreen('home');
    });

    // Home buttons - Classic Ludo
    const btnLudoOffline = document.getElementById('btn-ludo-offline');
    if (btnLudoOffline) {
      btnLudoOffline.addEventListener('click', (e) => {
        e.stopPropagation();
        this.uiManager.soundManager.playButtonClick();
        this.showScreen('mode_select');
      });
    }

    const btnLudoOnline = document.getElementById('btn-ludo-online');
    if (btnLudoOnline) {
      btnLudoOnline.addEventListener('click', (e) => {
        e.stopPropagation();
        this.uiManager.soundManager.playButtonClick();
        this.uiManager.modals.showOnlineChoiceModal();
      });
    }

    // Home buttons - Snake Ludo
    const btnSnakeOffline = document.getElementById('btn-snake-offline');
    if (btnSnakeOffline) {
      btnSnakeOffline.addEventListener('click', (e) => {
        e.stopPropagation();
        this.uiManager.soundManager.playButtonClick();
        if (this.uiManager.gameController) {
          this.uiManager.gameController.startNewGame('snake_ludu', 4, 'Medium', this.uiManager.data.profile);
        }
      });
    }

    const btnSnakeOnline = document.getElementById('btn-snake-online');
    if (btnSnakeOnline) {
      btnSnakeOnline.addEventListener('click', (e) => {
        e.stopPropagation();
        this.uiManager.soundManager.playButtonClick();
        this.uiManager.modals.showCreateRoomModal();
      });
    }

    document.getElementById('btn-back-home').addEventListener('click', () => {
      this.uiManager.soundManager.playButtonClick();
      this.showScreen('home');
    });

    // Segmented controls for player count & difficulty
    document.querySelectorAll('.segmented-control').forEach(ctrl => {
      ctrl.querySelectorAll('.seg-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          ctrl.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
        });
      });
    });

    // Start VS AI
    document.getElementById('btn-start-vs-ai').addEventListener('click', () => {
      this.uiManager.soundManager.playButtonClick();
      const count = parseInt(document.querySelector('#ai-player-count .seg-btn.active').dataset.val);
      const diff = document.querySelector('#ai-difficulty-select .seg-btn.active').dataset.val;
      this.uiManager.gameController.startNewGame('vs_ai', count, diff, this.uiManager.data.profile);
    });

    // Start Pass & Play
    document.getElementById('btn-start-pass-play').addEventListener('click', () => {
      this.uiManager.soundManager.playButtonClick();
      const count = parseInt(document.querySelector('#pass-player-count .seg-btn.active').dataset.val);
      this.uiManager.gameController.startNewGame('pass_play', count, 'Medium', this.uiManager.data.profile);
    });

    // Create & Join Room Buttons
    const btnCreateRoom = document.getElementById('btn-create-room');
    if (btnCreateRoom) {
      btnCreateRoom.addEventListener('click', () => {
        this.uiManager.soundManager.playButtonClick();
        this.uiManager.modals.showCreateRoomModal();
      });
    }

    const btnJoinRoom = document.getElementById('btn-join-room');
    if (btnJoinRoom) {
      btnJoinRoom.addEventListener('click', () => {
        this.uiManager.soundManager.playButtonClick();
        this.uiManager.modals.showJoinRoomModal();
      });
    }

    // Start Snake & Ladder (Snake Ludu)
    const btnStartSnake = document.getElementById('btn-start-snake-ludu');
    if (btnStartSnake) {
      btnStartSnake.addEventListener('click', () => {
        this.uiManager.soundManager.playButtonClick();
        const count = parseInt(document.querySelector('#snake-player-count .seg-btn.active').dataset.val);
        this.uiManager.gameController.startNewGame('snake_ludu', count, 'Medium', this.uiManager.data.profile);
      });
    }

    // Victory screen buttons
    document.getElementById('btn-victory-rematch').addEventListener('click', () => {
      this.uiManager.soundManager.playButtonClick();
      this.uiManager.gameController.startNewGame('vs_ai', 4, 'Medium', this.uiManager.data.profile);
    });

    document.getElementById('btn-victory-home').addEventListener('click', () => {
      this.uiManager.soundManager.playButtonClick();
      this.showScreen('home');
    });
  }

  showScreen(screenName) {
    Object.values(this.screens).forEach(scr => scr.classList.add('hidden'));
    document.getElementById('gameplay-hud').classList.add('hidden');

    if (screenName === 'gameplay') {
      document.getElementById('gameplay-hud').classList.remove('hidden');
    } else {
      if (this.screens[screenName]) {
        this.screens[screenName].classList.remove('hidden');
      }
      if (this.uiManager.gameController) {
        this.uiManager.gameController.stopGame();
      }
    }

    this.currentScreen = screenName;
  }

  populateVictoryScreen(rankings, players) {
    const list = document.getElementById('podium-ranks-list');
    list.innerHTML = '';

    const medals = ['🥇 1st Place', '🥈 2nd Place', '🥉 3rd Place', '4th Place'];

    rankings.forEach((playerIdx, idx) => {
      const p = players[playerIdx];
      const row = document.createElement('div');
      row.className = 'podium-row';
      row.innerHTML = `
        <span class="podium-medal">${medals[idx] || `${idx + 1}th`}</span>
        <span class="podium-avatar">${p.avatar}</span>
        <span class="podium-name">${p.name}</span>
      `;
      list.appendChild(row);
    });

    this.showScreen('victory');
  }
}

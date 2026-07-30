/**
 * Gameplay In-Game HUD Overlay Controller with 4 Corner Player Cards & Dynamic Roll Buttons
 */
export class HUD {
  constructor(uiManager) {
    this.uiManager = uiManager;
    this.hudContainer = null;
    this.activePlayerIdx = 0;
    this.players = [];

    this.createHUDDOM();
  }

  createHUDDOM() {
    this.hudContainer = document.createElement('div');
    this.hudContainer.id = 'gameplay-hud';
    this.hudContainer.className = 'screen-overlay hud-screen hidden';

    this.hudContainer.innerHTML = `
      <!-- Top Center Controls (Pause & Chat) -->
      <div class="hud-top-bar">
        <button id="btn-pause-game" class="btn-icon-glass" title="Pause">
          <span>⏸️</span>
        </button>

        <div class="hud-title-badge glass-card">
          <span>🎲 LUDO PRO 3D</span>
        </div>

        <button id="btn-chat-emoji" class="btn-icon-glass" title="Chat">
          <span>💬</span>
        </button>
      </div>

      <!-- Quick Chat Emojis Popup -->
      <div id="chat-popup" class="chat-popup-glass hidden">
        <button class="emoji-btn" data-emoji="👏">👏</button>
        <button class="emoji-btn" data-emoji="🔥">🔥</button>
        <button class="emoji-btn" data-emoji="😎">😎</button>
        <button class="emoji-btn" data-emoji="😭">😭</button>
        <button class="emoji-btn" data-emoji="🎯">🎯</button>
      </div>

      <!-- 4 PLAYER HOME YARD ROLL BADGES (Appears right inside active player's 3D base yard on board) -->
      <div id="yard-roll-badge-0" class="yard-dice-badge yard-red hidden">6</div>
      <div id="yard-roll-badge-1" class="yard-dice-badge yard-green hidden">6</div>
      <div id="yard-roll-badge-2" class="yard-dice-badge yard-yellow hidden">6</div>
      <div id="yard-roll-badge-3" class="yard-dice-badge yard-blue hidden">6</div>

      <!-- Top Roll Result Banner -->
      <div id="top-roll-banner" class="top-roll-banner hidden">
        <span>🎲 ROLLED:</span>
        <span id="top-roll-val" class="banner-roll-num">6</span>
      </div>

      <!-- 4 CORNER PLAYER CARDS (Each Player gets their OWN Roll Dice Button) -->
      <div class="hud-corners-container">
        <!-- Player 0: RED (Top-Left) -->
        <div id="player-card-0" class="player-corner-card card-top-left player-red">
          <div class="corner-avatar-wrapper">
            <span id="avatar-0" class="corner-avatar">👑</span>
            <svg class="corner-timer-svg" viewBox="0 0 36 36">
              <path class="timer-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path id="timer-progress-0" class="timer-progress" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
          <div class="corner-info">
            <span id="name-0" class="corner-name">Player 1</span>
            <span id="status-0" class="corner-status">Your Turn</span>
          </div>
          <button id="btn-roll-0" class="corner-roll-btn btn-roll-trigger" data-player="0">
            <span>🎲</span>
            <span class="roll-label">ROLL</span>
          </button>
          <div id="roll-badge-0" class="corner-roll-badge hidden">6</div>
        </div>

        <!-- Player 1: GREEN (Top-Right) -->
        <div id="player-card-1" class="player-corner-card card-top-right player-green">
          <div class="corner-avatar-wrapper">
            <span id="avatar-1" class="corner-avatar">🤖</span>
            <svg class="corner-timer-svg" viewBox="0 0 36 36">
              <path class="timer-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path id="timer-progress-1" class="timer-progress" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
          <div class="corner-info">
            <span id="name-1" class="corner-name">Green Bot</span>
            <span id="status-1" class="corner-status">Waiting</span>
          </div>
          <button id="btn-roll-1" class="corner-roll-btn btn-roll-trigger hidden" data-player="1">
            <span>🎲</span>
            <span class="roll-label">ROLL</span>
          </button>
          <div id="roll-badge-1" class="corner-roll-badge hidden">6</div>
        </div>

        <!-- Player 2: YELLOW (Bottom-Right) -->
        <div id="player-card-2" class="player-corner-card card-bottom-right player-yellow">
          <div class="corner-avatar-wrapper">
            <span id="avatar-2" class="corner-avatar">🦊</span>
            <svg class="corner-timer-svg" viewBox="0 0 36 36">
              <path class="timer-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path id="timer-progress-2" class="timer-progress" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
          <div class="corner-info">
            <span id="name-2" class="corner-name">Yellow Bot</span>
            <span id="status-2" class="corner-status">Waiting</span>
          </div>
          <button id="btn-roll-2" class="corner-roll-btn btn-roll-trigger hidden" data-player="2">
            <span>🎲</span>
            <span class="roll-label">ROLL</span>
          </button>
          <div id="roll-badge-2" class="corner-roll-badge hidden">6</div>
        </div>

        <!-- Player 3: BLUE (Bottom-Left) -->
        <div id="player-card-3" class="player-corner-card card-bottom-left player-blue">
          <div class="corner-avatar-wrapper">
            <span id="avatar-3" class="corner-avatar">⚡</span>
            <svg class="corner-timer-svg" viewBox="0 0 36 36">
              <path class="timer-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path id="timer-progress-3" class="timer-progress" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
          <div class="corner-info">
            <span id="name-3" class="corner-name">Blue Bot</span>
            <span id="status-3" class="corner-status">Waiting</span>
          </div>
          <button id="btn-roll-3" class="corner-roll-btn btn-roll-trigger hidden" data-player="3">
            <span>🎲</span>
            <span class="roll-label">ROLL</span>
          </button>
          <div id="roll-badge-3" class="corner-roll-badge hidden">6</div>
        </div>
      </div>
    `;

    document.getElementById('app').appendChild(this.hudContainer);
    this.bindEvents();
  }

  bindEvents() {
    // Bind all 4 per-player Roll Cards & buttons
    [0, 1, 2, 3].forEach(idx => {
      const card = document.getElementById(`player-card-${idx}`);
      if (card) {
        card.addEventListener('click', (e) => {
          if (idx === this.activePlayerIdx) {
            const activeRollBtn = document.getElementById(`btn-roll-${idx}`);
            if (activeRollBtn && !activeRollBtn.disabled && !activeRollBtn.classList.contains('disabled')) {
              this.uiManager.emit('onRollClicked');
            }
          }
        });
      }
    });

    document.getElementById('btn-pause-game').addEventListener('click', () => {
      this.uiManager.modals.showPauseModal();
    });

    const chatBtn = document.getElementById('btn-chat-emoji');
    const chatPopup = document.getElementById('chat-popup');
    chatBtn.addEventListener('click', () => {
      chatPopup.classList.toggle('hidden');
    });

    document.querySelectorAll('.emoji-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const emoji = e.target.getAttribute('data-emoji');
        chatPopup.classList.add('hidden');
        this.uiManager.showFloatingText(emoji, window.innerWidth / 2, window.innerHeight / 2 - 100);
      });
    });
  }

  initPlayerCards(players) {
    this.players = players;
    players.forEach(p => {
      const card = document.getElementById(`player-card-${p.idx}`);
      if (!card) return;

      if (!p.isActiveSlot) {
        card.classList.add('hidden');
        return;
      }
      card.classList.remove('hidden');

      const avatar = document.getElementById(`avatar-${p.idx}`);
      const name = document.getElementById(`name-${p.idx}`);
      if (avatar) avatar.innerText = p.avatar;
      if (name) name.innerText = p.name;
    });
  }

  updatePlayerTurn(player) {
    this.activePlayerIdx = player.idx;

    [0, 1, 2, 3].forEach(idx => {
      const card = document.getElementById(`player-card-${idx}`);
      const status = document.getElementById(`status-${idx}`);
      const rollBtn = document.getElementById(`btn-roll-${idx}`);
      const rollBadge = document.getElementById(`roll-badge-${idx}`);

      if (!card) return;
      if (rollBadge) rollBadge.classList.add('hidden');

      if (idx === player.idx) {
        card.classList.add('active-turn');
        card.classList.add(`player-turn-${idx}`);

        if (status) {
          status.innerText = player.isAI ? 'AI Rolling...' : 'YOUR TURN!';
          status.style.color = '#ffffff';
        }

        if (rollBtn) {
          rollBtn.classList.remove('hidden');
          const label = rollBtn.querySelector('.roll-label');
          if (player.isAI) {
            if (label) label.innerText = 'AI...';
            rollBtn.disabled = true;
            rollBtn.classList.add('disabled');
          } else {
            if (label) label.innerText = 'ROLL';
            rollBtn.disabled = false;
            rollBtn.classList.remove('disabled');
          }
        }
      } else {
        card.classList.remove('active-turn');
        card.classList.remove('player-turn-0', 'player-turn-1', 'player-turn-2', 'player-turn-3');

        if (status) {
          status.innerText = 'Waiting';
          status.style.color = 'var(--text-muted)';
        }

        if (rollBtn) {
          rollBtn.classList.add('hidden');
        }
      }
    });
  }

  updateTimer(secondsRemaining) {
    const percentage = Math.max(0, (secondsRemaining / 15) * 100);
    [0, 1, 2, 3].forEach(idx => {
      const ring = document.getElementById(`timer-progress-${idx}`);
      if (ring) {
        if (idx === this.activePlayerIdx) {
          ring.setAttribute('stroke-dasharray', `${percentage}, 100`);
        } else {
          ring.setAttribute('stroke-dasharray', `0, 100`);
        }
      }
    });
  }

  setRollButtonEnabled(enabled) {
    const activeRollBtn = document.getElementById(`btn-roll-${this.activePlayerIdx}`);
    if (activeRollBtn) {
      activeRollBtn.disabled = !enabled;
      if (enabled) {
        activeRollBtn.classList.remove('disabled');
      } else {
        activeRollBtn.classList.add('disabled');
      }
    }
  }

  clearRollResultBadge() {
    const topBanner = document.getElementById('top-roll-banner');
    if (topBanner) {
      topBanner.classList.add('hidden');
      topBanner.classList.remove('pop-anim');
    }

    [0, 1, 2, 3].forEach(idx => {
      const yardBadge = document.getElementById(`yard-roll-badge-${idx}`);
      if (yardBadge) {
        yardBadge.classList.add('hidden');
        yardBadge.classList.remove('pop-anim');
      }
      const activeRollBtn = document.getElementById(`btn-roll-${idx}`);
      if (activeRollBtn) {
        activeRollBtn.innerHTML = `🎲 ROLL`;
      }
      const activeBadge = document.getElementById(`roll-badge-${idx}`);
      if (activeBadge) {
        activeBadge.classList.add('hidden');
        activeBadge.classList.remove('pop-anim');
      }
    });
  }

  showRollResultBadge(val) {
    this.clearRollResultBadge();

    // 1. Show rolled number right inside active player's 3D home yard base on board
    const activeYardBadge = document.getElementById(`yard-roll-badge-${this.activePlayerIdx}`);
    if (activeYardBadge) {
      activeYardBadge.innerText = val;
      activeYardBadge.classList.remove('hidden');
      activeYardBadge.classList.add('pop-anim');
    }

    // 2. Also update top banner
    const topBanner = document.getElementById('top-roll-banner');
    const topVal = document.getElementById('top-roll-val');
    if (topBanner && topVal) {
      topVal.innerText = val;
      topBanner.classList.remove('hidden');
      topBanner.classList.add('pop-anim');
    }

    // 3. Update active roll button text
    const activeRollBtn = document.getElementById(`btn-roll-${this.activePlayerIdx}`);
    if (activeRollBtn) {
      activeRollBtn.innerHTML = `🎲 <b>${val}</b>`;
    }

    const activeBadge = document.getElementById(`roll-badge-${this.activePlayerIdx}`);
    if (activeBadge) {
      activeBadge.innerText = val;
      activeBadge.classList.remove('hidden');
      activeBadge.classList.add('pop-anim');
    }
  }
}

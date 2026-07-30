import { FirebaseService } from '../services/firebase.js';

/**
 * Modular Network & Online Multiplayer Manager powered by Firebase Realtime Database
 */
export class NetworkManager {
  constructor() {
    this.isConnected = false;
    this.roomCode = null;
    this.isHost = false;
    this.myPlayerIndex = 0;
    this.myColor = 'red';
    this.listeners = {};
    this.unsubscribeRoom = null;
  }

  /**
   * Initialize Firebase Auth before room actions
   */
  async init() {
    try {
      await FirebaseService.initAuth();
      console.log('[NetworkManager] Firebase Auth Initialized');
    } catch (e) {
      console.error('[NetworkManager] Firebase Auth error:', e);
    }
  }

  /**
   * Create a new online Ludo room in Firebase
   */
  async createPrivateRoom(hostProfile, maxPlayers = 4) {
    try {
      this.roomCode = await FirebaseService.createRoom(hostProfile, maxPlayers);
      this.isHost = true;
      this.myPlayerIndex = 0;
      this.myColor = 'red';
      this.isConnected = true;

      console.log(`[NetworkManager] Firebase Private Room Created: ${this.roomCode}`);
      this.subscribeToRoomEvents();
      return this.roomCode;
    } catch (error) {
      console.error('[NetworkManager] Failed to create room in Firebase:', error);
      throw error;
    }
  }

  /**
   * Join an existing room by 6-digit code
   */
  async joinPrivateRoom(code, playerProfile) {
    try {
      const playerData = await FirebaseService.joinRoom(code, playerProfile);
      this.roomCode = code;
      this.isHost = false;
      this.myPlayerIndex = playerData.playerIndex;
      this.myColor = playerData.color;
      this.isConnected = true;

      console.log(`[NetworkManager] Joined Firebase Room ${code} as player ${playerData.playerIndex} (${playerData.color})`);
      this.subscribeToRoomEvents();
      return playerData;
    } catch (error) {
      console.error('[NetworkManager] Failed to join room in Firebase:', error);
      throw error;
    }
  }

  /**
   * Subscribe to realtime database changes for current room
   */
  subscribeToRoomEvents() {
    if (!this.roomCode) return;
    if (this.unsubscribeRoom) this.unsubscribeRoom();

    this.unsubscribeRoom = FirebaseService.listenToRoom(this.roomCode, (roomData) => {
      if (!roomData) {
        console.warn('[NetworkManager] Room dissolved or closed.');
        this.emit('onRoomClosed');
        return;
      }

      this.emit('onRoomUpdated', roomData);

      if (roomData.lastDiceRoll) {
        this.emit('onDiceRollReceived', roomData.lastDiceRoll);
      }

      if (roomData.gameState) {
        this.emit('onGameStateReceived', roomData.gameState);
      }
    });
  }

  /**
   * Broadcast dice roll to Firebase
   */
  async sendDiceRoll(value, color) {
    if (!this.isConnected || !this.roomCode) return;
    await FirebaseService.updateDiceRoll(this.roomCode, value, color);
  }

  /**
   * Broadcast pawn move / updated state to Firebase
   */
  async sendMove(playerIdx, tokenIdx, diceValue, newGameState) {
    if (!this.isConnected || !this.roomCode) return;

    if (newGameState) {
      await FirebaseService.updateGameState(this.roomCode, newGameState);
    }

    this.emit('onMoveReceived', {
      type: 'MOVE',
      playerIdx,
      tokenIdx,
      diceValue,
      timestamp: Date.now()
    });
  }

  on(event, callback) {
    this.listeners[event] = callback;
  }

  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event](data);
    }
  }

  disconnect() {
    if (this.unsubscribeRoom) {
      this.unsubscribeRoom();
      this.unsubscribeRoom = null;
    }
    this.isConnected = false;
    this.roomCode = null;
    console.log('[NetworkManager] Disconnected from Firebase room.');
  }
}

export const networkManager = new NetworkManager();

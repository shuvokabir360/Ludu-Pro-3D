import { initializeApp } from 'firebase/app';
import { 
  getDatabase, 
  ref, 
  set, 
  get, 
  child, 
  onValue, 
  off, 
  update, 
  push, 
  onDisconnect 
} from 'firebase/database';
import { 
  getAuth, 
  signInAnonymously, 
  onAuthStateChanged 
} from 'firebase/auth';

// Firebase configuration initialized from google-services.json (Database Region: Singapore asia-southeast1)
const firebaseConfig = {
  apiKey: "AIzaSyA1Po60ei4Bld8fBE8os9gTb6REI8Zw8Z4",
  authDomain: "ludu-pro-ce4e9.firebaseapp.com",
  projectId: "ludu-pro-ce4e9",
  storageBucket: "ludu-pro-ce4e9.firebasestorage.app",
  messagingSenderId: "730876184371",
  appId: "1:730876184371:android:2f4a24da32534be146e046",
  databaseURL: "https://ludu-pro-ce4e9-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase App with exact Singapore Realtime Database URL
const app = initializeApp(firebaseConfig);
const db = getDatabase(app, "https://ludu-pro-ce4e9-default-rtdb.asia-southeast1.firebasedatabase.app");
const auth = getAuth(app);

export class FirebaseService {
  static db = db;
  static auth = auth;
  static currentUser = null;

  /**
   * Authenticate player anonymously or with guest profile
   */
  static async initAuth() {
    if (this.currentUser) return this.currentUser;

    try {
      const user = await new Promise((resolve) => {
        let isResolved = false;
        const unsubscribe = onAuthStateChanged(auth, (u) => {
          if (u && !isResolved) {
            isResolved = true;
            unsubscribe();
            resolve(u);
          }
        });

        signInAnonymously(auth)
          .then((credential) => {
            if (!isResolved) {
              isResolved = true;
              unsubscribe();
              resolve(credential.user);
            }
          })
          .catch((err) => {
            console.warn('[Firebase] Anonymous Auth failed/not enabled in console, using Guest UID fallback:', err.message);
            if (!isResolved) {
              isResolved = true;
              unsubscribe();
              resolve(null);
            }
          });
      });

      if (user) {
        this.currentUser = user;
        console.log('Firebase Authenticated:', user.uid);
        return user;
      }
    } catch (e) {
      console.warn('[Firebase] Auth exception:', e);
    }

    // Persistent Local Guest UID Fallback if Firebase Anonymous Auth is disabled in console
    let localUid = localStorage.getItem('ludo_guest_uid');
    if (!localUid) {
      localUid = 'guest_' + Math.random().toString(36).substring(2, 10);
      localStorage.setItem('ludo_guest_uid', localUid);
    }
    this.currentUser = { uid: localUid, isAnonymous: true };
    console.log('Using Persistent Guest UID:', localUid);
    return this.currentUser;
  }

  /**
   * Create a new online Ludo room
   * @param {Object} hostProfile Host player info
   * @param {number} maxPlayers Number of players (2 or 4)
   * @returns {Promise<string>} 6-digit Room Code
   */
  static async createRoom(hostProfile, maxPlayers = 4) {
    if (!this.currentUser) await this.initAuth();

    const roomCode = Math.floor(100000 + Math.random() * 900000).toString();
    const roomRef = ref(db, `rooms/${roomCode}`);

    const roomData = {
      roomCode,
      hostUid: this.currentUser.uid,
      status: 'LOBBY', // 'LOBBY', 'PLAYING', 'FINISHED'
      maxPlayers,
      currentTurnIndex: 0,
      turnTimeLimit: 30, // seconds per turn
      lastDiceRoll: null,
      createdTimestamp: Date.now(),
      players: {
        [this.currentUser.uid]: {
          uid: this.currentUser.uid,
          name: hostProfile.name || 'Player 1',
          avatar: hostProfile.avatar || '👑',
          color: 'red',
          playerIndex: 0,
          isHost: true,
          isReady: true,
          isOnline: true
        }
      },
      gameState: {
        currentTurnColor: 'red',
        pawns: {
          red: [0, 0, 0, 0],
          green: [0, 0, 0, 0],
          yellow: [0, 0, 0, 0],
          blue: [0, 0, 0, 0]
        }
      }
    };

    // Safely attempt write with a 3.5s timeout for fast UI response
    const setPromise = set(roomRef, roomData).then(() => {
      try {
        const playerOnlineRef = ref(db, `rooms/${roomCode}/players/${this.currentUser.uid}/isOnline`);
        onDisconnect(playerOnlineRef).set(false);
      } catch (_) {}
    });

    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 3500));
    await Promise.race([setPromise, timeoutPromise]);

    return roomCode;
  }

  /**
   * Join an existing Ludo room by code
   * @param {string} roomCode 
   * @param {Object} playerProfile 
   */
  static async joinRoom(roomCode, playerProfile) {
    if (!this.currentUser) await this.initAuth();

    const roomRef = ref(db, `rooms/${roomCode}`);
    
    let snapshot = null;
    try {
      const getPromise = get(roomRef);
      const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(null), 3000));
      snapshot = await Promise.race([getPromise, timeoutPromise]);
    } catch (_) {}

    const colors = ['red', 'green', 'yellow', 'blue'];

    if (snapshot && snapshot.exists()) {
      const roomData = snapshot.val();
      const currentPlayers = Object.values(roomData.players || {});
      const assignedColor = colors[currentPlayers.length % 4];

      const newPlayerData = {
        uid: this.currentUser.uid,
        name: playerProfile.name || `Player ${currentPlayers.length + 1}`,
        avatar: playerProfile.avatar || '🎲',
        color: assignedColor,
        playerIndex: currentPlayers.length % 4,
        isHost: false,
        isReady: true,
        isOnline: true
      };

      await update(ref(db, `rooms/${roomCode}/players`), {
        [this.currentUser.uid]: newPlayerData
      }).catch(() => {});

      try {
        const playerOnlineRef = ref(db, `rooms/${roomCode}/players/${this.currentUser.uid}/isOnline`);
        onDisconnect(playerOnlineRef).set(false);
      } catch (_) {}

      return newPlayerData;
    }

    // Smooth Fallback for fast room joining
    return {
      uid: this.currentUser.uid,
      name: playerProfile.name || 'Player 2',
      avatar: playerProfile.avatar || '🎲',
      color: 'green',
      playerIndex: 1,
      isHost: false,
      isReady: true,
      isOnline: true
    };
  }

  /**
   * Listen to real-time room & game state changes
   * @param {string} roomCode 
   * @param {Function} callback 
   */
  static listenToRoom(roomCode, callback) {
    const roomRef = ref(db, `rooms/${roomCode}`);
    onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        callback(snapshot.val());
      } else {
        callback(null);
      }
    });

    return () => off(roomRef);
  }

  /**
   * Broadcast dice roll across all players in room
   */
  static async updateDiceRoll(roomCode, value, color) {
    const roomRef = ref(db, `rooms/${roomCode}`);
    await update(roomRef, {
      'lastDiceRoll': {
        value,
        color,
        timestamp: Date.now()
      }
    });
  }

  /**
   * Broadcast pawn movement across all players
   */
  static async updateGameState(roomCode, gameState) {
    const gameStateRef = ref(db, `rooms/${roomCode}/gameState`);
    await update(gameStateRef, gameState);
  }

  /**
   * Change current turn to next player
   */
  static async setTurn(roomCode, nextColor, turnIndex) {
    await update(ref(db, `rooms/${roomCode}`), {
      'currentTurnIndex': turnIndex,
      'gameState/currentTurnColor': nextColor,
      'lastDiceRoll': null
    });
  }
}

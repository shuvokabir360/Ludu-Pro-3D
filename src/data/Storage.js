/**
 * Local Storage & State Persistence Manager for Ludo Pro 3D
 */
export class Storage {
  static STORAGE_KEY = 'LUDO_PRO_3D_DATA_V1';

  static defaultData = {
    profile: {
      name: 'Player 1',
      avatar: '👑',
      level: 1,
      xp: 120,
      coins: 2500,
      gems: 50,
      gamesPlayed: 14,
      wins: 8,
      captures: 32
    },
    settings: {
      musicVolume: 0.7,
      sfxVolume: 0.9,
      haptics: true,
      aiDifficulty: 'Medium', // 'Easy', 'Medium', 'Hard'
      cameraAutoRotate: true,
      graphicsQuality: 'High' // 'Low', 'Medium', 'High'
    },
    inventory: {
      equippedBoard: 'classic_luxury',
      equippedPawn: 'crystal_gem',
      equippedDice: 'royal_gold',
      ownedBoards: ['classic_luxury'],
      ownedPawns: ['crystal_gem'],
      ownedDice: ['royal_gold']
    },
    dailyRewards: {
      lastClaimedDate: null,
      streak: 0
    },
    luckySpin: {
      lastSpinTime: null,
      spinsAvailable: 1
    },
    achievements: {
      first_win: { unlocked: true, claimed: true, progress: 1, total: 1 },
      capturer_10: { unlocked: true, claimed: false, progress: 10, total: 10 },
      dice_master_6: { unlocked: false, claimed: false, progress: 4, total: 10 },
      games_played_20: { unlocked: false, claimed: false, progress: 14, total: 20 },
      coin_collector: { unlocked: false, claimed: false, progress: 2500, total: 10000 }
    }
  };

  static load() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (!saved) return JSON.parse(JSON.stringify(this.defaultData));
      const parsed = JSON.parse(saved);
      return { ...this.defaultData, ...parsed };
    } catch (e) {
      console.warn('Failed to load local storage data, using defaults:', e);
      return JSON.parse(JSON.stringify(this.defaultData));
    }
  }

  static save(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to local storage:', e);
    }
  }

  static updateCoins(data, amount) {
    data.profile.coins = Math.max(0, data.profile.coins + amount);
    this.save(data);
    return data.profile.coins;
  }

  static updateGems(data, amount) {
    data.profile.gems = Math.max(0, data.profile.gems + amount);
    this.save(data);
    return data.profile.gems;
  }

  static addXp(data, amount) {
    data.profile.xp += amount;
    const nextLevelXp = data.profile.level * 200;
    if (data.profile.xp >= nextLevelXp) {
      data.profile.level += 1;
      data.profile.xp -= nextLevelXp;
      data.profile.coins += 500;
    }
    this.save(data);
  }
}

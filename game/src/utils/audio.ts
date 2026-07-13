import { useGameStore } from '@/store/gameStore';

const SCREAM_SOUNDS = [
  '/assets/sounds/Malino_Shouting_Short.wav',
  '/assets/sounds/Malino_Scream_-_1.wav',
  '/assets/sounds/YoungGirlScream1.mp3.mpeg',
  '/assets/sounds/YoungGirlScream2.mp3.mpeg',
  '/assets/sounds/Malino_Screech.wav',
  '/assets/sounds/Dweller_Scream.wav',
  '/assets/sounds/Elma_Scream_1.wav',
  '/assets/sounds/Malino_Scream_-_4.wav',
  '/assets/sounds/Malino_Scream_-_5.wav',
  '/assets/sounds/Malino_Choking.mp3.mpeg',
  '/assets/sounds/MLP_Magic_Sound.wav',
  '/assets/sounds/Malino_Muffled_Panicking.wav',
  '/assets/sounds/MalinoScared1.wav'
];

const WEAPON_SOUNDS: Record<string, string[]> = {
  pistol: ['/assets/sounds/hl2/pistol_fire2.wav'],
  rifle: ['/assets/sounds/hl2/smg1_fire1.wav'],
  shotgun: ['/assets/sounds/hl2/shotgun_fire7.wav'],
  axe: ['/assets/sounds/hl2/crowbar_impact1.wav'],
  katana: ['/assets/sounds/hl2/slice1.wav'],
  bat: ['/assets/sounds/hl2/crowbar_impact1.wav'],
  fist: ['/assets/sounds/hl2/crowbar_impact1.wav'],
  slipper: ['/assets/sounds/hl2/crowbar_impact1.wav'],
  whip: ['/assets/sounds/hl2/slice1.wav'],
  slingshot: ['/assets/sounds/hl2/crowbar_impact1.wav'],
  lightning: ['/assets/sounds/hl2/zap1.wav'],
};

// Removed SoundCategory

class AudioManager {
  private cache: Map<string, HTMLAudioElement[]> = new Map();
  private screamPool: string[] = [];
  
  private activeScream: HTMLAudioElement | null = null;
  private activeWeapon: HTMLAudioElement | null = null;
  private lastScreamTime: number = 0;

  // Create a pool of audio elements for each sound to allow overlapping playback
  private getAudioFromPool(src: string): HTMLAudioElement {
    if (!this.cache.has(src)) {
      this.cache.set(src, []);
    }
    const pool = this.cache.get(src)!;

    // Find an audio element that has finished playing
    let audio = pool.find((a) => a.ended || a.paused);
    
    if (!audio) {
      // If none available and pool is too large, reuse the oldest one
      if (pool.length > 5) {
        audio = pool[0];
      } else {
        audio = new Audio(src);
        pool.push(audio);
      }
    }
    
    return audio;
  }

  public playScreamRoundRobin() {
    if (useGameStore.getState().muted) return;
    
    const now = Date.now();
    // Prevent screams from overlapping or restarting too frequently (500ms interval)
    if (now - this.lastScreamTime < 500) {
      return;
    }
    this.lastScreamTime = now;
    
    if (this.screamPool.length === 0) {
      this.screamPool = [...SCREAM_SOUNDS];
      // Shuffle array
      for (let i = this.screamPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.screamPool[i], this.screamPool[j]] = [this.screamPool[j], this.screamPool[i]];
      }
    }
    
    if (this.activeScream) {
      this.activeScream.pause();
      this.activeScream.currentTime = 0;
    }

    const src = this.screamPool.pop();
    if (src) {
      const audio = this.getAudioFromPool(src);
      audio.currentTime = 0;
      this.activeScream = audio;
      audio.play().catch(console.warn);
    }
  }

  public playWeapon(tool: string) {
    if (useGameStore.getState().muted) return;
    const list = WEAPON_SOUNDS[tool];
    if (!list || list.length === 0) return;
    const src = list[Math.floor(Math.random() * list.length)];
    
    if (this.activeWeapon) {
      this.activeWeapon.pause();
      this.activeWeapon.currentTime = 0;
    }

    const audio = this.getAudioFromPool(src);
    audio.currentTime = 0;
    this.activeWeapon = audio;
    audio.play().catch(console.warn);
  }

  public stopAll() {
    if (this.activeScream) {
      this.activeScream.pause();
      this.activeScream.currentTime = 0;
    }
    if (this.activeWeapon) {
      this.activeWeapon.pause();
      this.activeWeapon.currentTime = 0;
    }
    this.cache.forEach((pool) => {
      pool.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
    });
  }
}

export const audioManager = new AudioManager();

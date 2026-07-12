import { create } from 'zustand';

export type ToolId = 'fist' | 'slipper' | 'bat' | 'lightning' | 'ice' | 'slingshot';
export type CharacterState = 'normal' | 'hurt' | 'dizzy' | 'frozen' | 'burnt' | 'openMouth' | 'closedEyes' | 'angry' | 'exhausted' | 'comboing' | 'blink';

export interface CharacterPart {
  id: string;
  src: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  zIndex: number;
  pivotX: number;
  pivotY: number;
  originX: number;
  originY: number;
  width: number;
  height: number;
  parentId?: string;
}

export interface HitRecord {
  id: string;
  damage: number;
  x: number;
  y: number;
  timestamp: number;
}

export interface GameState {
  score: number;
  combo: number;
  maxCombo: number;
  highScore: number;
  selectedTool: ToolId;
  characterState: CharacterState;
  parts: CharacterPart[];
  hits: HitRecord[];
  frozenUntil: number;
  burntUntil: number;
  dizzyUntil: number;
  lastHitAt: number;
  muted: boolean;
  slingshotAnchor: { x: number; y: number } | null;

  increaseScore: (delta: number) => void;
  breakCombo: () => void;
  registerHit: (damage: number, x: number, y: number) => void;
  setTool: (tool: ToolId) => void;
  setCharacterState: (state: CharacterState) => void;
  setPartTransform: (id: string, updates: Partial<CharacterPart>) => void;
  resetCharacter: () => void;
  toggleMute: () => void;
  setSlingshotAnchor: (pos: { x: number; y: number } | null) => void;
  setFrozenUntil: (ts: number) => void;
  setBurntUntil: (ts: number) => void;
  setDizzyUntil: (ts: number) => void;
}

const STORAGE_KEY = 'walnut-game-record';

function loadHighScore(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    return parsed?.highScore || 0;
  } catch {
    return 0;
  }
}

function saveHighScore(score: number) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ highScore: score, lastUpdated: new Date().toISOString() }));
  } catch {
    // ignore
  }
}

export const useGameStore = create<GameState>((set, get) => ({
  score: 0,
  combo: 0,
  maxCombo: 0,
  highScore: loadHighScore(),
  selectedTool: 'fist',
  characterState: 'normal',
  parts: [],
  hits: [],
  frozenUntil: 0,
  burntUntil: 0,
  dizzyUntil: 0,
  lastHitAt: 0,
  muted: false,
  slingshotAnchor: null,

  increaseScore: (delta) => {
    const state = get();
    const newScore = state.score + delta;
    const newHighScore = Math.max(state.highScore, newScore);
    if (newHighScore > state.highScore) saveHighScore(newHighScore);
    set({ score: newScore, highScore: newHighScore });
  },

  breakCombo: () => set({ combo: 0 }),

  registerHit: (damage, x, y) => {
    const now = Date.now();
    const state = get();
    const isCombo = now - state.lastHitAt < 1200;
    const nextCombo = isCombo ? state.combo + 1 : 1;
    const nextMaxCombo = Math.max(state.maxCombo, nextCombo);
    const comboBonus = Math.floor(nextCombo / 3) * 10;
    const totalDamage = damage + comboBonus;

    const hit: HitRecord = {
      id: `${now}-${Math.random()}`,
      damage: totalDamage,
      x,
      y,
      timestamp: now,
    };

    set({
      score: state.score + totalDamage,
      combo: nextCombo,
      maxCombo: nextMaxCombo,
      highScore: Math.max(state.highScore, state.score + totalDamage),
      lastHitAt: now,
      hits: [...state.hits.slice(-20), hit],
    });

    saveHighScore(Math.max(state.highScore, state.score + totalDamage));
  },

  setTool: (tool) => set({ selectedTool: tool }),
  setCharacterState: (state) => set({ characterState: state }),

  setPartTransform: (id, updates) => {
    set((state) => ({
      parts: state.parts.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    }));
  },

  resetCharacter: () => set((state) => ({ score: 0, combo: 0, hits: [], characterState: 'normal' })),
  toggleMute: () => set((state) => ({ muted: !state.muted })),
  setSlingshotAnchor: (pos) => set({ slingshotAnchor: pos }),
  setFrozenUntil: (ts) => set({ frozenUntil: ts }),
  setBurntUntil: (ts) => set({ burntUntil: ts }),
  setDizzyUntil: (ts) => set({ dizzyUntil: ts }),
}));

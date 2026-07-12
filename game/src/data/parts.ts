import type { CharacterPart } from '@/store/gameStore';

export const BASE_PARTS: CharacterPart[] = [
  {
    id: 'tail',
    src: '/assets/尾巴.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 2,
    pivotX: 0.3,
    pivotY: 0.8,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'backBow',
    src: '/assets/后蝴蝶结.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 3,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'body',
    src: '/assets/身体.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 10,
    pivotX: 0.5,
    pivotY: 0.6,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'leftHand',
    src: '/assets/左手.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 11,
    pivotX: 0.35,
    pivotY: 0.65,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'rightHand',
    src: '/assets/右手.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 11,
    pivotX: 0.65,
    pivotY: 0.65,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'face',
    src: '/assets/脸.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 20,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'leftEar',
    src: '/assets/左耳.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 19,
    pivotX: 0.35,
    pivotY: 0.3,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'rightEar',
    src: '/assets/右耳.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 19,
    pivotX: 0.65,
    pivotY: 0.3,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'eyes',
    src: '/assets/眼睛.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 21,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'closedEyes',
    src: '/assets/闭眼.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 21,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'hurtEyes',
    src: '/assets/闭眼-收到伤害.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 21,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'angryEyes',
    src: '/assets/生气眼.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 21,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'mouth',
    src: '/assets/嘴.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 22,
    pivotX: 0.5,
    pivotY: 0.65,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'openMouth',
    src: '/assets/张嘴.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 22,
    pivotX: 0.5,
    pivotY: 0.65,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'breatheMouth',
    src: '/assets/张嘴-喘息.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 22,
    pivotX: 0.5,
    pivotY: 0.65,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'teethMouth',
    src: '/assets/龇牙.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 22,
    pivotX: 0.5,
    pivotY: 0.65,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'frontBow',
    src: '/assets/前蝴蝶结.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 23,
    pivotX: 0.5,
    pivotY: 0.7,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'pendant',
    src: '/assets/挂饰.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 24,
    pivotX: 0.35,
    pivotY: 0.35,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'scaredEyes',
    src: '/assets/红眼框.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 21,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'scaredTears',
    src: '/assets/红眼眶-眼泪.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 21,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'scaredPupils',
    src: '/assets/害怕-缩瞳眼珠.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 21,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'scaredFace',
    src: '/assets/害怕-青脸.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 20,
    pivotX: 0.5,
    pivotY: 0.5,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
  {
    id: 'scaredMouth',
    src: '/assets/害怕-张嘴.png',
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    zIndex: 22,
    pivotX: 0.5,
    pivotY: 0.65,
    originX: 0,
    originY: 0,
    width: 800,
    height: 600,
  },
];

export function getDefaultParts(): CharacterPart[] {
  return BASE_PARTS.map((p) => ({ ...p }));
}

export function isPartVisible(id: string, state: string): boolean {
  const isScared = state === 'scared';
  const isAngry = state === 'angry';
  const isHurt = state === 'hurt' || state === 'burnt';
  const isClosed = state === 'closedEyes' || state === 'dizzy' || state === 'frozen' || state === 'blink';
  
  if (id === 'scaredEyes') return isScared;
  if (id === 'scaredTears') return isScared;
  if (id === 'scaredPupils') return isScared;
  if (id === 'scaredFace') return isScared;
  if (id === 'scaredMouth') return isScared;

  if (id === 'angryEyes') return isAngry;
  if (id === 'hurtEyes') return isHurt && !isScared;
  if (id === 'closedEyes') return isClosed && !isScared;
  if (id === 'eyes') return !isAngry && !isHurt && !isClosed && !isScared;

  if (id === 'face') return !isScared;

  // Mouth logic
  const isBreathe = state === 'exhausted' || state === 'burnt';
  const isTeeth = state === 'comboing' || state === 'angry';
  const isOpen = state === 'openMouth' || state === 'dizzy' || state === 'hurt';

  if (id === 'breatheMouth') return isBreathe && !isScared;
  if (id === 'teethMouth') return isTeeth && !isScared;
  if (id === 'openMouth') return isOpen && !isScared;
  if (id === 'mouth') return !isBreathe && !isTeeth && !isOpen && !isScared;

  return true;
}

export function getToolDamage(tool: string): number {
  switch (tool) {
    case 'fist': return 15;
    case 'slipper': return 12;
    case 'bat': return 35;
    case 'lightning': return 28;
    case 'ice': return 8;
    case 'slingshot': return 40;
    case 'axe': return 50;
    case 'katana': return 55;
    case 'pistol': return 45;
    case 'rifle': return 60;
    case 'shotgun': return 80;
    default: return 10;
  }
}

export function getToolEmoji(tool: string): string {
  switch (tool) {
    case 'fist': return '👊';
    case 'slipper': return '🩴';
    case 'bat': return '🏏';
    case 'lightning': return '⚡';
    case 'ice': return '🧊';
    case 'slingshot': return '🎯';
    case 'axe': return '🪓';
    case 'katana': return '🗡️';
    case 'pistol': return '🔫';
    case 'rifle': return '🔫';
    case 'shotgun': return '🔫';
    default: return '👋';
  }
}

export const TOOLS: { id: string; name: string; emoji: string; icon?: string }[] = [
  { id: 'fist', name: '拳头', emoji: '👊' },
  { id: 'slipper', name: '拖鞋', emoji: '🩴' },
  { id: 'bat', name: '球棒', emoji: '🏏', icon: '/assets/weapons/bat.png' },
  { id: 'lightning', name: '闪电', emoji: '⚡' },
  { id: 'ice', name: '冰冻', emoji: '🧊' },
  { id: 'slingshot', name: '弹弓', emoji: '🎯' },
  { id: 'axe', name: '斧头', emoji: '🪓', icon: '/assets/weapons/axe.png' },
  { id: 'katana', name: '武士刀', emoji: '🗡️', icon: '/assets/weapons/katana.png' },
  { id: 'pistol', name: '手枪', emoji: '🔫', icon: '/assets/weapons/pistol.png' },
  { id: 'rifle', name: '步枪', emoji: '🔫', icon: '/assets/weapons/rifle.png' },
  { id: 'shotgun', name: '霰弹枪', emoji: '🔫', icon: '/assets/weapons/shotgun.png' },
];

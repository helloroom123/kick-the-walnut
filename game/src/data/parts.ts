import type { CharacterPart } from '@/store/gameStore';
import { useGameStore } from '@/store/gameStore';

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
  { id: 'halfEyeWhite', src: '/assets/半睁眼-眼白.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 21, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'halfEyeSocket', src: '/assets/半睁眼-眼眶.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 22, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'halfClosedEyes', src: '/assets/半睁眼-闭眼.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 22, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'oMouth', src: '/assets/o型嘴.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 22, pivotX: 0.5, pivotY: 0.65, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'smileMouth', src: '/assets/笑.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 22, pivotX: 0.5, pivotY: 0.65, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'baredTeeth', src: '/assets/龇牙.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 22, pivotX: 0.5, pivotY: 0.65, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'closedHurtEyes', src: '/assets/闭眼-收到伤害.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 22, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'scaredGreyFace', src: '/assets/害怕-灰沉脸.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 20, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'scaredGloomyFace', src: '/assets/害怕-阴沉脸.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 20, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'scaredLeftHand', src: '/assets/手部动作适配用-悬浮手左边.png', x: -61, y: -69, rotation: -43, scale: 1.3, zIndex: 24, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'scaredRightHand', src: '/assets/手部动作适配用-悬浮手右边.png', x: 197, y: -311, rotation: 49, scale: 0.85, zIndex: 24, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_1', src: '/assets/1.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_2', src: '/assets/2.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_3', src: '/assets/3.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_4', src: '/assets/4.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_5', src: '/assets/5.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_6', src: '/assets/6.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_7', src: '/assets/7.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_o型嘴', src: '/assets/o型嘴.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_中-淤青', src: '/assets/中-淤青.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_伤口1', src: '/assets/伤口1.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_伤口2', src: '/assets/伤口2.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_伤口3', src: '/assets/伤口3.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_伤口4', src: '/assets/伤口4.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_伤口5', src: '/assets/伤口5.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_伤口6', src: '/assets/伤口6.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_前蝴蝶结', src: '/assets/前蝴蝶结.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_半睁眼-眼白', src: '/assets/半睁眼-眼白.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_半睁眼-眼眶', src: '/assets/半睁眼-眼眶.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_半睁眼-闭眼', src: '/assets/半睁眼-闭眼.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_右手', src: '/assets/右手.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_右手臂-断肢', src: '/assets/右手臂-断肢.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_右耳', src: '/assets/右耳.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_后蝴蝶结', src: '/assets/后蝴蝶结.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_喘息', src: '/assets/喘息.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_喷溅血2', src: '/assets/喷溅血2.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_喷溅血3', src: '/assets/喷溅血3.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_嘴', src: '/assets/嘴.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_害怕-张嘴', src: '/assets/害怕-张嘴.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_害怕-灰沉脸', src: '/assets/害怕-灰沉脸.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_害怕-缩瞳眼珠', src: '/assets/害怕-缩瞳眼珠.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_害怕-阴沉脸', src: '/assets/害怕-阴沉脸.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_害怕-阴脸', src: '/assets/害怕-阴脸.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_害怕-青脸', src: '/assets/害怕-青脸.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_小血1', src: '/assets/小血1.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_尾巴', src: '/assets/尾巴.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_左手', src: '/assets/左手.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_左手臂-断肢', src: '/assets/左手臂-断肢.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_左耳', src: '/assets/左耳.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_张嘴', src: '/assets/张嘴.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_手部动作适配用-悬浮手右边', src: '/assets/手部动作适配用-悬浮手右边.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_手部动作适配用-悬浮手左边', src: '/assets/手部动作适配用-悬浮手左边.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_挂饰', src: '/assets/挂饰.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_正常-眼珠', src: '/assets/正常-眼珠.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_正常-眼白', src: '/assets/正常-眼白.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_正常-眼眶', src: '/assets/正常-眼眶.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_流血眼', src: '/assets/流血眼.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_溅血1', src: '/assets/溅血1.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_眼睛', src: '/assets/眼睛.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_笑', src: '/assets/笑.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_红眼框', src: '/assets/红眼框.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_红眼眶-眼泪', src: '/assets/红眼眶-眼泪.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_脸', src: '/assets/脸.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_血1', src: '/assets/血1.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_血2', src: '/assets/血2.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_血迹1', src: '/assets/血迹1.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_血迹2', src: '/assets/血迹2.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_血迹3', src: '/assets/血迹3.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_身体', src: '/assets/身体.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_轻-淤青', src: '/assets/轻-淤青.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_重-淤青', src: '/assets/重-淤青.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_闭眼-收到伤害', src: '/assets/闭眼-收到伤害.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_闭眼', src: '/assets/闭眼.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_鞭子中', src: '/assets/鞭子中.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_鞭子大', src: '/assets/鞭子大.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_鞭子小', src: '/assets/鞭子小.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
  { id: 'debug_龇牙', src: '/assets/龇牙.png', x: 0, y: 0, rotation: 0, scale: 1, zIndex: 25, pivotX: 0.5, pivotY: 0.5, originX: 0, originY: 0, width: 800, height: 600 },
];

export function getDefaultParts(): CharacterPart[] {
  return BASE_PARTS.map((p) => ({ ...p }));
}

export function isPartVisible(id: string, state: string): boolean {
  // IMPORTANT: Respect user's Debug Panel visibility override
  const overrides = useGameStore.getState().partVisibilityOverrides;
  if (overrides && overrides[id] !== undefined) {
    return overrides[id];
  }
  
  const dismembered = useGameStore.getState().dismemberedParts || [];

  if (id.startsWith('debug_')) {
    if (id === 'debug_左手臂-断肢' && dismembered.includes('leftHand')) return true;
    if (id === 'debug_右手臂-断肢' && dismembered.includes('rightHand')) return true;
    return false; // By default, debug parts are hidden
  }
  
  const isScared = state === 'scared';
  const isAngry = state === 'angry';
  const isHurt = state === 'hurt' || state === 'burnt';
  const isClosed = state === 'closedEyes' || state === 'dizzy' || state === 'frozen' || state === 'blink';
  
  const isMocking = state === 'mocking';
  const isDisappointed = state === 'disappointed';
  const isDrooling = state === 'drooling';
  const isSlightlyScared = state === 'slightlyScared';
  const isDismembered = dismembered.length > 0;

  // State Overlays (Faces)
  if (id === 'scaredFace') return isScared;
  if (id === 'scaredGloomyFace') return isSlightlyScared || (isDismembered && !isScared);

  // Eyes
  const isHalfOpen = isMocking;
  if (id === 'halfEyeWhite') return isHalfOpen;
  if (id === 'halfEyeSocket') return isHalfOpen;
  if (id === 'halfClosedEyes') return isDisappointed || (isDismembered && !isScared);

  if (id === 'scaredEyes') return isScared;
  if (id === 'scaredTears') return isScared;
  if (id === 'scaredPupils') return isScared;

  if (id === 'angryEyes') return isAngry && !isScared && !isDismembered;
  if (id === 'closedHurtEyes') return isHurt && !isScared && !isDismembered;
  if (id === 'hurtTears') return isHurt;
  if (id === 'hurtEyes') return false; // Hide old asset
  if (id === 'closedEyes') return isClosed && !isScared && !isDisappointed && !isDismembered;
  
  // Normal eyes are shown when no other special eye state is active
  const isNormalEyes = !isAngry && !isHurt && !isClosed && !isScared && !isHalfOpen && !isDisappointed && !(isDismembered && !isScared);
  if (id === 'eyes') return isNormalEyes;

  if (id === 'face') return !isScared && !(isDismembered && !isScared);

  // Mouth logic
  const isBreathe = state === 'exhausted' || state === 'burnt';
  const isTeeth = state === 'comboing' || state === 'angry';
  const isOpen = state === 'openMouth' || state === 'dizzy' || state === 'hurt';

  if (id === 'smileMouth') return isMocking;
  if (id === 'oMouth') return isDrooling;
  if (id === 'baredTeeth') return isDismembered && !isScared;
  if (id === 'scaredMouth') return isScared;
  
  const isDismemberedMouth = isDismembered && !isScared;
  if (id === 'breatheMouth') return isBreathe && !isScared && !isMocking && !isDrooling && !isDismemberedMouth;
  if (id === 'teethMouth') return isTeeth && !isScared && !isMocking && !isDrooling && !isDismemberedMouth;
  if (id === 'openMouth') return isOpen && !isScared && !isMocking && !isDrooling && !isDismemberedMouth;
  if (id === 'mouth') return !isBreathe && !isTeeth && !isOpen && !isScared && !isMocking && !isDrooling && !isDismemberedMouth;

  if (id === 'leftHand' || id === 'rightHand') return !isScared && !dismembered.includes(id);
  if (id === 'scaredLeftHand') return isScared && !dismembered.includes('leftHand');
  if (id === 'scaredRightHand') return isScared && !dismembered.includes('rightHand');

  // Unused or manually composed parts should be hidden by default
  if (id === 'scaredGreyFace') return false;

  return true;
}

export function getToolDamage(tool: string): number {
  switch (tool) {
    case 'fist': return 15;
    case 'slipper': return 12;
    case 'bat': return 35;
    case 'whip': return 25;
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
    case 'whip': return '🔗';
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
  { id: 'whip', name: '鞭子', emoji: '🔗', icon: '/assets/weapons/whip.png' },
  { id: 'lightning', name: '闪电', emoji: '⚡' },
  { id: 'ice', name: '冰冻', emoji: '🧊' },
  { id: 'slingshot', name: '弹弓', emoji: '🎯' },
  { id: 'axe', name: '斧头', emoji: '🪓', icon: '/assets/weapons/axe.png' },
  { id: 'katana', name: '武士刀', emoji: '🗡️', icon: '/assets/weapons/katana.png' },
  { id: 'pistol', name: '手枪', emoji: '🔫', icon: '/assets/weapons/pistol.png' },
  { id: 'rifle', name: '步枪', emoji: '🔫', icon: '/assets/weapons/rifle.png' },
  { id: 'shotgun', name: '霰弹枪', emoji: '🔫', icon: '/assets/weapons/shotgun.png' },
];

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useIdleAnimation(id: string, isVisible: boolean, characterState: string) {
  const idleRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const el = idleRef.current;
    if (!el || !isVisible) return;

    // Handle "scared" pose (holding head) - floating hands tremble
    if (characterState === 'scared') {
      if (id === 'scaredLeftHand') {
        const tremble = gsap.timeline({ repeat: -1, yoyo: true });
        tremble.to(el, { x: -95, y: -45, rotation: -15, duration: 0.05 })
               .to(el, { x: -105, y: -55, rotation: -10, duration: 0.05 });
        return () => { tremble.kill(); };
      }
      if (id === 'scaredRightHand') {
        const tremble = gsap.timeline({ repeat: -1, yoyo: true });
        tremble.to(el, { x: 95, y: -45, rotation: 15, duration: 0.05 })
               .to(el, { x: 105, y: -55, rotation: 10, duration: 0.05 });
        return () => { tremble.kill(); };
      }
    }

    // Give each part a slightly different phase and animation to make it feel organic
    const t = gsap.timeline({ repeat: -1, yoyo: true });

    switch (id) {
      case 'body':
      case 'frontBow':
      case 'backBow':
      case 'pendant':
      case 'face':
      case 'eyes':
      case 'mouth':
      case 'hurtEyes':
      case 'angryEyes':
      case 'closedEyes':
      case 'openMouth':
      case 'breatheMouth':
      case 'teethMouth':
        // Core parts shouldn't move independently to avoid detachment. 
        // Global breathing is handled by animate-floatIdle in Stage.tsx.
        break;
      case 'leftHand':
      case 'rightHand':
        // Removed hand rotation because imperfect pivot points cause the arms to detach from the body visually.
        break;
      case 'leftEar':
        t.to(el, { rotation: -5, duration: 1.6, ease: 'sine.inOut', delay: 0.2 });
        break;
      case 'rightEar':
        t.to(el, { rotation: 5, duration: 1.5, ease: 'sine.inOut', delay: 0.3 });
        break;
      case 'tail':
        t.to(el, { rotation: 12, duration: 1.8, ease: 'sine.inOut' });
        break;
      default:
        break;
    }

    return () => {
      t.kill();
      gsap.set(el, { clearProps: 'all' });
    };
  }, [id, isVisible, characterState]);

  return idleRef;
}

import { useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import type { CharacterPart, ToolId } from '@/store/gameStore';

interface PartElement extends HTMLElement {
  __baseX?: number;
  __baseY?: number;
  __baseRotation?: number;
  __pivotX?: number;
  __pivotY?: number;
}

export function usePhysics() {
  const partRefs = useRef<Record<string, PartElement | null>>({});
  const stageRef = useRef<HTMLDivElement | null>(null);

  const setPartRef = useCallback((id: string) => (el: HTMLElement | null) => {
    partRefs.current[id] = el as PartElement | null;
  }, []);

  const applyImpulse = useCallback((id: string, dx: number, dy: number, rotation: number) => {
    const el = partRefs.current[id];
    if (!el) return;

    const baseX = el.__baseX ?? 0;
    const baseY = el.__baseY ?? 0;
    const baseRot = el.__baseRotation ?? 0;

    gsap.killTweensOf(el);

    gsap.to(el, {
      x: baseX + dx,
      y: baseY + dy,
      rotation: baseRot + rotation,
      duration: 0.08,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(el, {
          x: baseX,
          y: baseY,
          rotation: baseRot,
          duration: 0.6,
          ease: 'elastic.out(1, 0.35)',
        });
      },
    });
  }, []);

  const applyGroupImpulse = useCallback((clientX: number, clientY: number, force: number, tool: ToolId) => {
    // Lightning rotates the entire character consistently, instead of tearing parts
    const lightningRot = (Math.random() - 0.5) * 60;

    const entries = Object.entries(partRefs.current).filter(([, el]) => el);
    entries.forEach(([id, el]) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Force pivot to 0.5 for all parts during impact calculation
      // This ensures all parts receive the exact same impulse and stay perfectly together
      const pivotX = 0.5;
      const pivotY = 0.5;

      const elX = rect.left + rect.width * pivotX;
      const elY = rect.top + rect.height * pivotY;
      const dx = elX - clientX;
      const dy = elY - clientY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const nx = dx / dist;
      const ny = dy / dist;
      const falloff = Math.max(0.1, 1 - dist / 600);

      let rot = 0;
      if (tool === 'slipper') rot = nx * 30;
      else if (tool === 'bat') rot = ny * 40 + nx * 20;
      else if (tool === 'lightning') rot = lightningRot;
      else rot = (nx + ny) * 25;

      applyImpulse(id, nx * force * falloff * 0.9, ny * force * falloff * 0.9, rot * falloff);
    });
  }, [applyImpulse]);

  const shakeScreen = useCallback((intensity = 12) => {
    if (!stageRef.current) return;
    gsap.killTweensOf(stageRef.current);
    gsap.fromTo(
      stageRef.current,
      { x: -intensity, y: intensity },
      { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.2)' }
    );
  }, []);

  const flash = useCallback((color: string) => {
    if (!stageRef.current) return;
    const overlay = document.createElement('div');
    overlay.className = 'pointer-events-none absolute inset-0 z-50';
    overlay.style.backgroundColor = color;
    overlay.style.opacity = '0.35';
    stageRef.current.appendChild(overlay);
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.35,
      onComplete: () => overlay.remove(),
    });
  }, []);

  const recordBase = useCallback((id: string, x: number, y: number, rotation: number, pivotX: number, pivotY: number) => {
    const el = partRefs.current[id];
    if (el) {
      el.__baseX = x;
      el.__baseY = y;
      el.__baseRotation = rotation;
      el.__pivotX = pivotX;
      el.__pivotY = pivotY;
    }
  }, []);

  return { partRefs, stageRef, setPartRef, applyImpulse, applyGroupImpulse, shakeScreen, flash, recordBase };
}

export type { PartElement };

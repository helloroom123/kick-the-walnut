import { useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import type { CharacterPart, ToolId } from '@/store/gameStore';
import { useGameStore } from '@/store/gameStore';
import { useIdleAnimation } from '@/hooks/useIdleAnimation';

interface PartProps {
  part: CharacterPart;
  center: { x: number; y: number };
  onImpulse: (id: string, dx: number, dy: number, rotation: number) => void;
  onGroupImpulse: (x: number, y: number, force: number, tool: ToolId) => void;
  setRef: (id: string) => (el: HTMLElement | null) => void;
  recordBase: (id: string, x: number, y: number, rotation: number, pivotX: number, pivotY: number) => void;
  isVisible: boolean;
}

export function Part({ part, center, onImpulse, onGroupImpulse, setRef, recordBase, isVisible }: PartProps) {
  const elRef = useRef<HTMLElement | null>(null);
  const selectedTool = useGameStore((s) => s.selectedTool);
  const setPartTransform = useGameStore((s) => s.setPartTransform);
  const frozenUntil = useGameStore((s) => s.frozenUntil);
  const isFrozen = Date.now() < frozenUntil;

  const idleRef = useIdleAnimation(part.id, isVisible);

  const updateTransform = useCallback(() => {
    const el = elRef.current;
    if (!el) return;
    gsap.set(el, {
      x: part.x,
      y: part.y,
      xPercent: -50,
      yPercent: -50,
      rotation: part.rotation,
      scale: part.scale,
      zIndex: part.zIndex,
    });
    recordBase(part.id, part.x, part.y, part.rotation, part.pivotX, part.pivotY);
  }, [part, recordBase]);

  useLayoutEffect(() => {
    updateTransform();
  }, [updateTransform]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if ((selectedTool as string) === 'slingshot') return; // Let Stage handle slingshot dragging
      
      e.preventDefault();
      e.stopPropagation();
      const el = elRef.current;
      if (!el) return;

      if ((selectedTool as string) !== 'slingshot') {
        onGroupImpulse(e.clientX, e.clientY, getToolForce(selectedTool), selectedTool as ToolId);
      }
    },
    [selectedTool, onGroupImpulse]
  );

  return (
    <div
      ref={(node) => {
        elRef.current = node;
        setRef(part.id)(node);
        if (node) updateTransform();
      }}
      className={`absolute select-none pointer-events-none will-change-transform`}
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: part.width || 'auto',
        height: part.height || 'auto',
        transformOrigin: `${part.pivotX * 100}% ${part.pivotY * 100}%`,
        pointerEvents: isVisible ? 'auto' : 'none',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        filter: isFrozen ? 'hue-rotate(180deg) brightness(1.2) drop-shadow(0 0 8px #a8d8ff)' : 'none',
      }}
      onPointerDown={handlePointerDown}
    >
      <img
        ref={idleRef}
        src={part.src}
        alt={part.id}
        draggable={false}
        className={`w-full h-full object-contain drop-shadow-md ${isFrozen ? '' : 'transition-filter duration-300'}`}
        style={{
          transformOrigin: `${part.pivotX * 100}% ${part.pivotY * 100}%`,
        }}
      />
    </div>
  );
}

function getToolForce(tool: string): number {
  switch (tool) {
    case 'fist': return 40;
    case 'slipper': return 35;
    case 'bat': return 90;
    case 'lightning': return 30;
    case 'ice': return 20;
    default: return 30;
  }
}

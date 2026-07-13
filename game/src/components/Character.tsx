import { useMemo, useEffect } from 'react';
import { useGameStore } from '@/store/gameStore';
import { getDefaultParts, isPartVisible } from '@/data/parts';
import { Part } from './Part';
import type { UsePhysicsReturn } from './Stage';
import type { ToolId } from '@/store/gameStore';

interface CharacterProps {
  center: { x: number; y: number };
  physics: UsePhysicsReturn;
}

export function Character({ center, physics }: CharacterProps) {
  const { parts, characterState, scars } = useGameStore();

  useEffect(() => {
    const defaultParts = getDefaultParts();
    if (parts.length !== defaultParts.length) {
      useGameStore.setState({ parts: defaultParts });
    }
  }, [parts.length]);

  const renderedParts = useMemo(() => {
    return [...parts].sort((a, b) => a.zIndex - b.zIndex);
  }, [parts]);

  return (
    <div className="relative w-full h-full pointer-events-none">
      {renderedParts.map((part) => (
        <Part
          key={part.id}
          part={part}
          center={center}
          onImpulse={physics.applyImpulse}
          onGroupImpulse={physics.applyGroupImpulse}
          setRef={physics.setPartRef}
          recordBase={physics.recordBase}
          isVisible={isPartVisible(part.id, characterState)}
        />
      ))}
      {/* Scars rendered on character face */}
      {scars && scars.map((scar) => (
        <div
          key={scar.id}
          className="absolute pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            width: 80,
            height: 80,
            transform: `translate(-50%, -50%) translate(${scar.x}px, ${scar.y}px) rotate(${scar.rotation}deg) scale(${scar.scale})`,
            zIndex: 21,
          }}
        >
          <img
            src={scar.src}
            alt="scar"
            draggable={false}
            className="w-full h-full object-contain"
            style={{ opacity: 0.85 }}
          />
          {/* Blood drip */}
          <div
            className="absolute"
            style={{
              left: '50%',
              top: '80%',
              width: 6,
              height: 20,
              background: 'linear-gradient(to bottom, rgba(180,20,20,0.7), rgba(180,20,20,0))',
              borderRadius: '0 0 3px 3px',
              transform: 'translateX(-50%)',
              animation: 'bloodDrip 2s ease-in forwards',
            }}
          />
        </div>
      ))}
    </div>
  );
}

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
  const { parts, characterState } = useGameStore();

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
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { isPartVisible } from '../data/parts';

export function DebugPanel() {
  const [isVisible, setIsVisible] = useState(true);
  const [selectedId, setSelectedId] = useState<string>('');
  
  const parts = useGameStore((s) => s.parts);
  const setPartTransform = useGameStore((s) => s.setPartTransform);
  const setPartVisibilityOverride = useGameStore((s) => s.setPartVisibilityOverride);
  const characterState = useGameStore((s) => s.characterState);
  const overrides = useGameStore((s) => s.partVisibilityOverrides);
  
  const selectedPart = parts.find(p => p.id === selectedId) || null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === 'd') {
        setIsVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  const handleCopySelected = () => {
    if (!selectedPart) return;
    const json = JSON.stringify(selectedPart, null, 2);
    navigator.clipboard.writeText(json).then(() => {
      alert('Copied selected part JSON to clipboard!\n' + json);
    });
  };

  const handleCopyVisible = () => {
    const visibleParts = parts.filter(p => isPartVisible(p.id, characterState));
    const cleanParts = visibleParts.map(p => ({
      id: p.id,
      src: p.src,
      x: p.x,
      y: p.y,
      rotation: p.rotation,
      scale: p.scale,
      zIndex: p.zIndex,
    }));
    const json = JSON.stringify(cleanParts, null, 2);
    navigator.clipboard.writeText(json).then(() => {
      alert('Copied ALL VISIBLE parts JSON to clipboard!\nSend this to the AI so it knows exactly what makes up this expression.');
    });
  };

  return (
    <div className="fixed top-4 right-4 bg-white/90 p-4 rounded-xl shadow-2xl border border-gray-200 z-[9999] w-80 backdrop-blur-sm text-sm flex flex-col max-h-[90vh]">
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h3 className="font-bold text-gray-800">Debug Adjuster</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 text-xs px-2 py-1 bg-gray-100 rounded"
        >
          Hide (Press D)
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Select Part to Edit Transform</label>
          <select 
            className="w-full p-2 border rounded bg-white text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none mb-2"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <option value="">-- Choose a part --</option>
            {parts.map(p => (
              <option key={p.id} value={p.id}>{p.id}</option>
            ))}
          </select>

          <label className="block text-xs font-medium text-gray-600 mb-1 mt-3">Toggle Visibility (Overrides state logic)</label>
          <div className="max-h-32 overflow-y-auto border rounded p-2 bg-white space-y-1">
            {parts.map(p => {
              const visible = isPartVisible(p.id, characterState);
              const isOverridden = overrides[p.id] !== undefined;
              return (
                <div key={p.id} className="flex items-center gap-2 text-xs">
                  <input 
                    type="checkbox" 
                    checked={visible}
                    onChange={(e) => setPartVisibilityOverride(p.id, e.target.checked)}
                  />
                  <span className={isOverridden ? 'text-blue-600 font-bold' : 'text-gray-600'}>
                    {p.id} {isOverridden ? '(Forced)' : ''}
                  </span>
                  {isOverridden && (
                    <button 
                      onClick={() => setPartVisibilityOverride(p.id, null)}
                      className="ml-auto text-red-500 hover:text-red-700 text-[10px]"
                    >
                      Reset
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {selectedPart && (
          <div className="space-y-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
            {/* Z-Index */}
            <div>
              <div className="flex justify-between">
                <label className="text-xs text-gray-600 font-bold text-blue-600">Z-Index: {selectedPart.zIndex}</label>
              </div>
              <input 
                type="range" min="0" max="100" step="1" 
                value={selectedPart.zIndex}
                onChange={(e) => setPartTransform(selectedPart.id, { zIndex: Number(e.target.value) })}
                className="w-full accent-blue-600"
              />
            </div>
            {/* X Position */}
            <div>
              <div className="flex justify-between">
                <label className="text-xs text-gray-600">X Position: {selectedPart.x}</label>
              </div>
              <input 
                type="range" min="-400" max="400" step="1" 
                value={selectedPart.x}
                onChange={(e) => setPartTransform(selectedPart.id, { x: Number(e.target.value) })}
                className="w-full accent-blue-500"
              />
            </div>
            
            {/* Y Position */}
            <div>
              <div className="flex justify-between">
                <label className="text-xs text-gray-600">Y Position: {selectedPart.y}</label>
              </div>
              <input 
                type="range" min="-400" max="400" step="1" 
                value={selectedPart.y}
                onChange={(e) => setPartTransform(selectedPart.id, { y: Number(e.target.value) })}
                className="w-full accent-blue-500"
              />
            </div>

            {/* Rotation */}
            <div>
              <div className="flex justify-between">
                <label className="text-xs text-gray-600">Rotation: {selectedPart.rotation}°</label>
              </div>
              <input 
                type="range" min="-180" max="180" step="1" 
                value={selectedPart.rotation}
                onChange={(e) => setPartTransform(selectedPart.id, { rotation: Number(e.target.value) })}
                className="w-full accent-blue-500"
              />
            </div>

            {/* Scale */}
            <div>
              <div className="flex justify-between">
                <label className="text-xs text-gray-600">Scale: {selectedPart.scale.toFixed(2)}</label>
              </div>
              <input 
                type="range" min="0.1" max="3" step="0.05" 
                value={selectedPart.scale}
                onChange={(e) => setPartTransform(selectedPart.id, { scale: Number(e.target.value) })}
                className="w-full accent-blue-500"
              />
            </div>

            <button 
              onClick={handleCopySelected}
              className="w-full mt-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded transition-colors shadow-sm active:scale-95"
            >
              Copy Selected JSON
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 flex-shrink-0">
        <button 
          onClick={handleCopyVisible}
          className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded transition-colors shadow-sm active:scale-95"
        >
          Copy ALL Visible Parts JSON
        </button>
      </div>
    </div>
  );
}

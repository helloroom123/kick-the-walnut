import { useGameStore, CharacterState } from '../store/gameStore';

export function PresetExpressions() {
  const setCharacterState = useGameStore((s) => s.setCharacterState);
  const characterState = useGameStore((s) => s.characterState);

  const presets: { id: CharacterState; name: string; emoji: string }[] = [
    { id: 'mocking', name: '嘲讽笑', emoji: '😏' },
    { id: 'disappointed', name: '失望', emoji: '😞' },
    { id: 'drooling', name: '流口水', emoji: '🤤' },
    { id: 'slightlyScared', name: '稍微害怕', emoji: '😨' },
  ];

  return (
    <div className="fixed top-20 right-4 bg-white/90 p-4 rounded-xl shadow-2xl border border-gray-200 z-[9000] w-64 backdrop-blur-sm">
      <h3 className="font-bold text-gray-800 mb-3 text-sm">预设表情测试</h3>
      <div className="grid grid-cols-2 gap-2">
        {presets.map((p) => (
          <button
            key={p.id}
            onClick={() => setCharacterState(p.id)}
            className={`flex items-center gap-2 p-2 rounded text-xs font-medium transition-all ${
              characterState === p.id 
                ? 'bg-blue-500 text-white shadow-inner' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow'
            }`}
          >
            <span className="text-base">{p.emoji}</span>
            <span>{p.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-3">
        <button
          onClick={() => setCharacterState('normal')}
          className="w-full text-xs text-gray-500 hover:text-gray-800 border border-gray-200 p-1 rounded"
        >
          恢复正常 (Normal)
        </button>
      </div>
    </div>
  );
}

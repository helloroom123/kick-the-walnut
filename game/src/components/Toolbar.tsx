import { useGameStore } from '@/store/gameStore';
import { TOOLS } from '@/data/parts';
import { RotateCcw, Volume2, VolumeX } from 'lucide-react';

export function Toolbar() {
  const selectedTool = useGameStore((s) => s.selectedTool);
  const setTool = useGameStore((s) => s.setTool);
  const resetCharacter = useGameStore((s) => s.resetCharacter);
  const muted = useGameStore((s) => s.muted);
  const toggleMute = useGameStore((s) => s.toggleMute);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 sm:gap-3 p-2 sm:p-4 bg-gradient-to-t from-white/95 sm:from-white/90 via-white/80 sm:via-white/70 to-transparent">
      <div className="flex items-center gap-1 sm:gap-2 rounded-2xl bg-white/95 sm:bg-white/80 sm:backdrop-blur-md border border-pink-200/60 shadow-xl p-1.5 sm:p-2 overflow-x-auto no-scrollbar max-w-full">
        {TOOLS.map((tool) => {
          const active = selectedTool === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setTool(tool.id as any)}
              className={[
                'relative flex flex-col items-center justify-center w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-xl transition-all duration-200',
                active
                  ? 'bg-pink-400 text-white scale-110 shadow-lg shadow-pink-300/40 z-10'
                  : 'bg-white text-slate-600 hover:bg-pink-50 hover:scale-105',
              ].join(' ')}
              title={tool.name}
            >
              {tool.icon ? (
                <img src={tool.icon} alt={tool.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-md" />
              ) : (
                <span className="text-xl sm:text-2xl drop-shadow-sm">{tool.emoji}</span>
              )}
              <span className="text-[9px] sm:text-[10px] font-bold mt-0.5">{tool.name}</span>
              {active && (
                <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink-500 rounded-full border-2 border-white" />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-1 sm:gap-2 rounded-2xl bg-white/95 sm:bg-white/80 sm:backdrop-blur-md border border-pink-200/60 shadow-xl p-1.5 sm:p-2 shrink-0">
        <button
          onClick={toggleMute}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white text-slate-600 hover:bg-pink-50 transition-colors"
          title={muted ? '开启音效' : '静音'}
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <button
          onClick={resetCharacter}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white text-slate-600 hover:bg-pink-50 transition-colors"
          title="重置角色"
        >
          <RotateCcw size={18} />
        </button>
      </div>
    </div>
  );
}

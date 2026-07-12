import { useGameStore } from '@/store/gameStore';
import { Trophy, Flame, Zap } from 'lucide-react';

export function Hud() {
  const { score, combo, highScore, characterState } = useGameStore();

  const stateLabel = {
    normal: '正常',
    hurt: '疼痛',
    dizzy: '眩晕',
    frozen: '冰冻',
    burnt: '烧焦',
    openMouth: '张嘴',
    closedEyes: '闭眼',
  }[characterState];

  return (
    <div className="fixed top-0 left-0 right-0 z-40 p-2 sm:p-4 flex items-start justify-between pointer-events-none">
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <div className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-white/95 sm:bg-white/85 sm:backdrop-blur-md border border-pink-200/60 shadow-xl px-3 py-2 sm:px-5 sm:py-3">
          <Trophy className="text-amber-400 w-5 h-5 sm:w-6 sm:h-6" />
          <div>
            <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">最高分</div>
            <div className="text-base sm:text-xl font-black text-slate-800 leading-none">{highScore.toLocaleString()}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 rounded-2xl bg-white/95 sm:bg-white/85 sm:backdrop-blur-md border border-pink-200/60 shadow-xl px-3 py-2 sm:px-5 sm:py-3">
          <Zap className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
          <div>
            <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">当前分数</div>
            <div className="text-base sm:text-xl font-black text-slate-800 leading-none">{score.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-1.5 sm:gap-2">
        <div
          className={[
            'flex items-center gap-2 rounded-2xl px-3 py-2 sm:px-5 sm:py-3 shadow-xl border sm:backdrop-blur-md',
            combo > 1 ? 'bg-pink-500/95 sm:bg-pink-500/90 border-pink-300 text-white' : 'bg-white/95 sm:bg-white/85 border-pink-200/60 text-slate-700',
          ].join(' ')}
        >
          <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
          <div>
            <div className="text-[9px] sm:text-[10px] font-bold opacity-80 uppercase tracking-wider">连击</div>
            <div className="text-base sm:text-xl font-black leading-none">{combo}x</div>
          </div>
        </div>

        <div className="rounded-full px-3 py-1 sm:px-4 sm:py-1.5 bg-white/95 sm:bg-white/80 sm:backdrop-blur border border-pink-200/60 shadow text-[10px] sm:text-xs font-bold text-slate-500">
          状态: <span className="text-pink-500">{stateLabel}</span>
        </div>
      </div>
    </div>
  );
}

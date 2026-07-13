import { Stage } from '@/components/Stage';
import { Toolbar } from '@/components/Toolbar';
import { Hud } from '@/components/Hud';
import { DebugPanel } from '@/components/DebugPanel';
import { PresetExpressions } from '@/components/PresetExpressions';

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-sky-50 flex flex-col">
      <Hud />
      <Stage />
      <Toolbar />
      <DebugPanel />
      <PresetExpressions />
    </div>
  );
}

import { Stage } from '@/components/Stage';
import { Toolbar } from '@/components/Toolbar';
import { Hud } from '@/components/Hud';

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-sky-50 flex flex-col">
      <Hud />
      <Stage />
      <Toolbar />
    </div>
  );
}

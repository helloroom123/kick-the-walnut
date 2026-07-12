import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { useGameStore } from '@/store/gameStore';
import { usePhysics } from '@/hooks/usePhysics';
import { Character } from './Character';
import { getToolDamage } from '@/data/parts';
import type { ToolId } from '@/store/gameStore';

export interface UsePhysicsReturn {
  partRefs: React.MutableRefObject<Record<string, HTMLElement | null>>;
  stageRef: React.RefObject<HTMLDivElement | null>;
  setPartRef: (id: string) => (el: HTMLElement | null) => void;
  applyImpulse: (id: string, dx: number, dy: number, rotation: number) => void;
  applyGroupImpulse: (centerX: number, centerY: number, force: number, tool: ToolId) => void;
  shakeScreen: (intensity?: number) => void;
  flash: (color: string) => void;
  recordBase: (id: string, x: number, y: number, rotation: number, pivotX: number, pivotY: number) => void;
}

interface FloatingText {
  id: string;
  x: number;
  y: number;
  text: string;
  type: 'damage' | 'combo' | 'state';
}

const TAUNTS = [
  '就这点力气？',
  '没吃饭吗？',
  '打我呀笨蛋！',
  '你是在给我挠痒痒吗？',
  '用力点啊！',
  '太弱了太弱了！',
  '今天没吃饱吗？',
  '连一只核桃都打不痛，真可怜~',
  '来啊，正面上我！',
];

export function Stage() {
  const {
    selectedTool,
    registerHit,
    setCharacterState,
    characterState,
    slingshotAnchor,
    setSlingshotAnchor,
    setFrozenUntil,
    setBurntUntil,
    setDizzyUntil,
    resetCharacter,
  } = useGameStore();

  const physics = usePhysics();
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [projectiles, setProjectiles] = useState<{ id: string; x: number; y: number; vx: number; vy: number }[]>([]);
  const [floaters, setFloaters] = useState<FloatingText[]>([]);
  const [taunt, setTaunt] = useState<string>('');
  const [scale, setScale] = useState(1);
  const slingDrag = useRef<{ active: boolean; startX: number; startY: number; curX: number; curY: number } | null>(null);
  const animRef = useRef<number>();

  const updateCenter = useCallback(() => {
    if (!physics.stageRef.current) return;
    const rect = physics.stageRef.current.getBoundingClientRect();
    setCenter({ x: rect.width / 2, y: rect.height / 2 });
  }, [physics.stageRef]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setCenter({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      // Responsive scale: base width 800px, base height 600px. Add padding.
      const scaleX = Math.min(1, (window.innerWidth - 40) / 800);
      const scaleY = Math.min(1, (window.innerHeight - 300) / 600); // Leave room for UI
      setScale(Math.min(scaleX, scaleY));
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    updateCenter();
    window.addEventListener('resize', updateCenter);
    return () => window.removeEventListener('resize', updateCenter);
  }, [updateCenter]);

  useEffect(() => {
    // Show a new taunt every 3.5 seconds if state is normal
    const interval = setInterval(() => {
      setTaunt((prev) => {
        if (Math.random() > 0.3) {
          return TAUNTS[Math.floor(Math.random() * TAUNTS.length)];
        }
        return ''; // Sometimes hide the taunt
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeoutId: number;
    const scheduleBlink = () => {
      timeoutId = window.setTimeout(() => {
        if (useGameStore.getState().characterState === 'normal') {
          setCharacterState('blink');
          setTimeout(() => {
            if (useGameStore.getState().characterState === 'blink') {
              setCharacterState('normal');
            }
          }, 150); // Blink duration
        }
        scheduleBlink();
      }, 2000 + Math.random() * 4000); // Random interval between 2-6s
    };
    scheduleBlink();
    return () => clearTimeout(timeoutId);
  }, [setCharacterState]);

  const addFloater = useCallback((x: number, y: number, text: string, type: FloatingText['type'] = 'damage') => {
    const id = `${Date.now()}-${Math.random()}`;
    setFloaters((prev) => [...prev.slice(-15), { id, x, y, text, type }]);
    setTimeout(() => {
      setFloaters((prev) => prev.filter((f) => f.id !== id));
    }, 900);
  }, []);

  const handleHit = useCallback(
    (x: number, y: number, tool: ToolId) => {
      const damage = getToolDamage(tool);
      registerHit(damage, x, y);
      addFloater(x, y, `-${damage}`, 'damage');

      if (tool === 'lightning') {
        physics.flash('rgba(255,255,255,0.7)');
        physics.shakeScreen(18);
        setBurntUntil(Date.now() + 1200);
        setCharacterState('burnt');
        setTimeout(() => setCharacterState('normal'), 1200);
      } else if (tool === 'ice') {
        physics.flash('rgba(168,216,255,0.5)');
        setFrozenUntil(Date.now() + 1500);
        setCharacterState('frozen');
        setTimeout(() => setCharacterState('normal'), 1500);
      } else if (tool === 'bat') {
        physics.shakeScreen(22);
        setDizzyUntil(Date.now() + 1000);
        setCharacterState('dizzy');
        setTimeout(() => setCharacterState('normal'), 1000);
      } else {
        physics.shakeScreen(10);
        setCharacterState('hurt');
        setTimeout(() => setCharacterState('normal'), 250);
      }
    },
    [addFloater, physics, registerHit, setBurntUntil, setCharacterState, setDizzyUntil, setFrozenUntil]
  );

  const gamePhysics = useMemo(
    () => ({
      ...physics,
      applyGroupImpulse: (x: number, y: number, force: number, tool: ToolId) => {
        physics.applyGroupImpulse(x, y, force, tool);
        handleHit(x, y, tool);
      },
    }),
    [physics, handleHit]
  );

  const handleStagePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (selectedTool !== 'slingshot') return;
      const rect = physics.stageRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      slingDrag.current = { active: true, startX: x, startY: y, curX: x, curY: y };
      setSlingshotAnchor({ x, y });
    },
    [selectedTool, setSlingshotAnchor, physics.stageRef]
  );

  const handleStagePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!slingDrag.current?.active) return;
      const rect = physics.stageRef.current?.getBoundingClientRect();
      if (!rect) return;
      slingDrag.current.curX = e.clientX - rect.left;
      slingDrag.current.curY = e.clientY - rect.top;
    },
    [physics.stageRef]
  );

  const handleStagePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!slingDrag.current?.active) return;
      slingDrag.current.active = false;
      const rect = physics.stageRef.current?.getBoundingClientRect();
      if (!rect || !slingDrag.current) return;

      const dx = slingDrag.current.startX - slingDrag.current.curX;
      const dy = slingDrag.current.startY - slingDrag.current.curY;
      const power = Math.min(Math.sqrt(dx * dx + dy * dy), 250);
      
      if (power < 10) {
        setSlingshotAnchor(null);
        return;
      }

      const angle = Math.atan2(dy, dx);
      const speed = power * 0.18;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      const id = `${Date.now()}-${Math.random()}`;
      const startX = slingDrag.current.curX;
      const startY = slingDrag.current.curY;
      
      const newProj = { id, x: startX, y: startY, vx, vy, active: true };
      projectilesRef.current.push(newProj);
      
      setProjectiles((prev) => [...prev, newProj]); // Trigger render to mount the div
      setSlingshotAnchor(null);
    },
    [physics.stageRef, setSlingshotAnchor]
  );

  const projectilesRef = useRef<{ id: string; x: number; y: number; vx: number; vy: number; active: boolean }[]>([]);

  useEffect(() => {
    const loop = () => {
      const activeProjs = projectilesRef.current.filter(p => p.active);
      if (activeProjs.length > 0) {
        let changed = false;
        
        for (const p of activeProjs) {
          p.x += p.vx;
          p.y += p.vy;
          
          const el = document.getElementById(`proj-${p.id}`);
          if (el) {
            gsap.set(el, { left: p.x - 16, top: p.y - 16 });
          }

          const dx = p.x - center.x;
          const dy = p.y - center.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 230) {
            p.active = false;
            changed = true;
            const stageRect = physics.stageRef.current?.getBoundingClientRect();
            if (stageRect) {
               physics.applyGroupImpulse(p.x + stageRect.left, p.y + stageRect.top, 110, 'slingshot');
               handleHit(p.x + stageRect.left, p.y + stageRect.top, 'slingshot');
               addFloater(p.x, p.y, 'BOOM!', 'combo');
            }
          } else if (p.x < -100 || p.x > window.innerWidth + 100 || p.y < -100 || p.y > window.innerHeight + 100) {
            p.active = false;
            changed = true;
          }
        }
        
        if (changed) {
           projectilesRef.current = projectilesRef.current.filter(p => p.active);
           setProjectiles([...projectilesRef.current]);
        }
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [center, physics, handleHit, addFloater]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'r' || e.key === 'R') resetCharacter();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [resetCharacter]);

  return (
    <div
      className="relative flex-1 overflow-hidden select-none"
      style={{ perspective: '800px' }}
      onPointerDown={handleStagePointerDown}
      onPointerMove={handleStagePointerMove}
      onPointerUp={handleStagePointerUp}
    >
      <div
        className="absolute inset-0 sm:opacity-40 sm:mix-blend-multiply"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.4) 0%, transparent 50%),
            linear-gradient(135deg, #fff0f5 0%, #ffe4e1 100%)
          `,
        }}
      />
      <div className="hidden sm:block absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div ref={physics.stageRef} className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 pointer-events-auto"
          style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
        >
          <div className="relative w-full h-full animate-floatIdle">
            <Character center={center} physics={gamePhysics} />
            
            {taunt && characterState === 'normal' && (
              <div 
                className="absolute z-40 pointer-events-none drop-shadow-xl"
                style={{
                  left: center.x + 120,
                  top: center.y - 280,
                }}
              >
                <div className="relative bg-white text-slate-800 font-bold text-xl px-6 py-4 rounded-3xl border-4 border-pink-200 animate-popIn whitespace-nowrap">
                  {taunt}
                  <div className="absolute -bottom-4 left-6 w-0 h-0 border-l-[10px] border-l-transparent border-t-[20px] border-t-white border-r-[10px] border-r-transparent"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {projectiles.map((p) => (
        <div
          id={`proj-${p.id}`}
          key={p.id}
          className="absolute w-8 h-8 rounded-full bg-slate-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] border-2 border-slate-600 animate-pulse-glow"
          style={{ left: p.x - 16, top: p.y - 16 }}
        />
      ))}

      {slingshotAnchor && slingDrag.current && (
        <svg className="absolute inset-0 pointer-events-none z-40">
          <line
            x1={slingDrag.current.startX}
            y1={slingDrag.current.startY}
            x2={slingDrag.current.curX}
            y2={slingDrag.current.curY}
            stroke="#ff6b9d"
            strokeWidth={6}
            strokeLinecap="round"
            className="drop-shadow-md"
          />
          <circle cx={slingDrag.current.curX} cy={slingDrag.current.curY} r={16} fill="#ff6b9d" className="drop-shadow-lg" />
        </svg>
      )}

      {floaters.map((f) => (
        <div
          key={f.id}
          className="absolute pointer-events-none font-black text-3xl z-50 tracking-wider"
          style={{
            left: f.x,
            top: f.y,
            color: f.type === 'combo' ? '#ff4785' : f.type === 'state' ? '#38bdf8' : '#f43f5e',
            textShadow: '0px 4px 12px rgba(0,0,0,0.15), 0px 0px 4px white, 0px 0px 4px white, 0px 0px 4px white, 0px 0px 4px white',
            animation: 'floatUp 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
          }}
        >
          {f.text}
        </div>
      ))}

      {characterState === 'burnt' && (
        <div className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay bg-amber-900/40 transition-colors duration-300" />
      )}
    </div>
  );
}

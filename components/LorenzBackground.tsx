import React, { useEffect, useRef, useState } from 'react';

interface LorenzBackgroundProps {
  theme: 'light' | 'dark';
}

// --- INTERNAL COMPONENT: The Physics Engine (Your exact code) ---
const LorenzCanvas: React.FC<LorenzBackgroundProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Initial fill to prevent flash
      ctx.fillStyle = theme === 'dark' ? '#0c0a09' : '#fafaf9';
      ctx.fillRect(0, 0, width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // --- CONFIGURATION ---
    // 1. Controls how fast time moves (0.2 = 5x slower than real time)
    const speedFactor = 0.55; 
    
    // 2. Visual settings
    const r1 = Math.min(width, height) / 4; // Responsive length
    const r2 = Math.min(width, height) / 4; 
    const m1 = 15;
    const m2 = 15;
    const g = 1;

    let a1 = Math.PI/2 -0.1;
    let a2 = Math.PI/2 +0.1;
    let a1_v = 0;
    let a2_v = 0;

    // We store more points for a longer, smoother trail
    let path: {x: number, y: number}[] = [];
    const maxPath = 150; 

    const render = () => {
      // --- PHYSICS (Lagrangian Dynamics) ---
      const num1 = -g * (2 * m1 + m2) * Math.sin(a1) - m2 * g * Math.sin(a1 - 2 * a2) - 2 * Math.sin(a1 - a2) * m2 * (a2_v * a2_v * r2 + a1_v * a1_v * r1 * Math.cos(a1 - a2));
      const den1 = r1 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
      const a1_a = num1 / den1;

      const num2 = 2 * Math.sin(a1 - a2) * (a1_v * a1_v * r1 * (m1 + m2) + g * (m1 + m2) * Math.cos(a1) + a2_v * a2_v * r2 * m2 * Math.cos(a1 - a2));
      const den2 = r2 * (2 * m1 + m2 - m2 * Math.cos(2 * a1 - 2 * a2));
      const a2_a = num2 / den2;

      a1_v += a1_a;
      a2_v += a2_a;
      
      // APPLY SPEED FACTOR HERE
      a1 += a1_v * speedFactor;
      a2 += a2_v * speedFactor;

      // Friction/Dampening (Keeps it controllable)
      a1_v *= 0.999; 
      a2_v *= 0.999;

      // --- POSITIONS ---
      const cx = width / 2;
      const cy = height / 2.5; // Slightly higher than center

      const x1 = r1 * Math.sin(a1);
      const y1 = r1 * Math.cos(a1);
      const x2 = x1 + r2 * Math.sin(a2);
      const y2 = y1 + r2 * Math.cos(a2);

      // --- DRAWING ---
      
      // 1. Fade Effect (Motion Blur)
      ctx.fillStyle = theme === 'dark' 
        ? 'rgba(12, 10, 9, 0.2)'  
        : 'rgba(250, 250, 249, 0.2)';
      ctx.fillRect(0, 0, width, height);

      // 2. Define Subtle Colors
      const rodColor = theme === 'dark' 
        ? 'rgba(255, 255, 255, 0.04)' 
        : 'rgba(0, 0, 0, 0.02)';
      
      const trailColor = theme === 'dark' 
        ? 'rgba(255, 255, 255, 0.01)' // Faint white
        : 'rgba(0, 0, 0, 0.01)';      // Faint black

      const bobColor = theme === 'dark'
        ? 'rgba(255, 255, 255, 0.05)' 
        : 'rgba(0, 0, 0, 0.05)';

      // 3. Draw Rods (Skeleton)
      ctx.beginPath();
      ctx.strokeStyle = rodColor;
      ctx.lineWidth = 1;
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + x1, cy + y1);
      ctx.lineTo(cx + x2, cy + y2);
      ctx.stroke();

      // 4. Draw Trail
      path.push({ x: cx + x2, y: cy + y2 });
      if (path.length > maxPath) path.shift();

      if (path.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = trailColor;
        ctx.lineWidth = 2; // Slightly thicker but very transparent
        ctx.lineJoin = 'round';
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
           ctx.lineTo(path[i].x, path[i].y);
        }
        ctx.stroke();
      }

      // 5. Draw Bob (End Mass)
      ctx.beginPath();
      ctx.fillStyle = bobColor;
      ctx.arc(cx + x2, cy + y2, 8, 0, 2 * Math.PI); // Slightly larger, but very faint
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

// --- EXPORTED COMPONENT: The Wrapper with the Funny Button ---
export const LorenzBackground: React.FC<LorenzBackgroundProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {/* Conditionally render the canvas. 
          When toggled off, it unmounts (saving CPU/Battery).
          When toggled on, it remounts (resetting the chaos). */}
      {isVisible && <LorenzCanvas theme={theme} />}

      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`
          fixed bottom-4 right-4 z-50
          px-4 py-2 rounded-full shadow-lg
          text-xs font-semibold tracking-wide
          backdrop-blur-md transition-all duration-300 transform hover:scale-105 active:scale-95
          border
          ${theme === 'dark' 
            ? 'bg-zinc-800/40 border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60' 
            : 'bg-white/40 border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:bg-white/60'
          }
        `}
      >
        {isVisible ? (
          <span className="flex items-center gap-2">
            🛑 <span className="hidden sm:inline">Stop the chaos</span>
          </span>
        ) : (
          <span className="flex items-center gap-2">
            🎢 <span className="hidden sm:inline">I'm bored, do physics</span>
          </span>
        )}
      </button>
    </>
  );
};
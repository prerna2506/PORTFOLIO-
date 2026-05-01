"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TECH_STACK = [
  { name: "React", color: "#3b82f6" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#2563eb" },
  { name: "Node.js", color: "#22c55e" },
  { name: "Tailwind", color: "#06b6d4" },
  { name: "Supabase", color: "#10b981" },
  { name: "Framer", color: "#a855f7" },
];

export default function TechStackGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    
    // Resize canvas to fit container
    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    resize();
    window.addEventListener("resize", resize);

    // Game Objects
    const player = {
      x: canvas.width / 2,
      y: canvas.height - 30,
      radius: 20,
      angle: 0
    };

    const projectiles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const bubbles: { x: number; y: number; radius: number; text: string; color: string; speed: number }[] = [];
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; color: string; alpha: number }[] = [];

    let frameCount = 0;
    let currentScore = 0;

    // Mouse Tracking
    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Shooting
    const handleMouseClick = () => {
      const angle = Math.atan2(mouse.y - player.y, mouse.x - player.x);
      projectiles.push({
        x: player.x,
        y: player.y,
        vx: Math.cos(angle) * 10,
        vy: Math.sin(angle) * 10,
        radius: 5
      });
    };
    canvas.addEventListener("click", handleMouseClick);

    // Main Game Loop
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      ctx.fillStyle = "rgba(18, 18, 18, 0.3)"; // Trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aiming angle
      player.x = canvas.width / 2;
      player.y = canvas.height - 30;
      player.angle = Math.atan2(mouse.y - player.y, mouse.x - player.x);

      // Draw Player Turret
      ctx.save();
      ctx.translate(player.x, player.y);
      ctx.rotate(player.angle);
      ctx.fillStyle = "#f97316";
      ctx.fillRect(0, -10, 40, 20);
      ctx.beginPath();
      ctx.arc(0, 0, player.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#ea580c";
      ctx.fill();
      ctx.restore();

      // Spawn Bubbles
      if (frameCount % 60 === 0) {
        const radius = Math.random() * 20 + 30;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const tech = TECH_STACK[Math.floor(Math.random() * TECH_STACK.length)];
        bubbles.push({
          x,
          y: -radius,
          radius,
          text: tech.name,
          color: tech.color,
          speed: Math.random() * 1.5 + 0.5 + (currentScore * 0.05) // Gets faster
        });
      }

      // Update and Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      // Update and Draw Projectiles
      for (let i = projectiles.length - 1; i >= 0; i--) {
        const p = projectiles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Remove off-screen projectiles
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          projectiles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#f97316";
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#f97316";
      }

      // Update and Draw Bubbles
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.y += b.speed;

        // Draw Bubble
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${b.color}22`; // transparent bg
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = b.color;
        ctx.stroke();

        // Draw Text
        ctx.fillStyle = "#ffffff";
        ctx.font = "14px 'Geist Sans', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(b.text, b.x, b.y);

        // Check Projectile Collision
        for (let j = projectiles.length - 1; j >= 0; j--) {
          const p = projectiles[j];
          const dist = Math.hypot(p.x - b.x, p.y - b.y);
          if (dist - b.radius - p.radius < 0) {
            // Collision!
            projectiles.splice(j, 1);
            bubbles.splice(i, 1);
            currentScore += 10;
            setScore(currentScore);

            // Create explosion particles
            for (let k = 0; k < 15; k++) {
              particles.push({
                x: b.x,
                y: b.y,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8,
                radius: Math.random() * 3 + 1,
                color: b.color,
                alpha: 1
              });
            }
            break;
          }
        }

        // Game Over condition (Bubble hits bottom)
        if (b.y + b.radius > canvas.height) {
          setGameOver(true);
          setIsPlaying(false);
        }
      }

      frameCount++;
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleMouseClick);
    };
  }, [isPlaying]);

  return (
    <section className="bg-[#121212] py-24 md:py-32 px-6 md:px-24 border-t border-white/5 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Shooter.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            A fun mini-game! Aim your mouse and click to pop the falling tech stacks before they hit the ground.
          </p>
        </motion.div>

        <div className="relative w-full h-[500px] md:h-[600px] bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(249,115,22,0.1)]">
          
          <div className="absolute top-6 left-6 z-20">
            <div className="text-white text-xl font-bold font-mono tracking-widest bg-black/50 px-4 py-2 rounded-lg border border-white/10">
              SCORE: {score}
            </div>
          </div>

          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <button 
                onClick={() => setIsPlaying(true)}
                className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all transform hover:scale-105"
              >
                START GAME
              </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md">
              <h3 className="text-5xl font-bold text-white mb-4">GAME OVER</h3>
              <p className="text-2xl text-orange-400 mb-8 font-mono">Final Score: {score}</p>
              <button 
                onClick={() => {
                  setScore(0);
                  setGameOver(false);
                  setIsPlaying(true);
                }}
                className="px-10 py-4 bg-white hover:bg-neutral-200 text-black font-bold text-xl rounded-full shadow-xl transition-all transform hover:scale-105"
              >
                PLAY AGAIN
              </button>
            </div>
          )}

          <canvas 
            ref={canvasRef} 
            className="w-full h-full block cursor-crosshair"
          />
        </div>
      </div>
    </section>
  );
}

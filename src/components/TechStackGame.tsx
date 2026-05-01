"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { motion } from "framer-motion";

const TECH_STACK = [
  { name: "React", bg: "bg-blue-500/20", border: "border-blue-500/50", text: "text-blue-400" },
  { name: "Next.js", bg: "bg-white/10", border: "border-white/30", text: "text-white" },
  { name: "TypeScript", bg: "bg-blue-600/20", border: "border-blue-600/50", text: "text-blue-500" },
  { name: "Node.js", bg: "bg-green-500/20", border: "border-green-500/50", text: "text-green-400" },
  { name: "Tailwind CSS", bg: "bg-cyan-500/20", border: "border-cyan-500/50", text: "text-cyan-400" },
  { name: "Framer Motion", bg: "bg-purple-500/20", border: "border-purple-500/50", text: "text-purple-400" },
  { name: "Supabase", bg: "bg-emerald-500/20", border: "border-emerald-500/50", text: "text-emerald-400" },
  { name: "PostgreSQL", bg: "bg-indigo-500/20", border: "border-indigo-500/50", text: "text-indigo-400" },
  { name: "JavaScript", bg: "bg-yellow-500/20", border: "border-yellow-500/50", text: "text-yellow-400" },
  { name: "HTML/CSS", bg: "bg-orange-500/20", border: "border-orange-500/50", text: "text-orange-400" },
];

export default function TechStackGame() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    // Initialize Matter.js Engine
    const engine = Matter.Engine.create();
    engineRef.current = engine;

    // Create Render for Physics bounds (Using DOM instead for visuals, but we use Render for Mouse interaction easily)
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
      },
    });
    renderRef.current = render;

    // Boundaries
    const wallOptions = { 
      isStatic: true, 
      render: { fillStyle: "transparent" } 
    };
    
    const ground = Matter.Bodies.rectangle(width / 2, height + 50, width + 100, 100, wallOptions);
    const leftWall = Matter.Bodies.rectangle(-50, height / 2, 100, height + 100, wallOptions);
    const rightWall = Matter.Bodies.rectangle(width + 50, height / 2, 100, height + 100, wallOptions);
    const ceiling = Matter.Bodies.rectangle(width / 2, -500, width + 100, 100, wallOptions);

    Matter.World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

    // Create Tech Stack Blocks
    const techBodies = TECH_STACK.map((tech, index) => {
      // Calculate random spawn positions
      const startX = Math.random() * (width - 200) + 100;
      const startY = -Math.random() * 500 - 100;

      // Approximate dimensions of the text capsule
      const bodyWidth = tech.name.length * 12 + 40; 
      const bodyHeight = 50;

      const body = Matter.Bodies.rectangle(startX, startY, bodyWidth, bodyHeight, {
        restitution: 0.8,
        friction: 0.1,
        density: 0.001,
        render: {
          fillStyle: "transparent", // We make it transparent because we will overlay DOM elements
        },
      });

      return { body, tech, width: bodyWidth, height: bodyHeight };
    });

    Matter.World.add(engine.world, techBodies.map(tb => tb.body));

    // Mouse Interaction
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Matter.World.add(engine.world, mouseConstraint);
    render.mouse = mouse; // Keep the mouse in sync with rendering

    // Run Engine
    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    setIsLoaded(true);

    // Sync DOM Elements with Physics Bodies
    const domElements = techBodies.map((tb, index) => {
      const el = document.getElementById(`tech-body-${index}`);
      return { el, body: tb.body };
    });

    const syncDOM = () => {
      domElements.forEach(({ el, body }) => {
        if (el) {
          el.style.transform = `translate(${body.position.x - el.offsetWidth / 2}px, ${body.position.y - el.offsetHeight / 2}px) rotate(${body.angle}rad)`;
        }
      });
      requestAnimationFrame(syncDOM);
    };

    syncDOM();

    // Handle Resize
    const handleResize = () => {
      if (sceneRef.current) {
        render.canvas.width = sceneRef.current.clientWidth;
        render.canvas.height = sceneRef.current.clientHeight;
        Matter.Body.setPosition(ground, { x: sceneRef.current.clientWidth / 2, y: sceneRef.current.clientHeight + 50 });
        Matter.Body.setPosition(rightWall, { x: sceneRef.current.clientWidth + 50, y: sceneRef.current.clientHeight / 2 });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
      }
      render.canvas.remove();
    };
  }, []);

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
            Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Playground.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Drag, throw, and interact with the technologies I use to build seamless modern web applications.
          </p>
        </motion.div>

        <div className="relative w-full h-[500px] md:h-[600px] bg-black/30 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
          
          {/* Matter.js Canvas Container */}
          <div ref={sceneRef} className="absolute inset-0 z-10 touch-none" />

          {/* DOM Overlay for crisp rendering */}
          {isLoaded && (
            <div className="absolute inset-0 z-0 pointer-events-none">
              {TECH_STACK.map((tech, index) => (
                <div
                  key={index}
                  id={`tech-body-${index}`}
                  className={`absolute top-0 left-0 px-6 py-3 rounded-full border ${tech.bg} ${tech.border} backdrop-blur-md flex items-center justify-center whitespace-nowrap shadow-lg will-change-transform`}
                  style={{ width: "fit-content" }}
                >
                  <span className={`text-lg font-semibold tracking-wide ${tech.text}`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Watermark instruction */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-500 font-mono text-sm tracking-widest pointer-events-none opacity-50 select-none">
            [ DRAG TO PLAY ]
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 15% (Fade in/out, parallax move up)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -150]);

  // Section 2: 25% to 45% 
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [100, -100]);

  // Section 3: 55% to 75%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [100, -100]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 w-full h-[500vh]">
      
      {/* Section 1 */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Prerna Singh.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-light tracking-wide mb-8">
            Creative Developer & UI/UX Designer.
          </p>
          <div className="flex items-center justify-center gap-4 pointer-events-auto">
            <a 
              href="https://github.com/prerna2506/PORTFOLIO-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-sm font-medium tracking-wide backdrop-blur-sm"
            >
              Source Code
            </a>
            <a 
              href="https://portfolio-phi-seven-ba7rxhbca6.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-sm font-medium tracking-wide backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            >
              Live Demo
            </a>
            <a 
              href="https://www.linkedin.com/in/prerna-singh1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-sm font-medium tracking-wide backdrop-blur-sm"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="absolute top-[150vh] w-full px-8 md:px-24">
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            I build digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              experiences.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light">
            Crafting immersive, high-performance web applications with a focus on usability and minimal design.
          </p>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="absolute top-[300vh] w-full px-8 md:px-24 flex justify-end">
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="max-w-2xl text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            Bridging design <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-neutral-200 to-neutral-500">
              and engineering.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light">
            Transforming creative visions into clean, functional layouts and pixel-perfect realities.
          </p>
        </motion.div>
      </div>

    </div>
  );
}

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
            Hi, I’m Prerna 👋
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 font-light tracking-wide mb-8">
            Full Stack Developer building modern web experiences.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
            <a 
              href="/form" 
              className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
            >
              Get In Touch
            </a>
            <a 
              href="https://github.com/prerna2506" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-sm font-medium tracking-wide backdrop-blur-sm"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/prerna-singh1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-sm font-medium tracking-wide backdrop-blur-sm"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors text-sm font-medium tracking-wide backdrop-blur-sm"
            >
              Resume
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
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-tr from-orange-500 to-blue-500 flex items-center justify-center text-3xl shadow-xl shadow-orange-500/20">
              👩🏻‍💻
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Me.</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
            I don't just write code; <strong className="font-semibold text-white">I build digital products</strong>. I believe that a seamless UI combined with a rock-solid backend creates the ultimate user experience. 
            <br/><br/>
            Why do I build things? Because I love turning complex problems into elegant, highly functional realities that wow users.
          </p>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="absolute top-[300vh] w-full px-8 md:px-24 flex justify-end">
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="max-w-2xl text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Trust <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-blue-600">
              Signals.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light mb-6">
            A specialized stack built for scale, speed, and aesthetics:
          </p>
          <div className="flex flex-wrap justify-end gap-3">
            {["Next.js (App Router)", "React", "Supabase", "Tailwind CSS", "Framer Motion", "TypeScript", "Resend API", "Node.js"].map(tech => (
              <span key={tech} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/90 text-sm font-medium backdrop-blur-md shadow-lg shadow-black/20">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}

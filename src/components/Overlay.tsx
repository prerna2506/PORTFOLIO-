"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

export default function Overlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 w-full h-screen">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center px-4 will-change-transform drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] max-w-4xl mx-auto"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-8 pointer-events-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to internships &amp; frontend roles
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.08]"
          >
            Frontend Developer crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              fast, modern,
            </span>{" "}
            and interactive web experiences.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Specialized in{" "}
            <span className="text-neutral-200 font-medium">React</span>,{" "}
            <span className="text-neutral-200 font-medium">Next.js</span>,{" "}
            <span className="text-neutral-200 font-medium">TypeScript</span>,
            animations, and scalable UI systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="/PRERNA_SINGH_Resume.docx"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all text-sm font-semibold tracking-wide hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all text-sm font-medium tracking-wide backdrop-blur-md hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center mt-16 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-neutral-600" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

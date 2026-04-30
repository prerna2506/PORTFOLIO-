"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-center p-4 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-2xl"
      >
        <motion.h1 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Nice 😎
        </motion.h1>
        
        <motion.p 
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed mb-12"
        >
          I'll get back to you soon... unless I get kidnapped by bugs in my code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link 
            href="/"
            className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors font-medium backdrop-blur-sm inline-block"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

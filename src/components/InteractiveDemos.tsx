"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import InteractiveDemo from "./InteractiveDemo";

export default function InteractiveDemos() {
  const [activeDemo, setActiveDemo] = useState("memory");

  const demos = [
    {
      id: "memory",
      title: "Memory Card Game",
      description: "Test your memory by matching pairs of icons. Built with React state management.",
      icon: "🧠",
    },
  ];

  return (
    <section className="bg-[#121212] py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-cyan-400" size={28} />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Interactive Demos
            </h2>
          </div>
          <p className="text-lg text-white/60 max-w-2xl">
            Explore interactive experiences showcasing React capabilities and UI design.
          </p>
        </motion.div>

        {/* Demo Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {demos.map((demo, idx) => (
            <motion.button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                activeDemo === demo.id
                  ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <span className="mr-2">{demo.icon}</span>
              {demo.title}
            </motion.button>
          ))}
        </div>

        {/* Demo Content */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-12"
        >
          {activeDemo === "memory" && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {demos[0].title}
                </h3>
                <p className="text-white/60">
                  {demos[0].description}
                </p>
              </div>
              <div className="bg-black/40 rounded-xl p-8 min-h-96 flex items-center justify-center">
                <InteractiveDemo />
              </div>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60">
            Like interactive UI? <span className="text-cyan-400 font-semibold">Try the demo above!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

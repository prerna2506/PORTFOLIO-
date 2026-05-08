"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LEARNING = [
  { icon: "🏗️", label: "Backend architecture", desc: "Designing scalable APIs and understanding server-side patterns" },
  { icon: "🤖", label: "AI integrations", desc: "Embedding AI into real products — not just demos" },
  { icon: "⚡", label: "Performance optimization", desc: "Core Web Vitals, lazy loading, and bundle analysis" },
  { icon: "🎞️", label: "Motion design systems", desc: "Building reusable animation primitives with Framer Motion" },
];

const AVAILABLE_FOR = [
  "Frontend internships",
  "Freelance projects",
  "React / Next.js development",
  "UI implementation",
  "Open-source contributions",
];

export default function WorkingOn() {
  return (
    <section id="about" className="bg-[#121212] py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Why I Build */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest block mb-3">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Why I Build
            </h2>
            <p className="text-lg text-neutral-300 font-light leading-relaxed mb-6">
              I enjoy building interfaces that feel{" "}
              <span className="text-white font-medium">smooth, intuitive, and alive.</span>{" "}
              My focus is not just making websites look good — but making them{" "}
              <span className="text-white font-medium">feel effortless to use.</span>
            </p>
            <p className="text-base text-neutral-400 font-light leading-relaxed mb-8">
              I care deeply about the space where design meets engineering. When a
              micro-interaction lands perfectly, when a page loads without jank, when a
              user completes a flow without friction — that's the kind of work that drives me.
            </p>

            {/* Currently Working On */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Currently Working On
              </h3>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🚧</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Virtual Study Partner</p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Building a focused study app for people who need accountability and a virtual companion to stay consistent — inspired by my own experience.
                    </p>
                    <a
                      href="/study-partner"
                      className="inline-flex items-center gap-1.5 text-orange-400 text-sm font-medium mt-3 hover:text-orange-300 transition-colors"
                    >
                      View Concept <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
              <h3 className="text-green-400 text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available For
              </h3>
              <ul className="space-y-2">
                {AVAILABLE_FOR.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                    <span className="text-green-500/70">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest block mb-3">
              Growth
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Currently Exploring
            </h2>
            <p className="text-base text-neutral-400 font-light leading-relaxed mb-8">
              I'm always expanding beyond what I know. These are the areas I'm actively building depth in right now.
            </p>

            <div className="space-y-4">
              {LEARNING.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold mb-1 group-hover:text-orange-300 transition-colors">
                      → {item.label}
                    </p>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Metrics strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {[
                { value: "5+", label: "Projects Built" },
                { value: "2", label: "Internships" },
                { value: "100%", label: "Responsive UI" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/8">
                  <p className="text-2xl font-bold text-orange-400 mb-1">{stat.value}</p>
                  <p className="text-xs text-neutral-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

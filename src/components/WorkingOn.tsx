"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AVAILABLE_FOR = [
  "Frontend internships",
  "React / Next.js development",
  "UI implementation projects",
  "Freelance frontend work",
  "Open-source contributions",
];

const CURRENTLY_LEARNING = [
  {
    label: "Backend Architecture",
    desc: "Designing scalable Node.js APIs and understanding server-side patterns.",
  },
  {
    label: "AI Integrations",
    desc: "Embedding AI into real production workflows — not just demos.",
  },
  {
    label: "Performance Engineering",
    desc: "Core Web Vitals, lazy loading strategies, and bundle optimization.",
  },
  {
    label: "Design Systems",
    desc: "Building composable, reusable component libraries for scalability.",
  },
];

const STATS = [
  { value: "5+", label: "Projects Shipped" },
  { value: "2", label: "Internships" },
  { value: "2+", label: "Years Building" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.06] relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: About + Availability */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-3">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Who I Am
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-neutral-300 leading-relaxed">
                I&apos;m a frontend-focused developer who cares deeply about the
                intersection of design and engineering. I build interfaces that feel{" "}
                <span className="text-white font-medium">fast, intuitive, and polished</span>{" "}
                — not just visually attractive.
              </p>
              <p className="text-neutral-400 leading-relaxed text-sm">
                My work spans responsive UI systems, full-stack integrations, and
                performance-conscious web apps. I approach every project with a
                product mindset — understanding the user problem before writing a
                single line of code.
              </p>
              <p className="text-neutral-400 leading-relaxed text-sm">
                When a micro-interaction lands perfectly, when a page loads without
                jank, when a user completes a flow without friction — that&apos;s
                what drives my engineering decisions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.08] text-center">
                  <p className="text-2xl font-bold text-orange-400 mb-1">{stat.value}</p>
                  <p className="text-xs text-neutral-500 font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Current project */}
            <div className="p-5 rounded-xl bg-white/[0.025] border border-white/[0.08] mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
                <span className="text-xs font-semibold text-white uppercase tracking-widest">Currently Building</span>
              </div>
              <p className="text-white font-semibold text-sm mb-1">Virtual Study Partner</p>
              <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                A focused study app for developers who need accountability and consistency — built with Next.js and AI integrations.
              </p>
              <a
                href="/study-partner"
                className="inline-flex items-center gap-1.5 text-orange-400 text-xs font-medium hover:text-orange-300 transition-colors"
              >
                View Concept <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-xl bg-green-500/[0.04] border border-green-500/15">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-widest">Open to Opportunities</span>
              </div>
              <ul className="space-y-1.5">
                {AVAILABLE_FOR.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                    <span className="text-green-500/60 text-xs">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-3">
              Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Currently Exploring
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              I actively expand beyond my comfort zone. These are the areas I&apos;m
              building real depth in right now.
            </p>

            <div className="space-y-4">
              {CURRENTLY_LEARNING.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.025] border border-white/[0.08] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-500/20 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 rounded-xl border border-white/[0.06] bg-white/[0.015]"
            >
              <p className="text-neutral-400 text-sm leading-relaxed italic">
                &ldquo;The best interface is the one the user never has to think about.
                I build with that goal in mind — invisible engineering that just works.&rdquo;
              </p>
              <p className="text-neutral-600 text-xs mt-3">— Prerna Singh</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

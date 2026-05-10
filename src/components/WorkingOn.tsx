"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BUILDING_ITEMS = [
  {
    title: "Virtual Study Partner",
    description:
      "Building an accountability-first study platform with structured sessions, progress tracking, and collaborative features.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "In Development",
    progress: 65,
    features: ["Study sessions", "Progress tracking", "Accountability", "Collaboration"],
    href: "#contact",
  },
  
  
];

const AVAILABILITY = [
  "Frontend internships",
  "React and Next.js project work",
  "UI implementation and optimization",
  "Freelance frontend collaboration",
];

export default function WorkingOn() {
  return (
    <section
      id="working-on"
      className="bg-[#0a0a0a] py-20 md:py-28 px-6 md:px-12 border-t border-white/[0.06] relative z-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-3">
            Current Focus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Currently Building
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl">
            Ongoing work centered on production readiness, practical product value,
            and deeper engineering ownership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {BUILDING_ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                  item.status === "In Development" 
                    ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                    : item.status === "Research Phase"
                    ? "bg-purple-500/10 border border-purple-500/20 text-purple-400"
                    : "bg-gray-500/10 border border-gray-500/20 text-gray-400"
                }`}>
                  {item.status}
                </span>
              </div>
              
              <p className="text-sm text-neutral-300 leading-relaxed mb-4">{item.description}</p>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-neutral-400 font-medium">Progress</span>
                  <span className="text-xs text-neutral-400 font-medium">{item.progress}%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-2">Key Features</h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-400 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs text-neutral-400 font-medium uppercase tracking-wider mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/55 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={item.href}
                className="inline-flex items-center gap-1.5 text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.article>
          ))}
        </div>

        <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6"
          >
            <h3 className="text-white font-semibold mb-3">About</h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-3">
              I am a frontend-focused engineer who builds responsive interfaces,
              clean component systems, and production-ready web flows.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              My core focus is shipping software that is usable, reliable, and
              easy to maintain as products grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-xl border border-green-500/20 bg-green-500/[0.04] p-6"
          >
            <h3 className="text-green-400 font-semibold mb-3 uppercase text-xs tracking-[0.12em]">
              Open To Opportunities
            </h3>
            <ul className="space-y-2">
              {AVAILABILITY.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="text-green-400 mt-0.5">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export interface ExperienceEntry {
  id: string | number;
  title: string;
  company: string;
  type: string;
  period: string;
  description?: string;
  tech_stack?: string[];
  points?: string[];
}

export default function Experience({ experience = [] }: { experience?: ExperienceEntry[] }) {
  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] py-20 md:py-28 px-6 md:px-12 border-t border-white/[0.06] relative z-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-3">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Professional Experience
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl">
            Team-based work experience across frontend delivery, technical problem
            solving, and communication-heavy workflows.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="p-6 md:p-7 rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:border-white/[0.14] hover:bg-white/[0.035] transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-2.5 text-sm">
                    <span className="text-orange-400 font-medium">{exp.company}</span>
                    <span className="text-neutral-700">|</span>
                    <span className="flex items-center gap-1 text-neutral-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      {exp.type}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-500 text-xs font-mono">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {(exp.tech_stack || []).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2.5">
                {(exp.points || []).map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2.5 text-sm text-neutral-300 leading-relaxed">
                    <span className="text-orange-500/50 mt-0.5 flex-shrink-0">-</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

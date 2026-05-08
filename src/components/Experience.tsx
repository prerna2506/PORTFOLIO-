"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    title: "Frontend Web Developer Intern",
    company: "Grras Solutions Pvt. Ltd.",
    type: "On-site · Jaipur",
    period: "2024",
    tag: "Frontend Engineering",
    tech: ["HTML", "CSS", "JavaScript", "React", "Figma"],
    points: [
      "Built responsive UI components used in the company's live web product, ensuring pixel-precise implementation across desktop and mobile breakpoints.",
      "Translated Figma design specs into clean, functional React components, reducing designer-to-developer handoff time.",
      "Collaborated with senior developers on production features, following structured code review and version control workflows using Git.",
      "Refactored repetitive CSS patterns into reusable utility classes, improving codebase maintainability and consistency.",
      "Participated in daily standups and agile sprints — delivering iterative UI improvements on a production timeline.",
    ],
  },
  {
    id: 2,
    title: "Python Programming Intern",
    company: "Edulyt India",
    type: "Remote",
    period: "2024",
    tag: "Problem Solving",
    tech: ["Python", "Data Analysis", "Algorithms"],
    points: [
      "Completed structured Python programming assignments focused on algorithmic problem solving and data manipulation.",
      "Analyzed program outputs to identify logical inconsistencies and implemented corrections with documented reasoning.",
      "Built systematic debugging habits and pattern recognition skills through daily coding exercises.",
    ],
  },
  {
    id: 3,
    title: "Content Writer",
    company: "Finanjo",
    type: "Part-time · Remote",
    period: "2025 – Present",
    tag: "Technical Communication",
    tech: ["Research", "SEO Writing", "Finance"],
    points: [
      "Write research-backed, SEO-optimized articles on finance, banking, and investment topics for a broad online readership.",
      "Simplify complex financial concepts into clear, accessible language — a skill that directly improves technical documentation and UI copy.",
      "Maintain editorial consistency in tone, structure, and keyword strategy across all published content.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.06] relative z-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-3">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Work History
          </h2>
          <p className="text-neutral-400 font-light max-w-xl">
            Real-world experience building production interfaces and working in
            structured team environments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block" />

          <div className="space-y-12 md:pl-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.85rem] top-1.5 w-3 h-3 rounded-full bg-neutral-700 group-hover:bg-orange-500 border-2 border-[#0a0a0a] transition-colors duration-400 hidden md:block" />

                {/* Card */}
                <div className="p-6 md:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:border-white/[0.14] hover:bg-white/[0.035] transition-all duration-300">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                        <span className="text-orange-400 text-sm font-medium">
                          {exp.company}
                        </span>
                        <span className="text-neutral-700">·</span>
                        <span className="flex items-center gap-1 text-xs text-neutral-500">
                          <MapPin className="w-3 h-3" />
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-neutral-500 text-xs font-mono">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed">
                        <span className="text-orange-500/50 mt-1 flex-shrink-0 text-xs">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

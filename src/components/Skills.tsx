"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    focus: "Primary specialization",
  },
  {
    title: "Backend",
    stack: ["Node.js", "Express", "Supabase", "REST APIs", "Firebase", "MongoDB"],
    focus: "Used in full-stack projects",
  },
  {
    title: "Tools",
    stack: ["Git", "GitHub", "Postman", "Figma", "Vercel", "VS Code"],
    focus: "Collaboration and delivery workflow",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Technical Stack
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl">
            Production-focused stack for building responsive interfaces, scalable
            frontend architecture, and reliable full-stack workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-6"
            >
              <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-[0.12em] mb-2">
                {group.title}
              </h3>
              <p className="text-[0.72rem] text-neutral-500 mb-4 uppercase tracking-[0.1em]">
                {group.focus}
              </p>
              <p className="text-sm text-neutral-200 leading-relaxed">
                {group.stack.join(" • ")}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

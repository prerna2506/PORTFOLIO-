"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Frontend Development",
    stack: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" }
    ],
    focus: "Primary specialization with 2+ years experience",
    icon: "⚛️"
  },
  {
    title: "Backend & Database",
    stack: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
      { name: "Firebase", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" }
    ],
    focus: "Full-stack project integration",
    icon: "🔧"
  },
  {
    title: "Tools & Deployment",
    stack: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Vercel", level: "Advanced" },
      { name: "Postman", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" }
    ],
    focus: "Production workflows & collaboration",
    icon: "🚀"
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-3">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Skills & Technologies
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl">
            Production-ready technical stack with proven experience in building scalable 
            frontend applications and full-stack solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>
              </div>
              
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                {group.focus}
              </p>
              
              <div className="space-y-3">
                {group.stack.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm text-neutral-300 font-medium">
                      {skill.name}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      skill.level === "Advanced" 
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

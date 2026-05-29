"use client";

import { motion } from "framer-motion";

export interface SkillEntry {
  name: string;
  level: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  focus: string;
  skills: SkillEntry[];
}

export default function Skills({ skillGroups = [] }: { skillGroups?: SkillGroup[] }) {
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
          {skillGroups.map((group, idx) => (
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
                {(group.skills || []).map((skill) => (
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

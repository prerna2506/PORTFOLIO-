"use client";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    color: "orange",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Framer Motion", level: 78 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    category: "Backend & Database",
    color: "blue",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Next.js API Routes", level: 80 },
      { name: "Supabase", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "Firebase", level: 60 },
      { name: "MongoDB", level: 55 },
    ],
  },
  {
    category: "Tools & Workflow",
    color: "green",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Figma", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "Postman", level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Netlify", level: 75 },
    ],
  },
];

const colorMap: Record<string, string> = {
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  green: "bg-emerald-500",
};
const borderMap: Record<string, string> = {
  orange: "border-orange-500/20",
  blue: "border-blue-500/20",
  green: "border-emerald-500/20",
};
const textMap: Record<string, string> = {
  orange: "text-orange-400",
  blue: "text-blue-400",
  green: "text-emerald-400",
};

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Technical Stack
          </h2>
          <p className="text-neutral-400 font-light max-w-xl">
            Technologies I use to build production-ready, scalable applications.
            Strongest in frontend, growing on the backend.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: gi * 0.1 }}
              className={`p-6 rounded-2xl bg-white/[0.025] border ${borderMap[group.color]} hover:bg-white/[0.04] transition-colors duration-300`}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className={`w-2 h-2 rounded-full ${colorMap[group.color]}`} />
                <h3 className={`text-sm font-semibold ${textMap[group.color]} uppercase tracking-widest`}>
                  {group.category}
                </h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.06 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-neutral-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-neutral-600 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: gi * 0.1 + si * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full ${colorMap[group.color]} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-neutral-600 text-xs mt-10"
        >
          Proficiency is self-assessed based on project depth and real-world usage
        </motion.p>
      </div>
    </section>
  );
}

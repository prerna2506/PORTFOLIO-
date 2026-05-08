"use client";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Frontend Web Developer Intern",
      company: "Grras Solutions Pvt. Ltd.",
      type: "Internship · On-site",
      date: "2024",
      highlight: "Production frontend work",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      points: [
        "Built responsive UI components used in the company's live web product, ensuring consistency across desktop and mobile breakpoints.",
        "Translated Figma design specs into clean, functional HTML/CSS/JS layouts with pixel-level accuracy.",
        "Collaborated with senior developers on real production features, following code review and version control workflows.",
        "Improved interface usability by refactoring repetitive CSS patterns into reusable utility classes.",
        "Gained hands-on experience with team-based development practices, including daily standups and iterative delivery.",
      ],
    },
    {
      id: 2,
      title: "Python Programming Intern",
      company: "Edulyt India",
      type: "Internship · Remote",
      date: "2024",
      highlight: "Analytical thinking & problem solving",
      tech: ["Python", "Data Analysis", "Logic Building"],
      points: [
        "Completed structured Python programming tasks focused on algorithmic problem solving and data manipulation.",
        "Analyzed program outputs to identify logical inconsistencies and proposed corrections.",
        "Strengthened systematic debugging and pattern recognition skills through daily coding exercises.",
      ],
    },
    {
      id: 3,
      title: "Content Writer",
      company: "Finanjo",
      type: "Part-time · Remote",
      date: "2025 – Present",
      highlight: "Technical writing & communication",
      tech: ["Research", "SEO Writing", "Finance"],
      points: [
        "Write research-backed articles on finance, banking, and investment topics for a broad online audience.",
        "Simplify complex financial concepts into clear, accessible language — a skill that directly improves UI copy and documentation.",
        "Maintain consistency in tone, structure, and SEO optimization across published content.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#121212] py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Work History</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative border-l-2 border-white/10 pl-8 ml-4 group hover:border-orange-500/50 transition-colors duration-500"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-neutral-700 group-hover:bg-orange-500 transition-colors duration-500 rounded-full -left-[9px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)]" />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <h4 className="text-orange-400 font-medium">{exp.company}</h4>
                    <span className="text-neutral-600">·</span>
                    <span className="text-sm text-neutral-500">{exp.type}</span>
                  </div>
                </div>
                <span className="text-sm text-neutral-500 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {exp.date}
                </span>
              </div>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 text-neutral-400 font-light leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-orange-500/60 mt-1.5 flex-shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


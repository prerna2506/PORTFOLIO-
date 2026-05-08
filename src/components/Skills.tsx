"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core Web",
      emoji: "🌐",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]
    },
    {
      title: "Frameworks & Libraries",
      emoji: "⚛️",
      skills: ["React.js", "Next.js", "Framer Motion", "Tailwind CSS"]
    },
    {
      title: "Backend & Database",
      emoji: "🗄️",
      skills: ["Supabase", "REST APIs", "Node.js", "Next.js API Routes"]
    },
    {
      title: "Tools & DevOps",
      emoji: "🛠️",
      skills: ["Git", "GitHub", "Vercel", "VS Code"]
    },
    {
      title: "Design & UX",
      emoji: "🎨",
      skills: ["Figma", "Responsive Design", "Accessibility", "SEO"]
    },
    {
      title: "Integrations",
      emoji: "🔌",
      skills: ["Resend API", "Supabase Auth", "OpenAI API"]
    }
  ];

  return (
    <section
      id="skills"
      className="bg-[#121212] py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-neutral-400 font-light">
            Tools and technologies I use to build production-ready applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span>{category.emoji}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


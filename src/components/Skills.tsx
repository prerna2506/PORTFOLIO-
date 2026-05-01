"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "🌐 Frontend Development",
      skills: ["HTML5", "CSS3 (Flexbox, Grid)", "JavaScript (ES6+)", "Responsive Web Design"]
    },
    {
      title: "⚛️ Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Tailwind CSS"]
    },
    {
      title: "🛠️ Tools & Workflow",
      skills: ["Git & GitHub", "Vercel (Deployment)", "Figma (UI/UX Design)", "Chrome DevTools"]
    },
    {
      title: "🔌 Additional Skills",
      skills: ["API Integration (REST APIs)", "Basic SEO Optimization", "Performance Optimization", "Cross-browser Compatibility"]
    }
  ];

  return (
    <section className="bg-[#121212] py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-neutral-400 font-light max-w-2xl">
            A comprehensive overview of my technical toolset and workflow capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 + 0.2 }}
                    className="px-5 py-2.5 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-100 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-blue-600 hover:border-blue-400 hover:text-white shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] cursor-pointer relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-blue-400/20 w-full h-full -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
                    <span className="relative z-10">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

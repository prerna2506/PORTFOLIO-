"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "UI/UX Design", "Frontend Development", "HTML/CSS", "JavaScript", "React", 
    "Tailwind CSS", "Python", "Content Writing", "Problem Solving"
  ];

  const certs = [
    { title: "Front-End Development with React JS", org: "" },
    { title: "Problem Solving and Python Basics", org: "HackerRank" },
    { title: "Internet of Things (IoT)", org: "NPTEL" },
    { title: "Public Speaking", org: "NPTEL" }
  ];

  return (
    <section className="bg-[#121212] py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-100 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-blue-600 hover:border-blue-400 hover:text-white shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] cursor-pointer relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-blue-400/20 w-full h-full -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12" />
                <span className="relative z-10">{skill}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
            Certifications
          </h2>
          <ul className="space-y-6">
            {certs.map((cert, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                className="flex flex-col gap-1 border-b border-white/5 pb-4 group"
              >
                <span className="text-lg text-white font-medium group-hover:text-blue-400 transition-colors">{cert.title}</span>
                {cert.org && <span className="text-sm text-neutral-400">{cert.org}</span>}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

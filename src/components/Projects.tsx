"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Weather Dashboard Application",
    category: "UI/UX · Frontend",
    description: "Built a dynamic weather dashboard that fetches real-time data from a public API and renders responsive, visually rich forecast cards with animated state transitions.",
    tech: ["React", "REST API", "CSS"],
    image: "/weather.png",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce & Streaming UI Analysis",
    category: "UI/UX Research",
    description: "Conducted a structured UX audit of leading e-commerce and streaming platforms, identifying usability patterns and translating insights into actionable design recommendations.",
    tech: ["Figma", "UX Research", "Prototyping"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Background Removal Tool",
    category: "Web Application",
    description: "Developed a browser-based tool that removes image backgrounds using an AI API, delivering instant results with a clean drag-and-drop interface.",
    tech: ["JavaScript", "Canvas API", "REST API"],
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "AI Response Evaluation System",
    category: "Content & Language Analysis",
    description: "Created an evaluation framework to benchmark and compare AI-generated text responses across clarity, accuracy, and tone — useful for content quality control pipelines.",
    tech: ["Python", "NLP", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "Portfolio Website with 3D Character",
    category: "UI/UX · Frontend",
    description: "Designed and built a cinematic personal portfolio with a 3D animated character, scrollytelling sequences, and smooth parallax effects to create a memorable first impression.",
    tech: ["Next.js", "Framer Motion", "Three.js"],
    image: "/charcter.png",
    link: "#"
  },
  {
    id: 6,
    title: "Personal Blog Website",
    category: "Content · Frontend",
    description: "Built a fast, SEO-optimised personal blog with structured content architecture, clean typography, and responsive layouts optimised for readability on all devices.",
    tech: ["Next.js", "MDX", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#121212] min-h-screen py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Projects
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-2xl">
            A selection of real-world applications built with a focus on performance, clean architecture, and user experience.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -mr-40 -mt-40 transition-all duration-700 group-hover:bg-orange-500/20" />
          <div className="flex flex-col lg:flex-row gap-12 relative z-10 items-center">

            {/* Content */}
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest">
                🏆 Featured Project
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Full-Stack Contact &amp; Admin System
              </h3>
              <p className="text-xl text-neutral-300 font-light leading-relaxed">
                Built a production-grade, multi-step contact pipeline with real-time Supabase storage, automated email delivery via Resend, and a JWT-protected admin dashboard — all deployed on Vercel.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Next.js", "Supabase", "Resend", "Tailwind CSS", "React State"].map(tech => (
                  <span key={tech} className="px-4 py-1.5 rounded-full bg-black/40 border border-white/5 text-white/80 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="/form" className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                  Live Demo
                </a>
                <a href="https://github.com/prerna2506/PORTFOLIO-" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-colors">
                  View on GitHub
                </a>
              </div>
            </div>


          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <h3 className="text-2xl font-bold text-white mb-8">Other Explorations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="px-2 pb-2 flex-1 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-0.5 group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                      {project.category}
                    </p>
                  </div>
                  <div className="w-9 h-9 flex-shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-white/60 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

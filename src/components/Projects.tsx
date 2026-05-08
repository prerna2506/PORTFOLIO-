"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Full-Stack Contact & Admin System",
    category: "Featured · Full-Stack",
    problem: "Portfolio contact forms lose leads — no confirmation, no tracking, buried in inboxes.",
    solution: "Built a guided multi-step contact pipeline with real-time Supabase storage, automated email via Resend, and a JWT-protected admin dashboard.",
    stack: ["Next.js", "Supabase", "Resend", "TypeScript", "Tailwind CSS"],
    challenges: ["Real-time data sync", "JWT auth without heavy framework", "Environment security across client/server"],
    outcome: "Production-grade lead-capture system that proves full-stack thinking across frontend, backend, database, and APIs.",
    image: null,
    link: "/form",
    github: "https://github.com/prerna2506/PORTFOLIO-",
    featured: true,
  },
  {
    id: 2,
    title: "Weather Dashboard Application",
    category: "UI/UX · Frontend",
    problem: "Users needed real-time weather data in a visually engaging, responsive format.",
    solution: "Built a dynamic dashboard that fetches live API data and renders animated forecast cards with state transitions.",
    stack: ["React", "REST API", "CSS"],
    challenges: ["Async data fetching", "Responsive layout across breakpoints", "Animated state transitions"],
    outcome: "Polished, fully-responsive weather app with smooth UX and real-time data rendering.",
    image: "/weather.png",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Portfolio Website with 3D Character",
    category: "UI/UX · Frontend",
    problem: "Most developer portfolios feel static and forgettable — a list of links and bullet points.",
    solution: "Designed a cinematic portfolio with a 3D animated character, scrollytelling sequences, and smooth parallax effects.",
    stack: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    challenges: ["3D character integration", "Scroll-synced animations", "Performance on mobile"],
    outcome: "Memorable, premium-feel portfolio that sets a strong first impression and showcases animation skills.",
    image: "/charcter.png",
    link: "#",
    github: "https://github.com/prerna2506/PORTFOLIO-",
    featured: false,
  },
  {
    id: 4,
    title: "Background Removal Tool",
    category: "Web Application",
    problem: "Background removal required heavy desktop software — no fast, browser-based alternative.",
    solution: "Built a drag-and-drop browser tool using an AI API for instant background removal with zero installation.",
    stack: ["JavaScript", "Canvas API", "REST API"],
    challenges: ["AI API integration", "Canvas rendering pipeline", "Smooth drag-and-drop UX"],
    outcome: "Instant, zero-install background remover with a clean UI that works entirely in the browser.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 5,
    title: "E-commerce & Streaming UX Audit",
    category: "UX Research",
    problem: "Teams lack structured insight into what makes e-commerce and streaming UIs convert and retain users.",
    solution: "Conducted a deep UX audit of leading platforms, identifying usability patterns and translating them into actionable design recommendations.",
    stack: ["Figma", "UX Research", "Prototyping"],
    challenges: ["Synthesizing diverse UX patterns", "Translating insights into actionable specs", "Cross-platform consistency analysis"],
    outcome: "Comprehensive design recommendations that improved clarity, trust, and conversion patterns.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#",
    featured: false,
  },
  {
    id: 6,
    title: "AI Response Evaluation System",
    category: "Content & Language Analysis",
    problem: "AI-generated content lacked a structured quality benchmark across clarity, accuracy, and tone.",
    solution: "Created an evaluation framework to benchmark and compare AI-generated text across key quality dimensions.",
    stack: ["Python", "NLP", "Data Analysis"],
    challenges: ["Defining measurable quality metrics", "Normalising across response types", "Building a reusable scoring pipeline"],
    outcome: "Repeatable evaluation pipeline that improved content quality control for AI-generated outputs.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-[#121212] min-h-screen py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest block mb-3">
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-400 font-light max-w-2xl">
            5+ frontend projects built with a focus on performance, clean architecture, and real-world impact.
          </p>
        </motion.div>

        {/* Featured Project — Mini Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[100px] -mr-40 -mt-40 transition-all duration-700 group-hover:bg-orange-500/14 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-widest">
                🏆 Featured Project
              </span>
              <span className="text-xs text-neutral-500 font-mono">{featured.category}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              {featured.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Problem */}
              <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/15">
                <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Problem</p>
                <p className="text-neutral-300 text-sm leading-relaxed">{featured.problem}</p>
              </div>
              {/* Solution */}
              <div className="p-5 rounded-xl bg-green-500/5 border border-green-500/15">
                <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">Solution</p>
                <p className="text-neutral-300 text-sm leading-relaxed">{featured.solution}</p>
              </div>
              {/* Challenges */}
              <div className="p-5 rounded-xl bg-blue-500/5 border border-blue-500/15">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Challenges</p>
                <ul className="space-y-1">
                  {featured.challenges.map((c, i) => (
                    <li key={i} className="text-neutral-300 text-sm flex gap-2">
                      <span className="text-blue-500/60 mt-0.5">▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Outcome */}
              <div className="p-5 rounded-xl bg-orange-500/5 border border-orange-500/15">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Outcome</p>
                <p className="text-neutral-300 text-sm leading-relaxed">{featured.outcome}</p>
              </div>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {featured.stack.map((tech) => (
                <span key={tech} className="px-4 py-1.5 rounded-full bg-black/40 border border-white/8 text-white/70 text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={featured.link}
                className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105"
              >
                Live Demo
              </a>
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all hover:scale-105"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col gap-0 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] hover:border-white/20 transition-all duration-400 overflow-hidden"
            >
              {/* Image */}
              {project.image && (
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.link !== "#" ? project.link : project.github}
                    target={project.link !== "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex-shrink-0 rounded-full bg-white/8 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 text-white/70"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Problem → Solution summary */}
                <div className="space-y-2">
                  <p className="text-xs text-red-400 font-semibold uppercase tracking-widest">Problem</p>
                  <p className="text-xs text-neutral-400 leading-relaxed">{project.problem}</p>
                  <p className="text-xs text-green-400 font-semibold uppercase tracking-widest pt-1">Solution</p>
                  <p className="text-xs text-neutral-400 leading-relaxed">{project.solution}</p>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.stack.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-white/55 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

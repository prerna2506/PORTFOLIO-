"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Full-Stack Contact & Admin System",
    category: "Featured · Full-Stack",
    summary:
      "Production-grade lead-capture pipeline with multi-step form UX, real-time Supabase storage, automated transactional emails via Resend, and a JWT-protected admin analytics dashboard.",
    achievements: [
      "Multi-step guided form with validation and animated transitions",
      "Real-time message storage and retrieval with Supabase",
      "Automated email notifications via Resend API",
      "JWT-secured admin dashboard — zero third-party auth dependency",
    ],
    stack: ["Next.js", "Supabase", "Resend API", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/prerna2506/PORTFOLIO-",
    demo: "/form",
    featured: true,
  },
  {
    id: 2,
    title: "Weather Dashboard Application",
    category: "Frontend · API Integration",
    summary:
      "Dynamic weather dashboard fetching live OpenWeather API data with animated forecast cards, city search, and responsive layout across all breakpoints.",
    achievements: [
      "Async data fetching with error boundary handling",
      "Animated forecast cards with smooth state transitions",
      "Responsive layout — mobile to widescreen",
    ],
    stack: ["React", "REST API", "CSS3", "JavaScript"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Cinematic Portfolio with 3D Character",
    category: "Frontend · Animation",
    summary:
      "Scrollytelling developer portfolio featuring a 3D animated character, canvas-based frame sequences, and scroll-synced parallax effects optimized for performance.",
    achievements: [
      "3D character animated via canvas frame sequences (120 frames)",
      "Scroll-synced animations using Framer Motion",
      "Performance-optimized — mobile responsive",
    ],
    stack: ["Next.js", "Framer Motion", "Canvas API", "Tailwind CSS"],
    github: "https://github.com/prerna2506/PORTFOLIO-",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Background Removal Tool",
    category: "Web Application · AI",
    summary:
      "Browser-based drag-and-drop background removal tool using an AI API — zero installation, instant results, and a clean UI built entirely in-browser.",
    achievements: [
      "AI API integration for real-time background processing",
      "Canvas rendering pipeline for image manipulation",
      "Smooth drag-and-drop UX with preview states",
    ],
    stack: ["JavaScript", "Canvas API", "REST API", "CSS3"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "E-commerce & Streaming UX Audit",
    category: "UX Research · Design",
    summary:
      "Deep UX analysis of leading e-commerce and streaming platforms, synthesizing usability patterns into actionable design recommendations for conversion and retention.",
    achievements: [
      "Analyzed 4 major platforms across 12 UX dimensions",
      "Actionable design specs to improve clarity and trust",
      "Cross-platform consistency analysis",
    ],
    stack: ["Figma", "UX Research", "Prototyping"],
    github: "#",
    demo: "#",
    featured: false,
  },
];

const badge = (text: string) => (
  <span
    key={text}
    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/55 text-xs font-medium"
  >
    {text}
  </span>
);

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured)!;
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
            Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-neutral-400 font-light max-w-xl">
            Production-focused projects demonstrating full-stack thinking, API
            integration, authentication, and performance engineering.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 p-8 md:p-10 rounded-2xl bg-white/[0.025] border border-white/[0.08] relative overflow-hidden group hover:border-white/[0.14] transition-colors duration-500"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-orange-500/5 rounded-full blur-[90px] -mr-28 -mt-28 transition-all duration-700 group-hover:bg-orange-500/8 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-semibold">
                ★ Featured
              </span>
              <span className="text-xs text-neutral-500 font-medium">{featured.category}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
              {featured.title}
            </h3>

            <p className="text-neutral-400 text-[0.925rem] leading-relaxed mb-6 max-w-2xl">
              {featured.summary}
            </p>

            {/* Key achievements */}
            <div className="mb-7 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
                Key Achievements
              </p>
              <ul className="space-y-2">
                {featured.achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-300">
                    <span className="text-orange-500/60 mt-0.5 flex-shrink-0">▸</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-7">
              {featured.stack.map(badge)}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={featured.demo}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(249,115,22,0.25)]"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View Code
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white/70 mb-6 tracking-tight">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {others.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.7rem] text-neutral-500 font-medium uppercase tracking-wider mb-1.5">
                      {project.category}
                    </p>
                    <h4 className="text-base font-semibold text-white leading-snug">
                      {project.title}
                    </h4>
                  </div>
                  <a
                    href={project.demo !== "#" ? project.demo : project.github}
                    target={project.github !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 hover:bg-white hover:text-black flex items-center justify-center text-white/50 transition-all duration-200 group-hover:border-white/20 border border-white/8"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed">{project.summary}</p>

                {/* Key highlight */}
                <ul className="space-y-1.5">
                  {project.achievements.slice(0, 2).map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-neutral-400">
                      <span className="text-orange-500/50 mt-0.5 flex-shrink-0">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project.stack.map(badge)}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-1 border-t border-white/[0.06]">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center pt-4"
        >
          <a
            href="https://github.com/prerna2506"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            See all projects on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

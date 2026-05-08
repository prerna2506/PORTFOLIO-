"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Full-Stack Contact and Admin System",
    category: "Featured | Full-Stack Product",
    problem: "Manual lead handling slows response time and creates inconsistent follow-up.",
    solution:
      "Built a multi-step contact flow with real-time Supabase storage, transactional emails through Resend, and a JWT-protected admin dashboard for lead management.",
    impact:
      "Enabled structured, trackable lead capture with automated notifications and a single internal dashboard for faster decision making.",
    stack: ["Next.js", "TypeScript", "Supabase", "Resend API", "Tailwind CSS"],
    github: "https://github.com/prerna2506/PORTFOLIO-",
    demo: "/form",
    featured: true,
  },
  {
    id: 2,
    title: "Weather Dashboard Application",
    category: "Frontend | API Integration",
    problem: "Most weather tools feel cluttered and difficult to scan on mobile.",
    solution:
      "Built a responsive dashboard with city search, forecast modules, and clear UI states for loading and error handling.",
    impact:
      "Delivered a fast, readable weather experience across breakpoints with reusable components and clean async data flow.",
    stack: ["React", "REST API", "JavaScript", "CSS3"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Cinematic Portfolio Experience",
    category: "Frontend | Performance and Motion",
    problem: "Interactive portfolios often sacrifice usability and performance.",
    solution:
      "Created a scrollytelling portfolio with a 120-frame canvas sequence and layered Framer Motion transitions.",
    impact:
      "Balanced visual storytelling with performance-focused rendering and mobile responsiveness.",
    stack: ["Next.js", "Framer Motion", "Canvas API", "Tailwind CSS"],
    github: "https://github.com/prerna2506/PORTFOLIO-",
    demo: "#",
  },
  {
    id: 4,
    title: "Background Removal Tool",
    category: "Web App | AI Workflow",
    problem: "Non-design users need quick image cleanup without desktop software.",
    solution:
      "Built a browser-based drag-and-drop background removal workflow using API-driven processing and preview states.",
    impact:
      "Reduced friction for basic image editing tasks with an in-browser workflow and immediate visual feedback.",
    stack: ["JavaScript", "REST API", "Canvas API", "CSS3"],
    github: "#",
    demo: "#",
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
  const featured = PROJECTS.find((project) => project.featured);
  const others = PROJECTS.filter((project) => !project.featured);

  if (!featured) return null;

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] py-20 md:py-28 px-6 md:px-12 border-t border-white/[0.06] relative z-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-3">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Selected Product Work
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl">
            Projects focused on production workflows, frontend architecture, and
            measurable product value.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-10 p-8 md:p-10 rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:border-white/[0.14] transition-colors duration-300"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-semibold">
              Featured
            </span>
            <span className="text-xs text-neutral-500 font-medium">{featured.category}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug">
            {featured.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
            {[
              { title: "Problem", value: featured.problem },
              { title: "Solution", value: featured.solution },
              { title: "Impact", value: featured.impact },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                <p className="text-[0.68rem] font-semibold text-neutral-500 uppercase tracking-[0.1em] mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-7">{featured.stack.map(badge)}</div>

          <div className="flex flex-wrap gap-3">
            <a
              href={featured.demo}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
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
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </a>
          </div>
        </motion.article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {others.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-300"
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
                  rel={project.github !== "#" ? "noopener noreferrer" : undefined}
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 hover:bg-white hover:text-black flex items-center justify-center text-white/50 transition-all duration-200 border border-white/8"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-neutral-400 leading-relaxed">
                  <span className="text-neutral-300 font-medium">Solution: </span>
                  {project.solution}
                </p>
                <p className="text-neutral-500 leading-relaxed">
                  <span className="text-neutral-400 font-medium">Impact: </span>
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-1">{project.stack.map(badge)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

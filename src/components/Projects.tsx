"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
  techStack: string[];
  github: string;
  demo: string;
  status: "Completed" | "In Progress" | "Prototype";
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Full-Stack Contact & Admin System",
    category: "Full-Stack Product",
    description: "Production lead capture system with custom JWT admin panel, automated email pipelines, and real-time analytics dashboards.",
    problem: "Form spam attacks flooding mailboxes, database vulnerability, and environment key exposure on client-side web forms.",
    solution:
      "Built API rate-limiting via IP-hashed token buckets, enforced Supabase Row-Level Security (RLS) on all transaction tables, and secured admin sessions with HttpOnly JWT validation.",
    impact:
      "Achieved 99.9% spam mitigation, zero key exposure, and transactional mail queue delivery (Resend API) under 800ms.",
    features: ["IP-hashed rate limiter", "Row-Level Security (RLS)", "Resend Email API Queue", "HttpOnly JWT Authentication", "Real-time db triggers"],
    techStack: ["Next.js", "TypeScript", "Supabase", "Resend API", "Tailwind CSS"],
    github: "https://github.com/prerna2506/PORTFOLIO-",
    demo: "/form",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    title: "Weather Dashboard",
    category: "Frontend Application",
    description: "Meteorological dashboard fetching real-time OpenWeather REST payloads. Hardest Problem: Mitigated API query limits by engineering a client-side, in-memory city cache with a 15-minute expiration window, reducing redundant network requests by 70%.",
    problem: "API rate limits and input latency when searching city weather metrics.",
    solution:
      "Built input debouncing to prevent search firing on every keystroke, and wrote cache handlers for weather parameters.",
    impact:
      "Cut meteorological API load by 70% and eliminated visual rendering stutter with immediate local storage fallbacks.",
    features: ["In-memory query caching", "Request input debouncing", "REST OpenWeather API", "Error retry boundaries"],
    techStack: ["React", "REST API", "JavaScript", "CSS3"],
    github: "#",
    demo: "#",
    status: "Completed",
  },
  {
    id: 3,
    title: "Interactive Portfolio",
    category: "Frontend Experience",
    description: "Scroll-driven storytelling page utilizing hardware-accelerated rendering. Hardest Problem: Sped up continuous scrolling from 35fps to a locked 60fps by replacing standard scroll listeners with IntersectionObservers and batching render paint cycles.",
    problem: "Continuous scroll event listeners causing layout thrashing and high CPU usage.",
    solution:
      "Offloaded canvas animations to requestAnimationFrame, leveraged GPU-accelerated translates, and lazy-loaded interactive submodules.",
    impact:
      "100/100 Lighthouse performance score and smooth framerates on lower-spec mobile web views.",
    features: ["Offscreen canvas frames", "IntersectionObserver API", "Lighthouse optimization", "Dynamic importing"],
    techStack: ["Next.js", "Framer Motion", "Canvas API", "Tailwind CSS"],
    github: "https://github.com/prerna2506/PORTFOLIO-",
    demo: "#",
    status: "Completed",
  },
  {
    id: 4,
    title: "AI Background Remover",
    category: "AI Web Tool",
    description: "Asynchronous canvas segmentation editor. Hardest Problem: Prevented high-res uploads from crashing browser memory by writing an aspect-ratio resampling helper, scaling raw blobs locally before background removal processing.",
    problem: "Large high-resolution images crashing local memory during REST payload uploads.",
    solution:
      "Implemented a HTML5 Canvas image resizing routine and local blob URL compilation for immediate visual preview.",
    impact:
      "Reduced processing payload size by up to 80% and removed upload latency using immediate client-side Object URLs.",
    features: ["HTML5 Canvas resizing", "Asynchronous segment APIs", "URL.createObjectURL pre-render", "Binary file handling"],
    techStack: ["JavaScript", "REST API", "Canvas API", "CSS3"],
    github: "#",
    demo: "#",
    status: "Completed",
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 p-8 md:p-10 rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-semibold">
              Featured
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
              {featured.status}
            </span>
            <span className="text-xs text-neutral-500 font-medium">{featured.category}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
            {featured.title}
          </h3>
          
          <p className="text-neutral-300 mb-6 leading-relaxed">{featured.description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
            <div className="flex flex-wrap gap-2">
              {featured.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

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

          <div className="mb-7">
            <h4 className="text-sm font-semibold text-white mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">{featured.techStack.map(badge)}</div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={featured.demo}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href="/case-study"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 text-orange-400 text-sm font-semibold transition-all duration-200 hover:scale-[1.02]"
            >
              Case Study →
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {others.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="flex flex-col gap-4 p-4 sm:p-6 rounded-2xl bg-white/[0.025] border border-white/[0.08] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-semibold ${
                      project.status === "Completed" 
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : project.status === "In Progress"
                        ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                        : "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400"
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-[0.65rem] text-neutral-500 font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-white leading-snug mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                    {project.description}
                  </p>
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

              <div className="mb-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-500 text-xs font-medium">
                      +{project.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">{project.techStack.map(badge)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

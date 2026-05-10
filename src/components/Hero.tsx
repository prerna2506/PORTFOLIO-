"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-6"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/3 rounded-full blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/8 border border-green-500/15 text-green-400 text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Frontend Engineer Roles
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-[2.2rem] sm:text-[2.8rem] md:text-[4rem] lg:text-[4.8rem] font-bold tracking-tight leading-[1.1] text-white mb-6"
        >
          Frontend Developer{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
            Crafting Scalable
          </span>{" "}
          Web Experiences
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-normal px-4"
        >
          Building production-ready web applications with React, Next.js, and modern UI systems. 
          Focused on clean code, responsive design, and exceptional user experiences.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="https://github.com/prerna2506"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] border border-neutral-700"
            >
              <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              GitHub
            </a>
            
            <a
              href="/PRERNA_SINGH_Resume.docx"
              download
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white hover:bg-neutral-100 text-black text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Resume
            </a>
          </div>
          
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 text-sm sm:text-base font-medium tracking-wide transition-all duration-300 hover:scale-[1.02]"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Contact
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.5)}
          className="flex items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-12 px-4"
        >
          {[
            {
              href: "https://github.com/prerna2506",
              icon: <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/prerna-singh1/",
              icon: <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
              label: "LinkedIn",
            },
            {
              href: "mailto:workprerna6@gmail.com",
              icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
              label: "Email",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors duration-300 text-xs sm:text-sm font-medium"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-400 px-4"
        >
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700 text-neutral-300 font-medium text-xs sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

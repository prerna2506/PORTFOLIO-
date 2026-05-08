"use client";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#080808] py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.06] relative z-20 overflow-hidden"
    >
      {/* Subtle bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Great Together
            </span>
          </h2>
          <p className="text-neutral-400 leading-relaxed">
            I&apos;m currently open to{" "}
            <span className="text-white font-medium">internships</span>,{" "}
            <span className="text-white font-medium">freelance projects</span>, and{" "}
            <span className="text-white font-medium">frontend opportunities</span>.
            If you have a product to build or a role to fill — let&apos;s talk.
          </p>

          {/* Availability */}
          <div className="flex justify-center mt-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              Available for work — Based in India, open to remote
            </span>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-7 md:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.08] flex flex-col justify-between group hover:border-white/[0.14] hover:bg-white/[0.035] transition-all duration-300"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg text-white font-semibold mb-2">Email Me Directly</h3>
              <p className="text-neutral-500 text-sm mb-5 leading-relaxed">
                Preferred for opportunities, project inquiries, and collaboration.
              </p>
            </div>
            <a
              href="mailto:workprerna6@gmail.com"
              className="group/link flex items-center gap-2 text-white font-medium hover:text-orange-400 transition-colors"
            >
              workprerna6@gmail.com
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </a>
          </motion.div>

          {/* Contact Form CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="p-7 md:p-8 rounded-2xl bg-gradient-to-br from-orange-500/12 to-transparent border border-orange-500/15 flex flex-col justify-between hover:border-orange-500/25 transition-all duration-300"
          >
            <div>
              <h3 className="text-lg text-white font-semibold mb-2">Have a Project in Mind?</h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                Fill out the interactive form — tell me about your project, timeline, budget, and what you&apos;re looking to ship.
              </p>
            </div>
            <a
              href="/form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all hover:scale-[1.02] shadow-[0_0_24px_rgba(249,115,22,0.25)] hover:shadow-[0_0_36px_rgba(249,115,22,0.4)] w-fit"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 pt-10 border-t border-white/[0.06]"
        >
          {[
            {
              href: "https://github.com/prerna2506",
              label: "GitHub",
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
            {
              href: "https://www.linkedin.com/in/prerna-singh1/",
              label: "LinkedIn",
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              ),
            },
            {
              href: "/resume.pdf",
              label: "Download Resume",
              icon: <Download className="w-4 h-4" />,
              download: true,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-neutral-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.14] transition-all duration-200 text-sm font-medium"
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <p className="text-center text-neutral-700 text-xs mt-12">
          Built with Next.js · Deployed on Vercel · Designed &amp; developed by Prerna Singh
        </p>
      </div>
    </section>
  );
}

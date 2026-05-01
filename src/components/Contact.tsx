"use client";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-24 border-t border-white/10 relative z-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">together.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Open to entry-level roles in UI/UX, frontend development, content writing, and related fields. Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email / Direct Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 md:p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col items-start justify-center group hover:bg-white/[0.05] transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-2xl text-white font-semibold mb-2">Email Me</h3>
            <p className="text-neutral-400 mb-6">Drop me an email directly if you prefer.</p>
            <a 
              href="mailto:workprerna6@gmail.com" 
              className="text-xl md:text-2xl text-white font-medium hover:text-orange-400 transition-colors flex items-center gap-3 break-all"
            >
              workprerna6@gmail.com
              <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </motion.div>

          {/* Contact Form CTA Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-orange-600/5 border border-orange-500/20 backdrop-blur-xl flex flex-col items-start justify-center"
          >
            <h3 className="text-3xl text-white font-semibold mb-4">Have a project in mind?</h3>
            <p className="text-neutral-300 mb-8 text-lg">
              Fill out the interactive form and let's get the conversation started.
            </p>
            <a 
              href="/form" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-orange-500 text-white font-semibold text-lg hover:bg-orange-600 hover:scale-105 transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)]"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-6 mt-16 pt-12 border-t border-white/10"
        >
          <a href="https://github.com/prerna2506" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/prerna-singh1/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-[#0077b5]/80 hover:border-[#0077b5] hover:scale-110 transition-all">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { AlertCircle, Lightbulb, Wrench, TrendingUp } from "lucide-react";

const PHASES = [
  {
    icon: AlertCircle,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
    label: "Problem",
    heading: "Contact forms lose leads and feel impersonal",
    body:
      "Most portfolio contact forms are a dead end — a blank textarea that emails you, with no confirmation, no structured data, and no way to track or follow up. Recruiters and clients submit and hear nothing. Submissions get buried in inboxes. There's no admin visibility, no analytics, and the experience feels like 2012.",
  },
  {
    icon: Lightbulb,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    label: "Solution",
    heading: "Build a Typeform-style multi-step contact system",
    body:
      "I designed a guided multi-step contact flow: each question appears one at a time (name → role → budget → message), reducing abandonment and making users feel heard. Submissions route to Supabase for persistent storage, trigger automated email confirmations via Resend, and feed an authenticated Admin Dashboard where I can review all contacts, filter by role, and track patterns over time.",
  },
  {
    icon: Wrench,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    label: "Challenges",
    heading: "Auth, rate-limiting, and environment security",
    body:
      "The admin dashboard needed to be protected without a heavy auth framework. I implemented a lightweight JWT-based login using Supabase Auth, stored session tokens in httpOnly cookies, and guarded the admin route server-side. Resend's API required careful error handling to avoid double-sending on retry. Environment variables were scoped properly between server-side API routes and client-side components to prevent key exposure.",
  },
  {
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
    label: "Result",
    heading: "A production-grade system that proves full-stack thinking",
    body:
      "The system now handles real submissions end-to-end — from animated form UX to instant email delivery to structured admin review. It demonstrates proficiency across frontend (React, Framer Motion), backend (Next.js API Routes), database (Supabase), and external APIs (Resend). More importantly, it solves a real problem: turning a passive portfolio into an active lead-capture tool.",
  },
];

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="bg-[#0e0e0e] py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20 overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Case Study
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Premium Contact &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Admin System
            </span>
          </h2>
          <p className="text-lg text-neutral-400 font-light max-w-2xl">
            A deep dive into how I approached building a full-stack contact pipeline — from UX
            design to secure backend integration — for this very portfolio.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="space-y-6">
          {PHASES.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-2xl border ${phase.bg} backdrop-blur-sm`}
              >
                <div className="flex items-start gap-5">
                  <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-black/30`}>
                    <Icon className={`w-5 h-5 ${phase.color}`} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${phase.color}`}>
                      {phase.label}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{phase.heading}</h3>
                    <p className="text-neutral-400 leading-relaxed font-light">{phase.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="/form"
            className="px-8 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
          >
            See It Live →
          </a>
          <a
            href="https://github.com/prerna2506/PORTFOLIO-"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-colors"
          >
            View Source Code
          </a>
        </motion.div>
      </div>
    </section>
  );
}

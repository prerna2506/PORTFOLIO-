"use client";
import Link from "next/link";
import { ArrowLeft, BookOpen, Users, Zap, Target } from "lucide-react";

export default function StudyPartnerPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Navigation */}
      <div className="border-b border-white/5 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-8 md:px-24 py-4">
          <Link href="/#working-on" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ArrowLeft size={20} />
            Back
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 md:px-24 py-20">
        {/* HERO SECTION */}
        <section className="mb-24">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-sm text-purple-400 font-medium">🚧 IN PROGRESS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Virtual Study Partner</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            An accountability-first study platform designed for students who struggle to stay consistent when studying alone.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.figma.com/proto/mos47hZv1Q2OKjOVRpTyja/Study-Buddy?node-id=0-1&p=f&viewport=337%2C472%2C0.17&t=pzPP3VfZ4P3tO3aJ-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition inline-flex items-center gap-2"
            >
              View Prototype →
            </a>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="mb-24 pb-12 border-b border-white/5">
          <h2 className="text-3xl font-bold mb-6">The Problem</h2>
          <p className="text-lg text-gray-300 mb-8">
            Studying alone sounds simple — until consistency breaks.
          </p>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 mb-8">
            <p className="text-gray-300 mb-6">Most students:</p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">•</span>
                <span>Start with motivation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">•</span>
                <span>Lose focus within minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">•</span>
                <span>Have no accountability system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">•</span>
                <span>Feel isolated while studying</span>
              </li>
            </ul>
          </div>
          <p className="text-lg text-gray-300 mb-2">Existing apps track progress.</p>
          <p className="text-xl text-purple-400 font-semibold">They don't solve <span className="italic">presence</span>.</p>
        </section>

        {/* KEY INSIGHT SECTION */}
        <section className="mb-24 pb-12 border-b border-white/5">
          <h2 className="text-3xl font-bold mb-8">Key Insight</h2>
          <div className="max-w-3xl">
            <p className="text-2xl font-semibold text-gray-200 mb-6 leading-tight">
              People don't just need tools.
              <br />
              They need someone beside them.
            </p>
            <p className="text-gray-400 mb-8">Even a small sense of presence:</p>
            <div className="space-y-3 text-gray-300 mb-8">
              <div className="flex gap-3">
                <span className="text-purple-400 font-bold">✓</span>
                <span>Increases focus</span>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-400 font-bold">✓</span>
                <span>Builds pressure</span>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-400 font-bold">✓</span>
                <span>Improves consistency</span>
              </div>
            </div>
            <p className="text-lg text-purple-300 italic">
              → Accountability works better when it's shared.
            </p>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="mb-24 pb-12 border-b border-white/5">
          <h2 className="text-3xl font-bold mb-8">The Solution</h2>
          <p className="text-gray-400 mb-8">A virtual study partner system where:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-none">
                <span className="text-purple-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Smart Matching</h3>
                <p className="text-gray-400 text-sm">Students matched by goals and timing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-none">
                <span className="text-purple-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Real-Time Sessions</h3>
                <p className="text-gray-400 text-sm">Study together with live presence</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-none">
                <span className="text-purple-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Visible Progress</h3>
                <p className="text-gray-400 text-sm">Both users see the same accountability</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-none">
                <span className="text-purple-400 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Built for Behavior</h3>
                <p className="text-gray-400 text-sm">Experience designed around human psychology</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-300">
            Not another productivity app —
            <br />
            <span className="text-purple-400 font-semibold">a system designed around human behavior.</span>
          </p>
        </section>

        {/* DESIGN SHOWCASE */}
        <section className="mb-24 pb-12 border-b border-white/5">
          <h2 className="text-3xl font-bold mb-8">Design Direction</h2>
          <p className="text-gray-400 mb-6">Calm. Focused. Distraction-free.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex gap-3">
              <span className="text-purple-400 text-lg">◆</span>
              <div>
                <p className="font-semibold">Pinterest-Inspired Aesthetic</p>
                <p className="text-sm text-gray-400">Clean, minimal, premium feel</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 text-lg">◆</span>
              <div>
                <p className="font-semibold">Soft Color Palette</p>
                <p className="text-sm text-gray-400">Blues and purples for calm focus</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 text-lg">◆</span>
              <div>
                <p className="font-semibold">Minimal UI</p>
                <p className="text-sm text-gray-400">Reduces cognitive load</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-purple-400 text-lg">◆</span>
              <div>
                <p className="font-semibold">Long Session Ready</p>
                <p className="text-sm text-gray-400">Designed for extended focus</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-2xl overflow-hidden p-8">
            <div className="flex flex-col items-center justify-center min-h-[300px]">
              <p className="text-gray-400 text-sm mb-6 text-center">
                Interactive prototype showing dashboard, matching, and focus session flow
              </p>
              <a 
                href="https://www.figma.com/proto/mos47hZv1Q2OKjOVRpTyja/Study-Buddy?node-id=0-1&p=f&viewport=337%2C472%2C0.17&t=pzPP3VfZ4P3tO3aJ-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A123" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition inline-flex items-center gap-2"
              >
                Open Interactive Prototype →
              </a>
            </div>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section className="mb-24 pb-12 border-b border-white/5">
          <h2 className="text-3xl font-bold mb-8">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Study Buddy Matching</h3>
              <p className="text-gray-400 text-sm">Match based on goals, subjects, and time — not just profiles.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Real-Time Focus Sessions</h3>
              <p className="text-gray-400 text-sm">Live study sessions where both users stay active together.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Streak System</h3>
              <p className="text-gray-400 text-sm">Consistency tracking with visible accountability.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Break Mode</h3>
              <p className="text-gray-400 text-sm">Short 2-player activities (6–10 min) to refresh without breaking momentum.</p>
            </div>
          </div>
        </section>

        {/* SYSTEM THINKING */}
        <section className="mb-24 pb-12 border-b border-white/5">
          <h2 className="text-3xl font-bold mb-8">System Design Thinking</h2>
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex-1">
                <p className="text-gray-300 text-sm font-semibold mb-1">Start</p>
                <p className="text-white font-bold">Session</p>
              </div>
              <div className="hidden md:block text-purple-400 text-2xl">→</div>
              <div className="flex-1">
                <p className="text-gray-300 text-sm font-semibold mb-1">Stay</p>
                <p className="text-white font-bold">Accountable</p>
              </div>
              <div className="hidden md:block text-purple-400 text-2xl">→</div>
              <div className="flex-1">
                <p className="text-gray-300 text-sm font-semibold mb-1">Complete</p>
                <p className="text-white font-bold">Session</p>
              </div>
              <div className="hidden md:block text-purple-400 text-2xl">→</div>
              <div className="flex-1">
                <p className="text-gray-300 text-sm font-semibold mb-1">Build</p>
                <p className="text-white font-bold">Streak</p>
              </div>
              <div className="hidden md:block text-purple-400 text-2xl">→</div>
              <div className="flex-1">
                <p className="text-gray-300 text-sm font-semibold mb-1">Repeat</p>
                <p className="text-white font-bold">Cycle</p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            The goal is not just productivity,
          </p>
          <p className="text-xl text-purple-400 font-semibold">
            but <span className="italic">habit formation through shared presence</span>.
          </p>
        </section>

        {/* STATUS SECTION */}
        <section className="mb-24 pb-12 border-b border-white/5">
          <h2 className="text-3xl font-bold mb-8">Current Status</h2>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
            <p className="text-gray-300 mb-6">
              <span className="font-semibold">Design complete.</span>
            </p>
            <p className="text-gray-300 mb-4 font-semibold">Now building the core system:</p>
            <ul className="space-y-3 text-gray-300 mb-8 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Focus session logic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Basic matching system</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Streak tracking</span>
              </li>
            </ul>
            <p className="text-purple-300 font-semibold">
              Goal: Launch a working MVP before adding complexity.
            </p>
          </div>
        </section>

        {/* CLOSING SECTION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What's Next</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
            Turning this from concept → usable product.
          </p>
          <p className="text-lg text-gray-300 italic">
            If you're someone who struggles to study alone,
            <br />
            <span className="text-purple-400 font-semibold">this is being built for you.</span>
          </p>
        </section>

        {/* CTA */}
        <div className="flex gap-4">
          <Link href="/">
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium transition">
              Back to Portfolio
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

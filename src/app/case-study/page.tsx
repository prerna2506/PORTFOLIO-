"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudy from "@/components/CaseStudy";

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <div className="border-b border-white/5 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-8 md:px-24 py-4">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ArrowLeft size={20} />
            Back
          </Link>
        </div>
      </div>

      <CaseStudy />
    </main>
  );
}

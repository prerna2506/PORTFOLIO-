"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogs";

export default function Blogs({ posts }: { posts: BlogPost[] }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section
      id="blogs"
      className="bg-[#0e0e0e] py-20 md:py-28 px-6 md:px-12 border-t border-white/[0.06] relative z-20 overflow-hidden"
    >
      {/* Dynamic ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-blue-500/4 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] block mb-3">
              Developer Platform
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              BLOGS✍️
            </h2>
            <p className="text-neutral-400 font-light max-w-xl">
              Documenting technical discoveries, real-world bug hunts, and engineering choices that separate templates from scalable software.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-semibold transition-all w-fit"
          >
            All Articles <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post, idx) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] p-5 md:p-6 transition-all duration-300 relative h-full cursor-pointer"
            >
              {/* Category & Icons */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
                  {post.category}
                </span>
                <span className="text-neutral-500 group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white leading-snug mb-3 group-hover:text-orange-300 transition-colors duration-200">
                {post.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-neutral-300 leading-relaxed mb-4 font-light">
                {post.summary}
              </p>

              {/* Tags & Meta */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-neutral-400 text-[0.7rem] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-neutral-500 text-xs pt-3 border-t border-white/[0.06]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

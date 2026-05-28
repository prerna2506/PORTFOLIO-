"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Search, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogs";

const CATEGORIES = ["All", "Debugging", "Backend Security", "Performance"];

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Sticky navigation */}
      <div className="border-b border-white/5 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-400 bg-orange-500/10 border border-orange-500/25 px-2.5 py-1 rounded-md">
            Developer Log
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        {/* Header */}
        <section className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            BLOGS✍️
          </h1>
          <p className="text-neutral-400 font-light max-w-2xl text-base md:text-lg">
            Real architectural deep dives, debugging breakdowns, and performance optimization details gathered while shipping software.
          </p>
        </section>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-10 pb-8 border-b border-white/[0.06]">
          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search articles or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/[0.025] border border-white/[0.08] text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.04] transition-all text-sm"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-orange-500 border-orange-600 text-white shadow-md shadow-orange-500/20"
                    : "bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                key={post.slug}
                className="flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] p-6 transition-all duration-300 relative h-full group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-neutral-500 group-hover:text-white transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>

                <Link href={`/blog/${post.slug}`} className="block group">
                  <h3 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-orange-300 transition-colors duration-200">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                  {post.summary}
                </p>

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
              </motion.article>
            ))}
          </AnimatePresence>

          {posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-1 md:col-span-2 py-24 text-center rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.01]"
            >
              <p className="text-neutral-400 text-base font-light mb-2">No articles published yet. ✍️</p>
              <p className="text-neutral-500 text-sm">Check back soon for deep technical writing and engineering logs!</p>
            </motion.div>
          ) : filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-1 md:col-span-2 py-20 text-center rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.01]"
            >
              <p className="text-neutral-500 text-sm">No articles match your search or filter criteria. 🔍</p>
            </motion.div>
          ) : null}
        </div>
      </div>
    </main>
  );
}

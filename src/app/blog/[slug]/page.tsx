import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Find next and previous posts based on chronological order
  const posts = await getAllPosts();
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500/30">
      {/* Sticky navigation */}
      <div className="border-b border-white/5 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition">
            <ArrowLeft size={18} />
            Back to Articles
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-400 bg-orange-500/10 border border-orange-500/25 px-2.5 py-1 rounded-md">
            Developer Log
          </span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Post Metadata Header */}
        <header className="mb-12 pb-8 border-b border-white/[0.08]">
          <span className="text-orange-400 text-xs font-semibold uppercase tracking-wider bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-md mb-6 inline-block">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-neutral-400 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-orange-400" />
              Prerna Singh
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Post Body (Renders code blocks and rich text) */}
        <section 
          className="prose prose-invert max-w-none text-neutral-300 leading-relaxed text-base sm:text-lg mb-16
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:mb-5
            prose-strong:text-orange-300
            prose-code:bg-white/[0.04] prose-code:border prose-code:border-white/[0.08] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-orange-300 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-white/[0.02] prose-pre:border prose-pre:border-white/[0.08] prose-pre:p-5 prose-pre:rounded-2xl prose-pre:overflow-x-auto prose-pre:my-6
            prose-pre-code:bg-transparent prose-pre-code:border-none prose-pre-code:p-0 prose-pre-code:text-neutral-200 prose-pre-code:text-sm
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-5 prose-ul:space-y-2
            prose-li:text-neutral-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-white/[0.08]">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Article Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] transition text-left group"
            >
              <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Previous Article</span>
              <span className="text-white font-semibold line-clamp-1 group-hover:text-orange-300 transition-colors duration-200">{prevPost.title}</span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] transition text-right group"
            >
              <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Next Article</span>
              <span className="text-white font-semibold line-clamp-1 group-hover:text-orange-300 transition-colors duration-200">{nextPost.title}</span>
            </Link>
          )}
        </div>

        {/* CTA Section */}
        <section className="p-8 rounded-[2rem] bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 backdrop-blur-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Have a technical challenge?</h3>
              <p className="text-neutral-400 font-light text-sm max-w-md">
                I build performance-driven frontend web applications, safe APIs, and clean data systems. Let's solve your bottlenecks together.
              </p>
            </div>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-[0_0_16px_rgba(249,115,22,0.2)] hover:scale-[1.02] inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}

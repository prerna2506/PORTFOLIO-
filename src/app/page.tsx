import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import WorkingOn from "@/components/WorkingOn";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import { getAllPosts } from "@/lib/blogs";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const posts = await getAllPosts();
  
  const { data: dbProjects } = await supabase
    .from('projects')
    .select('*')
    .eq('status', 'published')
    .order('sort_order', { ascending: true });

  const formattedProjects = (dbProjects || []).map((p) => ({
    id: p.id,
    title: p.title,
    category: "Project",
    description: p.description || "",
    techStack: p.tech_stack || [],
    github: p.github_url || "#",
    demo: p.demo_url || "#",
    status: p.status === 'published' ? 'Completed' : 'In Progress',
    featured: p.is_featured || false,
    features: []
  }));

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Skills />
      <Projects projects={formattedProjects} />
      <Experience />
      <WorkingOn />
      <Blogs posts={posts} />
      <Contact />
    </main>
  );
}

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
  
  // Parallel fetching for better performance
  const [
    { data: dbProjects },
    { data: dbExperience },
    { data: dbSkillGroups },
    { data: dbSettings }
  ] = await Promise.all([
    supabase.from('projects').select('*').eq('status', 'published').order('sort_order', { ascending: true }),
    supabase.from('experience').select('*').order('sort_order', { ascending: true }),
    supabase.from('skill_groups').select('*, skills(*)').order('sort_order', { ascending: true }),
    supabase.from('settings').select('*')
  ]);

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

  const settingsMap = (dbSettings || []).reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {} as Record<string, any>);

  const heroSettings = settingsMap.hero || {};
  const socials = settingsMap.socials || {};
  const resume = settingsMap.resume || {};

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero 
        title={heroSettings.title}
        subtitle={heroSettings.subtitle}
        ctaText={heroSettings.ctaText}
        ctaLink={heroSettings.ctaLink}
        resumeUrl={resume.resumeUrl}
        githubUrl={socials.github}
      />
      <Skills skillGroups={dbSkillGroups || []} />
      <Projects projects={formattedProjects} />
      <Experience experience={dbExperience || []} />
      <WorkingOn />
      <Blogs posts={posts} />
      <Contact />
    </main>
  );
}

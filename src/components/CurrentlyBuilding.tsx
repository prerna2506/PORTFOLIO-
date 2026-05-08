type BuildItem = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
};

const BUILD_ITEMS: BuildItem[] = [
  {
    id: 1,
    title: "AI Task Management Platform",
    description:
      "Building a scalable productivity platform with AI-powered task suggestions, authentication, and real-time collaboration features.",
    tech: ["Next.js", "Supabase", "OpenAI API", "Tailwind CSS"],
    status: "In active development",
  },
  {
    id: 2,
    title: "Portfolio Analytics Toolkit",
    description:
      "Developing production-grade tracking for lead quality, response reliability, and conversion insights across key portfolio workflows.",
    tech: ["TypeScript", "Supabase", "Resend", "Dashboard UI"],
    status: "In active development",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="bg-[#111111] py-16 md:py-20 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] text-orange-400 uppercase mb-3">
          Current Focus
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Currently Building
        </h2>
        <p className="mt-4 text-base md:text-lg text-neutral-400 max-w-3xl">
          Ongoing product work with production scope, clear delivery goals, and practical outcomes.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {BUILD_ITEMS.map((item) => (
            <article key={item.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-orange-300 border border-orange-400/30 bg-orange-500/10 px-2.5 py-1 rounded-full">
                  {item.status}
                </span>
              </div>

              <p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">{item.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-full border border-white/10 text-xs text-neutral-300 bg-black/30">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

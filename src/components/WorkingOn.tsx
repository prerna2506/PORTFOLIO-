"use client";
import Link from "next/link";

const ideas = [
  {
    title: "Virtual Study Partner",
    desc: "I don't study well alone. Building something for people like me who need someone beside them to stay consistent and focused.",
    tag: "🚧 In Progress",
    link: "/study-partner",
  },
];

export default function WorkingOn() {
  return (
    <section className="bg-[#121212] py-20 md:py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">🚧 Working On</h2>
        <p className="text-gray-400 text-base">
          Ideas I'm currently exploring and building.
        </p>
      </div>

      {/* Grid */}
      <div className="flex justify-center">
        <div className="grid md:grid-cols-1 gap-6 max-w-lg">
          {ideas.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Tag */}
              <p className="text-xs text-purple-400 mb-2">{item.tag}</p>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Button */}
              <Link href={item.link}>
                <button className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-lg transition duration-300 mb-4">
                  View Concept →
                </button>
              </Link>

              {/* Bottom line effect */}
              <div className="h-[2px] w-0 bg-purple-400 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

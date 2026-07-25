"use client";

import { Code2, Database, Brain, Settings } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-5 h-5 text-[#3b82f6]" />,
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-5 h-5 text-[#3b82f6]" />,
      skills: ["Python/Flask", "Supabase", "Node.js"],
    },
    {
      title: "AI & APIs",
      icon: <Brain className="w-5 h-5 text-[#3b82f6]" />,
      skills: ["Gemini API", "Claude API", "Prompt Engineering"],
    },
    {
      title: "Tools & Deployment",
      icon: <Settings className="w-5 h-5 text-[#3b82f6]" />,
      skills: ["Git/GitHub", "Vercel", "Jules (AI coding agent)"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden">
      {/* Subtle Background Decor */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[200px] h-[200px] bg-[#3b82f6]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase font-mono-accent">
            Core Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc]">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]/60 max-w-xl mx-auto">
            A specialized stack focused on developing speed-optimized, modern web architectures integrated with smart generative intelligence.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-[#1e293b] border border-[#334155]/60 hover:border-[#3b82f6]/40 transition-all duration-300 shadow-xl shadow-black/10 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-lg bg-[#0f172a] border border-[#334155]/60">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-[#f8fafc] text-base sm:text-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-[#0f172a] border border-[#334155]/40 text-xs sm:text-sm font-medium text-[#f8fafc]/80 hover:text-[#3b82f6] hover:border-[#3b82f6]/50 transition-all duration-200 font-mono-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

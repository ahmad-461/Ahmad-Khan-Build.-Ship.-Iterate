"use client";

import { Brain, BarChart3, Code2, Database, Settings } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "AI & GenAI",
      icon: <Brain className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Gemini API", "Prompt Engineering", "AI Integration"],
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Python", "Pandas", "Data Analysis", "Data Visualization", "DuckDB"],
    },
    {
      title: "Full-Stack Development",
      icon: <Code2 className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI/Flask"],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Supabase", "PostgreSQL"],
    },
    {
      title: "Tools & Deployment",
      icon: <Settings className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Git", "GitHub", "Vercel", "REST APIs"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[250px] h-[250px] bg-[#06b6d4]/5 rounded-full blur-[80px] pointer-events-none" />

      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]/60 max-w-2xl mx-auto leading-relaxed">
            A premium selection of technologies backed by production-ready implementation, professional workflows, and robust codebases.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-[#1e293b]/70 border border-[#334155]/60 hover:border-[#06b6d4]/40 hover:shadow-lg hover:shadow-[#06b6d4]/5 transition-all duration-300 flex flex-col space-y-6"
            >
              {/* Category Title & Icon Row */}
              <div className="flex items-center gap-3 pb-3 border-b border-[#334155]/40">
                <div className="p-2 rounded bg-[#0f172a] border border-[#334155]/60 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#f8fafc] tracking-tight uppercase font-mono">
                  {category.title}
                </h3>
              </div>

              {/* Badges Grid / List */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm font-semibold font-mono px-3.5 py-1.5 rounded-lg bg-[#0f172a]/60 border border-[#334155]/40 text-[#f8fafc]/85 hover:text-[#06b6d4] hover:border-[#06b6d4]/30 hover:bg-[#06b6d4]/5 hover:shadow-[0_0_12px_rgba(6,182,212,0.05)] transition-all duration-300 select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}

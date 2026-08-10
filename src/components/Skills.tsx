"use client";

import { Code2, Database, Brain, Settings } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import { featuredProjects, isProjectMatchingSkill } from "./Projects";

interface SkillsProps {
  hoveredSkill: string | null;
  hoveredProject: string | null;
  onHoverSkill: (skillName: string | null) => void;
}

export default function Skills({ hoveredSkill, hoveredProject, onHoverSkill }: SkillsProps) {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Python/Flask", "Supabase", "Node.js"],
    },
    {
      title: "AI & APIs",
      icon: <Brain className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Gemini API", "Claude API", "Prompt Engineering"],
    },
    {
      title: "Tools & Deployment",
      icon: <Settings className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Git/GitHub", "Vercel", "Jules (AI coding agent)"],
    },
  ];

  // Helper to check if a specific skill is active/highlighted when hovering a project
  const isSkillHighlightedByProject = (skillName: string): boolean => {
    if (!hoveredProject) return false;
    const project = featuredProjects.find((p) => p.name === hoveredProject);
    if (!project) return false;
    return isProjectMatchingSkill(project, skillName);
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden"
    >
      {/* Subtle Background Decor */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[200px] h-[200px] bg-[#06b6d4]/5 rounded-full blur-[80px] pointer-events-none" />

      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
            Core Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]/60 max-w-2xl mx-auto leading-relaxed">
            A specialized stack focused on developing speed-optimized, modern web architectures integrated with smart generative intelligence.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-xl bg-[#1e293b] border border-[#334155]/60 hover:border-[#06b6d4]/40 hover:shadow-lg hover:shadow-[#06b6d4]/5 transition-all duration-300 shadow-xl shadow-black/10 flex flex-col justify-between focus-within:ring-2 focus-within:ring-[#06b6d4] focus-within:outline-none"
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
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill;
                    const isLinkedHighlight = isSkillHighlightedByProject(skill);
                    const isMuted = (hoveredSkill && !isHovered) || (hoveredProject && !isLinkedHighlight);

                    return (
                      <span
                        key={skill}
                        onMouseEnter={() => onHoverSkill(skill)}
                        onMouseLeave={() => onHoverSkill(null)}
                        className={`px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-200 font-mono cursor-pointer ${
                          isHovered || isLinkedHighlight
                            ? "bg-[#06b6d4]/20 border-[#06b6d4] text-[#06b6d4] scale-105 shadow shadow-[#06b6d4]/20"
                            : isMuted
                            ? "bg-[#0f172a]/40 border-[#334155]/20 text-[#f8fafc]/30"
                            : "bg-[#0f172a] border-[#334155]/40 text-[#f8fafc]/80 hover:text-[#06b6d4] hover:border-[#06b6d4]/50"
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}

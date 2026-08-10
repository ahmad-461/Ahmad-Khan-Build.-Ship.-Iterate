"use client";

import { Brain, BarChart3, Code2, Database, Settings, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export interface SkillDetail {
  name: string;
  desc: string;
  tools: string[];
  projects: string[];
}

export const skillDetails: Record<string, SkillDetail> = {
  "Gemini API": {
    name: "Gemini API",
    desc: "Powering natural language query analysis, document intelligence, and dynamic content generation.",
    tools: ["Gemini SDK", "AI Vision", "Structured JSON"],
    projects: ["InsightLoop", "DocSim Checker", "RxReader — AI Prescription Reader", "Clario — Untangle Confusing Information", "NOKY", "Impossible Quiz Generator"]
  },
  "Prompt Engineering": {
    name: "Prompt Engineering",
    desc: "Optimizing model inputs, context templates, and system instructions for reliable execution.",
    tools: ["System Instructions", "Few-shot Prompts", "Structured Templates"],
    projects: ["InsightLoop", "DocSim Checker", "RxReader — AI Prescription Reader", "Clario — Untangle Confusing Information", "NOKY", "Impossible Quiz Generator"]
  },
  "DuckDB-WASM": {
    name: "DuckDB-WASM",
    desc: "Executing high-speed, local-first analytical SQL queries directly inside client-side browser threads.",
    tools: ["SQL WASM", "Parquet Data", "Local CSV Parsing"],
    projects: ["InsightLoop"]
  },
  "Data Analysis & Visualization": {
    name: "Data Analysis & Visualization",
    desc: "Compiling raw freelancer and user typing metrics into interactive visual charting components.",
    tools: ["Chart.js", "SVG Graphics", "Report Exporting"],
    projects: ["InsightLoop", "DocSim Checker", "NOKY"]
  },
  "Next.js": {
    name: "Next.js",
    desc: "Architecting high-performance React applications with dynamic routing and optimized page renders.",
    tools: ["App Router", "Server Components", "Route Handlers"],
    projects: ["InsightLoop", "Freelance Ops Toolkit", "DocSim Checker", "RxReader — AI Prescription Reader", "Clario — Untangle Confusing Information", "NOKY", "Impossible Quiz Generator", "GTA 6 Hub"]
  },
  "React": {
    name: "React",
    desc: "Building highly interactive user interfaces with optimized component rendering and unified state.",
    tools: ["Hooks API", "Context Provider", "Dynamic Components"],
    projects: ["InsightLoop", "Freelance Ops Toolkit", "DocSim Checker", "RxReader — AI Prescription Reader", "Clario — Untangle Confusing Information", "NOKY", "Impossible Quiz Generator", "GTA 6 Hub"]
  },
  "TypeScript": {
    name: "TypeScript",
    desc: "Enforcing strict compile-time types and interface contracts for robust, error-free development.",
    tools: ["Strict Type Checking", "Interface Contracts", "Generics"],
    projects: ["InsightLoop", "Freelance Ops Toolkit", "NOKY", "Impossible Quiz Generator", "GTA 6 Hub"]
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    desc: "Designing cohesive utility-first interfaces with full responsive optimization and smooth dark themes.",
    tools: ["Flexbox / Grid", "Transitions / Animations", "Custom Theme Config"],
    projects: ["Freelance Ops Toolkit", "RxReader — AI Prescription Reader", "Clario — Untangle Confusing Information", "NOKY", "Impossible Quiz Generator", "GTA 6 Hub"]
  },
  "Python/Flask": {
    name: "Python/Flask",
    desc: "Scripting custom document parsing and backend micro-services to handle heavier server routines.",
    tools: ["Python", "Flask micro-service", "REST API Development"],
    projects: ["DocSim Checker", "InsightLoop", "Impossible Quiz Generator"]
  },
  "Supabase": {
    name: "Supabase",
    desc: "Integrating scalable cloud databases, user authentication layers, and real-time multiplayer states.",
    tools: ["PostgreSQL", "Realtime Sync", "Session Auth"],
    projects: ["InsightLoop", "DocSim Checker", "NOKY", "Impossible Quiz Generator"]
  },
  "Vercel": {
    name: "Vercel",
    desc: "Deploying and managing edge-hosted cloud builds optimized for speed and automated CI/CD pipelines.",
    tools: ["Serverless hosting", "Edge networks", "Deployment hooks"],
    projects: ["Freelance Ops Toolkit", "RxReader — AI Prescription Reader", "Clario — Untangle Confusing Information", "GTA 6 Hub"]
  },
  "Git/GitHub": {
    name: "Git/GitHub",
    desc: "Managing clean version control structures, branching, pull requests, and deployment automations.",
    tools: ["Git workflow", "PR code reviews", "GitHub Actions"],
    projects: ["InsightLoop", "Freelance Ops Toolkit", "DocSim Checker", "RxReader — AI Prescription Reader", "Clario — Untangle Confusing Information", "NOKY", "Impossible Quiz Generator", "GTA 6 Hub"]
  },
  "Jules": {
    name: "Jules",
    desc: "Collaborating with advanced AI agents to accelerate feature prototyping and automated unit testing.",
    tools: ["Autonomous coding", "Refactoring partners", "Environment Setup"],
    projects: ["InsightLoop", "Freelance Ops Toolkit", "DocSim Checker", "RxReader — AI Prescription Reader", "Clario — Untangle Confusing Information", "NOKY", "Impossible Quiz Generator", "GTA 6 Hub"]
  }
};

interface SkillsProps {
  hoveredSkill: string | null;
  selectedSkill: string | null;
  hoveredProject: string | null;
  selectedProject: string | null;
  onHoverSkill: (skillName: string | null) => void;
  onSelectSkill: (skillName: string | null) => void;
  onSelectProject: (projectName: string | null) => void;
}

export default function Skills({
  hoveredSkill,
  selectedSkill,
  hoveredProject,
  selectedProject,
  onHoverSkill,
  onSelectSkill,
  onSelectProject,
}: SkillsProps) {

  const skillCategories = [
    {
      title: "AI & GenAI",
      icon: <Brain className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Gemini API", "Prompt Engineering"],
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["DuckDB-WASM", "Data Analysis & Visualization"],
    },
    {
      title: "Full-Stack Development",
      icon: <Code2 className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python/Flask"],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Supabase"],
    },
    {
      title: "Tools & Deployment",
      icon: <Settings className="w-5 h-5 text-[#06b6d4]" />,
      skills: ["Vercel", "Git/GitHub", "Jules"],
    },
  ];

  // Check if a skill should be highlighted by current project interactions
  const isSkillLinkedToActiveProject = (skillName: string): boolean => {
    const activeProj = hoveredProject || selectedProject;
    if (!activeProj) return false;

    // Exact or normalized lookup
    const details = skillDetails[skillName] || Object.values(skillDetails).find(s => s.name.toLowerCase() === skillName.toLowerCase());
    if (!details) return false;

    // Direct check of matched projects
    return details.projects.includes(activeProj);
  };

  const handleSkillClick = (skillName: string) => {
    if (selectedSkill === skillName) {
      onSelectSkill(null); // Deselect on repeat click
    } else {
      onSelectSkill(skillName);
      onSelectProject(null); // Clear active project when selecting a skill
    }
  };

  const handleProjectClick = (e: React.MouseEvent, projectName: string) => {
    e.stopPropagation(); // Avoid triggering skill click
    if (selectedProject === projectName) {
      onSelectProject(null);
    } else {
      onSelectProject(projectName);
      onSelectSkill(null); // Clear active skill when selecting a project
    }
  };

  const activeSkill = hoveredSkill || selectedSkill;
  const activeProj = hoveredProject || selectedProject;

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[250px] h-[250px] bg-[#06b6d4]/5 rounded-full blur-[80px] pointer-events-none" />

      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
            Interactive Proof of Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
            Skills &amp; Project Mapping
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]/60 max-w-2xl mx-auto leading-relaxed">
            Select a skill to inspect its actual implementation context and instantly highlight the specific projects where it was leveraged.
          </p>

          {/* Active Filter Badge & Reset Button */}
          {(selectedSkill || selectedProject) && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] text-xs font-mono mt-4 animate-fade-in">
              <span>
                Active Filter: {selectedSkill ? `Skill (${selectedSkill})` : `Project (${selectedProject})`}
              </span>
              <button
                onClick={() => {
                  onSelectSkill(null);
                  onSelectProject(null);
                }}
                className="p-0.5 rounded-full hover:bg-[#06b6d4]/20 transition-all text-[#06b6d4] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#06b6d4]"
                title="Reset active filters"
                aria-label="Reset selection filters"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Main Categories Section */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              {/* Category Title */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#334155]/30">
                <div className="p-1.5 rounded bg-[#0f172a] border border-[#334155]/60 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#f8fafc] tracking-tight uppercase font-mono">
                  {category.title}
                </h3>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skillName) => {
                  const details = skillDetails[skillName];
                  if (!details) return null;

                  const isSelected = selectedSkill === skillName;
                  const isHovered = hoveredSkill === skillName;
                  const isLinkedHighlight = isSkillLinkedToActiveProject(skillName);

                  const isHighlighted = isSelected || isHovered || isLinkedHighlight;
                  const isMuted = (activeSkill && !isHighlighted) || (activeProj && !isHighlighted);

                  return (
                    <div
                      key={skillName}
                      onClick={() => handleSkillClick(skillName)}
                      onMouseEnter={() => onHoverSkill(skillName)}
                      onMouseLeave={() => onHoverSkill(null)}
                      className={`group p-5 sm:p-6 rounded-xl bg-[#1e293b] border text-left shadow-lg shadow-black/15 transition-all duration-300 relative cursor-pointer select-none focus-within:ring-2 focus-within:ring-[#06b6d4] focus-within:outline-none min-h-[170px] flex flex-col justify-between ${
                        isHighlighted
                          ? "border-[#06b6d4] shadow-[#06b6d4]/10 shadow-lg scale-[1.02] -translate-y-0.5"
                          : isMuted
                          ? "border-[#334155]/20 opacity-40 hover:opacity-100"
                          : "border-[#334155]/60 hover:border-[#06b6d4]/40 hover:shadow-md hover:shadow-[#06b6d4]/5"
                      }`}
                    >
                      {/* Top Line: Title & Project count */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-bold text-[#f8fafc] text-sm sm:text-base group-hover:text-[#06b6d4] transition-colors duration-200">
                            {details.name}
                          </h4>
                          <span className="text-[10px] sm:text-xs font-mono text-[#06b6d4] bg-[#06b6d4]/5 px-2 py-0.5 rounded border border-[#06b6d4]/10 whitespace-nowrap">
                            {details.projects.length} {details.projects.length === 1 ? "project" : "projects"}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#f8fafc]/70 leading-relaxed">
                          {details.desc}
                        </p>
                      </div>

                      {/* Bottom Line: Tools & Clickable Projects */}
                      <div className="space-y-3 mt-4 pt-4 border-t border-[#334155]/40">
                        {/* Tools list */}
                        <div className="flex flex-wrap gap-1.5">
                          {details.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-[10px] font-mono px-2 py-0.5 bg-[#0f172a] border border-[#334155]/40 text-[#f8fafc]/50 rounded"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        {/* Clickable project indicators */}
                        <div className="space-y-1">
                          <span className="text-[9px] uppercase tracking-wider text-[#f8fafc]/40 font-mono block">
                            Used in:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {details.projects.map((proj) => {
                              const isThisProjectActive = selectedProject === proj || hoveredProject === proj;
                              return (
                                <button
                                  key={proj}
                                  onClick={(e) => handleProjectClick(e, proj)}
                                  className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors duration-150 ${
                                    isThisProjectActive
                                      ? "bg-[#06b6d4] text-white border-transparent font-semibold shadow shadow-[#06b6d4]/20"
                                      : "bg-[#0f172a]/60 hover:bg-[#06b6d4]/10 border-[#334155]/30 hover:border-[#06b6d4]/45 text-[#06b6d4]"
                                  }`}
                                  title={`Filter by ${proj}`}
                                  aria-label={`Filter projects by ${proj}`}
                                >
                                  {proj.split(" — ")[0]}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}

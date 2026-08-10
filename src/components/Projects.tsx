"use client";

import { useState } from "react";
import { ExternalLink, Briefcase, FileSearch, HeartPulse, Scale, Keyboard, Brain, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Project {
  name: string;
  category: string;
  statusBadge: "Live" | "AI Powered" | "Coming Soon";
  description: string;
  techTags: string[];
  liveUrl: string;
  sourceUrl: string;
  categoryIcon: React.ComponentType<{ className?: string }>;
  isAIPowered: boolean;
  isFullStack: boolean;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | "AI-Powered" | "Full-Stack">("All");

  const featuredProjects: Project[] = [
    {
      name: "InsightLoop",
      category: "Data Analytics & AI",
      statusBadge: "Live",
      description:
        "An AI business intelligence platform turning spreadsheets into instant, interactive dashboards. Operates fully in-browser with DuckDB-WASM for maximum privacy, enhanced with Gemini-powered conversational analysis.",
      techTags: ["Next.js", "TypeScript", "DuckDB-WASM", "Gemini API", "Supabase"],
      liveUrl: "https://insightloop-sand.vercel.app/",
      sourceUrl: "#",
      categoryIcon: BarChart3,
      isAIPowered: true,
      isFullStack: true,
    },
    {
      name: "Freelance Ops Toolkit",
      category: "Freelancer Productivity Suite",
      statusBadge: "Live",
      description:
        "A zero-friction suite featuring fifteen custom utility tools tailored for active freelancers. Built for speed and reliability, requiring no logins, configurations, or accounts.",
      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://freelance-ops-toolkit.vercel.app/",
      sourceUrl: "#",
      categoryIcon: Briefcase,
      isAIPowered: false,
      isFullStack: true,
    },
    {
      name: "DocSim Checker",
      category: "AI & Natural Language Processing",
      statusBadge: "Live",
      description:
        "A full-stack document similarity checker featuring a custom-built lightweight TF-IDF logic. Integrates Gemini API for deep semantic comparisons and provides elegant editorial PDF exports.",
      techTags: ["Next.js", "Python/Flask", "Supabase", "Gemini API"],
      liveUrl: "https://docsim-checker.vercel.app/",
      sourceUrl: "#",
      categoryIcon: FileSearch,
      isAIPowered: true,
      isFullStack: true,
    },
    {
      name: "RxReader — AI Prescription Reader",
      category: "Healthcare AI",
      statusBadge: "Live",
      description:
        "An AI healthcare companion that translates handwritten and printed medical prescriptions into plain English. Provides instant medication details, dosage schedules, and instructions within fifteen seconds.",
      techTags: ["Next.js", "AI Vision", "Tailwind CSS", "Vercel"],
      liveUrl: "https://medical-120-nu.vercel.app/",
      sourceUrl: "#",
      categoryIcon: HeartPulse,
      isAIPowered: true,
      isFullStack: false,
    },
    {
      name: "Clario — Untangle Fine Print",
      category: "Document Intelligence",
      statusBadge: "AI Powered",
      description:
        "Translates legalese and fine print into simplified terms while flagging potential hidden contract risks. Adapts text explanations dynamically to match student, professional, or elderly reading modes.",
      techTags: ["Next.js", "AI/NLP", "Tailwind CSS", "Vercel"],
      liveUrl: "https://clario-one-delta.vercel.app/",
      sourceUrl: "#",
      categoryIcon: Scale,
      isAIPowered: true,
      isFullStack: false,
    },
    {
      name: "NOKY",
      category: "Typing & Gamification",
      statusBadge: "Live",
      description:
        "A competitive gamified typing platform featuring AI-generated passages, personal metrics, and global leaderboards. Built with a responsive terminal-inspired UI to maximize user focus and engagement.",
      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API"],
      liveUrl: "https://typing-speed-test-pi-smoky.vercel.app/",
      sourceUrl: "#",
      categoryIcon: Keyboard,
      isAIPowered: true,
      isFullStack: true,
    },
    {
      name: "Impossible Quiz Generator",
      category: "AI Quiz Platform",
      statusBadge: "Live",
      description:
        "An adaptive trivia application generating dynamic, real-time quizzes through the Gemini API. Features scaling difficulty modes, narrative code escape rooms, and a global leaderboard.",
      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Supabase"],
      liveUrl: "https://impossiblequiz-app.vercel.app/",
      sourceUrl: "#",
      categoryIcon: Brain,
      isAIPowered: true,
      isFullStack: true,
    },
  ];

  const filteredProjects = featuredProjects.filter((project) => {
    if (activeFilter === "AI-Powered") return project.isAIPowered;
    if (activeFilter === "Full-Stack") return project.isFullStack;
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#0f172a] border-t border-[#334155]/20 relative overflow-hidden"
    >
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]/50 max-w-2xl mx-auto leading-relaxed">
            A collection of AI-powered tools and web applications built end-to-end
          </p>
        </div>

        {/* Filter Tabs - minimal and clean */}
        <div className="flex justify-center items-center">
          <div className="inline-flex p-1 rounded-lg bg-[#1e293b]/50 border border-[#334155]/20 gap-1.5">
            {(["All", "AI-Powered", "Full-Stack"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-semibold font-mono rounded-md transition-all duration-200 focus-visible:outline-none ${
                  activeFilter === filter
                    ? "bg-[#06b6d4] text-white"
                    : "text-[#f8fafc]/50 hover:text-[#06b6d4] hover:bg-[#0f172a]/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid - flat minimalism with equal height boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => {
            const IconComponent = project.categoryIcon;
            return (
              <div
                key={project.name}
                className="group flex flex-col justify-between bg-[#1e293b]/40 border border-[#334155]/20 hover:border-[#06b6d4]/20 transition-all duration-200 rounded-lg overflow-hidden"
              >
                {/* Card Main Area */}
                <div className="p-6 sm:p-8 relative flex-grow flex flex-col justify-between min-h-[280px]">
                  <div>
                    {/* Header & Status Badge */}
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <span className="flex items-center gap-1 text-[11px] font-semibold tracking-wider text-[#06b6d4]/80 uppercase font-mono">
                        <IconComponent className="w-3 h-3 flex-shrink-0" />
                        <span>{project.category}</span>
                      </span>
                      {/* Quiet Badge Style */}
                      <span className="text-[10px] font-bold font-mono text-[#f8fafc]/50 uppercase tracking-widest">
                        {project.statusBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#f8fafc] group-hover:text-[#06b6d4] transition-colors duration-200">
                      {project.name}
                    </h3>

                    {/* Equalized Description */}
                    <p className="text-xs sm:text-sm leading-relaxed mb-6 text-[#f8fafc]/60">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags - simplified dot/quiet borders style */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono bg-[#0f172a]/20 border border-[#334155]/20 px-2 py-0.5 rounded text-[#f8fafc]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons - flat and clear */}
                <div className="px-6 py-4 sm:px-8 sm:py-4 bg-[#0f172a]/20 border-t border-[#334155]/10 flex items-center gap-4">
                  {project.liveUrl === "#" ? (
                    <button
                      disabled
                      title="Coming Soon"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#06b6d4]/10 text-[#f8fafc]/30 text-xs font-medium cursor-not-allowed"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Coming Soon</span>
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#06b6d4] hover:bg-[#22d3ee] text-white text-xs font-medium transition-colors duration-200 focus-visible:outline-none"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.sourceUrl === "#" ? (
                    <button
                      disabled
                      title="Coming Soon"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-[#1e293b]/20 text-[#f8fafc]/25 text-xs font-medium cursor-not-allowed"
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-current text-[#f8fafc]/20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span>Source</span>
                    </button>
                  ) : (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded border border-[#334155]/40 hover:border-[#06b6d4]/40 text-[#f8fafc]/80 text-xs font-medium transition-colors duration-200 focus-visible:outline-none"
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </ScrollReveal>
    </section>
  );
}

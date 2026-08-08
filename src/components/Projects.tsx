"use client";

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
}

export default function Projects() {
  const featuredProjects: Project[] = [
    {
      name: "InsightLoop",
      category: "Data Analytics & AI",
      statusBadge: "Live",
      description:
        "A full-stack AI business intelligence platform that turns spreadsheets into instant, interactive dashboards. Users upload a CSV or Excel file and DuckDB-WASM — an analytical SQL engine running entirely in the browser — generates charts and KPIs on the fly, with no data ever leaving the device. An AI analyst powered by Gemini answers plain-English questions by writing and running SQL queries in real time, while a Python serverless backend using pandas and numpy adds trend forecasting, outlier detection, and correlation analysis. Dashboards and chat history save via Supabase, and reports export as polished PDFs using jsPDF.",
      techTags: ["Next.js", "TypeScript", "DuckDB-WASM", "Python", "Gemini API", "Supabase"],
      liveUrl: "https://insightloop-sand.vercel.app/",
      sourceUrl: "#",
      categoryIcon: BarChart3,
    },
    {
      name: "Freelance Ops Toolkit",
      category: "Freelancer Productivity Suite",
      statusBadge: "Live",
      description:
        "Free, no-login web app with 15 tools for freelancers. Built for speed and zero friction — no accounts, no paywalls.",
      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://freelance-ops-toolkit.vercel.app/",
      sourceUrl: "#",
      categoryIcon: Briefcase,
    },
    {
      name: "DocSim Checker",
      category: "AI & Natural Language Processing",
      statusBadge: "Live",
      description:
        "Full-stack document similarity checker with a hand-written TF-IDF engine (built to fit serverless size limits), Gemini API integration, and an editorial-styled PDF export.",
      techTags: ["Next.js", "Python/Flask", "Supabase", "Gemini API"],
      liveUrl: "https://docsim-checker.vercel.app/",
      sourceUrl: "#",
      categoryIcon: FileSearch,
    },
    {
      name: "RxReader — AI Prescription Reader",
      category: "Healthcare AI",
      statusBadge: "Live",
      description:
        "AI-powered tool that reads any doctor's prescription photo and explains every medicine, dosage, and instruction in plain English within 15 seconds. Fully private — images auto-deleted within 24 hours, no signup required.",
      techTags: ["Next.js", "AI Vision", "Tailwind CSS", "Vercel"],
      liveUrl: "https://medical-120-nu.vercel.app/",
      sourceUrl: "#",
      categoryIcon: HeartPulse,
    },
    {
      name: "Clario — Untangle Confusing Information",
      category: "Document Intelligence",
      statusBadge: "AI Powered",
      description:
        "Translates dense legalese, contracts, and fine print into plain language, flags hidden risks and obligations, and adapts explanations to different audiences (student, elderly, teaching mode). Includes a real-time risk detection feature for scam and manipulation patterns.",
      techTags: ["Next.js", "AI/NLP", "Tailwind CSS", "Vercel"],
      liveUrl: "https://clario-one-delta.vercel.app/",
      sourceUrl: "#",
      categoryIcon: Scale,
    },
    {
      name: "NOKY",
      category: "Typing & Gamification",
      statusBadge: "Live",
      description:
        "NOKY turns typing practice into a game with AI-generated passages, a global leaderboard, and personal analytics like keyboard heatmaps and consistency scoring. A full gamification system — XP, levels, streaks, achievements — plus an adaptive AI coach keep every session engaging, wrapped in a terminal-inspired dark UI.",
      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API"],
      liveUrl: "https://typing-speed-test-pi-smoky.vercel.app/",
      sourceUrl: "#",
      categoryIcon: Keyboard,
    },
    {
      name: "Impossible Quiz Generator",
      category: "AI Quiz Platform",
      statusBadge: "Live",
      description:
        "An AI-powered, adaptive-difficulty trivia platform where every question is generated live via the Gemini API, with a Python difficulty engine scaling challenges from Easy to Impossible in real time. Features an AI Twin opponent racing players through the same live question stream, a narrative-driven Code Escape Room mode, and a Supabase-backed leaderboard with shareable result cards.",
      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Gemini API", "Supabase"],
      liveUrl: "https://impossiblequiz-app.vercel.app/",
      sourceUrl: "#",
      categoryIcon: Brain,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />

      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase font-mono">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]/60 max-w-2xl mx-auto leading-relaxed">
            A collection of AI-powered tools and web applications built end-to-end
          </p>
        </div>

        {/* Featured Projects Grid (Clean 3-column lg (3x2), 2-column md (3 rows of 2), 1-column mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredProjects.map((project) => {
            const IconComponent = project.categoryIcon;
            return (
              <div
                key={project.name}
                className="group flex flex-col justify-between bg-[#1e293b] border border-[#334155]/60 hover:border-[#3b82f6]/40 hover:scale-[1.02] hover:-translate-y-1 shadow-xl shadow-black/15 hover:shadow-[#3b82f6]/10 hover:shadow-lg transition-all duration-300"
              >
                {/* Card Main Area - padding unified to p-6 sm:p-8 */}
                <div className="p-6 sm:p-8 relative flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header & Status Badge */}
                    <div className="flex justify-between items-start gap-4 mb-5">
                      <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#3b82f6]/85 uppercase font-mono">
                        <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{project.category}</span>
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold font-mono border whitespace-nowrap ${
                          project.statusBadge === "Live"
                            ? "bg-[#3b82f6] text-white border-transparent"
                            : "bg-[#8b5cf6] text-white border-transparent"
                        }`}
                      >
                        {project.statusBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#f8fafc] group-hover:text-[#3b82f6] transition-colors duration-200">
                      {project.name}
                    </h3>

                    {/* Description - comfortable line width & max width constraint */}
                    <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-2xl text-[#f8fafc]/70">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-md border font-mono bg-[#0f172a] border-[#334155]/40 text-[#f8fafc]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 py-4 sm:px-8 sm:py-5 bg-[#0f172a]/40 border-t border-[#334155]/50 flex items-center gap-4">
                  {project.liveUrl === "#" ? (
                    <button
                      disabled
                      title="Coming Soon"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#f8fafc]/30 text-sm font-medium cursor-not-allowed transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.sourceUrl === "#" ? (
                    <button
                      disabled
                      title="Coming Soon"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1e293b]/40 border border-[#334155]/20 text-[#f8fafc]/25 text-sm font-medium cursor-not-allowed transition-all duration-200"
                    >
                      <svg
                        className="w-4 h-4 fill-current text-[#f8fafc]/25"
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
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-[#f8fafc] text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
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

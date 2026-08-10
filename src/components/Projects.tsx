"use client";

import { useState } from "react";
import { ExternalLink, Briefcase, FileSearch, HeartPulse, Scale, Keyboard, Brain, BarChart3, Gamepad2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export interface Project {
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

interface ProjectsProps {
  onOpenCaseStudy?: (projectName: string) => void;
}

export const featuredProjects: Project[] = [
  {
    name: "InsightLoop",
    category: "Data Analytics & AI",
    statusBadge: "Live",
    description:
      "This full-stack business intelligence platform processes uploaded spreadsheets locally using DuckDB-WASM to generate interactive dashboards. An integrated Gemini AI analyst writes and executes SQL queries in real time to answer user questions on data.",
    techTags: ["Next.js", "TypeScript", "DuckDB-WASM", "Python", "Gemini API", "Supabase"],
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
      "This comprehensive productivity suite offers fifteen frictionless, no-login web tools designed specifically for freelancers. The application streamlines daily operations including invoicing, contract generation, and expense tracking with zero configuration required.",
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
      "This advanced similarity analyzer leverages a custom, lightweight TF-IDF engine to detect plagiarism across multiple uploaded documents. Integrated Gemini intelligence provides context-aware semantic comparisons and generates polished editorial analysis PDF reports.",
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
      "This privacy-first healthcare tool uses advanced AI vision to instantly read and interpret doctor prescriptions. The application explains complex medical dosages, safety instructions, and side effects in clear, plain-English within fifteen seconds.",
    techTags: ["Next.js", "AI Vision", "Tailwind CSS", "Vercel"],
    liveUrl: "https://medical-120-nu.vercel.app/",
    sourceUrl: "#",
    categoryIcon: HeartPulse,
    isAIPowered: true,
    isFullStack: false,
  },
  {
    name: "Clario — Untangle Confusing Information",
    category: "Document Intelligence",
    statusBadge: "AI Powered",
    description:
      "This document intelligence application translates dense, confusing legalese and contracts into simple, clear explanations for various target audiences. It features a real-time risk assessment engine that automatically flags hidden scam patterns and obligations.",
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
      "This gamified typing application combines adaptive AI-generated passages with exhaustive analytical tracking to boost keyboard proficiency. Users unlock achievements and trace progress on live speed metrics, heatmaps, and global competitive leaderboards.",
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
      "This adaptive trivia platform generates custom live questions powered by Gemini AI with a dynamic difficulty scaling engine. Players compete against an active AI opponent, navigate code escape rooms, and share high-score cards.",
    techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Gemini API", "Supabase"],
    liveUrl: "https://impossiblequiz-app.vercel.app/",
    sourceUrl: "#",
    categoryIcon: Brain,
    isAIPowered: true,
    isFullStack: true,
  },
  {
    name: "GTA 6 Hub",
    category: "Content Platform",
    statusBadge: "Live",
    description:
      "This multi-page fan-built content platform features interactive guides, live character profiles, news feeds, and curated modding tools. Wrapped in high-energy countdown designs, it demonstrates structured dynamic routing and complex client-side state architectures.",
    techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://gta6-hub-liard.vercel.app/",
    sourceUrl: "#",
    categoryIcon: Gamepad2,
    isAIPowered: false,
    isFullStack: true,
  },
];

export default function Projects({
  onOpenCaseStudy,
}: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<"All" | "AI-Powered" | "Full-Stack">("All");

  const filteredProjects = featuredProjects.filter((project) => {
    if (activeFilter === "AI-Powered") return project.isAIPowered;
    if (activeFilter === "Full-Stack") return project.isFullStack;
    return true;
  });

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#06b6d4]/5 rounded-full blur-[100px] pointer-events-none" />

      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]/60 max-w-2xl mx-auto leading-relaxed">
            A collection of AI-powered tools and web applications built end-to-end
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center items-center">
          <div className="inline-flex p-1.5 rounded-xl bg-[#1e293b] border border-[#334155]/60 shadow-lg gap-2">
            {(["All", "AI-Powered", "Full-Stack"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold font-mono rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none ${
                  activeFilter === filter
                    ? "bg-[#06b6d4] text-white shadow-md shadow-[#06b6d4]/20"
                    : "text-[#f8fafc]/60 hover:text-[#06b6d4] hover:bg-[#0f172a]/40"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => {
            const IconComponent = project.categoryIcon;

            // Simple CSS-only SVG interactive simulated previews for high performance
            const renderSimulatedPreview = () => {
              switch (project.name) {
                case "InsightLoop":
                  return (
                    <div className="w-full h-32 bg-[#0f172a] rounded-t-xl relative overflow-hidden border-b border-[#334155]/40 flex items-center justify-center p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06b6d4]/5 to-transparent pointer-events-none" />
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-[#334155]/30 pb-1.5">
                          <span className="text-[10px] font-mono text-[#06b6d4]">Gemini-BI Analyst</span>
                          <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
                        </div>
                        <div className="flex items-end gap-3 h-14 justify-center">
                          <div className="w-6 bg-[#06b6d4]/40 h-[40%] rounded-t group-hover:h-[60%] transition-all duration-500" />
                          <div className="w-6 bg-[#06b6d4]/80 h-[80%] rounded-t group-hover:h-[90%] transition-all duration-500 relative">
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] text-[#06b6d4] font-mono opacity-0 group-hover:opacity-100 transition-opacity">90%</span>
                          </div>
                          <div className="w-6 bg-[#22d3ee] h-[60%] rounded-t group-hover:h-[75%] transition-all duration-500" />
                          <div className="w-6 bg-[#0891b2]/40 h-[30%] rounded-t group-hover:h-[45%] transition-all duration-500" />
                        </div>
                      </div>
                    </div>
                  );
                case "Freelance Ops Toolkit":
                  return (
                    <div className="w-full h-32 bg-[#0f172a] rounded-t-xl relative overflow-hidden border-b border-[#334155]/40 flex items-center justify-center p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#22d3ee]/5 to-transparent pointer-events-none" />
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-[#334155]/30 pb-1.5">
                          <span className="text-[10px] font-mono text-[#f8fafc]/50">Ops Toolkit</span>
                          <span className="text-[9px] font-mono text-emerald-400">15 Tools</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 py-1">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-[#1e293b] border border-[#334155]/40 p-1.5 rounded flex flex-col justify-center items-center group-hover:border-[#06b6d4]/30 transition-all">
                              <span className="text-[8px] font-mono text-[#f8fafc]/60">Tool {i}</span>
                              <div className="w-4 h-0.5 bg-[#06b6d4]/40 mt-1" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                case "DocSim Checker":
                  return (
                    <div className="w-full h-32 bg-[#0f172a] rounded-t-xl relative overflow-hidden border-b border-[#334155]/40 flex items-center justify-center p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#8b5cf6]/5 to-transparent pointer-events-none" />
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-[#334155]/30 pb-1.5">
                          <span className="text-[10px] font-mono text-[#8b5cf6]">Cosine Similarity</span>
                          <span className="text-[9px] font-mono text-[#06b6d4]">TF-IDF engine</span>
                        </div>
                        <div className="flex justify-around items-center h-14">
                          <div className="relative flex items-center justify-center">
                            <svg className="w-10 h-10 transform -rotate-90">
                              <circle cx="20" cy="20" r="16" stroke="#1e293b" strokeWidth="2.5" fill="transparent" />
                              <circle cx="20" cy="20" r="16" stroke="#06b6d4" strokeWidth="2.5" fill="transparent" strokeDasharray="100" strokeDashoffset="25" className="group-hover:stroke-dashoffset-[15] transition-all duration-700" />
                            </svg>
                            <span className="absolute text-[8px] font-mono text-[#06b6d4]">75%</span>
                          </div>
                          <div className="flex flex-col gap-1 w-1/2">
                            <div className="h-1 bg-[#1e293b] rounded overflow-hidden">
                              <div className="h-full bg-[#8b5cf6] w-[60%] group-hover:w-[85%] transition-all duration-700" />
                            </div>
                            <div className="h-1 bg-[#1e293b] rounded overflow-hidden">
                              <div className="h-full bg-[#06b6d4] w-[45%] group-hover:w-[70%] transition-all duration-700" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "RxReader — AI Prescription Reader":
                  return (
                    <div className="w-full h-32 bg-[#0f172a] rounded-t-xl relative overflow-hidden border-b border-[#334155]/40 flex items-center justify-center p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent pointer-events-none" />
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-[#334155]/30 pb-1.5">
                          <span className="text-[10px] font-mono text-cyan-400">Rx Vision Parser</span>
                          <span className="text-[9px] font-mono text-[#f8fafc]/50">Scanning...</span>
                        </div>
                        <div className="flex gap-3 py-1 items-center justify-center h-14 relative">
                          <div className="absolute top-0 bottom-0 left-0 right-0 border-y border-[#06b6d4]/10 pointer-events-none" />
                          <div className="absolute left-0 right-0 h-[2px] bg-[#06b6d4] animate-pulse group-hover:translate-y-2 transition-transform duration-500" />
                          <div className="p-1 border border-[#334155]/60 rounded bg-[#1e293b]/50">
                            <span className="text-[8px] text-[#f8fafc]/40 font-mono">Prescription.jpg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "Clario — Untangle Confusing Information":
                  return (
                    <div className="w-full h-32 bg-[#0f172a] rounded-t-xl relative overflow-hidden border-b border-[#334155]/40 flex items-center justify-center p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#22d3ee]/5 to-transparent pointer-events-none" />
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-[#334155]/30 pb-1.5">
                          <span className="text-[10px] font-mono text-[#06b6d4]">Fine Print Translation</span>
                          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-red-950 text-red-400 border border-red-900">Scam Risk</span>
                        </div>
                        <div className="flex flex-col gap-1.5 py-1.5 h-14">
                          <div className="w-full h-1.5 bg-[#1e293b] rounded relative overflow-hidden">
                            <div className="absolute top-0 bottom-0 left-0 bg-red-500 w-[20%] animate-pulse" />
                            <div className="absolute top-0 bottom-0 left-[25%] bg-[#06b6d4] w-[50%]" />
                          </div>
                          <div className="w-[85%] h-1.5 bg-[#1e293b] rounded" />
                          <div className="w-[60%] h-1.5 bg-[#1e293b] rounded" />
                        </div>
                      </div>
                    </div>
                  );
                case "NOKY":
                  return (
                    <div className="w-full h-32 bg-[#0f172a] rounded-t-xl relative overflow-hidden border-b border-[#334155]/40 flex items-center justify-center p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06b6d4]/5 to-transparent pointer-events-none" />
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-[#334155]/30 pb-1.5">
                          <span className="text-[10px] font-mono text-cyan-400">Heatmap / Stats</span>
                          <span className="text-[9px] font-mono text-[#06b6d4]">XP: 4,810</span>
                        </div>
                        <div className="grid grid-cols-8 gap-1 py-1.5 h-14">
                          {[...Array(16)].map((_, idx) => {
                            const colors = ["bg-cyan-950", "bg-cyan-900/80", "bg-[#06b6d4]/40", "bg-[#06b6d4]", "bg-[#22d3ee]"];
                            const col = colors[idx % colors.length];
                            return (
                              <div key={idx} className={`w-full h-3 rounded-[2px] ${col} group-hover:scale-105 transition-all duration-300`} />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                case "Impossible Quiz Generator":
                  return (
                    <div className="w-full h-32 bg-[#0f172a] rounded-t-xl relative overflow-hidden border-b border-[#334155]/40 flex items-center justify-center p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#22d3ee]/5 to-transparent pointer-events-none" />
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-[#334155]/30 pb-1.5">
                          <span className="text-[10px] font-mono text-[#22d3ee]">AI Twin Opponent</span>
                          <span className="text-[9px] font-mono text-cyan-400">Round 3</span>
                        </div>
                        <div className="flex justify-between items-center py-2 h-14 gap-2">
                          <div className="flex-1 bg-[#1e293b]/80 border border-cyan-900/30 rounded p-1 text-[8px] font-mono text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                            Player: Active
                          </div>
                          <div className="text-[8px] font-mono text-[#f8fafc]/30">VS</div>
                          <div className="flex-1 bg-[#1e293b]/80 border border-red-950 rounded p-1 text-[8px] font-mono text-red-400 group-hover:border-red-500/30 transition-all">
                            AI Twin: Thinking...
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "GTA 6 Hub":
                  return (
                    <div className="w-full h-32 bg-[#0f172a] rounded-t-xl relative overflow-hidden border-b border-[#334155]/40 flex items-center justify-center p-3">
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-[#334155]/30 pb-1.5">
                          <span className="text-[10px] font-mono text-orange-400">Content / Countdown</span>
                          <span className="text-[9px] font-mono text-orange-500 animate-pulse font-bold">LIVE</span>
                        </div>
                        <div className="flex justify-center items-center h-14 py-2 gap-1 font-mono">
                          <div className="bg-[#1e293b] p-1 rounded border border-[#334155]/40 text-center w-10">
                            <span className="text-[9px] text-[#22d3ee] block font-bold group-hover:text-orange-400 transition-colors">412</span>
                            <span className="text-[6px] text-[#f8fafc]/40 block uppercase">Days</span>
                          </div>
                          <div className="bg-[#1e293b] p-1 rounded border border-[#334155]/40 text-center w-10">
                            <span className="text-[9px] text-[#22d3ee] block font-bold group-hover:text-orange-400 transition-colors">18</span>
                            <span className="text-[6px] text-[#f8fafc]/40 block uppercase">Hrs</span>
                          </div>
                          <div className="bg-[#1e293b] p-1 rounded border border-[#334155]/40 text-center w-10">
                            <span className="text-[9px] text-[#22d3ee] block font-bold group-hover:text-orange-400 transition-colors">54</span>
                            <span className="text-[6px] text-[#f8fafc]/40 block uppercase">Min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            };

            return (
              <div
                key={project.name}
                className="group flex flex-col justify-between bg-[#1e293b] border hover:scale-[1.03] hover:-translate-y-1 shadow-xl shadow-black/15 transition-all duration-300 rounded-xl overflow-hidden cursor-default focus-within:ring-2 focus-within:ring-[#06b6d4] border-[#334155]/60 hover:border-[#06b6d4]/40 hover:shadow-[#06b6d4]/10 hover:shadow-lg"
              >
                {/* Simulated SVG Interactive Preview */}
                <div className="overflow-hidden bg-[#0f172a] relative">
                  <div className="transform group-hover:scale-[1.05] group-hover:rotate-0 transition-transform duration-500">
                    {renderSimulatedPreview()}
                  </div>
                </div>

                {/* Card Main Area - padding unified to p-6 sm:p-8 */}
                <div className="p-6 sm:p-8 relative flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header & Status Badge */}
                    <div className="flex justify-between items-start gap-4 mb-5">
                      <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#06b6d4]/85 uppercase font-mono">
                        <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{project.category}</span>
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold font-mono border whitespace-nowrap ${
                          project.statusBadge === "Live"
                            ? "bg-[#06b6d4] text-white border-transparent"
                            : "bg-[#8b5cf6] text-white border-transparent"
                        }`}
                      >
                        {project.statusBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#f8fafc] group-hover:text-[#06b6d4] transition-colors duration-200">
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
                        className="text-xs font-medium px-2.5 py-1 rounded-md border font-mono transition-colors duration-200 bg-[#0f172a] border-[#334155]/40 text-[#f8fafc]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons & Case Study Trigger */}
                <div className="px-6 py-4 sm:px-8 sm:py-5 bg-[#0f172a]/40 border-t border-[#334155]/50 flex flex-col sm:flex-row gap-3">
                  <div className="flex gap-2 w-full">
                    {project.liveUrl === "#" ? (
                      <button
                        disabled
                        title="Coming Soon"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#f8fafc]/30 text-xs sm:text-sm font-medium cursor-not-allowed transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Coming Soon</span>
                      </button>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#06b6d4] hover:bg-[#22d3ee] text-white text-xs sm:text-sm font-medium shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[44px]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.sourceUrl === "#" ? (
                      <button
                        disabled
                        title="Coming Soon"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#1e293b]/40 border border-[#334155]/20 text-[#f8fafc]/25 text-xs sm:text-sm font-medium cursor-not-allowed transition-all duration-200"
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
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-[#f8fafc] text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[44px]"
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

                  {/* Case Study Button */}
                  {["InsightLoop", "DocSim Checker", "Clario — Untangle Confusing Information", "NOKY"].includes(project.name) && (
                    <button
                      onClick={() => {
                        onOpenCaseStudy?.(project.name);
                      }}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] border border-[#334155]/60 hover:border-[#06b6d4]/40 text-[#06b6d4] text-xs sm:text-sm font-semibold transition-all duration-200 min-h-[44px]"
                    >
                      <span>View Case Study</span>
                    </button>
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

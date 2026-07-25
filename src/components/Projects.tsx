"use client";

import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  category: string;
  statusBadge: string;
  description: string;
  techTags: string[];
  liveUrl: string;
  sourceUrl: string;
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      name: "Freelance Ops Toolkit",
      category: "Freelancer Productivity Suite",
      statusBadge: "Live",
      description:
        "Free, no-login web app with 15 tools for freelancers. Built for speed and zero friction — no accounts, no paywalls.",
      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      name: "DocSim Checker",
      category: "AI & Natural Language Processing",
      statusBadge: "AI Powered",
      description:
        "Full-stack document similarity checker with a hand-written TF-IDF engine (built to fit serverless size limits), Gemini API integration, and an editorial-styled PDF export.",
      techTags: ["Next.js", "Python/Flask", "Supabase", "Gemini API"],
      liveUrl: "#",
      sourceUrl: "#",
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
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase font-mono-accent">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc]">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]/60 max-w-xl mx-auto">
            A look at my primary, live projects designed for high user utility, clean typography, and robust backend structures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsList.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col justify-between bg-[#1e293b] border border-[#334155]/60 hover:border-[#3b82f6]/40 rounded-xl overflow-hidden transition-all duration-300 shadow-xl shadow-black/15 hover:shadow-[#3b82f6]/5"
            >
              {/* Card Main Area */}
              <div className="p-6 sm:p-8 relative">

                {/* Header & Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#3b82f6]/85 uppercase font-mono-accent">
                    {project.category}
                  </span>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold font-mono-accent border ${
                      project.statusBadge === "Live"
                        ? "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20"
                        : "bg-[#3b82f6]/10 text-[#60a5fa] border-[#3b82f6]/20"
                    }`}
                  >
                    {project.statusBadge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] mb-3 group-hover:text-[#3b82f6] transition-colors duration-200">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#f8fafc]/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#0f172a] border border-[#334155]/40 text-[#f8fafc]/60 font-mono-accent"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#3b82f6]/20 border border-[#3b82f6]/30 text-[#f8fafc]/40 text-sm font-medium cursor-not-allowed transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </button>
                ) : (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium shadow-sm transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.sourceUrl === "#" ? (
                  <button
                    disabled
                    title="Coming Soon"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#1e293b]/50 border border-[#334155]/30 text-[#f8fafc]/30 text-sm font-medium cursor-not-allowed transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4 fill-current text-[#f8fafc]/30"
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
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-[#f8fafc] text-sm font-medium transition-all duration-200"
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
          ))}
        </div>

      </div>
    </section>
  );
}

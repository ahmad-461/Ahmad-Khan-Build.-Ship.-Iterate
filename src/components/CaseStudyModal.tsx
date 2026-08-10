"use client";

import { useEffect } from "react";
import { X, CheckCircle2, Settings, Goal } from "lucide-react";

export interface CaseStudyData {
  projectName: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  outcome: string;
}

export const caseStudies: Record<string, CaseStudyData> = {
  "InsightLoop": {
    projectName: "InsightLoop",
    problem: "Traditional Business Intelligence tools rely on expensive database servers and compromise security by transmitting sensitive customer datasets to external cloud servers.",
    solution: "A local-first, zero-friction analytical engine compiling and processing CSV/Excel files client-side using DuckDB-WASM, and integrating user-friendly Gemini AI translation.",
    keyFeatures: [
      "DuckDB-WASM analytical parsing entirely in-browser",
      "Real-time Gemini SQL generation from natural language queries",
      "Robust client state and visual charts via Chart.js/SVG",
      "PDF exports compiled completely inside client threads via jsPDF"
    ],
    technologies: ["Next.js", "TypeScript", "DuckDB-WASM", "Gemini API", "Supabase", "jsPDF"],
    outcome: "Designed to deliver instant spreadsheet intelligence and visual dashboards locally under 3 seconds, preserving 100% data privacy and eliminating ongoing server database costs."
  },
  "DocSim Checker": {
    projectName: "DocSim Checker",
    problem: "Serverless runtime environments have tight size and bundle constraints, making standard heavy Python NLP/similarity libraries near-impossible to deploy effectively.",
    solution: "A hand-built, highly optimized Javascript/TS mathematical TF-IDF engine coupled directly with standard LLM semantic intelligence layers.",
    keyFeatures: [
      "In-house written TF-IDF vectorization algorithm fitting standard bundle constraints",
      "High-speed cosine similarity document math scoring",
      "Context-aware semantic refinement checks via the Gemini API",
      "Streamlined editorial layout design for exported similarity reports"
    ],
    technologies: ["Next.js", "Python/Flask", "Gemini API", "Supabase", "Tailwind CSS"],
    outcome: "Designed to run near-instant mathematical and semantic plagiarism checks with precision inside serverless runtime memory ceilings."
  },
  "Clario — Untangle Confusing Information": {
    projectName: "Clario — Untangle Confusing Information",
    problem: "Average consumers struggle with dense, deceptive fine print and legal jargon in agreements, leaving them vulnerable to unfavorable hidden liabilities.",
    solution: "A translation intelligence client that isolates and untangles long, complex legalese contracts into human-readable target-audience breakdowns.",
    keyFeatures: [
      "Tailored language modes adapting text to students, seniors, or teachers",
      "Automated risk detection highlighting scam and dark patterns",
      "Active clause analyzer identifying extreme obligations instantly",
      "Color-coded warning hierarchy for high, medium, and low concerns"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Gemini API", "Vercel"],
    outcome: "Designed to significantly minimize fine-print comprehension fatigue, flagging hidden risks and liabilities before contracts are finalized."
  },
  "NOKY": {
    projectName: "NOKY",
    problem: "Standard typing-speed apps rely on boring, repetitive preset text strings and lack custom tracking, leading to rapid user drop-off and lack of skill growth.",
    solution: "A fully gamified retro-terminal training experience featuring highly responsive AI-tailored text scripts and detailed visual feedback loops.",
    keyFeatures: [
      "Adaptive text generation matching passages to current user skill gaps",
      "Interactive keyboard layout heatmap reflecting absolute speed & accuracy",
      "Full progressive gamification: streaks, achievements, and level-ups",
      "Real-time Supabase leaderboards prompting high user return rates"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API"],
    outcome: "Designed to boost keyboard typing practice retention and proficiency through highly engaging, adaptive progression curves."
  }
};

interface CaseStudyModalProps {
  projectName: string | null;
  onClose: () => void;
}

export default function CaseStudyModal({ projectName, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (projectName) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [projectName]);

  if (!projectName) return null;

  const data = caseStudies[projectName];
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Card */}
      <div className="relative bg-[#1e293b]/95 border border-[#334155] rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl shadow-cyan-950/50 flex flex-col focus:outline-none">

        {/* Header */}
        <div className="sticky top-0 bg-[#1e293b]/95 backdrop-blur-sm border-b border-[#334155]/60 px-6 py-5 flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
              Deep Dive Case Study
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] mt-0.5">
              {data.projectName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#0f172a] border border-[#334155]/60 hover:border-red-500/50 text-slate-400 hover:text-red-400 focus-visible:ring-2 focus-visible:ring-[#06b6d4] transition-all"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">

          {/* Problem Statement */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              The Problem
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-3.5 border-l-2 border-red-500/20">
              {data.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#06b6d4] font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
              The Solution
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed pl-3.5 border-l-2 border-[#06b6d4]/20">
              {data.solution}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Key Architectural Features
            </h4>
            <ul className="grid grid-cols-1 gap-3 pl-1">
              {data.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-[#0f172a]/50 p-3 rounded-lg border border-[#334155]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-mono flex items-center gap-2">
              <Settings className="w-4 h-4 text-amber-400" />
              Technologies Leveraged
            </h4>
            <div className="flex flex-wrap gap-2 pl-1">
              {data.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-2.5 py-1 rounded bg-[#0f172a] border border-[#334155]/50 text-slate-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Design Intent Outcome */}
          <div className="space-y-3 bg-[#0f172a]/40 p-5 rounded-xl border border-[#334155]/50">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#22d3ee] font-mono flex items-center gap-2">
              <Goal className="w-4 h-4 text-[#22d3ee]" />
              Primary Design Outcomes
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
              &ldquo;{data.outcome}&rdquo;
            </p>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-6 bg-[#0f172a]/40 border-t border-[#334155]/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#06b6d4] hover:bg-[#22d3ee] text-white text-sm font-semibold shadow-md transition-all duration-200"
          >
            Acknowledge & Close
          </button>
        </div>

      </div>
    </div>
  );
}

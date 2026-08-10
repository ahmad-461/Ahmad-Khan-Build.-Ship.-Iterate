"use client";

import { Brain, BarChart3, AppWindow, Gamepad2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function WhatIActuallyDo() {
  const areas = [
    {
      title: "AI Products",
      icon: <Brain className="w-6 h-6 text-[#06b6d4]" />,
      desc: "Intelligent applications using LLMs, AI APIs, document intelligence and automation.",
      tag: "Generative AI",
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="w-6 h-6 text-[#06b6d4]" />,
      desc: "Dashboards, analytics systems, data processing and insight-driven products.",
      tag: "Business Intelligence",
    },
    {
      title: "Full-Stack Applications",
      icon: <AppWindow className="w-6 h-6 text-[#06b6d4]" />,
      desc: "Complete web applications from frontend UI to backend, APIs, databases and deployment.",
      tag: "End-to-End Dev",
    },
    {
      title: "Interactive Experiences",
      icon: <Gamepad2 className="w-6 h-6 text-[#06b6d4]" />,
      desc: "Gamified, interactive and highly engaging web experiences.",
      tag: "Gamification & UI",
    },
  ];

  return (
    <section
      id="what-i-do"
      className="py-24 md:py-32 bg-[#0b0f19] border-t border-[#334155]/30 relative overflow-hidden"
    >
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#06b6d4]/5 rounded-full blur-[120px] pointer-events-none" />

      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
            Core Positioning
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
            I build intelligent digital products.
          </h2>
          <p className="text-sm sm:text-base text-[#f8fafc]/60 max-w-2xl mx-auto leading-relaxed">
            Focused on creating reliable, high-performance web applications that bridge advanced artificial intelligence with seamless user experiences.
          </p>
        </div>

        {/* Polished Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-xl bg-[#1e293b]/60 border border-[#334155]/50 hover:border-[#06b6d4]/40 hover:bg-[#1e293b]/95 hover:shadow-xl hover:shadow-[#06b6d4]/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner Glow Effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#06b6d4]/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:bg-[#06b6d4]/10" />

              <div className="flex items-start gap-4 sm:gap-5">
                {/* Icon Container */}
                <div className="p-3 rounded-lg bg-[#0f172a] border border-[#334155]/60 group-hover:bg-[#06b6d4]/10 group-hover:border-[#06b6d4]/30 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  {area.icon}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-[#f8fafc] text-lg sm:text-xl group-hover:text-[#06b6d4] transition-colors duration-200">
                      {area.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[#06b6d4]/80 bg-[#06b6d4]/5 px-2 py-0.5 rounded border border-[#06b6d4]/10">
                      {area.tag}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#f8fafc]/70 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}

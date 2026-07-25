"use client";

import { Award, Briefcase, Cpu } from "lucide-react";

export default function About() {
  const stats = [
    {
      id: 1,
      metric: "2+",
      label: "Live Projects",
      desc: "Production-ready, interactive web tools used daily.",
      icon: <Award className="w-6 h-6 text-[#3b82f6]" />,
    },
    {
      id: 2,
      metric: "1",
      label: "Full-Stack App",
      desc: "End-to-end integration with custom logic & secure databases.",
      icon: <Briefcase className="w-6 h-6 text-[#3b82f6]" />,
    },
    {
      id: 3,
      metric: "3+",
      label: "AI Integrations",
      desc: "Deploying generative API workflows & prompt-engineered features.",
      icon: <Cpu className="w-6 h-6 text-[#3b82f6]" />,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[250px] h-[250px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & About Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase font-mono-accent">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc]">
                Driving Software Innovation as an Architect
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#f8fafc]/80 leading-relaxed">
              I&apos;m a Computer Science student at Nawaz Sharif University of Agriculture, Multan, building portfolio projects for internship applications.
            </p>

            <p className="text-base sm:text-lg text-[#f8fafc]/80 leading-relaxed">
              I work as product owner and decision-maker, directing AI coding agents (<span className="text-[#3b82f6] font-medium">Jules by Google Labs</span>) for implementation while handling architecture, prompt design, and design direction myself. My projects focus on freelancer tooling, document processing, and polished user interfaces.
            </p>
          </div>

          {/* Right Column: Key Stats Row */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className="text-xl font-bold text-[#f8fafc] pb-2 border-b border-[#334155]">
              By The Numbers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="p-5 rounded-xl bg-[#1e293b] border border-[#334155]/60 hover:border-[#3b82f6]/50 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg shadow-black/10"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl font-extrabold text-[#3b82f6] tracking-tight group-hover:scale-105 transition-transform duration-200">
                      {stat.metric}
                    </span>
                    <div className="p-2 rounded-lg bg-[#0f172a] border border-[#334155]/40 group-hover:bg-[#3b82f6]/10 transition-colors duration-200">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#f8fafc] mb-1">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-[#f8fafc]/60 leading-normal">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

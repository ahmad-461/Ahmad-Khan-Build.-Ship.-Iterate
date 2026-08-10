"use client";

import { Award, Briefcase, Cpu, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const stats = [
    {
      id: 1,
      metric: "7+",
      label: "Live Projects",
      desc: "Production-ready, interactive web tools used daily.",
      icon: <Award className="w-5 h-5 text-[#06b6d4]" />,
    },
    {
      id: 2,
      metric: "7",
      label: "Full-Stack Apps",
      desc: "End-to-end integration with custom logic & secure databases.",
      icon: <Briefcase className="w-5 h-5 text-[#06b6d4]" />,
    },
    {
      id: 3,
      metric: "6+",
      label: "AI Integrations",
      desc: "Deploying generative API workflows & prompt-engineered features.",
      icon: <Cpu className="w-5 h-5 text-[#06b6d4]" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#0f172a] border-t border-[#334155]/20 relative overflow-hidden"
    >
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & About Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
                Driving Software Innovation as an Architect
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#f8fafc]/70 leading-relaxed max-w-2xl">
              I&apos;m a Computer Science student at Nawaz Sharif University of Agriculture, Multan, building portfolio projects for internship applications.
            </p>

            <p className="text-sm sm:text-base text-[#f8fafc]/70 leading-relaxed max-w-2xl">
              I work as product owner and decision-maker, directing AI coding agents (<span className="text-[#06b6d4] font-medium">Jules by Google Labs</span>) for implementation while handling architecture, prompt design, and design direction myself. My projects focus on freelancer tooling, document processing, and polished user interfaces.
            </p>

            {/* Added Get In Touch action button - flatter & minimal */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-md bg-[#06b6d4] hover:bg-[#22d3ee] text-white font-medium transition-colors duration-200 focus-visible:outline-none"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Stats Row */}
          <div className="lg:col-span-6 flex flex-col space-y-6 w-full">
            <h3 className="text-lg font-bold text-[#f8fafc] pb-2 border-b border-[#334155]/20">
              By The Numbers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="p-5 rounded-lg bg-[#1e293b]/40 border border-[#334155]/30 hover:border-[#06b6d4]/30 transition-all duration-200 flex flex-col justify-between h-full focus-within:outline-none"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-2xl font-bold text-[#06b6d4] tracking-tight">
                      {stat.metric}
                    </span>
                    <div className="text-[#06b6d4]/80">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#f8fafc] mb-1 uppercase tracking-wider">
                      {stat.label}
                    </h4>
                    <p className="text-[11px] text-[#f8fafc]/50 leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}

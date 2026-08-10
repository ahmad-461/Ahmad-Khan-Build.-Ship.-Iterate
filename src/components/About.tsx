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
      icon: <Award className="w-6 h-6 text-[#06b6d4]" />,
    },
    {
      id: 2,
      metric: "7",
      label: "Full-Stack Apps",
      desc: "End-to-end integration with custom logic & secure databases.",
      icon: <Briefcase className="w-6 h-6 text-[#06b6d4]" />,
    },
    {
      id: 3,
      metric: "6+",
      label: "AI Integrations",
      desc: "Deploying generative API workflows & prompt-engineered features.",
      icon: <Cpu className="w-6 h-6 text-[#06b6d4]" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-[250px] h-[250px] bg-[#06b6d4]/5 rounded-full blur-[100px] pointer-events-none" />

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

            <p className="text-base sm:text-lg text-[#f8fafc]/80 leading-relaxed max-w-2xl">
              I&apos;m a Computer Science student at Nawaz Sharif University of Agriculture, Multan, building portfolio projects for internship applications.
            </p>

            <p className="text-base sm:text-lg text-[#f8fafc]/80 leading-relaxed max-w-2xl">
              I work as product owner and decision-maker, directing AI coding agents (<span className="text-[#06b6d4] font-medium">Jules by Google Labs</span>) for implementation while handling architecture, prompt design, and design direction myself. My projects focus on freelancer tooling, document processing, and polished user interfaces.
            </p>

            {/* Added Get In Touch action button - ensuring optimal mobile click size */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 sm:py-3 rounded-lg bg-[#06b6d4] hover:bg-[#22d3ee] text-white font-medium shadow-md shadow-[#06b6d4]/20 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[44px]"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Stats Row */}
          <div className="lg:col-span-6 flex flex-col space-y-6 w-full">
            <h3 className="text-xl font-bold text-[#f8fafc] pb-2 border-b border-[#334155]">
              By The Numbers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="p-5 sm:p-6 rounded-xl bg-[#1e293b] border border-[#334155]/60 hover:border-[#06b6d4]/50 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg shadow-black/10 hover:shadow-[#06b6d4]/5 focus-within:ring-2 focus-within:ring-[#06b6d4] focus-within:outline-none"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl font-extrabold text-[#06b6d4] tracking-tight group-hover:scale-105 transition-transform duration-200">
                      {stat.metric}
                    </span>
                    <div className="p-2 rounded-lg bg-[#0f172a] border border-[#334155]/40 group-hover:bg-[#06b6d4]/10 transition-colors duration-200">
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
      </ScrollReveal>
    </section>
  );
}

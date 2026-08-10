"use client";

import { useState, useRef } from "react";
import { Mail, Phone, ArrowRight, Sparkles, Database, Gamepad2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type IntentType = "Internship" | "Freelance Project" | "Collaboration" | "AI Project" | "Just Connect";

interface ContextConfig {
  helperText: string;
  placeholder: string;
  subjectPreset: string;
}

const contextConfigs: Record<IntentType, ContextConfig> = {
  "Internship": {
    helperText: "Let's discuss how I can contribute to your engineering team as an intern.",
    placeholder: "Tell me about your team, tech stack, and internship timeline...",
    subjectPreset: "[Internship Opportunity]"
  },
  "Freelance Project": {
    helperText: "Let's outline your scope, target audience, and engineering goals.",
    placeholder: "Tell me about your product requirements, desired deliverables, and target deadline...",
    subjectPreset: "[Freelance Project Inquiry]"
  },
  "Collaboration": {
    helperText: "Let's create something impactful or work on open-source together.",
    placeholder: "Tell me about your project idea, technologies you're planning to use, and how we can collaborate...",
    subjectPreset: "[Collaboration Proposal]"
  },
  "AI Project": {
    helperText: "Let's build smart AI applications, automations, or custom model integrations.",
    placeholder: "Tell me about the data/documents you want to parse, workflows to automate, or your AI goals...",
    subjectPreset: "[AI Project Consultation]"
  },
  "Just Connect": {
    helperText: "Always excited to meet other creators and expand my professional network.",
    placeholder: "Let's grab a virtual coffee! Introduce yourself and tell me what you're currently working on...",
    subjectPreset: "[Networking / Connection]"
  }
};

export default function Contact() {
  const [selectedIntent, setSelectedIntent] = useState<IntentType>("Collaboration");
  const [activeBuildOption, setActiveBuildOption] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const formRef = useRef<HTMLFormElement>(null);

  const contactLinks = [
    {
      name: "Email Address",
      value: "ahmad.khan8747763@gmail.com",
      href: "mailto:ahmad.khan8747763@gmail.com",
      icon: <Mail className="w-5 h-5 text-[#06b6d4]" />,
    },
    {
      name: "Phone Number",
      value: "+92 319 8747763",
      href: "tel:+923198747763",
      icon: <Phone className="w-5 h-5 text-[#06b6d4]" />,
    },
    {
      name: "GitHub Profile",
      value: "github.com/ahmad-461",
      href: "https://github.com/ahmad-461",
      icon: (
        <svg
          className="w-5 h-5 fill-[#06b6d4]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: "LinkedIn Network",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/ahmad-khan-77441833a",
      icon: (
        <svg
          className="w-5 h-5 fill-[#06b6d4]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const buildOptions = [
    {
      id: "ai-product",
      title: "AI Product",
      desc: "Build an intelligent AI-powered product.",
      intent: "AI Project" as IntentType,
      icon: <Sparkles className="w-5 h-5 text-[#06b6d4]" />,
    },
    {
      id: "data-platform",
      title: "Data Platform",
      desc: "Build a dashboard, analytics system or data-driven application.",
      intent: "Freelance Project" as IntentType,
      icon: <Database className="w-5 h-5 text-[#06b6d4]" />,
    },
    {
      id: "interactive-experience",
      title: "Interactive Experience",
      desc: "Build an engaging interactive or gamified web experience.",
      intent: "Collaboration" as IntentType,
      icon: <Gamepad2 className="w-5 h-5 text-[#06b6d4]" />,
    },
  ];

  const handleBuildSelect = (opt: typeof buildOptions[number]) => {
    setActiveBuildOption(opt.id);
    setSelectedIntent(opt.intent);

    // Smooth scroll to form context
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateForm = () => {
    const tempErrors: typeof errors = {};
    if (!name.trim()) {
      tempErrors.name = "Full name is required.";
    }
    if (!email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!message.trim()) {
      tempErrors.message = "Message text cannot be empty.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const config = contextConfigs[selectedIntent];
    const subject = `${config.subjectPreset} Message from ${name}`;
    const body = `Hi Ahmad,\n\nName: ${name}\nEmail: ${email}\nReason: ${selectedIntent}\n\nMessage:\n${message}\n\nSent from your Portfolio.`;

    const mailtoUrl = `mailto:ahmad.khan8747763@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Trigger opening of email client safely
    window.location.href = mailtoUrl;
  };

  const activeConfig = contextConfigs[selectedIntent];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#0f172a] border-t border-[#334155]/40 relative overflow-hidden"
    >
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#06b6d4]/5 rounded-full blur-[100px] pointer-events-none" />

      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">

        {/* Step 5: "Build With Me" Interaction */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
              Build With Me
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f8fafc] tracking-tight">
              What should we build next?
            </h3>
            <p className="text-sm text-[#f8fafc]/60 max-w-xl mx-auto font-sans leading-relaxed">
              Select one of the blueprints below to automatically configure the contact form and start our discussion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildOptions.map((opt) => {
              const isActive = activeBuildOption === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleBuildSelect(opt)}
                  className={`group p-6 rounded-xl bg-[#1e293b]/50 border text-left transition-all duration-300 flex flex-col justify-between items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06b6d4] min-h-[150px] ${
                    isActive
                      ? "border-[#06b6d4] bg-[#1e293b]/90 shadow-lg shadow-[#06b6d4]/5 scale-[1.03]"
                      : "border-[#334155]/50 hover:border-[#06b6d4]/40 hover:bg-[#1e293b]/85"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg border transition-all ${
                      isActive ? "bg-[#06b6d4]/10 border-[#06b6d4]/40" : "bg-[#0f172a] border-[#334155]/60 group-hover:bg-[#06b6d4]/10"
                    }`}>
                      {opt.icon}
                    </div>
                    <span className="font-bold text-[#f8fafc] text-sm font-mono tracking-tight group-hover:text-[#06b6d4]">
                      {opt.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#f8fafc]/75 leading-relaxed mt-4">
                    {opt.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Redesigned Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start pt-8 border-t border-[#334155]/30">

          {/* Left Side: General Info, Availability Card & Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
                Connect
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
                Let&apos;s build something great.
              </h2>
              <p className="text-sm sm:text-base text-[#f8fafc]/60 leading-relaxed max-w-md">
                I am actively seeking professional connections, internships, and full-stack/AI collaboration opportunities. Reach out via the form, or standard communication channels.
              </p>
            </div>

            {/* Premium Availability Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#1e293b]/70 border border-[#334155]/50 hover:border-[#06b6d4]/30 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#22c55e]/5 rounded-bl-full pointer-events-none" />

              {/* Status Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#334155]/40">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono">
                  Currently open to opportunities
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open
                </span>
              </div>

              {/* Open Positions List */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                  <span>Internships</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                  <span>Freelance Projects</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                  <span>AI / Full-Stack Roles</span>
                </div>
              </div>

              {/* Remote Friendly Badge */}
              <div className="mt-5 pt-3 border-t border-[#334155]/30 flex justify-between items-center">
                <span className="text-[11px] text-slate-400 font-mono">Location Flexibility:</span>
                <span className="text-[11px] font-mono font-bold text-[#06b6d4] uppercase tracking-wider bg-[#06b6d4]/5 px-2.5 py-0.5 rounded border border-[#06b6d4]/10">
                  Remote Friendly
                </span>
              </div>
            </div>

            {/* Direct Social/Contact Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-xl bg-[#1e293b]/40 border border-[#334155]/50 hover:border-[#06b6d4]/30 hover:bg-[#1e293b]/70 transition-all duration-200 shadow-md shadow-black/5 text-left focus-visible:ring-1 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[110px] flex flex-col justify-between"
                >
                  <div className="p-2 w-fit rounded-lg bg-[#0f172a] border border-[#334155]/60 group-hover:bg-[#06b6d4]/10 group-hover:border-[#06b6d4]/30 transition-all flex items-center justify-center">
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5 font-mono">
                      {link.name}
                    </h4>
                    <p className="text-xs font-bold text-slate-200 group-hover:text-[#06b6d4] transition-colors duration-150 truncate">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Smart Form Card */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-xl bg-[#1e293b] border border-[#334155]/60 hover:border-[#334155]/85 transition-all shadow-xl shadow-black/15 space-y-6 text-left"
            >
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc]">
                  Have an idea worth building?
                </h3>
                <p className="text-xs sm:text-sm text-[#f8fafc]/50">
                  Fill out the template below and we will trigger a structured message instantly.
                </p>
              </div>

              {/* Selected Reason / Intent Pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                  Select Intent / Purpose
                </label>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(contextConfigs) as IntentType[]).map((intent) => {
                    const isActive = selectedIntent === intent;
                    return (
                      <button
                        type="button"
                        key={intent}
                        onClick={() => setSelectedIntent(intent)}
                        className={`text-xs px-3.5 py-2 rounded-lg border font-mono transition-all focus-visible:ring-1 focus-visible:ring-[#06b6d4] focus-visible:outline-none ${
                          isActive
                            ? "bg-[#06b6d4] text-white border-transparent shadow shadow-[#06b6d4]/20 font-bold"
                            : "bg-[#0f172a]/60 border-[#334155]/40 hover:border-[#06b6d4]/40 text-slate-300 hover:text-[#06b6d4]"
                        }`}
                      >
                        {intent}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="E.g., John Doe"
                    className={`w-full bg-[#0f172a] border rounded-lg px-4 py-2.5 text-sm text-[#f8fafc] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#06b6d4] transition-all ${
                      errors.name ? "border-red-500/50" : "border-[#334155]/60 hover:border-[#334155]/90"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 font-mono block">{errors.name}</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email-input"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="e.g., recruiter@company.com"
                    className={`w-full bg-[#0f172a] border rounded-lg px-4 py-2.5 text-sm text-[#f8fafc] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#06b6d4] transition-all ${
                      errors.email ? "border-red-500/50" : "border-[#334155]/60 hover:border-[#334155]/90"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 font-mono block">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Textarea field with dynamic placeholder & config text */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="message-input" className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                    Your Message
                  </label>
                  <span className="text-[10px] text-[#06b6d4] font-mono">
                    Dynamic Template Loaded
                  </span>
                </div>

                {/* Custom active Context Helper Banner */}
                <div className="px-3.5 py-2.5 rounded bg-[#0f172a]/80 border-l-2 border-[#06b6d4] text-[11px] sm:text-xs text-[#06b6d4]/90 font-mono leading-relaxed">
                  {activeConfig.helperText}
                </div>

                <textarea
                  id="message-input"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder={activeConfig.placeholder}
                  className={`w-full bg-[#0f172a] border rounded-lg px-4 py-2.5 text-sm text-[#f8fafc] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#06b6d4] transition-all resize-none ${
                    errors.message ? "border-red-500/50" : "border-[#334155]/60 hover:border-[#334155]/90"
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-400 font-mono block">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3 rounded-lg bg-[#06b6d4] hover:bg-[#22d3ee] text-white font-bold shadow-md shadow-[#06b6d4]/20 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[44px]"
              >
                <span>Draft Email Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </ScrollReveal>
    </section>
  );
}

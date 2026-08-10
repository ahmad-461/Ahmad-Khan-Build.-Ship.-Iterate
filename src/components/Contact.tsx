"use client";

import { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type InquiryReason = "Internship Opportunity" | "Freelance Project" | "Collaboration" | "General Inquiry";

export default function Contact() {
  const [selectedReason, setSelectedReason] = useState<InquiryReason>("Collaboration");

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

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

    const subject = `[${selectedReason}] Message from ${name}`;
    const body = `Hi Ahmad,\n\nName: ${name}\nEmail: ${email}\nReason: ${selectedReason}\n\nMessage:\n${message}\n\nSent from your Portfolio.`;

    const mailtoUrl = `mailto:ahmad.khan8747763@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Trigger opening of email client safely
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#0b0f19] border-t border-[#334155]/40 relative overflow-hidden"
    >
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#06b6d4]/5 rounded-full blur-[100px] pointer-events-none" />

      <ScrollReveal className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Let's Work Together & Availability & Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#06b6d4] uppercase font-mono">
                Connect
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f8fafc] tracking-tight">
                Let&apos;s Work Together
              </h2>
              <p className="text-sm sm:text-base text-[#f8fafc]/60 leading-relaxed max-w-md">
                Interested in working together, discussing an opportunity, or building something meaningful? I&apos;d love to hear from you.
              </p>
            </div>

            {/* Subtle Availability Indicator Card */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#1e293b]/50 border border-[#334155]/40 hover:border-[#06b6d4]/30 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#22c55e]/5 rounded-bl-full pointer-events-none" />

              {/* Status Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#334155]/40">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono">
                  Current Status
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>

              {/* Open Positions List */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                  <span>Software Engineering Internships</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                  <span>AI / Full-Stack Projects</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                  <span>Freelance Opportunities</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-mono">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                  <span>Technical Collaborations</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="grid grid-cols-2 gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-[#1e293b]/40 border border-[#334155]/50 hover:border-[#06b6d4]/30 hover:bg-[#1e293b]/70 transition-all duration-200 shadow-md shadow-black/5 text-left focus-visible:ring-1 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[110px] flex flex-col justify-between"
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

          {/* Right Column: Premium, Compact Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="p-6 sm:p-8 rounded-xl bg-[#1e293b] border border-[#334155]/60 hover:border-[#334155]/80 transition-all shadow-xl shadow-black/15 space-y-6 text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="John Doe"
                    className={`w-full bg-[#0f172a] border rounded-lg px-4 py-2.5 text-sm text-[#f8fafc] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#06b6d4] transition-all ${
                      errors.name ? "border-red-500/50" : "border-[#334155]/60 hover:border-[#334155]/90"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 font-mono block">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email-input"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="recruiter@company.com"
                    className={`w-full bg-[#0f172a] border rounded-lg px-4 py-2.5 text-sm text-[#f8fafc] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#06b6d4] transition-all ${
                      errors.email ? "border-red-500/50" : "border-[#334155]/60 hover:border-[#334155]/90"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 font-mono block">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Subject / Reason Choice Pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                  Subject / Reason
                </label>
                <div className="flex flex-wrap gap-2">
                  {(["Internship Opportunity", "Freelance Project", "Collaboration", "General Inquiry"] as InquiryReason[]).map((reason) => {
                    const isActive = selectedReason === reason;
                    return (
                      <button
                        type="button"
                        key={reason}
                        onClick={() => setSelectedReason(reason)}
                        className={`text-xs px-3.5 py-2 rounded-lg border font-mono transition-all focus-visible:ring-1 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[44px] ${
                          isActive
                            ? "bg-[#06b6d4] text-white border-transparent shadow shadow-[#06b6d4]/20 font-bold"
                            : "bg-[#0f172a]/60 border-[#334155]/40 hover:border-[#06b6d4]/40 text-slate-300 hover:text-[#06b6d4]"
                        }`}
                      >
                        {reason}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message-input" className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider block">
                  Message
                </label>
                <textarea
                  id="message-input"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="I'd love to discuss..."
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
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#06b6d4] hover:bg-[#22d3ee] text-white font-bold shadow-md shadow-[#06b6d4]/20 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[44px]"
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </ScrollReveal>
    </section>
  );
}

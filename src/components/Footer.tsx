"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-[#334155]/60 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">

        {/* Branding & Logo */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#f8fafc] tracking-tight">
            Muhammad Ahmad Khan
          </h3>
          <p className="text-sm text-[#3b82f6] font-semibold font-mono-accent uppercase tracking-wider">
            Build. Ship. Iterate.
          </p>
        </div>

        {/* Tech Credits */}
        <p className="text-xs sm:text-sm text-[#f8fafc]/50">
          Built with Next.js, styled with Tailwind CSS, deployed on Vercel
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-[#334155] mx-auto" />

        {/* Copyright */}
        <p className="text-xs text-gray-500 font-mono-accent">
          &copy; 2026 All rights reserved
        </p>

      </div>
    </footer>
  );
}

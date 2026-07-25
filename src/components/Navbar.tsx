"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-[#334155]/60 shadow-lg shadow-[#000000]/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Branding */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#f8fafc] hover:text-[#3b82f6] transition-colors rounded-md p-1.5 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Muhammad Ahmad Khan
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#f8fafc]/80 hover:text-[#3b82f6] transition-colors rounded-md py-1.5 px-2.5 focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button - Polished tap target to 44x44px minimum */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-[#f8fafc]/80 hover:text-[#3b82f6] hover:bg-[#1e293b] focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Smooth transition, safe tap targets */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-72 opacity-100 border-b border-[#334155]/60 bg-[#0f172a]"
            : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-5 space-y-1.5 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-[#f8fafc]/80 hover:text-[#3b82f6] hover:bg-[#1e293b] transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

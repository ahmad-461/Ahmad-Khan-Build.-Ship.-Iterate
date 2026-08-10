"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Fallback: If we are at the very top, active is "home"
      if (window.scrollY < 50) {
        setActiveSection("home");
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

  // Intersection Observer for scroll-spy active highlights
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-30% 0px -50% 0px", // Trigger when section is in the middle of the screen
        }
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-[#334155]/60 shadow-lg shadow-[#000000]/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Branding */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#f8fafc] hover:text-[#06b6d4] transition-colors rounded-md p-1.5 focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none"
            >
              Muhammad Ahmad Khan
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-1.5 px-1 lg:px-2 relative focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none rounded-md ${
                    isActive
                      ? "text-[#06b6d4]"
                      : "text-[#f8fafc]/80 hover:text-[#06b6d4]"
                  }`}
                >
                  {link.name}
                  {/* Active bottom border line */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#06b6d4] transition-all duration-300 origin-center ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button - Polished tap target to 44x44px minimum */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-[#f8fafc]/80 hover:text-[#06b6d4] hover:bg-[#1e293b] focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide-down directly under the header bar */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-80 opacity-100 border-t border-[#334155]/40 bg-[#0f172a]"
            : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-5 space-y-1 sm:px-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none ${
                  isActive
                    ? "text-[#06b6d4] bg-[#06b6d4]/10 border-l-4 border-[#06b6d4]"
                    : "text-[#f8fafc]/80 hover:text-[#06b6d4] hover:bg-[#1e293b]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

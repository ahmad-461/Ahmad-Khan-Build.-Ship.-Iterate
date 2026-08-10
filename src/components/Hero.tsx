"use client";

import { Terminal, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-between items-center overflow-hidden bg-[#0f172a]"
    >
      {/* Background Dot-Grid with Fade Radial Mask */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Exquisite, ultra-clean professional glow accents (no gamer-RGB style) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-[#06b6d4]/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[300px] h-[300px] bg-[#0891b2]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Elegant glowing vector lines running subtly in the background */}
      <div className="absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#06b6d4]/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0891b2]/10 to-transparent pointer-events-none" />

      {/* Top spacer to assist with centering */}
      <div className="hidden lg:block h-4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Text, Profile, Socials & CTA Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            {/* Circular profile avatar with cyan ring border & Tech Illustration */}
            <div
              style={{ animationDelay: "50ms" }}
              className="animate-fade-in-up flex items-center space-x-4"
            >
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#06b6d4]/40 to-[#22d3ee]/40 hover:from-[#06b6d4] hover:to-[#22d3ee] transition-all duration-300 shadow-md">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1e293b] flex items-center justify-center border border-[#334155] text-[#06b6d4]">
                  {/* Styled developer illustration tag icon */}
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#06b6d4]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6L2 12L8 18M16 6L22 12L16 18M10.5 20.5L13.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="absolute bottom-1.5 right-1.5 flex h-3.5 w-3.5 rounded-full bg-[#06b6d4] border-2 border-[#0f172a] animate-pulse" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold font-mono text-[#06b6d4] uppercase tracking-wider block">
                  Muhammad Ahmad Khan
                </span>
                <span className="text-[11px] sm:text-xs text-[#f8fafc]/60 font-mono block mt-0.5">
                  Full-Stack Developer & CS Student
                </span>
              </div>
            </div>

            {/* Greeting */}
            <div
              style={{ animationDelay: "150ms" }}
              className="animate-fade-in-up inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1e293b]/80 border border-[#334155]/60 text-xs sm:text-sm font-semibold font-mono text-[#06b6d4]"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#06b6d4] animate-pulse" />
              <span>Hi, I&apos;m Muhammad Ahmad Khan</span>
            </div>

            {/* Confident Headings: tracking-tighter, leading-tight */}
            <h1
              style={{ animationDelay: "200ms" }}
              className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f8fafc] leading-[1.1]"
            >
              Building AI-Powered Products &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-[#22d3ee] to-[#0891b2]">
                High-Performance Web Applications
              </span>
            </h1>

            {/* Subheading: max-width comfort constraint */}
            <p
              style={{ animationDelay: "300ms" }}
              className="animate-fade-in-up text-base sm:text-lg lg:text-xl text-[#f8fafc]/75 leading-relaxed max-w-2xl"
            >
              Full-Stack Developer & Computer Science Student — turning ideas into live, production-ready applications with Next.js and AI integration.
            </p>

            {/* Row of Understated Social Icons */}
            <div
              style={{ animationDelay: "350ms" }}
              className="animate-fade-in-up flex items-center space-x-4 pt-1"
            >
              <a
                href="https://github.com/ahmad-461"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-2 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-[#06b6d4]/50 text-[#f8fafc]/70 hover:text-[#06b6d4] hover:bg-[#06b6d4]/5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-khan-77441833a"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-[#06b6d4]/50 text-[#f8fafc]/70 hover:text-[#06b6d4] hover:bg-[#06b6d4]/5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:ahmad.khan8747763@gmail.com"
                title="Email"
                className="p-2 rounded-lg bg-[#1e293b] border border-[#334155] hover:border-[#06b6d4]/50 text-[#f8fafc]/70 hover:text-[#06b6d4] hover:bg-[#06b6d4]/5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none"
              >
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* CTA Buttons: standard focus ring states, rounded-lg, lift on hover, min 44px tap target */}
            <div
              style={{ animationDelay: "400ms" }}
              className="animate-fade-in-up flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 sm:py-3 rounded-lg bg-[#06b6d4] hover:bg-[#22d3ee] text-white font-medium shadow-md shadow-[#06b6d4]/20 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[44px]"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 sm:py-3 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-[#f8fafc] font-medium border border-[#334155] transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#06b6d4] focus-visible:outline-none min-h-[44px]"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Simulated Code Editor Snippet with proper VS Code Dark+ styling, 500ms delay */}
          <div
            style={{ animationDelay: "500ms" }}
            className="animate-fade-in-up lg:col-span-5 w-full relative group"
          >
            {/* Soft accent glow behind code editor */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#06b6d4]/10 to-[#22d3ee]/5 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

            <div className="relative w-full bg-[#1e1e1e] border border-[#334155]/60 rounded-xl shadow-2xl overflow-hidden shadow-black/50">
              {/* Refined Tab Bar */}
              <div className="flex flex-col bg-[#181818] border-b border-[#2d2d2d]">
                {/* Window Controls & Title */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#141414] border-b border-[#202020]/50">
                  <div className="flex space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider">Editor Workspace</span>
                  <div className="w-10" /> {/* Spacer */}
                </div>

                {/* Tabs */}
                <div className="flex items-end overflow-x-auto scrollbar-none font-mono text-xs text-[#858585]">
                  {/* Tab 1: Active */}
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[#1e1e1e] border-r border-[#2d2d2d] border-t-2 border-t-[#06b6d4] text-[#d4d4d4] cursor-default">
                    <Terminal className="w-3.5 h-3.5 text-[#06b6d4]" />
                    <span className="font-semibold">docsim-gemini.ts</span>
                  </div>
                  {/* Tab 2: Muted */}
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[#181818]/60 hover:bg-[#181818] border-r border-[#2d2d2d] hover:text-[#999] cursor-pointer transition-colors duration-150">
                    <Terminal className="w-3.5 h-3.5 text-[#858585]" />
                    <span>noky-ai.ts</span>
                  </div>
                  {/* Tab 3: Muted */}
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[#181818]/60 hover:bg-[#181818] border-r border-[#2d2d2d] hover:text-[#999] cursor-pointer transition-colors duration-150">
                    <Terminal className="w-3.5 h-3.5 text-[#858585]" />
                    <span>impossible-quiz.ts</span>
                  </div>
                </div>
              </div>

              {/* Code Panel — VS Code Dark+ Syntax Colors */}
              <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs font-mono leading-relaxed text-[#d4d4d4] bg-[#1e1e1e]">
                <pre className="table select-none w-full">
                  {/* Line 1 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">1</span>
                    <span className="table-cell text-[#6a9955]">{"// DocSim TF-IDF & Gemini API check"}</span>
                  </div>
                  {/* Line 2 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">2</span>
                    <span className="table-cell">
                      <span className="text-[#c586c0]">import</span> {"{"} <span className="text-[#4fc1ff]">GoogleGenAI</span> {"}"} <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">&quot;@google/genai&quot;</span>;
                    </span>
                  </div>
                  {/* Line 3 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">3</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 4 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">4</span>
                    <span className="table-cell">
                      <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">ai</span> = <span className="text-[#569cd6]">new</span> <span className="text-[#4fc1ff]">GoogleGenAI</span>({"{"} <span className="text-[#9cdcfe]">apiKey</span>: <span className="text-[#4fc1ff]">process.env.GEMINI_API_KEY</span> {"}"});
                    </span>
                  </div>
                  {/* Line 5 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">5</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 6 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">6</span>
                    <span className="table-cell">
                      <span className="text-[#569cd6]">export async function</span> <span className="text-[#dcdcaa]">checkSimilarity</span>(<span className="text-[#9cdcfe]">docA</span>, <span className="text-[#9cdcfe]">docB</span>) {"{"}
                    </span>
                  </div>
                  {/* Line 7 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">7</span>
                    <span className="table-cell text-[#6a9955]">
                      {"  // Check with custom TF-IDF engine"}
                    </span>
                  </div>
                  {/* Line 8 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">8</span>
                    <span className="table-cell">
                      {"  "}<span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">tfIdfScore</span> = <span className="text-[#4fc1ff]">tfIdfEngine</span>.<span className="text-[#dcdcaa]">compare</span>(<span className="text-[#9cdcfe]">docA</span>, <span className="text-[#9cdcfe]">docB</span>);
                    </span>
                  </div>
                  {/* Line 9 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">9</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 10 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">10</span>
                    <span className="table-cell">
                      {"  "}<span className="text-[#c586c0]">if</span> (<span className="text-[#9cdcfe]">tfIdfScore</span> &gt; <span className="text-[#b5cea8]">0.85</span>) {"{"}
                    </span>
                  </div>
                  {/* Line 11 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">11</span>
                    <span className="table-cell">
                      {"    "}<span className="text-[#c586c0]">return</span> {"{"} <span className="text-[#9cdcfe]">score</span>: <span className="text-[#9cdcfe]">tfIdfScore</span>, <span className="text-[#9cdcfe]">analysis</span>: <span className="text-[#ce9178]">&quot;High match.&quot;</span> {"}"};
                    </span>
                  </div>
                  {/* Line 12 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">12</span>
                    <span className="table-cell">
                      {"  "}{"}"}
                    </span>
                  </div>
                  {/* Line 13 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">13</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 14 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">14</span>
                    <span className="table-cell text-[#6a9955]">
                      {"  // Fallback to Gemini API for context"}
                    </span>
                  </div>
                  {/* Line 15 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">15</span>
                    <span className="table-cell">
                      {"  "}<span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">ai</span> = <span className="text-[#c586c0]">await</span> <span className="text-[#4fc1ff]">ai</span>.<span className="text-[#4fc1ff]">models</span>.<span className="text-[#dcdcaa]">generateContent</span>({"{"}
                    </span>
                  </div>
                  {/* Line 16 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">16</span>
                    <span className="table-cell">
                      {"    "}<span className="text-[#9cdcfe]">model</span>: <span className="text-[#ce9178]">&quot;gemini-2.5-flash&quot;</span>,
                    </span>
                  </div>
                  {/* Line 17 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">17</span>
                    <span className="table-cell">
                      {"    "}<span className="text-[#9cdcfe]">contents</span>: <span className="text-[#ce9178]">{"`Compare context: \\n\\nDoc A: ${docA}\\n\\nDoc B: ${docB}`"}</span>
                    </span>
                  </div>
                  {/* Line 18 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">18</span>
                    <span className="table-cell">
                      {"  "}{"}"});
                    </span>
                  </div>
                  {/* Line 19 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">19</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 20 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">20</span>
                    <span className="table-cell">
                      {"  "}<span className="text-[#c586c0]">return</span> {"{"}
                    </span>
                  </div>
                  {/* Line 21 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">21</span>
                    <span className="table-cell">
                      {"    "}<span className="text-[#9cdcfe]">score</span>: <span className="text-[#9cdcfe]">tfIdfScore</span>,
                    </span>
                  </div>
                  {/* Line 22 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">22</span>
                    <span className="table-cell">
                      {"    "}<span className="text-[#9cdcfe]">semanticAnalysis</span>: <span className="text-[#9cdcfe]">response</span>.<span className="text-[#4fc1ff]">text</span>
                    </span>
                  </div>
                  {/* Line 23 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">23</span>
                    <span className="table-cell">
                      {"  "}{"}"};
                    </span>
                  </div>
                  {/* Line 24 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-[#5a5a5a] select-none w-6">24</span>
                    <span className="table-cell">
                      {"}"}
                    </span>
                  </div>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Understated bouncy scroll indicator at bottom */}
      <div
        style={{ animationDelay: "600ms" }}
        className="animate-fade-in-up mt-8 lg:mt-4 pointer-events-auto z-10 flex flex-col items-center"
      >
        <a
          href="#about"
          className="group flex flex-col items-center space-y-1 text-xs font-mono text-[#f8fafc]/50 hover:text-[#06b6d4] transition-colors duration-200"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#06b6d4] group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
}

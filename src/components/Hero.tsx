"use client";

import { Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#0f172a]"
    >
      {/* Background Dot-Grid with Fade Radial Mask */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Accent-blue glow / blur effect behind Hero contents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] bg-[#3b82f6]/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[300px] h-[300px] bg-[#2563eb]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Text & CTA Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            {/* Inline tag: 100ms delay */}
            <div
              style={{ animationDelay: "100ms" }}
              className="animate-fade-in-up inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1e293b] border border-[#334155] text-xs sm:text-sm font-semibold font-mono text-[#3b82f6]"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#3b82f6] animate-pulse" />
              <span>Available for Internships</span>
            </div>

            {/* Confident Headings: 100ms delay, tracking-tighter, leading-tight */}
            <h1
              style={{ animationDelay: "100ms" }}
              className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-[#f8fafc] leading-tight"
            >
              Building AI-Powered Products &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">
                High-Performance Web Applications
              </span>
            </h1>

            {/* Subheading: 300ms delay, max-width comfort constraint */}
            <p
              style={{ animationDelay: "300ms" }}
              className="animate-fade-in-up text-base sm:text-lg lg:text-xl text-[#f8fafc]/80 leading-relaxed max-w-2xl"
            >
              Full-Stack Developer & Computer Science Student — turning ideas into live, production-ready applications with Next.js and AI integration.
            </p>

            {/* CTA Buttons: 500ms delay, standard focus ring states, rounded-lg, lift on hover */}
            <div
              style={{ animationDelay: "500ms" }}
              className="animate-fade-in-up flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium shadow-md shadow-[#3b82f6]/20 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                View Projects
              </a>
              <a
                href="https://github.com/ahmad-461"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-[#f8fafc] font-medium border border-[#334155] transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Simulated Code Editor Snippet with proper VS Code Dark+ styling, 500ms delay */}
          <div
            style={{ animationDelay: "500ms" }}
            className="animate-fade-in-up lg:col-span-5 w-full relative group"
          >
            {/* Soft accent glow behind code editor */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#3b82f6]/10 to-[#60a5fa]/5 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

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
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[#1e1e1e] border-r border-[#2d2d2d] border-t-2 border-t-[#3b82f6] text-[#d4d4d4] cursor-default">
                    <Terminal className="w-3.5 h-3.5 text-[#3b82f6]" />
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
                      {"  "}<span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">response</span> = <span className="text-[#c586c0]">await</span> <span className="text-[#4fc1ff]">ai</span>.<span className="text-[#4fc1ff]">models</span>.<span className="text-[#dcdcaa]">generateContent</span>({"{"}
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
    </section>
  );
}

"use client";

import { Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#0f172a]"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#3b82f6]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Text & CTA Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left transition-all duration-700 ease-out">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1e293b] border border-[#334155] text-xs sm:text-sm font-semibold font-mono-accent text-[#3b82f6]">
              <span className="flex h-2 w-2 rounded-full bg-[#3b82f6] animate-pulse" />
              <span>Available for Internships</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#f8fafc] leading-tight">
              Building Web Apps &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">
                AI-Powered Tools
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#f8fafc]/80 leading-relaxed max-w-2xl">
              Full-Stack Developer & Computer Science Student — turning ideas into live, production-ready applications with Next.js and AI integration.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium shadow-md shadow-[#3b82f6]/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="https://github.com/ahmad-461"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1e293b] hover:bg-[#334155] text-[#f8fafc] font-medium border border-[#334155] transition-all duration-200 transform hover:-translate-y-0.5"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Simulated Code Editor Snippet */}
          <div className="lg:col-span-5 w-full transition-all duration-700 delay-200 ease-out">
            <div className="w-full bg-[#1e293b] border border-[#334155] rounded-xl shadow-2xl overflow-hidden shadow-black/40">
              {/* Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-[#334155]/60">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono-accent text-[#f8fafc]/40">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>docsim-gemini.ts</span>
                </div>
                <div className="w-12" /> {/* spacer to center name */}
              </div>

              {/* Code Panel */}
              <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs font-mono-accent leading-relaxed text-[#f8fafc]/90 bg-[#1e293b]">
                <pre className="table select-none w-full">
                  {/* Line 1 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">1</span>
                    <span className="table-cell text-gray-500">{"// DocSim TF-IDF & Gemini API check"}</span>
                  </div>
                  {/* Line 2 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">2</span>
                    <span className="table-cell">
                      <span className="text-[#f472b6]">import</span> {"{"} <span className="text-[#60a5fa]">GoogleGenAI</span> {"}"} <span className="text-[#f472b6]">from</span> <span className="text-[#34d399]">&quot;@google/genai&quot;</span>;
                    </span>
                  </div>
                  {/* Line 3 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">3</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 4 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">4</span>
                    <span className="table-cell">
                      <span className="text-[#f472b6]">const</span> <span className="text-[#60a5fa]">ai</span> = <span className="text-[#f472b6]">new</span> <span className="text-[#60a5fa]">GoogleGenAI</span>({"{"} <span className="text-[#60a5fa]">apiKey</span>: <span className="text-[#60a5fa]">process.env.GEMINI_API_KEY</span> {"}"});
                    </span>
                  </div>
                  {/* Line 5 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">5</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 6 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">6</span>
                    <span className="table-cell">
                      <span className="text-[#f472b6]">export async function</span> <span className="text-[#60a5fa]">checkSimilarity</span>(<span className="text-[#f8fafc]/70">docA, docB</span>) {"{"}
                    </span>
                  </div>
                  {/* Line 7 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">7</span>
                    <span className="table-cell text-gray-500">
                      {"  // Check with custom TF-IDF engine"}
                    </span>
                  </div>
                  {/* Line 8 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">8</span>
                    <span className="table-cell">
                      {"  "}<span className="text-[#f472b6]">const</span> <span className="text-[#60a5fa]">tfIdfScore</span> = <span className="text-[#60a5fa]">tfIdfEngine</span>.compare(docA, docB);
                    </span>
                  </div>
                  {/* Line 9 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">9</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 10 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">10</span>
                    <span className="table-cell">
                      {"  "}<span className="text-[#f472b6]">if</span> (tfIdfScore &gt; <span className="text-[#fb923c]">0.85</span>) {"{"}
                    </span>
                  </div>
                  {/* Line 11 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">11</span>
                    <span className="table-cell">
                      {"    "}<span className="text-[#f472b6]">return</span> {"{"} score: tfIdfScore, analysis: <span className="text-[#34d399]">&quot;High match.&quot;</span> {"}"};
                    </span>
                  </div>
                  {/* Line 12 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">12</span>
                    <span className="table-cell">
                      {"  "}{"}"}
                    </span>
                  </div>
                  {/* Line 13 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">13</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 14 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">14</span>
                    <span className="table-cell text-gray-500">
                      {"  // Fallback to Gemini API for context"}
                    </span>
                  </div>
                  {/* Line 15 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">15</span>
                    <span className="table-cell">
                      {"  "}<span className="text-[#f472b6]">const</span> <span className="text-[#60a5fa]">response</span> = <span className="text-[#f472b6]">await</span> <span className="text-[#60a5fa]">ai</span>.models.generateContent({"{"}
                    </span>
                  </div>
                  {/* Line 16 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">16</span>
                    <span className="table-cell">
                      {"    "}<span className="text-[#60a5fa]">model</span>: <span className="text-[#34d399]">&quot;gemini-2.5-flash&quot;</span>,
                    </span>
                  </div>
                  {/* Line 17 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">17</span>
                    <span className="table-cell">
                      {"    "}<span className="text-[#60a5fa]">contents</span>: <span className="text-[#34d399]">{"`Compare context: \\n\\nDoc A: ${docA}\\n\\nDoc B: ${docB}`"}</span>
                    </span>
                  </div>
                  {/* Line 18 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">18</span>
                    <span className="table-cell">
                      {"  "}{"}"});
                    </span>
                  </div>
                  {/* Line 19 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">19</span>
                    <span className="table-cell" />
                  </div>
                  {/* Line 20 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">20</span>
                    <span className="table-cell">
                      {"  "}<span className="text-[#f472b6]">return</span> {"{"}
                    </span>
                  </div>
                  {/* Line 21 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">21</span>
                    <span className="table-cell">
                      {"    "}score: <span className="text-[#60a5fa]">tfIdfScore</span>,
                    </span>
                  </div>
                  {/* Line 22 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">22</span>
                    <span className="table-cell">
                      {"    "}semanticAnalysis: <span className="text-[#60a5fa]">response</span>.text
                    </span>
                  </div>
                  {/* Line 23 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">23</span>
                    <span className="table-cell">
                      {"  "}{"}"};
                    </span>
                  </div>
                  {/* Line 24 */}
                  <div className="table-row">
                    <span className="table-cell text-right pr-4 text-gray-600 select-none w-6">24</span>
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

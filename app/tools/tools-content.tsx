"use client";

import React from 'react';
import Link from 'next/link';
import ShineBorder from '@/components/magicui/shine-border';

export default function ToolsContent() {
  return (
    <main className="pt-20">
      <div className="page-container">

        {/* Hero */}
        <section className="section-lg text-center">
          <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-4">Free Diagnostic Tools</div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
            Boardroom-Ready Insights<br />
            <span className="text-cyan-900 font-extrabold font-semibold">in 60 Seconds</span>
          </h1>
          <p className="text-zinc-950 font-bold text-lg max-w-2xl mx-auto">
            These are the same instruments I use in $7,500 audits.
            Try them free. If the results concern you, we should talk.
          </p>
        </section>

        {/* Tools grid */}
        <section className="section">
            <div className="space-y-16 max-w-5xl mx-auto">
              
              {/* Category 1 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-white/10 flex-1"></div>
                  <h2 className="text-xl font-bold text-zinc-950 tracking-widest uppercase text-cyan-900 font-extrabold font-semibold">Financial Audits & Enterprise Valuation</h2>
                  <div className="h-px bg-white/10 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/tools/pdi" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold font-semibold">Product Debt Index</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Quantify hidden technical debt in dollar terms to measure the drag on corporate valuation.</p>
                        <span className="text-cyan-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/ev-se" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold font-semibold">Valuation Scenario Engine</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Model exactly how delayed technical decisions compound and impact enterprise exit scenarios.</p>
                        <span className="text-cyan-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/aueb" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold font-semibold">AI Unit Economics Benchmark</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Calculate your Generative AI gross margin collapse point before your user base hits it.</p>
                        <span className="text-cyan-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/slm-vs-api" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold font-semibold">SLM vs API Arbitrage</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Calculate the exact hardware breakeven point for repatriating cloud AI workloads to bare-metal servers.</p>
                        <span className="text-cyan-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/fte-displacement" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#a855f7", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-zinc-950 font-semibolduchsia-400">Agentic FTE Displacement Matrix</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Calculate EBITDA expansion of replacing human Tier-1 support with autonomous LLM agents.</p>
                        <span className="text-zinc-950 font-semibolduchsia-400 text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/cloud-repatriation" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#a855f7", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-zinc-950 font-semibolduchsia-400">Cloud Repatriation Engine</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Calculate the exact EBITDA recapture of moving off AWS to sovereign bare-metal architecture.</p>
                        <span className="text-zinc-950 font-semibolduchsia-400 text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                  
                  <Link href="/tools/agent-router" className="group block md:col-span-2">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#a855f7", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-zinc-950 font-semibolduchsia-400">Agentic Token Simulator</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Calculate the compound token decay and GPU execution costs of multi-agent LLM reasoning workflows.</p>
                        <span className="text-zinc-950 font-semibolduchsia-400 text-xs font-bold uppercase tracking-wider">Run FinOps Simulation →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-white/10 flex-1"></div>
                  <h2 className="text-xl font-bold text-zinc-950 tracking-widest uppercase text-emerald-900 font-extrabold font-semibold">Agentic Defense & Security Ops</h2>
                  <div className="h-px bg-white/10 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="https://exogram.ai/proving-ground" target="_blank" rel="noopener noreferrer" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold font-semibold">Deterministic Execution Sandbox</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Fire adversarial payloads at Exogram's 8-rule deterministic policy engine. Zero LLM.</p>
                        <span className="text-emerald-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-wider">Try Live Sandbox ↗</span>
                      </div>
                    </ShineBorder>
                  </a>

                  <a href="https://exogram.ai/analyze" target="_blank" rel="noopener noreferrer" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold font-semibold">Agentic Telemetry Analyzer</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Enforce a deterministic execution boundary for your autonomous AI agents.</p>
                        <span className="text-emerald-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-wider">Analyze Architecture ↗</span>
                      </div>
                    </ShineBorder>
                  </a>

                  <Link href="/tools/shadow-ai" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold font-semibold">Shadow AI Security Audit</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Calculate your enterprise blast radius for unauthorized shadow AI usage and IP Leakage.</p>
                        <span className="text-emerald-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/prompt-injection-sandbox" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold font-semibold">Prompt Injection Sandbox</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Test your system prompts against modern jailbreaks, Base64 encodings, and roleplay bypasses.</p>
                        <span className="text-emerald-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-wider">Run Red Team →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/rag-chunking-visualizer" className="group block md:col-span-2">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold font-semibold">RAG Chunking Visualizer</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">Visually optimize your Vector DB embeddings. See exactly where semantic context breaks across token limits.</p>
                        <span className="text-emerald-900 font-extrabold font-semibold text-xs font-bold uppercase tracking-wider">Map Boundaries →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-white/10 flex-1"></div>
                  <h2 className="text-xl font-bold text-zinc-950 tracking-widest uppercase text-amber-500">Human Capital & Architecture</h2>
                  <div className="h-px bg-white/10 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/tools/audit-interview" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f59e0b", "#fbbf24"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-amber-400">Audit Interview Protocol</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">The hiring methodology for the AI age. Reconfigure your funnel to test high-level architectural judgment, not raw syntax.</p>
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/career-pathing" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-400 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f59e0b", "#fbbf24"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-amber-400">Career Architecture Funnel</h3>
                        <p className="text-zinc-950 font-bold text-sm font-semibold mb-4 flex-grow">A diagnostic engine mapping your specific career bottleneck directly to the required structural Curriculum Vault tracks.</p>
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                </div>
              </div>

            </div>
        </section>

        {/* AI Courses Cross-link */}
        <section className="section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-2">Free Training</div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-3">
                Level Up Your <span className="text-purple-900 font-extrabold font-semibold">AI Skills</span>
              </h2>
              <p className="text-zinc-950 font-bold text-sm font-semibold max-w-lg mx-auto">
                Anthropic Academy courses — free, self-paced, with certificates. Curated by Richard Ewing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'AI Fluency', desc: 'For leaders making AI decisions', url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations', color: 'cyan' },
                { name: 'Building with Claude API', desc: 'For developers shipping AI features', url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api', color: 'purple' },
                { name: 'Intro to MCP', desc: 'For architects connecting AI to tools', url: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol', color: 'cyan' },
              ].map((course) => (
                <a
                  key={course.name}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block p-5 rounded-xl bg-white/[0.03] border border-${course.color === 'cyan' ? 'cyan' : 'purple'}-500/20 hover:bg-white/[0.06] transition-all text-center`}
                >
                  <h3 className={`font-bold text-zinc-950 mb-1 group-hover:text-${course.color === 'cyan' ? 'cyan' : 'purple'}-400 transition-colors`}>{course.name}</h3>
                  <p className="text-sm font-semibold font-medium text-zinc-950">{course.desc}</p>
                  <span className={`text-${course.color === 'cyan' ? 'cyan' : 'purple'}-400 text-xs font-bold mt-2 inline-block`}>Free Course ↗</span>
                </a>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/resources/ai-courses" className="text-xs font-bold text-zinc-900 font-bold hover:text-zinc-900 transition-colors uppercase tracking-widest">
                View all 15 curated courses →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm text-center">
          <p className="text-zinc-950 font-bold mb-3">
            If the results concern you, the diagnosis is only the first step.
          </p>
          <p className="text-zinc-950 text-sm font-semibold mb-8 max-w-xl mx-auto">
            Your tools diagnosed the disease. Now choose your cure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-cyan-600/90 text-zinc-950 font-semibold font-bold tracking-widest uppercase hover:bg-cyan-500 transition-colors">
              Book a $2,500 Insolvency Diagnostic →
            </a>
            <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-lg border border-zinc-500 text-zinc-950 font-bold tracking-widest uppercase hover:bg-white/5 transition-colors">
              Deploy Deterministic AI Flow →
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}

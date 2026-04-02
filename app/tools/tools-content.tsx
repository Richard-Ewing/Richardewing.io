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
          <div className="text-xs text-cyan-400 uppercase tracking-wide mb-4">Free Diagnostic Tools</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Boardroom-Ready Insights<br />
            <span className="text-cyan-400">in 60 Seconds</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These are the same instruments I use in $7,500 audits.
            Try them free. If the results concern you, we should talk.
          </p>
        </section>

        {/* Tools grid */}
        <section className="section">
          <div className="grid-2 max-w-4xl mx-auto">

            <Link href="/tools/pdi" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">01</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">Product Debt Index</h3>
                    <p className="text-gray-400 text-sm mb-3">Quantify hidden technical debt in dollar terms.</p>
                    <span className="text-purple-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/ev-se" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#22d3ee", "#8b5cf6", "#f472b6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400 font-bold">02</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400">Valuation Scenario Engine</h3>
                    <p className="text-gray-400 text-sm mb-3">Model how technical decisions impact enterprise value.</p>
                    <span className="text-cyan-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/aueb" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">03</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">AI Unit Economics Benchmark</h3>
                    <p className="text-gray-400 text-sm mb-3">Calculate your AI collapse point before you hit it.</p>
                    <span className="text-purple-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>



            <Link href="/tools/audit-interview" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400 font-bold">05</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400">Audit Interview Protocol</h3>
                    <p className="text-gray-400 text-sm mb-3">The hiring methodology for the AI age. Test judgment, not syntax.</p>
                    <span className="text-emerald-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/slm-vs-api" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#10b981", "#34d399", "#A07CFE"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400 font-bold">06</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400">SLM vs API Arbitrage</h3>
                    <p className="text-gray-400 text-sm mb-3">Calculate the exact hardware breakeven point for repatriating AI workloads.</p>
                    <span className="text-emerald-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/fte-displacement" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#a855f7", "#6366f1", "#06b6d4"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold">07</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400">Agentic FTE Displacement Matrix</h3>
                    <p className="text-gray-400 text-sm mb-3">Calculate EBITDA expansion of replacing human Tier-1 support with autonomous LLM agents.</p>
                    <span className="text-purple-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/cloud-repatriation" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#f59e0b", "#f43f5e", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-rose-600/20 flex items-center justify-center text-rose-400 font-bold">08</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rose-400">Cloud Repatriation Engine</h3>
                    <p className="text-gray-400 text-sm mb-3">Calculate the exact EBITDA recapture of moving off AWS to bare-metal servers.</p>
                    <span className="text-rose-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/shadow-ai" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#fcd34d", "#fbbf24", "#f59e0b"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-600/20 flex items-center justify-center text-amber-400 font-bold">09</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400">Shadow AI Security Audit</h3>
                    <p className="text-gray-400 text-sm mb-3">Calculate your enterprise blast radius for unauthorized shadow AI usage and IP Leakage.</p>
                    <span className="text-amber-400 text-sm">Try Now →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <a href="https://exogram.ai/proving-ground" target="_blank" rel="noopener noreferrer" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#3b82f6", "#2563eb", "#1d4ed8"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">10</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Deterministic Execution Sandbox</h3>
                    <p className="text-gray-400 text-sm mb-3">Fire adversarial payloads at Exogram's 8-rule deterministic policy engine. Zero LLM.</p>
                    <span className="text-blue-400 text-sm">Try Live Sandbox ↗</span>
                  </div>
                </div>
              </ShineBorder>
            </a>

            <a href="https://exogram.ai/analyze" target="_blank" rel="noopener noreferrer" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#10b981", "#059669", "#047857"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400 font-bold">11</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400">Agentic Telemetry Analyzer</h3>
                    <p className="text-gray-400 text-sm mb-3">Enforce a deterministic execution boundary for your autonomous AI agents.</p>
                    <span className="text-emerald-400 text-sm">Analyze Architecture ↗</span>
                  </div>
                </div>
              </ShineBorder>
            </a>

            <Link href="/tools/career-pathing" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#0ea5e9", "#0284c7", "#0369a1"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-sky-600/20 flex items-center justify-center text-sky-400 font-bold">12</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400">Career Architecture Funnel</h3>
                    <p className="text-gray-400 text-sm mb-3">A diagnostic engine mapping your specific career bottleneck directly to the Curriculum Vault.</p>
                    <span className="text-sky-400 text-sm">Run Diagnostic →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/prompt-injection-sandbox" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#10b981", "#059669", "#047857"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400 font-bold">13</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400">Prompt Injection Sandbox</h3>
                    <p className="text-gray-400 text-sm mb-3">Test your system prompts against modern jailbreaks, Base64 encodings, and roleplay bypass heuristics.</p>
                    <span className="text-emerald-400 text-sm">Run Red Team →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/rag-chunking-visualizer" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#6366f1", "#4f46e5", "#4338ca"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold">14</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400">RAG Chunking Visualizer</h3>
                    <p className="text-gray-400 text-sm mb-3">Visually optimize your Vector DB embeddings. See exactly where semantic context breaks.</p>
                    <span className="text-indigo-400 text-sm">Map Boundaries →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

            <Link href="/tools/agent-router" className="group block">
              <ShineBorder className="h-full bg-zinc-900/50 border border-white/5 p-6" color={["#3b82f6", "#2563eb", "#1d4ed8"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold">15</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400">Agentic Token Simulator</h3>
                    <p className="text-gray-400 text-sm mb-3">Calculate the compound token decay and GPU execution costs of multi-agent LLM workflows.</p>
                    <span className="text-blue-400 text-sm">Run FinOps Simulation →</span>
                  </div>
                </div>
              </ShineBorder>
            </Link>

          </div>
        </section>

        {/* AI Courses Cross-link */}
        <section className="section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-xs text-purple-400 uppercase tracking-wide mb-2">Free Training</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Level Up Your <span className="text-purple-400">AI Skills</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-lg mx-auto">
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
                  <h3 className={`font-bold text-white mb-1 group-hover:text-${course.color === 'cyan' ? 'cyan' : 'purple'}-400 transition-colors`}>{course.name}</h3>
                  <p className="text-xs text-zinc-500">{course.desc}</p>
                  <span className={`text-${course.color === 'cyan' ? 'cyan' : 'purple'}-400 text-xs mt-2 inline-block`}>Free Course ↗</span>
                </a>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/resources/ai-courses" className="text-xs text-zinc-500 hover:text-white transition-colors uppercase tracking-widest">
                View all 15 curated courses →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-sm text-center">
          <p className="text-gray-400 mb-3">
            If the results concern you, the diagnosis is only the first step.
          </p>
          <p className="text-gray-500 text-sm mb-8 max-w-xl mx-auto">
            Your tools diagnosed the disease. Now choose your cure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500">
              Book a $2,500 Insolvency Diagnostic →
            </a>
            <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5">
              Implement Deterministic Routing →
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}

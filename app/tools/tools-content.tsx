'use client';

import React from 'react';
import Link from 'next/link';
import ShineBorder from '@/components/magicui/shine-border';
import FAQItem from '@/app/components/FAQItem';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export default function ToolsContent() {
  return (
    <main className="pt-20 bg-[#F5F0EB]">
      <div className="page-container">

        {/* Hero */}
        <section className="section-lg text-center">
          <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide mb-4">Diagnostics Hub</div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
            Executive Diagnostics<br />
            <span className="text-cyan-900 font-extrabold">in 60 Seconds</span>
          </h1>
          <p className="text-zinc-950 font-bold text-lg max-w-2xl mx-auto">
            These are the same forensic instruments I use in R&D Capital Audits.
            Try them free. If the results show critical leakage, we should talk.
          </p>
        </section>

        {/* Tools grid */}
        <section className="section">
            <div className="space-y-16 max-w-5xl mx-auto">
              
              {/* Category 1 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-zinc-300 flex-1"></div>
                  <h2 className="text-sm font-bold text-zinc-950 tracking-widest uppercase text-cyan-900">Financial Audits & Enterprise Valuation</h2>
                  <div className="h-px bg-zinc-300 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <Link href="/tools/pdi" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Product</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">Product Debt Index</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Diagnostic for measuring Product Governance Debt.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/cfo-capitalization-audit" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider mb-2">Measures: CFO &amp; Tax Strategy</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">CFO R&amp;D Capitalization Audit</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate true innovation investment vs hidden maintenance OpEx, Section 174 tax impact, and EBITDA adjustments.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Financial Audit →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/board-risk-scorecard" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f59e0b", "#d97706"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-amber-900 uppercase tracking-wider mb-2">Measures: Board Fiduciary Duty</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-amber-900 font-extrabold">Board AI Governance Scorecard</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">10-vector fiduciary audit for Board Directors, CEOs, and Audit Committees to evaluate agent signing limits and capital risk.</p>
                        <span className="text-amber-900 font-extrabold text-xs font-bold uppercase tracking-wider">Audit Fiduciary Risk →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/ev-se" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Economics</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">Valuation Scenario Engine</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Model exactly how delayed technical decisions compound and impact enterprise exit scenarios.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/aueb" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Economics</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">AI Unit Economics Benchmark</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Diagnostic for measuring AI Unit Economics.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/slm-vs-api" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Economics</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">SLM vs API Arbitrage</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate the exact hardware breakeven point for repatriating cloud AI workloads to bare-metal servers.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/fte-displacement" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#a855f7", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Operations</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-purple-900 font-extrabold">Agentic FTE Displacement Matrix</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate EBITDA expansion of replacing human Tier-1 support with autonomous LLM agents.</p>
                        <span className="text-purple-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/cloud-repatriation" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#a855f7", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Economics</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-purple-900 font-extrabold">Cloud Repatriation Engine</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate the exact EBITDA recapture of moving off AWS to sovereign bare-metal architecture.</p>
                        <span className="text-purple-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                  
                  <Link href="/tools/slm-break-even" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#8b5cf6", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-violet-900 uppercase tracking-wider mb-2">Measures: Inference Economics</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-violet-900 font-extrabold">SLM Break-Even Calculator</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Model the exact monthly query volume where fine-tuning and self-hosting an 8B/70B SLM beats frontier model APIs.</p>
                        <span className="text-violet-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Break-Even Model →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/ai-feature-margin" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider mb-2">Measures: Product Economics</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">AI Feature Margin Matrix</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Map user subscription pricing against variable token burn to identify toxic negative-carry AI features.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Calculate Margin →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/subprime-code-auditor" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f43f5e", "#fb7185"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-rose-900 uppercase tracking-wider mb-2">Measures: PE Due Diligence</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-rose-900 font-extrabold">Subprime Code Risk Auditor</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Quantify the balance-sheet refactor discount and technical insolvency risk of un-governed vibe coding.</p>
                        <span className="text-rose-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run M&amp;A Audit →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/aari" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#06b6d4", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-wider mb-2">Measures: Agentic SDLC</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">Autonomous Agent Readiness (AARI)</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Evaluate repo architecture, type strictness, and sandboxed worktrees before turning on Claude Code or Antigravity.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Audit Readiness →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/agent-router" className="group block md:col-span-2">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#a855f7", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Operations</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-purple-900 font-extrabold">Agentic Token Simulator</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate the compound token decay and GPU execution costs of multi-agent LLM reasoning workflows.</p>
                        <span className="text-purple-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run FinOps Simulation →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-zinc-300 flex-1"></div>
                  <h2 className="text-sm font-bold text-zinc-950 tracking-widest uppercase text-emerald-900">Agentic Defense & Security Ops</h2>
                  <div className="h-px bg-zinc-300 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="https://exogram.ai/proving-ground" target="_blank" rel="noopener noreferrer" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Runtime Governance</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold flex items-center gap-1.5">
                          Deterministic Execution Sandbox <span className="text-xs text-zinc-400 group-hover:text-emerald-950 transition-colors">↗</span>
                        </h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Fire adversarial payloads at Exogram's 8-rule deterministic policy engine. Zero LLM.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Try Live Sandbox ↗</span>
                      </div>
                    </ShineBorder>
                  </a>

                  <a href="https://exogram.ai/analyze" target="_blank" rel="noopener noreferrer" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Runtime Governance</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold flex items-center gap-1.5">
                          Agentic Telemetry Analyzer <span className="text-xs text-zinc-400 group-hover:text-emerald-950 transition-colors">↗</span>
                        </h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Enforce a deterministic execution boundary for your autonomous AI agents.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Analyze Architecture ↗</span>
                      </div>
                    </ShineBorder>
                  </a>

                  <Link href="/tools/mcp-security-auditor" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f43f5e", "#fb7185"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-rose-900 uppercase tracking-wider mb-2">Measures: MCP Vulnerabilities</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-rose-900 font-extrabold">MCP Security &amp; Poisoning Auditor</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Audit your Model Context Protocol connections against OWASP MCP Top 10 risks and raw STDIO RCE vectors.</p>
                        <span className="text-rose-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run MCP Audit →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/shadow-ai" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Security</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">Shadow AI Security Audit</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate your enterprise blast radius for unauthorized shadow AI usage and IP Leakage.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/prompt-injection-sandbox" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Security</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">Prompt Injection Sandbox</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Test your system prompts against modern jailbreaks, Base64 encodings, and roleplay bypasses.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Red Team →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/rag-chunking-visualizer" className="group block md:col-span-2">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Engineering</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">RAG Chunking Visualizer</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Visually optimize your Vector DB embeddings. See exactly where semantic context breaks across token limits.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Map Boundaries →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-zinc-300 flex-1"></div>
                  <h2 className="text-sm font-bold text-zinc-950 tracking-widest uppercase text-amber-600">Human Capital & Architecture</h2>
                  <div className="h-px bg-zinc-300 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/tools/audit-interview" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f59e0b", "#fbbf24"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Engineering</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-amber-500">Audit Interview Protocol</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">The hiring methodology for the AI age. Reconfigure your funnel to test high-level architectural judgment, not raw syntax.</p>
                        <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/code-review-bottleneck-calc" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#06b6d4", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-wider mb-2">Measures: Engineering SDLC</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">AI Code Review Bottleneck</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate senior engineering payroll waste and cycle time inflation caused by AI-generated PR floods.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Calculate Bottleneck →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/spec-quality-scorecard" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#06b6d4"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider mb-2">Measures: Spec-Driven Dev</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">SDD Spec Quality Scorecard</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Linter grading feature PRDs for machine-readable schemas, boundaries, and assertions before agent execution.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Score Spec →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/career-pathing" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f59e0b", "#fbbf24"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Measures: Engineering</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-amber-500">Career Architecture Funnel</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">A diagnostic engine mapping your specific career bottleneck directly to the required structural Curriculum Vault tracks.</p>
                        <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Run Diagnostic →</span>
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
              <div className="text-xs font-bold text-zinc-900 uppercase tracking-wide mb-2">Free Training</div>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 mb-3">
                Level Up Your <span className="text-purple-900 font-extrabold">AI Skills</span>
              </h2>
              <p className="text-zinc-950 font-bold text-sm font-semibold max-w-lg mx-auto">
                Anthropic Academy courses - free, self-paced, with certificates. Curated by Richard Ewing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'AI Fluency', desc: 'For leaders making AI decisions', url: 'https://anthropic.skilljar.com/ai-flux-framework-foundations', color: 'cyan' },
                { name: 'Building with Claude API', desc: 'For developers shipping AI features', url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api', color: 'purple' },
                { name: 'Intro to MCP', desc: 'For architects connecting AI to tools', url: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol', color: 'cyan' },
              ].map((course) => (
                <a
                  key={course.name}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-xl bg-white border border-zinc-300 hover:border-indigo-500 transition-all text-center shadow-sm"
                >
                  <h3 className="font-bold text-zinc-950 mb-1 group-hover:text-indigo-900 transition-colors">{course.name}</h3>
                  <p className="text-xs text-zinc-950 font-semibold">{course.desc}</p>
                  <span className="text-cyan-900 text-xs font-bold mt-2 inline-block">Free Course ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section max-w-3xl mx-auto border-t border-zinc-300 pt-16">
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem 
              question="Are these diagnostic tools free to use?" 
              answer="Yes, they are 100% free, self-service tools designed to help engineering and product leaders quickly identify operational leakage."
            />
            <FAQItem 
              question="Is my data safe when using these calculators?" 
              answer="Yes, all calculations are performed locally in your browser. No proprietary data, code details, or financial metrics are ever sent to our servers."
            />
            <FAQItem 
              question="What is the Product Debt Index (PDI)?" 
              answer="The PDI is a quantitative scale (0-100) evaluating the exit valuation risk of accumulated technical debt and unmanaged production AI complexity."
            />
            <FAQItem 
              question="How do I remediate a high risk score?" 
              answer="If your results show critical leakage or high debt, you can book a free diagnostic call to discuss remediation plans."
            />
          </div>
        </section>

        {/* Empirical Research & Publication Foundations */}
        <section className="section max-w-5xl mx-auto">
          {(() => {
            const domainArticles = RESEARCH_CORPUS.filter(
              (art) => art.domain === 'Product Leadership' || art.domain === 'Software Economics' || art.domain === 'AI Economics' || art.domain === 'AI Governance'
            ).slice(0, 6);

            if (domainArticles.length === 0) return null;

            return (
              <div className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                    Empirical Foundations
                  </span>
                  <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                    Research Foundations
                  </h2>
                </div>

                <div className="space-y-3 pt-2">
                  {domainArticles.map((art) => (
                    <div key={art.id} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
                          <span className="text-cyan-900 uppercase">{art.publisher}</span>
                          {art.date && <span className="text-zinc-500">• {art.date}</span>}
                        </div>
                        <h3 className="text-sm font-bold text-zinc-950">
                          {art.title}
                        </h3>
                      </div>
                      <a
                        href={art.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-cyan-900 text-white text-xs font-mono font-bold rounded-xl whitespace-nowrap self-start sm:self-center hover:bg-cyan-800"
                      >
                        Read Work ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </section>

        {/* CTA */}
        <section className="section-sm text-center">
          <p className="text-zinc-950 font-bold mb-3 text-lg">
            "Observability without enforcement is governance theater."
          </p>
          <p className="text-zinc-950 text-sm font-semibold mb-8 max-w-xl mx-auto">
            Diagnostic insights are irrelevant without a deterministic interception layer. To remediate the risks identified, you must implement Admissibility-Native architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://exogram.ai/analyze" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 rounded-lg bg-red-600 text-white font-bold tracking-widest uppercase hover:bg-red-700 transition-colors shadow-sm">
              Initialize Exogram Simulation →
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}


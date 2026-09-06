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
              
              {/* Emergency Symptom Guides Banner */}
              <div className="rounded-2xl border border-rose-300 bg-rose-50/70 p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-rose-200">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-800 block mb-1">Live Incident Triage</span>
                    <h2 className="text-xl md:text-2xl font-bold text-zinc-950 font-grotesk">Search by What is Broken in Production</h2>
                  </div>
                  <Link href="/compare" className="text-xs font-bold font-mono text-rose-900 hover:text-rose-950 uppercase tracking-wider underline">
                    View All 18 Incident Analyses &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <Link href="/compare/why-ai-costs-spiral-from-silent-retries" className="p-3 bg-white rounded-xl border border-rose-200 hover:border-rose-400 text-xs font-bold text-zinc-900 transition-colors block">
                    Why AI Bills Spike from Silent Retries &rarr;
                  </Link>
                  <Link href="/compare/why-ai-prompts-break-after-model-updates" className="p-3 bg-white rounded-xl border border-rose-200 hover:border-rose-400 text-xs font-bold text-zinc-900 transition-colors block">
                    Why Prompts Break on Model Updates &rarr;
                  </Link>
                  <Link href="/compare/why-ai-feature-margins-turn-negative" className="p-3 bg-white rounded-xl border border-rose-200 hover:border-rose-400 text-xs font-bold text-zinc-900 transition-colors block">
                    Why AI Features Lose Money on Users &rarr;
                  </Link>
                  <Link href="/compare/why-ai-teams-become-api-janitors" className="p-3 bg-white rounded-xl border border-rose-200 hover:border-rose-400 text-xs font-bold text-zinc-900 transition-colors block">
                    Why Engineers Babysit Prompts All Day &rarr;
                  </Link>
                  <Link href="/compare/why-unused-ai-features-drain-cloud-budgets" className="p-3 bg-white rounded-xl border border-rose-200 hover:border-rose-400 text-xs font-bold text-zinc-900 transition-colors block">
                    Why Forgotten AI Features Drain Budgets &rarr;
                  </Link>
                  <Link href="/compare/why-companies-pay-shadow-ai-vendor-tax" className="p-3 bg-white rounded-xl border border-rose-200 hover:border-rose-400 text-xs font-bold text-zinc-900 transition-colors block">
                    How to Find Secret Shadow AI Tools &rarr;
                  </Link>
                  <Link href="/compare/why-ai-prds-and-specs-create-waste" className="p-3 bg-white rounded-xl border border-rose-200 hover:border-rose-400 text-xs font-bold text-zinc-900 transition-colors block">
                    Why 30-Page AI PRDs Waste Engineering &rarr;
                  </Link>
                  <Link href="/compare/why-ai-code-creates-more-bugs-than-it-fixes" className="p-3 bg-white rounded-xl border border-rose-200 hover:border-rose-400 text-xs font-bold text-zinc-900 transition-colors block">
                    Why AI Coding Causes More Outages &rarr;
                  </Link>
                </div>
              </div>

              {/* Category 1 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-zinc-300 flex-1"></div>
                  <h2 className="text-sm font-bold text-zinc-950 tracking-widest uppercase text-cyan-900">Cost Audits &amp; Financial Leaks</h2>
                  <div className="h-px bg-zinc-300 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <Link href="/tools/pdi" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: AI Slowing Down Sprints</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">Why AI Code Slows Down Your Team (PDI)</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Your engineers are shipping 3x more code with AI assistants, but releases are slower and bugs doubled. Calculate how much messy AI code is costing your company in dollars.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Calculate AI Code Cost →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/cfo-capitalization-audit" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider mb-2">Problem: Software Tax Deductions &amp; OpEx</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">How to Write Off AI Software Costs Properly</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate the difference between real software innovation and hidden maintenance waste to protect your tax deductions, Section 174 filings, and company earnings.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Tax &amp; OpEx Audit →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/board-risk-scorecard" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f59e0b", "#d97706"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-amber-900 uppercase tracking-wider mb-2">Problem: Board Liability &amp; Unapproved AI</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-amber-900 font-extrabold">Board AI Governance &amp; Liability Scorecard</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">A 10-point check for CEOs, Board Directors, and Audit Committees to evaluate rogue AI agents, data privacy exposure, and capital risks before the next board meeting.</p>
                        <span className="text-amber-900 font-extrabold text-xs font-bold uppercase tracking-wider">Audit Board Risk →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/ev-se" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Company Valuation Drag</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">Valuation Impact Calculator (EV-SE)</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">See exactly how delayed technical decisions, customer churn, and code debt reduce what buyers or investors will pay for your business.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Calculate Valuation Impact →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/aueb" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Exploding AI Token Invoices</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">Why Your AI API Bill Outpaces Revenue (AUEB)</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Customer signups grew 10%, but your monthly OpenAI or Anthropic bill jumped 300%. Calculate your exact profit margin loss per active user and find your break-even point.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Calculate Token Margin Loss →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/slm-vs-api" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#22d3ee", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Cloud GPU vs API Pricing</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">Why Hosting Your Own AI Model Costs More Than APIs</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">You rented expensive cloud servers to escape API token fees, but the monthly server bill is higher. Find the exact request volume where self-hosting actually saves money.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Find Hardware Break-Even →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/fte-displacement" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#a855f7", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Headcount vs AI Automation</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-purple-900 font-extrabold">Did AI Actually Lower Customer Support Costs?</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate real payroll savings versus the hidden costs of managing, prompt tuning, and supervising autonomous AI agents.</p>
                        <span className="text-purple-900 font-extrabold text-xs font-bold uppercase tracking-wider">Calculate Headcount Impact →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/cloud-repatriation" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#a855f7", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Overpaying on AWS / Azure</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-purple-900 font-extrabold">When to Move AI Off Expensive Cloud Servers</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate how much cash your business gets back each month by moving steady AI database workloads off AWS to dedicated servers.</p>
                        <span className="text-purple-900 font-extrabold text-xs font-bold uppercase tracking-wider">Calculate Cloud Savings →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                  
                  <Link href="/tools/slm-break-even" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#8b5cf6", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-violet-900 uppercase tracking-wider mb-2">Problem: Small Model Economics</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-violet-900 font-extrabold">Small AI Model Break-Even Calculator</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate the exact number of monthly prompts where fine-tuning a small 8B model beats paying frontier cloud APIs.</p>
                        <span className="text-violet-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Break-Even Model →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/ai-feature-margin" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider mb-2">Problem: Unprofitable AI Features</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">Is Your AI Feature Losing Money on Each User?</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Map flat-rate subscription pricing against actual variable token usage to spot features that eat into your product profits.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Check Feature Margins →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/negative-carry-code-auditor" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f43f5e", "#fb7185"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-rose-900 uppercase tracking-wider mb-2">Problem: Vibe Coding Liabilities</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-rose-900 font-extrabold">Vibe Coding &amp; Unreviewed AI Code Auditor</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate the hidden debt and rewrite costs created when non-technical founders or teams generate thousands of lines of unreviewed code.</p>
                        <span className="text-rose-900 font-extrabold text-xs font-bold uppercase tracking-wider">Audit Code Risk →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/aari" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#06b6d4", "#8b5cf6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-wider mb-2">Problem: Agents Breaking Codebases</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">AI Coding Agent Readiness Check (AARI)</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Check your codebase structure and automated test safety before turning on autonomous coding agents like Claude Code or Cursor.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Audit Readiness →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/agent-router" className="group block md:col-span-2">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#a855f7", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Multi-Agent Token Costs</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-purple-900 font-extrabold">Multi-Agent AI Token Cost Simulator</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate the compounding token bills when multiple AI agents talk to each other in automated loops.</p>
                        <span className="text-purple-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Token Simulation →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-zinc-300 flex-1"></div>
                  <h2 className="text-sm font-bold text-zinc-950 tracking-widest uppercase text-emerald-900">Security Leaks &amp; Rogue AI</h2>
                  <div className="h-px bg-zinc-300 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="https://exogram.ai/proving-ground" target="_blank" rel="noopener noreferrer" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: AI Hallucinations in Production</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold flex items-center gap-1.5">
                          Stop AI Agents From Going Off-Script <span className="text-xs text-zinc-400 group-hover:text-emerald-950 transition-colors">↗</span>
                        </h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Test how Exogram blocks rogue tool calls, unauthorized database writes, and dangerous prompts without slowing down your app.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Try Live Sandbox ↗</span>
                      </div>
                    </ShineBorder>
                  </a>

                  <a href="https://exogram.ai/analyze" target="_blank" rel="noopener noreferrer" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Unmonitored Agent Actions</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold flex items-center gap-1.5">
                          Live AI Agent Activity Monitor <span className="text-xs text-zinc-400 group-hover:text-emerald-950 transition-colors">↗</span>
                        </h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Get complete visibility into every command, file write, and external API call made by autonomous AI agents in your stack.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Analyze Activity ↗</span>
                      </div>
                    </ShineBorder>
                  </a>

                  <Link href="/tools/mcp-security-auditor" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f43f5e", "#fb7185"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-rose-900 uppercase tracking-wider mb-2">Problem: Unsafe Tool Connections (MCP)</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-rose-900 font-extrabold">MCP Security &amp; Connection Auditor</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Find out if your team connected AI tools to internal servers or files without safety boundaries, exposing company code to remote risks.</p>
                        <span className="text-rose-900 font-extrabold text-xs font-bold uppercase tracking-wider">Scan MCP Tools →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/shadow-ai" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Data Leaks via Public AI</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">How to Spot AI Agents Leaking Company Data</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate your risk when employees paste private customer data, financial spreadsheets, or proprietary code into public AI tools.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Security Audit →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/prompt-injection-sandbox" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: AI Jailbreaks &amp; Prompt Attacks</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">Test If Hackers Can Trick Your AI App</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Test your customer support bots and AI agents against sneaky prompts, hidden instructions, and roleplay bypasses.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Test Prompts Now →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/rag-chunking-visualizer" className="group block md:col-span-2">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: AI Search Giving Bad Answers</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">Why Your Search AI Misses Important Answers</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">See visually how cutting documents into clumsy text chunks breaks meaning, causes hallucinations, and gives bad answers to users.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Visualize Chunk Breaks →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-zinc-300 flex-1"></div>
                  <h2 className="text-sm font-bold text-zinc-950 tracking-widest uppercase text-amber-600">Team Hiring &amp; Engineering Speed</h2>
                  <div className="h-px bg-zinc-300 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/tools/audit-interview" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f59e0b", "#fbbf24"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Hiring Engineers in the AI Era</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-amber-500">How to Interview Engineers Who Use AI</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Stop testing trivia and leetcode syntax that AI solves in 2 seconds. Test whether candidates can spot bugs, verify AI code, and design reliable systems.</p>
                        <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Try Interview Tool →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/code-review-bottleneck-calc" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#06b6d4", "#3b82f6"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-wider mb-2">Problem: Code Review Overload</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900 font-extrabold">Why Pull Requests Are Stuck in Review for Days</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Calculate how many hours your senior engineers lose each week reviewing massive floods of AI-generated pull requests.</p>
                        <span className="text-cyan-900 font-extrabold text-xs font-bold uppercase tracking-wider">Calculate Review Bottleneck →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/spec-quality-scorecard" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#10b981", "#06b6d4"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-emerald-900 uppercase tracking-wider mb-2">Problem: Vague Prompts Causing Rework</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold">Test Your Project Specs Before Feeding AI</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Check your feature write-up to make sure AI agents have clear rules, boundaries, and acceptance tests before they write any code.</p>
                        <span className="text-emerald-900 font-extrabold text-xs font-bold uppercase tracking-wider">Check Spec Quality →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/career-pathing" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#f59e0b", "#fbbf24"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: Engineering Career Growth</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-amber-500">Tech Leadership Career Diagnostic</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">Find your exact career bottleneck to advance from Senior Engineer or PM into Director, VP, and CTO executive roles.</p>
                        <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">Check Career Bottleneck →</span>
                      </div>
                    </ShineBorder>
                  </Link>
                </div>
              </div>

              {/* Category 4: Executive & C-Suite Leadership */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-zinc-300 flex-1"></div>
                  <h2 className="text-sm font-bold text-zinc-950 tracking-widest uppercase text-indigo-700">Executive &amp; C-Suite Leadership (Directors On Up)</h2>
                  <div className="h-px bg-zinc-300 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/tools/executive-ai-operating-model" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#6366f1", "#a855f7"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-2">Problem: AI Strategy Without ROI</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-indigo-900 font-extrabold">Executive AI Operating Strategy Check</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">For CEOs, COOs, and Managing Directors: Benchmark company AI readiness, real business moats, and budget allocation before spending millions.</p>
                        <span className="text-indigo-900 font-extrabold text-xs font-bold uppercase tracking-wider">Audit Strategy →</span>
                      </div>
                    </ShineBorder>
                  </Link>

                  <Link href="/tools/cpo-product-portfolio-matrix" className="group block">
                    <ShineBorder className="h-full bg-white border border-zinc-300 p-6 rounded-xl hover:bg-zinc-50 transition-colors" color={["#8b5cf6", "#ec4899"]} classNameOverlay="opacity-0 group-hover:opacity-100">
                      <div className="flex flex-col h-full">
                        <div className="text-[10px] font-mono font-bold text-purple-900 uppercase tracking-wider mb-2">Problem: Product Margins &amp; Pricing</div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-purple-900 font-extrabold">Product Leader AI Margin Matrix</h3>
                        <p className="text-zinc-950 text-sm font-semibold mb-4 flex-grow">For CPOs and Product Directors: Calculate feature profit margins, identify features losing cash, and switch to profitable pricing models.</p>
                        <span className="text-purple-900 font-extrabold text-xs font-bold uppercase tracking-wider">Run Product Audit →</span>
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


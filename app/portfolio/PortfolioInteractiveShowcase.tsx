"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Calculator, ExternalLink, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function PortfolioInteractiveShowcase() {
    const [activePlatform, setActivePlatform] = useState<'exogram' | 'careerwin' | 'economist'>('exogram');

    // Interactive mini-P&L simulator inside the Portfolio showcase
    const [arrInput, setArrInput] = useState<number>(12);
    const [engHeadcount, setEngHeadcount] = useState<number>(35);
    const [maintenanceShare, setMaintenanceShare] = useState<number>(65);

    const revenuePerEng = Math.round((arrInput * 1000000) / engHeadcount);
    const trappedCapital = Math.round(engHeadcount * 165000 * (maintenanceShare / 100));
    const recoverableArrCapacity = Math.round(trappedCapital * 0.42);

    return (
        <div className="bg-zinc-950 text-white rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden">
            {/* Platform Switcher Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-zinc-800 bg-zinc-900/70">
                <button
                    onClick={() => setActivePlatform('exogram')}
                    className={`p-5 text-left transition-all border-b-2 cursor-pointer ${
                        activePlatform === 'exogram'
                            ? 'border-purple-500 bg-zinc-950 text-white'
                            : 'border-transparent text-zinc-400 hover:text-zinc-200'
                    }`}
                >
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold">
                            01 • AWS Startups Showcase
                        </span>
                        <ShieldCheck className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="text-lg font-grotesk font-bold">Exogram.ai</div>
                    <div className="text-xs text-zinc-400 mt-0.5">AI Governance &amp; Runtime Control Plane</div>
                </button>

                <button
                    onClick={() => setActivePlatform('careerwin')}
                    className={`p-5 text-left transition-all border-b-2 cursor-pointer ${
                        activePlatform === 'careerwin'
                            ? 'border-indigo-500 bg-zinc-950 text-white'
                            : 'border-transparent text-zinc-400 hover:text-zinc-200'
                    }`}
                >
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold">
                            02 • Consumer &amp; Talent AI SaaS
                        </span>
                        <Award className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="text-lg font-grotesk font-bold">CareerWin.ai</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Career Intelligence &amp; ATS Forensics Lab</div>
                </button>

                <button
                    onClick={() => setActivePlatform('economist')}
                    className={`p-5 text-left transition-all border-b-2 cursor-pointer ${
                        activePlatform === 'economist'
                            ? 'border-emerald-500 bg-zinc-950 text-white'
                            : 'border-transparent text-zinc-400 hover:text-zinc-200'
                    }`}
                >
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                            03 • 25 Live Diagnostic Tools
                        </span>
                        <Calculator className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-lg font-grotesk font-bold">The AI Economist Engine</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Interactive P&amp;L Sandbox (Test Live)</div>
                </button>
            </div>

            {/* Active Platform View */}
            <div className="p-6 sm:p-10">
                {activePlatform === 'exogram' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase">
                                <span>Founder &amp; Chief Architect • Featured on AWS Startups Showcase</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-grotesk font-extrabold text-white">
                                Exogram.ai: Deterministic Runtime Governance for Enterprise AI Agents
                            </h3>
                            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                                Most AI observability tools only tell you what went wrong after an agent has already blown your API budget or mutated production data. I architected Exogram as a five-layer intelligence substrate (The Ledger, Context, Meaning, Inference Management, and Admissibility) that enforces hard cost caps and cryptographic policy checks before execution.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {[
                                    'Pre-execution cost ceilings & retry-loop circuit breakers',
                                    'Five-layer admissibility & semantic state verification',
                                    'Recognized in the official AWS Startups Showcase directory',
                                    'Zero-trust policy gating for autonomous enterprise workflows',
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-200 bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-3">
                                <Link
                                    href="/exogram"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                                >
                                    Explore Exogram Architecture <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://exogram.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold text-xs uppercase tracking-wider transition-colors"
                                >
                                    Visit Exogram.ai <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 font-mono text-xs space-y-3">
                            <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-3">
                                <span>EXOGRAM ADMISSIBILITY PIPELINE</span>
                                <span className="text-emerald-400 font-bold">● ENFORCED</span>
                            </div>
                            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                                <div className="text-purple-400 font-bold">Layer 01 • The Ledger</div>
                                <div className="text-zinc-400 mt-0.5">Immutable state &amp; token attribution per tenant seat</div>
                            </div>
                            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                                <div className="text-cyan-400 font-bold">Layer 02-03 • Context &amp; Meaning</div>
                                <div className="text-zinc-400 mt-0.5">Bounded cognition pruning to prevent context rot</div>
                            </div>
                            <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                                <div className="text-amber-400 font-bold">Layer 04 • Inference Economics</div>
                                <div className="text-zinc-400 mt-0.5">Dynamic routing: Frontier LLM vs. SLM margin floor</div>
                            </div>
                            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                                <div className="text-emerald-400 font-bold">Layer 05 • Admissibility Gate</div>
                                <div className="text-zinc-300 mt-0.5">Deterministic allow/block before action mutates state</div>
                            </div>
                        </div>
                    </div>
                )}

                {activePlatform === 'careerwin' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7 space-y-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold uppercase">
                                <span>Founder &amp; Product Architect • Full-Stack AI SaaS</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-grotesk font-extrabold text-white">
                                CareerWin.ai: Human Work Verification &amp; Enterprise ATS Forensics
                            </h3>
                            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                                Built to prove how the same five-layer intelligence architecture can power a high-empathy, mass-appeal consumer AI application. CareerWin combines real-time LLM resume forensics, role leveling intelligence, and original benchmark research on how enterprise Applicant Tracking Systems parse and score candidates.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {[
                                    'Published the 2026 Enterprise ATS & AI Resume Benchmark Study',
                                    'End-to-end product strategy, UX, LLM pipeline & monetization',
                                    'Accessible 6th-grade plain-English UX with zero consulting fluff',
                                    'Real-time diagnostic scoring & actionable evidence rewriting',
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-200 bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-3">
                                <Link
                                    href="/careerwin"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                                >
                                    Read CareerWin Case Study <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://careerwin.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold text-xs uppercase tracking-wider transition-colors"
                                >
                                    Visit CareerWin.ai <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
                            <div className="text-xs font-mono font-bold uppercase text-indigo-400">
                                Product Leadership Proof Point
                            </div>
                            <h4 className="text-lg font-grotesk font-bold text-white">
                                Dual-Market Execution: Enterprise B2B + Consumer B2C
                            </h4>
                            <p className="text-xs text-zinc-300 leading-relaxed">
                                Hiring managers often ask whether a product executive can switch between complex enterprise governance (Exogram) and frictionless self-serve consumer onboarding (CareerWin). Shipping both live in production demonstrates full-spectrum product craftsmanship.
                            </p>
                            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-zinc-400">Core Stack:</span>
                                    <span className="font-mono text-zinc-200">Next.js App Router • Edge • Gemini/LLM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-400">Flagship Study:</span>
                                    <span className="font-mono text-indigo-400">2026 ATS Benchmark</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activePlatform === 'economist' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase">
                                <span>Live Interactive Sandbox • 25 Diagnostic Tools</span>
                            </div>
                            <h3 className="text-2xl font-grotesk font-extrabold text-white">
                                Test How I Model Engineering &amp; Product P&amp;L Live
                            </h3>
                            <p className="text-zinc-300 text-sm leading-relaxed">
                                Move the sliders below to see how I evaluate a software organization&apos;s Revenue Per Engineer (APER) and quantify the engineering capacity trapped in legacy maintenance.
                            </p>

                            <div className="space-y-4 pt-2">
                                <div>
                                    <div className="flex justify-between text-xs font-bold text-zinc-300 mb-1">
                                        <span>Current Product Line ARR:</span>
                                        <span className="font-mono text-emerald-400">${arrInput}M ARR</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={2}
                                        max={100}
                                        step={2}
                                        value={arrInput}
                                        onChange={(e) => setArrInput(Number(e.target.value))}
                                        className="w-full accent-emerald-500 cursor-pointer"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs font-bold text-zinc-300 mb-1">
                                        <span>Total Product &amp; Engineering Headcount:</span>
                                        <span className="font-mono text-emerald-400">{engHeadcount} FTEs</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={5}
                                        max={250}
                                        step={5}
                                        value={engHeadcount}
                                        onChange={(e) => setEngHeadcount(Number(e.target.value))}
                                        className="w-full accent-emerald-500 cursor-pointer"
                                    />
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs font-bold text-zinc-300 mb-1">
                                        <span>% of Sprints Spent on Maintenance &amp; Tech Debt:</span>
                                        <span className="font-mono text-rose-400">{maintenanceShare}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min={20}
                                        max={85}
                                        step={5}
                                        value={maintenanceShare}
                                        onChange={(e) => setMaintenanceShare(Number(e.target.value))}
                                        className="w-full accent-rose-500 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                                    <div className="text-[10px] font-mono uppercase text-zinc-400">ARR Per Engineer (APER)</div>
                                    <div className="text-2xl font-mono font-extrabold text-white mt-1">
                                        ${revenuePerEng.toLocaleString()}
                                    </div>
                                    <div className="text-[11px] text-emerald-400 mt-1">
                                        {revenuePerEng >= 350000 ? 'Top Quartile Efficiency' : 'Below $350K Benchmark'}
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                                    <div className="text-[10px] font-mono uppercase text-zinc-400">Annual Maintenance Carry</div>
                                    <div className="text-2xl font-mono font-extrabold text-rose-400 mt-1">
                                        ${(trappedCapital / 1000000).toFixed(2)}M/yr
                                    </div>
                                    <div className="text-[11px] text-zinc-400 mt-1">
                                        {maintenanceShare}% of R&amp;D payroll
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-zinc-200 leading-relaxed">
                                <strong className="text-emerald-400 block font-mono uppercase mb-1">
                                    90-Day CPO Turnaround Target:
                                </strong>
                                By deprecating bottom-decile zombie features and enforcing AI runtime cost guardrails, we can redirect approximately <strong>${recoverableArrCapacity.toLocaleString()}/yr</strong> of existing engineering capacity back into net-new ARR growth without adding headcount.
                            </div>

                            <div className="flex flex-wrap gap-3 pt-1">
                                <Link
                                    href="/diagnose"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-colors"
                                >
                                    Explore All 25 Diagnostic Tools <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/toolkit"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                                >
                                    See the $29 Operating Kit →
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

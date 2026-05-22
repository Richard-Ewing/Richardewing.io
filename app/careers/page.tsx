'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code2, Network, ShieldAlert, Cpu, Activity, Zap, CheckCircle, TrendingUp, Target, Database, Blocks, Diamond, Lock, LockKeyhole, Shield, TestTube, TerminalSquare, ServerCrash, LayoutTemplate, LineChart, Milestone, HardDrive, Search, Library } from 'lucide-react';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import ShineBorder from '../components/magicui/shine-border';
import { CAREER_PATHS } from '../lib/career-paths';

const ICON_MAP: Record<string, any> = {
    Cpu, Target, Blocks, LockKeyhole, Database, Shield, TestTube, 
    TerminalSquare, ServerCrash, LayoutTemplate, LineChart, 
    Milestone, HardDrive, Search, Library
};

const CMAP: Record<string, { bg: string, text: string, border: string, shadow: string, hoverBg: string, bg10: string }> = {
    cyan: { bg: 'bg-cyan-500/5', text: 'text-cyan-900 font-extrabold font-semibold', border: 'border-cyan-500/20', shadow: 'shadow-[0_0_15px_rgba(6,182,212,0.15)]', hoverBg: 'hover:bg-cyan-500/20', bg10: 'bg-cyan-500/10' },
    purple: { bg: 'bg-purple-500/5', text: 'text-purple-900 font-extrabold font-semibold', border: 'border-purple-500/20', shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.15)]', hoverBg: 'hover:bg-purple-500/20', bg10: 'bg-purple-500/10' },
    emerald: { bg: 'bg-emerald-500/5', text: 'text-emerald-900 font-extrabold font-semibold', border: 'border-emerald-500/20', shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.15)]', hoverBg: 'hover:bg-emerald-500/20', bg10: 'bg-emerald-500/10' },
    red: { bg: 'bg-red-500/5', text: 'text-red-500', border: 'border-red-500/20', shadow: 'shadow-[0_0_15px_rgba(239,68,68,0.15)]', hoverBg: 'hover:bg-red-500/20', bg10: 'bg-red-500/10' },
    blue: { bg: 'bg-blue-500/5', text: 'text-blue-900 font-extrabold font-semibold', border: 'border-blue-500/20', shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)]', hoverBg: 'hover:bg-blue-500/20', bg10: 'bg-blue-500/10' },
    pink: { bg: 'bg-pink-500/5', text: 'text-pink-400', border: 'border-pink-500/20', shadow: 'shadow-[0_0_15px_rgba(236,72,153,0.15)]', hoverBg: 'hover:bg-pink-500/20', bg10: 'bg-pink-500/10' },
    amber: { bg: 'bg-amber-500/5', text: 'text-amber-400', border: 'border-amber-500/20', shadow: 'shadow-[0_0_15px_rgba(245,158,11,0.15)]', hoverBg: 'hover:bg-amber-500/20', bg10: 'bg-amber-500/10' },
    orange: { bg: 'bg-orange-500/5', text: 'text-orange-900 font-extrabold font-semibold', border: 'border-orange-500/20', shadow: 'shadow-[0_0_15px_rgba(249,115,22,0.15)]', hoverBg: 'hover:bg-orange-500/20', bg10: 'bg-orange-500/10' },
    indigo: { bg: 'bg-indigo-500/5', text: 'text-indigo-900 font-extrabold font-semibold', border: 'border-indigo-500/20', shadow: 'shadow-[0_0_15px_rgba(99,102,241,0.15)]', hoverBg: 'hover:bg-indigo-500/20', bg10: 'bg-indigo-500/10' },
    slate: { bg: 'bg-slate-500/5', text: 'text-zinc-950 font-bold', border: 'border-slate-500/20', shadow: 'shadow-[0_0_15px_rgba(100,116,139,0.15)]', hoverBg: 'hover:bg-slate-500/20', bg10: 'bg-slate-500/10' },
    fuchsia: { bg: 'bg-fuchsia-500/5', text: 'text-zinc-950 font-semibolduchsia-400', border: 'border-fuchsia-500/20', shadow: 'shadow-[0_0_15px_rgba(217,70,239,0.15)]', hoverBg: 'hover:bg-fuchsia-500/20', bg10: 'bg-fuchsia-500/10' },
    yellow: { bg: 'bg-yellow-500/5', text: 'text-yellow-900 font-extrabold font-semibold', border: 'border-yellow-500/20', shadow: 'shadow-[0_0_15px_rgba(234,179,8,0.15)]', hoverBg: 'hover:bg-yellow-500/20', bg10: 'bg-yellow-500/10' },
    teal: { bg: 'bg-teal-500/5', text: 'text-teal-400', border: 'border-teal-500/20', shadow: 'shadow-[0_0_15px_rgba(20,184,166,0.15)]', hoverBg: 'hover:bg-teal-500/20', bg10: 'bg-teal-500/10' },
    rose: { bg: 'bg-rose-500/5', text: 'text-rose-400', border: 'border-rose-500/20', shadow: 'shadow-[0_0_15px_rgba(244,63,94,0.15)]', hoverBg: 'hover:bg-rose-500/20', bg10: 'bg-rose-500/10' },
};


export default function DeepCareersHub() {
    return (
        <div className="max-w-7xl w-full relative z-10 mx-auto px-4 pb-24">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest pt-8">
                <Link href="/" className="hover:text-zinc-900 transition">Home</Link>
                <span>/</span>
                <span className="text-zinc-950 font-bold">2026 Career Pathfinder</span>
            </div>

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-14 mb-16 overflow-hidden relative border border-zinc-400 bg-gradient-to-br from-indigo-50 via-violet-50 to-white">
                    <div className="absolute top-[-20%] right-[-10%] p-64 bg-[var(--accent-purple)]/10 blur-[120px] pointer-events-none rounded-full" />
                    <div className="absolute bottom-[-20%] left-[-10%] p-48 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
                    
                    {/* STATUS BADGE */}
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
                            <span className="font-mono text-xs font-bold font-medium text-emerald-900 font-extrabold font-semibold uppercase tracking-widest font-bold">THE 2026 PARADIGM</span>
                        </div>
                        <span className="text-zinc-950 text-xs font-bold font-mono uppercase tracking-widest hidden sm:inline-block">/</span>
                        <span className="text-zinc-900 text-xs font-bold font-mono uppercase tracking-widest hidden sm:inline-block">Abandon the feature factory. Govern the agents.</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-zinc-950 tracking-tighter mb-6 leading-[0.9]">
                        Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500 italic">Syntax.</span><br />
                        <span className="text-zinc-950 font-light">Into</span> Orchestration<span className="text-emerald-500">.</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-zinc-950 mb-12 max-w-3xl leading-relaxed font-light">
                        The era of competing on "lines of code written" is over. High-capital 2026 engineering roles demand professionals who can architect non-deterministic risk, orchestrate multi-agent workflows, and ruthlessly optimize GPU Unit Economics. 
                        <strong> Select your transition architecture.</strong>
                    </p>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex items-center gap-4 mb-8 border-b border-zinc-400 pb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-zinc-400 flex items-center justify-center">
                        <Network className="text-[var(--accent-cyan)]" size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-zinc-950 tracking-tight">The Executive Five</h2>
                        <p className="text-zinc-950 text-sm font-semibold font-mono uppercase tracking-widest mt-1">Highest ROI Roles for 2026-2030</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* THE 15 PILLARS - TAXONOMY GRID */}
            <div className="space-y-24 mb-24">
                {Array.from(new Set(CAREER_PATHS.map(p => p.domain))).map(domain => {
                    const pathsInDomain = CAREER_PATHS.filter(p => p.domain === domain);
                    return (
                        <div key={domain}>
                            <ScrollReveal>
                                <div className="mb-8 border-b border-zinc-400 pb-4">
                                    <h3 className="text-3xl font-black text-zinc-950 tracking-tight">{domain}</h3>
                                    <p className="text-zinc-950 font-mono text-xs font-bold uppercase tracking-widest mt-1">{pathsInDomain.length} Executive Archetypes</p>
                                </div>
                            </ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {pathsInDomain.map(path => {
                                    const IconNode = ICON_MAP[path.iconName] || Cpu;
                                    const colors = CMAP[path.color] || CMAP.cyan;
                                    return (
                                        <GlowCard key={path.slug} className="p-8 h-full flex flex-col group relative overflow-hidden" glowColor={path.color}>
                                            <div className={`absolute top-0 right-0 w-32 h-32 ${colors.bg} rounded-bl-[100px] pointer-events-none transition-all group-hover:${colors.bg10}`} />
                                            <div className={`w-14 h-14 ${colors.bg10} rounded-2xl flex items-center justify-center mb-6 border ${colors.border} group-hover:scale-110 transition-transform duration-500 ${colors.shadow}`}>
                                                <IconNode className={`${colors.text}`} size={28} />
                                            </div>
                                            <div className={`inline-block px-2 py-1 mb-3 rounded text-[9px] font-mono font-bold ${colors.text} uppercase tracking-widest ${colors.bg10} border ${colors.border} self-start`}>
                                                {path.label}
                                            </div>
                                            <h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">{path.title}</h3>
                                            <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-6">
                                                {path.description}
                                            </p>

                                            <div className="mt-auto relative z-10 pt-4">
                                                <Link href={`/careers/${path.slug}`} className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg ${colors.bg10} ${colors.hoverBg} ${colors.text} font-bold tracking-widest uppercase text-xs font-bold font-medium transition-colors border ${colors.border}`}>
                                                    Explore Strategy
                                                    <ArrowRight size={14} />
                                                </Link>
                                            </div>
                                        </GlowCard>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>


            {/* THE TAXONOMY MATRIX (THE 1,000,000X VALUE PITCH) */}
            <ScrollReveal>
                <div className="mb-20 mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-black text-zinc-950 mb-4 tracking-tighter">The Path to Multi-Million Dollar Capitalization</h2>
                        <p className="text-zinc-900 max-w-2xl mx-auto">This is not a bootcamp. This is the exact telemetry, math, and strategic leverage I use during $7,500/day boardroom interventions. Filtered sequentially by your commitment.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* LOW INTENT - FREE */}
                        <div className="relative group">
                            <div className="h-full bg-white border border-zinc-400 rounded-2xl p-8 hover:border-zinc-500/50 transition-all shadow-xl">
                                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                                    <div className="bg-zinc-200 text-zinc-950 text-xs font-bold font-medium font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-400">Free Access</div>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6">
                                    <Activity className="text-zinc-950 font-bold" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-950 mb-3">Discovery</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium mb-8 leading-relaxed">Assimilate the dialect of Engineering Economics. Required reading before stepping into any VP or Director-level scenario.</p>
                                
                                <ul className="space-y-4 mb-8">
                                    <li>
                                        <Link href="/glossary" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-zinc-200 rounded p-1"><ArrowRight size={12} className="text-zinc-950 group-hover/item:text-zinc-950 transition-colors" /></div>
                                            <div>
                                                <div className="text-sm font-semibold font-bold text-zinc-950 group-hover/item:text-zinc-900">The Lexicon (420+ Terms)</div>
                                                <div className="text-xs font-bold text-zinc-900 font-bold">Master the exact vernacular used by CFOs.</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-zinc-200 rounded p-1"><ArrowRight size={12} className="text-zinc-950 group-hover/item:text-zinc-950 transition-colors" /></div>
                                            <div>
                                                <div className="text-sm font-semibold font-bold text-zinc-950 group-hover/item:text-zinc-900">Core Articles</div>
                                                <div className="text-xs font-bold text-zinc-900 font-bold">100+ deep-dive economic essays.</div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* HIGH INTENT - PREMIUM */}
                        <div className="relative group lg:-mt-4 lg:mb-[-1rem] z-20">
                            <ShineBorder 
                                className="h-full bg-gradient-to-br from-violet-50 to-indigo-50 !border-0 rounded-2xl p-8 shadow-2xl backdrop-blur-xl"
                                color={["#10b981", "#3b82f6", "#8b5cf6"]}
                            >
                                <div className="absolute top-0 right-8 transform -translate-y-1/2 z-30">
                                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-semibold text-xs font-bold font-medium font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]">100,000x Value</div>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                                    <Diamond className="text-indigo-900 font-extrabold font-semibold" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-950 mb-3">The Vault</h3>
                                <p className="text-sm font-semibold text-zinc-950 mb-8 leading-relaxed font-medium">Over 400+ specific economic frameworks, AI sizing calculators, and board-ready deliverables. The fastest route to promotion.</p>
                                
                                <ul className="space-y-4 mb-8">
                                    <li>
                                        <Link href="/vault/curriculum/tracks" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-indigo-500/20 rounded p-1 border border-indigo-500/30"><CheckCircle size={12} className="text-indigo-900 font-extrabold font-semibold" /></div>
                                            <div>
                                                <div className="text-sm font-semibold font-bold text-zinc-900">Full Curriculum Access</div>
                                                <div className="text-xs font-bold text-zinc-900 font-bold">30 tracks covering Agentic scaling, PDI, Serverless GPUs, and M&A Auditing.</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="group/item flex items-start gap-3 opacity-90">
                                            <div className="mt-1 bg-indigo-500/20 rounded p-1 border border-indigo-500/30"><CheckCircle size={12} className="text-indigo-900 font-extrabold font-semibold" /></div>
                                            <div>
                                                <div className="text-sm font-semibold font-bold text-zinc-900">Execution Playbooks</div>
                                                <div className="text-xs font-bold text-zinc-900 font-bold">Step-by-step PDF runbooks for complex migrations.</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                
                                <div className="mt-auto pt-4 relative z-20 text-center">
                                    <a href="/api/buy/all_access_pass" className="inline-block w-full py-3 px-6 bg-white text-black font-bold text-sm font-semibold tracking-widest uppercase rounded-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 hover:shadow-white/20">
                                        Unlock The Vault
                                    </a>
                                </div>
                            </ShineBorder>
                        </div>

                        {/* EXTREME INTENT - VALIDATION */}
                        <div className="relative group">
                            <div className="h-full bg-white border border-zinc-400 rounded-2xl p-8 hover:border-[var(--accent-crimson)]/50 transition-all shadow-xl">
                                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                                    <div className="bg-[var(--bg-primary)] text-[var(--accent-crimson)] text-xs font-bold font-medium font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--accent-crimson)] shadow-[0_0_10px_rgba(255,68,68,0.2)]">Final Validation</div>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-red-50/30 flex items-center justify-center mb-6 border border-red-500/20">
                                    <ShieldAlert className="text-[var(--accent-crimson)]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-950 mb-3">Assessment</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium mb-8 leading-relaxed">Once you understand the math, you must prove judgment. Prove your fiduciary responsibility before touching multi-million dollar R&D budgets.</p>
                                
                                <ul className="space-y-4 mb-8">
                                    <li>
                                        <Link href="/tools/audit-interview" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-red-50/30 rounded p-1 border border-red-500/20"><ArrowRight size={12} className="text-[var(--accent-crimson)] group-hover/item:translate-x-1 transition-transform" /></div>
                                            <div>
                                                <div className="text-sm font-semibold font-bold text-zinc-950 group-hover/item:text-zinc-900">The Audit Interview Protocol</div>
                                                <div className="text-xs font-bold text-zinc-900 font-bold">Test Non-Deterministic Agentic Governance logic.</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/tools/board-room" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-red-50/30 rounded p-1 border border-red-500/20"><ArrowRight size={12} className="text-[var(--accent-crimson)] group-hover/item:translate-x-1 transition-transform" /></div>
                                            <div>
                                                <div className="text-sm font-semibold font-bold text-zinc-950 group-hover/item:text-zinc-900">Executive Board Room</div>
                                                <div className="text-xs font-bold text-zinc-900 font-bold">Run actual capital diagnostics.</div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollReveal>

        </div>
    );
}

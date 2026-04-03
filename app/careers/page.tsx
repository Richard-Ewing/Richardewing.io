'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code2, Network, ShieldAlert, Cpu, Activity, Zap, CheckCircle, TrendingUp, Target, Database, Blocks, Diamond, Lock, LockKeyhole, CpuIcon } from 'lucide-react';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import ShineBorder from '../components/magicui/shine-border';

export default function DeepCareersHub() {
    return (
        <div className="max-w-7xl w-full relative z-10 mx-auto px-4 pb-24">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest pt-8">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-white font-bold">2026 Career Pathfinder</span>
            </div>

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-14 mb-16 overflow-hidden relative border border-white/5 bg-gradient-to-br from-[#0a0c10] via-[#0f1115] to-black">
                    <div className="absolute top-[-20%] right-[-10%] p-64 bg-[var(--accent-purple)]/10 blur-[120px] pointer-events-none rounded-full" />
                    <div className="absolute bottom-[-20%] left-[-10%] p-48 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
                    
                    {/* STATUS BADGE */}
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
                            <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-bold">THE 2026 PARADIGM</span>
                        </div>
                        <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest hidden sm:inline-block">/</span>
                        <span className="text-zinc-400 text-xs font-mono uppercase tracking-widest hidden sm:inline-block">Abandon the feature factory. Govern the agents.</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
                        Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500 italic">Syntax.</span><br />
                        <span className="text-zinc-500 font-light">Into</span> Orchestration<span className="text-emerald-500">.</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-zinc-300 mb-12 max-w-3xl leading-relaxed font-light">
                        The era of competing on "lines of code written" is over. High-capital 2026 engineering roles demand professionals who can architect non-deterministic risk, orchestrate multi-agent workflows, and ruthlessly optimize GPU Unit Economics. 
                        <strong> Select your transition architecture.</strong>
                    </p>
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Network className="text-[var(--accent-cyan)]" size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white tracking-tight">The Executive Five</h2>
                        <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mt-1">Highest ROI Roles for 2026-2030</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* THE 5 PILLARS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-24">
                
                {/* 1. Agentic Architect */}
                <GlowCard className="p-8 h-full flex flex-col group relative overflow-hidden" glowColor="cyan">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:bg-cyan-500/10" />
                    <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                        <CpuIcon className="text-cyan-400" size={28} />
                    </div>
                    <div className="inline-block px-2 py-1 mb-3 rounded text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 border border-cyan-400/20 self-start">The Orchestrator</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Agentic Solutions Architect</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Transition from human-orchestrated microservices to autonomous Agentic Process Automation (APA). 
                        Master Neural-Symbolic reasoning architectures, tool-use logic limits, and the deterministic boundaries required to prevent hallucination explosions.
                    </p>

                    <div className="space-y-4 mt-auto relative z-10">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-b border-white/5 pb-2">Mastery Curriculum</div>
                        <Link href="/vault/curriculum/tracks?filter=ai-agent-economics" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-cyan-400 transition-colors">Track 13: AI Agent Economics</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=28" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-cyan-400 transition-colors">Track 28: Agentic Process Automation</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=23" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-cyan-400 transition-colors">Track 23: Neural-Symbolic System 2</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-cyan-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </GlowCard>

                {/* 2. Product Economist */}
                <GlowCard className="p-8 h-full flex flex-col group relative overflow-hidden" glowColor="purple">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:bg-purple-500/10" />
                    <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                        <Target className="text-purple-400" size={28} />
                    </div>
                    <div className="inline-block px-2 py-1 mb-3 rounded text-[9px] font-mono font-bold text-purple-400 uppercase tracking-widest bg-purple-400/10 border border-purple-400/20 self-start">The Visionary</div>
                    <h3 className="text-2xl font-bold text-white mb-3">AI Product Economist</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Stop prioritizing features by "vibe." Evaluate the exact API token-cost-to-revenue ratio for generative features. 
                        Govern the product roadmap as a fiduciary asset, measuring AI Unit Economics and mapping R&D spend directly to enterprise valuation.
                    </p>

                    <div className="space-y-4 mt-auto relative z-10">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-b border-white/5 pb-2">Mastery Curriculum</div>
                        <Link href="/vault/curriculum/tracks?filter=ai-product-economics" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-purple-400 transition-colors">Track 2: AI Product Economics</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-purple-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=29" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-purple-400 transition-colors">Track 29: AI Supply Chain & GPU FinOps</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-purple-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=30" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-purple-400 transition-colors">Track 30: AI Sovereignty & CAIO</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-purple-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </GlowCard>

                {/* 3. Platform & SLM Scaling */}
                <GlowCard className="p-8 h-full flex flex-col group relative overflow-hidden" glowColor="emerald">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:bg-emerald-500/10" />
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                        <Blocks className="text-emerald-400" size={28} />
                    </div>
                    <div className="inline-block px-2 py-1 mb-3 rounded text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 border border-emerald-400/20 self-start">The Scaler</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Platform & Edge Engineer</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        The ultimate weapon against API vendor lock-in. Scale internal developer platforms (IDP), drastically cut API costs by deploying Small Language Models (SLMs) to the edge natively, and orchestrate Cloud Repatriation deployments.
                    </p>

                    <div className="space-y-4 mt-auto relative z-10">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-b border-white/5 pb-2">Mastery Curriculum</div>
                        <Link href="/vault/curriculum/tracks?filter=devops-economics" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-emerald-400 transition-colors">Track 5: DevOps & Platform Econ</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-emerald-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=cloud-finops" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-emerald-400 transition-colors">Track 14: Cloud FinOps Frameworks</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-emerald-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=27" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-emerald-400 transition-colors">Track 27: SLMs & Edge Intelligence</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-emerald-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </GlowCard>

                {/* 4. AI Security & Fiduciary */}
                <GlowCard className="p-8 h-full flex flex-col group relative overflow-hidden xl:col-span-1 lg:col-span-2 sm:col-span-1" glowColor="red">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:bg-red-500/10" />
                    <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                        <LockKeyhole className="text-red-400" size={28} />
                    </div>
                    <div className="inline-block px-2 py-1 mb-3 rounded text-[9px] font-mono font-bold text-red-400 uppercase tracking-widest bg-red-400/10 border border-red-400/20 self-start">The Protector</div>
                    <h3 className="text-2xl font-bold text-white mb-3">AI Security & Fiduciary (CISO)</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Protect the enterprise against zero-day autonomous threats. Map Post-Quantum cryptographic deprecation costs, isolate AI sandbox privileges, and defend violently against multi-modal Prompt Injection vectors.
                    </p>

                    <div className="space-y-4 mt-auto relative z-10 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0 xl:block xl:space-y-4">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-b border-white/5 pb-2 lg:col-span-2 xl:col-span-1">Mastery Curriculum</div>
                        <Link href="/vault/curriculum/tracks?filter=24" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-red-400 transition-colors">Track 24: Threat Modeling Post-QA</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-red-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=security-economics" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-red-400 transition-colors">Track 7: Security Margin Economics</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-red-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </GlowCard>

                {/* 5. Synthetic Data / Foundations */}
                <GlowCard className="p-8 h-full flex flex-col group relative overflow-hidden lg:col-span-1" glowColor="blue">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:bg-blue-500/10" />
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        <Database className="text-blue-400" size={28} />
                    </div>
                    <div className="inline-block px-2 py-1 mb-3 rounded text-[9px] font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-400/10 border border-blue-400/20 self-start">The Foundation</div>
                    <h3 className="text-2xl font-bold text-white mb-3">Synthetic Data Architecture</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Human organic data has been exhausted. Scale the walls of Model Collapse by building massive Synthetic Data generation pipelines, maintaining high-fidelity truth anchoring, and feeding domain-locked fine-tuning regimens.
                    </p>

                    <div className="space-y-4 mt-auto relative z-10">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-b border-white/5 pb-2">Mastery Curriculum</div>
                        <Link href="/vault/curriculum/tracks?filter=26" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-blue-400 transition-colors">Track 26: Synthetic Data Economics</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-blue-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=data-economics" className="flex items-center justify-between group/link hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                            <span className="text-sm font-medium text-gray-300 group-hover/link:text-blue-400 transition-colors">Track 8: Data Wall & Analysis TCO</span>
                            <ArrowRight size={14} className="text-zinc-600 group-hover/link:text-blue-400 group-hover/link:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </GlowCard>

            </div>


            {/* THE TAXONOMY MATRIX (THE 1,000,000X VALUE PITCH) */}
            <ScrollReveal>
                <div className="mb-20 mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tighter">The Path to Multi-Million Dollar Capitalization</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">This is not a bootcamp. This is the exact telemetry, math, and strategic leverage I use during $7,500/day boardroom interventions. Filtered sequentially by your commitment.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* LOW INTENT - FREE */}
                        <div className="relative group">
                            <div className="h-full bg-[#0a0c10] border border-white/10 rounded-2xl p-8 hover:border-zinc-500/50 transition-all shadow-xl">
                                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                                    <div className="bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">Free Access</div>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center mb-6">
                                    <Activity className="text-zinc-400" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Discovery (Top Funnel)</h3>
                                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">Assimilate the dialect of Engineering Economics. Required reading before stepping into any VP or Director-level scenario.</p>
                                
                                <ul className="space-y-4 mb-8">
                                    <li>
                                        <Link href="/glossary" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-zinc-800 rounded p-1"><ArrowRight size={12} className="text-zinc-500 group-hover/item:text-white transition-colors" /></div>
                                            <div>
                                                <div className="text-sm font-bold text-zinc-300 group-hover/item:text-white">The Lexicon (420+ Terms)</div>
                                                <div className="text-xs text-zinc-500">Master the exact vernacular used by CFOs.</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-zinc-800 rounded p-1"><ArrowRight size={12} className="text-zinc-500 group-hover/item:text-white transition-colors" /></div>
                                            <div>
                                                <div className="text-sm font-bold text-zinc-300 group-hover/item:text-white">Core Articles</div>
                                                <div className="text-xs text-zinc-500">100+ deep-dive economic essays.</div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* HIGH INTENT - PREMIUM */}
                        <div className="relative group lg:-mt-4 lg:mb-[-1rem] z-20">
                            <ShineBorder 
                                className="h-full bg-gradient-to-br from-[#0f1115] to-[#1a1c23] !border-0 rounded-2xl p-8 shadow-2xl backdrop-blur-xl"
                                color={["#10b981", "#3b82f6", "#8b5cf6"]}
                            >
                                <div className="absolute top-0 right-8 transform -translate-y-1/2 z-30">
                                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]">100,000x Value</div>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                                    <Diamond className="text-indigo-400" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">The Vault (Middle Funnel)</h3>
                                <p className="text-sm text-zinc-300 mb-8 leading-relaxed font-medium">Over 400+ specific economic frameworks, AI sizing calculators, and board-ready deliverables. The fastest route to promotion.</p>
                                
                                <ul className="space-y-4 mb-8">
                                    <li>
                                        <Link href="/vault/curriculum/tracks" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-indigo-500/20 rounded p-1 border border-indigo-500/30"><CheckCircle size={12} className="text-indigo-400" /></div>
                                            <div>
                                                <div className="text-sm font-bold text-white">Full Curriculum Access</div>
                                                <div className="text-xs text-zinc-400">30 tracks covering Agentic scaling, PDI, Serverless GPUs, and M&A Auditing.</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="group/item flex items-start gap-3 opacity-90">
                                            <div className="mt-1 bg-indigo-500/20 rounded p-1 border border-indigo-500/30"><CheckCircle size={12} className="text-indigo-400" /></div>
                                            <div>
                                                <div className="text-sm font-bold text-white">Execution Playbooks</div>
                                                <div className="text-xs text-zinc-400">Step-by-step PDF runbooks for complex migrations.</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                
                                <div className="mt-auto pt-4 relative z-20 text-center">
                                    <Link href="/doctrine" className="inline-block w-full py-3 px-6 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 hover:shadow-white/20">
                                        Unlock The Vault
                                    </Link>
                                </div>
                            </ShineBorder>
                        </div>

                        {/* EXTREME INTENT - VALIDATION */}
                        <div className="relative group">
                            <div className="h-full bg-[#0a0c10] border border-white/10 rounded-2xl p-8 hover:border-[var(--accent-crimson)]/50 transition-all shadow-xl">
                                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                                    <div className="bg-[var(--bg-primary)] text-[var(--accent-crimson)] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--accent-crimson)] shadow-[0_0_10px_rgba(255,68,68,0.2)]">Final Validation</div>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-red-900/30 flex items-center justify-center mb-6 border border-red-500/20">
                                    <ShieldAlert className="text-[var(--accent-crimson)]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Assessment (Bottom Funnel)</h3>
                                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">Once you understand the math, you must prove judgment. Prove your fiduciary responsibility before touching multi-million dollar R&D budgets.</p>
                                
                                <ul className="space-y-4 mb-8">
                                    <li>
                                        <Link href="/tools/audit-interview" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-red-900/30 rounded p-1 border border-red-500/20"><ArrowRight size={12} className="text-[var(--accent-crimson)] group-hover/item:translate-x-1 transition-transform" /></div>
                                            <div>
                                                <div className="text-sm font-bold text-zinc-300 group-hover/item:text-white">The Audit Interview Protocol</div>
                                                <div className="text-xs text-zinc-500">Test Non-Deterministic Agentic Governance logic.</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/tools/board-room" className="group/item flex items-start gap-3">
                                            <div className="mt-1 bg-red-900/30 rounded p-1 border border-red-500/20"><ArrowRight size={12} className="text-[var(--accent-crimson)] group-hover/item:translate-x-1 transition-transform" /></div>
                                            <div>
                                                <div className="text-sm font-bold text-zinc-300 group-hover/item:text-white">Executive Board Room</div>
                                                <div className="text-xs text-zinc-500">Run actual capital diagnostics.</div>
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

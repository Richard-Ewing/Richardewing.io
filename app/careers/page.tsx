'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code2, Network, ShieldAlert, Cpu, Activity, Zap, CheckCircle, TrendingUp, Target } from 'lucide-react';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import ShineBorder from '../components/magicui/shine-border';

export default function CareersHub() {
    return (
        <div className="max-w-6xl w-full relative z-10 mx-auto px-4 pb-24">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-white font-bold">Careers & Transitions</span>
            </div>

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 overflow-hidden relative border border-white/5 bg-gradient-to-b from-[#0f1115] to-black">
                    <div className="absolute top-0 right-0 p-32 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />
                    
                    {/* STATUS BADGE */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">CAREER PATHFINDER HUB</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tighter mb-4 pr-10">
                        Escape <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500">Syntax.</span><br />
                        Design <span className="text-white">Systems.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
                        The AI Agent era has commoditized code generation. 
                        Your career trajectory is no longer defined by how fast you build, but by your ability to <strong>audit non-deterministic logic</strong> and <strong>protect capital</strong>. Select your transition.
                    </p>
                </div>
            </ScrollReveal>

            {/* DOMAINS */}
            <h2 className="text-2xl font-bold text-white mb-6 font-mono uppercase tracking-widest border-b border-white/10 pb-4">Select Domain</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                {/* ENGINEERING */}
                <GlowCard className="p-8 h-full flex flex-col group" glowColor="cyan">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                        <Code2 className="text-emerald-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Platform Engineering</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Transition from an IC who writes features to an Architect who governs autonomous systems. Learn to spot memory bombs, mitigate structural risk, and own the Technical Insolvency Date.
                    </p>

                    <div className="space-y-3 mt-auto">
                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 border-b border-emerald-500/20 pb-2">Transitions</div>
                        <Link href="/vault/curriculum/tracks?filter=platform-engineering" className="block p-3 rounded-lg bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-colors">
                            <div className="text-sm font-bold text-white group-hover:text-emerald-400">Junior → Senior</div>
                            <div className="text-xs text-zinc-500">Mastering Deterministic Auditing</div>
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=rd-capital-management" className="block p-3 rounded-lg bg-black/40 border border-white/5 hover:border-emerald-500/30 transition-colors">
                            <div className="text-sm font-bold text-white group-hover:text-emerald-400">Senior → Director</div>
                            <div className="text-xs text-zinc-500">Capital Protection & Cloud FinOps</div>
                        </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <Link href="/tools/audit-interview" className="flex items-center gap-2 text-xs font-mono text-emerald-500 hover:text-emerald-400 uppercase tracking-widest">
                            <Zap size={14} /> Take the Assessment Guuntlet →
                        </Link>
                    </div>
                </GlowCard>

                {/* PRODUCT MANAGEMENT */}
                <GlowCard className="p-8 h-full flex flex-col group" glowColor="purple">
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                        <Target className="text-indigo-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Product Management</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Move past the 'Feature Factory.' Understand R&D capital expenditure, AI Unit Economics, and how to weaponize Agentic features without destroying enterprise value.
                    </p>

                    <div className="space-y-3 mt-auto">
                        <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-2 border-b border-indigo-500/20 pb-2">Transitions</div>
                        <Link href="/vault/curriculum/tracks?filter=ai-product-economics" className="block p-3 rounded-lg bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-colors">
                            <div className="text-sm font-bold text-white group-hover:text-indigo-400">Breaking In</div>
                            <div className="text-xs text-zinc-500">The Economics of AI Features</div>
                        </Link>
                        <Link href="/vault/curriculum/tracks?filter=org-design" className="block p-3 rounded-lg bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-colors">
                            <div className="text-sm font-bold text-white group-hover:text-indigo-400">PM → Head of Product</div>
                            <div className="text-xs text-zinc-500">Structuring the R&D Portfolio</div>
                        </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <Link href="/tools/audit-interview" className="flex items-center gap-2 text-xs font-mono text-indigo-500 hover:text-indigo-400 uppercase tracking-widest">
                            <Zap size={14} /> Take the Assessment Guuntlet →
                        </Link>
                    </div>
                </GlowCard>
            </div>


            {/* THE TAXONOMY MATRIX */}
            <ScrollReveal>
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-6 font-mono uppercase tracking-widest border-b border-white/10 pb-4">Knowledge Funnel</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        <div className="bg-[#0f1115] border border-white/5 rounded-xl p-6 hover:border-zinc-500/30 transition-colors">
                            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">Top of Funnel (Discovery)</div>
                            <h3 className="text-lg font-bold text-white mb-2">Mental Models</h3>
                            <p className="text-sm text-zinc-400 mb-6">Language and definitions of the Engineering Economics landscape.</p>
                            <ul className="space-y-2 mb-6">
                                <li><Link href="/glossary" className="text-sm text-zinc-300 hover:text-white flex items-center gap-2"><ArrowRight size={14} className="text-zinc-500"/> Definitions & Lexicon</Link></li>
                                <li><Link href="/blog" className="text-sm text-zinc-300 hover:text-white flex items-center gap-2"><ArrowRight size={14} className="text-zinc-500"/> Core Blog Posts</Link></li>
                            </ul>
                        </div>

                        <div className="bg-[#0f1115] border border-white/5 rounded-xl p-6 hover:border-zinc-500/30 transition-colors">
                            <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">Middle of Funnel (Engagement)</div>
                            <h3 className="text-lg font-bold text-white mb-2">Frameworks & Tracks</h3>
                            <p className="text-sm text-zinc-400 mb-6">Structured deep-dives into Capital Protection and Architecture.</p>
                            <ul className="space-y-2 mb-6">
                                <li><Link href="/vault/curriculum/tracks" className="text-sm text-zinc-300 hover:text-white flex items-center gap-2"><ArrowRight size={14} className="text-zinc-500"/> Curriculum Tracks</Link></li>
                                <li><Link href="/resources/ai-courses" className="text-sm text-zinc-300 hover:text-white flex items-center gap-2"><ArrowRight size={14} className="text-zinc-500"/> Applied AI Courses</Link></li>
                            </ul>
                        </div>

                        <div className="bg-[#0f1115] border border-white/5 rounded-xl p-6 hover:border-emerald-500/30 transition-colors relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest mb-4">Bottom of Funnel (Validation)</div>
                            <h3 className="text-lg font-bold text-white mb-2 relative z-10">Diagnostic Tools</h3>
                            <p className="text-sm text-zinc-400 mb-6 relative z-10">Boardroom-ready instruments used in $7,500 engagements.</p>
                            <ul className="space-y-2 mb-6 relative z-10">
                                <li><Link href="/tools/audit-interview" className="text-sm text-zinc-300 hover:text-emerald-400 flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500"/> The Fiduciary Protocol</Link></li>
                                <li><Link href="/tools" className="text-sm text-zinc-300 hover:text-emerald-400 flex items-center gap-2"><ArrowRight size={14} className="text-emerald-500"/> Diagnostics Hub</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </ScrollReveal>

        </div>
    );
}

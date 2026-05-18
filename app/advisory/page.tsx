"use client";

import React from 'react';
import BlurIn from '@/components/magicui/blur-in';
import ShineBorder from '@/components/magicui/shine-border';
import { BorderBeam } from '@/components/magicui/border-beam';
import Link from 'next/link';

export default function AdvisoryPage() {
    return (
        <main className="pt-20">
            <div className="page-container relative">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.05] pointer-events-none" />

                <section className="section-lg text-center relative z-10">
                    <div className="text-xs font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded bg-purple-500 animate-pulse"></span>
                        AI Consulting & Implementation Strategy
                    </div>
                    <BlurIn word="What is your AI friction point?" className="text-5xl md:text-7xl font-bold font-grotesk tracking-tighter text-zinc-950 mb-6" />
                    <p className="text-zinc-950 font-bold text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
                        I do not sell $50,000 PowerPoint decks. I run specialized engineering taskforces to rescue failed pilots, lock down Shadow AI data leaks, and deploy deterministic, production-ready AI pipelines.
                    </p>

                    <div className="inline-flex items-center gap-6 px-8 py-3 rounded-full bg-white/5 border border-zinc-400 text-xs font-mono tracking-widest text-zinc-950 font-bold">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Q2 Capacity: 2 Slots</span>
                        <span className="text-zinc-900">|</span>
                        <span>Enterprise & SMB Engagements</span>
                    </div>
                </section>

                {/* The Diagnostic Routing Hub */}
                <section className="section relative z-10 pt-0">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold font-grotesk text-zinc-900">Choose Your Solution Path</h2>
                        <p className="text-zinc-950 text-sm font-semibold mt-2">Select the exact pain point your organization is currently facing.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

                        {/* PATH 1: SMB AI Integration (Paralysis) */}
                        <div className="card bg-white border border-zinc-200 shadow-sm relative overflow-hidden group hover:border-emerald-500/50 transition-all">
                            <div className="p-8 h-full flex flex-col">
                                <div>
                                    <div className="text-xs font-bold font-mono text-emerald-600 uppercase tracking-widest mb-4">Pain Point: Paralysis By Choice</div>
                                    <h3 className="text-2xl font-bold text-zinc-950 mb-2">"I don't know where to start."</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                        You are an SMB owner overwhelmed by 10,000 AI tools. You need a fast, prioritized roadmap to save time and reduce costs, without a massive consulting contract.
                                    </p>
                                    <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg mb-6">
                                        <div className="text-sm font-bold text-emerald-900 mb-1">The Solution: 48-Hour Strategic Roadmap</div>
                                        <div className="text-xs text-emerald-700">A 2-hour audit generating a 30-day step-by-step action plan.</div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <Link href="/ai-integration" className="flex items-center justify-center w-full py-4 text-xs font-bold font-mono tracking-widest rounded bg-emerald-600 text-white hover:bg-emerald-500 transition-all uppercase shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                        View Advisory Details
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* PATH 2: Pilot Purgatory */}
                        <ShineBorder className="card-featured relative p-0 overflow-hidden bg-white shadow-lg flex flex-col h-full" color={["#3b82f6", "#2563eb"]}>
                            <BorderBeam size={300} duration={12} delay={9} borderWidth={2} colorFrom="#3b82f6" colorTo="#1d4ed8" />
                            <div className="p-8 relative z-10 flex flex-col h-full">
                                <div>
                                    <div className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest mb-4">Pain Point: Pilot Purgatory</div>
                                    <h3 className="text-2xl font-bold text-zinc-950 mb-2">"Our AI pilot is failing in production."</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                        You built a LangChain demo, but it hallucinates, loops, or fails unpredictably when exposed to real users. You need to bridge the MLOps gap immediately.
                                    </p>
                                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-6">
                                        <div className="text-sm font-bold text-blue-900 mb-1">The Solution: Pilot Extraction Sprint</div>
                                        <div className="text-xs text-blue-700">We replace probabilistic APIs with deterministic runtime governance and deploy proper telemetry.</div>
                                        <div className="mt-2 text-sm font-bold text-zinc-900">$10,000 / mo</div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <a href="mailto:richard@richardewing.io?subject=Inquiry: Pilot Extraction" className="flex items-center justify-center w-full py-4 text-xs font-bold font-mono tracking-widest rounded bg-blue-600 text-white hover:bg-blue-500 transition-all uppercase shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                        Request Extraction
                                    </a>
                                </div>
                            </div>
                        </ShineBorder>

                        {/* PATH 3: Shadow AI & Data Leaks */}
                        <div className="card bg-white border border-zinc-200 shadow-sm relative overflow-hidden group hover:border-purple-500/50 transition-all">
                            <div className="p-8 h-full flex flex-col">
                                <div>
                                    <div className="text-xs font-bold font-mono text-purple-600 uppercase tracking-widest mb-4">Pain Point: Data Leaks</div>
                                    <h3 className="text-2xl font-bold text-zinc-950 mb-2">"Employees are using Shadow AI."</h3>
                                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                        You are terrified of IP leaks into public LLMs. You need to lock down rogue AI usage and install secure, sovereign models within your VPC to ensure SOC2 compliance.
                                    </p>
                                    <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg mb-6">
                                        <div className="text-sm font-bold text-purple-900 mb-1">The Solution: Shadow AI Governance Audit</div>
                                        <div className="text-xs text-purple-700">We identify leaks, cut API taxes, and repatriate your models securely.</div>
                                        <div className="mt-2 text-sm font-bold text-zinc-900">$10,000 / mo</div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <a href="mailto:richard@richardewing.io?subject=Inquiry: Shadow AI Governance" className="flex items-center justify-center w-full py-4 text-xs font-bold font-mono tracking-widest rounded bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-all uppercase">
                                        Secure Your Data
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* PATH 4: Tech Due Diligence */}
                        <div className="card bg-zinc-900 border border-zinc-800 shadow-sm relative overflow-hidden group hover:border-cyan-500/50 transition-all">
                            <div className="p-8 h-full flex flex-col">
                                <div>
                                    <div className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest mb-4">Pain Point: M&A Blindspots</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">"Is this SaaS acquisition full of tech debt?"</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                        Private Equity & Search Funds: Before you sign the term sheet, you need to know the exact Product Debt Index (PDI) and blast radius of their architecture.
                                    </p>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-lg mb-6">
                                        <div className="text-sm font-bold text-white mb-1">The Solution: Technical Due Diligence</div>
                                        <div className="text-xs text-zinc-400">Intensive 2-week forensic code audit and investment thesis generation.</div>
                                        <div className="mt-2 text-sm font-bold text-cyan-400">$15,000 / deal</div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <a href="mailto:richard@richardewing.io?subject=Inquiry: Tech Due Diligence" className="flex items-center justify-center w-full py-4 text-xs font-bold font-mono tracking-widest rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all uppercase">
                                        Inquire Availability
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Standalone Diagnostics / Lower Tier */}
                <section className="section-sm max-w-4xl mx-auto border-t border-zinc-200 pt-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold font-grotesk text-zinc-900">Standalone Diagnostics</h2>
                        <p className="text-zinc-600 text-sm font-semibold mt-2">Specialized immediate-impact tactical sessions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm hover:border-cyan-500/30 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-zinc-900">The 60-Min Insolvency Audit</h3>
                                <span className="font-mono text-cyan-700 font-extrabold font-semibold">$2,500</span>
                            </div>
                            <p className="text-sm text-zinc-600 mb-4">You run the PDI tool, you don't like the number. We sit down for 60 minutes, locate the exact capital leak, and formulate an immediate reduction strategy.</p>
                            <a href="/api/buy/insolvency_diagnostic" className="text-xs font-bold font-mono text-cyan-600 uppercase tracking-widest hover:text-cyan-800">Book Session →</a>
                        </div>

                        <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-sm hover:border-amber-500/30 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-zinc-900">Gut-Check Evaluation</h3>
                                <span className="font-mono text-amber-600">$450</span>
                            </div>
                            <p className="text-sm text-zinc-600 mb-4">Not sure if you have a problem? A 30-minute rapid-fire session. You describe your AWS bill and velocity, I tell you if your building is on fire.</p>
                            <a href="/api/buy/gut_check" className="text-xs font-bold font-mono text-amber-600 uppercase tracking-widest hover:text-amber-700">Schedule Evaluation →</a>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

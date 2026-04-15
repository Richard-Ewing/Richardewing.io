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
                    <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded bg-purple-500 animate-pulse"></span>
                        Executive Integration Partners
                    </div>
                    <BlurIn word="Beyond Architecture." className="text-5xl md:text-7xl font-bold font-grotesk tracking-tighter text-zinc-950 mb-6" />
                    <p className="text-zinc-800 text-lg sm:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
                        The Curriculum provides the blueprints. Advisory provides the execution. 
                        I run specialized taskforces to secure Board-level outcomes: repatriating cloud costs, implementing sovereign AI architectures, and forensically auditing startups for Private Equity acquisition.
                    </p>

                    <div className="inline-flex items-center gap-6 px-8 py-3 rounded-full bg-white/5 border border-zinc-400 text-xs font-mono font-bold tracking-widest text-zinc-800">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Q2 Capacity: 1 Slot</span>
                        <span className="text-zinc-900">|</span>
                        <span>$50M+ ARR Entities</span>
                    </div>
                </section>

                {/* 3-Tier Executive Funnel */}
                <section className="section relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

                        {/* TIER 1: Technical Due Diligence */}
                        <div className="card bg-zinc-100 border border-zinc-400 relative overflow-hidden group">
                            <div className="p-8">
                                <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">Tier 1: Private Equity</div>
                                <h3 className="text-2xl font-bold text-zinc-950 mb-2">Technical Due Diligence</h3>
                                <div className="text-4xl font-mono text-zinc-950 mb-6">$15,000<span className="text-sm text-zinc-950"> / deal</span></div>
                                <p className="text-zinc-900 text-sm leading-relaxed mb-8 min-h-[120px]">
                                    Intensive 2-week forensic code and architecture audit. Determine the exact technical debt and blast radiuses before you sign the term sheet to acquire a SaaS company.
                                </p>
                                <ul className="space-y-4 mb-8 text-sm text-zinc-900">
                                    <li className="flex items-start gap-3"><span className="text-cyan-500 mt-1 font-mono text-xs font-medium">01</span> PDI (Product Debt Index) Analysis</li>
                                    <li className="flex items-start gap-3"><span className="text-cyan-500 mt-1 font-mono text-xs font-medium">02</span> Security & Shadow AI Audit</li>
                                    <li className="flex items-start gap-3"><span className="text-cyan-500 mt-1 font-mono text-xs font-medium">03</span> Cloud Arbitration Risk Model</li>
                                    <li className="flex items-start gap-3"><span className="text-cyan-500 mt-1 font-mono text-xs font-medium">04</span> Board-ready Investment Thesis</li>
                                </ul>
                                <a href="mailto:richard@richardewing.io?subject=Inquiry: Technical Due Diligence" className="flex items-center justify-center w-full py-4 text-xs font-bold font-mono tracking-widest rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all uppercase">
                                    Inquire Availability
                                </a>
                            </div>
                        </div>

                        {/* TIER 2: Fractional AI SecOps */}
                        <ShineBorder className="card-featured relative p-0 overflow-hidden bg-white" color={["#10b981", "#34d399"]}>
                            <BorderBeam size={300} duration={12} delay={9} borderWidth={2} colorFrom="#10b981" colorTo="#3b82f6" />
                            <div className="p-8 relative z-10 bg-gradient-to-b from-emerald-900/10 to-transparent">
                                <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium font-bold tracking-widest font-mono border-b border-l border-emerald-500/20 rounded-bl-lg">TOP TIER</div>
                                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-4">Tier 2: Mid-Market Execution</div>
                                <h3 className="text-2xl font-bold text-zinc-950 mb-2">AI & SecOps Taskforce</h3>
                                <div className="text-4xl font-mono text-zinc-950 mb-6">$10,000<span className="text-sm text-zinc-900"> / mo</span></div>
                                <p className="text-zinc-950 text-sm leading-relaxed mb-8 min-h-[120px]">
                                    A 90-day sprint engagement to rip out standard OpenAI endpoints and securely implement sovereign, localized SLMs inside your VPC. Kill the API tax and ensure SOC2 data sovereignty.
                                </p>
                                <ul className="space-y-4 mb-8 text-sm text-zinc-950">
                                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1 font-mono text-xs font-medium">01</span> SLM Hardware Repatriation</li>
                                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1 font-mono text-xs font-medium">02</span> RAG Pipeline Optimization</li>
                                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1 font-mono text-xs font-medium">03</span> Agentic Workflow Automation</li>
                                    <li className="flex items-start gap-3"><span className="text-emerald-500 mt-1 font-mono text-xs font-medium">04</span> Prompt Injection Threat Modeling</li>
                                </ul>
                                <a href="mailto:richard@richardewing.io?subject=Inquiry: AI Taskforce" className="flex items-center justify-center w-full py-4 text-xs font-bold font-mono tracking-widest rounded bg-emerald-600 text-white hover:bg-emerald-500 transition-all uppercase shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                    Secure Taskforce Lead
                                </a>
                            </div>
                        </ShineBorder>

                        {/* TIER 3: Curriculum Retainer */}
                        <div className="card bg-zinc-100 border border-zinc-400 relative overflow-hidden group">
                            <div className="p-8">
                                <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">Tier 3: Enterprise Scale</div>
                                <h3 className="text-2xl font-bold text-zinc-950 mb-2">Methodology Steering</h3>
                                <div className="text-4xl font-mono text-zinc-950 mb-6">$5,000<span className="text-sm text-zinc-950"> / mo</span></div>
                                <p className="text-zinc-900 text-sm leading-relaxed mb-8 min-h-[120px]">
                                    For VPEs who purchased the 57-Track Vault Pass. Placed on retainer, I run the steering committee to deploy specific tracks directly onto your engineering floor to ensure massive adoption.
                                </p>
                                <ul className="space-y-4 mb-8 text-sm text-zinc-900">
                                    <li className="flex items-start gap-3"><span className="text-purple-500 mt-1 font-mono text-xs font-medium">01</span> Bi-weekly VPE Strategy Ops</li>
                                    <li className="flex items-start gap-3"><span className="text-purple-500 mt-1 font-mono text-xs font-medium">02</span> Middle-Management Alignment</li>
                                    <li className="flex items-start gap-3"><span className="text-purple-500 mt-1 font-mono text-xs font-medium">03</span> B2B SaaS Economics Integration</li>
                                    <li className="flex items-start gap-3"><span className="text-purple-500 mt-1 font-mono text-xs font-medium">04</span> Async Architecture Reviews</li>
                                </ul>
                                <a href="mailto:richard@richardewing.io?subject=Inquiry: Methodology Steering" className="flex items-center justify-center w-full py-4 text-xs font-bold font-mono tracking-widest rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-all uppercase">
                                    Request Retainer
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Additional / Footer Services */}
                <section className="section-sm max-w-4xl mx-auto border-t border-zinc-400 pt-16">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold font-grotesk text-zinc-900">Standalone Diagnostics</h2>
                        <p className="text-zinc-950 text-sm mt-2">Specialized immediate-impact tactical sessions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/50 border border-zinc-400 p-6 rounded-2xl hover:border-cyan-500/30 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-zinc-900">The 60-Min Insolvency Audit</h3>
                                <span className="font-mono text-cyan-400">$2,500</span>
                            </div>
                            <p className="text-sm text-zinc-950 mb-4">You run the PDI tool, you don't like the number. We sit down for 60 minutes, locate the exact capital leak, and formulate an immediate reduction strategy.</p>
                            <a href="/api/buy/insolvency_diagnostic" className="text-xs font-mono text-cyan-500 uppercase tracking-widest hover:text-cyan-400">Book Session →</a>
                        </div>

                        <div className="bg-white/50 border border-zinc-400 p-6 rounded-2xl hover:border-amber-500/30 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-zinc-900">Gut-Check Evaluation</h3>
                                <span className="font-mono text-amber-400">$450</span>
                            </div>
                            <p className="text-sm text-zinc-950 mb-4">Not sure if you have a problem? A 30-minute rapid-fire session. You describe your AWS bill and velocity, I tell you if your building is on fire.</p>
                            <a href="/api/buy/gut_check" className="text-xs font-mono text-amber-500 uppercase tracking-widest hover:text-amber-400">Schedule Evaluation →</a>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

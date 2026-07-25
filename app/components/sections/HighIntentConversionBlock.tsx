'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ScrollReveal } from '../magicui/scroll-reveal';

export default function HighIntentConversionBlock() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden border-t-4 border-amber-500">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            
            <div className="page-container max-w-5xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                            <ShieldAlert className="w-4 h-4" />
                            <span>Executive Intervention Required</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-grotesk font-black text-white mb-6 leading-tight">
                            From unknown to governed.
                        </h2>
                        <p className="text-xl text-zinc-200 font-medium max-w-3xl mx-auto">
                            Every engagement produces a concrete deliverable. Each step builds on the last.
                        </p>
                    </div>
                </ScrollReveal>


                {/* Funnel entry - zero-risk starting point */}
                <ScrollReveal>
                    <div className="mb-10 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 text-center">
                        <div className="text-emerald-400 font-grotesk font-black text-2xl uppercase tracking-wider mb-1">Find Your Margin Leakage</div>
                        <h3 className="text-sm font-mono font-bold text-zinc-400 mb-2">Free AI Unit Economics Benchmark</h3>
                        <p className="text-zinc-300 text-sm mb-5 max-w-lg mx-auto">Answer 10 questions about your AI infrastructure. Get an immediate economics score with estimated margin leakage and top risks. Free, no login required.</p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href="/tools/aueb" className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] group/btn">
                                Run Free Benchmark <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                            <span className="text-zinc-500 text-sm">or</span>
                            <Link href="/services" className="text-amber-400 hover:text-amber-300 font-bold text-sm transition-colors underline underline-offset-2 decoration-amber-500/40">
                                Book a $450 Gut-Check Session →
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {/* Step 1: $450 Gut-Check */}
                    <ScrollReveal delay={50}>
                        <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-[30px] translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/20 transition-colors" />
                            
                            <div className="text-emerald-400 font-grotesk font-black text-2xl uppercase tracking-wider mb-1">Validate the Findings</div>
                            <h3 className="text-sm font-mono font-bold text-zinc-400 mb-3">Executive Diagnostic</h3>
                            <div className="text-2xl font-bold text-white font-mono mb-4 pb-4 border-b border-zinc-800">$450 <span className="text-sm text-zinc-500">30 min</span></div>
                            
                            <p className="text-zinc-300 mb-6 font-medium leading-relaxed text-sm">
                                A 30-minute rapid scan of your AWS, API, and AI billing. You get a written summary of the three largest cost risks and whether a full audit is warranted.
                            </p>
                            
                            <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="text-white font-medium text-sm">Top 3 cost risks identified</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="text-white font-medium text-sm">Go/no-go on full audit</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="text-white font-medium text-sm">Written findings summary</span>
                                </li>
                            </ul>
                            
                            <Link href="/services" className="w-full py-3 border border-emerald-500/60 text-emerald-400 hover:bg-emerald-500/10 text-center font-bold font-grotesk rounded-xl transition-all flex items-center justify-center gap-2 group/btn text-sm">
                                Book Gut-Check <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Step 2: $2,500 Diagnostic */}
                    <ScrollReveal delay={100}>
                        <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-amber-500/50 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2 group-hover:bg-amber-500/20 transition-colors" />
                            
                            <div className="text-amber-500 font-grotesk font-black text-2xl uppercase tracking-wider mb-1">Quantify the Losses</div>
                            <h3 className="text-sm font-mono font-bold text-zinc-400 mb-3">R&D Capital Audit</h3>
                            <div className="text-2xl font-bold text-white font-mono mb-6 pb-6 border-b border-zinc-800">$2,500 <span className="text-sm text-zinc-500">Fixed-Fee</span></div>
                            
                            <p className="text-zinc-200 mb-8 font-medium leading-relaxed">
                                A surgical 7-day audit of your AI infrastructure, identifying where R&D capital is leaking and how to mathematically constrain execution costs.
                            </p>
                            
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span className="text-white font-semibold">Unit Economics Audit & Margin Analysis</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span className="text-white font-semibold">Shadow AI & Security Risk Report</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span className="text-white font-semibold">Technical Debt Liability Matrix</span>
                                </li>
                            </ul>
                            
                            <Link href="/contact" className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black text-center font-bold font-grotesk rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 group/btn">
                                Book a $2,500 Diagnostic <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Retainer Block */}
                    <ScrollReveal delay={200}>
                        <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8 flex flex-col relative overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                            <div className="text-zinc-200 font-grotesk font-black text-2xl uppercase tracking-wider mb-1">Fix the System</div>
                            <h3 className="text-sm font-mono font-bold text-zinc-500 mb-3">Advisory Retainer</h3>
                            <div className="text-2xl font-bold text-white font-mono mb-6 pb-6 border-b border-zinc-800">$7,500<span className="text-sm text-zinc-500">/month</span></div>
                            
                            <p className="text-zinc-200 mb-8 font-medium leading-relaxed">
                                Following the diagnostic, we move into execution. I operate as a fractional AI Economist, implementing deterministic governance and board-ready reporting.
                            </p>
                            
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                    <span className="text-white font-semibold">Strict Cost-Cap Architecture Reviews</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                    <span className="text-white font-semibold">CFO-Level ROI Dashboards</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                                    <span className="text-white font-semibold">Board Meeting Representation</span>
                                </li>
                            </ul>
                            
                            <div className="w-full py-4 border border-zinc-700 text-zinc-200 text-center font-bold font-grotesk rounded-xl bg-zinc-900/50 cursor-default">
                                Available after Diagnostic
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-zinc-500 font-mono text-sm font-semibold max-w-2xl mx-auto">
                        Built for CTOs who answer to boards and CFOs who answer to investors.
                    </p>
                </div>
            </div>
        </section>
    );
}

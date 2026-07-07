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
                            Stop AI Margin Erosion Before <br className="hidden md:block" /> Your Next Board Meeting.
                        </h2>
                        <p className="text-xl text-zinc-200 font-medium max-w-3xl mx-auto">
                            The difference between a successful AI rollout and a margin-destroying liability is deterministic governance. I provide the translation layer between engineering output and CFO-level financial outcomes.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Diagnostic Block */}
                    <ScrollReveal delay={100}>
                        <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-8 md:p-10 flex flex-col relative overflow-hidden group hover:border-amber-500/50 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2 group-hover:bg-amber-500/20 transition-colors" />
                            
                            <div className="text-amber-500 font-mono font-bold text-sm uppercase tracking-widest mb-2">Step 1: Audit</div>
                            <h3 className="text-3xl font-grotesk font-bold text-white mb-4">R&D Capital Diagnostic</h3>
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
                        <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-8 md:p-10 flex flex-col relative overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                            <div className="text-zinc-500 font-mono font-bold text-sm uppercase tracking-widest mb-2">Step 2: Execute</div>
                            <h3 className="text-3xl font-grotesk font-bold text-white mb-4">Advisory Retainer</h3>
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
                                Unlocked after Diagnostic
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-zinc-500 font-mono text-sm font-semibold max-w-2xl mx-auto">
                        Designed for PE-backed SaaS companies and Series B+ organizations struggling to translate AI hype into deterministic gross margin.
                    </p>
                </div>
            </div>
        </section>
    );
}

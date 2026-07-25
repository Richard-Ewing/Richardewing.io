"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';
import { COMMERCIAL_OFFERS } from '@/lib/platform/offers/offers';

export default function HighIntentConversionBlock() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-amber-500/5 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
                            <span>Diagnostic & Advisory Engagements</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-grotesk font-black text-white tracking-tight leading-tight mb-6">
                            Stop Guessing Your AI ROI. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-indigo-400">
                                Inspect the Math.
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                            Whether you need an immediate rapid evaluation or an enterprise governance implementation, we follow a strict diagnostic progression to eliminate wasted spend.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    
                    {/* Free Assessment / Entry */}
                    <ScrollReveal delay={0}>
                        <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-colors">
                            <div className="text-zinc-400 font-grotesk font-bold text-xs uppercase tracking-widest mb-1">Self-Service Benchmark</div>
                            <h3 className="text-xl font-grotesk font-bold text-white mb-3">AI Economics Score</h3>
                            <div className="text-3xl font-bold text-emerald-400 font-mono mb-6 pb-6 border-b border-zinc-800">Free</div>
                            
                            <p className="text-zinc-300 mb-8 text-sm leading-relaxed font-medium">
                                Answer 15 quantitative questions to measure your AI unit economics, cost visibility, and governance maturity.
                            </p>
                            
                            <ul className="space-y-3 mb-10 flex-1 text-sm">
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>Immediate 0-100 score</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>Estimated margin leakage %</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>Printable PDF report export</span>
                                </li>
                            </ul>
                            
                            <Link href="/assessment" className="w-full py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white text-center font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-zinc-700 flex items-center justify-center gap-2">
                                Take Free Assessment <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Rapid Diagnostic ($450) */}
                    <ScrollReveal delay={100}>
                        <div className="h-full rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-500/50 p-6 md:p-8 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                            <span className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-black text-[10px] font-mono font-extrabold uppercase tracking-widest rounded-bl-xl">
                                Recommended Entry
                            </span>
                            
                            <div className="text-amber-400 font-grotesk font-bold text-xs uppercase tracking-widest mb-1">Rapid Diagnostic</div>
                            <h3 className="text-xl font-grotesk font-bold text-white mb-3">Rapid Gut-Check</h3>
                            <div className="text-3xl font-bold text-white font-mono mb-6 pb-6 border-b border-zinc-800">${COMMERCIAL_OFFERS.gut_check.price}<span className="text-xs text-zinc-400">/session</span></div>
                            
                            <p className="text-zinc-300 mb-8 text-sm leading-relaxed font-medium">
                                A 30-minute rapid-fire session to review your AWS/API bill, unit economics, and velocity. Immediate verdict on whether your setup is at risk.
                            </p>
                            
                            <ul className="space-y-3 mb-10 flex-1 text-sm">
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                    <span>30-min 1-on-1 with Richard Ewing</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                    <span>AWS / API billing leak scan</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                    <span>1-click Stripe checkout</span>
                                </li>
                            </ul>
                            
                            <Link href="/services" className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black text-center font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center justify-center gap-2">
                                Book $450 Gut-Check <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Enterprise Advisory Retainer */}
                    <ScrollReveal delay={200}>
                        <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-zinc-700 transition-colors">
                            <div className="text-indigo-400 font-grotesk font-bold text-xs uppercase tracking-widest mb-1">Advisory Retainer</div>
                            <h3 className="text-xl font-grotesk font-bold text-white mb-3">Fractional CTO / Retainer</h3>
                            <div className="text-3xl font-bold text-white font-mono mb-6 pb-6 border-b border-zinc-800">${COMMERCIAL_OFFERS.advisory_retainer.price.toLocaleString()}<span className="text-xs text-zinc-400">/month</span></div>
                            
                            <p className="text-zinc-300 mb-8 text-sm leading-relaxed font-medium">
                                Dedicated fractional technology direction, installing deterministic runtime controls, cost ceilings, and board-ready reporting.
                            </p>
                            
                            <ul className="space-y-3 mb-10 flex-1 text-sm">
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                    <span>Strict Cost-Cap Architecture Reviews</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                    <span>Zero Shadow AI Governance</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                    <span>Board Meeting Representation</span>
                                </li>
                            </ul>
                            
                            <a href="mailto:richardewing@exogram.ai?subject=Inquiry: Enterprise Retainer" className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2">
                                Inquire Retainer <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Award } from 'lucide-react';
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
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest mb-6">
                            <span>Operating Kit, Advisory &amp; Executive Leadership</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-grotesk font-black text-white tracking-tight leading-tight mb-6">
                            Stop Guessing Your AI ROI. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-indigo-400">
                                Own the Financial Models.
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                            Download the self-serve Product &amp; AI Economist Operating Kit for $29, book a 1-on-1 Product P&amp;L Tear-Down, or explore Fractional CPO and Executive Leadership.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    
                    {/* Card 1: $29 Operating Kit (Impulse Digital Download) */}
                    <ScrollReveal delay={0}>
                        <div className="h-full rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-500/60 p-6 md:p-8 flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.15)]">
                            <span className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-black text-[10px] font-mono font-extrabold uppercase tracking-widest rounded-bl-xl">
                                Instant Download
                            </span>
                            
                            <div className="text-amber-400 font-grotesk font-bold text-xs uppercase tracking-widest mb-1">Self-Serve Operating Kit</div>
                            <h3 className="text-xl font-grotesk font-bold text-white mb-3">AI Economist Operating Kit</h3>
                            <div className="text-3xl font-bold text-white font-mono mb-6 pb-6 border-b border-zinc-800">
                                ${COMMERCIAL_OFFERS.operating_kit.price}<span className="text-xs text-zinc-400"> one-time ($79 w/ Team Vault)</span>
                            </div>
                            
                            <p className="text-zinc-300 mb-8 text-sm leading-relaxed font-medium">
                                The exact spreadsheets, board slides, and 30-day P&amp;L runbooks used to scale SaaS from $0 to $25M ARR and turn around a $20M P&amp;L.
                            </p>
                            
                            <ul className="space-y-3 mb-10 flex-1 text-sm">
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                    <span>AI Feature Pricing &amp; Margin Stress-Tester</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                    <span>Zombie Feature Kill-List &amp; Capacity Matrix</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                    <span>12-Slide CFO &amp; Board Defense Blueprint</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                    <span>First-30-Days CPO P&amp;L Turnaround Runbook</span>
                                </li>
                            </ul>
                            
                            <Link href="/toolkit" className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black text-center font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center justify-center gap-2">
                                <Sparkles className="w-4 h-4" /> Get the $29 Operating Kit <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Card 2: $450 Product P&L Tear-Down */}
                    <ScrollReveal delay={100}>
                        <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
                            <div className="text-cyan-400 font-grotesk font-bold text-xs uppercase tracking-widest mb-1">1-on-1 Working Session</div>
                            <h3 className="text-xl font-grotesk font-bold text-white mb-3">Product P&amp;L &amp; Pricing Tear-Down</h3>
                            <div className="text-3xl font-bold text-white font-mono mb-6 pb-6 border-b border-zinc-800">
                                ${COMMERCIAL_OFFERS.gut_check.price}<span className="text-xs text-zinc-400">/session</span>
                            </div>
                            
                            <p className="text-zinc-300 mb-8 text-sm leading-relaxed font-medium">
                                A 60-minute live working session with Richard Ewing to stress-test your AI feature pricing, gross margin risks, and roadmap ROI.
                            </p>
                            
                            <ul className="space-y-3 mb-10 flex-1 text-sm">
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                    <span>60-min 1-on-1 with Richard Ewing</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                    <span>AI Packaging &amp; Gross Margin Audit</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                    <span>Zombie Roadmap Triage &amp; Action Plan</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                    <span>Includes full $79 Operating Kit license</span>
                                </li>
                            </ul>
                            
                            <Link href="/services#gut_check" className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 text-center font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2">
                                Book $450 Tear-Down <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Card 3: Executive Portfolio & Fractional CPO */}
                    <ScrollReveal delay={200}>
                        <div className="h-full rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-indigo-500/40 transition-colors">
                            <div className="text-indigo-400 font-grotesk font-bold text-xs uppercase tracking-widest mb-1">Executive Track Record</div>
                            <h3 className="text-xl font-grotesk font-bold text-white mb-3">Fractional CPO &amp; Portfolio</h3>
                            <div className="text-3xl font-bold text-emerald-400 font-mono mb-6 pb-6 border-b border-zinc-800">
                                $0 → $25M <span className="text-xs text-zinc-400">ARR Proven Scale</span>
                            </div>
                            
                            <p className="text-zinc-300 mb-8 text-sm leading-relaxed font-medium">
                                Exploring a VP of Product, Chief Product Officer, Head of AI Product, Fractional CPO, or Sponsored Research partnership? Inspect the full dossier.
                            </p>
                            
                            <ul className="space-y-3 mb-10 flex-1 text-sm">
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                    <span>Scaled SaaS $0 to $25M ARR (Tyler Tech)</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                    <span>$20M P&amp;L Turnaround (+200% YoY Growth)</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                    <span>Founder of Exogram.ai &amp; CareerWin.ai</span>
                                </li>
                                <li className="flex items-start gap-2 text-zinc-300">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                    <span>Sponsored Research &amp; 0-to-1 AI Builds</span>
                                </li>
                            </ul>
                            
                            <Link href="/portfolio" className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2">
                                <Award className="w-4 h-4" /> View Executive Portfolio <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}


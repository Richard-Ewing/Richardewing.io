import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exogram AI Governance Deterministic Runtime | Richard Ewing',
    description: 'Exogram is a deterministic AI governance runtime. Block shadow AI and enforce strict security boundaries before model execution.',
    alternates: {
        canonical: 'https://www.richardewing.io/exogram',
    },
    openGraph: {
        title: 'Exogram AI Governance Deterministic Runtime | Richard Ewing',
        description: 'Exogram is a deterministic AI governance runtime. Block shadow AI and enforce strict security boundaries before model execution.',
        url: 'https://www.richardewing.io/exogram',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exogram AI Governance Deterministic Runtime | Richard Ewing',
        description: 'Exogram is a deterministic AI governance runtime. Block shadow AI and enforce strict security boundaries before model execution.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

import React from 'react';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import Image from 'next/image';
import BlurIn from '@/components/magicui/blur-in';
import { BorderBeam } from '@/components/magicui/border-beam';
import Meteors from '@/components/magicui/meteors';
import { InteractiveExogramSim } from '../components/visualizations/InteractiveExogramSim';
import AdmissibilityGatewaySimulator from '@/app/components/AdmissibilityGatewaySimulator';
import { ShieldAlert, Brain, Activity, Scale, AlertTriangle, ArrowRight, Clock, DollarSign, Bug, TrendingDown, Users, Building2 } from 'lucide-react';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';


import { exogramSoftwareSchema } from '@/app/lib/schemas';

export default function ExogramPage() {
    return (
        <main className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(exogramSoftwareSchema) }}
            />
            <div className="page-container">

                {/* ═══════════════════════════════════════════════════════
                    HERO — Call Bullshit Hook (Scar Tissue Step 1)
                ═══════════════════════════════════════════════════════ */}
                <section className="section-lg text-center relative overflow-hidden">
                    <Meteors count={20} />

                    <div className="relative z-10">
                        {/* Logo */}
                        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center relative">
                            { }
                            <Image src="/images/exogram/logo-main.png" alt="Exogram Logo" fill className="object-contain" sizes="96px" />
                        </div>

                        <p className="text-[11px] font-bold font-mono text-red-700 uppercase tracking-[0.25em] mb-4">Deterministic AI Governance Runtime</p>

                        <BlurIn word="Your AI Is Making Decisions Nobody Can Verify" className="text-3xl md:text-5xl font-bold text-zinc-950 mb-6 leading-tight" />

                        <p className="text-lg md:text-xl text-zinc-800 max-w-2xl mx-auto mb-8 leading-relaxed">
                            <span className="font-bold text-zinc-950">45% of AI-generated code contains security vulnerabilities.</span> Your agents hallucinate after turn 12. Your team spends 4.3 hours/week checking outputs. Exogram stops it.
                        </p>

                        {/* Hero CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                            <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] text-sm uppercase tracking-wider">
                                Launch Exogram.ai Platform ↗
                            </a>
                            <Link href="/exogram/demo" className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-all text-sm uppercase tracking-wider">
                                Request Live Exogram Demo
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/tools/hallucination-tax" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-zinc-400 text-zinc-950 font-semibold hover:bg-zinc-100 transition-colors text-sm uppercase tracking-wider">
                                <DollarSign className="w-4 h-4 text-emerald-600" />
                                Calculate Hallucination Tax
                            </Link>
                        </div>

                        {/* Founder badge + Visit Exogram */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto items-center mt-4 mb-8">
                            <div className="flex justify-center md:justify-end w-full">
                                <div className="inline-flex items-center gap-3 px-5 h-[52px] w-[260px] rounded-xl bg-white/5 border border-zinc-400 hover:bg-white/10 transition-colors">
                                    { }
                                    <Image src="/assets/headshot.jpg" alt="Richard Ewing" width={32} height={32} className="rounded-full object-cover grayscale opacity-80" />
                                    <div className="text-left flex-1">
                                        <p className="text-zinc-950 font-semibold text-xs font-bold leading-tight">Founded by Richard Ewing</p>
                                        <p className="text-zinc-950 text-xs font-bold font-medium leading-tight">AI Economist</p>
                                    </div>
                                    <div className="pl-3 border-l border-zinc-400 h-6 flex items-center">
                                        <span className="text-green-500 text-xs font-bold font-medium font-mono tracking-wider">LIVE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center md:justify-start w-full">
                                <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden inline-flex items-center justify-between px-5 h-[52px] w-[260px] rounded-xl bg-purple-600/10 text-zinc-950 font-semibold hover:bg-purple-600/20 transition-all group border border-transparent">
                                    <span className="font-semibold text-sm font-semibold z-10">Visit Exogram.ai</span>
                                    <span className="group-hover:translate-x-1 transition-transform z-10">→</span>
                                    <BorderBeam size={60} duration={4} delay={2} borderWidth={1.5} colorFrom="#A855F7" colorTo="#00D4FF" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    THE PROBLEM — Scar Tissue Step 2 (Pain with Numbers)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-200 bg-zinc-100">
                    <div className="max-w-5xl mx-auto px-4 md:px-0">
                        <p className="text-[11px] font-bold font-mono text-red-700 uppercase tracking-[0.25em] mb-4 text-center">The Numbers Nobody Wants to See</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 text-center">Your AI Is Bleeding Money in Production</h2>
                        <p className="text-zinc-700 max-w-2xl mx-auto text-center mb-12">
                            These are not hypothetical risks. This is what&apos;s happening right now across the industry.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {/* Stat 1 */}
                            <div className="p-6 rounded-xl border border-red-200 bg-white relative overflow-hidden group hover:border-red-400 transition-colors">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl rounded-full"></div>
                                <DollarSign className="w-8 h-8 text-red-600 mb-3" />
                                <p className="text-3xl font-bold text-zinc-950 mb-1">$67.4B</p>
                                <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest mb-2">Per Year</p>
                                <p className="text-sm text-zinc-700 font-medium">Global business losses from AI hallucinations. Not theoretical. Measured.</p>
                            </div>

                            {/* Stat 2 */}
                            <div className="p-6 rounded-xl border border-red-200 bg-white relative overflow-hidden group hover:border-red-400 transition-colors">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl rounded-full"></div>
                                <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
                                <p className="text-3xl font-bold text-zinc-950 mb-1">88%</p>
                                <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest mb-2">Failure Rate</p>
                                <p className="text-sm text-zinc-700 font-medium">AI agent projects fail in production. Traditional monitoring is blind to semantic failures — HTTP 200 while the agent hallucinates.</p>
                            </div>

                            {/* Stat 3 */}
                            <div className="p-6 rounded-xl border border-red-200 bg-white relative overflow-hidden group hover:border-red-400 transition-colors">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl rounded-full"></div>
                                <Clock className="w-8 h-8 text-red-600 mb-3" />
                                <p className="text-3xl font-bold text-zinc-950 mb-1">4.3 hrs/wk</p>
                                <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest mb-2">Per Employee</p>
                                <p className="text-sm text-zinc-700 font-medium">Verifying AI outputs. That&apos;s $14,200/year per person spent babysitting a system that was supposed to save time.</p>
                            </div>

                            {/* Stat 4 */}
                            <div className="p-6 rounded-xl border border-red-200 bg-white relative overflow-hidden group hover:border-red-400 transition-colors">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl rounded-full"></div>
                                <TrendingDown className="w-8 h-8 text-red-600 mb-3" />
                                <p className="text-3xl font-bold text-zinc-950 mb-1">19% Slower</p>
                                <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest mb-2">METR Study</p>
                                <p className="text-sm text-zinc-700 font-medium">Experienced devs take 19% longer with AI tools. But they <em>feel</em> 24% faster. The productivity illusion is costing you real money.</p>
                            </div>

                            {/* Stat 5 */}
                            <div className="p-6 rounded-xl border border-red-200 bg-white relative overflow-hidden group hover:border-red-400 transition-colors">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl rounded-full"></div>
                                <Bug className="w-8 h-8 text-red-600 mb-3" />
                                <p className="text-3xl font-bold text-zinc-950 mb-1">45%</p>
                                <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest mb-2">Vulnerability Rate</p>
                                <p className="text-sm text-zinc-700 font-medium">AI-generated code contains security vulnerabilities (GitClear). Nearly half of everything your copilot writes is a liability.</p>
                            </div>

                            {/* Stat 6 */}
                            <div className="p-6 rounded-xl border border-red-200 bg-white relative overflow-hidden group hover:border-red-400 transition-colors">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl rounded-full"></div>
                                <Scale className="w-8 h-8 text-red-600 mb-3" />
                                <p className="text-3xl font-bold text-zinc-950 mb-1">Aug 2026</p>
                                <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest mb-2">EU AI Act</p>
                                <p className="text-sm text-zinc-700 font-medium">Full enforcement. Fines up to 7% of global turnover. If you can&apos;t prove governance, you can&apos;t operate.</p>
                            </div>
                        </div>

                        {/* The mic-drop callout */}
                        <div className="max-w-3xl mx-auto border-l-4 border-red-500 bg-white p-6 rounded-r-xl shadow-sm">
                            <p className="text-xl font-bold text-zinc-950 leading-relaxed">
                                The industry is using one unpredictable AI to babysit another unpredictable AI and calling it &quot;governance.&quot;
                            </p>
                            <p className="text-zinc-700 mt-2 font-medium">That is stacked uncertainty. It works for chatbots. It is a disaster for production systems running enterprise software, financial infrastructure, or real-world operations.</p>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    WHAT EXOGRAM IS — Mechanism Reveal (Scar Tissue Step 3)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-200 bg-white">
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <p className="text-[11px] font-bold font-mono text-purple-700 uppercase tracking-[0.25em] mb-4 text-center">The Mechanism</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4 text-center">Exogram Is a Deterministic AI Governance Runtime</h2>
                        <p className="text-zinc-700 max-w-2xl mx-auto text-center mb-12">
                            Not another monitoring dashboard. Not just prompts and guardrails. A verification layer that enforces correctness <em>before</em> output reaches production.
                        </p>

                        {/* What it's NOT / What it IS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="p-6 rounded-xl border border-red-200 bg-red-50/50">
                                <p className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest mb-4">What Exogram Is Not</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-zinc-800">
                                        <span className="text-red-500 font-bold mt-0.5 shrink-0">✕</span>
                                        <span className="font-medium">Another observability dashboard that shows you failures <em>after</em> they happen</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-800">
                                        <span className="text-red-500 font-bold mt-0.5 shrink-0">✕</span>
                                        <span className="font-medium">A prompt-engineering wrapper that hopes the model behaves</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-800">
                                        <span className="text-red-500 font-bold mt-0.5 shrink-0">✕</span>
                                        <span className="font-medium">An LLM-as-a-judge approach — stacking uncertainty on uncertainty</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-800">
                                        <span className="text-red-500 font-bold mt-0.5 shrink-0">✕</span>
                                        <span className="font-medium">A &quot;guardrail&quot; that only catches the failures you already predicted</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/50">
                                <p className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest mb-4">What Exogram Is</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-zinc-800">
                                        <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                                        <span className="font-medium">A <strong>verification layer</strong> that sits between AI reasoning and production execution</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-800">
                                        <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                                        <span className="font-medium"><strong>Deterministic policy enforcement</strong> — binary go/no-go decisions, not probabilistic guesses</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-800">
                                        <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                                        <span className="font-medium">An <strong>auditable execution ledger</strong> that proves why every action was permitted or blocked</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-zinc-800">
                                        <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                                        <span className="font-medium">Like how a <strong>compiler catches errors before runtime</strong> — Exogram catches AI failures before they reach users</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Analogy callout */}
                        <div className="max-w-3xl mx-auto bg-purple-50 border border-purple-200 p-8 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full"></div>
                            <p className="text-xl font-bold text-purple-950 relative z-10">
                                When the early internet started handling real money, we had to invent SSL. AI is at that exact tipping point. Exogram is the SSL certificate for agentic execution.
                            </p>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    WHO NEEDS IT — Target Audience (Scar Tissue Step 4)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-200 bg-zinc-100">
                    <div className="max-w-5xl mx-auto px-4 md:px-0">
                        <p className="text-[11px] font-bold font-mono text-purple-700 uppercase tracking-[0.25em] mb-4 text-center">Who Needs This</p>
                        <h2 className="text-3xl font-bold text-zinc-950 mb-12 text-center">Built for Teams Where AI Failure Has Real Consequences</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl border border-zinc-300 bg-white hover:border-purple-400 transition-colors group">
                                <Users className="w-6 h-6 text-purple-600 mb-3" />
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">VP/Directors of Engineering</h3>
                                <p className="text-sm text-zinc-700 font-medium">Running AI-augmented teams and can&apos;t prove to the CFO that agent output is reliable. Your team spends more time verifying AI than the AI saves.</p>
                            </div>
                            <div className="p-6 rounded-xl border border-zinc-300 bg-white hover:border-purple-400 transition-colors group">
                                <Activity className="w-6 h-6 text-purple-600 mb-3" />
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">Platform Engineers</h3>
                                <p className="text-sm text-zinc-700 font-medium">Deploying AI agents to production and discovering that traditional monitoring is blind to semantic failures. The HTTP returns 200 while the agent hallucinates.</p>
                            </div>
                            <div className="p-6 rounded-xl border border-zinc-300 bg-white hover:border-purple-400 transition-colors group">
                                <ShieldAlert className="w-6 h-6 text-purple-600 mb-3" />
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">CISOs</h3>
                                <p className="text-sm text-zinc-700 font-medium">45% of AI-generated code contains vulnerabilities. 67% of your employees use AI tools. Only 18% of orgs have policies. You need enforcement, not policies.</p>
                            </div>
                            <div className="p-6 rounded-xl border border-zinc-300 bg-white hover:border-purple-400 transition-colors group">
                                <Building2 className="w-6 h-6 text-purple-600 mb-3" />
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">CTOs Facing EU AI Act</h3>
                                <p className="text-sm text-zinc-700 font-medium">Full enforcement August 2026. Fines up to 7% of global turnover. Exogram provides the auditable execution ledger that proves governance to regulators.</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    CTAs — The Hard Truth Pivot (Scar Tissue Step 4/5)
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-200 bg-white">
                    <div className="max-w-4xl mx-auto px-4 md:px-0 text-center">
                        <p className="text-[11px] font-bold font-mono text-purple-700 uppercase tracking-[0.25em] mb-4">Quantify the Damage</p>
                        <h2 className="text-3xl font-bold text-zinc-950 mb-4">Stop Guessing. Start Measuring.</h2>
                        <p className="text-zinc-700 max-w-xl mx-auto mb-12">
                            If you can&apos;t quantify the cost, you can&apos;t govern the system. These tools expose the hidden economics.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/tools/hallucination-tax" className="group p-6 rounded-xl border border-red-200 bg-red-50/50 hover:border-red-400 transition-all text-left">
                                <DollarSign className="w-6 h-6 text-red-600 mb-3" />
                                <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-red-700 transition-colors">Hallucination Tax Calculator</h3>
                                <p className="text-sm text-zinc-700 font-medium mb-4">Calculate exactly how much your org bleeds per year on AI verification, correction, and failure recovery.</p>
                                <span className="text-sm font-bold text-red-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Calculate Your Tax <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                            <Link href="/tools/aueb" className="group p-6 rounded-xl border border-purple-200 bg-purple-50/50 hover:border-purple-400 transition-all text-left">
                                <Brain className="w-6 h-6 text-purple-600 mb-3" />
                                <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-purple-700 transition-colors">AI Economics Audit</h3>
                                <p className="text-sm text-zinc-700 font-medium mb-4">Full diagnostic on your AI unit economics. Find out if your AI tools are assets or liabilities.</p>
                                <span className="text-sm font-bold text-purple-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Run Free Audit <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                            <a href="/api/buy/gut_check" className="group p-6 rounded-xl border border-cyan-200 bg-cyan-50/50 hover:border-cyan-400 transition-all text-left">
                                <Activity className="w-6 h-6 text-cyan-600 mb-3" />
                                <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-700 transition-colors">Gut-Check Call</h3>
                                <p className="text-sm text-zinc-700 font-medium mb-4">30-minute call with Richard Ewing. Bring your AI governance questions. Leave with specific answers.</p>
                                <span className="text-sm font-bold text-cyan-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Book a Call <ArrowRight className="w-4 h-4" />
                                </span>
                            </a>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════════
                    BELOW: All original technical content, preserved in order
                ═══════════════════════════════════════════════════════════ */}


                {/* Ecosystem Presence */}
                <section className="py-10 border-b border-zinc-200 bg-white">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <p className="text-[11px] font-bold font-mono text-zinc-900 font-medium uppercase tracking-[0.2em] mb-6">Ecosystem Presence</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
                            <a href="https://www.producthunt.com/products/exogram-ai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-exogram-ai" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity block">
                                { }
                                <img alt="Exogram.ai - The zero-trust verification layer for enterprise AI | Product Hunt" width="220" height="48" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1142627&theme=light" className="w-[220px] h-auto" />
                            </a>
                            <a href="https://theresanaiforthat.com/ai/exogram/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity block">
                                <div className="flex items-center gap-3 px-5 py-2.5 rounded-lg border border-zinc-300 bg-zinc-50 hover:bg-zinc-100 transition-colors h-[48px]">
                                    <span className="text-xl opacity-80">🤖</span>
                                    <div className="text-left flex flex-col justify-center">
                                        <span className="text-[9px] font-bold text-zinc-800 uppercase tracking-widest leading-none mb-1">Featured On</span>
                                        <span className="text-sm font-bold text-zinc-900 leading-none">There&apos;s An AI For That</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>


                {/* The Four-Layer Substrate */}
                <section className="section bg-white border-y border-zinc-200">
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-2 block">Architecture</span>
                            <h2 className="text-3xl font-bold text-zinc-950 mb-4">The Four-Layer Substrate</h2>
                            <p className="text-zinc-700 max-w-2xl mx-auto">
                                Exogram sits beneath the model layer. Four deterministic layers that enforce governance where probabilistic systems cannot.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-zinc-950 font-bold">Layer I: Persistent Context</h3>
                                    <span className="text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-cyan-500/30">State Graph</span>
                                </div>
                                <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                    The foundational baseline that maintains identity, goals, and operational state across completely different models and platforms. Exogram unifies disconnected memory silos into a single, portable, and persistent state graph.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-zinc-950 font-bold">Layer II: Dynamic Governance</h3>
                                    <span className="text-xs font-bold font-medium font-mono text-purple-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-purple-500/30">Policy Engine</span>
                                </div>
                                <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                    The policy layer that defines the rigid operational boundaries, permission rules, and execution constraints for any given agent. Translates human intent into deterministic operational boundaries.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-zinc-950 font-bold">Layer III: Deterministic Admissibility</h3>
                                    <span className="text-xs font-bold font-medium font-mono text-red-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-red-500/30">Execution Gateway</span>
                                </div>
                                <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                    The runtime execution bouncer. Instead of asking if a probabilistic model <em>can</em> perform an action, this layer deterministically evaluates whether the execution <em>should</em> be allowed to occur at all, intercepting out-of-bounds actions before they hit your infrastructure.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-zinc-950 font-bold">Layer IV: The Auditable Ledger</h3>
                                    <span className="text-xs font-bold font-medium font-mono text-emerald-900 font-extrabold font-semibold px-2 py-0.5 rounded border border-emerald-500/30">Memory v2</span>
                                </div>
                                <p className="text-sm font-semibold text-zinc-900 font-medium leading-relaxed">
                                    An append-only, verifiable history of every action, context shift, and governance decision. It provides execution traceability, transforming passive AI memory into enterprise-grade accountability.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* The Execution Loop */}
                <section className="section bg-[#F5F0EB]">
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-2 block">Execution Interception</span>
                            <h2 className="text-3xl font-bold text-zinc-950 mb-4">The Execution Loop</h2>
                            <p className="text-zinc-700 max-w-2xl mx-auto">
                                Exogram intercepts the standard AI execution loop to inject persistence and deterministic trust.
                            </p>
                        </div>
                        <div className="space-y-6 max-w-2xl mx-auto">
                            {/* Standard Flow */}
                            <div className="rounded-xl border border-rose-200 bg-rose-50 p-6">
                                <h3 className="text-sm font-bold text-rose-800 mb-3 uppercase tracking-widest font-mono">Standard Flow — High Risk, Zero Memory</h3>
                                <div className="flex items-center gap-2 flex-wrap font-mono text-sm text-rose-900">
                                    <span className="px-3 py-1.5 bg-white rounded border border-rose-200">Prompt</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-rose-200">Model</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-rose-200">Execution</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-rose-200">Result</span>
                                </div>
                            </div>
                            {/* Exogram Flow */}
                            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                                <h3 className="text-sm font-bold text-emerald-800 mb-3 uppercase tracking-widest font-mono">Exogram Flow — Trusted, Continuous, Verifiable</h3>
                                <div className="flex items-center gap-2 flex-wrap font-mono text-sm text-emerald-900">
                                    <span className="px-3 py-1.5 bg-white rounded border border-emerald-200">Prompt</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-purple-100 rounded border-2 border-purple-400 font-bold text-purple-900">State Injection</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-emerald-200">Model</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-purple-100 rounded border-2 border-purple-400 font-bold text-purple-900">Admissibility Gateway</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-purple-100 rounded border-2 border-purple-400 font-bold text-purple-900">Ledger Log</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-emerald-200">Execution</span>
                                    <span>→</span>
                                    <span className="px-3 py-1.5 bg-white rounded border border-emerald-200">Result</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Technical Schema — Admissibility Request */}
                <section className="section bg-zinc-100">
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-2 block">Technical Preview</span>
                            <h2 className="text-3xl font-bold text-zinc-950 mb-4">The Admissibility Request</h2>
                            <p className="text-zinc-700 max-w-2xl mx-auto">
                                When an agent attempts to execute an action, it must pass through the Exogram Admissibility Gateway.
                            </p>
                        </div>
                        <div className="bg-white border border-zinc-300 rounded-xl p-6 font-mono text-xs leading-relaxed overflow-x-auto max-w-2xl mx-auto shadow-sm">
                            <pre className="text-zinc-800 whitespace-pre-wrap">{`{
  "execution_request": {
    "agent_id": "agt_8f72c91a",
    "target_system": "aws_production_db",
    "action": "DROP_TABLE",
    "context_hash": "a1b2c3d4e5f6...",
    "exogram_admissibility": {
      "policy_check": "FAILED",
      "reason": "VIOLATES_DYNAMIC_GOVERNANCE_RULE_04:
                NO_DESTRUCTIVE_ACTIONS_IN_PROD",
      "action_permitted": false
    }
  }
}`}</pre>
                        </div>
                    </div>
                </section>


                {/* Exogram Simulation Layer */}
                <section className="section bg-white border border-zinc-200 py-16 relative overflow-hidden border-y border-zinc-200">
                    <div className="max-w-5xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-zinc-950 font-semibold mb-2">Admissibility in Action</h2>
                            <p className="text-zinc-900 font-medium font-medium">Intercepting probabilistic execution before it reaches production environments.</p>
                        </div>
                        <AdmissibilityGatewaySimulator />
                        <InteractiveExogramSim />
                    </div>
                </section>


                {/* Why I Built Exogram — Founder Narrative */}
                <section className="section bg-white border-y border-zinc-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                    <div className="max-w-3xl mx-auto px-4 md:px-0">
                        <h2 className="text-3xl font-bold text-zinc-950 mb-4">Why I Built Exogram</h2>
                        <p className="text-zinc-600 mb-12 uppercase tracking-widest text-xs font-bold font-mono">A Note from the Founder</p>
                        
                        <div className="prose prose-lg prose-zinc max-w-none text-zinc-800 space-y-8 font-medium">
                            <div>
                                <p className="text-xl text-zinc-950 font-semibold mb-6">
                                    I&apos;m a product guy, not a machine learning engineer. I don&apos;t have a Stanford AI lab pedigree, and I didn&apos;t set out to build deep AI infrastructure. <br/>
                                    <span className="text-purple-900">I built Exogram because I was trying to actually use AI to build real things, and the systems kept driving me absolutely crazy.</span>
                                </p>
                                <p>
                                    At first, the experience felt like magic. These frontier models are absolute miracles of cognition. They could scaffold projects and reason through complex logic at insane speeds. But the minute I tried to step back and give these agents real autonomy in my workflows, they lost their minds.
                                </p>
                            </div>

                            <div className="pl-6 border-l-4 border-red-500 bg-red-50/50 p-6 rounded-r-xl my-10 shadow-sm">
                                <h3 className="text-xl font-bold text-red-950 mb-4">They would forget context, contradict themselves, recreate bugs they had just fixed, and hallucinate operational decisions.</h3>
                                <p className="font-semibold text-red-950">
                                    I realized the entire industry is treating these unpredictable, probabilistic systems like they are reliable infrastructure. They are not. <span className="text-red-800 font-bold">Reasoning is not infrastructure.</span>
                                </p>
                            </div>

                            <div>
                                <p>
                                    Exogram is my solution to that nightmare. It sits right between the AI&apos;s brain and the actual execution controls. Exogram operates across four distinct layers: persistent context, dynamic governance, deterministic admissibility, and an auditable ledger.
                                </p>
                                <p className="font-bold text-zinc-950">
                                    Instead of asking if the AI is smart enough to do a task, Exogram acts as a strict, deterministic bouncer that asks if the AI should be allowed to touch the controls at all.
                                </p>
                            </div>

                            <div className="bg-white border border-zinc-200 text-zinc-900 font-medium p-8 rounded-2xl shadow-xl my-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
                                <h3 className="text-xl font-bold text-zinc-950 font-semibold mb-4">Everyone is racing to make AI smarter, faster, and more autonomous.</h3>
                                <p className="text-zinc-800 mb-6 leading-relaxed">The engineers are building brilliant brains, but almost nobody is building the safety net for when these systems actually start running our lives.</p>
                                
                                <p className="text-zinc-800 mb-6 leading-relaxed">What the industry currently calls &quot;memory&quot; is basically just chat history. That is fundamentally inadequate. Autonomous execution requires an auditable ledger.</p>
                                
                                <p className="text-xl text-cyan-900 font-bold border-l-2 border-cyan-400 pl-4 py-1 tracking-tight">
                                    Right now, the industry&apos;s idea of a guardrail is just using one unpredictable AI to babysit another unpredictable AI.<br/>That is stacked uncertainty.
                                </p>
                            </div>

                            <div>
                                <p>
                                    That works fine if you are building a customer service chatbot. It is a total disaster if that AI is running enterprise software, financial systems, or real-world infrastructure.
                                </p>
                                <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl my-8">
                                    <p className="text-lg font-bold text-zinc-950 mb-4">
                                        The biggest problem we face:
                                    </p>
                                    <p className="text-lg font-bold text-purple-900 pl-4 border-l-2 border-purple-500">
                                        We are giving AI the keys to the car without building the brakes. We need a definitive, verifiable way to enforce operational boundaries before these systems cause real damage.
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 bg-purple-50 border border-purple-200 rounded-xl my-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full"></div>
                                <p className="font-bold text-purple-950 text-xl mb-6 relative z-10">
                                    I am genuinely terrified that we are going to lose a shared sense of reality.
                                </p>
                                <p className="text-purple-900 mb-6 leading-relaxed relative z-10">
                                    AI is making it entirely too easy to generate infinite amounts of persuasive, synthetic garbage. If we do not build systems to verify what is real, what is a hallucination, and what is actually allowed to execute, the internet just becomes a massive noise machine. When that bleeds over into how physical infrastructure and human institutions operate, things get very dangerous very quickly.
                                </p>
                                <p className="text-purple-900 font-bold tracking-wide uppercase text-sm relative z-10">
                                    That is the gap Exogram was built to address.
                                </p>
                            </div>

                            <div>
                                <div className="mt-12 pt-8 border-t border-zinc-200">
                                    <p className="text-xl font-bold text-zinc-950 mb-6 leading-relaxed">
                                        I want Exogram to become the absolute default layer of trust for the next era of AI. I want to build the SSL certificate for autonomous agents.
                                    </p>
                                    <p className="mb-6 leading-relaxed">
                                        When the early internet started handling real money and sensitive data, we had to invent new security protocols to make it safe for the real world. AI is at that exact same tipping point right now.
                                    </p>
                                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                                        I want to make autonomous intelligence persistent and verifiable so we can drive this technology as fast as possible without dying in the process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Why This Matters Now */}
                <section className="section bg-white border-y border-zinc-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                    <div className="max-w-3xl mx-auto px-4 md:px-0">
                        <h2 className="text-3xl font-bold text-zinc-950 mb-4">Why This Matters Now</h2>
                        <p className="text-zinc-600 mb-12 uppercase tracking-widest text-xs font-bold font-mono">The Exogram Paradigm</p>
                        
                        <div className="prose prose-lg prose-zinc max-w-none text-zinc-800 space-y-8 font-medium">
                            <div>
                                <p className="text-xl text-zinc-950 font-semibold mb-6">
                                    As frontier models proliferate and capability converges, the strategic value shifts increasingly toward <span className="text-purple-900">persistent operational infrastructure sitting beneath the model layer.</span>
                                </p>
                                <p>
                                    We are giving autonomous intelligence the keys to the car without building the brakes. Today humans repeatedly adapt themselves to disconnected AI systems. Eventually, autonomous systems will adapt themselves to persistent, auditable human context.
                                </p>
                            </div>

                            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-xl my-8">
                                <p className="text-lg font-semibold text-zinc-950 mb-4">
                                    The future requires a persistent intelligence substrate where:
                                </p>
                                <ul className="space-y-3 text-zinc-800">
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 font-bold mt-0.5">→</span>
                                        <span><strong>Context</strong> survives entirely independently of the underlying model</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 font-bold mt-0.5">→</span>
                                        <span><strong>Governance</strong> defines rigid operational boundaries for any given agent</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 font-bold mt-0.5">→</span>
                                        <span><strong>Identity</strong> persists across completely different models and platforms</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-purple-600 font-bold mt-0.5">→</span>
                                        <span><strong>The Auditable Ledger</strong> provides enterprise-grade accountability for every action</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 bg-purple-50 border border-purple-200 rounded-xl my-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full"></div>
                                <p className="font-bold text-purple-950 text-xl mb-6 relative z-10">
                                    Instead of fragmented intelligence silos competing over temporary context windows, autonomous systems gain persistent operational continuity across environments.
                                </p>
                                <p className="text-purple-900 font-bold tracking-wide uppercase text-sm relative z-10">
                                    Today humans repeatedly adapt themselves to disconnected AI systems. Eventually AI systems will adapt themselves to persistent, auditable human context.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Open RFCs */}
                <section className="section bg-zinc-100">
                    <div className="max-w-4xl mx-auto px-4 md:px-0">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-2 block">Building in Public</span>
                            <h2 className="text-3xl font-bold text-zinc-950 mb-4">Open Requests for Comment</h2>
                            <p className="text-zinc-700 max-w-2xl mx-auto">
                                We are building an open standard. Below are the active RFCs regarding the Exogram Protocol.
                            </p>
                        </div>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-mono font-bold text-cyan-800 px-2 py-0.5 bg-white rounded border border-cyan-300">RFC-01</span>
                                    <h3 className="text-sm font-bold text-zinc-950">The Persistent Context Schema (EXO-STATE)</h3>
                                </div>
                                <p className="text-sm text-zinc-700 mb-2"><strong>Goal:</strong> Define a universal JSON schema for human-to-agent context that can be injected into any orchestration layer, regardless of whether the model is OpenAI, Anthropic, or an open-source local model.</p>
                                <p className="text-sm text-zinc-600"><strong>Core Challenge:</strong> Normalizing context injection so it consumes the minimal amount of tokens while maintaining 100% operational fidelity across environments.</p>
                            </div>
                            <div className="rounded-xl border border-purple-200 bg-purple-50 p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-mono font-bold text-purple-800 px-2 py-0.5 bg-white rounded border border-purple-300">RFC-02</span>
                                    <h3 className="text-sm font-bold text-zinc-950">Deterministic Admissibility Gateway</h3>
                                </div>
                                <p className="text-sm text-zinc-700 mb-2"><strong>Goal:</strong> Establish an execution gateway that processes go/no-go decisions at sub-runtime latencies.</p>
                                <p className="text-sm text-zinc-600"><strong>Core Challenge:</strong> If the admissibility check takes too long, autonomous loops break down. Probabilistic LLM-as-a-judge approaches are too slow and unreliable. This RFC proposes moving governance checks to deterministic policy engines — fast, binary rules — to safely gate API and tool calls natively.</p>
                            </div>
                            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-mono font-bold text-emerald-800 px-2 py-0.5 bg-white rounded border border-emerald-300">RFC-03</span>
                                    <h3 className="text-sm font-bold text-zinc-950">The Auditable Ledger Format</h3>
                                </div>
                                <p className="text-sm text-zinc-700 mb-2"><strong>Goal:</strong> Create a verifiable, append-only standard for logging AI execution history.</p>
                                <p className="text-sm text-zinc-600"><strong>Core Challenge:</strong> Standard AI logs just show input (prompt) and output (response). The Exogram ledger must capture <em>State Hash</em> + <em>Active Governance Policy</em> + <em>Attempted Action</em> + <em>Approval/Denial Code</em>. This RFC designs the exact data structure required for an enterprise compliance team to trace exactly <em>why</em> an agent took an action.</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* The Stack — simplified position view */}
                <section className="section bg-white border-y border-zinc-200 pt-0">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-8">The Stack</h2>
                        <p className="text-xl text-zinc-950 font-bold mb-12">Exogram is the persistent intelligence substrate beneath the model layer.</p>
                        <div className="space-y-4 max-w-md mx-auto">
                            <div className="px-6 py-4 rounded-lg bg-white/5 border border-zinc-400 text-left">
                                <span className="text-zinc-950 text-sm">Layer 1</span>
                                <span className="text-zinc-950 ml-4">COMPUTE</span>
                                <span className="text-zinc-950 ml-4">→ GPUs, infrastructure</span>
                            </div>
                            <div className="px-6 py-4 rounded-lg bg-white/5 border border-zinc-400 text-left">
                                <span className="text-zinc-950 text-sm">Layer 2</span>
                                <span className="text-zinc-950 ml-4">MODELS</span>
                                <span className="text-zinc-950 ml-4">→ OpenAI, Anthropic, etc.</span>
                            </div>
                            <div className="px-6 py-4 rounded-lg bg-purple-600/20 border-2 border-purple-500 text-left">
                                <span className="text-purple-900 font-extrabold font-semibold text-sm">Layer 3</span>
                                <span className="text-zinc-950 ml-4 font-bold">PERSISTENCE & TRUST</span>
                                <span className="text-purple-900 font-extrabold font-semibold ml-4">→ EXOGRAM</span>
                            </div>
                            <div className="px-6 py-4 rounded-lg bg-white/5 border border-zinc-400 text-left">
                                <span className="text-zinc-950 text-sm">Layer 4</span>
                                <span className="text-zinc-950 ml-4">APPLICATIONS</span>
                                <span className="text-zinc-950 ml-4">→ Agents, Copilots, SaaS</span>
                            </div>
                        </div>

                        <div className="mt-16 mb-4">
                            <p className="text-xl md:text-2xl text-zinc-950 font-bold leading-relaxed max-w-3xl mx-auto">
                                Frontier models are miracles of cognition. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">Exogram preserves operational continuity, governance, and trust across them.</span>
                            </p>
                        </div>
                    </div>
                </section>


                {/* Subpage Navigation */}
                <section className="section">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-8 text-center">Explore Exogram</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/exogram/architecture" className="group p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40 transition-all">
                                <span className="text-xs font-bold font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest">Deep Dive</span>
                                <h3 className="text-xl font-bold text-zinc-950 mt-2 mb-2 group-hover:text-cyan-900 font-extrabold font-semibold transition-colors">Architecture</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">4 substrate layers, execution schemas, and integration methods.</p>
                            </Link>
                            <Link href="/exogram/use-cases" className="group p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 transition-all">
                                <span className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest">Industry</span>
                                <h3 className="text-xl font-bold text-zinc-950 mt-2 mb-2 group-hover:text-purple-900 font-extrabold font-semibold transition-colors">Use Cases</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">Healthcare, fintech, legal, and enterprise autonomous AI governance.</p>
                            </Link>
                            <Link href="/exogram/roadmap" className="group p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 transition-all">
                                <span className="text-xs font-bold font-mono text-emerald-900 font-extrabold font-semibold uppercase tracking-widest">Direction</span>
                                <h3 className="text-xl font-bold text-zinc-950 mt-2 mb-2 group-hover:text-emerald-900 font-extrabold font-semibold transition-colors">Roadmap</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium">What&apos;s shipped, in progress, and planned for Q2-Q4 2026.</p>
                            </Link>
                        </div>
                    </div>
                </section>


                {/* Connection — Mic Drop (Scar Tissue Step 5) */}
                <section className="section">
                    <div className="max-w-3xl mx-auto">
                        <div className="card p-10 flex flex-col items-center text-center space-y-8">
                            <p className="text-xl md:text-2xl text-zinc-950 leading-relaxed max-w-2xl">
                                &quot;I write about why AI systems fail economically through my AI Economist work.<br />
                                <span className="text-purple-900 font-extrabold font-semibold">Exogram is the persistent intelligence substrate I&apos;m building to fix it.&quot;</span>
                            </p>
                            <p className="text-lg font-bold text-zinc-950 border-t border-zinc-300 pt-6 max-w-xl">
                                Amateurs deploy AI. Professionals govern it.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-t border-zinc-400 pt-8 mt-4 items-center">
                                <div className="flex items-center justify-center md:justify-end gap-4 h-12">
                                    { }
                                    <Image src="/assets/headshot.jpg" alt="Richard Ewing" width={48} height={48} className="rounded-full object-cover shadow-sm" />
                                    <div className="text-left flex flex-col justify-center h-full">
                                        <p className="text-zinc-950 font-semibold leading-none mb-1">Founded by Richard Ewing</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-zinc-950 font-bold text-xs font-bold leading-none">AI Economist</p>
                                            <span className="text-emerald-500 text-xs font-bold font-medium uppercase font-mono tracking-wider px-1.5 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20 leading-none flex items-center h-4">Live</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center md:justify-start h-12">
                                    <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6 py-2.5 rounded-lg bg-purple-600 text-zinc-950 font-semibold hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] h-10">
                                        Visit Exogram.ai →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research Foundations */}
                <section className="section">
                    <div className="max-w-5xl mx-auto px-4 md:px-0">
                        <div className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <div className="space-y-1">
                                <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider">
                                    Empirical Foundations
                                </span>
                                <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                                    Research Foundations
                                </h2>
                            </div>

                            <div className="space-y-3 pt-2">
                                {RESEARCH_CORPUS.filter(
                                    (art) => art.domain === 'AI Governance' || art.relatedConceptIds?.includes('deterministic-governance') || art.relatedConceptIds?.includes('agent-kill-switch')
                                ).slice(0, 6).map((art) => (
                                    <div key={art.id} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-[10px] font-mono font-bold">
                                                <span className="text-cyan-900 uppercase">{art.publisher}</span>
                                                {art.date && <span className="text-zinc-500">• {art.date}</span>}
                                            </div>
                                            <h3 className="text-sm font-bold text-zinc-950">
                                                {art.title}
                                            </h3>
                                        </div>
                                        <a
                                            href={art.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1.5 bg-cyan-900 text-white text-xs font-mono font-bold rounded-xl whitespace-nowrap self-start sm:self-center hover:bg-cyan-800"
                                        >
                                            Read Work ↗
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            
                    <AdvisoryCTA variant="industry" />
                </div>
        </main>
    );
}

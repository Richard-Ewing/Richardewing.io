import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, AlertTriangle, DollarSign, Zap, Target, Calendar, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Enterprise AI Integration System',
    description: 'The AI Integration System is a complete enterprise governance operating system. Deploy diagnostic tools and audit frameworks.',
    keywords: ['AI integration consulting', 'AI for small business', 'AI for my business', 'how to implement AI', 'AI strategy consulting', 'AI roadmap for business', 'AI consultant small business', 'AI readiness assessment', 'where to start with AI', 'AI advisor', 'fractional AI officer', 'AI audit for business', 'AI implementation help', 'overwhelmed by AI', 'falling behind on AI', 'AI anxiety business', 'don\'t know where to start with AI', 'AI maturity assessment', 'AI integration help', 'do I need AI for my business', 'which AI tools should I use', 'AI project failed', 'wasted money on AI', 'AI consulting too slow', 'AI consultant just PowerPoint', 'AI consulting not worth it', 'AI consulting too expensive', 'fast AI strategy', 'AI roadmap 48 hours'],
    openGraph: {
        title: 'AI Integration System & Enterprise Framework | Richard Ewing',
        description: 'The AI Integration System is a complete enterprise governance operating system. Deploy 18 diagnostic tools and audit frameworks instantly.',
    },
    alternates: { canonical: 'https://www.richardewing.io/ai-integration' },
};

const painPoints = [
    { icon: AlertTriangle, title: '"I don\'t know where to start"', detail: 'There are 10,000+ AI tools. You don\'t need 10,000. You need the 3 that will actually move your bottom line. We find them in 2 hours.', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200' },
    { icon: Clock, title: '"I\'m falling behind my competitors"', detail: 'Your competitors are experimenting with AI. Some are saving 20+ hours/week. Others are wasting $50K on tools that don\'t work. We show you which moves actually matter.', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200' },
    { icon: DollarSign, title: '"I wasted money on AI that didn\'t work"', detail: '95% of AI projects fail to deliver ROI. Not because AI doesn\'t work - because there was no strategy. A $5,000 audit prevents $50,000 in wasted implementation.', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
    { icon: Users, title: '"My team doesn\'t know how to use AI"', detail: 'Your team doesn\'t need AI training. They need 3 specific workflows that save them 5 hours/week each. We identify those workflows and build the 30-day adoption plan.', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
    { icon: Shield, title: '"I\'m worried about data security & compliance"', detail: 'Which AI tools can see your customer data? Which ones store it? We audit every tool against your compliance requirements before anything gets deployed.', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
    { icon: Brain, title: '"I just want someone to tell me what to do"', detail: 'That\'s exactly what this is. A 2-hour audit, a prioritized roadmap, and a 30-day action plan. No jargon. No hype. Just the 10 things that will impact your bottom line, ranked by ROI.', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
];

const processSteps = [
    { num: '01', title: 'Business Deep-Dive', duration: '1-2 hours', detail: 'On-site or virtual audit. We map your business processes, identify pain points, uncover gaps, and find the opportunities hiding in your daily operations.' },
    { num: '02', title: 'AI-Powered Strategic Roadmap', duration: '48 hours', detail: 'Everything from the audit gets fed into advanced AI analysis. You receive a full strategic roadmap outlining the top 10 actions your business should take - prioritized by bottom-line impact.' },
    { num: '03', title: 'ROI-First Prioritization', duration: 'Included', detail: 'Every recommendation is ranked by revenue impact, cost savings, and implementation difficulty. You know exactly which action generates the most ROI with the least effort.' },
    { num: '04', title: '30-Day Kickstart Plan', duration: 'Included', detail: 'A step-by-step, day-by-day action plan to begin implementation immediately. No ambiguity. No "figure it out." Every day has a specific task, tool, and outcome.' },
];

export default function AIIntegrationPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Brain size={14} /> AI Integration Advisory
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-[#1A1A1A] mb-6 leading-tight">
                        Stop Worrying About AI.
                    </h1>
                    <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto mb-4">
                        You don't need another AI tool. You need a <strong>plan</strong>.
                    </p>
                    <p className="text-base text-[#6A6A6A] max-w-2xl mx-auto mb-6">
                        A 2-hour audit of your business. A strategic roadmap with the top 10 actions ranked by bottom-line impact. A 30-day kickstart plan to begin implementation immediately. <strong>Delivered in 48 hours - not 8 weeks.</strong>
                    </p>
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#1A1A1A] text-white text-xs font-mono font-bold tracking-widest uppercase border border-white/10">
                        <Zap size={12} className="text-emerald-400" /> 48-Hour Delivery · Not 4-8 Weeks
                    </div>
                </div>

                {/* AI Advisor Tool CTA */}
                <div className="mb-16 bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl border border-cyan-200 p-8 text-center shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-cyan-300 bg-white text-cyan-700 font-mono text-xs tracking-widest font-bold uppercase">
                            <Zap size={10} /> Interactive P&amp;L &amp; AI Studio
                        </div>
                        <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Launch the Live Product &amp; AI Economist Workspace</h2>
                        <p className="text-sm text-[#4A4A4A] max-w-lg mx-auto mb-6">
                            Model your ARR, engineering headcount, Zombie Feature load, and monthly AI spend in real time - or run our guided AI Integration Advisor to generate a custom roadmap.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link href="/workspace" className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-xl text-sm hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                                Open Live P&amp;L Workspace →
                            </Link>
                            <Link href="/toolkit" className="px-6 py-3 bg-white border border-cyan-300 text-zinc-900 font-bold rounded-xl text-sm hover:bg-cyan-50 transition-colors">
                                Get Operating Kit ($29) →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Pain Gallery */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] text-center mb-8">Sound Familiar?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {painPoints.map((p, i) => (
                            <div key={i} className={`rounded-2xl border p-5 ${p.bg}`}>
                                <p.icon className={`w-6 h-6 ${p.color} mb-3`} />
                                <h3 className="font-grotesk font-bold text-[#1A1A1A] text-sm mb-2">{p.title}</h3>
                                <p className="text-xs text-[#4A4A4A] leading-relaxed">{p.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Process */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] text-center mb-2">The Process</h2>
                    <p className="text-sm text-[#6A6A6A] text-center mb-8">From P&amp;L and AI audit to shipped execution in days, not quarters.</p>
                    <div className="space-y-4">
                        {processSteps.map((s, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 flex gap-5 shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-mono font-bold text-emerald-700 text-sm flex-shrink-0">{s.num}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="font-grotesk font-bold text-[#1A1A1A]">{s.title}</h3>
                                        <span className="text-[10px] font-mono text-zinc-500 uppercase bg-zinc-100 px-2 py-0.5 rounded">{s.duration}</span>
                                    </div>
                                    <p className="text-sm text-[#4A4A4A] leading-relaxed">{s.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Unified 3 Buying Paths */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] text-center mb-2">Choose Your Buying Path</h2>
                    <p className="text-sm text-[#6A6A6A] text-center mb-8">Unified Product &amp; AI Economist engagements - whether you want self-serve spreadsheets, a 7-day P&amp;L turnaround, or a 21-day 0-to-1 AI product build.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Path 1: Operating Kit + 1-on-1 Tear-Down */}
                        <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 flex flex-col shadow-sm">
                            <div className="text-xs font-mono font-bold text-violet-600 uppercase tracking-widest mb-3">Path A: Self-Serve &amp; Rapid Triage</div>
                            <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-1">Operating Kit ($29) or 1-on-1 Tear-Down ($450)</h3>
                            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">$29 / $450<span className="text-sm font-normal text-zinc-500"> · instant / 60-min</span></div>
                            <p className="text-sm text-[#4A4A4A] mb-5 leading-relaxed">Start with the 5 working Excel/CSV P&amp;L spreadsheets + Live Browser Workspace for $29, or book a 60-minute 1-on-1 P&amp;L &amp; AI Tear-Down on Zoom for $450.</p>
                            <ul className="space-y-2 mb-6 flex-1">
                                {[
                                    'AI Feature Pricing & Margin Stress-Tester (.XLSX/.CSV)',
                                    'Zombie Feature Kill-List Matrix ($5M Cost-Cut Model)',
                                    '12-Slide CFO & Board Defense Deck Blueprint',
                                    'Instant access to Live Browser Workspace (/workspace)',
                                    '$450 option: 60-min live Zoom + 48-hour action memo',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                        <CheckCircle size={14} className="text-violet-500 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="space-y-2">
                                <Link href="/toolkit" className="block text-center py-3 bg-violet-600 text-white font-bold rounded-lg text-sm hover:bg-violet-500 transition-colors">Get Operating Kit ($29) →</Link>
                                <a href="/api/buy/gut_check" className="block text-center py-2.5 bg-zinc-100 text-zinc-900 font-bold rounded-lg text-xs hover:bg-zinc-200 transition-colors">Or Book 60-Min Tear-Down ($450) →</a>
                            </div>
                        </div>

                        {/* Path 2: 7-Day Turnaround Sprint & Fractional CPO */}
                        <div className="bg-white rounded-2xl border-2 border-emerald-400 p-6 flex flex-col shadow-lg relative">
                            <div className="absolute -top-3 right-4 px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold font-mono uppercase tracking-widest rounded-full">Most Popular</div>
                            <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-3">Path A+: P&amp;L Turnaround &amp; Leadership</div>
                            <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-1">7-Day Turnaround Sprint</h3>
                            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">$2,500<span className="text-sm font-normal text-zinc-500"> / 7-day sprint</span></div>
                            <p className="text-sm text-[#4A4A4A] mb-4 leading-relaxed">A 7-day hands-on forensic audit of your product backlog, pricing tiers, and AI/cloud bills - or ongoing Fractional CPO / Product Economist leadership ($10,000/mo).</p>
                            <div className="bg-zinc-50 rounded-lg p-3 mb-4 text-xs text-[#4A4A4A]">
                                <div className="flex justify-between mb-1"><span className="font-bold">7-Day Turnaround Sprint</span><span className="font-mono font-bold">$2,500</span></div>
                                <div className="flex justify-between mb-1"><span className="font-bold">Fractional CPO / Product Economist</span><span className="font-mono font-bold">$10,000/mo</span></div>
                                <div className="flex justify-between"><span className="font-bold">PE &amp; M&amp;A Product Due Diligence</span><span className="font-mono font-bold">$15,000</span></div>
                            </div>
                            <ul className="space-y-2 mb-6 flex-1">
                                {[
                                    'Feature-level profitability & Zombie Feature kill-list',
                                    'AI token & cloud infrastructure margin recovery plan',
                                    'Pricing & packaging tier redesign (seat vs usage)',
                                    '12-slide CFO & Board Defense Deck built for your numbers',
                                    'Live 90-minute readout with your leadership team',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                        <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="/api/buy/insolvency_diagnostic" className="block text-center py-3 bg-emerald-600 text-white font-bold rounded-lg text-sm hover:bg-emerald-500 transition-colors">Book 7-Day Turnaround Sprint ($2,500) →</a>
                        </div>

                        {/* Path 3: 0-to-1 AI Product Build Sprint */}
                        <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 flex flex-col shadow-sm">
                            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">Path B: Shipped Software in 21 Days</div>
                            <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-1">0-to-1 AI Product Build Sprint</h3>
                            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">$7,500<span className="text-sm font-normal text-zinc-500"> / 21-day build</span></div>
                            <div className="text-xs text-emerald-700 font-bold mb-3 flex items-center gap-1"><Zap size={10} /> Live Deployed Software · Not a Deck</div>
                            <p className="text-sm text-[#4A4A4A] mb-5 leading-relaxed">Want an interactive diagnostic engine, AI customer tool, or authority platform like Exogram.ai, CareerWin.ai, or RichardEwing.io? I architect, code, and deploy it in 21 days.</p>
                            <ul className="space-y-2 mb-6 flex-1">
                                {[
                                    'Production Next.js / TypeScript / Cloudflare Edge deployment',
                                    '1-to-3 custom interactive diagnostic calculators or AI workflows',
                                    'Hardened LLM routing with token cost caps & prompt guardrails',
                                    'Lead capture, Stripe checkout, and CRM webhook wiring',
                                    '100% IP & GitHub repository ownership handoff on Day 21',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                        <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="/api/buy/hallucination_tax_audit" className="block text-center py-3 bg-[#1A1A1A] text-white font-bold rounded-lg text-sm hover:bg-zinc-800 transition-colors">Commission 21-Day Build ($7,500) →</a>
                        </div>
                    </div>
                </div>

                {/* What You're Really Paying For */}
                <div className="bg-[#1A1A1A] rounded-2xl p-8 mb-16 text-white border border-white/10 shadow-xl">
                    <h2 className="text-xl font-grotesk font-bold text-white mb-4 text-center">What You&apos;re Really Paying For</h2>
                    <p className="text-zinc-300 text-center max-w-2xl mx-auto mb-6">
                        You&apos;re not paying for generic AI hype. You&apos;re paying for a <strong className="text-white">Product Economist</strong> who has scaled enterprise SaaS from $0 to $25M ARR, turned around a $20M P&amp;L (+200% YoY), cut $5M in product waste, and shipped 3 production AI platforms.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                            <Zap className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                            <div className="text-sm font-bold text-white mb-1">Clarity</div>
                            <div className="text-xs text-zinc-400">From &ldquo;I don&apos;t know where to start&rdquo; to exact P&amp;L and margin math</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                            <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                            <div className="text-sm font-bold text-white mb-1">Focus</div>
                            <div className="text-xs text-zinc-400">From 10,000 AI tools to the 3 moves that expand gross margin and ARR</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                            <Calendar className="w-6 h-6 text-violet-400 mx-auto mb-2" />
                            <div className="text-sm font-bold text-white mb-1">Momentum</div>
                            <div className="text-xs text-zinc-400">Working spreadsheets, live browser tools, and shipped production software</div>
                        </div>
                    </div>
                </div>

                {/* Competitor Comparison */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-8 shadow-sm overflow-x-auto">
                    <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A] mb-4">Why Most AI Consulting Fails (And Why a Product Economist Is Different)</h2>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-zinc-100">
                                <th className="text-left p-3 text-xs uppercase font-bold text-zinc-700">What You Get</th>
                                <th className="p-3 text-center text-xs uppercase font-bold text-rose-600">Typical AI Consultant</th>
                                <th className="p-3 text-center text-xs uppercase font-bold text-emerald-700">Richard Ewing (Product Economist)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { feature: 'Time to value', them: '4-8 weeks', us: 'Instant ($29 Kit) to 7 Days ($2,500 Sprint)' },
                                { feature: 'Diagnostic & P&L audit cost', them: '$15,000-$50,000', us: '$450 (60-Min Tear-Down) or $2,500 (7-Day Sprint)' },
                                { feature: '0-to-1 AI software build', them: '$50,000-$150,000 agency', us: '$7,500 (21-Day Shipped Production Build)' },
                                { feature: 'Fractional executive leadership', them: 'Junior account managers', us: '$10,000/mo Direct Principal Access' },
                                { feature: 'What you receive', them: 'Static PowerPoint deck', us: 'Editable P&L models, Live Workspace & shipped code' },
                                { feature: 'Operator track record', them: 'Career consultants', us: '$0 to $25M ARR (Tyler Tech) + 3 live AI platforms' },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                                    <td className="p-3 font-bold text-[#1A1A1A]">{row.feature}</td>
                                    <td className="p-3 text-center text-rose-600 text-xs">{row.them}</td>
                                    <td className="p-3 text-center text-emerald-700 text-xs font-bold">{row.us}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pricing Anchor */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-16 shadow-sm">
                    <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A] mb-4 flex items-center gap-2"><DollarSign size={18} className="text-emerald-600" /> The Cost of NOT Having a Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 text-center">
                            <div className="text-2xl font-bold text-rose-700">$50K+</div>
                            <div className="text-xs text-rose-600">Average wasted on negative-margin AI features</div>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 text-center">
                            <div className="text-2xl font-bold text-orange-700">4-8 weeks</div>
                            <div className="text-xs text-orange-600">Average time to get a strategy deck from an agency</div>
                        </div>
                        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                            <div className="text-2xl font-bold text-emerald-700">48hrs - 7 Days</div>
                            <div className="text-xs text-emerald-600">Our delivery - P&amp;L models + action plan, ready to execute</div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'Where should I start if I want to test your models first?', a: 'Start with the $29 Product & AI Economist Operating Kit (/toolkit). You get instant download of all 5 Excel/CSV spreadsheets, the 12-slide CFO board deck blueprint, the 30-day turnaround runbook, plus instant browser access to the Live Product Economist Workspace (/workspace).' },
                            { q: 'What is the difference between the $450 Tear-Down and the $2,500 Turnaround Sprint?', a: 'The $450 1-on-1 P&L & AI Tear-Down is a focused 60-minute live Zoom working session followed by a 1-page Executive Action Memo within 48 hours. The $2,500 7-Day Turnaround Sprint is a hands-on forensic engagement where I personally audit your feature profitability, Zombie Feature carry cost, cloud/token invoices, and pricing tiers, then deliver a custom 12-slide CFO & Board Defense Deck.' },
                            { q: 'What is the $7,500 0-to-1 AI Product Build Sprint?', a: 'Instead of a consulting report, I spend 21 days designing, coding, and deploying a live, production-ready AI product, interactive diagnostic calculator, or authority platform for your company on Next.js, TypeScript, and Cloudflare Edge - using the same architecture behind Exogram.ai and CareerWin.ai.' },
                            { q: 'How does the $10,000/mo Fractional CPO / Product Economist retainer work?', a: 'I embed directly with your CEO, CFO, and VP of Engineering on a monthly retainer to lead product P&L turnarounds, pricing transformations, AI margin governance, and quarterly board reporting without the $400K+ full-time executive overhead.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-emerald-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A] leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-emerald-600 rounded-2xl p-8 text-white text-center shadow-lg">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-3">Ready to Run Your Product &amp; AI Roadmap Like a P&amp;L?</h2>
                    <p className="text-emerald-100 mb-6 max-w-xl mx-auto">Start with the $29 Operating Kit + Live Workspace, book a $450 1-on-1 Tear-Down, or explore all 3 Engagement Paths.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/services" className="px-8 py-4 bg-white text-emerald-800 font-bold rounded-lg hover:bg-emerald-50 transition-colors">Explore All 3 Buying Paths →</Link>
                        <Link href="/toolkit" className="px-8 py-4 text-white font-bold rounded-lg border border-white/30 hover:border-white/60 transition-colors">Get $29 Operating Kit →</Link>
                    </div>
                </div>

                {/* Hub Links */}
                <div className="mt-12 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm">
                    <h2 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">Related</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { title: 'The AI Integration System', href: '/ai-integration/system' },
                            { title: 'Advisory Services', href: '/services' },
                            { title: 'Runtime Governance Skills', href: '/skills' },
                            { title: 'Executive Briefing', href: '/executive-briefing' },
                            { title: 'AI Coding Agent Comparison', href: '/compare/ai-coding-agents' },
                            { title: 'AI Guardrails Platform Comparison', href: '/compare/ai-guardrails-platforms' },
                        ].map(link => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg hover:bg-emerald-50 transition-colors text-sm font-bold text-[#1A1A1A]">
                                <ArrowRight size={14} className="text-emerald-600" /> {link.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="sr-only" aria-hidden="true">
                    AI integration consulting, AI for small business, how to implement AI in my business, AI strategy consulting, AI roadmap for business, AI consultant for small business, AI readiness assessment, AI maturity assessment, where to start with AI, AI advisor, fractional AI officer, AI audit for my company, overwhelmed by AI tools, falling behind on AI, AI anxiety business owner, don't know where to start with AI, wasted money on AI, AI project failed, AI didn't work, AI implementation help, which AI tools should I use, do I need AI for my business, afraid of AI replacing jobs, competitors using AI, can't afford not to use AI, AI not delivering ROI, AI chatbot driving customers away, stressed about AI
                </div>
            </div>
        </main>
    );
}

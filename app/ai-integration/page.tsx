import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, AlertTriangle, DollarSign, Zap, Target, Calendar, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Integration System | Enterprise Governance Kit',
    description: 'The complete AI governance operating system: 18 diagnostic tools, audit frameworks, and executive playbooks in one deployable package.',
    keywords: ['AI integration consulting', 'AI for small business', 'AI for my business', 'how to implement AI', 'AI strategy consulting', 'AI roadmap for business', 'AI consultant small business', 'AI readiness assessment', 'where to start with AI', 'AI advisor', 'fractional AI officer', 'AI audit for business', 'AI implementation help', 'overwhelmed by AI', 'falling behind on AI', 'AI anxiety business', 'don\'t know where to start with AI', 'AI maturity assessment', 'AI integration help', 'do I need AI for my business', 'which AI tools should I use', 'AI project failed', 'wasted money on AI', 'AI consulting too slow', 'AI consultant just PowerPoint', 'AI consulting not worth it', 'AI consulting too expensive', 'fast AI strategy', 'AI roadmap 48 hours'],
    openGraph: {
        title: 'AI Integration Advisory — 48-Hour Roadmap, Not 8-Week PowerPoint',
        description: 'Most AI consultants take 4-8 weeks to deliver a strategy deck. We deliver a prioritized roadmap with a 30-day action plan in 48 hours.',
    },
    alternates: { canonical: 'https://www.richardewing.io/ai-integration' },
};

const painPoints = [
    { icon: AlertTriangle, title: '"I don\'t know where to start"', detail: 'There are 10,000+ AI tools. You don\'t need 10,000. You need the 3 that will actually move your bottom line. We find them in 2 hours.', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200' },
    { icon: Clock, title: '"I\'m falling behind my competitors"', detail: 'Your competitors are experimenting with AI. Some are saving 20+ hours/week. Others are wasting $50K on tools that don\'t work. We show you which moves actually matter.', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200' },
    { icon: DollarSign, title: '"I wasted money on AI that didn\'t work"', detail: '95% of AI projects fail to deliver ROI. Not because AI doesn\'t work — because there was no strategy. A $5,000 audit prevents $50,000 in wasted implementation.', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
    { icon: Users, title: '"My team doesn\'t know how to use AI"', detail: 'Your team doesn\'t need AI training. They need 3 specific workflows that save them 5 hours/week each. We identify those workflows and build the 30-day adoption plan.', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
    { icon: Shield, title: '"I\'m worried about data security & compliance"', detail: 'Which AI tools can see your customer data? Which ones store it? We audit every tool against your compliance requirements before anything gets deployed.', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
    { icon: Brain, title: '"I just want someone to tell me what to do"', detail: 'That\'s exactly what this is. A 2-hour audit, a prioritized roadmap, and a 30-day action plan. No jargon. No hype. Just the 10 things that will impact your bottom line, ranked by ROI.', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
];

const processSteps = [
    { num: '01', title: 'Business Deep-Dive', duration: '1-2 hours', detail: 'On-site or virtual audit. We map your business processes, identify pain points, uncover gaps, and find the opportunities hiding in your daily operations.' },
    { num: '02', title: 'AI-Powered Strategic Roadmap', duration: '48 hours', detail: 'Everything from the audit gets fed into advanced AI analysis. You receive a full strategic roadmap outlining the top 10 actions your business should take — prioritized by bottom-line impact.' },
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
                        A 2-hour audit of your business. A strategic roadmap with the top 10 actions ranked by bottom-line impact. A 30-day kickstart plan to begin implementation immediately. <strong>Delivered in 48 hours — not 8 weeks.</strong>
                    </p>
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#1A1A1A] text-white text-xs font-mono font-bold tracking-widest uppercase">
                        <Zap size={12} className="text-emerald-400" /> 48-Hour Delivery · Not 4-8 Weeks
                    </div>
                </div>

                {/* AI Advisor Tool CTA */}
                <div className="mb-16 bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl border border-cyan-200 p-8 text-center shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-cyan-300 bg-white text-cyan-700 font-mono text-xs tracking-widest font-bold uppercase">
                            <Zap size={10} /> New: AI-Powered Tool
                        </div>
                        <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Try Our AI Integration Advisor</h2>
                        <p className="text-sm text-[#4A4A4A] max-w-lg mx-auto mb-6">
                            Answer 5 questions about your business and get a personalized AI integration roadmap in minutes — complete with specific tool recommendations, ROI estimates, and a step-by-step implementation plan. Downloadable as a PDF.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link href="/ai-integration/advisor" className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-xl text-sm hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                                Start Your AI Roadmap →
                            </Link>
                            <span className="text-xs text-zinc-500 font-mono">$249/month · Unlimited Consultations</span>
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
                    <p className="text-sm text-[#6A6A6A] text-center mb-8">From audit to action plan in under a week.</p>
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

                {/* Pricing Tiers */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] text-center mb-2">Choose Your Path</h2>
                    <p className="text-sm text-[#6A6A6A] text-center mb-8">Three tiers. Every business gets the same methodology. The difference is how much of my time you get.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Tier 1: Quarterly Audit */}
                        <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 flex flex-col shadow-sm">
                            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">Tier 1: Get the Plan</div>
                            <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-1">Quarterly AI Audit</h3>
                            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">$5,000<span className="text-sm font-normal text-zinc-500"> / quarter</span></div>
                            <div className="text-xs text-emerald-700 font-bold mb-3 flex items-center gap-1"><Zap size={10} /> Delivered in 48 hours</div>
                            <p className="text-sm text-[#4A4A4A] mb-5 leading-relaxed">On-site or virtual. I audit your business, feed everything into AI, and deliver a full strategic roadmap with a 30-day action plan in 48 hours. Repeated quarterly. Not a PowerPoint — an implementation-ready plan.</p>
                            <ul className="space-y-2 mb-6 flex-1">
                                {['1-2 hour business deep-dive (on-site or virtual)', 'Top 10 AI actions ranked by ROI', '30-day step-by-step kickstart plan', 'Quarterly re-assessment (what\'s changed)', 'AI tool recommendations with pricing', 'Compliance & security review', 'Delivered in 48 hours — not 4-8 weeks'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                        <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="/api/buy/full_audit" className="block text-center py-3 bg-[#1A1A1A] text-white font-bold rounded-lg text-sm hover:bg-zinc-800 transition-colors">Book Your Audit →</a>
                        </div>

                        {/* Tier 2: Monthly Advisor (Featured) */}
                        <div className="bg-white rounded-2xl border-2 border-emerald-400 p-6 flex flex-col shadow-lg relative">
                            <div className="absolute -top-3 right-4 px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold font-mono uppercase tracking-widest rounded-full">Most Popular</div>
                            <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-3">Tier 2: Stay Guided</div>
                            <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-1">Monthly AI Advisor</h3>
                            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">$5K–$15K<span className="text-sm font-normal text-zinc-500"> / month</span></div>
                            <p className="text-sm text-[#4A4A4A] mb-4 leading-relaxed">Everything in the audit, plus I stay on as your ongoing AI advisor. I don't just deliver a plan — I execute it with you. No handoff. No "good luck."</p>
                            <div className="bg-zinc-50 rounded-lg p-3 mb-4 text-xs text-[#4A4A4A]">
                                <div className="flex justify-between mb-1"><span className="font-bold">Advisory (5-10 hrs/week)</span><span className="font-mono font-bold">$5,000/mo</span></div>
                                <div className="flex justify-between mb-1"><span className="font-bold">Embedded (10-15 hrs/week)</span><span className="font-mono font-bold">$10,000/mo</span></div>
                                <div className="flex justify-between"><span className="font-bold">Fractional AI Officer (20-25 hrs/week)</span><span className="font-mono font-bold">$15,000/mo</span></div>
                            </div>
                            <ul className="space-y-2 mb-6 flex-1">
                                {['Everything in Quarterly Audit', 'Ongoing implementation — not just a report', 'Weekly strategy calls', 'AI tool evaluation & vetting', 'Team training & onboarding', 'Vendor negotiation support', 'Custom prompt & workflow design', 'Priority async access'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                        <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="mailto:richard@richardewing.io?subject=Inquiry: Monthly AI Advisor" className="block text-center py-3 bg-emerald-600 text-white font-bold rounded-lg text-sm hover:bg-emerald-500 transition-colors">Start the Conversation →</a>
                        </div>

                        {/* Tier 3: The System */}
                        <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 flex flex-col shadow-sm">
                            <div className="text-xs font-mono font-bold text-violet-600 uppercase tracking-widest mb-3">Tier 3: Do It Yourself</div>
                            <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-1">The AI Integration System</h3>
                            <div className="text-3xl font-bold text-[#1A1A1A] mb-1">$997–$1,997<span className="text-sm font-normal text-zinc-500"> / one-time</span></div>
                            <p className="text-sm text-[#4A4A4A] mb-5 leading-relaxed">The exact system I use in $5,000 audits — packaged as a self-serve toolkit. Step-by-step guides, prompt libraries, templates, and frameworks. For someone who doesn't know where to start.</p>
                            <ul className="space-y-2 mb-6 flex-1">
                                {['AI Readiness Audit Template', '50+ copy-paste AI prompts', 'Business Process Scoring Matrix', 'Strategic Roadmap Generator', '30-Day Kickstart Plan template', 'ROI Calculator spreadsheet', 'AI Tool Selection Guide', 'Quarterly Review Framework'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                        <CheckCircle size={14} className="text-violet-500 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/ai-integration/system" className="block text-center py-3 bg-violet-600 text-white font-bold rounded-lg text-sm hover:bg-violet-500 transition-colors">View Full System →</Link>
                        </div>
                    </div>
                </div>

                {/* What You're Really Paying For */}
                <div className="bg-[#1A1A1A] rounded-2xl p-8 mb-16 text-white">
                    <h2 className="text-xl font-grotesk font-bold mb-4 text-center">What You're Really Paying For</h2>
                    <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-6">
                        You're not paying for an AI plan. You're paying so you <strong className="text-white">stop being stressed</strong> about not having AI in your business. By the end of our first session, you'll know exactly what to do, in what order, and why.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                            <Zap className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                            <div className="text-sm font-bold mb-1">Clarity</div>
                            <div className="text-xs text-zinc-400">From "I don't know where to start" to "I know exactly what to do next"</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                            <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                            <div className="text-sm font-bold mb-1">Focus</div>
                            <div className="text-xs text-zinc-400">From 10,000 AI tools to the 3 that actually impact your bottom line</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                            <Calendar className="w-6 h-6 text-violet-400 mx-auto mb-2" />
                            <div className="text-sm font-bold mb-1">Momentum</div>
                            <div className="text-xs text-zinc-400">From paralysis to a 30-day plan with daily actions and measurable outcomes</div>
                        </div>
                    </div>
                </div>

                {/* Competitor Comparison */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-8 shadow-sm overflow-x-auto">
                    <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A] mb-4">Why Most AI Consulting Fails (And Why This Is Different)</h2>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-zinc-100">
                                <th className="text-left p-3 text-xs uppercase font-bold text-zinc-700">What You Get</th>
                                <th className="p-3 text-center text-xs uppercase font-bold text-rose-600">Typical AI Consultant</th>
                                <th className="p-3 text-center text-xs uppercase font-bold text-emerald-700">This Advisory</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { feature: 'Time to deliverable', them: '4-8 weeks', us: '48 hours' },
                                { feature: 'Readiness assessment cost', them: '$8,000-$25,000', us: '$5,000 (includes roadmap + plan)' },
                                { feature: 'Monthly retainer', them: '$5,000-$50,000/mo', us: '$5,000-$15,000/mo' },
                                { feature: 'What you get', them: 'PowerPoint deck', us: 'Prioritized roadmap + 30-day action plan' },
                                { feature: 'Implementation support', them: 'Extra $15K-$50K', us: 'Included in monthly advisor' },
                                { feature: 'Ongoing re-assessment', them: 'New engagement each time', us: 'Built into quarterly cycle' },
                                { feature: 'Top complaint', them: '"Just a report that sits on a shelf"', us: 'Day-by-day action plan with accountability' },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                                    <td className="p-3 font-bold text-[#1A1A1A]">{row.feature}</td>
                                    <td className="p-3 text-center text-rose-600 text-xs">{row.them}</td>
                                    <td className="p-3 text-center text-emerald-700 text-xs font-bold">{row.us}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-xs text-zinc-500 mt-3">Industry pricing based on market research across 20+ AI consulting firms (2025-2026). Sources: AI Consulting Network, Groovyweb, Aries Consulting, LeanWare.</p>
                </div>

                {/* Pricing Anchor */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-16 shadow-sm">
                    <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A] mb-4 flex items-center gap-2"><DollarSign size={18} className="text-emerald-600" /> The Cost of NOT Having a Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 text-center">
                            <div className="text-2xl font-bold text-rose-700">$50K+</div>
                            <div className="text-xs text-rose-600">Average wasted on failed AI projects</div>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 text-center">
                            <div className="text-2xl font-bold text-orange-700">4-8 weeks</div>
                            <div className="text-xs text-orange-600">Average time to get a strategy deck from a consultant</div>
                        </div>
                        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                            <div className="text-2xl font-bold text-emerald-700">48 hours</div>
                            <div className="text-xs text-emerald-600">Our delivery — roadmap + action plan, ready to execute</div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'I don\'t know anything about AI. Is this for me?', a: 'Yes — that\'s exactly who this is for. You don\'t need to know anything about AI. I audit your business, identify where AI can save you time and money, and give you a step-by-step plan to implement it. No jargon. No technical background required. Delivered in 48 hours.' },
                            { q: 'How is this different from a typical AI consultant?', a: 'Three ways. First, speed: most consultants take 4-8 weeks to deliver a strategy deck. I deliver a prioritized roadmap with a 30-day action plan in 48 hours. Second, substance: the #1 complaint about AI consulting is "I paid $15K for a PowerPoint that sits on a shelf." Every deliverable here is implementation-ready with day-by-day actions. Third, continuity: the quarterly cycle means your strategy evolves with your business — not a one-and-done report.' },
                            { q: 'Why is this more expensive than some AI consultants?', a: 'Because it\'s faster and more comprehensive. A typical AI readiness assessment costs $8,000-$25,000 and takes 4-8 weeks to deliver a strategy deck. This includes the assessment, a prioritized roadmap, AND a 30-day action plan — delivered in 48 hours. You\'re paying for speed, depth, and implementation-readiness, not just advice.' },
                            { q: 'What if I\'ve already wasted money on AI tools that didn\'t work?', a: 'That\'s the most common starting point. 95% of AI projects fail because there was no strategy — just tool-chasing. The audit identifies what went wrong, salvages what\'s working, and redirects your investment toward initiatives that actually deliver ROI. Most clients recover their audit cost within 30 days.' },
                            { q: 'Why 48 hours? How is that possible?', a: 'Because I use AI to accelerate the analysis. After the 2-hour business deep-dive, everything gets fed into advanced AI systems that generate strategic analysis at a speed no human-only team can match. The output is then reviewed, refined, and prioritized by an experienced AI strategist — not auto-generated and shipped. You get both speed AND expertise.' },
                            { q: 'What\'s included in the 30-day action plan?', a: 'A day-by-day implementation plan. Each day has a specific task (e.g., "Set up Claude account and run customer email audit"), the tool you\'ll use, the expected time commitment (usually 30-60 minutes), and the measurable outcome. It\'s designed for someone who has never used AI before.' },
                            { q: 'Can I just buy the system and do it myself?', a: 'Yes. The AI Integration System ($997-$1,997) contains every template, prompt, scoring matrix, and framework I use in the $5,000 audit. It\'s step-by-step, designed for someone who doesn\'t know what to do. Think of it as the DIY version of the advisory.' },
                            { q: 'How do I know if I need the monthly advisor vs the quarterly audit?', a: 'The quarterly audit is for businesses that need direction. The monthly advisor is for businesses that need execution support — someone in the trenches with you, vetting tools, training your team, and making sure the plan actually gets implemented. Most clients start with the audit and upgrade to monthly after seeing the roadmap.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-emerald-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A] leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-emerald-600 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-2xl font-grotesk font-bold mb-3">Ready to Stop Guessing?</h2>
                    <p className="text-emerald-100 mb-6 max-w-xl mx-auto">One conversation. Ten priorities. A 30-day plan. You'll know exactly what to do with AI by the end of the first session.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/api/buy/full_audit" className="px-8 py-4 bg-white text-emerald-800 font-bold rounded-lg hover:bg-emerald-50 transition-colors">Book Your First Audit →</a>
                        <Link href="/ai-integration/system" className="px-8 py-4 text-white font-bold rounded-lg border border-white/30 hover:border-white/60 transition-colors">View the DIY System →</Link>
                    </div>
                </div>

                {/* Hub Links */}
                <div className="mt-12 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm">
                    <h2 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">Related</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { title: 'The AI Integration System', href: '/ai-integration/system' },
                            { title: 'Advisory Services', href: '/advisory' },
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

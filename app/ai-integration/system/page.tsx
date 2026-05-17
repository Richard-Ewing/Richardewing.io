import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Package, CheckCircle, ArrowRight, BookOpen, FileText, Brain, Target, Calculator, ClipboardList, MessageSquare, BarChart3, Settings, Layers, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Integration System | Step-by-Step AI Playbook for Business | Richard Ewing',
    description: 'The exact system from $5,000 AI audits — now available as a self-serve toolkit. 50+ prompts, templates, scoring matrices, and step-by-step guides for implementing AI in your business. No technical background needed. Most AI consultants charge $8K-$25K for a readiness assessment. Get the same system for $997-$1,997.',
    keywords: ['AI integration system', 'AI playbook for business', 'AI implementation guide', 'how to implement AI step by step', 'AI for small business guide', 'AI strategy template', 'AI readiness template', 'AI roadmap template', 'AI prompts for business', 'AI ROI calculator', 'AI tool selection guide', 'AI adoption playbook', 'DIY AI strategy', 'AI integration toolkit'],
    openGraph: {
        title: 'The AI Integration System — Self-Serve AI Playbook for Business',
        description: '50+ prompts, templates, scoring matrices, and step-by-step guides. The exact system from $5,000 audits. Most consultants charge $8K-$25K.',
    },
    alternates: { canonical: 'https://richardewing.io/ai-integration/system' },
};

const modules = [
    { num: '01', icon: ClipboardList, title: 'AI Readiness Audit', subtitle: 'The exact questionnaire from $5,000 audits', items: ['47-question business assessment', 'Department-by-department scoring', 'Data maturity evaluation', 'Current tool inventory', 'Risk & compliance checklist', 'Gap identification matrix'] },
    { num: '02', icon: Layers, title: 'Business Process Map', subtitle: 'Map every process and score AI applicability', items: ['Process mapping template (Notion + Spreadsheet)', 'Time-per-task tracking sheet', 'Automation opportunity scoring (1-10)', 'Human-in-the-loop decision framework', 'Department priority ranking', 'Quick-win identifier'] },
    { num: '03', icon: Target, title: 'AI Opportunity Scoring Matrix', subtitle: 'Rank every opportunity by bottom-line impact', items: ['ROI scoring formula (Revenue × Probability ÷ Effort)', 'Implementation difficulty ratings', 'Risk assessment per initiative', 'Time-to-value estimates', 'Resource requirement mapping', 'Executive summary generator'] },
    { num: '04', icon: MessageSquare, title: 'The Prompt Library (50+ Prompts)', subtitle: 'Copy-paste prompts for Claude & ChatGPT', items: ['Business analysis prompts (15)', 'Strategy generation prompts (10)', 'Implementation planning prompts (10)', 'ROI projection prompts (5)', 'Team communication prompts (5)', 'Vendor evaluation prompts (5)'] },
    { num: '05', icon: Brain, title: 'Strategic Roadmap Generator', subtitle: 'Step-by-step guide to create your own AI roadmap', items: ['Feed your audit data into AI (exact instructions)', 'Generate top 10 actions automatically', 'Prioritize by bottom-line impact', 'Create quarterly milestones', 'Build dependency chains', 'Executive presentation template'] },
    { num: '06', icon: BookOpen, title: '30-Day Kickstart Plan Template', subtitle: 'Day-by-day action plan for immediate implementation', items: ['Day 1-7: Foundation (accounts, tools, team prep)', 'Day 8-14: First AI workflow deployment', 'Day 15-21: Measurement & iteration', 'Day 22-28: Scale & expand', 'Day 29-30: Review & plan next quarter', 'Daily time commitment guide (30-60 min/day)'] },
    { num: '07', icon: BarChart3, title: 'ROI Calculator', subtitle: 'Project savings and revenue from each AI initiative', items: ['Time savings calculator', 'Cost reduction projector', 'Revenue impact estimator', 'Break-even analysis per tool', 'Annual projection dashboard', 'Board-ready ROI summary'] },
    { num: '08', icon: Settings, title: 'AI Tool Selection Guide', subtitle: 'Decision tree for picking the right tools', items: ['Tool-by-use-case matrix (50+ tools)', 'Pricing comparison tables', 'Security & compliance ratings', 'Integration compatibility checker', 'Vendor red flag checklist', 'Trial-to-purchase decision framework'] },
    { num: '09', icon: Shield, title: 'Quarterly Review Framework', subtitle: 'How to re-assess every 90 days', items: ['Quarterly assessment template', 'What\'s changed checklist', 'Tool performance scorecard', 'New opportunity scanner', 'Budget reallocation guide', 'Team capability progression tracker'] },
    { num: '10', icon: FileText, title: 'Implementation Checklist', subtitle: '100-point checklist covering everything', items: ['Data readiness (15 points)', 'Tool setup & configuration (20 points)', 'Team training & onboarding (15 points)', 'Security & compliance (15 points)', 'Measurement & KPIs (15 points)', 'Governance & maintenance (20 points)'] },
];

export default function AIIntegrationSystemPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Hero */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Package size={14} /> Self-Serve System
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6 leading-tight">
                        The AI Integration System
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-4">
                        The exact system from $5,000 audits — now available as a self-serve toolkit. Every template, prompt, scoring matrix, and framework you need to implement AI in your business. <strong>No technical background required.</strong>
                    </p>
                    <p className="text-sm text-[#6A6A6A] max-w-xl mx-auto">
                        10 modules. 50+ prompts. 100-point checklist. Step-by-step guides with day-by-day action plans. Designed for someone who doesn't know where to start.
                    </p>
                </div>

                {/* Pricing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm">
                        <div className="text-xs font-mono font-bold text-violet-600 uppercase tracking-widest mb-2">Starter</div>
                        <div className="text-4xl font-bold text-[#1A1A1A] mb-2">$997<span className="text-sm font-normal text-zinc-500"> one-time</span></div>
                        <p className="text-sm text-[#4A4A4A] mb-4">Core system — audit template, prompt library, roadmap generator, 30-day plan, and ROI calculator.</p>
                        <ul className="space-y-2 mb-6">
                            {['Modules 1-6 (Core System)', '30+ prompts for Claude & ChatGPT', '30-Day Kickstart Plan', 'ROI Calculator', 'Lifetime access + updates'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                    <CheckCircle size={14} className="text-violet-500 mt-0.5 flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/api/buy/ai_integration_starter" className="block text-center py-3 bg-violet-600 text-white font-bold rounded-lg text-sm hover:bg-violet-500 transition-colors">Get Starter System →</a>
                    </div>

                    <div className="bg-white rounded-2xl border-2 border-emerald-400 p-6 shadow-lg relative">
                        <div className="absolute -top-3 right-4 px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold font-mono uppercase tracking-widest rounded-full">Best Value</div>
                        <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">Complete</div>
                        <div className="text-4xl font-bold text-[#1A1A1A] mb-2">$1,997<span className="text-sm font-normal text-zinc-500"> one-time</span></div>
                        <p className="text-sm text-[#4A4A4A] mb-4">Full system — all 10 modules, 50+ prompts, tool selection guide, quarterly framework, and 100-point checklist.</p>
                        <ul className="space-y-2 mb-6">
                            {['All 10 modules (Complete System)', '50+ prompts for Claude & ChatGPT', 'AI Tool Selection Guide (50+ tools)', 'Quarterly Review Framework', '100-point Implementation Checklist', 'Priority email support', 'Lifetime access + updates'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                    <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/api/buy/ai_integration_complete" className="block text-center py-3 bg-emerald-600 text-white font-bold rounded-lg text-sm hover:bg-emerald-500 transition-colors">Get Complete System →</a>
                    </div>
                </div>

                {/* Value Anchor */}
                <div className="bg-[#1A1A1A] rounded-2xl p-6 mb-12 text-white text-center">
                    <h2 className="text-lg font-grotesk font-bold mb-3">The Math</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-2xl font-bold">$5,000</div>
                            <div className="text-xs text-zinc-400">Quarterly audit (my time)</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-2xl font-bold">$8,000-$25,000</div>
                            <div className="text-xs text-zinc-400">Typical AI readiness assessment (4-8 weeks)</div>
                        </div>
                        <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
                            <div className="text-2xl font-bold text-emerald-400">$997-$1,997</div>
                            <div className="text-xs text-emerald-300">The same system, self-serve, immediate access</div>
                        </div>
                    </div>
                </div>

                {/* Module Breakdown */}
                <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">What's Inside (10 Modules)</h2>
                <div className="space-y-4 mb-12">
                    {modules.map((m, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center flex-shrink-0">
                                    <m.icon className="w-5 h-5 text-violet-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-xs font-mono text-violet-600 font-bold">MODULE {m.num}</span>
                                    </div>
                                    <h3 className="text-lg font-grotesk font-bold text-[#1A1A1A]">{m.title}</h3>
                                    <p className="text-sm text-[#6A6A6A] mb-3">{m.subtitle}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                        {m.items.map((item, j) => (
                                            <div key={j} className="flex items-start gap-2 text-xs text-[#4A4A4A]">
                                                <CheckCircle size={12} className="text-emerald-400 mt-0.5 flex-shrink-0" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Who This Is For */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-12 shadow-sm">
                    <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A] mb-4">Who This Is For</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { title: 'Small Business Owners', detail: 'Who know they need AI but don\'t know where to start. No technical background needed.' },
                            { title: 'Operations Managers', detail: 'Who want to automate manual processes but don\'t know which tools to use or how to evaluate them.' },
                            { title: 'Agency & Consultancy Owners', detail: 'Who want to offer AI advisory to their own clients using a proven system.' },
                            { title: 'Startup Founders', detail: 'Who need to make AI decisions fast without hiring a $15K/month consultant.' },
                        ].map((p, i) => (
                            <div key={i} className="p-4 bg-zinc-50 rounded-xl">
                                <h3 className="text-sm font-bold text-[#1A1A1A] mb-1">{p.title}</h3>
                                <p className="text-xs text-[#4A4A4A]">{p.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-12">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'Do I need to know anything about AI to use this?', a: 'No. The entire system is designed for someone who has never used AI tools before. Every step has instructions, screenshots, and copy-paste prompts. You just follow the steps.' },
                            { q: 'What\'s the difference between the $997 and $1,997 versions?', a: 'The $997 Starter includes the core system: audit template, prompt library, roadmap generator, 30-day plan, and ROI calculator (Modules 1-6). The $1,997 Complete adds the AI Tool Selection Guide, Quarterly Review Framework, 100-point Implementation Checklist, and 20+ additional prompts (Modules 7-10).' },
                            { q: 'Is this the same system you use in $5,000 audits?', a: 'Yes. The templates, prompts, scoring matrices, and frameworks are identical. The difference is that in the $5,000 audit, I run the process for you and interpret the results in 48 hours. With the system, you follow the step-by-step guides yourself.' },
                            { q: 'Can I use this to offer AI advisory to my own clients?', a: 'Yes. Many agency owners and consultants purchase the Complete system to white-label the methodology for their own client base. The system is designed to be repeatable and scalable.' },
                            { q: 'What format does the system come in?', a: 'Notion templates, Google Sheets/Excel spreadsheets, PDF guides, and plain text prompt files. Everything is immediately usable — no special software required.' },
                            { q: 'What if I get stuck?', a: 'Complete system purchasers ($1,997) get priority email support. If you need hands-on help, you can always upgrade to the Quarterly Audit ($5,000) or Monthly Advisor ($5K-$15K) at any time.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A] leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-violet-600 rounded-2xl p-8 text-white text-center mb-12">
                    <h2 className="text-2xl font-grotesk font-bold mb-3">Stop Guessing. Start Implementing.</h2>
                    <p className="text-violet-100 mb-6">The same system from $5,000 audits. Self-serve. Immediate access.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/api/buy/ai_integration_complete" className="px-8 py-4 bg-white text-violet-800 font-bold rounded-lg hover:bg-violet-50 transition-colors">Get Complete System ($1,997) →</a>
                        <a href="/api/buy/ai_integration_starter" className="px-8 py-4 text-white font-bold rounded-lg border border-white/30 hover:border-white/60 transition-colors">Get Starter ($997) →</a>
                    </div>
                </div>

                {/* Upgrade Path */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-12">
                    <div className="flex items-start gap-4">
                        <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-grotesk font-bold text-[#1A1A1A] mb-1">Want Someone to Do It For You?</h3>
                            <p className="text-sm text-[#4A4A4A] mb-3">If you'd rather have an expert run the audit and build your roadmap in 48 hours, the Quarterly AI Audit ($5,000) and Monthly AI Advisor ($5K-$15K) are available.</p>
                            <Link href="/ai-integration" className="text-sm font-bold text-emerald-700 hover:text-emerald-900">View Advisory Options →</Link>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/ai-integration" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Back to AI Integration</Link>
                </div>
            </div>
        </main>
    );
}

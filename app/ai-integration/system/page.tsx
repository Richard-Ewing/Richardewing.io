import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Package, CheckCircle, ArrowRight, BookOpen, FileText, Brain, Target, Calculator, ClipboardList, MessageSquare, BarChart3, Settings, Layers, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Enterprise AI Integration System Spec',
    description: 'Technical specification of the AI Integration System and Product & AI Economist Operating Kit. Deploy deterministic P&L models, prompts, and runtime controls.',
    keywords: ['AI integration system', 'AI playbook for business', 'AI implementation guide', 'how to implement AI step by step', 'AI for small business guide', 'AI strategy template', 'AI readiness template', 'AI roadmap template', 'AI prompts for business', 'AI ROI calculator', 'AI tool selection guide', 'AI adoption playbook', 'DIY AI strategy', 'AI integration toolkit', 'Product Economist Operating Kit'],
    openGraph: {
        title: 'The AI Integration System & Operating Kit | Richard Ewing',
        description: '5 working Excel/CSV P&L models ($29), Live Browser Workspace (/workspace), plus the 10-module AI Integration System and 50+ executive prompts.',
    },
    alternates: { canonical: 'https://www.richardewing.io/ai-integration/system' },
};

const modules = [
    { num: '01', icon: ClipboardList, title: 'AI Readiness & Margin Audit', subtitle: 'The exact questionnaire from our $2,500 P&L Turnaround Sprints', items: ['47-question business & P&L assessment', 'Department-by-department scoring', 'Data maturity evaluation', 'Current tool & token inventory', 'Risk & compliance checklist', 'Gap identification matrix'] },
    { num: '02', icon: Layers, title: 'Business Process & Workflow Map', subtitle: 'Map every process and score AI unit economics', items: ['Process mapping template (Notion + Spreadsheet)', 'Time-per-task tracking sheet', 'Automation opportunity scoring (1-10)', 'Human-in-the-loop decision framework', 'Department priority ranking', 'Quick-win identifier'] },
    { num: '03', icon: Target, title: 'AI Opportunity Scoring Matrix', subtitle: 'Rank every opportunity by bottom-line P&L impact', items: ['ROI scoring formula (Revenue x Probability / Effort)', 'Implementation difficulty ratings', 'Risk assessment per initiative', 'Time-to-value estimates', 'Resource requirement mapping', 'Executive summary generator'] },
    { num: '04', icon: MessageSquare, title: 'The Executive Prompt Library (50+ Prompts)', subtitle: 'Copy-paste prompts for Claude, ChatGPT & Gemini', items: ['Business & P&L analysis prompts (15)', 'Strategy generation prompts (10)', 'Implementation planning prompts (10)', 'ROI projection prompts (5)', 'Team communication prompts (5)', 'Vendor evaluation prompts (5)'] },
    { num: '05', icon: Brain, title: 'Strategic Roadmap Generator', subtitle: 'Step-by-step guide to create your own AI roadmap', items: ['Feed your audit data into AI (exact instructions)', 'Generate top 10 actions automatically', 'Prioritize by bottom-line impact', 'Create quarterly milestones', 'Build dependency chains', 'Executive presentation template'] },
    { num: '06', icon: BookOpen, title: '30-Day P&L Turnaround & Kickstart Plan', subtitle: 'Day-by-day action plan for immediate implementation', items: ['Day 1-7: Cloud & token forensics + Zombie Feature freeze', 'Day 8-14: First high-margin AI workflow deployment', 'Day 15-21: Unit economics measurement & iteration', 'Day 22-28: Scale & expand with cost guardrails', 'Day 29-30: CFO / Board review & next quarter plan', 'Daily time commitment guide (30-60 min/day)'] },
    { num: '07', icon: BarChart3, title: 'AI Feature Pricing & ROI Stress-Tester', subtitle: 'Project savings and gross margin across P50/P90/P99 usage', items: ['Token COGS & margin stress-tester (.XLSX/.CSV)', 'Zombie Feature Kill-List & Capacity Matrix (.XLSX/.CSV)', 'Revenue impact estimator', 'Break-even analysis per tool', 'Annual projection dashboard', 'Board-ready ROI summary'] },
    { num: '08', icon: Settings, title: 'AI Tool Selection & Routing Guide', subtitle: 'Decision tree for picking models and avoiding vendor lock-in', items: ['Tool-by-use-case matrix (50+ tools)', 'Pricing comparison tables', 'Security & compliance ratings', 'Integration compatibility checker', 'Vendor red flag checklist', 'Trial-to-purchase decision framework'] },
    { num: '09', icon: Shield, title: '12-Slide CFO & Board Defense Blueprint', subtitle: 'How to defend your roadmap and re-assess every 90 days', items: ['12-slide board deck blueprint & speaker scripts', 'Quarterly assessment template', 'Tool performance scorecard', 'New opportunity scanner', 'Budget reallocation guide', 'ASC 350-40 & Section 174 capitalization guide'] },
    { num: '10', icon: FileText, title: 'Implementation & Governance Checklist', subtitle: '100-point checklist covering everything from data to runtime caps', items: ['Data readiness (15 points)', 'Tool setup & configuration (20 points)', 'Team training & onboarding (15 points)', 'Security & compliance (15 points)', 'Measurement & KPIs (15 points)', 'Governance & maintenance (20 points)'] },
];

export default function AIIntegrationSystemPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">

                {/* Hero */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Package size={14} /> Self-Serve Operating System
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6 leading-tight">
                        The Product &amp; AI Economist System
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-4">
                        The exact spreadsheets, prompts, scoring matrices, and board blueprints from our $2,500 P&amp;L Turnaround Sprints - available as an instant self-serve kit starting at <strong>$29</strong>, including immediate access to the <strong>Live Browser Workspace</strong>.
                    </p>
                    <p className="text-sm text-[#6A6A6A] max-w-xl mx-auto">
                        5 editable Excel/CSV financial models. 12-slide CFO board blueprint. 30-day turnaround runbook. 50+ prompts. Live interactive browser software at <code>/workspace</code>.
                    </p>
                </div>

                {/* Pricing Tiers (Aligned with $29 / $79 Operating Kit + Team/Agency License) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="text-xs font-mono font-bold text-violet-600 uppercase tracking-widest mb-2">Standard Edition</div>
                            <div className="text-4xl font-bold text-[#1A1A1A] mb-2">$29<span className="text-sm font-normal text-zinc-500"> one-time</span></div>
                            <p className="text-sm text-[#4A4A4A] mb-4">All 5 working Excel/CSV P&amp;L spreadsheets, 12-slide CFO board blueprint, 30-day turnaround runbook, and Live Browser Workspace.</p>
                            <ul className="space-y-2 mb-6">
                                {[
                                    'AI Feature Pricing & Margin Stress-Tester (.XLSX/.CSV)',
                                    'Zombie Feature Kill-List Matrix (.XLSX/.CSV)',
                                    '12-Slide CFO & Board Defense Blueprint',
                                    'First-30-Days P&L Turnaround Runbook',
                                    'Live Browser Workspace (/workspace)',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                        <CheckCircle size={14} className="text-violet-500 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link href="/toolkit" className="block text-center py-3 bg-violet-600 text-white font-bold rounded-lg text-sm hover:bg-violet-500 transition-colors">Get Operating Kit ($29) →</Link>
                    </div>

                    <div className="bg-white rounded-2xl border-2 border-emerald-400 p-6 shadow-lg relative flex flex-col justify-between">
                        <div className="absolute -top-3 right-4 px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold font-mono uppercase tracking-widest rounded-full">Most Popular</div>
                        <div>
                            <div className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest mb-2">Complete Executive Bundle</div>
                            <div className="text-4xl font-bold text-[#1A1A1A] mb-2">$79<span className="text-sm font-normal text-zinc-500"> one-time</span></div>
                            <p className="text-sm text-[#4A4A4A] mb-4">Everything in the $29 Operating Kit plus the 3 flagship enterprise whitepapers, 75-point R&amp;D Audit Checklist, and team license (up to 10 seats).</p>
                            <ul className="space-y-2 mb-6">
                                {[
                                    'All 5 Operating Kit models + Live Workspace',
                                    'AI Margin Engineering Audit Whitepaper (PDF)',
                                    'The Fractional AI Economist Playbook (PDF)',
                                    'Enterprise AI Risk Advisory Dossier (PDF)',
                                    '75-Question PE & Board Diligence Checklist',
                                    'Team-wide license (up to 10 internal seats)',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                        <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="/api/buy/operating_kit_complete" className="block text-center py-3 bg-emerald-600 text-white font-bold rounded-lg text-sm hover:bg-emerald-500 transition-colors">Get Complete Bundle ($79) →</a>
                    </div>

                    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest mb-2">1-on-1 Or Turnaround Sprint</div>
                            <div className="text-4xl font-bold text-[#1A1A1A] mb-2">$450<span className="text-sm font-normal text-zinc-500"> / $2,500</span></div>
                            <p className="text-sm text-[#4A4A4A] mb-4">Want Richard to run the audit on your actual numbers? Book a 60-min live P&amp;L Tear-Down ($450) or a 7-day Turnaround Sprint ($2,500).</p>
                            <ul className="space-y-2 mb-6">
                                {[
                                    '$450: 60-min live Zoom + 48-hr action memo',
                                    '$2,500: 7-day forensic P&L & AI Turnaround Sprint',
                                    '$7,500: 21-day 0-to-1 AI Product Build Sprint',
                                    '$10,000/mo: Fractional CPO / Product Economist',
                                    '100% of your $29/$79 kit credited on upgrade',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#3A3A3A]">
                                        <CheckCircle size={14} className="text-zinc-700 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link href="/services" className="block text-center py-3 bg-[#1A1A1A] text-white font-bold rounded-lg text-sm hover:bg-zinc-800 transition-colors">Explore Advisory Sprints →</Link>
                    </div>
                </div>

                {/* Value Anchor */}
                <div className="bg-[#1A1A1A] rounded-2xl p-6 mb-12 text-white text-center border border-white/10 shadow-xl">
                    <h2 className="text-lg font-grotesk font-bold text-white mb-3">The Math</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-2xl font-bold text-white">$2,500</div>
                            <div className="text-xs text-zinc-300">7-Day P&amp;L &amp; AI Turnaround Sprint (done-with-you)</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="text-2xl font-bold text-white">$15,000-$50,000</div>
                            <div className="text-xs text-zinc-300">Typical agency AI readiness deck (4-8 weeks)</div>
                        </div>
                        <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
                            <div className="text-2xl font-bold text-emerald-400">$29 / $79</div>
                            <div className="text-xs text-emerald-300">The exact spreadsheets + Live Browser Workspace, instant access</div>
                        </div>
                    </div>
                </div>

                {/* Module Breakdown */}
                <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">What&apos;s Inside the System (10 Core Pillars)</h2>
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
                            { title: 'CEOs, Founders & COOs', detail: 'Who want hard P&L numbers on where AI helps margins and where feature bloat is burning cash.' },
                            { title: 'CPOs, VPs of Product & Directors', detail: 'Who need board-ready spreadsheets, Zombie Feature kill-lists, and AI pricing stress-testers before the next QBR.' },
                            { title: 'CFOs & VPs of Finance', detail: 'Who want to audit engineering payroll, cloud/token invoices, and Section 174 / ASC 350-40 capitalization.' },
                            { title: 'CTOs & Engineering Managers', detail: 'Who want to protect developer velocity and stop shipping negative-margin AI features.' },
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
                            { q: 'What is the difference between the $29 Standard Edition and the $79 Complete Bundle?', a: 'The $29 Standard Edition includes all 5 core Operating Kit spreadsheets/blueprints (.XLSX, .CSV, and .MD) plus instant browser access to the Live Product Economist Workspace (/workspace). The $79 Complete Executive Bundle adds all 3 flagship executive whitepapers, the 75-question PE/Board diligence checklist, and a 10-seat team license.' },
                            { q: 'Does this include live interactive software or just static files?', a: 'Both. You get offline Excel (.XLSX), CSV, and Markdown files you can open in Excel, Google Sheets, or Notion, PLUS immediate access to our Live Browser Workspace (/workspace) where you can configure your company ARR, headcount, and AI spend, save scenarios locally, and export a custom Board Briefing.' },
                            { q: 'Is this the same system you use in your $2,500 Turnaround Sprints?', a: 'Yes. The spreadsheets, Zombie Feature kill-list matrix, AI pricing stress-tester, and 12-slide CFO board defense blueprint are the exact models I use in my $450 Tear-Downs and $2,500 Turnaround Sprints.' },
                            { q: 'What if I want you to audit our numbers or build a custom AI tool for us?', a: 'You can book a 60-minute 1-on-1 P&L Tear-Down ($450), a 7-Day Turnaround Sprint ($2,500), or commission a 21-Day 0-to-1 AI Product Build Sprint ($7,500) at any time on /services.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A] leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-violet-600 rounded-2xl p-8 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-3">Stop Guessing. Start Modeling Your P&amp;L.</h2>
                    <p className="text-violet-100 mb-6">5 working spreadsheets + Live Browser Workspace. Immediate access.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/toolkit" className="px-8 py-4 bg-white text-violet-800 font-bold rounded-lg hover:bg-violet-50 transition-colors">Get Operating Kit ($29) →</Link>
                        <a href="/api/buy/operating_kit_complete" className="px-8 py-4 text-white font-bold rounded-lg border border-white/30 hover:border-white/60 transition-colors">Get Complete Bundle ($79) →</a>
                        <Link href="/workspace" className="px-8 py-4 bg-violet-900/50 text-white font-bold rounded-lg border border-white/20 hover:bg-violet-900 transition-colors">Open Live Workspace →</Link>
                    </div>
                </div>

                {/* Upgrade Path */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-12">
                    <div className="flex items-start gap-4">
                        <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-grotesk font-bold text-[#1A1A1A] mb-1">Want Hands-On Execution?</h3>
                            <p className="text-sm text-[#4A4A4A] mb-3">Book a 60-minute 1-on-1 P&amp;L Tear-Down ($450), a 7-Day Turnaround Sprint ($2,500), a 21-Day 0-to-1 AI Product Build Sprint ($7,500), or Fractional CPO leadership ($10,000/mo).</p>
                            <Link href="/services" className="text-sm font-bold text-emerald-700 hover:text-emerald-900">View All 3 Buying Paths →</Link>
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

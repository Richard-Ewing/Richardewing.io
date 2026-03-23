import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1.6: Engineering Budget & Capex/Opex | Curriculum | Richard Ewing',
    description: 'Master engineering budgeting, Capex vs Opex classification, R&D tax credit eligibility, and financial reporting for engineering organizations.',
    keywords: ['engineering budget', 'capex opex', 'R&D tax credit', 'engineering financial reporting', 'software capitalization'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-6' },
};

const lessons = [
    {
        title: 'Lesson 1: Engineering Budget Anatomy',
        content: 'The engineering budget has four major categories: People (65-80%), Infrastructure (10-20%), Tools/Licenses (5-10%), and Other (3-5%). Understanding what you\'re actually spending on is the foundation of engineering economics.',
        details: [
            { metric: 'People Costs (Burdened)', description: 'Salary + benefits + taxes + equipment + office space + recruiter fees = "burdened" cost. A $180K salary engineer actually costs $230K-$270K fully burdened.', benchmark: 'Burden multiplier: 1.25-1.5x base salary (US, 2025)' },
            { metric: 'Infrastructure Costs', description: 'Cloud hosting, CDN, databases, monitoring, CI/CD, staging environments. The fastest-growing budget category as companies scale.', benchmark: 'Target: 10-15% of engineering budget. Warning: > 20%' },
            { metric: 'Tool & License Costs', description: 'GitHub, Jira, Figma, Datadog, PagerDuty, SonarQube, and the 40+ other tools in a typical engineering org. "Shadow SaaS" (tools purchased on team credit cards) is usually 20-30% more.', benchmark: 'Audit: count actual tools in use vs. tools on the budget. Usually 2-3x more.' },
            { metric: 'The Hidden 20%', description: 'Recruiting costs (3-6 months per hire), onboarding productivity loss, context-switching overhead, and meeting costs. These are real expenses that rarely appear in "engineering budget" conversations.', benchmark: 'Engineer meetings: average 12 hrs/week × $100/hr = $62K/yr per engineer in meeting cost' },
        ],
        exercise: 'Calculate your engineering budget breakdown by category. Include burdened people costs, infrastructure, tools (including shadow SaaS), and hidden costs.',
    },
    {
        title: 'Lesson 2: Capex vs Opex Classification',
        content: 'Whether engineering work is classified as Capital Expenditure (Capex) or Operating Expenditure (Opex) has major financial implications: Capex is amortized over years and improves EBITDA; Opex hits the P&L immediately.',
        details: [
            { metric: 'Capitalizable Work (Capex)', description: 'New feature development (post-feasibility), new platform/product builds, major enhancements with measurable useful life. Must meet ASC 350-40 criteria for internal-use software.', benchmark: 'Typically 30-50% of engineering time is capitalizable' },
            { metric: 'Expensed Work (Opex)', description: 'Bug fixes, maintenance, planning/research, training, general administration, support. All non-capitalizable engineering work.', benchmark: 'If Opex > 70%, your engineering org is mostly maintaining, not building. That\'s a signal.' },
            { metric: 'EBITDA Impact', description: 'Capitalizing $5M of engineering work spreads the expense over 3-5 years instead of hitting this quarter. This can improve EBITDA by $4-4.5M in the current year.', benchmark: 'PE firms and acquirers scrutinize capitalization ratios. Aggressive capitalization is a red flag.' },
        ],
        exercise: 'Categorize your last quarter\'s engineering work: what percentage is capitalizable (new features, new platforms) vs. expensed (maintenance, bugs, support)?',
    },
    {
        title: 'Lesson 3: R&D Tax Credits',
        content: 'The R&D Tax Credit (IRC Section 41) allows companies to claim 10-20% of qualifying R&D expenses as tax credits. Most software companies under-claim by 30-50% because they don\'t know what qualifies.',
        details: [
            { metric: 'Qualifying Activities', description: 'Developing new technology, improving performance of existing software, integrating systems in novel ways, developing proprietary algorithms. The four-part test: technological uncertainty, process of experimentation, technical in nature, permitted purpose.', benchmark: 'Most feature development qualifies. Bug fixes and maintenance do not.' },
            { metric: 'Qualified Research Expenses (QRE)', description: 'Engineer salaries (proportional to qualifying time), contractor costs (65%), and supplies used in R&D. Cloud infrastructure used for development (not production) may also qualify.', benchmark: 'Typical software company QRE: 50-70% of engineering salary costs' },
            { metric: 'Credit Amount', description: 'Federal: ~6.5% of QRE (simplified calculation). Many states add 3-12% on top. A $10M engineering budget with 60% QRE = $6M × 6.5% = $390K federal credit + state credits.', benchmark: 'Startups (< $5M revenue, < 5 years): can apply credit against payroll tax' },
        ],
        exercise: 'Estimate your company\'s R&D tax credit opportunity: (qualifying engineer salaries) × (% time on qualifying activities) × 6.5% federal rate.',
    },
];

export default function Module16Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link><span>/</span>
                        <span className="text-cyan-400 font-bold">Module 1.6</span>
                    </div>
                    <div className="mb-10">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 1.6: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Engineering Budget & Capex/Opex</span></h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">The financial architecture of engineering organizations: budget anatomy, Capex vs Opex classification, software capitalization, and R&D tax credit optimization.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">3 Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~50 min</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced / Executive</span>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> The four categories of engineering budget (including hidden costs)</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How Capex vs Opex classification impacts EBITDA and valuations</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to maximize R&D tax credit claims (most companies under-claim 30-50%)</li>
                        </ul>
                    </div>
                    <div className="space-y-12">
                        {lessons.map((lesson, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div>
                                        <h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2>
                                    </div>
                                    <p className="text-zinc-400 mb-6">{lesson.content}</p>
                                    <div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div>
                                    <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">🎓 Track 1 Complete!</h2>
                        <p className="text-zinc-300 mb-6">You&apos;ve completed all 6 modules of Engineering Economics. You can now measure, quantify, and communicate engineering investment using financial language.</p>
                        <Link href="/curriculum/tracks" className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:opacity-90 transition-opacity inline-block">Explore Other Tracks →</Link>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                        <Link href="/curriculum/tracks/engineering-economics/1-5" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 1.5</Link>
                        <Link href="/curriculum/tracks" className="text-sm text-zinc-500 hover:text-white transition-colors">Back to All Tracks</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

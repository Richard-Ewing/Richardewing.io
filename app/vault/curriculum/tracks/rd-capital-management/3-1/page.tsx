import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 3.1: R&D Capital Audit Methodology | Curriculum | Richard Ewing',
    description: 'Master the 4-phase R&D Capital Audit methodology: Discovery, Technical Assessment, Economic Modeling, and Remediation Roadmap. The executive track for CTOs and PE partners.',
    keywords: ['R&D capital audit', 'due diligence methodology', 'technical assessment', 'economic modeling', 'PE due diligence course'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/rd-capital-management/3-1' },
};

const lessons = [
    {
        title: 'Lesson 1: Phase 1 — Discovery',
        content: 'Discovery is the 2-week phase where you gather data, interview stakeholders, and understand the organization before you begin analysis. The quality of your discovery determines the quality of everything that follows.',
        details: [
            { metric: 'Stakeholder Interviews', description: 'Interview CTO, VP Engineering, Engineering Managers, and 2-3 individual contributors. Each perspective reveals different aspects of the engineering reality.', benchmark: '8-12 interviews per audit. 45 min each. Use the Audit Interview Protocol.' },
            { metric: 'Data Collection', description: 'Git history, JIRA data, cloud spend reports, incident logs, team org chart, product roadmap, and financial statements. The data tells you what people won\'t.', benchmark: 'Minimum: 12 months of history. Ideal: 24 months for trend analysis.' },
            { metric: 'Document Review', description: 'Architecture docs, ADRs (Architecture Decision Records), post-mortems, tech debt backlogs. The gap between documentation and reality reveals organizational health.', benchmark: 'Key signal: ratio of documented decisions to undocumented decisions.' },
        ],
        exercise: 'Create a discovery checklist for your organization. List every data source, stakeholder, and document you would need for a comprehensive audit.',
    },
    {
        title: 'Lesson 2: Phase 2 — Technical Assessment',
        content: 'The Technical Assessment is a 3-week deep dive into the engineering organization. You\'re producing quantitative data that will feed the economic model.',
        details: [
            { metric: 'DORA Metrics Assessment', description: 'Measure all four DORA metrics from actual data (not surveys). Deployment frequency from CI/CD logs. Lead time from Git + deploy timestamps. CFR from incident logs.', benchmark: 'Calibrate against DORA benchmarks for company size and industry.' },
            { metric: 'Technical Debt Inventory', description: 'Catalog every instance of significant technical debt. Classify by type (code/architecture/infrastructure/dependency). Estimate remediation effort.', benchmark: 'Use static analysis + team interviews to catch what tools miss.' },
            { metric: 'Team Topology Analysis', description: 'Map how teams are organized. Identify Conway\'s Law violations (team structure doesn\'t match architecture). Find bottleneck teams.', benchmark: 'Key metric: cross-team dependency count. High = organizational debt.' },
            { metric: 'Innovation Tax Measurement', description: 'Calculate the percentage of engineering time spent on maintenance, bugs, support, and infrastructure vs. new features.', benchmark: 'Method: sprint retrospective analysis + time tracking data + engineering surveys.' },
        ],
        exercise: 'Perform a mini-assessment on one team: calculate their DORA metrics, estimate their Innovation Tax, and identify their top 3 technical debt items.',
    },
    {
        title: 'Lesson 3: Phase 3 — Economic Modeling',
        content: 'This is where engineering data becomes financial data. You\'re translating technical findings into dollar amounts, risk scores, and projections that finance leaders understand.',
        details: [
            { metric: 'Product Debt Index', description: 'Aggregate technical debt into a single dollar amount. This is your "total debt exposure" — the cost of all accumulated technical debt.', benchmark: 'Use PDI calculator + manual adjustments for items tools can\'t measure.' },
            { metric: 'Technical Insolvency Projection', description: 'Project when maintenance costs will consume 100% of engineering capacity based on current debt accumulation rate.', benchmark: 'Method: plot Innovation Tax over time. Extrapolate to 100%. That\'s TID.' },
            { metric: 'Enterprise Value Impact', description: 'Calculate how technical debt affects the company\'s enterprise valuation. Use EV-SE to model before/after remediation scenarios.', benchmark: 'PE firms use EV/Revenue multiples. Show how tech debt reduces the multiple.' },
            { metric: 'ROI of Remediation', description: 'For every $1 invested in debt remediation, what\'s the return? Include: freed engineering capacity, reduced incident cost, faster time-to-market.', benchmark: 'Typical: $3-$7 return per $1 invested in systematic debt remediation.' },
        ],
        exercise: 'Create an economic model for a hypothetical company: $10M engineering budget, 45% Innovation Tax, 80 engineers. Calculate PDI, TID, and ROI of reducing Innovation Tax to 30%.',
    },
];

export default function Module31Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link>
                        <span>/</span>
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">R&D Capital Management</Link>
                        <span>/</span>
                        <span className="text-emerald-400 font-bold">Module 3.1</span>
                    </div>

                    <div className="mb-10">
                        <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-3">Track 3 — R&D Capital Management</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">
                            Module 3.1:{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">R&D Capital Audit Methodology</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">The complete methodology for conducting an R&D Capital Audit: from stakeholder discovery through economic modeling. This is the executive track for CTOs, PE partners, and board members.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">3 Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">~75 min</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced / Executive</span>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> How to structure a comprehensive Discovery phase (stakeholder interviews, data collection)</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> How to perform Technical Assessment (DORA, debt inventory, team topology)</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> How to build Economic Models that translate engineering data to financial data</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> How to calculate ROI of debt remediation for PE and board presentations</li>
                        </ul>
                    </div>

                    <div className="space-y-12">
                        {lessons.map((lesson, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center">
                                            <span className="text-xs font-bold text-white">{i + 1}</span>
                                        </div>
                                        <h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2>
                                    </div>
                                    <p className="text-zinc-400 mb-6">{lesson.content}</p>
                                    <div className="space-y-3 mb-6">
                                        {lesson.details.map((d, j) => (
                                            <div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5">
                                                <div className="text-sm font-bold text-white mb-1">{d.metric}</div>
                                                <p className="text-xs text-zinc-500 mb-2">{d.description}</p>
                                                <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{d.benchmark}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5">
                                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div>
                                        <p className="text-sm text-zinc-300">{lesson.exercise}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">📊 Module Assessment</h2>
                        <p className="text-zinc-400 mb-6">Complete to demonstrate mastery of Module 3.1:</p>
                        <div className="space-y-3">
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-emerald-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Create a complete discovery checklist for an audit</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-emerald-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Perform a mini technical assessment on one team</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-emerald-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Build an economic model for a hypothetical $10M engineering org</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-emerald-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Create a board-ready remediation ROI presentation</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <Link href="/curriculum/tracks" className="text-sm text-zinc-500 hover:text-white transition-colors">← Back to Tracks</Link>
                        <Link href="/curriculum/tracks/rd-capital-management/3-2" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 3.2 →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1.1: Engineering Productivity Metrics | Curriculum | Richard Ewing',
    description: 'Master DORA Metrics, APER, Feature Velocity, and Lead Time for Changes. Learn to measure engineering productivity as an economic activity.',
    keywords: ['DORA metrics course', 'engineering productivity', 'APER calculator', 'feature velocity', 'lead time for changes', 'engineering metrics training'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-1' },
};

const lessons = [
    {
        title: 'Lesson 1: The Four DORA Metrics',
        content: `DORA (DevOps Research and Assessment) identified four key metrics that predict software delivery performance. These are the industry standard for measuring engineering organizations.`,
        details: [
            { metric: 'Deployment Frequency', description: 'How often code deploys to production. Elite: on-demand (multiple times/day). Low: less than once per month.', benchmark: 'Elite: On-demand | High: Daily-Weekly | Medium: Monthly | Low: < Monthly' },
            { metric: 'Lead Time for Changes', description: 'Time from code commit to production deployment. Measures the speed of your delivery pipeline.', benchmark: 'Elite: < 1 hour | High: 1 day-1 week | Medium: 1 week-1 month | Low: > 1 month' },
            { metric: 'Change Failure Rate', description: 'Percentage of deployments that cause a production failure requiring rollback or hotfix.', benchmark: 'Elite: 0-15% | High: 16-30% | Medium: 31-45% | Low: > 45%' },
            { metric: 'Mean Time to Recovery (MTTR)', description: 'Time to restore service after a production incident.', benchmark: 'Elite: < 1 hour | High: < 1 day | Medium: < 1 week | Low: > 1 week' },
        ],
        exercise: 'Calculate each DORA metric for your team over the last quarter. Compare against the benchmarks above. Where does your team fall?',
    },
    {
        title: 'Lesson 2: Revenue Per Engineer (APER)',
        content: `APER (Annual Productivity to Engineering Ratio) measures how much revenue each engineer generates. This is the bridge between engineering metrics and financial language.`,
        details: [
            { metric: 'APER Formula', description: 'Annual Revenue / Number of Engineers = Revenue per Engineer', benchmark: '$250K-$500K: Early stage | $500K-$1M: Growth | $1M+: Efficient' },
            { metric: 'Stage Adjustments', description: 'Pre-revenue companies need modified APER using ARR trajectory. Post-PMF companies should target quarter-over-quarter improvement.', benchmark: 'Seed: N/A | Series A: $200K+ | Series B: $400K+ | Series C+: $700K+' },
            { metric: 'Industry Benchmarks', description: 'SaaS companies average $500K-$700K. Infrastructure companies: $800K+. Consumer apps: $300K-$500K. Enterprise: $600K-$1M.', benchmark: 'Top quartile exceeds $1M revenue per engineer' },
        ],
        exercise: 'Use the free APER calculator at /tools/aper to calculate your organization\'s Revenue per Engineer. Compare against stage and industry benchmarks.',
    },
    {
        title: 'Lesson 3: Feature Velocity & Innovation Tax',
        content: `Feature Velocity measures how much of your engineering capacity goes to new features vs. maintenance. The Innovation Tax is the percentage consumed by non-feature work.`,
        details: [
            { metric: 'Innovation Tax', description: 'Percentage of engineering time spent on maintenance, bug fixes, support, and infrastructure. Healthy: < 30%. Dangerous: > 60%.', benchmark: 'Healthy: < 30% | Warning: 30-50% | Critical: 50-70% | Terminal: > 70%' },
            { metric: 'Feature Velocity', description: '100% minus Innovation Tax = the percentage of engineering capacity available for new features and revenue-generating work.', benchmark: 'Target: > 70% | Minimum: > 50% | Crisis: < 30%' },
            { metric: 'Velocity Trend', description: 'More important than absolute velocity is the trend. Declining velocity = accumulating debt. Improving velocity = debt is being managed.', benchmark: 'Track quarterly. Alert if declining for 2+ consecutive quarters.' },
        ],
        exercise: 'Survey your team leads: what percentage of sprint capacity goes to new features vs. maintenance/bugs/tech debt? Calculate your Innovation Tax.',
    },
    {
        title: 'Lesson 4: Board-Ready Metric Packaging',
        content: `Raw engineering metrics mean nothing to boards and investors. This lesson teaches you how to translate engineering data into the financial language that drives decisions.`,
        details: [
            { metric: 'The Finance Translation', description: 'Instead of "we need to reduce tech debt," say "maintenance costs consume 45% of our engineering budget — $3.2M annually. Reducing to 30% frees $1.1M for feature development."', benchmark: 'Always: dollar amounts. Always: business impact.' },
            { metric: 'The Trend Story', description: 'Boards care about trends, not snapshots. Show trajectory: "APER improved from $450K to $580K in 3 quarters, tracking toward our $700K target."', benchmark: 'Minimum 3 quarters of data for trend analysis.' },
            { metric: 'The Benchmark Context', description: 'Numbers without context are meaningless. "Our MTTR of 2 hours puts us in the top 25% for our industry. We target top 10%."', benchmark: 'Always compare against: industry, stage, and your own history.' },
        ],
        exercise: 'Create a one-slide executive summary of your engineering organization using the metrics from Lessons 1-3. Include dollar amounts, trends, and benchmark comparisons.',
    },
];

export default function Module11Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link>
                        <span>/</span>
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link>
                        <span>/</span>
                        <span className="text-cyan-400 font-bold">Module 1.1</span>
                    </div>

                    <div className="mb-10">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">
                            Module 1.1:{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Engineering Productivity Metrics</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">Master the metrics that define engineering as an economic activity: DORA, APER, Feature Velocity, and Lead Time. Learn to speak the language of finance.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">4 Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">Beginner-Intermediate</span>
                        </div>
                    </div>

                    {/* Key Takeaways */}
                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to measure engineering productivity using the four DORA metrics</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to calculate Revenue per Engineer (APER) with industry benchmarks</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to identify and quantify your Innovation Tax</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to package engineering metrics for board presentations</li>
                        </ul>
                    </div>

                    {/* Lessons */}
                    <div className="space-y-12">
                        {lessons.map((lesson, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                                            <span className="text-xs font-bold text-white">{i + 1}</span>
                                        </div>
                                        <h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2>
                                    </div>
                                    <p className="text-zinc-400 mb-6">{lesson.content}</p>

                                    {/* Metric Cards */}
                                    <div className="space-y-3 mb-6">
                                        {lesson.details.map((d, j) => (
                                            <div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5">
                                                <div className="text-sm font-bold text-white mb-1">{d.metric}</div>
                                                <p className="text-xs text-zinc-500 mb-2">{d.description}</p>
                                                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Exercise */}
                                    <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5">
                                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div>
                                        <p className="text-sm text-zinc-300">{lesson.exercise}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Assessment */}
                    <div className="mt-12 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">📊 Module Assessment</h2>
                        <p className="text-zinc-400 mb-6">Complete the following to demonstrate mastery of Module 1.1:</p>
                        <div className="space-y-3">
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">Calculate all 4 DORA metrics for your organization</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">Run the APER calculator and document your results</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">Calculate your Innovation Tax percentage</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">Create a board-ready one-slide engineering summary</span>
                            </label>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="mt-12 flex items-center justify-between">
                        <Link href="/curriculum/tracks" className="text-sm text-zinc-500 hover:text-white transition-colors">← Back to Tracks</Link>
                        <Link href="/curriculum/tracks/engineering-economics/1-2" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 1.2 →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

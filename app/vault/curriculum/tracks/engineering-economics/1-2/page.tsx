import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1.2: Technical Debt Classification | Curriculum | Richard Ewing',
    description: 'Master the taxonomy of technical debt: Code Debt, Architecture Debt, Infrastructure Debt, and Dependency Debt. Learn to classify, quantify, and remediate each type.',
    keywords: ['technical debt classification', 'code debt', 'architecture debt', 'infrastructure debt', 'dependency debt', 'technical debt course'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-2' },
};

const lessons = [
    {
        title: 'Lesson 1: Code-Level Debt',
        content: 'Code debt is the most visible form of technical debt — duplicated code, overly complex functions, missing tests, and unclear naming. It\'s the easiest to measure and often the least economically impactful.',
        details: [
            { metric: 'Duplication', description: 'Copy-pasted code that should be abstracted into shared functions. Creates maintenance multiplication — every bug fix requires N changes.', benchmark: 'Target: < 5% duplication | Warning: 5-15% | Critical: > 15%' },
            { metric: 'Cyclomatic Complexity', description: 'Number of independent paths through a function. High complexity = hard to test, hard to modify, high bug probability.', benchmark: 'Target: < 10 per function | Warning: 10-20 | Critical: > 20' },
            { metric: 'Test Coverage', description: 'Percentage of code paths exercised by automated tests. Low coverage means changes are high-risk — you don\'t know what you\'ll break.', benchmark: 'Target: > 80% | Acceptable: 60-80% | Risky: < 60%' },
            { metric: 'Dead Code', description: 'Code that exists in the codebase but is never executed. Consumes cognitive load, increases build times, and creates false complexity.', benchmark: 'Target: 0% | Acceptable: < 2% | Excessive: > 5%' },
        ],
        exercise: 'Run a static analysis tool (SonarQube, CodeClimate, or ESLint) on your codebase. Document the top 10 code debt items by severity and estimate the hours required to fix each.',
    },
    {
        title: 'Lesson 2: Architecture Debt',
        content: 'Architecture debt occurs when the system structure no longer matches the business reality. It\'s harder to see than code debt but far more expensive to fix.',
        details: [
            { metric: 'Monolith Entanglement', description: 'When a "monolith" can\'t be modified in one area without affecting others. Every change requires full regression testing because boundaries are unclear.', benchmark: 'Measured by: blast radius of a typical change (files touched)' },
            { metric: 'Wrong Abstraction', description: 'The most expensive architecture debt: a shared component that serves two different use cases poorly. Fixing it means untangling every consumer.', benchmark: 'Signal: "we can\'t change X without breaking Y"' },
            { metric: 'Scaling Mismatch', description: 'Architecture designed for 1K users serving 100K users. The system "works" but response times degrade, costs spike, and outages increase.', benchmark: 'Target: architecture handles 10x current load | Warning: approaching capacity' },
        ],
        exercise: 'Draw your system\'s current architecture. Circle areas where a change in one component requires changes in 3+ other components. These are your architecture debt hotspots.',
    },
    {
        title: 'Lesson 3: Infrastructure Debt',
        content: 'Infrastructure debt hides in your cloud accounts, CI/CD pipelines, and operational tooling. It\'s often invisible until it causes an outage or a surprising cloud bill.',
        details: [
            { metric: 'Zombie Infrastructure', description: 'Resources running that serve no current purpose — old staging environments, unused databases, forgotten Lambda functions. They cost money 24/7.', benchmark: 'Average org: 15-30% of cloud spend is zombie infrastructure' },
            { metric: 'Manual Runbooks', description: 'Operational procedures that require human execution instead of automation. Each manual step is a failure point and a bottleneck.', benchmark: 'Target: > 90% automated | Warning: 50-90% | Critical: < 50%' },
            { metric: 'CI/CD Pipeline Debt', description: 'Build times over 30 minutes, flaky tests, manual deployment steps. Slow pipelines directly reduce deployment frequency (DORA metric).', benchmark: 'Target: < 15 min build | Warning: 15-45 min | Critical: > 45 min' },
        ],
        exercise: 'Audit your cloud account for zombie resources. List every resource and its last meaningful access date. Calculate the monthly cost of zombie infrastructure.',
    },
    {
        title: 'Lesson 4: The PDI Framework',
        content: 'The Product Debt Index (PDI) combines all four types of technical debt into a single economic score. It answers: "How much is our technical debt costing us in real dollars?"',
        details: [
            { metric: 'PDI Calculation', description: 'PDI = (Innovation Tax × Engineering Budget) + (Estimated Remediation Cost) + (Projected Velocity Loss). This produces a dollar amount of total debt exposure.', benchmark: 'Healthy: < 15% of annual engineering budget | Warning: 15-30% | Critical: > 30%' },
            { metric: 'Technical Insolvency Date', description: 'The quarter when maintenance costs consume 100% of engineering capacity. No new features can be built. Calculated from current debt trend.', benchmark: 'If TID is < 4 quarters away: immediate action required' },
            { metric: 'Debt Service Ratio', description: 'The percentage of each sprint spent on maintenance vs. new features. Like debt service on a loan — how much of your "income" goes to servicing existing debt.', benchmark: 'Healthy: < 30% | Strained: 30-50% | Critical: > 50%' },
        ],
        exercise: 'Use the free PDI calculator at /tools/pdi to generate your organization\'s Product Debt Index. Share the results with your engineering leadership.',
    },
];

export default function Module12Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link>
                        <span>/</span>
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link>
                        <span>/</span>
                        <span className="text-cyan-400 font-bold">Module 1.2</span>
                    </div>

                    <div className="mb-10">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">
                            Module 1.2:{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Technical Debt Classification</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">Master the four pillars of technical debt: Code, Architecture, Infrastructure, and Dependencies. Learn to classify, quantify, and prioritize debt remediation using the PDI framework.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">4 Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~60 min</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">Intermediate</span>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to identify and measure code-level debt (duplication, complexity, coverage)</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to detect architecture debt before it becomes architecture insolvency</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to audit infrastructure for zombie resources and pipeline debt</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to use the PDI framework to calculate total debt in dollars</li>
                        </ul>
                    </div>

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
                                    <div className="space-y-3 mb-6">
                                        {lesson.details.map((d, j) => (
                                            <div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5">
                                                <div className="text-sm font-bold text-white mb-1">{d.metric}</div>
                                                <p className="text-xs text-zinc-500 mb-2">{d.description}</p>
                                                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div>
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

                    <div className="mt-12 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">📊 Module Assessment</h2>
                        <p className="text-zinc-400 mb-6">Complete to demonstrate mastery of Module 1.2:</p>
                        <div className="space-y-3">
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Run static analysis and document top 10 code debt items</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Map architecture debt hotspots (blast radius analysis)</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Audit cloud account for zombie infrastructure and calculate cost</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Calculate PDI and Technical Insolvency Date using the free tool</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <Link href="/curriculum/tracks/engineering-economics/1-1" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 1.1</Link>
                        <Link href="/curriculum/tracks/engineering-economics/1-3" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 1.3 →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

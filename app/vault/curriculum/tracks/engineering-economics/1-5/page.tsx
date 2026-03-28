import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1.5: Build vs Buy Economics | Curriculum | Richard Ewing',
    description: 'Master Build vs Buy decision frameworks with TCO analysis, hidden cost calculation, vendor risk assessment, and integration debt quantification.',
    keywords: ['build vs buy', 'total cost of ownership', 'vendor evaluation', 'make or buy decision', 'integration debt'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-5' },
};

const lessons = [
    {
        title: 'Lesson 1: The True Cost of Building',
        content: 'Engineers consistently underestimate the cost of building because they measure development time, not Total Cost of Ownership (TCO). Building includes ongoing maintenance, infrastructure, on-call, documentation, and hiring to support the system.',
        details: [
            { metric: 'Development Cost', description: 'The visible part: engineer-hours × burdened cost rate. A 3-month project with 2 engineers at $150K/yr burdened = ~$75K in development cost.', benchmark: 'This is typically only 20-30% of 5-year TCO' },
            { metric: 'Maintenance Cost', description: 'Bug fixes, security patches, dependency updates, performance tuning. Rule of thumb: annual maintenance = 15-20% of initial development cost. Over 5 years: equals or exceeds the build cost.', benchmark: '5-year maintenance: 75-100% of initial build cost' },
            { metric: 'Opportunity Cost', description: 'The features you DIDN\'T build because your team was building infrastructure. If those features would have generated $500K in revenue, that\'s the real cost.', benchmark: 'Opportunity cost is usually the largest and most ignored cost' },
            { metric: 'Hiring & Knowledge Debt', description: 'Custom systems create knowledge silos. When the original developer leaves, replacement cost is 3-6 months of reduced velocity while the new person ramps up.', benchmark: 'Risk: "bus factor of 1" systems are a ticking time bomb' },
        ],
        exercise: 'Pick one internal tool your team built. Calculate 5-year TCO: initial development + annual maintenance × 5 + opportunity cost of the time.',
    },
    {
        title: 'Lesson 2: The True Cost of Buying',
        content: 'Buying seems simple ("just pay the vendor"), but hidden costs include integration, customization, data migration, training, and the ongoing risk of vendor dependency.',
        details: [
            { metric: 'License Cost', description: 'The sticker price. Enterprise SaaS: $50K-$500K/year. But this is usually less than half of the true cost of buying.', benchmark: 'Always ask: what\'s the 3-year contract price vs. monthly?' },
            { metric: 'Integration Debt', description: 'Every external tool needs integration: API connections, data transformations, error handling, monitoring. Each integration is a maintenance surface area you now own.', benchmark: 'Average integration cost: 2-4x the annual license fee in year 1' },
            { metric: 'Vendor Lock-In Risk', description: 'Once your data and workflows are in a vendor\'s system, switching costs are enormous. The vendor knows this — expect above-inflation price increases at renewal.', benchmark: 'Average SaaS price increase at renewal: 5-15%. Some vendors: 30%+' },
            { metric: 'Customization Gravity', description: 'You start with "out of the box." Within 12 months, you\'ve built custom integrations, workflows, and workarounds. These customizations become unmaintainable as the vendor releases new versions.', benchmark: 'If custom development > 40% of vendor functionality, reconsider building' },
        ],
        exercise: 'For a tool you currently buy, calculate true TCO: license + integration cost + team time managing it + switching cost if you left.',
    },
    {
        title: 'Lesson 3: The Decision Framework',
        content: 'The build-vs-buy decision should be made on a simple principle: build what differentiates you, buy what commoditizes you. Your competitive advantage should never depend on a vendor.',
        details: [
            { metric: 'Differentiation Test', description: 'Does this capability differentiate you from competitors? If yes: build. If no: buy. Example: a unique recommendation engine = build. A CRM = buy.', benchmark: 'If competitors can buy the same tool and achieve the same result: buy.' },
            { metric: 'Time-to-Value Analysis', description: 'Buying gives you 80% of functionality in weeks. Building gives you 100% of functionality in months. Is the extra 20% worth the months of delay?', benchmark: 'Rule: if buying gets you to revenue 6+ months faster, buy.' },
            { metric: 'Team Capability Assessment', description: 'Do you have the team to build AND maintain this system long-term? Building authentication is easy. Maintaining it through OWASP trends, compliance changes, and scaling is a different story.', benchmark: 'Ask: can we hire and retain the talent this system will need in years 3-5?' },
        ],
        exercise: 'Create a Build vs Buy decision matrix for 5 components in your stack. Score each on: differentiation (1-5), time-to-value (1-5), maintenance burden (1-5), and team capability (1-5).',
    },
];

export default function Module15Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link><span>/</span>
                        <span className="text-cyan-400 font-bold">Module 1.5</span>
                    </div>
                    <div className="mb-10">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 1.5: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Build vs Buy Economics</span></h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">The most expensive engineering decision you make repeatedly. Master Total Cost of Ownership, integration debt, vendor lock-in analysis, and the differentiation test.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">3 Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">Intermediate-Advanced</span>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to calculate 5-year TCO for build decisions (development + maintenance + opportunity cost)</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to evaluate true buy costs (license + integration + lock-in + customization)</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> The Differentiation Test for build-vs-buy decisions</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to create a Build vs Buy decision matrix</li>
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
                    <div className="mt-12 flex items-center justify-between">
                        <Link href="/curriculum/tracks/engineering-economics/1-4" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 1.4</Link>
                        <Link href="/curriculum/tracks/engineering-economics/1-6" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 1.6 →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

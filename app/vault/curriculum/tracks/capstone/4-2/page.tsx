import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 4.2: Enterprise Platform Economics | Curriculum | Richard Ewing',
    description: 'Master enterprise platform economics: platform vs product thinking, developer experience ROI, internal platform teams, and platform tax calculation.',
    keywords: ['platform economics', 'internal developer platform', 'platform engineering', 'developer experience ROI', 'platform tax'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/capstone/4-2' },
};

const lessons = [
    { title: 'Lesson 1: Platform vs. Product Thinking', content: 'A platform multiplies the productivity of every team that builds on it. Platform investment compounds; product investment is linear. Understanding when to invest in platform is the highest-leverage decision in engineering.', details: [
        { metric: 'Platform Tax', description: 'The overhead each product team pays to deal with platform deficiencies: manual deployments, inconsistent tooling, missing abstractions. This is the equivalent of Innovation Tax at the infrastructure level.', benchmark: 'Measured as: hours per team per sprint lost to platform friction × number of teams × burdened rate' },
        { metric: 'Platform ROI Formula', description: 'Platform investment = (time saved per team per sprint × number of teams × burdened rate × sprints per year) - platform team cost. ROI compounds as teams grow.', benchmark: 'Break-even: when platform saves > 2 hours per team per sprint across 5+ teams.' },
        { metric: 'When to Invest', description: 'Too early (< 3 teams): overhead exceeds benefit. Sweet spot (5-15 teams): maximum leverage. Too late (> 20 teams): debt is entrenched and expensive.', benchmark: 'Typical platform team: 3-5 engineers serving 5-15 product teams' },
    ], exercise: 'Calculate your organization\'s Platform Tax: hours lost per team per sprint to platform friction × teams × burdened rate. Is a platform team justified?' },
    { title: 'Lesson 2: Developer Experience as Investment', content: 'Developer experience (DX) directly impacts velocity, retention, and quality. Every minute a developer waits for a build, fights with tooling, or navigates unclear docs is money burned.', details: [
        { metric: 'Build Time Impact', description: 'A 10-minute build wastes 40-60 minutes per developer per day (context switching included). For a 50-person eng org: 40+ hours/day wasted. At $100/hr: $4K/day burned on build time alone.', benchmark: 'Elite: < 2 min builds. Average: 5-10 min. Poor: > 15 min. Every minute matters.' },
        { metric: 'Onboarding Time', description: 'How long until a new hire ships their first PR? This is a proxy for DX quality. Good DX: day 1-2. Poor DX: week 3-4.', benchmark: 'Each extra week of onboarding costs $3K-5K in lost productivity per new hire.' },
        { metric: 'Retention Impact', description: 'Developers leave companies with bad tooling. 68% of developers cite DX as a factor in job satisfaction. Replacing an engineer costs $50K-150K.', benchmark: 'DX investment reduces attrition by 10-20%= saving $500K+/year for a 50-person team.' },
    ], exercise: 'Measure your DX: build time, onboarding time-to-first-PR, and developer satisfaction survey (1-10). Calculate the cost of each minute of build time across your team.' },
    { title: 'Lesson 3: Platform Team Economics', content: 'Platform teams are cost centers that create value through leverage. Measuring this value is critical — otherwise platform investment gets cut during budget pressure.', details: [
        { metric: 'Toil Reduction', description: 'Track: hours of manual toil eliminated per sprint. Multiply by the rate of the people no longer doing toil. This is the platform team\'s primary value metric.', benchmark: 'Target: platform team eliminates 3-5x its own capacity in toil across the organization.' },
        { metric: 'Incident Reduction', description: 'Platform improvements (better CI/CD, infrastructure-as-code, automated testing) reduce incidents. Track: incident count and MTTR before and after platform changes.', benchmark: 'Platform teams typically reduce incident frequency 30-50% within the first year.' },
        { metric: 'Feature Velocity Multiplier', description: 'Measure: features shipped per team per quarter before and after platform investment. The multiplier effect shows the platform\'s leverage on the entire organization.', benchmark: 'Well-run platform: 1.5-2x velocity multiplier across all teams within 6 months.' },
    ], exercise: 'If you have a platform team: calculate total toil eliminated, incident reduction, and velocity improvement. If you don\'t: estimate potential savings from a 3-person platform team.' },
];

export default function Module42Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Capstone & Applied Practice</Link><span>/</span>
                <span className="text-amber-400 font-bold">Module 4.2</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">Track 4 — Capstone & Applied Practice</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 4.2: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Enterprise Platform Economics</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Platform Tax, developer experience ROI, platform team economics, and measuring the multiplier effect of internal platforms.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~55 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/capstone/4-1" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 4.1</Link>
                <Link href="/curriculum/tracks/capstone/4-3" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 4.3 →</Link>
            </div>
        </div></div></main>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1-8: Engineering Hiring Economics | Curriculum | Richard Ewing',
    description: 'True cost of hiring, mis-hire impact, retention ROI, and workforce planning models.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-8' },
};

const lessons = [
    { title: "Lesson 1: True Cost of a Hire", content: "The sticker price of an engineer is 40-60% of the true cost. Burdened costs include recruiting, onboarding, ramp time, management overhead, and tools.", details: [
            { metric: "Recruiting Costs", description: "Agency: 20-25% of first-year salary. Internal: $15K-$30K per hire (recruiter time, tools, interview hours). Time-to-fill: 45-90 days average.", benchmark: "Target: < $25K all-in cost per hire. Track cost-per-hire quarterly." },
            { metric: "Ramp Time Cost", description: "New engineers operate at 25% capacity months 1-2, 50% month 3, 75% month 4+. Full productivity: 6-9 months. Productivity gap cost: $30K-$60K.", benchmark: "Reduce ramp with: documentation, mentors, golden paths, onboarding checklists" },
        ], exercise: "Calculate your true cost-per-hire: recruiting + signing bonus + equipment + ramp time productivity loss + manager time investment." },
    { title: "Lesson 2: The Cost of Mis-Hires", content: "A mis-hire costs 2-3x annual salary. The damage: team morale, code quality regression, delayed projects, and the cascading cost of re-hiring.", details: [
            { metric: "Mis-Hire Impact", description: "Direct: salary + severance. Indirect: 3-6 months of reduced team velocity, code rework, knowledge gaps, team morale impact.", benchmark: "Average mis-hire cost: $400K-$600K for a senior engineer role" },
            { metric: "Retention Economics", description: "Replacing an engineer costs 1.5-2x their salary. A $200K engineer leaving = $300K-$400K in total impact. Every 1% improvement in retention saves more than most raises.", benchmark: "Target: < 10% voluntary attrition. Industry average: 13-15%." },
        ], exercise: "Calculate your annualized cost of engineer turnover: (departures × replacement cost) + (vacancies × lost productivity). What retention investment would break even?" },
];

export default function Module18Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link><span>/</span>
                <span className="text-cyan-400 font-bold">Module 1-8</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 1-8: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Engineering Hiring Economics</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">True cost of hiring, mis-hire impact, retention ROI, and workforce planning models.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">2 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to calculate true cost-per-hire including hidden costs</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> Quantifying the $400K+ impact of mis-hires</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> Retention economics and the ROI of reducing attrition</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/engineering-economics/1-7" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 1-7</Link>
                <Link href="/curriculum/tracks/engineering-economics/1-9" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 1-9 →</Link>
            </div>
        </div></div></main>
    );
}

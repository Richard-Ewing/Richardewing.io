import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1-15: Engineering Economics Synthesis | Curriculum | Richard Ewing',
    description: 'Pulling it all together: building the complete engineering economic model for your organization.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-15' },
};

const lessons = [
    { title: "Lesson 1: The Complete Economic Model", content: "This module synthesizes all 14 previous modules into a single engineering economic model. The model connects inputs (investment) to outputs (revenue, velocity, quality).", details: [
            { metric: "Input-Output Model", description: "Inputs: engineering budget, headcount, tools, infrastructure. Process: team design, methodology, technical health. Outputs: features shipped, revenue impact, quality metrics.", benchmark: "Track monthly. Present quarterly. The trend matters more than the snapshot." },
            { metric: "Economic Dashboard", description: "One dashboard showing: APER, PDI, Innovation Tax, DORA metrics, budget vs actual, headcount plan vs actual. This is your engineering economic control panel.", benchmark: "Every engineering leader should have this dashboard. Update monthly minimum." },
        ], exercise: "Build your engineering economic dashboard using all the metrics from this track. Create a quarterly presentation template. Present to your leadership team." },
];

export default function Module115Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link><span>/</span>
                <span className="text-cyan-400 font-bold">Module 1-15</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 1-15: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Engineering Economics Synthesis</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Pulling it all together: building the complete engineering economic model for your organization.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">1 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to build a complete engineering economic model</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> Creating an engineering economics dashboard</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> Quarterly presentation framework for engineering investment</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/engineering-economics/1-14" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 1-14</Link>
                <Link href="/curriculum/tracks" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Back to All Tracks</Link>
            </div>
        </div></div></main>
    );
}

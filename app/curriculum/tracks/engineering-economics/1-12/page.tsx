import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1-12: Engineering Benchmarking | Curriculum | Richard Ewing',
    description: 'Industry benchmarks for R&D spend, engineer-to-revenue ratios, and performance metrics by company stage.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-12' },
};

const lessons = [
    { title: "Lesson 1: R&D Spend Benchmarks", content: "How much should you spend on engineering? Industry benchmarks provide context, but stage and growth rate matter more than absolute numbers.", details: [
            { metric: "R&D as % of Revenue", description: "Pre-revenue: 60-80%. Early-stage SaaS: 25-40%. Growth SaaS: 18-25%. Mature SaaS: 12-18%. Enterprise: 10-15%.", benchmark: "Above benchmark: growth investment. Below benchmark: under-investing." },
            { metric: "Engineer-to-Revenue Benchmarks", description: "Revenue per engineer by stage: Seed ($0-100K), Series A ($200-400K), Series B ($400-700K), Series C+ ($700K-1.2M), Public ($1M+).", benchmark: "Track trajectory, not snapshot. Improving APER = efficiency gains working." },
        ], exercise: "Benchmark your organization: R&D % of revenue, APER, DORA metrics. Compare against stage-appropriate benchmarks. Identify gaps." },
];

export default function Module112Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link><span>/</span>
                <span className="text-cyan-400 font-bold">Module 1-12</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 1-12: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Engineering Benchmarking</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Industry benchmarks for R&D spend, engineer-to-revenue ratios, and performance metrics by company stage.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">1 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> Industry benchmarks for R&D spending by company stage</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to benchmark engineer-to-revenue ratios</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> Using benchmarks to identify over-investment and under-investment</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/engineering-economics/1-11" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 1-11</Link>
                <Link href="/curriculum/tracks/engineering-economics/1-13" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 1-13 →</Link>
            </div>
        </div></div></main>
    );
}

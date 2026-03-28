import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 3-8: Testing & Quality Economics | Curriculum | Richard Ewing',
    description: 'ROI of test automation, quality gate economics, and the cost of bugs by stage.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/rd-capital-management/3-8' },
};

const lessons = [
    { title: "Lesson 1: Bug Cost by Stage", content: "A bug found in production costs 100x more than one found during design. Quality investment follows a clear economic model: invest early, save exponentially.", details: [{ metric: "Cost Multiplier", description: "Design: $1. Development: $10. Testing: $100. Production: $1,000-$10,000. The later bugs are found, the more expensive they are to fix.", benchmark: "Shift-left testing: every dollar invested in early testing saves $10-100 downstream." }], exercise: "Track your bug discovery rate by stage (design, dev, QA, production). Calculate the cost savings if you shifted 20% of production bugs to the testing phase." },
];

export default function Module38Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">R&D Capital Management</Link><span>/</span>
                <span className="text-emerald-400 font-bold">Module 3-8</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-3">Track 3 — R&D Capital Management</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 3-8: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Testing & Quality Economics</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">ROI of test automation, quality gate economics, and the cost of bugs by stage.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">1 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> The 100x cost multiplier for production vs design-stage bugs</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> ROI calculation for test automation investment</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Quality gate economics and optimal testing investment levels</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/rd-capital-management/3-7" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 3-7</Link>
                <Link href="/curriculum/tracks/rd-capital-management/3-9" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 3-9 →</Link>
            </div>
        </div></div></main>
    );
}

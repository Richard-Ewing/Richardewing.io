import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 4-13: Presentation & Storytelling | Curriculum | Richard Ewing',
    description: 'Crafting compelling engineering narratives: data visualization, executive communication, and board presentation skills.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/capstone/4-13' },
};

const lessons = [
    { title: "Lesson 1: The Engineering Story Arc", content: "Data without narrative is noise. Great engineering presentations follow a story arc: situation (current state), complication (the problem), resolution (the recommendation, with data).", details: [{ metric: "SCR Framework", description: "Situation: \"Our engineering team of 80 supports $40M ARR.\" Complication: \"But Innovation Tax is 55% — $5.5M/yr on maintenance.\" Resolution: \"Invest $1M in remediation → save $3M/yr by Q4.\"", benchmark: "Always end with: specific investment ask, expected ROI, and timeline." }], exercise: "Rewrite your most recent engineering presentation using the SCR framework. Test it with a non-technical colleague — can they follow the story?" },
];

export default function Module413Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Capstone & Applied Practice</Link><span>/</span>
                <span className="text-amber-400 font-bold">Module 4-13</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">Track 4 — Capstone & Applied Practice</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 4-13: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Presentation & Storytelling</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Crafting compelling engineering narratives: data visualization, executive communication, and board presentation skills.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">1 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> SCR framework for engineering presentations</li>
                            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Data visualization best practices for engineering metrics</li>
                            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Board-level communication techniques for technical leaders</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/capstone/4-12" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 4-12</Link>
                <Link href="/curriculum/tracks/capstone/4-14" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 4-14 →</Link>
            </div>
        </div></div></main>
    );
}

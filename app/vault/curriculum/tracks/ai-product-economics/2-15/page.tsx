import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 2-15: AI Economics Synthesis | Curriculum | Richard Ewing',
    description: 'Building the complete AI product economics model: connecting COGS, pricing, team costs, and portfolio analysis.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-15' },
};

const lessons = [
    { title: "Lesson 1: The Complete AI Economic Model", content: "This module connects everything from Track 2 into a unified AI economics framework. Input costs, operational costs, revenue models, and profitability analysis in one model.", details: [{ metric: "AI Economics Dashboard", description: "Track per-feature: AI COGS (inference + infrastructure), revenue contribution, margin %, utilization rate, cost trend. Roll up to portfolio view.", benchmark: "Monthly review. Flag any feature with declining margin or increasing COGS." }], exercise: "Build your AI economics dashboard. Include every AI feature with its cost, revenue, and margin. Present the portfolio analysis to leadership." },
];

export default function Module215Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">AI Product Economics</Link><span>/</span>
                <span className="text-violet-400 font-bold">Module 2-15</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Track 2 — AI Product Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 2-15: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">AI Economics Synthesis</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Building the complete AI product economics model: connecting COGS, pricing, team costs, and portfolio analysis.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">1 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> How to build a unified AI product economics model</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> AI feature portfolio analysis and optimization</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> Presenting AI economics to board and investors</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-violet-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/ai-product-economics/2-14" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 2-14</Link>
                <Link href="/curriculum/tracks" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Back to All Tracks</Link>
            </div>
        </div></div></main>
    );
}

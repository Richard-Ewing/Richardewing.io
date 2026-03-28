import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 4-9: Case Study: AI Startup | Curriculum | Richard Ewing',
    description: 'Applied audit of a pre-revenue AI startup: burn rate optimization, model economics, and commercialization pathway.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/capstone/4-9' },
};

const lessons = [
    { title: "Lesson 1: AI Startup Audit", content: "Pre-revenue AI startups face unique challenges: high inference costs, model development uncertainty, and the revenue-before-runway-runs-out pressure.", details: [{ metric: "Scenario", description: "AI startup: $5M seed funding, 18-month runway, 15 engineers, GPT-4 API costs $40K/month, 0 revenue. Building B2B document analysis tool.", benchmark: "Critical: find break-even model costs before Series A or run out of money." }], exercise: "Redesign the AI cost structure: model selection, inference optimization, and pricing strategy to achieve unit economics profitability within 6 months." },
];

export default function Module49Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Capstone & Applied Practice</Link><span>/</span>
                <span className="text-amber-400 font-bold">Module 4-9</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">Track 4 — Capstone & Applied Practice</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 4-9: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Case Study: AI Startup</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Applied audit of a pre-revenue AI startup: burn rate optimization, model economics, and commercialization pathway.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">1 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Burn rate optimization for AI-first startups</li>
                            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Model cost reduction strategies for pre-revenue companies</li>
                            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Commercialization pathway design with AI unit economics</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/capstone/4-8" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 4-8</Link>
                <Link href="/curriculum/tracks/capstone/4-10" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 4-10 →</Link>
            </div>
        </div></div></main>
    );
}

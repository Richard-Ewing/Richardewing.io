import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 4-12: Tools Deep Dive | Curriculum | Richard Ewing',
    description: 'Advanced usage of all curriculum tools: PDI Calculator, APER, AUEB, EV-SE, and Audit Interview for professional audits.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/capstone/4-12' },
};

const lessons = [
    { title: "Lesson 1: Professional Tool Workflow", content: "Professional auditors use all 5 tools in a specific sequence: APER first (benchmark), PDI second (health assessment), AUEB third (AI economics), EV-SE fourth (value), Audit Interview fifth (qualitative).", details: [{ metric: "Tool Sequence", description: "Step 1: APER → establishes baseline efficiency. Step 2: PDI → identifies debt hotspots. Step 3: AUEB → AI cost analysis (if applicable). Step 4: EV-SE → valuation impact. Step 5: Audit Interview → qualitative validation.", benchmark: "Total assessment time: 4-8 hours for a thorough analysis using all tools." }], exercise: "Run the complete 5-tool assessment on your organization. Document outputs and cross-reference findings between tools." },
];

export default function Module412Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Capstone & Applied Practice</Link><span>/</span>
                <span className="text-amber-400 font-bold">Module 4-12</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">Track 4 — Capstone & Applied Practice</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 4-12: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Tools Deep Dive</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Advanced usage of all curriculum tools: PDI Calculator, APER, AUEB, EV-SE, and Audit Interview for professional audits.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">1 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Professional tool workflow sequence for comprehensive audits</li>
                            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Cross-referencing tool outputs for validated findings</li>
                            <li className="flex items-start gap-2"><span className="text-amber-400 mt-1">✓</span> Time budgeting for thorough vs rapid assessments</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/capstone/4-11" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 4-11</Link>
                <Link href="/curriculum/tracks/capstone/4-13" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 4-13 →</Link>
            </div>
        </div></div></main>
    );
}

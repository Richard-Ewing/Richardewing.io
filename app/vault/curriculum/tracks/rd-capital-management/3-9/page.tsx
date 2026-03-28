import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 3-9: Dependency & Vendor Risk | Curriculum | Richard Ewing',
    description: 'Third-party dependency auditing, vendor concentration risk, and license compliance economics.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/rd-capital-management/3-9' },
};

const lessons = [
    { title: "Lesson 1: Dependency Audit Economics", content: "Modern apps have 500-2000+ transitive dependencies. Each is a risk surface: security vulnerability, license change, maintainer abandonment, or breaking API change.", details: [{ metric: "Dependency Risk Score", description: "Score each dependency: maintenance activity (commits/quarter), vulnerability history, license type, bus factor. Weight by criticality to your app.", benchmark: "High risk: unmaintained + critical dependency. Update or replace immediately." }], exercise: "Run a dependency audit. Identify your top 10 most critical dependencies. Score each on maintenance activity, vulnerability history, and replaceability." },
];

export default function Module39Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">R&D Capital Management</Link><span>/</span>
                <span className="text-emerald-400 font-bold">Module 3-9</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-3">Track 3 — R&D Capital Management</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 3-9: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Dependency & Vendor Risk</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Third-party dependency auditing, vendor concentration risk, and license compliance economics.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">1 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Systematic dependency risk scoring methodology</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> Vendor concentration risk and mitigation strategies</li>
                            <li className="flex items-start gap-2"><span className="text-emerald-400 mt-1">✓</span> License compliance cost modeling</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/rd-capital-management/3-8" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 3-8</Link>
                <Link href="/curriculum/tracks/rd-capital-management/3-10" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 3-10 →</Link>
            </div>
        </div></div></main>
    );
}

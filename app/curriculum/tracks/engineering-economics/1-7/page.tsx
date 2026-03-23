import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1-7: Platform Engineering Economics | Curriculum | Richard Ewing',
    description: 'Build vs buy for internal platforms, developer experience ROI, and platform team sizing.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-7' },
};

const lessons = [
    { title: "Lesson 1: Internal Developer Platforms", content: "Platform engineering is the practice of building self-service capabilities for development teams. The economics: invest upfront to reduce per-team infrastructure costs.", details: [
            { metric: "Platform ROI", description: "A well-built IDP saves 15-30 minutes per developer per day. With 100 engineers at $150K/yr: savings = $750K-$1.5M/yr.", benchmark: "Break-even: 6-12 months for a 3-person platform team" },
            { metric: "Golden Path Economics", description: "Standardized templates reduce new project setup from 2 weeks to 2 hours. Each new project saves $15K-$25K in setup costs.", benchmark: "Track: projects started per quarter × time saved per project" },
        ], exercise: "Calculate the ROI of a platform team: (developer hours saved × hourly rate) vs. (platform team cost). What is your break-even timeline?" },
    { title: "Lesson 2: Developer Experience Metrics", content: "Developer experience (DevEx) directly impacts velocity, retention, and quality. Measure it with SPACE framework metrics.", details: [
            { metric: "SPACE Framework", description: "Satisfaction, Performance, Activity, Communication, Efficiency. Survey-based + system-based measurement for holistic DevEx assessment.", benchmark: "Quarterly DevEx surveys with > 80% response rate = actionable data" },
            { metric: "Cognitive Load Index", description: "How much mental effort does routine work require? High cognitive load = slow onboarding, more errors, faster burnout.", benchmark: "Target: new engineer productive in < 2 weeks. Warning: > 1 month." },
        ], exercise: "Run a 10-question DevEx survey (SPACE framework). Identify the top 3 friction points. Estimate the cost of each friction point per engineer per year." },
];

export default function Module17Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link><span>/</span>
                <span className="text-cyan-400 font-bold">Module 1-7</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 1-7: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Platform Engineering Economics</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Build vs buy for internal platforms, developer experience ROI, and platform team sizing.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">2 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to calculate ROI of internal developer platforms</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> SPACE framework for measuring developer experience</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> Cognitive load impact on engineering velocity</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/engineering-economics/1-6" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 1-6</Link>
                <Link href="/curriculum/tracks/engineering-economics/1-8" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 1-8 →</Link>
            </div>
        </div></div></main>
    );
}

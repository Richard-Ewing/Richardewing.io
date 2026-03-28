import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 2-9: AI Feature Profitability | Curriculum | Richard Ewing',
    description: 'P&L analysis for individual AI features: revenue attribution, cost allocation, and feature-level ROI.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-9' },
};

const lessons = [
    { title: "Lesson 1: Feature-Level P&L", content: "Every AI feature should have its own P&L statement: revenue it drives (direct or attributed), costs (inference, infrastructure, engineering), and resulting margin.", details: [{ metric: "Revenue Attribution", description: "Direct revenue: users pay for the AI feature. Indirect: AI feature improves retention (reduces churn worth $X/user). Measure both; attribute proportionally.", benchmark: "A/B test: cohort with AI feature vs without. Measure: conversion, retention, expansion revenue." }], exercise: "Build a P&L for your top AI feature: revenue (direct + attributed), costs (inference + infrastructure + engineering support), profit margin." },
];

export default function Module29Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">AI Product Economics</Link><span>/</span>
                <span className="text-violet-400 font-bold">Module 2-9</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Track 2 — AI Product Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 2-9: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">AI Feature Profitability</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">P&L analysis for individual AI features: revenue attribution, cost allocation, and feature-level ROI.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">1 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> Building P&L statements for individual AI features</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> Revenue attribution methods for AI-enhanced products</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> Identifying unprofitable AI features that should be sunset</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-violet-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/ai-product-economics/2-8" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 2-8</Link>
                <Link href="/curriculum/tracks/ai-product-economics/2-10" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 2-10 →</Link>
            </div>
        </div></div></main>
    );
}

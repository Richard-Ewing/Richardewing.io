import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 2-7: AI Build vs Buy Decisions | Curriculum | Richard Ewing',
    description: 'When to build custom models vs use APIs, self-host vs cloud inference, open-source vs proprietary model economics.',
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-7' },
};

const lessons = [
    { title: "Lesson 1: API vs Custom Model Economics", content: "Using OpenAI API vs training your own: API cost scales linearly, custom model has high fixed cost but lower marginal cost. The crossover depends on volume.", details: [{ metric: "Crossover Analysis", description: "API: $0.01-0.10 per query. Custom model: $50K-500K setup, $0.001-0.01 per query. Crossover at 500K-5M queries/month.", benchmark: "Below crossover: API wins. Above crossover: custom model 3-5x cheaper." }], exercise: "Calculate your AI query volume. Estimate costs for API vs custom model over 12 months. Where is your crossover point?" },
    { title: "Lesson 2: Open Source vs Proprietary", content: "Open source models (Llama, Mistral) eliminate licensing costs but add hosting, fine-tuning, and maintenance. Proprietary APIs (OpenAI, Anthropic) are turnkey but create vendor dependency.", details: [{ metric: "TCO Comparison", description: "Proprietary: $0.01-0.06/1K tokens, zero infrastructure. Open source: $0.001-0.005/1K tokens, $5K-50K/month infrastructure for GPU hosting.", benchmark: "Factor in: engineering time for hosting, monitoring, updates, and model upgrades." }], exercise: "Cost out your current AI stack. Model a switch to open source (include GPU costs, engineering time, and transitioning risk)." },
];

export default function Module27Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">AI Product Economics</Link><span>/</span>
                <span className="text-violet-400 font-bold">Module 2-7</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Track 2 — AI Product Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 2-7: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">AI Build vs Buy Decisions</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">When to build custom models vs use APIs, self-host vs cloud inference, open-source vs proprietary model economics.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">2 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                </div>
            </div>
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> When to use AI APIs vs custom models based on volume economics</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> Open source vs proprietary model TCO analysis</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> The hidden costs of self-hosting AI models</li>
                </ul>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-violet-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/ai-product-economics/2-6" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 2-6</Link>
                <Link href="/curriculum/tracks/ai-product-economics/2-8" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 2-8 →</Link>
            </div>
        </div></div></main>
    );
}

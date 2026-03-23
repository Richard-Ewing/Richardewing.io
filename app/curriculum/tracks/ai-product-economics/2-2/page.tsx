import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 2.2: Model Selection & Optimization | Curriculum | Richard Ewing',
    description: 'Master AI model selection economics: frontier vs mid-tier vs open-source, fine-tuning ROI, model routing, distillation, and right-sizing models for tasks.',
    keywords: ['AI model selection', 'model optimization', 'fine-tuning ROI', 'model distillation', 'AI cost optimization'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-2' },
};

const lessons = [
    {
        title: 'Lesson 1: The Model Tier Spectrum',
        content: 'Not every AI task needs a frontier model. Understanding model tiers — and matching task complexity to model capability — is the single largest cost optimization lever.',
        details: [
            { metric: 'Frontier Models', description: 'GPT-4o, Claude 3.5 Opus, Gemini Ultra. Best reasoning, highest cost. Use for: complex analysis, multi-step reasoning, creative generation.', benchmark: 'Cost: $5-30/1M tokens. Use for < 10% of queries.' },
            { metric: 'Mid-Tier Models', description: 'GPT-4o-mini, Claude Haiku, Gemini Flash. 85-90% of frontier quality at 10-20x lower cost. Use for: most production features.', benchmark: 'Cost: $0.15-1/1M tokens. Should handle 70-80% of queries.' },
            { metric: 'Open-Source Models', description: 'Llama 3, Mistral, Phi-3. Self-hosted, zero per-token cost (but infrastructure cost). Use for: high-volume, latency-sensitive, or privacy-critical tasks.', benchmark: 'Cost: $0.01-0.10/1M tokens (infrastructure). 10-20% of queries.' },
            { metric: 'Specialized Models', description: 'Fine-tuned models for specific domains. Better quality AND lower cost for narrow tasks. A fine-tuned Llama can outperform GPT-4 on your specific use case.', benchmark: 'ROI: fine-tuning cost $5K-$50K. Break-even if saving > $2K/month in inference.' },
        ],
        exercise: 'Categorize your AI queries into complexity tiers (simple/medium/complex). What percentage could be handled by a mid-tier model instead of a frontier model?',
    },
    {
        title: 'Lesson 2: Model Routing Architecture',
        content: 'Model routing directs each query to the cheapest model capable of handling it. A router that sends 70% of queries to a fast/cheap model saves 80%+ on inference costs.',
        details: [
            { metric: 'Complexity Classification', description: 'Use a lightweight classifier (or simple heuristics like query length, keyword detection) to estimate query complexity. Route simple queries to cheap models, complex to expensive.', benchmark: 'A $0.001 routing decision can save $0.05-0.10 per query' },
            { metric: 'Cascading Strategy', description: 'Try the cheapest model first. If confidence is below threshold, escalate to the next tier. Most queries resolve at the cheapest tier.', benchmark: 'Cascading reduces average cost 60-80% vs. always using the best model' },
            { metric: 'Quality Monitoring', description: 'Track accuracy/satisfaction by model tier. If the cheap model produces unacceptable results for certain query types, adjust routing rules.', benchmark: 'Target: < 5% escalation rate for well-classified query types' },
        ],
        exercise: 'Design a model routing strategy for your AI feature. Define 3 tiers, set routing rules, and estimate the cost savings vs. your current approach.',
    },
    {
        title: 'Lesson 3: Fine-Tuning Economics',
        content: 'Fine-tuning creates a specialized model that outperforms general models on your specific task, often at lower inference cost. But the ROI depends on volume.',
        details: [
            { metric: 'Training Cost', description: 'Fine-tuning cost = training data preparation ($5K-$20K) + compute ($1K-$10K per training run) + iteration (3-5 runs typically). Total: $10K-$50K.', benchmark: 'Break-even: if fine-tuned model saves > $2K/month in inference, ROI in 6-12 months' },
            { metric: 'Quality Improvement', description: 'Fine-tuned models can be 20-40% more accurate on domain-specific tasks. This reduces retry rates (fewer wasted tokens) and improves user satisfaction.', benchmark: 'Measure: accuracy lift × retry rate reduction × cost savings' },
            { metric: 'Distillation', description: 'Train a small model on the outputs of a large model. The small model learns to mimic the large model at 10-100x lower inference cost. GPT-4 quality from a GPT-3.5-sized model.', benchmark: 'Distillation works best when: narrow domain, consistent output format, high volume' },
        ],
        exercise: 'Calculate fine-tuning ROI: (current monthly inference cost) - (projected fine-tuned model cost) = monthly savings. (Fine-tuning investment) / (monthly savings) = payback months.',
    },
];

export default function Module22Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">AI Product Economics</Link><span>/</span>
                        <span className="text-violet-400 font-bold">Module 2.2</span>
                    </div>
                    <div className="mb-10">
                        <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Track 2 — AI Product Economics</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 2.2: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Model Selection & Optimization</span></h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">The model tier spectrum, routing architectures, fine-tuning ROI, and distillation. Match model capability to task complexity to reduce costs 60-80%.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">3 Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">Intermediate-Advanced</span>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> The four model tiers and when to use each (frontier, mid-tier, open-source, specialized)</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> How to architect model routing for 60-80% cost reduction</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> How to calculate fine-tuning ROI and distillation break-even</li>
                        </ul>
                    </div>
                    <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-violet-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
                    <div className="mt-12 flex items-center justify-between">
                        <Link href="/curriculum/tracks/ai-product-economics/2-1" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 2.1</Link>
                        <Link href="/curriculum/tracks/ai-product-economics/2-3" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 2.3 →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

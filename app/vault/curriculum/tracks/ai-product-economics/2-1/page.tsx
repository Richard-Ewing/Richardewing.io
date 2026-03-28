import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 2.1: AI COGS Analysis | Curriculum | Richard Ewing',
    description: 'Master AI Cost of Goods Sold analysis: inference costs, token economics, API pricing models. Learn to build AI features that protect margins.',
    keywords: ['AI COGS', 'AI cost analysis', 'inference costs', 'token economics', 'AI pricing', 'AI unit economics course'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-1' },
};

const lessons = [
    {
        title: 'Lesson 1: The AI COGS Equation',
        content: 'Unlike traditional software where COGS is near-zero after development, AI features have per-request costs that scale linearly with usage. This fundamentally changes the margin equation.',
        details: [
            { metric: 'Traditional SaaS COGS', description: 'Hosting + bandwidth + support = 15-25% of revenue. Marginal cost of serving one more user is nearly zero.', benchmark: 'Traditional SaaS gross margin: 75-85%' },
            { metric: 'AI-Enhanced SaaS COGS', description: 'Traditional COGS + inference costs + embedding storage + model fine-tuning + guardrail processing. Each user interaction has a real cost.', benchmark: 'AI SaaS gross margin: varies 40-75% depending on AI intensity' },
            { metric: 'The Margin Collapse Risk', description: 'If AI feature cost per user > revenue per user, you lose money on every interaction. More users = more losses. This is AI margin collapse.', benchmark: 'Critical if AI COGS > 30% of feature revenue' },
        ],
        exercise: 'Calculate your AI feature\'s COGS: (tokens consumed × cost per token) + (embedding storage) + (guardrail processing). Express as cost per user per month.',
    },
    {
        title: 'Lesson 2: Token Economics Deep Dive',
        content: 'Tokens are the fundamental unit of AI cost. Understanding token economics — input vs. output, model selection, caching — determines whether your AI feature is profitable.',
        details: [
            { metric: 'Input vs. Output Tokens', description: 'Output tokens cost 2-4x more than input tokens. A chatbot that generates long responses costs dramatically more than one that gives concise answers.', benchmark: 'GPT-4o: $2.50/1M input, $10/1M output (4x ratio)' },
            { metric: 'Model Selection Impact', description: 'Choosing GPT-4o vs. GPT-4o-mini can reduce costs 15-20x. Most features don\'t need frontier models. Matching model capability to task complexity is the #1 cost lever.', benchmark: 'Test: can a smaller model handle 80%+ of your queries adequately?' },
            { metric: 'Prompt Engineering as Cost Control', description: 'Shorter, more precise prompts = fewer tokens = lower cost. System prompts repeated on every request are the biggest hidden cost multiplier.', benchmark: 'Target: system prompt < 500 tokens. Each 100 tokens × 1M requests = real money.' },
            { metric: 'Caching Strategies', description: 'Semantic caching (storing responses for similar queries) can reduce inference calls 30-70%. The cache hit rate directly reduces your AI COGS.', benchmark: 'Target cache hit rate: > 40% for FAQ-style queries, > 20% for general.' },
        ],
        exercise: 'Use the AUEB calculator at /tools/aueb to model your AI feature\'s token economics at current volume, 10x volume, and 100x volume. At what scale does margin collapse occur?',
    },
    {
        title: 'Lesson 3: API Pricing Architecture',
        content: 'How you price AI features determines whether they\'re profit centers or cost centers. The pricing model must account for the variable cost nature of AI.',
        details: [
            { metric: 'Usage-Based Pricing', description: 'Charge per API call, per query, or per action. Aligns costs with revenue. Risk: usage spikes can overwhelm infrastructure.', benchmark: 'Best for: developer tools, APIs, B2B platforms' },
            { metric: 'Tiered Pricing', description: 'Free tier (limited queries) → Pro tier (more queries + features) → Enterprise (unlimited + SLAs). The free tier is your PLG acquisition engine.', benchmark: 'Critical: free tier cost must be < CAC of alternative acquisition channels' },
            { metric: 'Seat-Based with AI Budget', description: 'Per-seat pricing plus an AI "credits" budget per seat. When credits run out, user upgrades. Combines predictability with usage correlation.', benchmark: 'Most common for AI-enhanced SaaS products in 2025-2026' },
        ],
        exercise: 'Design a pricing model for an AI feature with: 1) known cost per query, 2) variable usage patterns, 3) a free tier for PLG. Calculate break-even at each tier.',
    },
];

export default function Module21Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link>
                        <span>/</span>
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">AI Product Economics</Link>
                        <span>/</span>
                        <span className="text-violet-400 font-bold">Module 2.1</span>
                    </div>

                    <div className="mb-10">
                        <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Track 2 — AI Product Economics</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">
                            Module 2.1:{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">AI COGS Analysis</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">Master the economics of AI features: inference costs, token economics, and pricing architecture. Build AI features that protect — not destroy — your gross margins.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">3 Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~50 min</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">Intermediate-Advanced</span>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> How AI COGS differs from traditional SaaS COGS</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> How to analyze token economics (input/output, model selection, caching)</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> How to design pricing models that account for AI variable costs</li>
                            <li className="flex items-start gap-2"><span className="text-violet-400 mt-1">✓</span> How to project AI margin at 10x and 100x scale</li>
                        </ul>
                    </div>

                    <div className="space-y-12">
                        {lessons.map((lesson, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                                            <span className="text-xs font-bold text-white">{i + 1}</span>
                                        </div>
                                        <h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2>
                                    </div>
                                    <p className="text-zinc-400 mb-6">{lesson.content}</p>
                                    <div className="space-y-3 mb-6">
                                        {lesson.details.map((d, j) => (
                                            <div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5">
                                                <div className="text-sm font-bold text-white mb-1">{d.metric}</div>
                                                <p className="text-xs text-zinc-500 mb-2">{d.description}</p>
                                                <div className="text-[10px] font-mono text-violet-500 uppercase tracking-widest">{d.benchmark}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5">
                                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div>
                                        <p className="text-sm text-zinc-300">{lesson.exercise}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">📊 Module Assessment</h2>
                        <p className="text-zinc-400 mb-6">Complete to demonstrate mastery of Module 2.1:</p>
                        <div className="space-y-3">
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Calculate AI COGS for your product&#39;s AI features</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Run AUEB analysis at current, 10x, and 100x volume</span>
                            </label>
                            <label className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-violet-500 w-4 h-4" />
                                <span className="text-zinc-300 text-sm group-hover:text-white">Design a tiered pricing model accounting for AI variable costs</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <Link href="/curriculum/tracks" className="text-sm text-zinc-500 hover:text-white transition-colors">← Back to Tracks</Link>
                        <Link href="/curriculum/tracks/ai-product-economics/2-2" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 2.2 →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

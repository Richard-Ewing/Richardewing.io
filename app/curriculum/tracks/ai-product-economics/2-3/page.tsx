import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 2.3: AI Feature Profitability | Curriculum | Richard Ewing',
    description: 'Calculate AI feature profitability per user, per interaction. Master AI unit economics, contribution margin analysis, and feature-level P&L.',
    keywords: ['AI feature profitability', 'AI unit economics', 'contribution margin', 'AI product P&L', 'feature economics'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-3' },
};

const lessons = [
    { title: 'Lesson 1: Feature-Level P&L', content: 'Every AI feature should have its own mini profit-and-loss statement. Revenue attribution, direct costs (inference, storage), and indirect costs (engineering maintenance, monitoring).', details: [
        { metric: 'Revenue Attribution', description: 'What revenue does this feature generate? For premium features: subscription uplift. For core features: what % of users cite this feature as reason to subscribe?', benchmark: 'Method: A/B test pricing with/without feature. Or survey: "would you downgrade without X?"' },
        { metric: 'Direct AI Costs', description: 'Inference (tokens × price), embedding storage, vector database queries, guardrail processing, caching infrastructure. These are per-interaction variable costs.', benchmark: 'Track at the feature level, not aggregated across all AI features' },
        { metric: 'Contribution Margin', description: 'Revenue attributed to feature - Direct AI costs = Contribution margin. If negative, the feature loses money on every interaction.', benchmark: 'Target: > 50% contribution margin. Below 30%: unsustainable at scale.' },
    ], exercise: 'Build a feature-level P&L for your primary AI feature. Include revenue attribution, direct inference costs, and calculate contribution margin.' },
    { title: 'Lesson 2: Per-User AI Economics', content: 'Not all users consume AI resources equally. Power users may consume 10-50x the inference budget of casual users. Understanding per-user economics prevents margin surprises.', details: [
        { metric: 'Usage Distribution', description: 'AI usage follows a power law: 10% of users generate 60-80% of inference costs. These "heavy AI users" are either your best customers (worth the cost) or your margin destroyers.', benchmark: 'Segment users into cost quartiles. Calculate profitability per quartile.' },
        { metric: 'Heavy User Strategy', description: 'Three options: 1) Rate limiting (frustrates users), 2) Usage-based pricing (charges heavy users), 3) Tiered features (premium AI for premium tiers).', benchmark: 'Best practice: tiered features with AI credits per tier' },
        { metric: 'Marginal Cost per User', description: 'The cost of serving one additional user. For traditional SaaS: near zero. For AI SaaS: could be significant ($5-50/user/month for AI-heavy features).', benchmark: 'If marginal AI cost > customer monthly revenue: margin-negative customer' },
    ], exercise: 'Export your AI usage logs. Segment users into quartiles by token consumption. Calculate per-user AI cost for each quartile. Are your heaviest users profitable?' },
    { title: 'Lesson 3: AI Feature ROI Framework', content: 'Before building any AI feature, model its economics. The AUEB framework provides a standardized way to evaluate AI feature ROI before writing a single line of code.', details: [
        { metric: 'Pre-Build Economics', description: 'Estimate: tokens per interaction, interactions per user per month, users expected, cost per token. This gives you total monthly AI cost before you build.', benchmark: 'If projected AI cost > projected revenue uplift: don\'t build it.' },
        { metric: 'The "10x Rule"', description: 'An AI feature must deliver 10x the value of its cost to justify its existence. If AI costs $1/user/month, users must value the feature at $10+/month.', benchmark: 'Validate with willingness-to-pay surveys before building' },
        { metric: 'Compounding Cost Risk', description: 'AI features that users love get used more → more inference cost → lower margins. Success can destroy profitability if pricing doesn\'t scale with usage.', benchmark: 'Model economics at current usage AND at 10x usage. If margins collapse at 10x: redesign.' },
    ], exercise: 'Use the AUEB calculator at /tools/aueb to model a NEW AI feature before building it. Calculate break-even user count and margin at scale.' },
];

export default function Module23Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">AI Product Economics</Link><span>/</span>
                <span className="text-violet-400 font-bold">Module 2.3</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Track 2 — AI Product Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 2.3: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">AI Feature Profitability</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Feature-level P&L, per-user AI economics, and the 10x Rule. Ensure every AI feature is profitable before you build it and stays profitable as it scales.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~50 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-violet-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/ai-product-economics/2-2" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 2.2</Link>
                <Link href="/curriculum/tracks/ai-product-economics/2-4" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 2.4 →</Link>
            </div>
        </div></div></main>
    );
}

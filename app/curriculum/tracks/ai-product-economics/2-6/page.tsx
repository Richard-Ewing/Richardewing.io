import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 2.6: AI Product Pricing Strategy | Curriculum | Richard Ewing',
    description: 'Master AI product pricing: value-based pricing, AI credit systems, usage-based models, competitive positioning, and pricing experiments.',
    keywords: ['AI pricing strategy', 'AI product pricing', 'value-based pricing', 'AI credits', 'SaaS pricing AI'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-6' },
};

const lessons = [
    { title: 'Lesson 1: Value-Based AI Pricing', content: 'AI features solve problems worth 10-100x their cost. Value-based pricing captures a fraction of the value delivered, not a markup on cost. This is the foundation of profitable AI products.', details: [
        { metric: 'Value Quantification', description: 'What would it cost the customer to solve this problem without your AI? A research task that takes an analyst 4 hours ($200) vs. your AI doing it in 30 seconds ($0.05). The value = $200.', benchmark: 'Price at 10-30% of value delivered. $200 value → $20-60 price.' },
        { metric: 'Willingness-to-Pay (WTP)', description: 'Survey customers: "At what price would this feature be a no-brainer? At what price would you hesitate?" The Van Westendorp method maps the acceptable price range.', benchmark: 'Always test WTP before setting prices. Gut-feel pricing leaves money on the table.' },
        { metric: 'Price Anchoring', description: 'Position AI feature price against the alternative (hiring a person, manual process cost). "Save $200/hr with AI for $20/month" is compelling.', benchmark: 'The anchor should be 5-10x the price to make the AI solution feel like a bargain' },
    ], exercise: 'For your AI feature: calculate the value it delivers (customer\'s alternative cost), survey 10 customers on willingness-to-pay, and design a pricing page with value anchoring.' },
    { title: 'Lesson 2: AI Credit Systems', content: 'AI credits let you abstract away per-query pricing complexity. Customers buy credit bundles; each AI action consumes credits. This provides pricing flexibility while managing AI cost exposure.', details: [
        { metric: 'Credit Design', description: 'Define credit consumption per action type. Simple query: 1 credit. Complex analysis: 5 credits. Document generation: 10 credits. Adjust ratios to match actual inference costs.', benchmark: 'Credit price should include 60-70% margin above AI cost per credit' },
        { metric: 'Tier Allocation', description: 'Free tier: 50 credits/month (acquisition cost). Pro: 500 credits/month ($29). Enterprise: 5,000 credits/month ($199). Overage: $0.10/credit.', benchmark: 'Free tier cost must be < CAC of alternative acquisition channels' },
        { metric: 'Credit Velocity Tracking', description: 'Monitor how fast users consume credits. If free users exhaust credits in week 1, they\'ll upgrade or churn. Optimize allocation to maximize conversion timing.', benchmark: 'Optimal: free users hit limit in week 2-3 (enough value, but want more)' },
    ], exercise: 'Design an AI credit system for your product. Define credit costs for each action type, set tier allocations, and calculate margins at each tier.' },
    { title: 'Lesson 3: Pricing Experiments', content: 'Price is the highest-leverage variable in business. A 10% price increase drops straight to profit. But wrong pricing destroys growth. Always test before permanent changes.', details: [
        { metric: 'A/B Price Testing', description: 'Show different prices to different cohorts and measure conversion, retention, and LTV. Requires careful cohort selection and statistical significance.', benchmark: 'Minimum: 1,000 visitors per variant for statistical significance' },
        { metric: 'Grandfathering Strategy', description: 'When raising prices, grandfather existing customers at old prices for 6-12 months. This preserves NRR while new customers validate the higher price point.', benchmark: 'Communicate early: "prices increase on [date] for new customers, you\'re locked in"' },
        { metric: 'Competitive Price Monitoring', description: 'Track competitor pricing monthly. If competitors are 3-5x cheaper, you need to justify the premium with clear differentiation. If they\'re similar, compete on value delivery.', benchmark: 'Create a competitive pricing matrix. Update quarterly.' },
    ], exercise: 'Design a pricing experiment: hypothesis (e.g., "20% price increase won\'t affect conversion"), test design (A/B with N users), success criteria, and rollback plan.' },
];

export default function Module26Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">AI Product Economics</Link><span>/</span>
                <span className="text-violet-400 font-bold">Module 2.6</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Track 2 — AI Product Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 2.6: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">AI Product Pricing Strategy</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Value-based pricing, AI credit systems, pricing experiments, and competitive positioning. Price is the highest-leverage variable in your business.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced</span>
                </div>
            </div>
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8 text-center mb-12">
                <h2 className="text-lg font-grotesk font-bold text-white mb-2">🎓 Track 2 Capstone</h2>
                <p className="text-zinc-300 text-sm">This is the final module of Track 2. After completing all 6 modules, you can conduct end-to-end AI product economics analysis.</p>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-violet-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/ai-product-economics/2-5" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 2.5</Link>
                <Link href="/curriculum/tracks" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Back to All Tracks</Link>
            </div>
        </div></div></main>
    );
}

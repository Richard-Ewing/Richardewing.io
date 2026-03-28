import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 4.5: SaaS Metrics Deep Dive | Curriculum | Richard Ewing',
    description: 'Master SaaS metrics for engineering leaders: unit economics, CAC:LTV ratio, net revenue retention, Rule of 40, and how engineering drives each metric.',
    keywords: ['SaaS metrics', 'unit economics', 'CAC LTV ratio', 'net revenue retention', 'Rule of 40', 'SaaS engineering'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/capstone/4-5' },
};

const lessons = [
    { title: 'Lesson 1: Engineering\'s Impact on SaaS Metrics', content: 'Engineering isn\'t just a cost center — it\'s the primary lever for every major SaaS metric. Faster feature delivery improves retention. Better infrastructure reduces churn. Engineering velocity directly correlates with revenue growth.', details: [
        { metric: 'Net Revenue Retention (NRR)', description: 'Revenue from existing customers year-over-year, including expansion and contraction. Engineering drives NRR through: feature quality, reliability, and innovation speed.', benchmark: 'Elite SaaS: 130%+ NRR. Good: 110-130%. Concerning: below 100% (shrinking).' },
        { metric: 'CAC:LTV Ratio', description: 'Customer Acquisition Cost vs. Lifetime Value. Engineering reduces CAC through: better product-led growth, self-serve features, and reduced support burden.', benchmark: 'Healthy: 1:3 or better. Below 1:1: losing money on every customer acquired.' },
        { metric: 'Time-to-Value', description: 'How quickly a new customer gets value from the product. Engineering drives this through: onboarding flows, documentation, and API quality. Faster TTV = lower churn.', benchmark: 'Target: value delivered within first session. Every extra day increases churn risk 5-10%.' },
    ], exercise: 'Map your engineering initiatives to SaaS metrics: which current projects directly impact NRR, CAC, or TTV? Which projects have no clear metric connection? Are the right projects getting priority?' },
    { title: 'Lesson 2: Unit Economics for Engineers', content: 'Unit economics tells you whether each additional customer is profitable. For AI-powered SaaS, this is especially critical: variable costs (inference, storage, support) can make growth unprofitable.', details: [
        { metric: 'Gross Margin per Customer', description: 'Monthly revenue from customer minus variable costs (hosting, AI inference, support, third-party APIs). Traditional SaaS: 75-85%. AI SaaS: 50-70%.', benchmark: 'If gross margin < 50%: growth makes you less profitable, not more. Fix unit economics first.' },
        { metric: 'Marginal Serving Cost', description: 'The cost of adding one more customer. For traditional SaaS: near zero. For AI SaaS: can be significant ($5-50/user/month in inference costs).', benchmark: 'Calculate: if you add 1,000 customers tomorrow, what\'s the incremental monthly cost?' },
        { metric: 'Break-Even Timeline', description: 'Months to recoup customer acquisition cost from gross margin. Below 18 months: healthy. Above 24 months: cash-intensive growth.', benchmark: 'Engineering can accelerate break-even by: reducing serving costs, improving activation rates, and reducing support burden.' },
    ], exercise: 'Calculate unit economics for your top 3 customer segments: revenue per user, variable cost per user, gross margin, and break-even months. Which segments are most profitable for engineering investment?' },
    { title: 'Lesson 3: The Rule of 40 Engineering Lens', content: 'The Rule of 40 says that growth rate + profit margin should exceed 40%. Engineering directly influences both sides: faster delivery drives growth; efficiency drives margins.', details: [
        { metric: 'Growth Contribution', description: 'Engineering drives growth through: new features (acquisition), reliability (retention), performance (expansion). Track: which engineering investments directly increased ARR growth rate?', benchmark: 'Map: engineering sprint allocation to growth-driving vs. margin-improving activities.' },
        { metric: 'Margin Contribution', description: 'Engineering improves margins through: infrastructure optimization, automation, technical debt reduction, and AI cost optimization. Each 1% margin improvement drops straight to the bottom line.', benchmark: 'Target: engineering should deliver 2-3% margin improvement per year through efficiency.' },
        { metric: 'The Engineering Efficiency Score', description: 'ARR per engineer. Benchmarks vary by stage: early ($200K-400K), growth ($500K-800K), mature ($800K-1.5M). This is the ultimate measure of engineering leverage.', benchmark: 'Track quarterly. Declining EES means engineering is becoming less efficient (or scaling too fast).' },
    ], exercise: 'Calculate your company\'s Rule of 40 score. Then break down engineering\'s contribution to each side (growth rate and profit margin). Where should engineering focus to improve the score?' },
];

export default function Module45Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Capstone & Applied Practice</Link><span>/</span>
                <span className="text-amber-400 font-bold">Module 4.5</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">Track 4 — Capstone & Applied Practice</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 4.5: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">SaaS Metrics Deep Dive</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">NRR, CAC:LTV, unit economics, Rule of 40, and Engineering Efficiency Score. Every SaaS metric through the engineering lens.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~55 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/capstone/4-4" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 4.4</Link>
                <Link href="/curriculum/tracks/capstone/4-6" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 4.6 →</Link>
            </div>
        </div></div></main>
    );
}

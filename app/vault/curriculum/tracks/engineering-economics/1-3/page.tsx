import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1.3: Cost of Delay & Prioritization | Curriculum | Richard Ewing',
    description: 'Master Cost of Delay (CoD), WSJF, and economic prioritization frameworks to make better engineering investment decisions backed by dollar-amounts.',
    keywords: ['cost of delay', 'WSJF', 'engineering prioritization', 'product economics', 'engineering investment decisions'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-3' },
};

const lessons = [
    {
        title: 'Lesson 1: What Is Cost of Delay?',
        content: 'Cost of Delay (CoD) is the economic impact of not delivering a feature, fix, or initiative on time. It transforms prioritization from subjective opinion ("my feature is more important") to objective economics ("this feature costs us $50K/week in lost revenue").',
        details: [
            { metric: 'Revenue CoD', description: 'A feature that would generate $200K/quarter in new revenue has a CoD of ~$15K/week. Every week of delay is $15K in unrealized revenue.', benchmark: 'Calculate: (Annual revenue opportunity / 52 weeks) = Weekly CoD' },
            { metric: 'Risk CoD', description: 'A security vulnerability with 20% chance of a $500K breach has an expected CoD of $100K (20% × $500K). The longer it stays unpatched, the higher the cumulative risk.', benchmark: 'Expected CoD = Probability × Impact × Time exposed' },
            { metric: 'Compliance CoD', description: 'Missing a compliance deadline (SOC 2, GDPR) can mean losing enterprise deals, contract penalties, or regulatory fines.', benchmark: 'Example: SOC 2 non-compliance = can\'t close enterprise deal worth $500K ARR' },
            { metric: 'Efficiency CoD', description: 'A developer productivity improvement saving each engineer 2 hours/week across 50 engineers = 100 hours/week. At $75/hr burdened rate, that\'s $7,500/week in CoD.', benchmark: 'Calculate: (Hours saved × team size × burdened cost rate) = Weekly CoD' },
        ],
        exercise: 'Pick your top 5 backlog items. Calculate the Cost of Delay for each using the categories above. Which one has the highest weekly CoD?',
    },
    {
        title: 'Lesson 2: WSJF — Weighted Shortest Job First',
        content: 'WSJF is an economic prioritization framework: divide Cost of Delay by job duration to find the items that deliver the most economic value per unit of time invested.',
        details: [
            { metric: 'WSJF Formula', description: 'WSJF = Cost of Delay / Job Duration. Higher WSJF = do first. A $10K/week CoD item taking 1 week (WSJF: 10) beats a $50K/week CoD item taking 10 weeks (WSJF: 5).', benchmark: 'Always compare WSJF scores, not raw CoD values' },
            { metric: 'Job Duration Estimation', description: 'Use T-shirt sizes (S=1wk, M=2wk, L=4wk, XL=8wk) for quick estimates. Precision doesn\'t matter — relative ordering does.', benchmark: 'If two items have similar WSJF ±20%, other factors can break the tie' },
            { metric: 'The Urgency Profile', description: 'Not all CoD is constant. Some items have linear CoD (steady loss over time). Others have step-function CoD (zero until a deadline, then catastrophic).', benchmark: 'Step-function CoD items (compliance, contract deadlines) need special treatment' },
        ],
        exercise: 'Apply WSJF to your top 10 backlog items. Estimate job duration for each. Calculate WSJF and re-rank your backlog. How does the order change from your current prioritization?',
    },
    {
        title: 'Lesson 3: Technical Debt Prioritization',
        content: 'Not all technical debt should be paid off. Some debt is cheap to carry. The PDI framework helps you identify which debt to remediate first based on economic impact, not technical severity.',
        details: [
            { metric: 'Economic Severity vs. Technical Severity', description: 'A "critical" code smell with no user impact has low economic severity. A "minor" API design issue blocking 3 teams has enormous economic severity. Always prioritize by economics.', benchmark: 'Map: debt item → affected teams × frequency of impact × cost per occurrence' },
            { metric: 'The Debt Interest Rate', description: 'Like financial debt, technical debt accrues interest. An API with no documentation costs 15 minutes per developer per interaction. At 20 interactions/week across 5 developers: 25 hours/week.', benchmark: 'High-interest debt (affecting many people frequently) = remediate first' },
            { metric: 'Quick-Win Identification', description: 'Items with high WSJF and low effort — "pay off the credit card, not the mortgage." A 4-hour fix that saves 2 hours/week across 10 engineers has massive ROI.', benchmark: 'Target: items with ROI (annualized savings / cost to fix) > 5x' },
        ],
        exercise: 'List your top 10 technical debt items. For each, calculate the "interest rate" (ongoing cost per week). Sort by interest rate. The top 3 are your priority remediation targets.',
    },
    {
        title: 'Lesson 4: Presenting Prioritization to Leadership',
        content: 'Executives don\'t want to hear about story points or WSJF scores. They want to know: "How much money are we leaving on the table, and what does it cost to pick it up?"',
        details: [
            { metric: 'The Revenue Opportunity Frame', description: '"We have 5 features with combined CoD of $75K/week. With current velocity we\'ll deliver them over 12 weeks. If we reduce tech debt first (2 weeks), velocity increases 30%, and we deliver all 5 in 8 weeks total — saving $225K."', benchmark: 'Always show the alternative timeline and its economic impact' },
            { metric: 'The Risk Reduction Frame', description: '"Our current security debt exposes us to $2M in aggregate risk. A 4-week remediation sprint reduces this to $300K. The $150K investment in remediation buys a $1.7M risk reduction."', benchmark: 'Use expected value calculations for risk items' },
            { metric: 'The Competitive Frame', description: '"Our deployment frequency is 15x slower than the industry median. This means competitors iterate 15x faster. In a market moving at AI speed, this is an existential risk."', benchmark: 'Link engineering metrics to market positioning and competitive advantage' },
        ],
        exercise: 'Create a one-page "Engineering Investment Proposal" using CoD and WSJF for your next quarter\'s priorities. Frame every item in dollar terms with clear ROI.',
    },
];

export default function Module13Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link><span>/</span>
                        <span className="text-cyan-400 font-bold">Module 1.3</span>
                    </div>
                    <div className="mb-10">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 1.3: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Cost of Delay & Prioritization</span></h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">Turn backlog prioritization from opinion-based to economics-based. Master Cost of Delay, WSJF, and debt interest rate calculations.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">4 Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~55 min</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">Intermediate</span>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to calculate Cost of Delay for four categories (revenue, risk, compliance, efficiency)</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to apply WSJF to rank engineering investments by economic return</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to calculate technical debt &quot;interest rates&quot; for prioritization</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to present engineering priorities to executives in financial language</li>
                        </ul>
                    </div>
                    <div className="space-y-12">
                        {lessons.map((lesson, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div>
                                        <h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2>
                                    </div>
                                    <p className="text-zinc-400 mb-6">{lesson.content}</p>
                                    <div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div>
                                    <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex items-center justify-between">
                        <Link href="/curriculum/tracks/engineering-economics/1-2" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 1.2</Link>
                        <Link href="/curriculum/tracks/engineering-economics/1-4" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 1.4 →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

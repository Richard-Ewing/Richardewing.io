import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 4.1: Startup Engineering Economics | Curriculum | Richard Ewing',
    description: 'Engineering economics for startups: runway-aware engineering, MVP economics, technical co-founder decisions, and burn rate optimization.',
    keywords: ['startup engineering economics', 'MVP economics', 'startup technical debt', 'burn rate optimization', 'startup CTO'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/capstone/4-1' },
};

const lessons = [
    { title: 'Lesson 1: Runway-Aware Engineering', content: 'Startups operate under a countdown timer: runway. Every engineering decision must be evaluated against "will this extend our runway or shorten it?" Building the wrong thing at the right quality, or the right thing at the wrong quality, both burn cash.', details: [
        { metric: 'Burn Rate per Engineer', description: 'Fully-loaded cost including salary, benefits, tools, and infrastructure. For a seed-stage startup: $15K-25K/month per engineer.', benchmark: 'A 5-person eng team burns $75K-125K/month. 12 months runway = $900K-1.5M minimum.' },
        { metric: 'Velocity-to-Revenue Ratio', description: 'How much engineering velocity translates to actual revenue growth? If 100% of velocity goes to features but revenue is flat: wrong features, wrong market, or wrong pricing.', benchmark: 'Healthy: each sprint delivers measurable movement toward revenue milestones.' },
        { metric: 'Technical Debt at Seed Stage', description: 'At seed stage, some technical debt is GOOD. Shipping fast and learning beats building perfectly. The question: "Will this debt block us before Series A?"', benchmark: 'Acceptable: debt that can be remediated in 2-3 sprints. Dangerous: architectural debt requiring rewrites.' },
    ], exercise: 'Calculate your engineering burn rate per month. Map each current initiative to a revenue milestone. For each: does the expected revenue impact justify the engineering cost?' },
    { title: 'Lesson 2: MVP Economics', content: 'The MVP isn\'t about building the minimum product — it\'s about finding the minimum engineering investment that validates a revenue hypothesis. Every feature in V1 not tied to a testable hypothesis is waste.', details: [
        { metric: 'Feature-Hypothesis Mapping', description: 'For each planned feature: "We believe that [feature] will cause [user behavior] which will result in [metric change]." No hypothesis = no justification for building.', benchmark: 'V1 should have 3-5 hypothesis-backed features, not 20 nice-to-haves.' },
        { metric: 'Time-to-Validation', description: 'How quickly can you put this feature in front of users and measure the hypothesis? 2-week cycles are ideal. 3-month cycles burn too much cash before learning.', benchmark: 'Target: every feature validated within 2-4 weeks of engineering start.' },
        { metric: 'Cost per Experiment', description: 'Engineering cost of building + deploying + measuring one feature hypothesis. Lower cost = more experiments per runway dollar = faster learning.', benchmark: 'Elite startups: $5K-15K per experiment. Over-built: $50K+ per experiment.' },
    ], exercise: 'For your current MVP plan: list every feature. For each, write the hypothesis it tests. Remove features without clear hypotheses. Calculate cost savings.' },
    { title: 'Lesson 3: Pre-Series A Positioning', content: 'Series A investors evaluate technology as an asset. Your engineering metrics, architecture decisions, and technical debt profile directly impact your valuation multiple.', details: [
        { metric: 'Investor Tech Due Diligence', description: 'Series A due diligence includes: architecture review, code quality assessment, team capability evaluation, and scalability analysis. Poor results = lower valuation or killed deals.', benchmark: 'Prepare: clean architecture docs, test coverage > 70%, CI/CD pipeline, no critical security issues.' },
        { metric: 'Scalability Story', description: 'VCs need to believe your architecture can handle 10-100x growth. If your MVP architecture cannot scale without a rewrite: red flag.', benchmark: 'Show: current load, architectural ceiling, and the plan to scale beyond it.' },
        { metric: 'Team Leverage', description: 'Revenue per engineer ($500K+ is strong at Series A), deployment frequency, and DORA metrics signal to investors that the team is high-performing.', benchmark: 'Series A benchmark: 4-6 engineers generating $2M-3M ARR = strong signal.' },
    ], exercise: 'Create a "Tech Due Diligence Prep Pack" for your startup: architecture overview, key metrics dashboard, scalability plan, and team capability matrix.' },
];

export default function Module41Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Capstone & Applied Practice</Link><span>/</span>
                <span className="text-amber-400 font-bold">Module 4.1</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">Track 4 — Capstone & Applied Practice</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 4.1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Startup Engineering Economics</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Runway-aware engineering, MVP economics, cost-per-experiment, and positioning your technology for Series A due diligence.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~50 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">Intermediate</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks" className="text-sm text-zinc-500 hover:text-white transition-colors">← All Tracks</Link>
                <Link href="/curriculum/tracks/capstone/4-2" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 4.2 →</Link>
            </div>
        </div></div></main>
    );
}

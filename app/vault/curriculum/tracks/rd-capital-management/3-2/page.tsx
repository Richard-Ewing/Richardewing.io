import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 3.2: PE Due Diligence for Technology | Curriculum | Richard Ewing',
    description: 'Master technology due diligence for PE acquisitions: engineering health assessment, technical debt valuation, team retention risk, and technology risk scoring.',
    keywords: ['PE due diligence', 'technology due diligence', 'technical debt valuation', 'PE acquisition', 'engineering assessment'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/rd-capital-management/3-2' },
};

const lessons = [
    { title: 'Lesson 1: The PE Technology Lens', content: 'Private equity firms evaluate technology through a financial lens: what does the technology portfolio cost, what value does it generate, and what risks threaten value creation during the hold period?', details: [
        { metric: 'Technology as an Asset', description: 'PE firms model technology like any other asset: acquisition cost (build investment), depreciation (technical debt accumulation), maintenance cost (ongoing engineering), and replacement value.', benchmark: 'Technology asset assessment must cover: age, condition, capacity, and remaining useful life' },
        { metric: 'Hold Period Risk', description: 'A typical PE hold is 3-7 years. The technology must survive and improve during this period. If Technical Insolvency Date falls within the hold period: deal risk.', benchmark: 'Critical: TID within hold period requires remediation plan with capex estimates' },
        { metric: 'Multiple Impact', description: 'Technology quality directly impacts exit multiples. Clean technology with strong engineering metrics commands 1-3x higher revenue multiples.', benchmark: 'Well-maintained platform: 15-20x revenue. Legacy spaghetti: 8-12x revenue.' },
    ], exercise: 'For a hypothetical acquisition target: estimate technology age, calculate Innovation Tax, and project whether TID falls within a 5-year hold period.' },
    { title: 'Lesson 2: Engineering Team Assessment', content: 'The team IS the technology. PE due diligence must assess team capabilities, retention risks, and key-person dependencies. Losing critical people post-acquisition can destroy value.', details: [
        { metric: 'Key Person Risk', description: 'Identify people whose departure would significantly impact velocity or institutional knowledge. If > 3 key persons: acceptable. If 1-2: critical single points of failure.', benchmark: 'For each key person: document knowledge areas, bus factor, and retention package' },
        { metric: 'Team Tenure & Stability', description: 'Average tenure indicates stability. Industry average: 2.5 years. Below 1.5 years: high churn risk. Above 3 years: stable but watch for stagnation.', benchmark: 'Healthy: 2-4 year average tenure with a mix of newer and experienced engineers' },
        { metric: 'Hiring Velocity', description: 'How quickly can the company hire engineers? Time-to-fill for engineering roles indicates employer brand strength and market competitiveness.', benchmark: 'Elite: < 45 days. Average: 60-90 days. Struggling: > 90 days.' },
    ], exercise: 'Create a key person dependency map for your engineering org. For each key person: list critical knowledge areas, identify backup personnel, and estimate rehiring cost.' },
    { title: 'Lesson 3: Technical Debt as Deal Currency', content: 'In M&A, technical debt is a negotiation lever. Quantified debt reduces purchase price; a remediation plan with clear ROI can be funded from hold-period capex.', details: [
        { metric: 'Debt Valuation', description: 'Total technical debt cost = (estimated remediation effort × burdened engineer rate) + (velocity loss during remediation × opportunity cost). This is your "debt discount" on the purchase price.', benchmark: 'Example: $2M remediation cost + $1M velocity loss = $3M purchase price reduction argument' },
        { metric: 'The "First 100 Days" Plan', description: 'PE firms want a clear technology roadmap for the first 100 days post-acquisition. Critical fixes, team stabilization, quick wins. Demonstrates competence and reduces risk perception.', benchmark: 'Structure: Day 1-30 (assess), Day 31-60 (stabilize), Day 61-100 (quick wins)' },
        { metric: 'Value Creation Thesis', description: 'How will technology improvements drive enterprise value? Faster feature delivery → more revenue. Lower infrastructure costs → better margins. Better architecture → higher multiples.', benchmark: 'Quantify: every $1M invested in tech improvement → $X enterprise value increase' },
    ], exercise: 'Create a 100-day technology plan for a hypothetical PE acquisition: assessment (30d), stabilization (30d), and value creation quick wins (40d). Include budget estimates.' },
];

export default function Module32Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">R&D Capital Management</Link><span>/</span>
                <span className="text-emerald-400 font-bold">Module 3.2</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-3">Track 3 — R&D Capital Management</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 3.2: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">PE Due Diligence for Technology</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Technology assessment through the PE lens: engineering health, team retention, technical debt as deal currency, and the first 100-day post-acquisition plan.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">~65 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced / Executive</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/rd-capital-management/3-1" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 3.1</Link>
                <Link href="/curriculum/tracks/rd-capital-management/3-3" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 3.3 →</Link>
            </div>
        </div></div></main>
    );
}

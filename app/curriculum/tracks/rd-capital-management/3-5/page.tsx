import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 3.5: Vendor & Platform Risk Assessment | Curriculum | Richard Ewing',
    description: 'Master vendor risk assessment: concentration risk, vendor criticality scoring, platform dependency analysis, and disaster scenario planning.',
    keywords: ['vendor risk assessment', 'platform risk', 'vendor dependency', 'concentration risk', 'vendor management'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/rd-capital-management/3-5' },
};

const lessons = [
    { title: 'Lesson 1: Vendor Criticality Scoring', content: 'Not all vendors are equal risks. A logo design tool going down is an inconvenience. Your auth provider going down is a catastrophe. Categorize vendors by criticality to allocate risk management effort.', details: [
        { metric: 'Criticality Tiers', description: 'Tier 1: System operational dependency (cloud provider, database, auth). Tier 2: Revenue-impacting (payment processor, CRM, email). Tier 3: Productivity (project management, design tools).', benchmark: 'Tier 1: full redundancy plan. Tier 2: fallback procedure. Tier 3: accept risk.' },
        { metric: 'Blast Radius Analysis', description: 'If this vendor disappears tomorrow: how many users are affected, for how long, and what\'s the revenue impact? A vendor with 100% blast radius = existential risk.', benchmark: 'Map: vendor → affected systems → affected users → revenue at risk' },
        { metric: 'Financial Health Assessment', description: 'Is the vendor profitable? What\'s their runway? A startup vendor with 6 months of runway is a different risk than AWS.', benchmark: 'Check: Crunchbase funding, LinkedIn employee count trend, customer reviews for concerns' },
    ], exercise: 'List your top 20 vendors. Score each: criticality tier (1-3), blast radius (% users affected), and financial health (stable/uncertain/risky). Rank by composite risk.' },
    { title: 'Lesson 2: Concentration Risk', content: 'Concentration risk occurs when too much depends on a single vendor, platform, or provider. If 100% of your infrastructure is on one cloud, you have maximum concentration risk.', details: [
        { metric: 'Cloud Concentration', description: 'Running everything on AWS/GCP/Azure is simple but creates total dependency. A region outage took down multiple major sites in 2024 for hours. Multi-cloud adds complexity but reduces catastrophic risk.', benchmark: 'Strategy: primary cloud + DR in a different provider for critical services' },
        { metric: 'API Dependency Concentration', description: 'Building core features on third-party APIs (OpenAI, Stripe, Twilio). If the API changes pricing 5x or discontinues your use case, your feature breaks.', benchmark: 'For each critical API: document the abstraction layer and switching cost' },
        { metric: 'Talent Concentration', description: 'All infrastructure knowledge in one person (or one vendor\'s consulting team). If they leave, operations become fragile.', benchmark: 'Minimum 2 people trained on every critical system. Document all runbooks.' },
    ], exercise: 'Create a concentration risk map: for each critical system, identify the single point of failure (vendor, person, or region). Design a mitigation plan for the top 3 risks.' },
    { title: 'Lesson 3: Exit Strategy Planning', content: 'Every vendor relationship should have an exit plan. If the vendor becomes too expensive, gets acquired, or sunset their product — how long until you\'re on an alternative?', details: [
        { metric: 'Switching Cost Estimation', description: 'Direct costs (new license, migration engineering) + indirect costs (productivity loss during transition, retraining, data migration risk). Usually 2-5x the annual vendor spend.', benchmark: 'If switching cost > 3x annual spend: high lock-in. Negotiate multi-year pricing accordingly.' },
        { metric: 'Abstraction Layer Investment', description: 'Building abstraction layers between your code and vendor APIs reduces switching costs from months to weeks. The cost of the abstraction is insurance against lock-in.', benchmark: 'Target: every Tier 1 vendor dependency should have an abstraction layer' },
        { metric: 'Data Portability', description: 'Can you export your data in a standard format? How large is the data? What\'s the migration timeline? Vendors that make data export hard are using lock-in as a retention strategy.', benchmark: 'Test: actually try to export your data. The export that "works" on paper may not work in practice.' },
    ], exercise: 'For your top 3 most critical vendors: estimate switching cost, check data export capability, and write a 1-page exit plan with timeline and budget.' },
];

export default function Module35Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">R&D Capital Management</Link><span>/</span>
                <span className="text-emerald-400 font-bold">Module 3.5</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-3">Track 3 — R&D Capital Management</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 3.5: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Vendor & Platform Risk Assessment</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Vendor criticality scoring, concentration risk analysis, and exit strategy planning. Know your dependencies before they become your problems.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">~50 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">Intermediate-Advanced</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/rd-capital-management/3-4" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 3.4</Link>
                <Link href="/curriculum/tracks/rd-capital-management/3-6" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 3.6 →</Link>
            </div>
        </div></div></main>
    );
}

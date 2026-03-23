import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 3.4: M&A Technical Assessment | Curriculum | Richard Ewing',
    description: 'Master technology assessment for M&A: platform consolidation planning, integration cost estimation, technology synergy identification, and merger engineering playbook.',
    keywords: ['M&A technical assessment', 'technology due diligence', 'platform consolidation', 'merger integration', 'technology synergies'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/rd-capital-management/3-4' },
};

const lessons = [
    { title: 'Lesson 1: Pre-Close Technology Assessment', content: 'Technology assessment during M&A has unique constraints: limited access, compressed timelines, and adversarial information dynamics. You\'re evaluating a company that wants to look its best.', details: [
        { metric: 'Data Room Analysis', description: 'Architecture diagrams, tech stack documentation, open source licenses, security audit reports, incident history. What\'s NOT in the data room is as important as what\'s in it.', benchmark: 'Red flags: no architecture docs, no incident history, no tech debt acknowledgment' },
        { metric: 'Management Interviews', description: '60-minute technical deep dives with CTO, VP Engineering, and key architects. Ask: "What keeps you up at night?" and "What would you fix if you had unlimited resources?"', benchmark: 'Document: what they volunteer vs. what they reveal under questioning. Discrepancy = risk.' },
        { metric: 'The "Strangler" Assessment', description: 'How easily could you replace each component? If a system is deeply entangled and irreplaceable: high integration risk. If components are modular: lower risk.', benchmark: 'Score each major component: Replaceable (1), Migratable (2), Entangled (3), Monolithic (4)' },
    ], exercise: 'Create a technology data room checklist: 25 documents you\'d request during pre-close due diligence. Classify each by risk impact (critical/important/nice-to-have).' },
    { title: 'Lesson 2: Integration Cost Estimation', content: 'Post-merger technology integration is where value is created or destroyed. 60% of technology M&A fails to capture projected synergies because integration costs are underestimated 2-5x.', details: [
        { metric: 'Platform Consolidation', description: 'Two companies = two of everything (two CRMs, two billing systems, two CI pipelines). Consolidation timeline: 12-24 months. Cost: typically 100-200% of annual engineering budget.', benchmark: 'Rule of thumb: integration cost = 1.5x the smaller company\'s annual engineering spend' },
        { metric: 'Data Migration Risk', description: 'Migrating data between different schemas, formats, and quality standards. Every migration has data loss risk, downtime risk, and customer impact risk.', benchmark: 'Budget: 2-3x the initial estimate. Timeline: 2x the initial estimate.' },
        { metric: 'Team Integration', description: 'Merging two engineering cultures, processes, and toolchains. Expect 15-25% attrition in the first year post-merger as people self-select out.', benchmark: 'Retention bonus budget: 2-4 months salary for key engineers. Deployed day 1.' },
    ], exercise: 'For a hypothetical merger of two 50-person engineering orgs: estimate total integration cost, timeline, expected attrition, and retention bonus budget.' },
    { title: 'Lesson 3: Technology Synergy Identification', content: 'Synergies are the value created by combining two companies that neither could achieve alone. Technology synergies include shared infrastructure, combined data assets, and engineering talent leverage.', details: [
        { metric: 'Infrastructure Synergies', description: 'Shared cloud accounts (volume discounts), consolidated monitoring, unified CI/CD. Typical savings: 15-30% of combined infrastructure spend.', benchmark: 'Cloud volume discounts kick in at $100K/month. Combined, you may cross thresholds.' },
        { metric: 'Data Synergies', description: 'Combined datasets enable better ML models, broader analytics, and cross-product insights. The data may be more valuable than the technology.', benchmark: 'Assess: data overlap (duplication savings) vs. data complementarity (new capabilities)' },
        { metric: 'Talent Synergies', description: 'Combining specialized teams can create capabilities neither company had. Company A\'s ML team + Company B\'s data platform team = full AI stack.', benchmark: 'Map: unique capabilities of each team. Identify combinations that unlock new value.' },
    ], exercise: 'Create a synergy map for two hypothetical technology companies: infrastructure savings, data value creation, and talent capability combinations. Quantify each synergy in dollars.' },
];

export default function Module34Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">R&D Capital Management</Link><span>/</span>
                <span className="text-emerald-400 font-bold">Module 3.4</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-3">Track 3 — R&D Capital Management</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 3.4: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">M&A Technical Assessment</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Pre-close assessment, integration cost estimation, and synergy identification. Where technology M&A creates or destroys value.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">~60 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced / Executive</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/rd-capital-management/3-3" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 3.3</Link>
                <Link href="/curriculum/tracks/rd-capital-management/3-5" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 3.5 →</Link>
            </div>
        </div></div></main>
    );
}

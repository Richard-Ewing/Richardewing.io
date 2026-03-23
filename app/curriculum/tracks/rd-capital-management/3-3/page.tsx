import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 3.3: Board Reporting & Executive Communication | Curriculum | Richard Ewing',
    description: 'Master executive communication for engineering: board deck engineering slides, KPI dashboards, risk reporting frameworks, and investment proposal templates.',
    keywords: ['board reporting engineering', 'executive communication', 'engineering KPI dashboard', 'CTO board deck', 'engineering investment proposal'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/rd-capital-management/3-3' },
};

const lessons = [
    { title: 'Lesson 1: The Board Deck Engineering Slide', content: 'Most CTOs present engineering to the board as a list of shipped features. Boards want to see engineering as an investment — returns, risks, and trajectory. One slide changes everything.', details: [
        { metric: 'The 4-Quadrant Slide', description: 'Top-left: Engineering ROI (APER, revenue trend). Top-right: Delivery Performance (DORA metrics with benchmarks). Bottom-left: Risk Exposure (PDI, TID). Bottom-right: Investment Allocation (build vs maintain vs debt).', benchmark: 'One slide. Four quadrants. Dollar amounts. Trend arrows. Benchmark comparison.' },
        { metric: 'The Narrative Arc', description: 'Frame the story: "Last quarter we invested $X. It generated $Y in returns. Our risk exposure is $Z. Next quarter we propose investing $A to generate $B."', benchmark: 'Every board presentation should follow: invested → returned → risk → proposal' },
        { metric: 'Anti-Patterns', description: 'Never: list shipped features (shows effort, not value). Never: report story points (meaningless to finance). Never: show Gantt charts (shows activity, not outcomes).', benchmark: 'Board members want: dollars in, dollars out, risk level, trajectory' },
    ], exercise: 'Create a single board slide for your engineering org using the 4-quadrant framework. Include APER, at least 2 DORA metrics, PDI score, and investment allocation split.' },
    { title: 'Lesson 2: Engineering KPI Dashboards', content: 'Continuous executive visibility into engineering health prevents surprises and builds trust. The right KPI dashboard shows trends, not snapshots, with automatic alerting.', details: [
        { metric: 'Tier 1: Executive KPIs', description: 'APER (revenue per engineer), Innovation Tax (% time on new features), and Deployment Frequency. Updated monthly. Visible to CEO and board.', benchmark: '3 KPIs maximum at the executive tier. More = noise.' },
        { metric: 'Tier 2: VP-Level KPIs', description: 'All four DORA metrics, team-level velocity, sprint completion rates, incident counts & MTTR. Updated weekly. Visible to VP Engineering and CTO.', benchmark: '8-12 KPIs at VP level. Drill-down from executive tier.' },
        { metric: 'Tier 3: Team-Level KPIs', description: 'Code review time, PR merge rate, test coverage, build time, individual team velocity. Updated daily. Visible to engineering managers.', benchmark: 'Teams own their metrics. Manager aggregates for VP reporting.' },
    ], exercise: 'Design a 3-tier KPI dashboard hierarchy for your org. For each tier: list the KPIs, update frequency, audience, and alerting thresholds.' },
    { title: 'Lesson 3: Investment Proposal Framework', content: 'When engineering needs budget — for debt remediation, platform investment, or new capabilities — it must speak the language of investment proposals: cost, return, timeline, risk.', details: [
        { metric: 'The Business Case Template', description: 'Problem statement (in dollar terms) → Proposed solution → Investment required → Expected return → Timeline → Risk factors → Alternative approaches. This is how finance evaluates every investment.', benchmark: 'Every proposal: 1 page executive summary + supporting detail' },
        { metric: 'ROI Calculation', description: 'NPV (Net Present Value) of the investment. Include: freed engineering capacity × burdened rate, reduced incident costs, faster time-to-market revenue, avoided risks.', benchmark: 'Target: 3-5x ROI for tech debt remediation. 5-10x for new capabilities.' },
        { metric: 'Risk-Adjusted Returns', description: 'Not all returns are certain. A platform migration has 30% risk of 2x cost overrun. Present scenarios: best case, expected case, worst case.', benchmark: 'Always include: probability-weighted expected value for each scenario' },
    ], exercise: 'Write an investment proposal for a real engineering initiative using the template: problem ($), solution, investment, ROI, timeline, risks. Get feedback from your CFO.' },
];

export default function Module33Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">R&D Capital Management</Link><span>/</span>
                <span className="text-emerald-400 font-bold">Module 3.3</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-3">Track 3 — R&D Capital Management</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 3.3: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Board Reporting & Executive Communication</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">The 4-quadrant board slide, tiered KPI dashboards, and investment proposal frameworks. Speak the language that gets engineering funded.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">~55 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced / Executive</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/rd-capital-management/3-2" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 3.2</Link>
                <Link href="/curriculum/tracks/rd-capital-management/3-4" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 3.4 →</Link>
            </div>
        </div></div></main>
    );
}

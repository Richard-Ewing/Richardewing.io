import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 4.6: Capstone — Full R&D Capital Audit | Curriculum | Richard Ewing',
    description: 'The capstone module: conduct a complete R&D Capital Audit end-to-end. Apply everything from all 4 tracks to produce a board-ready technology assessment.',
    keywords: ['R&D Capital Audit', 'engineering audit', 'technology assessment', 'capstone project', 'product economics certification'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/capstone/4-6' },
};

const lessons = [
    { title: 'Lesson 1: Capstone Project Overview', content: 'This is where everything comes together. You will conduct a complete R&D Capital Audit of your own organization (or a case study) using every framework from Tracks 1-4. The output: a board-ready technology assessment document.', details: [
        { metric: 'Deliverable: Technology Assessment', description: 'A comprehensive document covering: Engineering Health (DORA, APER), Technical Debt Profile (PDI, Innovation Tax), AI Economics (COGS, feature profitability), and R&D Capital Position.', benchmark: 'Length: 15-25 pages. Audience: board, investors, and executive leadership.' },
        { metric: 'Tools Required', description: 'You will use every tool from the curriculum: PDI Calculator, APER Calculator, AUEB Calculator, EV-SE Calculator, and the Audit Interview tool.', benchmark: 'Complete all tool exercises before starting the capstone.' },
        { metric: 'Timeline', description: 'Estimated completion time: 2-3 weeks for a thorough audit, including data collection, analysis, and document creation.', benchmark: 'Week 1: data collection. Week 2: analysis & modeling. Week 3: document & presentation.' },
    ], exercise: 'Set up your capstone project: choose your target organization (your own or a case study), define scope (which teams/systems), and create your project timeline.' },
    { title: 'Lesson 2: Data Collection & Analysis', content: 'The audit begins with data. You need engineering metrics (DORA, velocity, incidents), financial data (engineering budget, infrastructure costs), and organizational data (team structure, tenure, hiring).', details: [
        { metric: 'Engineering Metrics Collection', description: 'Pull from source control (deploy frequency, lead time), incident management (MTTR, change failure rate), and project tracking (velocity, cycle time). Calculate APER using the calculator.', benchmark: 'Minimum: 3 months of data for trend analysis. 12 months for full seasonal patterns.' },
        { metric: 'Financial Analysis', description: 'Map engineering costs: salaries (by level), infrastructure, tools, contractors. Calculate Innovation Tax (% time on maintenance vs. innovation). Run PDI assessment.', benchmark: 'Cross-reference: engineering spend trends vs. revenue trends. Divergence = problem signal.' },
        { metric: 'Organizational Assessment', description: 'Map team structure, key-person dependencies, tenure Distribution, and hiring velocity. Use the Audit Interview tool for qualitative assessment.', benchmark: 'Conduct 3-5 stakeholder interviews: CTO, VP Engineering, 2-3 team leads, 1 product leader.' },
    ], exercise: 'Complete data collection: run PDI calculator, APER calculator, collect DORA metrics, and conduct at least one Audit Interview. Document all inputs.' },
    { title: 'Lesson 3: Board-Ready Document & Presentation', content: 'The final deliverable is a board-ready technology assessment. This document uses financial language, benchmarks against industry standards, and provides actionable recommendations with ROI projections.', details: [
        { metric: 'Executive Summary', description: 'One page: current engineering health (scorecard), key risks (top 3), opportunities (top 3), and recommended investment (next 12 months with expected ROI).', benchmark: 'Board members read the exec summary first. If it doesn\'t compel action, the rest doesn\'t matter.' },
        { metric: 'Detailed Findings', description: 'Section for each domain: Productivity (DORA, APER), Debt (PDI, Innovation Tax, TID), AI (COGS, feature profitability), and Organization (team health, key-person risk).', benchmark: 'Each finding: metric → benchmark comparison → trend arrow → financial impact → recommendation.' },
        { metric: 'Investment Roadmap', description: 'Phased remediation plan: Quick wins (30 days, ROI: 2-3x), Medium term (90 days, ROI: 3-5x), Strategic (12 months, ROI: 5-10x). Each with budget estimate and success metrics.', benchmark: 'The roadmap is the call to action. Make it specific, costed, and connected to business outcomes.' },
    ], exercise: 'Compile your findings into the board-ready format. Share with a peer for review. Then schedule time with leadership to present your first R&D Capital Audit.' },
];

export default function Module46Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Capstone & Applied Practice</Link><span>/</span>
                <span className="text-amber-400 font-bold">Module 4.6</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">Track 4 — Capstone & Applied Practice</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 4.6: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Capstone — Full R&D Capital Audit</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">The culmination of all 4 tracks. Conduct a complete R&D Capital Audit and produce a board-ready technology assessment document.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~2-3 weeks</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Expert</span>
                </div>
            </div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/capstone/4-5" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 4.5</Link>
                <Link href="/curriculum/tracks/capstone/4-7" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 4.7 →</Link>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 text-center">
                <h2 className="text-2xl font-grotesk font-bold text-white mb-4">🎓 Congratulations!</h2>
                <p className="text-zinc-300 mb-6">You&apos;ve completed all 60 modules across 4 tracks. You now have the complete Product Economics toolkit — from metrics to AI economics to capital management to applied practice.</p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-500/30 transition-colors text-sm font-bold">Try All Tools →</Link>
                    <Link href="/advisory" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Book Advisory Session</Link>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
                <Link href="/curriculum/tracks/capstone/4-5" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 4.5</Link>
                <Link href="/curriculum/tracks" className="text-sm text-zinc-500 hover:text-white transition-colors">Back to All Tracks</Link>
            </div>
        </div></div></main>
    );
}

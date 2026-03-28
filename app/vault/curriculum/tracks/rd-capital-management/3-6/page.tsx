import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 3.6: Remediation Roadmap & Execution | Curriculum | Richard Ewing',
    description: 'Master remediation planning: prioritized debt paydown, sprint allocation strategy, measurement frameworks, and executive stakeholder management during remediation.',
    keywords: ['remediation roadmap', 'tech debt remediation', 'debt paydown strategy', 'sprint allocation', 'engineering remediation'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/rd-capital-management/3-6' },
};

const lessons = [
    { title: 'Lesson 1: Prioritized Remediation Planning', content: 'You can\'t fix everything at once. The remediation roadmap prioritizes debt by economic impact, assigns teams, sets timelines, and creates measurable milestones.', details: [
        { metric: 'The ICE Framework', description: 'Score each debt item: Impact (1-10, economic severity), Confidence (1-10, how sure are we of the impact?), Ease (1-10, how easy to fix?). ICE = Impact × Confidence × Ease. Highest ICE first.', benchmark: 'Example: API redesign — Impact: 9, Confidence: 7, Ease: 3. ICE = 189.' },
        { metric: 'Wave Planning', description: 'Group remediation into waves (4-6 week sprints). Wave 1: security & critical incidents. Wave 2: architecture hotspots. Wave 3: platform & infrastructure. Wave 4: code quality.', benchmark: 'Never attempt all waves simultaneously. Sequential focus = compounding returns.' },
        { metric: 'The 20% Rule', description: 'Dedicate 20% of sprint capacity to debt remediation. This is sustainable without sacrificing feature velocity. Below 15%: debt accumulates faster than remediation. Above 30%: feature delivery suffers.', benchmark: 'Non-negotiable: the 20% allocation is protected capacity, not "if we have time"' },
    ], exercise: 'Score your top 20 technical debt items using ICE. Group them into 4 remediation waves. Calculate the total investment (engineer-weeks) per wave.' },
    { title: 'Lesson 2: Measuring Remediation Progress', content: 'Remediation without measurement is busywork. You must track leading indicators (effort invested) and lagging indicators (outcome improvement) to prove ROI.', details: [
        { metric: 'Leading Indicators', description: 'Sprint allocation to remediation (% of capacity), debt items closed, code coverage improvement, dependency updates completed. These show effort.', benchmark: 'Track weekly. If leading indicators stall: remediation is being deprioritized.' },
        { metric: 'Lagging Indicators', description: 'Innovation Tax reduction (the ultimate metric), DORA metric improvements, incident rate reduction, APER improvement. These show results and take 2-3 months to appear.', benchmark: 'Example: Innovation Tax drops from 55% to 40% after 2 waves = success' },
        { metric: 'The Burndown Chart', description: 'Track total estimated remediation effort remaining. Like a project burndown: should trend downward. If it flatlines or increases: new debt is being created faster than remediation.', benchmark: 'Healthy: remediation effort decreasing 10-15% per wave' },
    ], exercise: 'Create a remediation dashboard with 3 leading and 3 lagging indicators. Set baseline values today. Define target values at the end of each wave.' },
    { title: 'Lesson 3: Stakeholder Management During Remediation', content: 'Remediation competes with feature requests for engineering time. Without executive buy-in and sustained support, remediation gets quietly deprioritized within weeks.', details: [
        { metric: 'The Business Case Refresh', description: 'Every 6 weeks, present remediation progress to leadership: investment made, outcomes delivered, remaining work. Connect to business metrics (revenue, incidents, velocity).', benchmark: 'Format: "We invested $X in remediation. Innovation Tax dropped from Y% to Z%. APER improved from $A to $B."' },
        { metric: 'Feature Velocity Recovery', description: 'Show that remediation is INCREASING feature velocity, not competing with it. After reducing Innovation Tax from 50% to 35%: "We now have 15% more capacity for features — that\'s 3 additional features per quarter."', benchmark: 'Remediation pays for itself within 2-3 quarters through velocity improvement' },
        { metric: 'The "Burning Platform" Communication', description: 'For severely indebted organizations: frame remediation as required, not optional. "Our Technical Insolvency Date is Q3 2026. Without remediation, we cannot ship new features after that date."', benchmark: 'Use TID as the urgency lever. It\'s concrete, specific, and alarming.' },
    ], exercise: 'Write a 6-week remediation progress report: investment summary, outcomes achieved (using leading & lagging indicators), and projected ROI for continued investment.' },
];

export default function Module36Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">R&D Capital Management</Link><span>/</span>
                <span className="text-emerald-400 font-bold">Module 3.6</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-3">Track 3 — R&D Capital Management</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 3.6: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Remediation Roadmap & Execution</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">ICE prioritization, wave planning, measurement frameworks, and stakeholder management. Turn audit findings into measurable improvements.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">~55 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced / Executive</span>
                </div>
            </div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/rd-capital-management/3-5" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 3.5</Link>
                <Link href="/curriculum/tracks/rd-capital-management/3-7" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 3.7 →</Link>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
                <h2 className="text-2xl font-grotesk font-bold text-white mb-4">🎓 All Tracks Complete!</h2>
                <p className="text-zinc-300 mb-6">You&apos;ve completed all 18 modules across 3 tracks. You now have the complete toolkit to measure, manage, and communicate engineering as an economic activity.</p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-cyan-500/30 transition-colors text-sm font-bold">Try PDI Calculator →</Link>
                    <Link href="/advisory" className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Book Advisory Session</Link>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
                <Link href="/curriculum/tracks/rd-capital-management/3-5" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 3.5</Link>
                <Link href="/curriculum/tracks" className="text-sm text-zinc-500 hover:text-white transition-colors">Back to All Tracks</Link>
            </div>
        </div></div></main>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 1.4: Team Topology & Conway\'s Law | Curriculum | Richard Ewing',
    description: 'Master Conway\'s Law, Team Topologies, and organizational design for engineering effectiveness. Learn how team structure determines system architecture.',
    keywords: ['Conways Law', 'team topologies', 'engineering organization', 'platform teams', 'stream-aligned teams'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/engineering-economics/1-4' },
};

const lessons = [
    {
        title: 'Lesson 1: Conway\'s Law — Why Team Structure ≈ Architecture',
        content: 'Conway\'s Law (1967): "Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations." Your org chart IS your system architecture.',
        details: [
            { metric: 'The Conway Effect', description: 'If you have 3 frontend teams, you\'ll get 3 different frontend approaches. If backend and mobile teams don\'t talk, the API will have inconsistencies. Team boundaries become system boundaries.', benchmark: 'Signal: # of cross-team dependencies correlates with # of integration problems' },
            { metric: 'Inverse Conway Maneuver', description: 'Instead of letting org structure drive architecture, design your teams to match the architecture you WANT. This is the single most powerful architectural tool available.', benchmark: 'Example: Want microservices? Create small autonomous teams that own entire services.' },
            { metric: 'Communication Overhead', description: 'Adding one person to a team of N creates N new communication channels. A team of 5 has 10 channels; a team of 10 has 45. Beyond 8-10 people, communication overhead destroys productivity.', benchmark: 'Formula: N×(N-1)/2 communication paths. Amazon\'s "two-pizza rule" optimizes for this.' },
        ],
        exercise: 'Draw your current org chart alongside your system architecture diagram. Where do team boundaries and system boundaries mismatch? Those mismatches are your highest-priority organizational debt.',
    },
    {
        title: 'Lesson 2: The Four Team Topologies',
        content: 'Matthew Skelton and Manuel Pais identified four fundamental team types. Every team in your engineering org should fit one of these topologies.',
        details: [
            { metric: 'Stream-Aligned Teams', description: 'Aligned to a single, valuable stream of work (a product, service, or user journey). These are your "value delivery" teams. They should be 5-9 people with full ownership.', benchmark: 'Target: 60-80% of your engineering org should be stream-aligned' },
            { metric: 'Platform Teams', description: 'Provide internal services that accelerate stream-aligned teams. Examples: deployment platform, observability, authentication. Their "customers" are other engineering teams.', benchmark: 'Target: 15-25% of engineering org. Product-manage the platform like a product.' },
            { metric: 'Enabling Teams', description: 'Help stream-aligned teams overcome obstacles. Examples: SRE coaches, security consultants, architecture guidance. They don\'t own production code — they enable others.', benchmark: 'Target: 5-10% of engineering org. Measure by team capability improvement.' },
            { metric: 'Complicated Subsystem Teams', description: 'Own components requiring deep specialist knowledge (ML models, payment processing, regulatory engines). Needed when expertise required exceeds what a stream team can maintain.', benchmark: 'Only create when specialist knowledge is genuinely deep. Otherwise, embed in stream teams.' },
        ],
        exercise: 'Categorize every team in your engineering org into one of the four topologies. Identify teams that don\'t fit any category — these are organizational debt.',
    },
    {
        title: 'Lesson 3: Cognitive Load & Team Boundaries',
        content: 'Every team has a cognitive load capacity — the amount of domain complexity, technical complexity, and tooling complexity it can handle. Exceeding this capacity causes burnout, bugs, and attrition.',
        details: [
            { metric: 'Intrinsic Cognitive Load', description: 'The fundamental complexity of the problem domain. Can\'t be reduced — payment processing is inherently complex. The team must be staffed and skilled for this load.', benchmark: 'If intrinsic load alone overwhelms the team, the scope is too broad. Split.' },
            { metric: 'Extraneous Cognitive Load', description: 'Complexity from poor tooling, bad process, or unclear requirements. CAN be reduced. Every minute spent fighting deployment scripts is extraneous load.', benchmark: 'Platform teams exist specifically to reduce extraneous load on stream teams.' },
            { metric: 'Germane Cognitive Load', description: 'The "good" cognitive load — learning and growing. Building new features, adopting new patterns. You WANT this load. It\'s where innovation happens.', benchmark: 'Healthy: intrinsic (40%) + extraneous (<20%) + germane (40%)' },
        ],
        exercise: 'For each team, estimate the percentage split between intrinsic, extraneous, and germane cognitive load. Where extraneous load > 30%, identify the platform improvements needed.',
    },
    {
        title: 'Lesson 4: Economic Impact of Team Design',
        content: 'Bad team design is invisible technical debt. It doesn\'t show up in code scanners, but it destroys velocity, increases coordination costs, and causes attrition.',
        details: [
            { metric: 'Cross-Team Dependency Cost', description: 'Every cross-team dependency adds 2-4 weeks of calendar time per feature (handoffs, waiting, miscommunication). With 5 dependencies, a 2-week feature takes 12 weeks.', benchmark: 'Measure: average # of cross-team dependencies per feature. Target: < 2' },
            { metric: 'Coordination Tax', description: 'The percentage of engineering time spent in cross-team meetings, Slack discussions, and alignment sessions. In poorly-structured orgs: 30-50% of time is coordination.', benchmark: 'Healthy: < 20% coordination time. Measure via calendar analysis.' },
            { metric: 'APER Impact', description: 'Revenue per engineer (APER) improves 15-30% after team topology optimization. Fewer handoffs = faster delivery = more revenue per engineer.', benchmark: 'Use APER calculator before/after reorg to quantify improvement' },
        ],
        exercise: 'Calculate your engineering org\'s "coordination tax" — the percentage of time in cross-team meetings and dependencies. Multiply by engineering budget to get the dollar cost of poor team design.',
    },
];

export default function Module14Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Engineering Economics</Link><span>/</span>
                        <span className="text-cyan-400 font-bold">Module 1.4</span>
                    </div>
                    <div className="mb-10">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">Track 1 — Engineering Economics</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 1.4: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Team Topology & Conway&apos;s Law</span></h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">Your org chart determines your system architecture. Master Conway&apos;s Law, the four team topologies, cognitive load management, and the economics of team design.</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">4 Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~60 min</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">Intermediate</span>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How Conway&apos;s Law connects org structure to system architecture</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> The four team topologies and when to use each</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to manage cognitive load across engineering teams</li>
                            <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> How to calculate the dollar cost of poor team design</li>
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
                        <Link href="/curriculum/tracks/engineering-economics/1-3" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 1.3</Link>
                        <Link href="/curriculum/tracks/engineering-economics/1-5" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 1.5 →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

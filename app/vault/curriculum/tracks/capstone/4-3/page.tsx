import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 4.3: Engineering Org Scaling | Curriculum | Richard Ewing',
    description: 'Master engineering org scaling: hiring economics, span of control, communication overhead, and the transition from startup to scale-up engineering.',
    keywords: ['engineering org scaling', 'hiring economics', 'span of control', 'Brooks Law', 'engineering leadership'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/capstone/4-3' },
};

const lessons = [
    { title: 'Lesson 1: Scaling Laws for Engineering Orgs', content: 'Adding engineers doesn\'t linearly increase output. Brooks\'s Law, communication overhead, and coordination costs mean that doubling the team may only increase output 50-70%. Understanding these scaling laws prevents expensive mistakes.', details: [
        { metric: 'Communication Overhead', description: 'Communication paths = n(n-1)/2. A 5-person team has 10 paths. A 10-person team has 45. A 50-person org has 1,225. Each path costs coordination time.', benchmark: 'This is why team size sweet spot is 5-9. Beyond that: split into separate teams.' },
        { metric: 'Ramp-Up Cost', description: 'New engineers are net-negative for 1-3 months: they consume senior engineer time for onboarding, code reviews, and mentoring while producing less output.', benchmark: 'Budget: $30K-50K in lost productivity per new hire during ramp-up.' },
        { metric: 'The "Mythical" Engineer', description: 'Management often expects adding 1 engineer = 1 unit more output. Reality: 0.5-0.7 units after communication overhead. This gap causes chronic underestimation.', benchmark: 'Plan for 60-70% marginal productivity per additional engineer in a growing team.' },
    ], exercise: 'Calculate your current team\'s communication paths. If you added 5 more engineers: how many new paths? What\'s the estimated coordination cost increase?' },
    { title: 'Lesson 2: Hiring Economics', content: 'Hiring is one of the most expensive activities in engineering. The total cost of a hiring mistake (wrong hire + replacement) can exceed $200K. Getting hiring right is literally an economic imperative.', details: [
        { metric: 'Cost per Hire', description: 'Recruiting fees (15-25% of salary), hiring team time (interviews, reviews), onboarding costs. Total: $25K-50K per hire before the person writes a line of code.', benchmark: 'At $180K salary: recruiter fee ($36K) + interview time ($5K) + onboarding ($10K) = $51K' },
        { metric: 'Bad Hire Cost', description: 'Salary during underperformance (3-6 months), impact on team morale and velocity, severance, and re-hiring costs. Total: $150K-250K per bad hire.', benchmark: 'The strongest signal for hiring quality: structured interviews with rubrics reduce bad hires 40%.' },
        { metric: 'Time-to-Productivity', description: 'Months until a new hire reaches 80% productivity. Junior: 3-6 months. Senior: 1-3 months. Staff+: depends on organizational complexity.', benchmark: 'Faster onboarding = lower cost: invest in documentation, tooling, and mentoring.' },
    ], exercise: 'Calculate your total cost-per-hire (recruiting + interviews + onboarding). Then estimate the cost of your last bad hire if applicable. Build the business case for structured interviews.' },
    { title: 'Lesson 3: Organizational Design for Scale', content: 'How you structure teams determines what you can build. Conway\'s Law guarantees it. Intentional organizational design is the most powerful lever an engineering leader has.', details: [
        { metric: 'Span of Control', description: 'Engineering managers should have 5-8 direct reports. Below 5: manager overhead per engineer too high. Above 8: insufficient coaching and development.', benchmark: 'Optimal: 6-7 direct reports per EM. Add a new EM before exceeding 8.' },
        { metric: 'Team Autonomy Index', description: 'How often does a team need another team\'s help to ship? High autonomy (80%+ independent): fast shipping. Low autonomy (< 50%): coordination bottleneck.', benchmark: 'Target: each team can ship 80% of their features with zero cross-team dependencies.' },
        { metric: 'Architecture vs. Org Alignment', description: 'Architecture and org structure must match. Misalignment creates friction, delays, and bugs. When scaling: redesign architecture and org together.', benchmark: 'Audit: for each service, exactly one team owns it. Shared ownership = no ownership.' },
    ], exercise: 'Draw your current org structure and your architecture diagram side by side. Do teams align with services? Identify misalignments and propose corrections.' },
];

export default function Module43Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Capstone & Applied Practice</Link><span>/</span>
                <span className="text-amber-400 font-bold">Module 4.3</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-3">Track 4 — Capstone & Applied Practice</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 4.3: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Engineering Org Scaling</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Scaling laws, hiring economics, organizational design, and span of control. How to grow an engineering org without destroying productivity.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~50 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-red-500/10 text-red-400 border border-red-500/20">Advanced</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/capstone/4-2" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 4.2</Link>
                <Link href="/curriculum/tracks/capstone/4-4" className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 4.4 →</Link>
            </div>
        </div></div></main>
    );
}

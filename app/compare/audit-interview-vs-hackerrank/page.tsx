import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Audit Interview vs HackerRank — Judgment vs Puzzles',
    description: 'Audit Interview Protocol vs HackerRank comparison. HackerRank tests algorithmic puzzles. The Audit Interview tests real-world engineering judgment — ver...',
    keywords: ['hackerrank alternative', 'technical assessment alternative', 'engineering judgment test', 'audit interview vs hackerrank', 'hiring for AI age', 'beyond hackerrank'],
    alternates: { canonical: 'https://www.richardewing.io/compare/audit-interview-vs-hackerrank' },
    openGraph: { title: 'Audit Interview vs HackerRank — Judgment vs Puzzles', description: 'When AI can pass HackerRank tests, what are you actually measuring?', url: 'https://www.richardewing.io/compare/audit-interview-vs-hackerrank', type: 'article' },
};

const rows = [
    { dimension: 'What it tests', audit: 'Engineering judgment across 4 dimensions', hack: 'Algorithmic problem-solving speed' },
    { dimension: 'Core skill', audit: 'Catching what AI gets wrong', hack: 'Implementing what AI already does' },
    { dimension: 'Question format', audit: 'Scenario-based, multi-dimensional', hack: 'Algorithmic puzzles with edge cases' },
    { dimension: 'AI can pass it?', audit: '❌ Requires contextual judgment AI can\'t replicate', hack: '✅ GPT-4 passes most problems' },
    { dimension: 'Proctoring', audit: 'Judgment-based — no need for proctoring', hack: 'Requires proctoring to prevent AI cheating' },
    { dimension: 'Cost', audit: 'Free (richardewing.io/tools/audit-interview)', hack: '$100-$500/mo per company' },
    { dimension: 'What it predicts', audit: 'On-the-job decision-making quality', hack: 'Ability to solve puzzles under pressure' },
    { dimension: 'Bias profile', audit: 'Tests judgment regardless of education path', hack: 'Favors CS-degree competitive programmers' },
];

export default function AuditInterviewVsHackerRankPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-400">Compare</Link><span>/</span><span className="text-emerald-400 font-bold">Audit Interview vs HackerRank</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Audit Interview <span className="text-zinc-500">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">HackerRank</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
                        HackerRank tests algorithmic puzzles. GPT-4 passes most HackerRank tests. The Audit Interview tests <span className="text-white font-bold">engineering judgment</span> — the skill AI makes MORE important, not less.
                    </p>

                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-200">
                                    <th className="text-left py-4 px-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">Dimension</th>
                                    <th className="text-left py-4 px-4 text-xs font-mono text-emerald-400 uppercase tracking-widest">Audit Interview</th>
                                    <th className="text-left py-4 px-4 text-xs font-mono text-zinc-400 uppercase tracking-widest">HackerRank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr key={i} className="border-b border-zinc-200 hover:bg-white/[0.02]">
                                        <td className="py-4 px-4 text-sm text-zinc-400 font-bold">{row.dimension}</td>
                                        <td className="py-4 px-4 text-sm text-white">{row.audit}</td>
                                        <td className="py-4 px-4 text-sm text-zinc-400">{row.hack}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">The Verdict</h2>
                        <p className="text-zinc-300 mb-6">
                            HackerRank was designed for a world where humans wrote all the code. In the AI age, <strong>the ability to generate correct algorithms is commoditized</strong>. The Audit Interview tests what remains scarce: verification, architecture judgment, economic awareness, and leadership.
                        </p>
                        <Link href="/tools/audit-interview" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold hover:opacity-90 transition-opacity">
                            Try the Free Audit Interview →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

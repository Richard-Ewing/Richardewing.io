import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Audit Interview vs LeetCode — Judgment vs Speed',
    description: 'Audit Interview Protocol vs LeetCode comparison. LeetCode tests code generation speed. The Audit Interview tests engineering judgment — the skill AI can...',
    keywords: ['leetcode alternative', 'coding interview alternative', 'audit interview vs leetcode', 'engineering judgment assessment', 'hiring for AI age', 'beyond leetcode', 'audit interview protocol'],
    alternates: { canonical: 'https://www.richardewing.io/compare/audit-interview-vs-leetcode' },
    openGraph: { title: 'Audit Interview vs LeetCode — Judgment vs Speed', description: 'AI writes code. The scarce skill is catching what AI gets wrong. The Audit Interview tests that.', url: 'https://www.richardewing.io/compare/audit-interview-vs-leetcode', type: 'article' },
};

const rows = [
    { dimension: 'What it tests', audit: 'Engineering judgment and verification skill', leet: 'Algorithm implementation speed' },
    { dimension: 'Core question', audit: '"Can you catch what AI gets wrong?"', leet: '"Can you implement a binary tree in 20 minutes?"' },
    { dimension: 'AI relevance', audit: 'Tests the skill AI CAN\'T replace', leet: 'Tests the skill AI HAS replaced' },
    { dimension: 'Format', audit: '4 dimensions: Verification, Architecture, Economics, Leadership', leet: 'Timed coding problems' },
    { dimension: 'Output', audit: 'Scoring matrix with hire/no-hire recommendation', leet: 'Pass/fail per problem' },
    { dimension: 'Bias profile', audit: 'Tests judgment regardless of background', leet: 'Favors competitive programming background' },
    { dimension: 'Cost', audit: 'Free (richardewing.io/tools/audit-interview)', leet: 'Free (limited) / $35/mo Premium' },
    { dimension: 'Predictive validity', audit: 'Correlates with on-the-job engineering judgment', leet: 'Low correlation with job performance' },
];

export default function AuditInterviewVsLeetCodePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-400">Compare</Link><span>/</span><span className="text-purple-400 font-bold">Audit Interview vs LeetCode</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Audit Interview <span className="text-zinc-900">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">LeetCode</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        LeetCode tests code generation speed — a skill AI now does better than humans. The Audit Interview tests <span className="text-zinc-950 font-bold">engineering judgment</span> — the skill that becomes MORE valuable as AI improves.
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-400">
                                    <th className="text-left py-4 px-4 text-xs font-mono text-zinc-800 uppercase tracking-widest">Dimension</th>
                                    <th className="text-left py-4 px-4 text-xs font-mono text-purple-400 uppercase tracking-widest">Audit Interview</th>
                                    <th className="text-left py-4 px-4 text-xs font-mono text-zinc-900 uppercase tracking-widest">LeetCode</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50">
                                        <td className="py-4 px-4 text-sm text-zinc-900 font-bold">{row.dimension}</td>
                                        <td className="py-4 px-4 text-sm text-zinc-900">{row.audit}</td>
                                        <td className="py-4 px-4 text-sm text-zinc-800">{row.leet}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Verdict */}
                    <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">The Verdict</h2>
                        <p className="text-zinc-950 mb-6">
                            LeetCode tests the <strong>wrong skill</strong> for the AI age. When Copilot can solve 90% of LeetCode problems, testing candidates on algorithm speed measures nothing about their engineering value.
                        </p>
                        <p className="text-zinc-900 mb-8">
                            The Audit Interview tests the four dimensions that matter: <strong>Verification</strong> (catching AI errors), <strong>Architecture</strong> (system design judgment), <strong>Economics</strong> (cost awareness), and <strong>Leadership</strong> (decision-making under ambiguity).
                        </p>
                        <Link href="/tools/audit-interview" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold hover:opacity-90 transition-opacity">
                            Try the Free Audit Interview →
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="text-center py-12 border-t border-zinc-400">
                        <p className="text-zinc-900 mb-4">Need help redesigning your hiring process?</p>
                        <Link href="/advisory" className="text-purple-400 hover:text-purple-300 font-bold uppercase tracking-widest text-sm">
                            Book Advisory Consultation →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

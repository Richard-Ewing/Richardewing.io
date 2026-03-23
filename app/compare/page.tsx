import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Compare — PDI vs SonarQube, Audit Interview vs LeetCode | Richard Ewing',
    description: 'How Richard Ewing\'s diagnostic tools compare to mainstream alternatives. Product Debt Index vs SonarQube. Audit Interview Protocol vs LeetCode. Different tools for different problems.',
    keywords: ['tool comparison', 'sonarqube alternative', 'leetcode alternative', 'product debt index', 'audit interview protocol'],
    alternates: { canonical: 'https://www.richardewing.io/compare' },
};

const comparisons = [
    {
        title: 'Product Debt Index vs SonarQube',
        subtitle: 'Economic Debt vs Code Quality',
        description: 'SonarQube measures code smells. PDI measures when technical debt will bankrupt your engineering capacity — in dollars.',
        href: '/compare/pdi-vs-sonarqube',
        color: 'cyan',
    },
    {
        title: 'Audit Interview vs LeetCode',
        subtitle: 'Judgment vs Speed',
        description: 'LeetCode tests code generation speed. The Audit Interview tests engineering judgment — the skill AI can\'t replace.',
        href: '/compare/audit-interview-vs-leetcode',
        color: 'purple',
    },
    {
        title: 'AUEB vs AWS Cost Explorer',
        subtitle: 'AI Economics vs Cloud Billing',
        description: 'AWS tracks cloud spend. AUEB tells you whether your AI features will ever make money. Cloud billing ≠ AI economics.',
        href: '/compare/aueb-vs-aws-cost-explorer',
        color: 'orange',
    },
    {
        title: 'Audit Interview vs HackerRank',
        subtitle: 'Judgment vs Puzzles',
        description: 'HackerRank tests algorithmic puzzles that GPT-4 can pass. The Audit Interview tests judgment AI can\'t replicate.',
        href: '/compare/audit-interview-vs-hackerrank',
        color: 'emerald',
    },
    {
        title: 'EV-SE vs Jellyfish',
        subtitle: 'Economics vs Metrics',
        description: 'Jellyfish tracks engineering activity. EV-SE tells you whether that activity creates lasting economic value.',
        href: '/compare/ev-se-vs-jellyfish',
        color: 'cyan',
    },
    {
        title: 'PDI vs CodeClimate',
        subtitle: 'Prognosis vs Symptoms',
        description: 'CodeClimate grades code quality. PDI calculates when technical debt will bankrupt your engineering capacity — in dollars.',
        href: '/compare/pdi-vs-codeclimate',
        color: 'purple',
    },
];

export default function ComparePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Compare <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tools</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
                        How the Product Economist toolkit compares to mainstream alternatives. Different tools solve different problems.
                    </p>

                    <div className="space-y-6">
                        {comparisons.map((c) => (
                            <Link key={c.href} href={c.href} className="group block">
                                <div className={`rounded-2xl border ${c.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/50' : c.color === 'purple' ? 'border-purple-500/20 hover:border-purple-500/50' : c.color === 'orange' ? 'border-orange-500/20 hover:border-orange-500/50' : 'border-emerald-500/20 hover:border-emerald-500/50'} p-8 transition-all hover:bg-white/[0.02]`}>
                                    <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${c.color === 'cyan' ? 'text-cyan-400' : c.color === 'purple' ? 'text-purple-400' : c.color === 'orange' ? 'text-orange-400' : 'text-emerald-400'}`}>{c.subtitle}</div>
                                    <h2 className="text-2xl font-grotesk font-bold text-white mb-3 group-hover:text-white">{c.title}</h2>
                                    <p className="text-zinc-400 mb-4">{c.description}</p>
                                    <span className={`text-sm font-bold uppercase tracking-widest ${c.color === 'cyan' ? 'text-cyan-400' : c.color === 'purple' ? 'text-purple-400' : c.color === 'orange' ? 'text-orange-400' : 'text-emerald-400'}`}>Read Comparison →</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center py-16 border-t border-white/10 mt-16">
                        <p className="text-zinc-400 mb-4">Try all tools free</p>
                        <Link href="/tools" className="text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-widest text-sm">
                            View All Diagnostic Tools →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

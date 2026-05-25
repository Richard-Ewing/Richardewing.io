import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'PDI vs CodeClimate | Economic Debt vs Code Metrics',
    description: 'CodeClimate grades code quality. PDI calculates your Technical Insolvency Date in dollars. See why financial framing changes executive behavior.',
    keywords: ['codeclimate alternative', 'technical debt measurement', 'pdi vs codeclimate', 'economic technical debt', 'code quality vs economics'],
    alternates: { canonical: 'https://www.richardewing.io/compare/pdi-vs-codeclimate' },
    openGraph: { title: 'PDI vs CodeClimate — Economics vs Code Quality', description: 'Code quality metrics tell you the symptoms. PDI tells you the prognosis.', url: 'https://www.richardewing.io/compare/pdi-vs-codeclimate', type: 'article' },
};

const rows = [
    { dimension: 'What it measures', pdi: 'Economic impact of technical debt ($, quarters)', cc: 'Code quality metrics (complexity, duplication, coverage)' },
    { dimension: 'Output', pdi: 'Technical Insolvency Date, dollar cost of debt', cc: 'GPA score, code quality grades (A-F)' },
    { dimension: 'Question answered', pdi: '"When will debt bankrupt our velocity?"', cc: '"How clean is our code?"' },
    { dimension: 'Audience', pdi: 'CTOs, CFOs, board members, investors', cc: 'Engineers, tech leads, engineering managers' },
    { dimension: 'Integration', pdi: 'Input-based diagnostic (no repo access needed)', cc: 'GitHub/GitLab repo integration required' },
    { dimension: 'Cost', pdi: 'Free (richardewing.io/tools/pdi)', cc: '$16-$299/mo per repo' },
    { dimension: 'Board-ready?', pdi: '✅ Produces investment-grade financial analysis', cc: '❌ Engineering-focused metrics' },
];

export default function PDIvsCodeClimatePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-900 font-extrabold font-semibold">Compare</Link><span>/</span><span className="text-rose-400 font-bold">PDI vs CodeClimate</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        PDI <span className="text-zinc-900">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">CodeClimate</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        CodeClimate tells you your code has problems. PDI tells you <span className="text-zinc-950 font-bold">when those problems will bankrupt your engineering capacity</span> — in dollars and quarters.
                    </p>
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead><tr className="border-b border-zinc-400"><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">Dimension</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-rose-400 uppercase tracking-widest">PDI</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-900 uppercase tracking-widest">CodeClimate</th></tr></thead>
                            <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50"><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium font-bold">{row.dimension}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.pdi}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.cc}</td></tr>))}</tbody>
                        </table>
                    </div>
                    <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">The Verdict</h2>
                        <p className="text-zinc-950 mb-6"><strong>CodeClimate measures the symptoms. PDI measures the prognosis.</strong> Code quality grades are useful for engineers. But when your CFO asks "how much is technical debt costing us?", you need PDI's dollar-denominated, quarter-dated answer.</p>
                        <Link href="/tools/pdi" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Try the Free PDI Calculator →</Link>
                    
                    <AdvisoryCTA variant="compare" />
</div>
                </div>
            </div>
        </main>
    );
}

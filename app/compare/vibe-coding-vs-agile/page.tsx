import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Vibe Coding vs Agile & Strategy Diagnostics | Richard Ewing',
    description: 'Vibe Coding vs Agile provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['vibe coding', 'agile development', 'generative ai debt', 'vibe coding vs agile', 'engineering velocity', 'shadow ai'],
    alternates: { canonical: 'https://www.richardewing.io/compare/vibe-coding-vs-agile' },
    openGraph: { title: 'Vibe Coding vs Agile: Debt Acceleration vs Iteration', description: 'Vibe Coding feels fast, but it generates hidden technical debt that breaks Agile sprint planning.', url: 'https://www.richardewing.io/compare/vibe-coding-vs-agile', type: 'article' },
};

const rows = [
    { dimension: 'Core Philosophy', vibe: '"Just make it work" using AI generation', agile: 'Iterative, structured value delivery' },
    { dimension: 'Speed to MVP', vibe: 'Hours/Days', agile: 'Weeks/Months' },
    { dimension: 'Debt Accrual Rate', vibe: 'Exponentially high (untested edge cases)', agile: 'Controlled (via Definition of Done)' },
    { dimension: 'Testing Approach', vibe: '"If it renders, it ships"', agile: 'TDD, CI/CD, Automated QA' },
    { dimension: 'Architecture', vibe: 'Spaghetti logic hallucinated by LLMs', agile: 'Pre-planned system design' },
    { dimension: 'Refactoring Cost', vibe: 'Often requires a full rewrite', agile: 'Incremental maintenance' },
    { dimension: 'Board-Level Risk', vibe: '🚨 Severe "Vibe Coding Debt" liability', agile: '✅ Predictable velocity metrics' },
];

export default function VibeCodingVsAgilePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-900 font-extrabold font-semibold">Compare</Link><span>/</span><span className="text-cyan-900 font-extrabold font-semibold font-bold">Vibe Coding vs Agile</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Vibe Coding <span className="text-zinc-900">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Agile</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Agile measures planned velocity. <span className="text-zinc-950 font-bold">Vibe Coding</span> (using generative AI without architectural guardrails) creates an illusion of speed while secretly compounding <span className="text-rose-500 font-bold">EBITDA-destroying technical debt</span>.
                    </p>
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead><tr className="border-b border-zinc-400"><th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">Dimension</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-rose-500 uppercase tracking-widest">Vibe Coding</th><th className="text-left py-4 px-4 text-xs font-bold font-mono text-orange-400 uppercase tracking-widest">Agile</th></tr></thead>
                            <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50"><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium font-bold">{row.dimension}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.vibe}</td><td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.agile}</td></tr>))}</tbody>
                        </table>
                    </div>
                    <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">The Verdict</h2>
                        <p className="text-zinc-950 mb-6"><strong>Vibe Coding is a prototyping tool, not a production methodology.</strong> When teams mistake AI-generated functional prototypes for production-ready code, they bypass Agile's structural guardrails. The result is <Link href="/blog/what-is-vibe-coding" className="text-rose-500 font-bold hover:underline">Vibe Coding Debt</Link>—a liability that will eventually bankrupt the team's engineering capacity.</p>
                        <Link href="/tools/innovation-tax-calculator" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 text-zinc-950 font-semibold font-semibold font-bold hover:opacity-90 transition-opacity uppercase tracking-widest text-sm">Calculate Your Vibe Coding Debt →</Link>
                    
                    <AdvisoryCTA variant="compare" />
</div>
                </div>
            </div>
        </main>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Copilot ROI vs GitClear — EBITDA Drag vs LOC Generation',
    description: 'Copilot ROI Forecaster vs GitClear comparison. Exogram measures the hidden EBITDA tax of AI-generated Vibe Coding Debt. GitClear measures code output vo...',
    keywords: ['gitclear alternative', 'jellyfish alternative', 'ai coding roi', 'vibe coding debt', 'copilot roi calculator', 'engineering intelligence vs economic impact'],
    alternates: { canonical: 'https://www.richardewing.io/compare/copilot-roi-vs-gitclear' },
    openGraph: { title: 'Copilot ROI vs GitClear — EBITDA vs LOC Generation', description: 'Why measuring code line output volume is a fatal metric for generative AI tools.', url: 'https://www.richardewing.io/compare/copilot-roi-vs-gitclear', type: 'article' },
};

const rows = [
    { dimension: 'Core Metric', exogram: 'Net Revenue Retention & EBITDA Impact', gitclear: 'Line of Code (LOC) Output & PR Velocity' },
    { dimension: 'View on AI Code', exogram: 'Mass generation introduces toxic "Vibe Coding Debt" liability', gitclear: 'More code generated faster equals higher developer productivity' },
    { dimension: 'Review Stage', exogram: 'Models the exact financial Drag Penalty of reviewers untangling hallucinations', gitclear: 'Models time-to-merge' },
    { dimension: 'Target Audience', exogram: 'Founders, CFOs, Private Equity Partners', gitclear: 'VP Engineering, Engineering Managers' },
    { dimension: 'Strategic Outcome', exogram: 'Determines if you should cancel your Copilot subscription to save margin', gitclear: 'Attempts to prove that your Copilot subscription is working' },
    { dimension: 'Cost', exogram: 'Free (richardewing.io/tools/copilot-roi)', gitclear: 'Commercial SaaS' },
    { dimension: 'Implementation', exogram: 'Zero-install mathematical forecaster', gitclear: 'Requires deep GitHub / Jira integration' },
];

export default function CopilotROIvsGitClearPage() {
    return (
        <main className="pt-20 bg-black min-h-screen">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-fuchsia-400">Compare</Link><span>/</span><span className="text-fuchsia-400 font-bold">Copilot ROI vs GitClear</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Copilot ROI Forecaster <span className="text-zinc-500">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">GitClear</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
                        GitClear and Jellyfish track code output volume to prove your AI licenses are working. Exogram calculates the <span className="text-white font-bold">exact EBITDA destruction</span> caused by downstream Vibe Coding Debt and senior engineer review drag.
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">Dimension</th>
                                    <th className="text-left py-4 px-4 text-xs font-mono text-fuchsia-400 uppercase tracking-widest">Richard Ewing (Copilot ROI)</th>
                                    <th className="text-left py-4 px-4 text-xs font-mono text-zinc-400 uppercase tracking-widest">GitClear</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                                        <td className="py-4 px-4 text-sm text-zinc-400 font-bold">{row.dimension}</td>
                                        <td className="py-4 px-4 text-sm text-white">{row.exogram}</td>
                                        <td className="py-4 px-4 text-sm text-zinc-400">{row.gitclear}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Verdict */}
                    <div className="rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">The Verdict</h2>
                        <p className="text-zinc-300 mb-6">
                            <strong>Volume is not Value.</strong> GitClear will tell you your developers are writing 40% more code since buying Copilot. 
                            Our methodology will tell you that the 40% additional code is mathematically destroying your senior engineering capacity in review cycles, resulting in a net negative Return on AI Investment.
                        </p>
                        <p className="text-zinc-400 mb-8">
                            If you want to track developer commits, use GitClear. If you are a CFO trying to figure out why R&D spending is up but feature delivery is stalled, use the Copilot ROI Tool.
                        </p>
                        <Link href="/tools/copilot-roi" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-bold hover:shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all">
                            Try the Free Copilot ROI Forecaster →
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="text-center py-12 border-t border-white/10">
                        <p className="text-zinc-400 mb-4">Want the board-level readout on your AI investment?</p>
                        <Link href="/advisory" className="text-fuchsia-400 hover:text-fuchsia-300 font-bold uppercase tracking-widest text-sm">
                            Book an R&D Capital Audit →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

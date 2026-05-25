import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'AUEB vs AWS Cost Explorer | AI Economics vs Cloud',
    description: 'AWS Cost Explorer shows cloud bills. AUEB calculates when your AI feature destroys margin. One tracks spend, the other predicts collapse.',
    keywords: ['aws cost explorer alternative', 'ai cost calculator', 'aueb vs aws', 'ai unit economics', 'llm cost optimization', 'ai feature profitability'],
    alternates: { canonical: 'https://www.richardewing.io/compare/aueb-vs-aws-cost-explorer' },
    openGraph: { title: 'AUEB vs AWS Cost Explorer — AI Economics vs Cloud Billing', description: 'Cloud spend ≠ AI economics. AUEB tells you if your AI features will ever be profitable.', url: 'https://www.richardewing.io/compare/aueb-vs-aws-cost-explorer', type: 'article' },
};

const rows = [
    { dimension: 'What it tracks', aueb: 'AI feature profitability per interaction', aws: 'Cloud infrastructure spend by service' },
    { dimension: 'Output', aueb: 'Margin per AI interaction, break-even analysis', aws: 'Monthly cloud bills with service breakdown' },
    { dimension: 'Audience', aueb: 'Product leaders, CTOs, CFOs', aws: 'Cloud engineers, DevOps, FinOps' },
    { dimension: 'Question answered', aueb: '"Will this AI feature ever be profitable?"', aws: '"How much are we spending on AWS?"' },
    { dimension: 'AI-specific?', aueb: '✅ Built specifically for AI/LLM economics', aws: '❌ General cloud cost tracking' },
    { dimension: 'Cost', aueb: 'Free (richardewing.io/tools/aueb)', aws: 'Free (included with AWS)' },
    { dimension: 'Granularity', aueb: 'Per-feature, per-interaction cost modeling', aws: 'Per-service, per-region billing' },
    { dimension: 'Board-ready?', aueb: '✅ Produces investment-grade analysis', aws: '❌ Infrastructure-focused dashboards' },
];

export default function AUEBvsAWSPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-900 font-extrabold font-semibold">Compare</Link><span>/</span><span className="text-orange-900 font-extrabold font-semibold font-bold">AUEB vs AWS Cost Explorer</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AUEB <span className="text-zinc-900">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">AWS Cost Explorer</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        AWS Cost Explorer tells you how much you spent on cloud services. AUEB tells you <span className="text-zinc-950 font-bold">whether your AI features will ever make money</span>. Cloud billing ≠ AI economics.
                    </p>

                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-400">
                                    <th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">Dimension</th>
                                    <th className="text-left py-4 px-4 text-xs font-bold font-mono text-orange-900 font-extrabold font-semibold uppercase tracking-widest">AUEB</th>
                                    <th className="text-left py-4 px-4 text-xs font-bold font-mono text-zinc-900 uppercase tracking-widest">AWS Cost Explorer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr key={i} className="border-b border-zinc-400 hover:bg-zinc-50">
                                        <td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium font-bold">{row.dimension}</td>
                                        <td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.aueb}</td>
                                        <td className="py-4 px-4 text-sm font-semibold text-zinc-900 font-medium">{row.aws}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">The Verdict</h2>
                        <p className="text-zinc-950 mb-6">
                            <strong>They answer completely different questions.</strong> AWS Cost Explorer is essential for managing cloud bills. AUEB is essential for knowing whether your AI product strategy is viable.
                        </p>
                        <p className="text-zinc-900 mb-8">
                            You need AWS Cost Explorer to know your inputs. You need AUEB to know your outputs. The gap between them is where AI products die.
                        </p>
                        <Link href="/tools/aueb" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-600 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">
                            Try the Free AUEB Calculator →
                        </Link>
                    </div>

                    <div className="text-center py-12 border-t border-zinc-400">
                        <p className="text-zinc-900 mb-4">Need AI economics advisory?</p>
                        <Link href="/advisory" className="text-orange-900 font-extrabold font-semibold hover:text-orange-900 font-extrabold font-semibold font-bold uppercase tracking-widest text-sm">
                            Book a $2,500 AI Economics Diagnostic →
                        </Link>
                    
                    <AdvisoryCTA variant="compare" />
</div>
                </div>
            </div>
        </main>
    );
}

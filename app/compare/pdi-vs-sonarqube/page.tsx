import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'PDI vs SonarQube — Economic Debt vs Code Quality | Richard Ewing',
    description: 'Product Debt Index (PDI) vs SonarQube comparison. PDI measures technical debt in dollar terms and calculates your Technical Insolvency Date. SonarQube measures code quality. Different layers, different insights.',
    keywords: ['sonarqube alternative', 'technical debt calculator', 'product debt index vs sonarqube', 'code quality vs economic impact', 'technical debt cost', 'pdi calculator', 'sonarqube comparison'],
    alternates: { canonical: 'https://www.richardewing.io/compare/pdi-vs-sonarqube' },
    openGraph: { title: 'PDI vs SonarQube — Economic Debt vs Code Quality', description: 'Why measuring code quality isn\'t the same as measuring economic impact. Free PDI calculator.', url: 'https://www.richardewing.io/compare/pdi-vs-sonarqube', type: 'article' },
};

const rows = [
    { dimension: 'What it measures', pdi: 'Economic impact of debt in dollar terms', sonar: 'Code quality (bugs, smells, duplications)' },
    { dimension: 'Output', pdi: 'Technical Insolvency Date, PDI score, dollar cost', sonar: 'Quality gate pass/fail, ratings A-E' },
    { dimension: 'Audience', pdi: 'CTOs, CFOs, board members, investors', sonar: 'Developers, tech leads' },
    { dimension: 'Question answered', pdi: '"When will debt consume all capacity?"', sonar: '"How many code quality issues exist?"' },
    { dimension: 'Cost', pdi: 'Free (richardewing.io/tools/pdi)', sonar: 'Free (Community) / $150+/mo (Enterprise)' },
    { dimension: 'AI features', pdi: 'AI-powered analysis via LLM', sonar: 'AI Code Assurance (Enterprise)' },
    { dimension: 'Board-ready?', pdi: '✅ Produces executive-ready reports', sonar: '❌ Developer-focused dashboards' },
    { dimension: 'Integration', pdi: 'Standalone web tool', sonar: 'CI/CD pipeline integration' },
];

export default function PDIvsSonarQubePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/compare" className="hover:text-cyan-400">Compare</Link><span>/</span><span className="text-cyan-400 font-bold">PDI vs SonarQube</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Product Debt Index <span className="text-zinc-500">vs</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SonarQube</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
                        SonarQube tells you how many code smells you have. PDI tells you <span className="text-white font-bold">when technical debt will bankrupt your engineering capacity</span>. They measure different things at different layers.
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto mb-16">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-4 text-xs font-mono text-zinc-500 uppercase tracking-widest">Dimension</th>
                                    <th className="text-left py-4 px-4 text-xs font-mono text-cyan-400 uppercase tracking-widest">PDI</th>
                                    <th className="text-left py-4 px-4 text-xs font-mono text-zinc-400 uppercase tracking-widest">SonarQube</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                                        <td className="py-4 px-4 text-sm text-zinc-400 font-bold">{row.dimension}</td>
                                        <td className="py-4 px-4 text-sm text-white">{row.pdi}</td>
                                        <td className="py-4 px-4 text-sm text-zinc-400">{row.sonar}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Verdict */}
                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">The Verdict</h2>
                        <p className="text-zinc-300 mb-6">
                            <strong>Use both.</strong> SonarQube is excellent at catching code-level issues in your CI/CD pipeline.
                            PDI answers the question SonarQube can&apos;t: <em>&quot;What is this debt costing us in dollars, and when will it consume all engineering capacity?&quot;</em>
                        </p>
                        <p className="text-zinc-400 mb-8">
                            SonarQube is a microscope. PDI is a financial statement. CTOs need both. Boards only care about the financial statement.
                        </p>
                        <Link href="/tools/pdi" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:opacity-90 transition-opacity">
                            Try the Free PDI Calculator →
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="text-center py-12 border-t border-white/10">
                        <p className="text-zinc-400 mb-4">Need the full picture?</p>
                        <Link href="/advisory" className="text-cyan-400 hover:text-cyan-300 font-bold uppercase tracking-widest text-sm">
                            Book a $2,500 Insolvency Diagnostic →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

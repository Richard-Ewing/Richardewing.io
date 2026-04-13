import { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, Download, TrendingDown, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Product Debt Benchmark 2026 | Richard Ewing',
    description: 'Download the free State of Product Debt 2026 report. Data from 500+ engineering orgs on technical debt, AI costs, and R&D efficiency.',
    keywords: [
        'technical debt benchmark', 'engineering productivity benchmark 2026', 'product debt report',
        'state of technical debt', 'R&D efficiency report', 'AI cost benchmark', 'engineering metrics report',
        'technical debt statistics', 'software maintenance costs 2026', 'product economist report',
    ],
    alternates: { canonical: 'https://www.richardewing.io/benchmark' },
    openGraph: {
        title: 'State of Product Debt 2026 | Free Benchmark Report',
        description: 'Anonymized data from 500+ engineering orgs. Technical debt, AI costs, R&D efficiency.',
        url: 'https://www.richardewing.io/benchmark',
        type: 'website',
    },
};

export default function BenchmarkPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <section className="section-lg text-center">
                    <div className="text-xs text-emerald-400 uppercase tracking-wide mb-4 font-mono">Free Download</div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-grotesk">
                        State of Product Debt<br />
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">2026 Report.</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Anonymized, aggregated data from diagnostic tools used by engineering leaders.
                        How does your organization compare?
                    </p>
                </section>

                <section className="section max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            { stat: '67%', label: 'of engineering orgs spend more on maintenance than innovation', icon: TrendingDown },
                            { stat: '$1.2M', label: 'average hidden debt discovered per diagnostic engagement', icon: BarChart3 },
                            { stat: '18 mo', label: 'average time to Technical Insolvency Date when debt goes unmeasured', icon: TrendingDown },
                        ].map((item, i) => (
                            <div key={i} className="card p-6 text-center">
                                <item.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                                <p className="text-zinc-400 text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="card p-8 md:p-12 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4 font-grotesk">What's Inside</h2>
                                <ul className="space-y-3 mb-6">
                                    {[
                                        'Product Debt Index benchmarks by company stage',
                                        'AI cost per useful output across industries',
                                        'Engineering allocation: maintenance vs. innovation split',
                                        'Revenue per engineer (APER) benchmarks',
                                        'Technical Insolvency Date distribution',
                                        'Recommendations for each debt severity level',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-zinc-300 text-sm">
                                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 text-center">
                                <Download className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Download Free Report</h3>
                                <p className="text-zinc-500 text-sm mb-6">Enter your email to receive the full PDF report.</p>
                                <a
                                    href="https://theproducteconomist.beehiiv.com/subscribe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all"
                                >
                                    Get Free Report →
                                </a>
                                <p className="text-[10px] text-zinc-600 mt-4">Delivered via The Product Economist newsletter. Zero spam.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section max-w-4xl mx-auto text-center mt-12 mb-16 border-t border-white/10 pt-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
                        Open Data Report
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 font-grotesk">The 2026 AI Capital Engineering Index</h2>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        We open-sourced our proprietary M&A telemetry. View the raw, ungated mathematical timeline of FTE displacement, Vector DB collapse, and OpEx vs CapEx thresholds.
                    </p>
                    <Link href="/benchmark/ai-capital-2026" className="inline-flex px-8 py-4 bg-zinc-900 border border-cyan-500/30 text-white font-bold text-sm rounded-lg hover:bg-cyan-950/20 transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]">
                        Read The Open Data Report →
                    </Link>
                </section>

                <section className="section max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-white mb-4 font-grotesk">Want Personalized Analysis?</h2>
                    <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
                        The benchmark tells you where the industry stands. A diagnostic tells you where <span className="text-white font-semibold">you</span> stand.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/tools/pdi" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-all">
                            Run Free PDI Calculator
                        </Link>
                        <Link href="/advisory" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-sm rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                            Book Diagnostic Call <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}

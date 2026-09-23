import SocialShare from './SocialShare';

interface Framework {
    slug: string;
    name: string;
    definition: string;
    whyItMatters: string;
    howToCalculate?: string[];
    relatedArticles: {
        title: string;
        publication: string;
        date: string;
        url: string;
    }[];
    relatedTool?: {
        name: string;
        url: string;
    };
}

export default function FrameworkDefinition({ framework }: { framework: Framework }) {
    // JSON-LD schema for the defined term
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "name": framework.name,
        "description": framework.definition,
        "inDefinedTermSet": {
            "@type": "DefinedTermSet",
            "name": "AI Economist Framework",
            "url": "https://www.richardewing.io/articles/frameworks"
        },
        "creator": {
            "@type": "Person",
            "name": "Richard Ewing",
            "jobTitle": "AI Economist",
            "url": "https://www.richardewing.io"
        },
        "url": `https://www.richardewing.io/articles/frameworks/${framework.slug}`
    };

    return (
        <main className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="page-container">

                {/* Breadcrumb */}
                <div className="py-8">
                    <a href="/articles" className="text-zinc-950 font-bold hover:text-zinc-900 text-sm font-semibold font-mono transition-colors">
                        ← Back to Canonical Hub
                    </a>
                </div>

                {/* Header */}
                <section className="section-sm">
                    <div className="max-w-3xl">
                        <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-4 font-mono">
                            Framework Definition
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 font-grotesk leading-tight">
                            {framework.name}
                        </h1>
                        <p className="text-zinc-950 mb-6">
                            Coined by <span className="text-zinc-900">Richard Ewing</span>, AI Economist
                        </p>
                        <SocialShare url={`https://www.richardewing.io/articles/frameworks/${framework.slug}`} title={framework.name} />
                    </div>
                </section>

                {/* Definition */}
                <section className="section-sm">
                    <div className="max-w-3xl">
                        <h2 className="text-xl font-bold text-cyan-950 mb-4 font-grotesk">Definition</h2>
                        <div className="p-6 bg-white border-l-4 border-cyan-500 rounded-r-xl shadow-sm">
                            <p className="text-xl text-zinc-950 leading-relaxed font-serif italic">
                                {framework.definition}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mathematical Axioms & Dedicated Formula Modules */}
                {framework.slug === 'return-on-ai-investment' && (
                    <section className="section-sm">
                        <div className="max-w-3xl p-6 rounded-2xl border-2 border-cyan-500/40 bg-white shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-950 bg-cyan-100 px-3 py-1 rounded border border-cyan-300">
                                    Mathematical Axiom
                                </span>
                                <span className="text-xs font-mono font-bold text-zinc-600">The ROAI Equation</span>
                            </div>
                            <div className="p-4 bg-zinc-950 text-cyan-300 font-mono text-sm sm:text-base rounded-xl overflow-x-auto my-3 text-center shadow-inner">
                                ROAI = (Δ Gross Profit Attributable to AI - Synthetic COGS) / Capital Invested
                            </div>
                            <p className="text-sm text-zinc-800 leading-relaxed font-medium mt-3">
                                <strong>The Margin Collapse Law:</strong> Moving AI accuracy from 85% to 95% triggers an exponential 10x compute cost increase. If incremental revenue lift does not outpace Synthetic COGS, every user interaction carries Negative Carry.
                            </p>
                            <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-wrap gap-4">
                                <a href="/tools/aueb" className="px-5 py-2.5 rounded-lg bg-cyan-600 text-white font-bold text-sm hover:bg-cyan-700 transition shadow">
                                    Run AUEB Benchmark Calculator →
                                </a>
                                <a href="/services" className="px-5 py-2.5 rounded-lg bg-zinc-900 text-white font-bold text-sm hover:bg-zinc-800 transition shadow">
                                    Boardroom R&amp;D Capital Audit →
                                </a>
                            </div>
                        </div>
                    </section>
                )}

                {framework.slug === 'technical-insolvency-date' && (
                    <section className="section-sm">
                        <div className="max-w-3xl p-6 rounded-2xl border-2 border-red-500/40 bg-white shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-950 bg-red-100 px-3 py-1 rounded border border-red-300">
                                    Mathematical Axiom
                                </span>
                                <span className="text-xs font-mono font-bold text-zinc-600">The TID Projection</span>
                            </div>
                            <div className="p-4 bg-zinc-950 text-amber-300 font-mono text-sm sm:text-base rounded-xl overflow-x-auto my-3 text-center shadow-inner">
                                TID = Current Quarter + (100% - Current Maintenance %) / QoQ Maintenance Growth Rate
                            </div>
                            <p className="text-sm text-zinc-800 leading-relaxed font-medium mt-3">
                                <strong>The Stagnation Threshold:</strong> At the Technical Insolvency Date, maintenance burden consumes 100% of engineering bandwidth. New feature velocity mathematically stops. R&amp;D expenditure converts into pure operational maintenance.
                            </p>
                            <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-wrap gap-4">
                                <a href="/tools/pdi" className="px-5 py-2.5 rounded-lg bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 transition shadow">
                                    Calculate Your Organization's TID →
                                </a>
                                <a href="/api/buy/insolvency_diagnostic" className="px-5 py-2.5 rounded-lg bg-red-700 text-white font-bold text-sm hover:bg-red-800 transition shadow">
                                    Book 60-Min Insolvency Audit ($2,500) →
                                </a>
                            </div>
                        </div>
                    </section>
                )}

                {framework.slug === 'synthetic-cogs' && (
                    <section className="section-sm">
                        <div className="max-w-3xl p-6 rounded-2xl border-2 border-purple-500/40 bg-white shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-950 bg-purple-100 px-3 py-1 rounded border border-purple-300">
                                    Mathematical Axiom
                                </span>
                                <span className="text-xs font-mono font-bold text-zinc-600">Unit COGS Breakdown</span>
                            </div>
                            <div className="p-4 bg-zinc-950 text-purple-300 font-mono text-sm sm:text-base rounded-xl overflow-x-auto my-3 text-center shadow-inner">
                                Synthetic COGS = Embedding Cost + Vector Search + Prompt Tokens + Completion Tokens + Dynamic Evals
                            </div>
                            <p className="text-sm text-zinc-800 leading-relaxed font-medium mt-3">
                                <strong>The Zero-Marginal-Cost Death:</strong> AI SaaS is an extraction business, not pure cloud hosting. Every user query consumes non-zero hardware cycles and API tokens.
                            </p>
                            <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-wrap gap-4">
                                <a href="/tools/aueb" className="px-5 py-2.5 rounded-lg bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 transition shadow">
                                    Benchmark Synthetic COGS →
                                </a>
                            </div>
                        </div>
                    </section>
                )}

                {/* Why It Matters */}
                <section className="section-sm">
                    <div className="max-w-3xl">
                        <h2 className="text-xl font-bold text-purple-950 mb-4 font-grotesk">Why It Matters</h2>
                        <p className="text-zinc-950 font-medium leading-relaxed text-lg">
                            {framework.whyItMatters}
                        </p>
                    </div>
                </section>

                {/* How to Calculate (if applicable) */}
                {framework.howToCalculate && (
                    <section className="section-sm">
                        <div className="max-w-3xl">
                            <h2 className="text-xl font-bold text-emerald-950 mb-4 font-grotesk">How to Calculate</h2>
                            <ol className="space-y-4">
                                {framework.howToCalculate.map((step, i) => (
                                    <li key={i} className="flex gap-4 text-zinc-900 font-medium">
                                        <span className="text-emerald-700 font-mono font-bold bg-emerald-100 px-2 py-0.5 rounded h-fit">{i + 1}</span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>
                )}

                {/* Related Articles */}
                <section className="section-sm">
                    <div className="max-w-3xl">
                        <h2 className="text-lg font-semibold text-zinc-950 mb-4 font-grotesk border-b border-zinc-400 pb-2">Related Articles</h2>
                        <ul className="space-y-4">
                            {framework.relatedArticles.map((article, i) => (
                                <li key={i} className="group">
                                    <a href={article.url} className="text-lg text-zinc-950 group-hover:text-purple-900 font-extrabold font-semibold transition-colors font-semibold block mb-1">
                                        "{article.title}"
                                    </a>
                                    <span className="text-zinc-950 text-sm font-semibold font-mono"> - {article.publication}, {article.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Deep Dive on the Blog */}
                <section className="section-sm mt-8">
                    <div className="max-w-3xl p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                        <h2 className="text-lg font-semibold text-cyan-900 font-extrabold font-semibold mb-2 font-grotesk">Deep Dive on the Blog</h2>
                        <p className="text-zinc-950 font-bold mb-4">Explore the latest analysis and practical applications of this framework on the engineering economics blog.</p>
                        <a href="/blog" className="inline-block px-6 py-2 rounded-lg bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition-colors shadow-sm">
                            Search the Blog Archive →
                        </a>
                    </div>
                </section>

                {/* Related Tool */}
                {framework.relatedTool && (
                    <section className="section my-8">
                        <div className="max-w-3xl card-featured border-purple-500/50 p-8">
                            <h2 className="text-lg font-semibold text-purple-900 font-extrabold font-semibold mb-2 font-grotesk">Calculate Yours</h2>
                            <p className="text-zinc-950 font-bold mb-6">Use the interactive tool to calculate your {framework.name}.</p>
                            <a
                                href={framework.relatedTool.url}
                                className="inline-block px-6 py-3 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors shadow-sm"
                            >
                                Use the {framework.relatedTool.name} →
                            </a>
                        </div>
                    </section>
                )}

                {/* Citation */}
                <section className="section-sm pb-20">
                    <div className="max-w-3xl">
                        <h2 className="text-sm font-semibold text-zinc-950 mb-4 font-mono uppercase tracking-widest">Citation</h2>
                        <div className="card bg-white/50 p-6 border-zinc-400">
                            <p className="text-zinc-950 text-xs font-bold mb-4 uppercase">To cite this definition:</p>
                            <p className="text-zinc-950 font-bold font-mono text-sm font-semibold break-all">
                                Ewing, R. (2026). "{framework.name}." richardewing.io.<br />
                                https://www.richardewing.io/articles/frameworks/{framework.slug}
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

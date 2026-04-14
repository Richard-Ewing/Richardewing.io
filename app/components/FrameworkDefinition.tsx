
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
            "name": "Product Economist Framework",
            "url": "https://www.richardewing.io/articles/frameworks"
        },
        "creator": {
            "@type": "Person",
            "name": "Richard Ewing",
            "jobTitle": "Product Economist",
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
                    <a href="/articles" className="text-zinc-800 hover:text-zinc-900 text-sm font-mono transition-colors">
                        ← Back to Canonical Hub
                    </a>
                </div>

                {/* Header */}
                <section className="section-sm">
                    <div className="max-w-3xl">
                        <div className="text-xs text-purple-400 uppercase tracking-wide mb-4 font-mono">
                            Framework Definition
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 font-grotesk leading-tight">
                            {framework.name}
                        </h1>
                        <p className="text-zinc-950">
                            Coined by <span className="text-zinc-900">Richard Ewing</span>, Product Economist
                        </p>
                    </div>
                </section>

                {/* Definition */}
                <section className="section-sm">
                    <div className="max-w-3xl">
                        <h2 className="text-lg font-semibold text-cyan-400 mb-4 font-grotesk">Definition</h2>
                        <div className="p-6 bg-white/5 border-l-4 border-cyan-400 rounded-r-lg">
                            <p className="text-xl text-zinc-950 leading-relaxed font-serif italic">
                                {framework.definition}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why It Matters */}
                <section className="section-sm">
                    <div className="max-w-3xl">
                        <h2 className="text-lg font-semibold text-purple-400 mb-4 font-grotesk">Why It Matters</h2>
                        <p className="text-zinc-800 leading-relaxed text-lg">
                            {framework.whyItMatters}
                        </p>
                    </div>
                </section>

                {/* How to Calculate (if applicable) */}
                {framework.howToCalculate && (
                    <section className="section-sm">
                        <div className="max-w-3xl">
                            <h2 className="text-lg font-semibold text-green-400 mb-4 font-grotesk">How to Calculate</h2>
                            <ol className="space-y-4">
                                {framework.howToCalculate.map((step, i) => (
                                    <li key={i} className="flex gap-4 text-zinc-950">
                                        <span className="text-green-500 font-mono font-bold bg-green-900/20 px-2 rounded">{i + 1}</span>
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
                                    <a href={article.url} className="text-lg text-zinc-950 group-hover:text-purple-400 transition-colors font-semibold block mb-1">
                                        "{article.title}"
                                    </a>
                                    <span className="text-zinc-950 text-sm font-mono"> — {article.publication}, {article.date}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Related Tool */}
                {framework.relatedTool && (
                    <section className="section my-8">
                        <div className="max-w-3xl card-featured border-purple-500/50 p-8">
                            <h2 className="text-lg font-semibold text-purple-400 mb-2 font-grotesk">Calculate Yours</h2>
                            <p className="text-zinc-800 mb-6">Use the interactive tool to calculate your {framework.name}.</p>
                            <a
                                href={framework.relatedTool.url}
                                className="inline-block px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
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
                            <p className="text-zinc-950 text-xs mb-4 uppercase">To cite this definition:</p>
                            <p className="text-zinc-800 font-mono text-sm break-all">
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

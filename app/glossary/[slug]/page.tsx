import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '../terms';
import RelatedContent from '../../components/RelatedContent';
import GlossaryToolCTA from '../../components/GlossaryToolCTA';
import ShareButtons from '../../components/ShareButtons';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return glossaryTerms.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const term = glossaryTerms.find(t => t.slug === slug);
    if (!term) return {};
    return {
        title: `What is ${term.title}? | Definition & Guide | Richard Ewing`,
        description: term.definition.slice(0, 155).replace(/\n/g, ' ') + '...',
        keywords: [
            term.title.toLowerCase(), `what is ${term.title.toLowerCase()}`,
            `${term.title.toLowerCase()} definition`, `${term.title.toLowerCase()} explained`,
            `${term.title.toLowerCase()} guide`, 'Richard Ewing', 'Product Economist',
            ...term.relatedTerms.map(r => r.replace(/-/g, ' ')),
        ],
        alternates: { canonical: `https://www.richardewing.io/glossary/${slug}` },
        openGraph: {
            title: `What is ${term.title}? | Richard Ewing`,
            description: term.definition.slice(0, 155).replace(/\n/g, ' '),
            url: `https://www.richardewing.io/glossary/${slug}`,
            type: 'article',
        },
    };
}

export default async function GlossaryTermPage({ params }: Props) {
    const { slug } = await params;
    const term = glossaryTerms.find(t => t.slug === slug);
    if (!term) return notFound();

    const relatedTermObjects = term.relatedTerms
        .map(r => glossaryTerms.find(t => t.slug === r))
        .filter(Boolean);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: term.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `What is ${term.title}?`,
        description: term.definition.slice(0, 155).replace(/\n/g, ' '),
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
        publisher: { '@type': 'Person', name: 'Richard Ewing' },
        url: `https://www.richardewing.io/glossary/${slug}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.richardewing.io/glossary/${slug}` },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://www.richardewing.io/glossary' },
            { '@type': 'ListItem', position: 3, name: term.title, item: `https://www.richardewing.io/glossary/${slug}` },
        ],
    };

    return (
        <div className="max-w-4xl w-full relative z-10 mx-auto">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/glossary" className="hover:text-cyan-400">Glossary</Link>
                <span>/</span>
                <span className="text-cyan-400 font-bold">{term.title}</span>
            </div>

            <article>
                <header className="mb-10 border-b border-white/10 pb-10">
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest">{term.category}</div>
                        <ShareButtons url={`/glossary/${slug}`} title={`What is ${term.title}?`} />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">
                        What is {term.title}?
                    </h1>
                </header>

                <section className="mb-12">
                    <div className="prose prose-invert prose-lg max-w-none">
                        {term.definition.split('\n\n').map((p, i) => (
                            <p key={i} className="text-zinc-300 leading-relaxed mb-4"
                               dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }}
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-12 card p-8 border-cyan-500/20">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Why It Matters</h2>
                    <div className="prose prose-invert max-w-none">
                        {term.whyItMatters.split('\n\n').map((p, i) => (
                            <p key={i} className="text-zinc-300 leading-relaxed mb-4">{p}</p>
                        ))}
                    </div>
                </section>

                {term.howToMeasure && (
                    <section className="mb-12 card p-8 border-emerald-500/20">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">How to Measure</h2>
                        <div className="prose prose-invert max-w-none">
                            {term.howToMeasure.split('\n').map((line, i) => (
                                <p key={i} className="text-zinc-300 leading-relaxed mb-2">{line}</p>
                            ))}
                        </div>
                    </section>
                )}

                {term.faqs.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {term.faqs.map((faq, i) => (
                                <div key={i} className="card p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                                    <p className="text-zinc-400">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {term.relatedTools && term.relatedTools.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Free Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {term.relatedTools.map(tool => (
                                <Link key={tool.url} href={tool.url} className="card p-5 hover:border-cyan-500/50 transition-all group">
                                    <div className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{tool.name}</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-cyan-500 mt-2">Try Free →</div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {relatedTermObjects.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Related Terms</h2>
                        <div className="flex flex-wrap gap-3">
                            {relatedTermObjects.map(rt => rt && (
                                <Link key={rt.slug} href={`/glossary/${rt.slug}`}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                                    {rt.title}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <GlossaryToolCTA slug={slug} category={term.category} termTitle={term.title} />

                <section className="card p-8 border-cobalt/30 bg-gradient-to-br from-cobalt/10 to-transparent">
                    <h2 className="text-xl font-grotesk font-bold text-white mb-2">Need Expert Help?</h2>
                    <p className="text-zinc-400 mb-4">Richard Ewing is a Product Economist and AI Capital Auditor. He helps companies translate technical complexity into financial clarity.</p>
                    <Link href="/advisory" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cobalt text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
                        Book Advisory Call →
                    </Link>
                </section>

                <RelatedContent currentPath={`/glossary/${slug}`} category={term.category} />
            </article>
        </div>
    );
}

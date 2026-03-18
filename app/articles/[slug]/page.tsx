import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '../../lib/data';
import { articleSchemaTemplate } from '../../lib/schemas';

interface Props {
    params: {
        slug: string;
    };
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${article.title} | Richard Ewing`,
        description: article.description,
        keywords: [
            'Richard Ewing',
            'product economist',
            article.source.toLowerCase(),
            'engineering economics',
            'R&D capital',
        ],
        alternates: {
            canonical: article.externalUrl || `https://richardewing.io/articles/${article.slug}`,
        },
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
            publishedTime: article.date,
            authors: ['Richard Ewing'],
            url: `https://richardewing.io/articles/${article.slug}`,
        },
        twitter: {
            card: 'summary',
            title: `${article.title} | Richard Ewing`,
            description: article.description,
        },
    };
}

export default function ArticlePage({ params }: Props) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        return notFound();
    }

    // JSON-LD
    const jsonLd = articleSchemaTemplate(
        article.title,
        article.description,
        `https://richardewing.io/articles/${article.slug}`,
        article.date
    );

    return (
        <div className="max-w-3xl mx-auto relative z-10 pt-12 pb-24">
            {/* JSON-LD Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/articles" className="hover:text-white transition-colors">Canonical Hub</Link>
                <span>/</span>
                <span className="text-cyan-400 font-bold truncate">{article.title}</span>
            </div>

            {/* Header */}
            <header className="mb-12 border-b border-white/10 pb-12">
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                        {article.source}
                    </span>
                    <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                        {article.readTime}
                    </span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-grotesk font-bold text-white mb-6 leading-tight">
                    {article.title}
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed font-serif italic">
                    {article.description}
                </p>
            </header>

            {/* Content Placeholder / Fallback */}
            <div className="prose prose-invert prose-lg max-w-none">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl mb-12">
                    <h3 className="text-xl font-bold text-white mb-4 font-grotesk">Full Text Available in Archive</h3>
                    <p className="text-zinc-400 text-sm mb-6">
                        This article was originally published on <strong>{article.source}</strong>.
                        You can read the full text in its original format or view the local archival copy.
                    </p>
                    <div className="flex gap-4">
                        {article.legacyUrl && (
                            <a
                                href={article.legacyUrl}
                                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest text-xs rounded-lg transition-colors"
                            >
                                Read Archival Copy
                            </a>
                        )}
                        <Link href="/briefings" className="px-6 py-3 border border-white/20 hover:border-white/50 text-white font-bold uppercase tracking-widest text-xs rounded-lg transition-colors">
                            View All Briefings
                        </Link>
                    </div>
                </div>

                {/* Simulated Content Snippet if available */}
                {article.content && (
                    <div className="opacity-75" dangerouslySetInnerHTML={{ __html: article.content }} />
                )}
            </div>

            <div className="mt-20 pt-12 border-t border-white/10">
                <Link href="/articles" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-mono uppercase tracking-widest">
                    ← Back to Canonical Hub
                </Link>
            </div>
        </div>
    );
}

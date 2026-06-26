import { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { permanentRedirect } from 'next/navigation';
import { articles } from '../../lib/data';
import { articleSchemaTemplate } from '../../lib/schemas';
import ArticleUpsell from '../../components/ArticleUpsell';
import ProgrammaticAnswersRelated from '@/components/ProgrammaticAnswersRelated';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const article = articles.find((a) => a.slug === resolvedParams.slug);

    if (!article) {
        return {
            title: `Article Not Found: ${resolvedParams.slug}`,
            description: `The requested article ${resolvedParams.slug} could not be found.`,
        };
    }

    return {
        title: `${article.title} | Richard Ewing`,
        description: article.description,
        keywords: [
            'Richard Ewing',
            'AI economist',
            article.source.toLowerCase(),
            'engineering economics',
            'R&D capital',
        ],
        alternates: {
            canonical: article.externalUrl || `https://www.richardewing.io/articles/${article.slug}`,
        },
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
            publishedTime: article.date,
            authors: ['Richard Ewing'],
            url: `https://www.richardewing.io/articles/${article.slug}`,
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${article.title} | Richard Ewing`,
            description: article.description,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        },
    };
}

export default async function ArticlePage({ params }: Props) {
    const resolvedParams = await params;
    const article = articles.find((a) => a.slug === resolvedParams.slug);

    if (!article) {
        return permanentRedirect('/articles');
    }

    // JSON-LD
    const jsonLd = articleSchemaTemplate(
        article.title,
        article.description,
        `https://www.richardewing.io/articles/${article.slug}`,
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
            <div className="mb-8 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <Link href="/articles" className="hover:text-zinc-900 transition-colors">Canonical Hub</Link>
                <span>/</span>
                <span className="text-cyan-900 font-extrabold font-semibold font-bold truncate">{article.title}</span>
            </div>

            {/* Header */}
            <header className="mb-12 border-b border-zinc-400 pb-12">
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-900 font-extrabold font-semibold text-xs font-bold font-mono uppercase tracking-widest">
                        {article.source}
                    </span>
                    <span className="text-zinc-950 font-bold text-xs font-bold font-mono uppercase tracking-widest">
                        {article.readTime}
                    </span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6 leading-tight">
                    {article.title}
                </h1>
                <p className="text-xl text-zinc-950 font-bold leading-relaxed font-serif italic">
                    {article.description}
                </p>
            </header>

            {/* Content Placeholder / Fallback */}
            <div className="prose prose-zinc prose-lg max-w-none">
                <div className="p-8 bg-white/5 border border-zinc-400 rounded-2xl mb-12">
                    <h3 className="text-xl font-bold text-zinc-950 mb-4 font-grotesk">Full Text Available in Archive</h3>
                    <p className="text-zinc-950 font-bold text-sm font-semibold mb-6">
                        This article was originally published on <strong>{article.source}</strong>.
                        You can read the full text in its original format or view the local archival copy.
                    </p>
                    <div className="flex gap-4">
                        {article.legacyUrl && (
                            <a
                                href={article.legacyUrl}
                                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-zinc-950 font-semibold font-bold uppercase tracking-widest text-xs font-bold rounded-lg transition-colors"
                            >
                                Read Archival Copy
                            </a>
                        )}
                        <Link href="/briefings" className="px-6 py-3 border border-white/20 hover:border-zinc-400 text-zinc-950 font-bold uppercase tracking-widest text-xs font-bold rounded-lg transition-colors">
                            View All Briefings
                        </Link>
                    </div>
                </div>

                {/* Simulated Content Snippet if available */}
                {article.content && (
                    <div className="opacity-75" dangerouslySetInnerHTML={{ __html: article.content }} />
                )}
            </div>

            {/* Contextual Upsell Engine */}
            <ArticleUpsell 
                productId={
                    resolvedParams.slug.includes('rd') || resolvedParams.slug.includes('innov') ? 'module_rd_capital' :
                    resolvedParams.slug.includes('ai') || resolvedParams.slug.includes('model') ? 'module_ai_economics' :
                    resolvedParams.slug.includes('debt') || resolvedParams.slug.includes('dora') ? 'module_engineering' :
                    'premium_guide_99'
                }
                headline={
                    resolvedParams.slug.includes('ai') ? 'Secure Your AI Profitability.' :
                    resolvedParams.slug.includes('debt') ? 'Refactor your technical debt permanently.' :
                    'Ready to execute this architecture?'
                }
                description="Download the exact execution models, deployment checklists, and financial breakdown frameworks used by tier-1 engineering organizations."
            />

            <ProgrammaticAnswersRelated seed={resolvedParams.slug} />

            <div className="mt-20 pt-12 border-t border-zinc-400">
                <Link href="/articles" className="text-zinc-950 font-bold hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-semibold font-mono uppercase tracking-widest">
                    ← Back to Canonical Hub
                </Link>
            </div>
        </div>
    );
}

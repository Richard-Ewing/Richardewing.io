import { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { permanentRedirect } from 'next/navigation';
import { articles, frameworks } from '../../lib/data';
import { articleSchemaTemplate } from '../../lib/schemas';
import ArticleUpsell from '../../components/ArticleUpsell';
import ProgrammaticAnswersRelated from '@/components/ProgrammaticAnswersRelated';
import SoftwarePhaseTransitionVisual from '@/app/components/visualizations/SoftwarePhaseTransitionVisual';
import { GooglePreferredBadge } from '@/app/components/GooglePreferredBadge';

import { clampSeoTitle, formatSeoDescription, resolveProseGatedCanonical } from '@/app/lib/seo-metadata';
import { ARTICLE_SLUG_REDIRECTS } from '@/app/lib/article-redirects';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;

    if (ARTICLE_SLUG_REDIRECTS[resolvedParams.slug]) {
        return {
            title: 'Redirecting',
            robots: { index: false, follow: true },
            alternates: {
                canonical: `https://www.richardewing.io${ARTICLE_SLUG_REDIRECTS[resolvedParams.slug]}`,
            },
        };
    }

    if (frameworks.some((f) => f.slug === resolvedParams.slug)) {
        return {
            title: 'Redirecting',
            robots: { index: false, follow: true },
            alternates: {
                canonical: `https://www.richardewing.io/articles/frameworks/${resolvedParams.slug}`,
            },
        };
    }

    const article = articles.find((a) => a.slug === resolvedParams.slug);

    if (!article) {
        return {
            title: 'Article Not Found',
            description: formatSeoDescription(`The requested article could not be found in Richard Ewing's publication archive.`),
        };
    }

    const selfUrl = `https://www.richardewing.io/articles/${article.slug}`;
    const canonicalUrl = resolveProseGatedCanonical(article.externalUrl, selfUrl, article.content || '');
    const baseTitle = clampSeoTitle(article.title, 42);
    const metaDescription = formatSeoDescription(article.description);
    const ogUrl = `https://www.richardewing.io/api/og?title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(article.source || 'Published Work')}`;

    return {
        title: baseTitle,
        description: metaDescription,
        keywords: [
            'Richard Ewing',
            'AI economist',
            article.source.toLowerCase(),
            'engineering economics',
            'R&D capital',
        ],
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${baseTitle} | Richard Ewing`,
            description: metaDescription,
            type: 'article',
            publishedTime: article.date,
            authors: ['Richard Ewing'],
            url: canonicalUrl,
            images: [{ url: ogUrl, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${baseTitle} | Richard Ewing`,
            description: metaDescription,
            images: [ogUrl],
        },
    };
}

export async function generateStaticParams() {
    const seen = new Set<string>();
    return articles
        .filter((article) => {
            if (ARTICLE_SLUG_REDIRECTS[article.slug]) return false;
            if (frameworks.some((f) => f.slug === article.slug)) return false;
            if (seen.has(article.slug)) return false;
            seen.add(article.slug);
            return true;
        })
        .map((article) => ({
            slug: article.slug,
        }));
}

export default async function ArticlePage({ params }: Props) {
    const resolvedParams = await params;

    if (ARTICLE_SLUG_REDIRECTS[resolvedParams.slug]) {
        return permanentRedirect(ARTICLE_SLUG_REDIRECTS[resolvedParams.slug]);
    }

    if (frameworks.some((f) => f.slug === resolvedParams.slug)) {
        return permanentRedirect(`/articles/frameworks/${resolvedParams.slug}`);
    }

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
        <div className="max-w-4xl mx-auto relative z-10 pt-16 pb-24 px-6">
            {/* JSON-LD Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-xs font-mono font-bold text-[var(--muted,#66716a)] uppercase tracking-widest">
                <Link href="/articles" className="hover:text-[var(--forest,#29473b)] transition-colors">Canonical Hub</Link>
                <span>/</span>
                <span className="text-[var(--forest,#29473b)] truncate">{article.title}</span>
            </div>

            {/* Header */}
            <header className="mb-12 border-b border-[var(--line,rgba(36,51,43,0.16))] pb-10">
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full border border-[var(--forest,#29473b)]/20 bg-[var(--forest,#29473b)]/10 text-[var(--forest,#29473b)] text-xs font-mono font-bold uppercase tracking-widest">
                        {article.source}
                    </span>
                    <span className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
                        {article.readTime}
                    </span>
                    {article.date && (
                        <span className="text-zinc-500 text-xs font-mono">
                            {article.date}
                        </span>
                    )}
                </div>
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[var(--ink,#1e2924)] mb-6 leading-tight">
                    {article.title}
                </h1>
                <p className="text-xl text-zinc-700 leading-relaxed font-serif italic">
                    {article.description}
                </p>
            </header>

            {/* Content Container */}
            <div className="space-y-8">
                <div className="p-8 bg-white border border-[var(--line,rgba(36,51,43,0.16))] rounded-2xl shadow-sm mb-10">
                    <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-wider mb-2">
                        <span>Original Publication Archive</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-[var(--ink,#1e2924)] mb-3">
                        Full Text Available in Archival Format
                    </h3>
                    <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-sans">
                        This article was originally published on <strong>{article.source}</strong>.
                        You can read the full text in its original format or inspect the local archival copy.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {article.legacyUrl && (
                            <a
                                href={article.legacyUrl}
                                className="button button-gold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Archival Copy ↗
                            </a>
                        )}
                        <Link href="/briefings" className="button button-outline">
                            View All Briefings
                        </Link>
                    </div>
                </div>

                {/* Simulated Content Snippet if available */}
                {article.content && (
                    <div className="prose prose-zinc max-w-none font-sans text-zinc-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />
                )}

                {resolvedParams.slug === 'software-cost-zero-product-economist' && (
                    <div className="my-8">
                        <SoftwarePhaseTransitionVisual />
                    </div>
                )}
            </div>

            {/* Google Preferred Source AEO Callout */}
            <div className="my-10">
                <GooglePreferredBadge variant="card" />
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

            <div className="mt-16 pt-8 border-t border-[var(--line,rgba(36,51,43,0.16))]">
                <Link href="/articles" className="text-[var(--forest,#29473b)] font-bold hover:text-[var(--forest2,#162e26)] transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                    ← Back to Canonical Hub
                </Link>
            </div>
        </div>
    );
}

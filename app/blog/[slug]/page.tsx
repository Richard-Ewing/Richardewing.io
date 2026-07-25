import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { permanentRedirect } from 'next/navigation';
import SocialShare from '@/components/SocialShare';
import { allArticles, getSortedArticles } from '@/lib/blog-data';
import { categoryColors } from '@/lib/blog-types';
import { frameworks } from '@/app/lib/data';
import GovernancePathways from '@/components/semantic/GovernancePathways';
import RelatedContent from '@/components/RelatedContent';

export async function generateStaticParams() {
    return Object.keys(allArticles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const article = allArticles[slug];
    if (!article) {
        return {
            title: `Blog Post Not Found: ${slug}`,
            description: `The requested blog post ${slug} could not be found.`,
        };
    }
    
    const canonicalURL = article.canonicalUrl || `https://www.richardewing.io/blog/${slug}`;
    
    return {
        title: {
            absolute: `${article.title} | Richard Ewing`
        },
        description: article.excerpt,
        alternates: { canonical: canonicalURL },
        openGraph: {
            title: article.title,
            description: article.excerpt,
            url: canonicalURL,
            type: 'article',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

function getRelatedArticles(currentSlug: string, category: string, count: number = 3) {
    return getSortedArticles()
        .filter(a => a.slug !== currentSlug && a.category === category)
        .slice(0, count);
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = allArticles[slug];
    if (!article) permanentRedirect('/blog');

    const catColor = categoryColors[article.category] || 'text-zinc-950 font-bold bg-zinc-500/10 border-zinc-500/20';
    const related = getRelatedArticles(slug, article.category);
    const recommendedFrameworks = frameworks.filter((_, i) => (slug.length + i) % 3 === 0).slice(0, 2);
    if (recommendedFrameworks.length < 2) {
        recommendedFrameworks.push(...frameworks.slice(0, 2 - recommendedFrameworks.length));
    }

    return (
        <main className="pt-24 pb-20">
            <div className="page-container max-w-3xl mx-auto">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 font-bold mb-8">
                    <Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog</Link>
                    <span>→</span>
                    <span className="text-zinc-950 font-bold">{article.category}</span>
                </div>

                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${catColor}`}>{article.category}</span>
                        <span className="text-xs font-bold text-zinc-950">{article.readTime} read</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-grotesk font-bold text-zinc-950 mb-4 leading-tight">{article.title}</h1>
                    <p className="text-lg text-zinc-950 font-bold leading-relaxed mb-6">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs font-bold text-zinc-900 font-bold">
                        <span>By Richard Ewing</span>
                        <span>·</span>
                        <time>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                    </div>
                    <div className="mt-6">
                        <SocialShare url={`https://www.richardewing.io/blog/${slug}`} title={article.title} />
                    </div>
                </header>

                <article className="prose prose-zinc prose-zinc max-w-none
                    prose-headings:font-grotesk prose-headings:text-zinc-900
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-zinc-950 font-bold prose-p:leading-relaxed prose-p:text-base
                    prose-strong:text-zinc-900
                    prose-a:text-cyan-900 font-extrabold font-semibold prose-a:no-underline hover:prose-a:underline
                    prose-li:text-zinc-950 font-bold
                    prose-table:text-sm
                    prose-th:text-zinc-950 font-bold prose-th:border-zinc-300 prose-th:px-4 prose-th:py-2
                    prose-td:text-zinc-950 font-bold prose-td:border-zinc-200 prose-td:px-4 prose-td:py-2
                    prose-code:text-violet-400 prose-code:bg-violet-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-hr:border-zinc-200
                ">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </article>

                {/* Inline Newsletter CTA */}
                <div className="my-12 p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-center">
                    <p className="text-zinc-950 font-semibold mb-2">Like this analysis?</p>
                    <p className="text-sm font-semibold text-zinc-900 font-medium mb-4">Get the weekly engineering economics briefing — one email, every Monday.</p>
                    <a href="https://theaieconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer"
                        className="inline-block px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-violet-600 text-zinc-950 font-semibold font-bold text-sm font-semibold hover:opacity-90 transition-opacity">
                        Subscribe Free →
                    </a>
                </div>

                {/* Related Articles */}
                {related.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-6">More in {article.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {related.map(r => (
                                <Link key={r.slug} href={`/blog/${r.slug}`}
                                    className="group p-5 rounded-xl border border-zinc-400 bg-zinc-50 hover:border-white/15 transition-all">
                                    <h3 className="text-sm font-semibold font-bold text-zinc-950 group-hover:text-cyan-900 font-extrabold font-semibold transition-colors mb-2">{r.title}</h3>
                                    <p className="text-xs font-bold text-zinc-900 font-bold line-clamp-2">{r.excerpt}</p>
                                    <span className="text-xs font-bold font-medium text-zinc-950 font-bold mt-2 block">{r.readTime}</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Cross-link to Published Articles & Frameworks */}
                <div className="mb-12">
                    <h2 className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest mb-6">Canonical Frameworks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {recommendedFrameworks.map(fw => (
                            <Link key={fw.slug} href={`/articles/frameworks/${fw.slug}`} className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 transition-colors group">
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2 group-hover:text-purple-900 font-extrabold font-semibold transition-colors">{fw.name}</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium line-clamp-2">{fw.definition}</p>
                                <span className="text-xs font-bold font-medium text-purple-900 font-extrabold font-semibold mt-4 block">Read Definition →</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* --- THE SEMANTIC GATEWAY (HUB AND SPOKE) --- */}
                {article.relatedFailures || article.relatedSkills || article.relatedDiagnostics ? (
                    <GovernancePathways 
                        relatedFailures={article.relatedFailures}
                        relatedSkills={article.relatedSkills}
                        relatedDiagnostics={article.relatedDiagnostics}
                        exogramMapping={article.relatedControls?.[0]} 
                    />
                ) : null}

                {/* Author Box */}
                <div className="mt-12 p-8 rounded-2xl border border-zinc-400 bg-white/[0.03]">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-zinc-400 flex items-center justify-center shrink-0">
                            <span className="text-2xl">📊</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-1">Richard Ewing</h3>
                            <p className="text-sm font-semibold text-zinc-900 font-medium mb-3">The AI Economist — Quantifying engineering economics for technology leaders, PE firms, and boards.</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/advisory" className="text-xs font-bold text-zinc-900 font-bold hover:underline">Book Advisory →</Link>
                                <Link href="/vault/curriculum/tracks" className="text-xs font-bold text-zinc-900 font-bold hover:underline">Curriculum →</Link>
                                <Link href="/tools/pdi" className="text-xs font-bold text-zinc-900 font-bold hover:underline">Free Tools →</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <RelatedContent currentSlug={slug} type="blog" count={3} />
                    <div className="h-8"></div>
                    <Link href="/blog" className="text-sm font-semibold text-zinc-900 font-medium hover:underline">← Back to Blog</Link>
                </div>
            
                    <AdvisoryCTA variant="educational" />
                </div>
        </main>
    );
}

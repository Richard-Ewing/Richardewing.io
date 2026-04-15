import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allArticles, getSortedArticles } from '@/lib/blog-data';
import { categoryColors } from '@/lib/blog-types';

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
        title: `${article.title} | Richard Ewing`,
        description: article.excerpt,
        alternates: { canonical: canonicalURL },
        openGraph: { title: article.title, description: article.excerpt, url: canonicalURL, type: 'article' },
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
    if (!article) notFound();

    const catColor = categoryColors[article.category] || 'text-zinc-600 bg-zinc-500/10 border-zinc-500/20';
    const related = getRelatedArticles(slug, article.category);

    return (
        <main className="pt-24 pb-20">
            <div className="page-container max-w-3xl mx-auto">
                <div className="flex items-center gap-2 text-xs text-zinc-700 mb-8">
                    <Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog</Link>
                    <span>→</span>
                    <span className="text-zinc-800">{article.category}</span>
                </div>

                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${catColor}`}>{article.category}</span>
                        <span className="text-xs text-zinc-950">{article.readTime} read</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-grotesk font-bold text-zinc-950 mb-4 leading-tight">{article.title}</h1>
                    <p className="text-lg text-zinc-600 leading-relaxed mb-6">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-900">
                        <span>By Richard Ewing</span>
                        <span>·</span>
                        <time>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                    </div>
                </header>

                <article className="prose prose-zinc prose-zinc max-w-none
                    prose-headings:font-grotesk prose-headings:text-zinc-900
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:text-base
                    prose-strong:text-zinc-900
                    prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                    prose-li:text-zinc-600
                    prose-table:text-sm
                    prose-th:text-zinc-700 prose-th:border-zinc-700 prose-th:px-4 prose-th:py-2
                    prose-td:text-zinc-600 prose-td:border-zinc-800 prose-td:px-4 prose-td:py-2
                    prose-code:text-violet-400 prose-code:bg-violet-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-hr:border-zinc-800
                ">
                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </article>

                {/* Inline Newsletter CTA */}
                <div className="my-12 p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-center">
                    <p className="text-zinc-950 font-semibold mb-2">Like this analysis?</p>
                    <p className="text-sm text-zinc-600 mb-4">Get the weekly engineering economics briefing — one email, every Monday.</p>
                    <a href="https://theproducteconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer"
                        className="inline-block px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-bold text-sm hover:opacity-90 transition-opacity">
                        Subscribe Free →
                    </a>
                </div>

                {/* Related Articles */}
                {related.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-xs font-mono text-zinc-700 uppercase tracking-widest mb-6">More in {article.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {related.map(r => (
                                <Link key={r.slug} href={`/blog/${r.slug}`}
                                    className="group p-5 rounded-xl border border-zinc-400 bg-zinc-50 hover:border-white/15 transition-all">
                                    <h3 className="text-sm font-bold text-zinc-950 group-hover:text-cyan-300 transition-colors mb-2">{r.title}</h3>
                                    <p className="text-xs text-zinc-700 line-clamp-2">{r.excerpt}</p>
                                    <span className="text-xs font-medium text-zinc-800 mt-2 block">{r.readTime}</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Cross-link to Published Articles */}
                <div className="mb-12 p-6 rounded-xl border border-purple-500/20 bg-purple-500/5">
                    <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-2">Published Work</p>
                    <p className="text-sm text-zinc-800">
                        This article expands on ideas from my published work in <strong className="text-zinc-900">CIO.com</strong>, <strong className="text-zinc-900">Built In</strong>, <strong className="text-zinc-900">Mind the Product</strong>, and <strong className="text-zinc-900">HackerNoon</strong>.{' '}
                        <Link href="/articles" className="text-purple-400 hover:underline">View published articles →</Link>
                    </p>
                </div>

                {/* Author Box */}
                <div className="p-8 rounded-2xl border border-zinc-400 bg-white/[0.03]">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-zinc-400 flex items-center justify-center shrink-0">
                            <span className="text-2xl">📊</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-1">Richard Ewing</h3>
                            <p className="text-sm text-zinc-700 mb-3">The Product Economist — Quantifying engineering economics for technology leaders, PE firms, and boards.</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/advisory" className="text-xs text-cyan-400 hover:underline">Book Advisory →</Link>
                                <Link href="/curriculum/tracks" className="text-xs text-violet-400 hover:underline">Curriculum →</Link>
                                <Link href="/tools/pdi" className="text-xs text-emerald-400 hover:underline">Free Tools →</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <Link href="/blog" className="text-sm text-cyan-400 hover:underline">← Back to Blog</Link>
                </div>
            </div>
        </main>
    );
}

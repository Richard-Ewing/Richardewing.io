import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { permanentRedirect, notFound } from 'next/navigation';
import SocialShare from '@/components/SocialShare';
import { allArticles, getSortedArticles } from '@/lib/blog-data';
import { categoryColors } from '@/lib/blog-types';
import { frameworks } from '@/app/lib/data';
import GovernancePathways from '@/components/semantic/GovernancePathways';
import RelatedContent from '@/components/RelatedContent';
import EditorialAdSlot from '@/components/monetization/EditorialAdSlot';
import CiteThisPage from '@/components/seo/CiteThisPage';
import { articleSchemaTemplate } from '@/app/lib/schemas';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

import { clampSeoTitle, formatSeoDescription, resolveProseGatedCanonical } from '@/app/lib/seo-metadata';
import { BLOG_SLUG_REDIRECTS } from '@/app/lib/article-redirects';

const BLOG_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
    'ai-economics-how-intelligent-systems-make-and-lose-money': {
        title: 'AI Economics: SaaS Profit vs Token Losses',
        description: 'Break down why $29 SaaS AI features lose money on heavy users, how retry loops inflate API bills, and how CFOs and CTOs protect gross margin.',
    },
    'claude-search-tool-zero-adoption': {
        title: 'Why Enterprise Claude Search Gets Zero Use',
        description: 'See why enterprise Claude search rollouts stall at zero adoption and how workflow-embedded triggers beat standalone chat portals.',
    },
    'ai-team-composition-economics': {
        title: 'AI Team Composition: Ratio & Payroll Math',
        description: 'Balance senior architects, ML engineers, and product operators so AI headcount expands gross margin instead of creating coordination drag.',
    },
    'sre-team-economics': {
        title: 'SRE Team Economics: Optimal Ratio & Cost',
        description: 'Benchmark SRE-to-service ratios (1:10 to 1:20), spot 40% to 60% over-hiring traps, and tie reliability budgets directly to downtime cost.',
    },
    'the-transaction-that-succeeds': {
        title: 'The Transaction That Succeeds: AI Risk',
        description: 'In agentic software, failure looks like HTTP 200 OK on an unauthorized refund. See why 98% eval scores hide silent enterprise policy breaches.',
    },
    'security-breach-economics': {
        title: 'The Economics of a Security Breach',
        description: 'Compare average $4.45M breach remediation losses against $400K proactive runtime controls so CFOs and CISOs fund security by expected loss.',
    },
    'board-technology-oversight': {
        title: 'Board Technology Oversight Framework',
        description: 'Replace blind CTO delegation with quarterly board metrics covering R&D capital yield, technical insolvency risk, and AI unit-margin floors.',
    },
    'board-cyber-risk-oversight': {
        title: 'Board Cyber Risk & SEC Disclosure Guide',
        description: 'Structure board-level cybersecurity and AI incident oversight to satisfy SEC disclosure mandates with verifiable runtime audit trails.',
    },
    'stop-being-a-meat-proxy-leader': {
        title: 'Stop Being a Meat-Proxy Leader',
        description: 'I advise CEOs and VPs on why forwarding unedited AI memos kills candor overnight, and how my Human Holdback Rule restores leadership trust.',
    },
    'absorbing-ai-twice-eight-report-cliff': {
        title: 'Absorbing AI Twice & The 8-Report Cliff',
        description: 'We cut management layers assuming AI would coordinate teams. Instead, surviving managers absorb AI twice and snap past eight direct reports.',
    },
    'workslop-tax-botsitting-burnout': {
        title: 'The Workslop Tax & Botsitting Burnout',
        description: 'Why your team loses 6.4 hours a week babysitting AI tools, ships unchecked workslop out of exhaustion, and how one free team rule stops the bleed.',
    },
    'you-have-ai-14-day-deadline-trap': {
        title: 'The "You Have AI" 14-Day Deadline Trap',
        description: 'Boards confuse fast five-file AI demos with production shipping. Here is my delivery scoping brief to stop 14-day deadlines and protect VP trust.',
    },
    'rebuilding-internal-social-permission': {
        title: 'Rebuilding Internal Social Permission',
        description: 'Nearly half of workers fake AI fluency out of layoff fear. Use my unscripted town-hall Q&A script to kill AI theater and get honest answers.',
    },
    'death-of-headcount-empire-building': {
        title: 'The Death of Empire Building',
        description: 'Decoupling pay and status from headcount breaks old manager incentives. Use this player-coach scorecard to shift leaders from status chasing.',
    },
    'stop-putting-ai-agents-on-org-chart': {
        title: 'Keep AI Agents Off Your Org Chart',
        description: 'Putting AI agents beside people creates blame deflection when workflows break. Use this human accountability matrix to assign one real owner.',
    },
    'mission-is-the-boss-flatter-orgs': {
        title: '"Mission Is the Boss" in Flatter Orgs',
        description: 'Traditional 1893 pyramid org charts stall modern delivery speed. Backtrack from customer outcomes using small pods and clear escalation rules.',
    },
    'ai-brain-fry-and-the-unblinking-ear': {
        title: 'AI Brain Fry and the Unblinking Ear',
        description: 'Constant agent review causes AI brain fry while lingering meeting bots create legal discovery risk. Adopt my AI-Quiet Hours and consent rules.',
    },
    'eating-your-seed-corn-junior-rungs': {
        title: 'Fixing the Broken Junior Career Rung',
        description: 'Automating entry-level boilerplate destroys your future senior talent pipeline. Pair junior builders with staff leads using reverse mentoring.',
    },
};

export const dynamicParams = false;

export async function generateStaticParams() {
    return Object.keys(allArticles)
        .filter((slug) => !BLOG_SLUG_REDIRECTS[slug])
        .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    if (BLOG_SLUG_REDIRECTS[slug]) {
        return {
            title: 'Redirecting',
            robots: { index: false, follow: true },
            alternates: { canonical: `https://www.richardewing.io${BLOG_SLUG_REDIRECTS[slug]}` },
        };
    }

    const article = allArticles[slug];
    if (!article) {
        return {
            title: 'Blog Post Not Found',
            description: formatSeoDescription(`The requested executive briefing could not be found on Richard Ewing's research index.`),
        };
    }

    const selfUrl = `https://www.richardewing.io/blog/${slug}`;
    const canonicalURL = resolveProseGatedCanonical(article.canonicalUrl, selfUrl, article.content || '');
    const override = BLOG_SEO_OVERRIDES[slug];
    const baseTitle = override ? clampSeoTitle(override.title, 42) : clampSeoTitle(article.title, 42);
    const metaDescription = override
        ? formatSeoDescription(override.description)
        : formatSeoDescription(article.excerpt, article.content || '');
    const ogUrl = `https://www.richardewing.io/api/og?title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(article.category || 'Executive Briefing')}`;

    return {
        title: baseTitle,
        description: metaDescription,
        alternates: { canonical: canonicalURL },
        openGraph: {
            title: `${baseTitle} | Richard Ewing`,
            description: metaDescription,
            url: canonicalURL,
            type: 'article',
            images: [{ url: ogUrl, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${baseTitle} | Richard Ewing`,
            description: metaDescription,
            images: [ogUrl],
        }
    };
}

function getRelatedArticles(currentSlug: string, category: string, count: number = 3) {
    return getSortedArticles()
        .filter(a => a.slug !== currentSlug && !BLOG_SLUG_REDIRECTS[a.slug] && a.category === category)
        .slice(0, count);
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    if (BLOG_SLUG_REDIRECTS[slug]) {
        permanentRedirect(BLOG_SLUG_REDIRECTS[slug]);
    }
    const article = allArticles[slug];
    if (!article) notFound();

    const safeHtml = (article.content || '')
        .replace(/<h1(\b[^>]*)>/gi, '<h2$1>')
        .replace(/<\/h1>/gi, '</h2>');

    const catColor = categoryColors[article.category] || 'text-zinc-950 font-bold bg-zinc-500/10 border-zinc-500/20';
    const related = getRelatedArticles(slug, article.category);
    const recommendedFrameworks = frameworks.filter((_, i) => (slug.length + i) % 3 === 0).slice(0, 2);
    if (recommendedFrameworks.length < 2) {
        recommendedFrameworks.push(...frameworks.slice(0, 2 - recommendedFrameworks.length));
    }

    const articleSchema = articleSchemaTemplate(article.title, article.excerpt, `https://www.richardewing.io/blog/${slug}`, article.date);

    return (
        <main className="pt-24 pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <BreadcrumbSchema items={[
                { name: 'Blog', url: 'https://www.richardewing.io/blog' },
                { name: article.title, url: `https://www.richardewing.io/blog/${slug}` }
            ]} />
            <div className="page-container max-w-3xl mx-auto">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 font-bold mb-8">
                    <Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog</Link>
                    <span>→</span>
                    <span className="text-zinc-950 font-bold">{article.category}</span>
                </div>

                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold font-mono uppercase tracking-widest px-2 py-1 rounded-full border ${catColor}`}>{article.category}</span>
                        <span className="text-xs font-bold text-zinc-950">
                            {article.readTime.includes('read') ? article.readTime : `${article.readTime} read`}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-grotesk font-bold text-zinc-950 mb-4 leading-tight">{article.title}</h1>
                    <p className="text-lg text-zinc-700 font-normal leading-relaxed mb-6">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs font-medium text-zinc-700">
                        <span>By Richard Ewing</span>
                        <span>·</span>
                        <time>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time>
                    </div>
                    <div className="mt-6">
                        <SocialShare url={`https://www.richardewing.io/blog/${slug}`} title={article.title} />
                    </div>
                </header>

                {article.directAnswer && (
                    <aside className="mb-10 rounded-xl border border-[var(--line)] bg-[#faf8f2] p-6 shadow-sm">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8a571c] block mb-2">
                            Direct Answer
                        </span>
                        <p className="text-base text-[var(--ink)] leading-relaxed font-normal m-0">
                            {article.directAnswer}
                        </p>
                    </aside>
                )}

                <article className="prose prose-zinc max-w-none
                    prose-headings:font-grotesk prose-headings:text-zinc-950
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-zinc-900 prose-p:font-normal prose-p:leading-relaxed prose-p:text-base
                    prose-strong:text-zinc-950 prose-strong:font-semibold
                    prose-a:text-[var(--forest)] prose-a:font-semibold prose-a:underline hover:prose-a:text-[var(--gold)]
                    prose-li:text-zinc-900 prose-li:font-normal
                    prose-table:text-sm
                    prose-th:text-zinc-950 prose-th:font-semibold prose-th:border-zinc-300 prose-th:px-4 prose-th:py-2
                    prose-td:text-zinc-900 prose-td:font-normal prose-td:border-zinc-200 prose-td:px-4 prose-td:py-2
                    prose-code:text-violet-700 prose-code:bg-violet-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-hr:border-zinc-200
                ">
                    <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
                </article>

                <div className="my-10">
                    <EditorialAdSlot pillar="blog" contextLabel={article.category} />
                </div>

                {/* Inline Newsletter CTA */}
                <div className="my-12 p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 text-center">
                    <p className="text-zinc-950 font-semibold mb-2">Like this analysis?</p>
                    <p className="text-sm font-semibold text-zinc-900 font-medium mb-4">Get the weekly engineering economics briefing: one email, every Monday.</p>
                    <a href="https://theaieconomist.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer"
                        className="inline-block px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold font-bold text-sm hover:opacity-90 transition-opacity">
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
                                    className="group p-5 rounded-xl border border-zinc-400 bg-zinc-50 hover:border-white/15 transition-colors">
                                    <h3 className="text-sm font-semibold font-bold text-zinc-950 group-hover:text-cyan-900 font-extrabold font-semibold transition-colors mb-2">{r.title}</h3>
                                    <p className="text-xs font-bold text-zinc-900 font-bold line-clamp-2">{r.excerpt}</p>
                                    <span className="text-xs font-bold font-medium text-zinc-950 font-bold mt-2 block">{r.readTime}</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Related Canonical Concepts */}
                {article.relatedConcepts && article.relatedConcepts.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xs font-bold font-mono text-emerald-900 font-extrabold font-semibold uppercase tracking-widest mb-6">Related Canonical Concepts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {CANONICAL_CONCEPTS.filter(c => article.relatedConcepts?.includes(c.slug)).map(concept => (
                                <Link key={concept.slug} href={`/concepts/${concept.slug}`} className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 transition-colors group">
                                    <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2 group-hover:text-emerald-900 font-extrabold font-semibold transition-colors">{concept.title}</h3>
                                    <p className="text-sm font-semibold text-zinc-900 font-medium line-clamp-2">{concept.definition}</p>
                                    <span className="text-xs font-bold font-medium text-emerald-900 font-extrabold font-semibold mt-4 block">Read Concept →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
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

                <CiteThisPage 
                    title={article.title}
                    author="Richard Ewing"
                    date={article.date}
                    url={article.canonicalUrl || `https://www.richardewing.io/blog/${slug}`}
                />

                {/* Author Box */}
                <div className="mt-12 p-8 rounded-2xl border border-zinc-400 bg-white/[0.03]">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-zinc-400 flex items-center justify-center shrink-0">
                            <span className="text-2xl">📊</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-1">Richard Ewing</h3>
                            <p className="text-sm font-semibold text-zinc-900 font-medium mb-3">The AI Economist  -  Quantifying engineering economics for technology leaders, PE firms, and boards.</p>
                            <div className="flex flex-wrap gap-3">
                                <Link href={`/schedule?source=${slug}`} className="text-xs font-bold text-[var(--forest)] hover:underline">Book Advisory →</Link>
                                <Link href="/ai-workplace-leadership" className="text-xs font-bold text-zinc-900 hover:underline">AI Workplace &amp; Leadership Hub →</Link>
                                <Link href="/vault/curriculum/tracks" className="text-xs font-bold text-zinc-900 hover:underline">Curriculum →</Link>
                                <Link href="/tools/pdi" className="text-xs font-bold text-zinc-900 hover:underline">Free Tools →</Link>
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

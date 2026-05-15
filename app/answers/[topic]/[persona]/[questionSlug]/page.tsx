import { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';
import Link from 'next/link';
import { SPOKE_MATRIX, Persona, getAllSpokeRoutes } from '../../../../lib/spoke-data';
import ArticleUpsell from '../../../../components/ArticleUpsell';
import ProgrammaticAnswersRelated from '../../../../components/ProgrammaticAnswersRelated';

interface Props {
    params: Promise<{
        topic: string;
        persona: string;
        questionSlug: string;
    }>;
}

export async function generateStaticParams() {
    const routes = getAllSpokeRoutes();
    return routes.map((r) => ({
        topic: r.topic,
        persona: r.persona,
        questionSlug: r.questionSlug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const p = await params;
    const topicData = SPOKE_MATRIX.find(t => t.topicSlug === p.topic);
    if (!topicData) return {};
    
    const queries = topicData.personas[p.persona as Persona];
    if (!queries) return {};

    const query = queries.find(q => q.questionSlug === p.questionSlug);
    if (!query) return {};

    const ogTitle = `${query.questionHeadline} | ${p.persona.replace('-', ' ').toUpperCase()} Guide`;
    const safeOgTitle = ogTitle.substring(0, 55) + (ogTitle.length > 55 ? '...' : '');

    return {
        title: safeOgTitle,
        description: `Executive breakdown and financial execution models for: ${query.questionHeadline}`,
        alternates: {
            canonical: `https://www.richardewing.io/answers/${p.topic}/${p.persona}/${p.questionSlug}`,
        },
        openGraph: {
            title: safeOgTitle,
            description: `Executive breakdown and financial execution models for: ${query.questionHeadline}`,
            url: `https://www.richardewing.io/answers/${p.topic}/${p.persona}/${p.questionSlug}`,
            siteName: 'Richard Ewing',
            type: 'article',
            images: [
                {
                    url: 'https://www.richardewing.io/og-image-home.png',
                    width: 1200,
                    height: 630,
                    alt: safeOgTitle,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: safeOgTitle,
            description: `Executive breakdown and financial execution models for: ${query.questionHeadline}`,
            images: ['https://www.richardewing.io/og-image-home.png'],
        }
    };
}

export default async function AnswerPage({ params }: Props) {
    const p = await params;
    
    const topicData = SPOKE_MATRIX.find(t => t.topicSlug === p.topic);
    if (!topicData) return permanentRedirect('/answers');

    const queries = topicData.personas[p.persona as Persona];
    if (!queries) return permanentRedirect('/answers');

    const query = queries.find(q => q.questionSlug === p.questionSlug);
    if (!query) return permanentRedirect('/answers');

    // Generate FAQ Schema JSON-LD
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [{
            '@type': 'Question',
            name: query.questionHeadline,
            acceptedAnswer: {
                '@type': 'Answer',
                text: query.answerHtml
            }
        }]
    };

    return (
        <div className="max-w-3xl mx-auto relative z-10 pt-12 pb-24 px-6">
            {/* JSON-LD Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest flex-wrap">
                <Link href="/answers" className="hover:text-zinc-900 transition-colors">Answer Hub</Link>
                <span>/</span>
                <span className="text-zinc-800">{topicData.topicName}</span>
                <span>/</span>
                <span className="text-cyan-900 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded truncate">
                    For {p.persona.replace('-', ' ')}
                </span>
            </div>

            {/* Header */}
            <header className="mb-12 border-b border-zinc-400 pb-12">
                <h1 className="text-3xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6 leading-tight">
                    {query.questionHeadline}
                </h1>
                <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-900 font-extrabold font-semibold text-xs font-bold font-mono uppercase tracking-widest">
                        Demographic: {p.persona}
                    </span>
                </div>
            </header>

            {/* Main Answer Content */}
            <div className="prose prose-zinc prose-lg max-w-none pb-12">
                <div 
                    className="p-8 bg-white/40 border border-zinc-400 rounded-2xl mb-12 shadow-inner prose-p:text-zinc-950 prose-p:font-bold prose-strong:text-cyan-900"
                    dangerouslySetInnerHTML={{ __html: query.answerHtml }} 
                />
            </div>

            {/* The Generative Upsell Engine Trap */}
            <ArticleUpsell 
                productId={query.recommendedProductId}
                headline={query.upsellHeadline}
                description="Download the exact execution models, deployment checklists, and financial breakdown frameworks associated with this architecture methodology."
            />

            {/* Hub & Spoke Matrix Routing Node */}
            <div className="mt-16 bg-white/50 border border-zinc-300 rounded-2xl p-6 md:p-8">
                <div className="mb-6 mb-8 text-sm font-mono text-zinc-800 font-bold uppercase tracking-widest border-b border-zinc-300 pb-2">
                    Explore Corporate Diagnostics
                </div>
                <ProgrammaticAnswersRelated seed={topicData.topicSlug} />
            </div>

            <div className="mt-20 pt-12 border-t border-zinc-400">
                <Link href="/answers" className="text-zinc-950 font-bold hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-semibold font-mono uppercase tracking-widest">
                    ← Back to Answer Matrix
                </Link>
            </div>
        </div>
    );
}

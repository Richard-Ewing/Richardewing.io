import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { ArrowRight, Activity, ShieldAlert } from 'lucide-react';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import pseoMatrixData from '@/app/lib/pseo-matrix.json';
import compareCategorized from '@/app/lib/compare-categorized.json';
import FAQItem from '@/app/components/FAQItem';
import StructuredData, { generateFaqSchema } from '@/app/components/seo/StructuredData';

const COMPARISONS = [
    {
        slug: 'claude-code-vs-cursor-governance',
        title: 'Claude Code vs Cursor Governance',
        description: 'Comparing the enterprise governance controls of leading AI coding environments. Discover why deterministic runtime gating outperforms probabilistic prompt boundaries.',
        keywords: ['Claude Code vs Cursor governance', 'Claude Code governance', 'Cursor enterprise', 'AI editor safety']
    },
    {
        slug: 'claude-code-retry-loop-prevention',
        title: 'Claude Code retry loop prevention',
        description: 'How to deploy retry burn engines and stop Claude Code from caught in recursive patch loops that burn API compute.',
        keywords: ['Claude Code retry loop prevention', 'Claude Code patch loop', 'recursive retry loops']
    },
    {
        slug: 'claude-context-rot-mitigation',
        title: 'Claude Context Rot Mitigation',
        description: 'Prevent Claude from forgetting core architecture in long sessions by deploying bounded cognition engines and semantic reset checkpoints.',
        keywords: ['Claude context rot mitigation', 'Claude forgets context', 'Claude loses the plot']
    },
    {
        slug: 'cursor-repository-drift-prevention',
        title: 'Cursor Repository Drift Prevention',
        description: 'Stop Cursor from rewriting unrelated files and creating ghost dependencies. Implement deterministic repository alignment protocols.',
        keywords: ['Cursor repository drift prevention', 'Cursor rewrites unrelated files', 'Cursor ghost dependencies']
    }
];

interface Comparison {
    slug: string;
    title: string;
    description: string;
    keywords: string[];
    theirFocus?: string;
    ourAdvantage?: string;
    technicalDistinction?: string;
    toolA?: string;
    toolB?: string;
}

function getComparison(slug: string): Comparison | undefined {
    const tierAList: string[] = (compareCategorized.tierA_indexed as string[]) || [];
    const tierCList: string[] = (compareCategorized.tierC_redirected as string[]) || [];
    const junkList: string[] = (compareCategorized.junk as string[]) || [];
    if (tierCList.includes(slug) || junkList.includes(slug)) {
        return undefined;
    }

    const hardcoded = COMPARISONS.find(c => c.slug === slug);
    if (hardcoded) {
        const parts = hardcoded.title.split(' vs ');
        return {
            slug: hardcoded.slug,
            title: hardcoded.title,
            description: hardcoded.description,
            keywords: hardcoded.keywords,
            toolA: parts[0] || 'Tool A',
            toolB: parts[1] || 'Tool B'
        };
    }

    const matrixItem = (pseoMatrixData as any[]).find(item => item.slug === slug);
    if (matrixItem && tierAList.includes(slug)) {
        return {
            slug: matrixItem.slug,
            title: matrixItem.title,
            description: matrixItem.metaDescription || `${matrixItem.toolA} vs ${matrixItem.toolB}`,
            keywords: [matrixItem.toolA, matrixItem.toolB, `${matrixItem.toolA} vs ${matrixItem.toolB}`],
            theirFocus: matrixItem.theirFocus,
            ourAdvantage: matrixItem.ourAdvantage,
            technicalDistinction: matrixItem.technicalDistinction,
            toolA: matrixItem.toolA,
            toolB: matrixItem.toolB
        };
    }

    if (slug.includes('-vs-') && tierAList.includes(slug)) {
        const parts = slug.split('-vs-');
        const toolA = parts[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const toolB = parts[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        return {
            slug,
            title: `${toolA} vs ${toolB}`,
            description: `Compare execution risks and cost inefficiencies of ${toolA} vs ${toolB}. Audit your engineering margins.`,
            keywords: [toolA, toolB, `${toolA} vs ${toolB}`],
            toolA,
            toolB
        };
    }

    return undefined;
}

export async function generateStaticParams() {
    // Only prerender the 4 curated comparisons that lack dedicated subdirectory pages.
    // All other Tier A pages have their own app/compare/{slug}/page.tsx files.
    return COMPARISONS.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const comparison = getComparison(slug);
    
    if (!comparison) {
        permanentRedirect('/tools');
    }

    let desc = comparison.description;
    if (!desc || desc.length < 50) {
        const tA = comparison.toolA || 'Tool A';
        const tB = comparison.toolB || 'Tool B';
        desc = `Compare execution risks, cost inefficiencies, and R&D capital leakage of ${tA} vs ${tB}. Audit your engineering margins.`;
    }

    return {
        title: {
            absolute: `${comparison.title} Cost Analysis | Richard Ewing`
        },
        description: desc,
        alternates: { canonical: `https://www.richardewing.io/compare/${slug}` },
        robots: { index: true, follow: true },
        openGraph: {
            title: comparison.title,
            description: desc,
            url: `https://www.richardewing.io/compare/${slug}`,
            siteName: 'Richard Ewing',
            type: 'article',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: comparison.title,
            description: desc,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const comparison = getComparison(slug);

    if (!comparison) {
        permanentRedirect('/tools');
    }

    const tA = comparison.toolA || 'Tool A';
    const tB = comparison.toolB || 'Tool B';

    const faqs = [];
    if (comparison.theirFocus && comparison.ourAdvantage) {
        faqs.push({
            question: `What is the primary operational difference between ${tA} and ${tB}?`,
            answer: comparison.theirFocus
        });
        faqs.push({
            question: `How does AI Economics evaluate ${tA} vs ${tB}?`,
            answer: comparison.ourAdvantage
        });
    }

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {faqs.length > 0 && (
                    <StructuredData data={generateFaqSchema(faqs)} />
                )}

                {/* Breadcrumbs */}
                <div className="mb-8 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                    <Link href="/compare" className="hover:text-amber-900 transition-colors">Comparisons</Link>
                    <span>/</span>
                    <span className="text-amber-900">{tA} vs {tB}</span>
                </div>

                {/* Hero Header */}
                <div className="text-center mb-16 border-b border-zinc-400 pb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-900 rounded-full font-mono text-xs uppercase tracking-widest mb-6">
                        <Activity className="w-3.5 h-3.5" />
                        <span>AI Economics Architecture Comparison</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6 leading-tight">
                        {comparison.title}
                    </h1>
                    
                    <p className="text-xl text-zinc-900 font-semibold max-w-3xl mx-auto leading-relaxed">
                        {comparison.description}
                    </p>
                </div>

                {/* Structural Comparison Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white border border-zinc-300 rounded-2xl p-8 shadow-sm">
                        <div className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest mb-2">Category A Focus</div>
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">{tA}</h2>
                        <p className="text-zinc-900 font-semibold leading-relaxed text-sm">
                            {comparison.theirFocus || `${tA} focuses on traditional developer ergonomics and local execution velocity.`}
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white border border-zinc-800 rounded-2xl p-8 shadow-md">
                        <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">AI Economics Approach</div>
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">{tB}</h2>
                        <p className="text-zinc-300 font-medium leading-relaxed text-sm">
                            {comparison.ourAdvantage || `${tB} introduces deterministic governance boundaries, preventing uncontrolled API cost spikes.`}
                        </p>
                    </div>
                </div>

                {/* Deep Technical Analysis */}
                <section className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 mb-16 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">Technical Architecture & Risk Evaluation</h2>
                    <p className="text-zinc-900 font-semibold text-base leading-relaxed mb-6">
                        {comparison.technicalDistinction || `Evaluating ${tA} vs ${tB} requires moving beyond superficial speed benchmarks to examine long-term engineering maintenance costs, context drift rates, and capital allocation efficiency.`}
                    </p>
                    
                    <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                        <div className="flex items-center gap-2 text-amber-900 font-bold font-grotesk text-sm mb-1">
                            <ShieldAlert className="w-4 h-4 text-amber-600" />
                            <span>Governance Recommendation</span>
                        </div>
                        <p className="text-zinc-900 text-xs font-semibold m-0">
                            Unmanaged AI assistance without deterministic runtime cost caps introduces a 30-50% operational tax. Always measure unit economics before scaling across engineering organizations.
                        </p>
                    </div>
                </section>

                {/* FAQ Section */}
                {faqs.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((f, idx) => (
                                <FAQItem key={idx} question={f.question} answer={f.answer} />
                            ))}
                        </div>
                    </section>
                )}

                <AdvisoryCTA variant="compare" />

            </div>
        </main>
    );
}

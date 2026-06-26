import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { ArrowRight, Activity, ShieldAlert } from 'lucide-react';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import pseoMatrixData from '@/app/lib/pseo-matrix.json';

// INDEXED_SLUGS removed to allow dynamic indexation of programmatic SEO pages

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
}

function getComparison(slug: string): Comparison | undefined {
    // 1. Check hardcoded comparisons first
    const hardcoded = COMPARISONS.find(c => c.slug === slug);
    if (hardcoded) {
        return {
            slug: hardcoded.slug,
            title: hardcoded.title,
            description: hardcoded.description,
            keywords: hardcoded.keywords,
        };
    }

    // 2. Fall back to programmatic SEO matrix data
    const matrixItem = (pseoMatrixData as any[]).find(item => item.slug === slug);
    if (matrixItem) {
        return {
            slug: matrixItem.slug,
            title: matrixItem.title,
            description: matrixItem.metaDescription || `${matrixItem.toolA} vs ${matrixItem.toolB}`,
            keywords: [matrixItem.toolA, matrixItem.toolB, `${matrixItem.toolA} vs ${matrixItem.toolB}`],
            theirFocus: matrixItem.theirFocus,
            ourAdvantage: matrixItem.ourAdvantage,
            technicalDistinction: matrixItem.technicalDistinction
        };
    }

    return undefined;
}

export async function generateStaticParams() {
    const hardcodedSlugs = COMPARISONS.map(c => ({ slug: c.slug }));
    const matrixSlugs = (pseoMatrixData as any[]).map(item => ({ slug: item.slug }));
    return [...hardcodedSlugs, ...matrixSlugs];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const comparison = getComparison(slug);
    if (!comparison) return {};

    return {
        title: `${comparison.title} | Enterprise Comparison`,
        description: comparison.description,
        alternates: { canonical: `https://www.richardewing.io/compare/${slug}` },
        robots: { index: true, follow: true },
        openGraph: {
            title: `${comparison.title} | Enterprise Comparison`,
            description: comparison.description,
            url: `https://www.richardewing.io/compare/${slug}`,
            siteName: 'Richard Ewing',
            type: 'article',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${comparison.title} | Enterprise Comparison`,
            description: comparison.description,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const comparison = getComparison(slug);

    if (!comparison) {
        permanentRedirect('/compare');
    }

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto">
                <div className="mb-8 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                    <Link href="/compare" className="hover:text-amber-900 transition-colors">Comparisons</Link>
                    <span>/</span>
                    <span className="text-amber-900">Detail</span>
                </div>

                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-6">
                        <span className="text-2xl">⚖️</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        {comparison.title}
                    </h1>
                    <p className="text-xl text-zinc-700 max-w-2xl mx-auto font-medium">
                        {comparison.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {comparison.theirFocus ? (
                        <div className="p-8 bg-rose-50 border border-rose-500/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldAlert className="w-24 h-24 text-rose-900" />
                            </div>
                            <h3 className="text-sm font-bold font-mono text-rose-950 uppercase tracking-widest mb-4">Competitor Focus</h3>
                            <p className="text-zinc-800 font-semibold leading-relaxed">
                                {comparison.theirFocus}
                            </p>
                        </div>
                    ) : (
                        <div className="p-8 bg-rose-50 border border-rose-500/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldAlert className="w-24 h-24 text-rose-900" />
                            </div>
                            <h3 className="text-sm font-bold font-mono text-rose-950 uppercase tracking-widest mb-4">Probabilistic Approach</h3>
                            <p className="text-zinc-800 font-semibold mb-4">Relying on LLM adherence to instructions. High variance. Requires human verification loops.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                    <span className="text-rose-600 mt-0.5">•</span> Governance Theater
                                </li>
                                <li className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                    <span className="text-rose-600 mt-0.5">•</span> Verification Overload
                                </li>
                                <li className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                    <span className="text-rose-600 mt-0.5">•</span> Execution Drift
                                </li>
                            </ul>
                        </div>
                    )}

                    {comparison.ourAdvantage ? (
                        <div className="p-8 bg-cyan-50 border border-cyan-500/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Activity className="w-24 h-24 text-cyan-900" />
                            </div>
                            <h3 className="text-sm font-bold font-mono text-cyan-950 uppercase tracking-widest mb-4">Our Advantage</h3>
                            <p className="text-zinc-800 font-semibold leading-relaxed">
                                {comparison.ourAdvantage}
                            </p>
                        </div>
                    ) : (
                        <div className="p-8 bg-cyan-50 border border-cyan-500/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Activity className="w-24 h-24 text-cyan-900" />
                            </div>
                            <h3 className="text-sm font-bold font-mono text-cyan-950 uppercase tracking-widest mb-4">Deterministic Approach</h3>
                            <p className="text-zinc-800 font-semibold mb-4">Enforcing limits via runtime code middleware. Zero variance. Stops bad actions at the gate.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm font-semibold text-cyan-950">
                                    <span className="text-cyan-600 mt-0.5">•</span> Admissibility Pipelines
                                </li>
                                <li className="flex items-start gap-2 text-sm font-semibold text-cyan-950">
                                    <span className="text-cyan-600 mt-0.5">•</span> Cryptographic Containment
                                </li>
                                <li className="flex items-start gap-2 text-sm font-semibold text-cyan-950">
                                    <span className="text-cyan-600 mt-0.5">•</span> Zero-Trust Execution
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {comparison.technicalDistinction && (
                    <div className="p-8 bg-white border border-zinc-400 rounded-2xl mb-16">
                        <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-4">Technical Distinction</h3>
                        <div className="text-zinc-800 font-semibold leading-relaxed text-[15px] space-y-4 whitespace-pre-line">
                            {comparison.technicalDistinction}
                        </div>
                    </div>
                )}

                <div className="sr-only" aria-hidden="true">
                    Keywords: {(comparison.keywords || []).join(', ')}
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}

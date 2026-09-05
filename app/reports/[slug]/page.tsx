import React from 'react';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { ArrowLeft, Lock, BarChart2 } from 'lucide-react';
import { notFound, permanentRedirect } from 'next/navigation';
import { ExportToPDFButton } from '@/components/ExportToPDFButton';
import type { Metadata } from 'next';

const reportMeta: Record<string, { title: string; description: string }> = {
    'ai-governance-maturity-index': { title: 'AI Governance Maturity Index | Enterprise Benchmark Report', description: 'Percentile distributions and operational risks for AI governance maturity across SaaS and Healthcare sectors. Board-ready data from live telemetry.' },
    'product-debt-report': { title: 'Product Debt Report | R&D Capital Analysis', description: 'Aggregated product debt benchmarks from enterprise telemetry. Quantify your technical debt in dollar terms vs. industry percentiles.' },
    'hallucination-debt-index': { title: 'Hallucination Debt Index | AI Output Liability Benchmark', description: 'Track accumulated liability from unverified AI outputs in production. Percentile data from live enterprise AI deployments.' },
    'runtime-governance-benchmark': { title: 'Runtime Governance Benchmark | AI Agent Control Report', description: 'Operational risk benchmarks for AI agent governance. Deterministic control layer metrics across enterprise deployments.' },
    'ai-margin-compression-report': { title: 'AI Margin Compression Report | COGS & Profitability Analysis', description: 'How AI inference costs compress gross margins. Enterprise benchmarks for AI feature economics and cost attribution.' },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const meta = reportMeta[slug];
    if (!meta) return { title: 'Report | Richard Ewing', description: 'Enterprise benchmark report from live AI telemetry.' };
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: `https://www.richardewing.io/reports/${slug}` },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: `https://www.richardewing.io/reports/${slug}`,
            type: 'article',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

export default async function ReportDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // In production, fetch specific snapshot data from Supabase based on slug.
    // For now, we stub the rendering logic to support the mandated taxonomy.
    const isValidReport = [
        'ai-governance-maturity-index',
        'product-debt-report',
        'hallucination-debt-index',
        'runtime-governance-benchmark',
        'ai-margin-compression-report'
    ].includes(slug);

    if (!isValidReport) {
        permanentRedirect('/reports');
    }

    return (
        <main className="pt-24 pb-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <Link href="/reports" className="inline-flex items-center gap-2 text-zinc-800 hover:text-zinc-900 font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Intelligence Library
                    </Link>
                    <ExportToPDFButton 
                        targetId="board-deck-export-zone" 
                        fileName={`Board_Deck_${slug.replace(/-/g, '_')}.pdf`}
                        buttonText="Download Board-Ready PDF" 
                    />
                </div>

                <div id="board-deck-export-zone" className="bg-white p-2">
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                                <BarChart2 className="w-5 h-5" />
                            </span>
                            <span className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-800">Official Benchmark Report</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-zinc-900 mb-6 capitalize">{slug.replace(/-/g, ' ')}</h1>
                        <p className="text-xl text-zinc-600">
                            Aggregated from live telemetry across SaaS and Healthcare sectors.
                        </p>
                    </header>

                    <div className="prose prose-lg prose-zinc max-w-none">
                        <p className="lead">
                            This report outlines the percentile distributions and operational risks associated with {slug.replace(/-/g, ' ')}. 
                            Data is aggregated directly from enterprise telemetry ingestion endpoints, ensuring zero-trust validity.
                        </p>

                        <h2>The Exogram Mandate</h2>
                        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-xl">
                            <p className="font-bold text-red-900 text-lg m-0">
                                "Observability without enforcement is governance theater."
                            </p>
                            <p className="text-red-800 mt-2">
                                To remediate the risks identified in this index, organizations must deploy a deterministic interception layer.
                            </p>
                            <Link href="/exogram" className="inline-block mt-4 text-sm font-bold bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors shadow-sm">
                                Initialize Exogram Simulation
                            </Link>
                        </div>

                        <h3>Methodology</h3>
                        <p>
                            Review our <Link href="/methodology" className="text-purple-600 hover:text-purple-800 underline">Governance Standardization Methodology</Link> for exact scale definitions.
                        </p>
                    </div>
                </div>
            
                    <AdvisoryCTA variant="compare" />
                </div>
        </main>
    );
}

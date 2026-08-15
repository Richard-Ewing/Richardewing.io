import React from 'react';
import Link from 'next/link';
import { BookOpen, Network, BarChart } from 'lucide-react';
import ExecutiveSummaryBox from '../components/ExecutiveSummaryBox';
import FAQItem from '@/app/components/FAQItem';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Forensic Audit Methodology',
    description: 'A 3-week forensic process inspecting R&D capital yield, technical debt liabilities, and AI unit economic stability.',
    alternates: { canonical: 'https://www.richardewing.io/methodology' },
    openGraph: {
        title: 'Audit Methodology | Richard Ewing',
        description: 'The 4-phase R&D capital audit methodology: discovery, diagnostics, quantification, and executive presentation.',
        url: 'https://www.richardewing.io/methodology',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Audit Methodology | Richard Ewing',
        description: 'The 4-phase R&D capital audit methodology: discovery, diagnostics, quantification, and executive presentation.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};


export default function MethodologyPage() {
    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    'mainEntity': [
                        {
                            '@type': 'Question',
                            'name': 'What is the Product Debt Index (PDI)?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'A metric (0-100) evaluating the exit valuation risk of accumulated technical debt and unmanaged production AI complexity.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'What is the AI Unit Economics Benchmark (AUEB)?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'A benchmark evaluating gross margin compression caused by unoptimized inference routing, redundant token generation, and the cost of maintaining vast probabilistic guardrails.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'What is the baseline for unoptimized inference?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Top-quartile SaaS companies keep unoptimized inference costs under 8% of COGS.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'How are R&D capital audits conducted?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Audits are conducted in 4 phases: discovery, diagnostics, quantification, and executive board-ready presentation.'
                            }
                        }
                    ]
                }) }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-12 border-b border-zinc-200 pb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                            <BookOpen className="w-5 h-5" />
                        </span>
                        <span className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-800">Official Documentation</span>
                    </div>
                    <h1 className="text-4xl font-grotesk font-bold text-zinc-900 mb-4">Governance Standardization Methodology</h1>
                    <p className="text-lg text-zinc-600 font-medium">
                        The canonical definitions, scales, and mathematical frameworks defining the global baseline for AI operational maturity.
                    </p>
                </header>

                <ExecutiveSummaryBox
                    whatBreaks="AI features that cost more per-request than they earn"
                    whatItCosts="80% of AI projects fail to deliver business value (RAND)"
                    whatCausesIt="No unit economics framework applied to AI compute costs"
                    whatFixesIt={{ label: 'AI Unit Economics Calculator', href: '/tools/aueb' }}
                />

                <div className="space-y-12">
                    
                    {/* PDI */}
                    <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <Network className="w-6 h-6 text-purple-600" />
                            <h2 className="text-2xl font-grotesk font-bold text-zinc-900">Product Debt Index (PDI)</h2>
                        </div>
                        <p className="text-zinc-600 mb-6 leading-relaxed">
                            The definitive scale for measuring **Technical Insolvency Risk**. PDI quantifies the architectural entanglement caused by probabilistic models embedded directly into critical control flows without a deterministic interception layer (Exogram).
                        </p>
                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200">
                            <h3 className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-800 mb-3">PDI Scale Definitions</h3>
                            <ul className="space-y-3 font-mono text-sm">
                                <li className="flex gap-4"><span className="font-bold text-emerald-600 w-16">0-20</span><span className="text-zinc-700">Deterministically Governed. Complete runtime isolation.</span></li>
                                <li className="flex gap-4"><span className="font-bold text-amber-600 w-16">21-50</span><span className="text-zinc-700">Accumulating Hallucination Debt. Partial validation gaps.</span></li>
                                <li className="flex gap-4"><span className="font-bold text-red-600 w-16">51-100</span><span className="text-zinc-700">Architectural Stall Imminent. Verification burden exceeds engineering capacity.</span></li>
                            </ul>
                        </div>
                    </section>

                    {/* AUEB */}
                    <section className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <BarChart className="w-6 h-6 text-emerald-600" />
                            <h2 className="text-2xl font-grotesk font-bold text-zinc-900">AI Unit Economics Benchmark (AUEB)</h2>
                        </div>
                        <p className="text-zinc-600 mb-6 leading-relaxed">
                            The standard measure for **Synthetic COGS**. AUEB evaluates gross margin compression caused by unoptimized inference routing, redundant token generation, and the cost of maintaining vast probabilistic guardrails.
                        </p>
                        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200">
                            <p className="font-mono text-sm text-zinc-900 font-medium">
                                Target Top-Quartile SaaS Baseline: &lt; 8% of COGS attributed to unoptimized inference.
                            </p>
                        </div>
                    </section>

                </div>

                {/* FAQ Section */}
                <section className="mt-16 border-t border-zinc-200 pt-12">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <FAQItem
                            question="What is the Product Debt Index (PDI)?"
                            answer="A metric (0-100) evaluating the exit valuation risk of accumulated technical debt and unmanaged production AI complexity."
                        />
                        <FAQItem
                            question="What is the AI Unit Economics Benchmark (AUEB)?"
                            answer="A benchmark evaluating gross margin compression caused by unoptimized inference routing, redundant token generation, and the cost of maintaining vast probabilistic guardrails."
                        />
                        <FAQItem
                            question="What is the baseline for unoptimized inference?"
                            answer="Top-quartile SaaS companies keep unoptimized inference costs under 8% of COGS."
                        />
                        <FAQItem
                            question="How are R&D capital audits conducted?"
                            answer="Audits are conducted in 4 phases: discovery, diagnostics, quantification, and executive board-ready presentation."
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}

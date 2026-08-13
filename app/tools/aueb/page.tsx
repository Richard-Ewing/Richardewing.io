import { Metadata } from 'next';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import AUEBTool from './content';

export const metadata: Metadata = {
    title: 'AI Unit Economics Benchmark (AUEB)',
    description: 'Calculate AI feature profitability per interaction, audit inference token costs, and prevent SaaS gross margin collapse.',
    keywords: [
        'AI unit economics',
        'LLM cost calculator',
        'AI margin collapse',
        'GPT-4 cost comparison',
        'Claude API costs',
        'AI hallucination debt',
        'AI feature economics',
        'cost of predictivity',
        'AI cost governance tool',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/aueb',
    },
    openGraph: {
        title: 'AI Unit Economics Benchmark | Protect Your Margins',
        description: 'Don\'t let the API bills kill your company. Model your AI feature costs before you ship.',
        url: 'https://www.richardewing.io/tools/aueb',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Unit Economics Benchmark | Richard Ewing',
        description: 'Calculate your AI margin collapse point. Compare LLM costs. Free diagnostic tool.',
    },
};

import Link from 'next/link';

export default function Page() {
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Calculate Your AI Unit Economics Collapse Point',
        description: 'Use the AI Unit Economics Benchmark (AUEB) to find the exact usage volume where your AI feature starts destroying margin.',
        totalTime: 'PT3M',
        tool: { '@type': 'HowToTool', name: 'AUEB Calculator' },
        step: [
            { '@type': 'HowToStep', position: 1, name: 'Enter model pricing', text: 'Select your AI model and enter the cost per million tokens for input and output.' },
            { '@type': 'HowToStep', position: 2, name: 'Define usage parameters', text: 'Enter average tokens per request, requests per user per month, and total user count.' },
            { '@type': 'HowToStep', position: 3, name: 'Set revenue baseline', text: 'Enter your revenue per user per month to establish the margin comparison baseline.' },
            { '@type': 'HowToStep', position: 4, name: 'Calculate collapse point', text: 'The calculator shows your cost per request, monthly API cost, margin impact, and the exact collapse point.' },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <AUEBTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <DiagnosticCTA 
                    title="Is your runway burning faster than your MRR?"
                    subtitle="Compute costs are the new cloud tax. Take the AI Economics Diagnostic Audit to find your hidden margin leaks before your next board meeting."
                    metrics={["$100K+ API Bills", "Token Sprawl", "Negative Margin"]}
                />
                
                <div className="mt-12 bg-white border border-zinc-300 rounded-3xl p-8 text-center space-y-4 shadow-sm">
                    <h3 className="text-xl font-bold font-grotesk text-zinc-950">
                        Related Research &amp; Architectural Specifications
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                        <a 
                            href="https://www.linkedin.com/pulse/how-reduce-llm-costs-production-inference-dividend-model-ewing-nwtgc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-cyan-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-cyan-800 transition"
                        >
                            Read "The Inference Dividend Model" on LinkedIn ↗
                        </a>
                        <Link 
                            href="/concepts/inference-dividend-model"
                            className="px-4 py-2 bg-zinc-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-zinc-800 transition"
                        >
                            Explore Inference Dividend Concept →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

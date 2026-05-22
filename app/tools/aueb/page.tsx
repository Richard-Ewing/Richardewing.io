import { Metadata } from 'next';
import AUEBTool from './content';

export const metadata: Metadata = {
    title: 'AI Unit Economics Calculator | Collapse Point',
    description: 'Calculate the exact usage volume where your AI feature starts destroying margin. Used in $7,500 R&D Capital Audits. Free.',
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
        </>
    );
}

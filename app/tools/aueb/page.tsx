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
    return <AUEBTool />;
}

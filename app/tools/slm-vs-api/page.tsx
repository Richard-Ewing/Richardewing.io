import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import SLMTool from './content';

export const metadata: Metadata = {
    title: 'Should You Self & Strategy Diagnostics | Richard Ewing',
    description: 'Should You Self provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: [
        'SLM vs LLM',
        'OpenAI API cost calculator',
        'Local AI inference cost',
        'H100 ROI calculator',
        'Llama 3 hosting cost',
        'Build vs Buy AI',
        'AI Unit Economics'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/slm-vs-api',
    },
    openGraph: {
        title: 'SLM vs API | Build vs Buy AI Economics',
        description: 'Stop paying the OpenAI API tax. Calculate the hardware breakeven point for bringing your AI in-house.',
        url: 'https://www.richardewing.io/tools/slm-vs-api',
        type: 'website',
    },
};

export default function Page() {
    return <SLMTool />;
}

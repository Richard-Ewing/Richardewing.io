import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import SLMTool from './content';

export const metadata: Metadata = {
    title: 'Should You Self-Host AI or Keep Paying OpenAI? | Build vs Buy Calculator',
    description: 'Your OpenAI bill is $50K/month and climbing. At what volume does self-hosting on H100s become cheaper? Calculate the exact breakeven between renting API tokens and owning inference.',
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

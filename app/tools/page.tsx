import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ToolsContent from './tools-content';

export const metadata: Metadata = {
    title: 'Free AI Cost & Diagnostic Calculators',
    description: 'Free calculators to find why AI tools slow down teams, why token bills outpace revenue, and when self-hosting costs more than cloud APIs.',
    keywords: [
        'why ai slows down engineering', 'ai token cost calculator', 'ai unit economics',
        'why cursor rewrites files', 'technical debt in dollar terms', 'slm break even',
        'free engineering calculators', 'ai margin calculator', 'shadow ai scanner',
        'copilot real roi calculator', 'why ai coding burns money'
    ],
    alternates: { canonical: 'https://www.richardewing.io/tools' },
    openGraph: {
        title: 'Free AI Cost & Diagnostic Calculators',
        description: 'Free calculators to find why AI tools slow down teams, why token bills outpace revenue, and how to fix real engineering bottlenecks.',
        url: 'https://www.richardewing.io/tools',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Cost & Diagnostic Calculators',
        description: 'Free calculators to find why AI tools slow down teams and how to fix operational bottlenecks.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

export default function ToolsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    'mainEntity': [
                        {
                            '@type': 'Question',
                            'name': 'Are these diagnostic tools free to use?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Yes, they are 100% free, self-service tools designed to help engineering and product leaders quickly identify operational leakage.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'Is my data safe when using these calculators?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Yes, all calculations are performed locally in your browser. No proprietary data, code details, or financial metrics are ever sent to our servers.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'What is the Product Debt Index (PDI)?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'The PDI is a quantitative scale (0-100) evaluating the exit valuation risk of accumulated technical debt and unmanaged production AI complexity.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'How do I remediate a high risk score?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'If your results show critical leakage or high debt, you can book a free diagnostic call to discuss remediation plans.'
                            }
                        }
                    ]
                }) }}
            />
            <ToolsContent />
        </>
    );
}


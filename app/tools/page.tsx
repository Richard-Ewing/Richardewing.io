import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ToolsContent from './tools-content';

export const metadata: Metadata = {
    title: 'Free AI Cost & Token Diagnostics',
    description: 'Free AI Cost Attribution & Tok provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: [
        'technical debt calculator', 'product debt index', 'free engineering tools',
        'AI unit economics calculator', 'SaaS valuation tool', 'revenue per engineer calculator',
        'technical debt assessment', 'engineering productivity benchmark',
        'AUEB calculator', 'enterprise value scenario engine',
        'audit interview tool', 'engineering hiring assessment',
        'Richard Ewing tools', 'free CTO tools', 'R&D audit tools',
        'executive diagnostics', 'AI governance diagnostics'
    ],
    alternates: { canonical: 'https://www.richardewing.io/tools' },
    openGraph: {
        title: 'Executive Diagnostics Hub | Production AI Governance',
        description: 'Boardroom-ready diagnostic instruments used in audits. Try them free: PDI, EV-SE, AUEB, and SLM Arbitrage.',
        url: 'https://www.richardewing.io/tools',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Executive Diagnostics Hub | Production AI Governance',
        description: 'Forensic instruments to measure technical debt, AI costs, and operational risk.',
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


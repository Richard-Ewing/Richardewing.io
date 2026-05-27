import type { Metadata } from 'next';
import { exogramKeywords } from '../lib/keywords';

export const metadata: Metadata = {
    title: 'Exogram — The SSL Certificate for Agentic Execution | Persistent AI Infrastructure',
    description: 'Frontier models improve constantly but context continuity never does. Exogram is the persistent intelligence substrate that preserves memory, governance, and trust across autonomous AI systems.',
    keywords: exogramKeywords,
    alternates: {
        canonical: 'https://www.richardewing.io/exogram',
    },
    openGraph: {
        title: 'Exogram | Persistent Infrastructure for Autonomous Intelligence',
        description: 'We are building the SSL certificate for agentic execution. Persistent context, dynamic governance, deterministic admissibility, and an auditable ledger — beneath the model layer.',
        url: 'https://www.richardewing.io/exogram',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exogram — Persistent Infrastructure for Autonomous Intelligence',
        description: 'Founded by Richard Ewing. The persistent intelligence substrate that preserves operational continuity, governance, and trust across frontier models.',
    },
};

export default function ExogramLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Exogram',
                        url: 'https://exogram.ai',
                        sameAs: [
                            'https://aws.amazon.com/startups/showcase/startup-details/3340d267-ae86-4467-8775-4f0e60a3edc5',
                            'https://www.linkedin.com/company/exogram-ai/'
                        ],
                        description: 'Persistent infrastructure for autonomous intelligence. The persistent intelligence substrate designed to sit beneath autonomous models — providing memory, continuity, governance, and verifiable execution state.',
                        slogan: 'The SSL certificate for agentic execution.',
                        founder: {
                            '@type': 'Person',
                            '@id': 'https://www.richardewing.io/#person',
                            name: 'Richard Ewing',
                            jobTitle: 'AI Economist',
                            url: 'https://www.richardewing.io',
                        },
                        foundingDate: '2025',
                        knowsAbout: [
                            'Persistent AI Context Infrastructure',
                            'Autonomous Intelligence Governance',
                            'Deterministic Admissibility Gateways',
                            'Auditable Execution Ledgers',
                            'Agentic Execution Trust',
                            'Cross-Model Operational Continuity',
                        ],
                    }),
                }}
            />
            {children}
        </>
    );
}

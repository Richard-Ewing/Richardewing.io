import type { Metadata } from 'next';
import { exogramKeywords } from '../lib/keywords';

export const metadata: Metadata = {
    title: 'Your AI Is Hallucinating in Production and Nobody Notices | Exogram Runtime',
    description: '88% of AI agent projects fail. 45% of AI-generated code has vulnerabilities. Exogram is deterministic AI governance — the kill switch your production AI doesn\'t have.',
    keywords: exogramKeywords,
    alternates: {
        canonical: 'https://www.richardewing.io/exogram',
    },
    openGraph: {
        title: 'Your AI Is Hallucinating in Production and Nobody Notices | Exogram Runtime',
        description: '88% of AI agent projects fail. 45% of AI-generated code has vulnerabilities. Exogram is deterministic AI governance — the kill switch your production AI doesn\'t have.',
        url: 'https://www.richardewing.io/exogram',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Your AI Is Hallucinating in Production | Exogram Runtime',
        description: '$67.4B/year in hallucination losses. 4.3 hrs/week per employee verifying AI outputs. Exogram is the deterministic governance layer your production AI is missing.',
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
                        description: 'Deterministic AI governance runtime. 88% of AI agent projects fail in production. Exogram is the verification layer that enforces correctness before AI output reaches production — persistent context, dynamic governance, deterministic admissibility, and an auditable execution ledger.',
                        slogan: 'The kill switch your production AI doesn\'t have.',
                        founder: {
                            '@type': 'Person',
                            '@id': 'https://www.richardewing.io/#person',
                            name: 'Richard Ewing',
                            jobTitle: 'AI Economist',
                            url: 'https://www.richardewing.io',
                            sameAs: [
                                'https://www.linkedin.com/in/richard-ewing-mba/'
                            ],
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

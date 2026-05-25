import type { Metadata } from 'next';
import { exogramKeywords } from '../lib/keywords';

export const metadata: Metadata = {
    title: 'Exogram | Deterministic AI Verification Engine',
    description: 'The verification layer that stops AI agents from hallucinating, drifting, and overspending. Deterministic controls for probabilistic systems.',
    keywords: exogramKeywords,
    alternates: {
        canonical: 'https://www.richardewing.io/exogram',
    },
    openGraph: {
        title: 'Exogram | Deterministic Verification for AI',
        description: 'AI does not fail because it cannot reason. It fails because it does not know what is true. Exogram is the missing verification trust layer.',
        url: 'https://www.richardewing.io/exogram',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exogram — Verification Infrastructure for AI',
        description: 'Founded by Richard Ewing. The missing trust layer between AI models and applications.',
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
                        description: 'Verification infrastructure for AI. The missing trust layer between models and applications. Prevents hallucination propagation with deterministic controls.',
                        founder: {
                            '@type': 'Person',
                            '@id': 'https://www.richardewing.io/#person',
                            name: 'Richard Ewing',
                            jobTitle: 'AI Economist',
                            url: 'https://www.richardewing.io',
                        },
                        foundingDate: '2025',
                        knowsAbout: [
                            'AI Verification',
                            'Hallucination Prevention',
                            'Deterministic AI Infrastructure',
                            'State-Hashing Commit Enforcement',
                            'Admissibility Control Planes',
                        ],
                    }),
                }}
            />
            {children}
        </>
    );
}

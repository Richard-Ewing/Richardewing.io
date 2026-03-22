import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Exogram — Verification Infrastructure for AI | Founded by Richard Ewing',
    description: 'The missing trust layer between AI models and applications. Exogram prevents hallucination propagation with admissibility control planes and state-hashing commit enforcement. Founded by Richard Ewing, Product Economist.',
    keywords: [
        'Exogram', 'AI verification infrastructure', 'hallucination prevention',
        'deterministic AI', 'admissibility control plane', 'state-hashing',
        'AI trust layer', 'AI memory verification', 'Richard Ewing founder',
        'autonomous agent liability',
        // Everyday AI terms 2026
        'how to prevent AI hallucinations', 'AI accuracy verification',
        'can you trust AI output', 'AI quality assurance', 'AI output validation',
        'LLM fact checking', 'AI reliability platform', 'AI safety tools',
        'AI governance software', 'enterprise AI guardrails',
        'AI agent monitoring', 'autonomous AI risk management',
        'AI compliance', 'AI audit trail', 'responsible AI tools',
        'AI model monitoring', 'AI observability', 'AI ground truth',
        'prevent AI mistakes', 'AI error detection', 'AI output quality',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/exogram',
    },
    openGraph: {
        title: 'Exogram — The Verification Infrastructure for AI',
        description: 'LLMs generate language. Exogram maintains reality. The missing trust layer between models and applications.',
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
                        description: 'Verification infrastructure for AI. The missing trust layer between models and applications. Prevents hallucination propagation with deterministic control planes.',
                        founder: {
                            '@type': 'Person',
                            '@id': 'https://www.richardewing.io/#person',
                            name: 'Richard Ewing',
                            jobTitle: 'Product Economist',
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

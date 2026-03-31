import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Glossary of Technology, AI & Product Terms | Richard Ewing',
    description: 'Comprehensive glossary of 50+ technology terms. Technical debt, AI, SaaS metrics, product management frameworks, engineering management, and leadership ...',
    keywords: [
        'technology glossary', 'AI glossary', 'SaaS glossary', 'engineering glossary',
        'product management glossary', 'technical debt definition', 'what is ARR',
        'what is technical debt', 'what is AI hallucination', 'what is DORA metrics',
        'technology terms', 'startup glossary', 'software engineering terms',
        'product management terms', 'AI terms explained', 'SaaS metrics explained',
        'Richard Ewing', 'Product Economist',
    ],
    alternates: { canonical: 'https://www.richardewing.io/glossary' },
    openGraph: {
        title: 'Technology & AI Glossary | Richard Ewing',
        description: '50+ technology terms defined with rich explanations, FAQs, and practical tools.',
        url: 'https://www.richardewing.io/glossary',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Technology & AI Glossary | Richard Ewing',
        description: '50+ technology terms defined with rich explanations and practical tools.',
    },
};

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

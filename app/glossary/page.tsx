import type { Metadata } from 'next';
import GlossaryContent from './glossary-content';

export const metadata: Metadata = {
    title: 'Technology & AI Glossary — 400+ Definitions | Richard Ewing',
    description: 'The most comprehensive technology leadership glossary. 400+ definitions covering technical debt, AI economics, SaaS metrics, engineering management, product strategy, and more. By Richard Ewing, Product Economist.',
    keywords: [
        'technology glossary', 'technical debt definition', 'AI glossary', 'SaaS metrics glossary',
        'engineering management terms', 'product management glossary', 'CTO glossary',
        'product economist glossary', 'AI unit economics', 'technical insolvency',
        'DORA metrics', 'site reliability engineering', 'DevOps glossary',
        'FinOps glossary', 'startup finance terms', 'engineering productivity metrics',
        'Richard Ewing glossary', 'LLM glossary', 'AI governance definitions',
    ],
    alternates: { canonical: 'https://www.richardewing.io/glossary' },
    openGraph: {
        title: 'Technology & AI Glossary — 400+ Definitions | Richard Ewing',
        description: 'The most comprehensive technology leadership glossary. 400+ definitions on technical debt, AI economics, SaaS metrics, and engineering management.',
        url: 'https://www.richardewing.io/glossary',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Technology & AI Glossary — 400+ Definitions',
        description: 'The most comprehensive technology leadership glossary. By Richard Ewing, Product Economist.',
    },
};

export default function GlossaryPage() {
    return <GlossaryContent />;
}

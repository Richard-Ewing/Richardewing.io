import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import GlossaryContent from './glossary-content';
import { glossaryTerms } from './terms';

export const metadata: Metadata = {
    title: 'AI & Engineering Economics Glossary',
    description: 'Master the lexicon of AI unit economics, technical debt, and governance across 430+ executive definitions.',
    keywords: [
        'technology glossary', 'technical debt definition', 'AI glossary', 'SaaS metrics glossary',
        'engineering management terms', 'product management glossary', 'CTO glossary',
        'AI economist glossary', 'AI unit economics', 'technical insolvency',
        'DORA metrics', 'site reliability engineering', 'DevOps glossary',
        'FinOps glossary', 'startup finance terms', 'engineering productivity metrics',
        'Richard Ewing glossary', 'LLM glossary', 'AI governance definitions',
    ],
    alternates: { canonical: 'https://www.richardewing.io/glossary' },
    openGraph: {
        title: 'Enterprise AI Glossary | 430+ Terms Defined',
        description: 'Master the lexicon of AI governance. Clear executive definitions for hallucination debt, technical insolvency, retry inflation, and 427 more terms.',
        url: 'https://www.richardewing.io/glossary',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Technology & AI Glossary — 400+ Definitions',
        description: 'The most comprehensive technology leadership glossary. By Richard Ewing, AI Economist.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

export default function GlossaryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": "https://www.richardewing.io/glossary",
        "name": "Technology & AI Glossary",
        "description": "400+ definitions covering technical debt, AI economics, SaaS metrics, and engineering management.",
        "hasDefinedTerm": glossaryTerms.map(term => ({
            "@type": "DefinedTerm",
            "termCode": term.slug,
            "name": term.title,
            "description": term.definition,
            "url": `https://www.richardewing.io/glossary/${term.slug}`
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <GlossaryContent />
            <div className="page-container max-w-4xl mx-auto">
                <AdvisoryCTA variant="educational" />
            </div>
        </>
    );
}

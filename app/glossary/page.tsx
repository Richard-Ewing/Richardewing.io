import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import GlossaryContent from './glossary-content';
import { glossaryTerms } from './terms';
import { KEEP_TERMS, CATEGORY_MAP } from './pillarsMapping';

export const metadata: Metadata = {
    title: `Product, AI & Engineering Economics Glossary (${glossaryTerms.length}+ Terms)`,
    description: `Master the lexicon of product economics, AI unit economics, technical debt, and SaaS P&L governance across ${glossaryTerms.length}+ executive definitions.`,
    keywords: [
        'product economics glossary', 'product economist', 'technology glossary', 'technical debt definition',
        'AI glossary', 'SaaS metrics glossary', 'engineering management terms', 'product management glossary',
        'CTO glossary', 'AI economist glossary', 'AI unit economics', 'technical insolvency',
        'DORA metrics', 'site reliability engineering', 'DevOps glossary',
        'FinOps glossary', 'startup finance terms', 'engineering productivity metrics',
        'Richard Ewing glossary', 'LLM glossary', 'AI governance definitions',
    ],
    alternates: { canonical: 'https://www.richardewing.io/glossary' },
    openGraph: {
        title: `Product & AI Economics Glossary | ${glossaryTerms.length}+ Terms Defined`,
        description: `Master the lexicon of product & AI economics. Clear executive definitions for zombie features, hallucination debt, technical insolvency, retry inflation, and ${glossaryTerms.length}+ terms.`,
        url: 'https://www.richardewing.io/glossary',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: `Product & AI Economics Glossary - ${glossaryTerms.length}+ Definitions`,
        description: 'The definitive product, AI, and engineering economics glossary by Richard Ewing, Product Economist.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

export default function GlossaryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": "https://www.richardewing.io/glossary",
        "name": "Product, AI & Engineering Economics Glossary",
        "description": `${glossaryTerms.length}+ definitions covering product economics, AI unit economics, technical debt, SaaS P&L metrics, and engineering management.`,
        "hasDefinedTerm": glossaryTerms.map(term => {
            const isKeep = KEEP_TERMS.includes(term.slug);
            const pillarSlug = CATEGORY_MAP[term.category] || 'cloud-infrastructure-finops';
            const termUrl = isKeep
                ? `https://www.richardewing.io/glossary/${term.slug}`
                : `https://www.richardewing.io/glossary/pillars/${pillarSlug}#${term.slug}`;
            return {
                "@type": "DefinedTerm",
                "termCode": term.slug,
                "name": term.title,
                "description": term.definition,
                "url": termUrl
            };
        })
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

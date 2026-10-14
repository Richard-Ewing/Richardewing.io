import type { Metadata } from 'next';
import Link from 'next/link';
import GlossaryContent from './glossary-content';
import { glossaryTerms } from './terms';
import { KEEP_TERMS, CATEGORY_MAP } from './pillarsMapping';

export const metadata: Metadata = {
    title: `Product, AI & Engineering Economics Glossary (${glossaryTerms.length}+ Terms) | Richard Ewing`,
    description: `Master the lexicon of product economics, AI unit economics, technical debt, and SaaS P&L governance across ${glossaryTerms.length}+ executive definitions.`,
    alternates: { canonical: 'https://www.richardewing.io/glossary' },
    openGraph: {
        title: `Product & AI Economics Glossary | ${glossaryTerms.length}+ Terms Defined`,
        description: `Master the lexicon of product and AI economics. Clear executive definitions for zombie features, hallucination debt, technical insolvency, retry inflation, and ${glossaryTerms.length}+ terms.`,
        url: 'https://www.richardewing.io/glossary',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
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
            
            <section className="section !pt-12">
                <GlossaryContent />
            </section>

            {/* Closing CTA */}
            <section className="closing-cta">
                <p className="eyebrow">Next Step</p>
                <h2>Put these definitions into direct financial execution.</h2>
                <p>
                    Evaluate your enterprise unit economics and cloud efficiency with our diagnostic tools.
                </p>
                <div className="actions center">
                    <Link className="button button-gold" href="/reality-check">
                        Run the free Reality Check ↗
                    </Link>
                    <Link className="button button-ghost-light" href="/pricing-sprints">
                        View Sprints &amp; Pricing ↗
                    </Link>
                </div>
            </section>
        </>
    );
}

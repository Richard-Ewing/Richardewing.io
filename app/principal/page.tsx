import type { Metadata } from 'next';
import PrincipalContent from '../components/principal-content';

export const metadata: Metadata = {
    title: 'Richard Ewing — Product Economist & AI Capital Auditor | Founder of Exogram',
    description: 'Product Economist and AI Capital Auditor who identifies AI hallucination debt, zombie infrastructure, and structural margin collapse. Founder of Exogram. Creator of the Product Economist Framework. $25M ARR Scaled. Published in CIO.com & Built In.',
    keywords: [
        'product economist', 'AI capital auditor', 'Richard Ewing', 'Exogram founder',
        'AI hallucination debt', 'zombie infrastructure', 'R&D audit',
        'technical debt valuation', 'deterministic AI infrastructure',
        'subprime code crisis', 'AI unit economics',
        // Discovery terms
        'who is Richard Ewing', 'product economist consultant',
        'AI advisor for executives', 'technology thought leader',
        'engineering cost expert', 'AI spending expert',
        'fractional CTO', 'independent board advisor technology',
        'SaaS growth expert', 'startup scaling advisor',
        'CIO.com contributor', 'Built In contributor',
        'AI governance expert', 'technical debt expert',
        'engineering audit expert', 'R&D capital expert',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/principal',
    },
    openGraph: {
        title: 'Richard Ewing — Product Economist & AI Capital Auditor | Founder of Exogram',
        description: 'I identify AI hallucination debt, zombie infrastructure, and structural margin collapse before they become financial events. Founder of Exogram.',
        url: 'https://www.richardewing.io/principal',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Richard Ewing — Product Economist & AI Capital Auditor',
        description: 'Founder of Exogram. I audit R&D spend and surface the capital risks your metrics don\'t show.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.richardewing.io/#person",
    "name": "Richard Ewing",
    "jobTitle": ["Product Economist", "AI Capital Auditor"],
    "description": "Product Economist and AI Capital Auditor who identifies AI hallucination debt, zombie infrastructure, and structural margin collapse in B2B SaaS environments. Founder of Exogram, the verification infrastructure for AI.",
    "url": "https://www.richardewing.io",
    "image": "https://www.richardewing.io/assets/images/headshot.jpg",
    "sameAs": [
        "https://linkedin.com/in/richardewing",
        "https://twitter.com/richardewing",
        "https://exogram.ai"
    ],
    "knowsAbout": [
        "Product Economics",
        "R&D Auditing",
        "Technical Debt Valuation",
        "AI Unit Economics",
        "AI Capital Auditing",
        "Capital Allocation",
        "Engineering ROI",
        "AI Hallucination Debt",
        "Zombie Infrastructure",
        "Deterministic AI Infrastructure",
        "Subprime Code Crisis",
        "AI Cost Governance",
        "Gross Margin Preservation"
    ],
    "founder": {
        "@type": "Organization",
        "name": "Exogram",
        "url": "https://exogram.ai",
        "description": "Verification infrastructure for AI — the missing trust layer between models and applications"
    },
    "hasOccupation": [
        {
            "@type": "Occupation",
            "name": "Product Economist",
            "description": "Audits R&D spend and surfaces capital risks that engineering metrics don't show"
        },
        {
            "@type": "Occupation",
            "name": "AI Capital Auditor",
            "description": "Identifies and eliminates AI hallucination debt, zombie infrastructure, and structural margin collapse"
        }
    ],
    "brand": {
        "@type": "Brand",
        "name": "The Product Economist",
        "url": "https://www.richardewing.io"
    }
};

export default function PrincipalPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <main className="pt-24 pb-20 flex justify-center">
                <PrincipalContent />
            </main>
        </>
    );
}

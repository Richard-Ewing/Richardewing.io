import type { Metadata } from 'next';
import { principalKeywords } from '../lib/keywords';
import PrincipalContent from '../components/principal-content';

export const metadata: Metadata = {
    title: 'Richard Ewing — Product Economist | Exogram',
    description: 'Product Economist and AI Capital Auditor. I audit R&D spend, surface capital risks, and identify hidden technical debt. Founder of Exogram.',
    keywords: principalKeywords,
    alternates: {
        canonical: 'https://www.richardewing.io/principal',
    },
    openGraph: {
        title: 'Richard Ewing — Product Economist | Exogram',
        description: 'I identify AI hallucination debt, zombie infrastructure, and structural margin collapse before they become financial events. Founder of Exogram.',
        url: 'https://www.richardewing.io/principal',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Richard Ewing — Product Economist (AI Economics Domain)',
        description: 'Founder of Exogram. The Product Economist specializing in AI unit economics and R&D capital audits.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.richardewing.io/#person",
    "name": "Richard Ewing",
    "jobTitle": "Product Economist",
    "description": "Product Economist specializing in AI economics. Identifies AI hallucination debt, zombie infrastructure, and structural margin collapse in B2B SaaS environments. Founder of Exogram.",
    "url": "https://www.richardewing.io",
    "image": "https://www.richardewing.io/assets/images/headshot.jpg",
    "sameAs": [
        "https://linkedin.com/in/richard-ewing-mba",
        "https://x.com/Richard85626233",
        "https://www.mindtheproduct.com/author/richard-ewing/"
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

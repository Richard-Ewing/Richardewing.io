import type { Metadata } from 'next';
import PrincipalContent from '../components/principal-content';

export const metadata: Metadata = {
    title: 'Richard Ewing — The Product Economist | Principal Profile',
    description: 'Product Economist who audits R&D spend and surfaces capital risks. Creator of the Product Economist Framework. Founder of Exogram. $25M ARR Scaled.',
    alternates: {
        canonical: 'https://richardewing.io/principal',
    },
    openGraph: {
        title: 'Richard Ewing — The Product Economist',
        description: 'Product Economist who audits R&D spend and surfaces capital risks. Creator of the Product Economist Framework.',
        url: 'https://richardewing.io/principal',
        images: [{ url: 'https://richardewing.io/assets/images/headshot.jpg' }],
    },
};

const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://richardewing.io/#person",
    "name": "Richard Ewing",
    "jobTitle": "Product Economist",
    "description": "Product Economist who audits R&D spend and surfaces capital risks that engineering metrics don't show. Creator of the Product Economist Framework.",
    "url": "https://richardewing.io",
    "image": "https://richardewing.io/assets/images/headshot.jpg",
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
        "Capital Allocation",
        "Engineering ROI"
    ],
    "hasOccupation": {
        "@type": "Occupation",
        "name": "Product Economist",
        "description": "Audits R&D spend and surfaces capital risks that engineering metrics don't show"
    },
    "brand": {
        "@type": "Brand",
        "name": "The Product Economist",
        "url": "https://richardewing.io"
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

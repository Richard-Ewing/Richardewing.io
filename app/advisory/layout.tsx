import type { Metadata } from 'next';
import { advisoryKeywords } from '../lib/keywords';

export const metadata: Metadata = {
    title: 'Stop AI Billing Shock: 1-Hour PainPoint Pilot for $499',
    description: 'VP Eng: AI tool costs out of control? Get a PainPoint Pilot audit from Richard Ewing. Identify 3+ areas to cut AI spend by 20% in 60 minutes.',
    keywords: [...advisoryKeywords, 'AI consulting services', 'AI implementation strategy', 'Pilot extraction', 'Shadow AI audit', 'enterprise AI governance', 'AI for SMBs', 'AI project rescue'],
    alternates: {
        canonical: 'https://www.richardewing.io/advisory',
    },
    openGraph: {
        title: 'AI Consulting Services & Implementation Strategy | Richard Ewing',
        description: 'Worried about EU AI Act fines from shadow AI? Get a comprehensive 90-day AI audit for $15k. Richard Ewing helps CISOs stop ungoverned AI risks.',
        url: 'https://www.richardewing.io/advisory',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Consulting Services & Implementation Strategy | Richard Ewing',
        description: 'Stop the AI pilot purgatory. Install permanent governance and deploy production-ready AI solutions.',
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Capital Audits & Runtime Governance',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Richard Ewing Advisory',
        url: 'https://www.richardewing.io'
    },
    description: 'Forensic audits and deterministic runtime controls to rescue failed AI pilots, stop Shadow AI leaks, and prevent R&D capital waste.',
    offers: [
        {
            '@type': 'Offer',
            name: 'Insolvency Diagnostic & R&D Capital Audit',
            price: '2500',
            priceCurrency: 'USD',
            description: 'Identify where your R&D budget is leaking, calculate your Technical Insolvency Date, and stop compute waste.'
        },
        {
            '@type': 'Offer',
            name: 'Pilot Extraction & Productionalization',
            price: '10000',
            priceCurrency: 'USD',
            description: 'Rescue failed AI pilots from production loops, secure context limits, and establish deterministic execution boundaries.'
        },
        {
            '@type': 'Offer',
            name: 'Shadow AI Governance Audit',
            price: '10000',
            priceCurrency: 'USD',
            description: 'Audit and block unauthorized Shadow AI tools, halt intellectual property exfiltration, and secure compliance boundaries.'
        }
    ]
};

export default function AdvisoryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            {children}
        </>
    );
}

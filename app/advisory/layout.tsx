import type { Metadata } from 'next';
import { advisoryKeywords } from '../lib/keywords';

export const metadata: Metadata = {
    title: 'Forensic AI Audits Block Runaway Agent Loops | Richard Ewing',
    description: 'A forensic AI audit identifies and blocks shadow exfiltration from agentic loops. Halt AI billing shock and secure deterministic execution.',
    keywords: [...advisoryKeywords, 'AI consulting services', 'AI implementation strategy', 'Pilot extraction', 'Shadow AI audit', 'enterprise AI governance', 'AI for SMBs', 'AI project rescue'],
    alternates: {
        canonical: 'https://www.richardewing.io/advisory',
    },
    openGraph: {
        title: 'Forensic AI Audits Block Runaway Agent Loops | Richard Ewing',
        description: 'A forensic AI audit identifies and blocks shadow exfiltration from agentic loops. Halt AI billing shock and secure deterministic execution.',
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

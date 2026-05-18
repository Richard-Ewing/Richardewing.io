import type { Metadata } from 'next';
import { advisoryKeywords } from '../lib/keywords';

export const metadata: Metadata = {
    title: 'AI Consulting Services & Implementation Strategy | Richard Ewing',
    description: 'Specialized AI consulting for enterprise and SMBs. We solve Pilot Purgatory, Shadow AI data leaks, and provide 48-hour AI implementation roadmaps. Stop wasting money on PowerPoint decks.',
    keywords: [...advisoryKeywords, 'AI consulting services', 'AI implementation strategy', 'Pilot extraction', 'Shadow AI audit', 'enterprise AI governance', 'AI for SMBs', 'AI project rescue'],
    alternates: {
        canonical: 'https://www.richardewing.io/advisory',
    },
    openGraph: {
        title: 'AI Consulting Services & Implementation Strategy | Richard Ewing',
        description: 'Specialized AI consulting for enterprise and SMBs. We solve Pilot Purgatory, Shadow AI data leaks, and provide 48-hour AI implementation roadmaps.',
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
    name: 'AI Consulting & Implementation Services',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Richard Ewing Advisory',
        url: 'https://www.richardewing.io'
    },
    description: 'Expert AI consulting services focusing on AI pilot extraction, Shadow AI governance, and rapid 48-hour implementation roadmaps for businesses.',
    offers: [
        {
            '@type': 'Offer',
            name: 'Quarterly AI Audit & Roadmap',
            price: '5000',
            priceCurrency: 'USD',
            description: 'A 48-hour turnaround AI strategy roadmap for businesses who do not know where to start.'
        },
        {
            '@type': 'Offer',
            name: 'Pilot Extraction & Productionalization',
            price: '10000',
            priceCurrency: 'USD',
            description: 'Rescue failed AI pilots and deploy them to production with proper MLOps and runtime governance.'
        },
        {
            '@type': 'Offer',
            name: 'Shadow AI Governance Audit',
            price: '10000',
            priceCurrency: 'USD',
            description: 'Identify employee IP leaks into unauthorized LLMs and deploy localized, secure SLM architectures.'
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

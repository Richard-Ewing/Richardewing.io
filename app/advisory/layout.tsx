import type { Metadata } from 'next';
import { advisoryKeywords } from '../lib/keywords';

export const metadata: Metadata = {
    title: 'Technology Consulting & R&D Capital Audit Advisory',
    description: 'Technology consulting, R&D capital audits, AI cost governance, and technical due diligence. From $450 diagnostic to $40,000 turnaround engagement. Fract...',
    keywords: advisoryKeywords,
    alternates: {
        canonical: 'https://www.richardewing.io/advisory',
    },
    openGraph: {
        title: 'Technology Consulting & Advisory | Richard Ewing',
        description: 'R&D capital audits, AI cost governance, technical due diligence. From $450 diagnostic to $40K turnaround.',
        url: 'https://www.richardewing.io/advisory',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Technology Consulting & Advisory | Richard Ewing',
        description: 'R&D capital audits and AI cost governance. Stop the bleeding. Install permanent capital discipline.',
    },
};

const advisoryFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How much does a technology audit cost?', acceptedAnswer: { '@type': 'Answer', text: 'Richard Ewing offers services from $450 (30-minute diagnostic call) to $7,500 (full 3-week R&D Capital Audit). AI Cost Governance is $5,000 for a dedicated analysis. Monthly independent oversight starts at $5,000/mo.' }},
        { '@type': 'Question', name: 'What is an R&D capital audit?', acceptedAnswer: { '@type': 'Answer', text: 'An R&D capital audit is a forensic review of how engineering spend is allocated. It identifies hidden costs like technical debt, AI inference cost overruns, zombie infrastructure, and the Innovation Tax — maintenance disguised as innovation.' }},
        { '@type': 'Question', name: 'Do I need a fractional CTO?', acceptedAnswer: { '@type': 'Answer', text: 'If you need senior technology leadership but cannot justify a full-time CTO, a fractional CTO provides strategic direction, architecture decisions, and board-level reporting at a fraction of the cost. Richard Ewing offers independent oversight engagements.' }},
        { '@type': 'Question', name: 'What is AI cost governance?', acceptedAnswer: { '@type': 'Answer', text: 'AI cost governance is the practice of managing and controlling the costs of AI features and infrastructure. It includes unit economics analysis, collapse point calculation, and margin protection planning. Most AI products fail on economics, not technology.' }},
    ],
};

export default function AdvisoryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(advisoryFaqSchema) }} />
            {children}
        </>
    );
}

import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ChecklistPageContent from './checklist-content';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/checklist' },
    title: '12 Questions to Expose AI Gove & Strategy Diagnostics | Richard Ewing',
    description: '12 Questions to Expose AI Gove provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    openGraph: {
        title: 'AI Governance Checklist | 12 Questions from $7,500 Audits',
        description: 'The exact 12 questions asked in $7,500 R&D Capital Audits. Score your AI governance maturity.',
        url: 'https://www.richardewing.io/checklist',
        siteName: 'Richard Ewing',
        type: 'website',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is an AI Governance Checklist?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'An AI Governance Checklist is a structured diagnostic tool that evaluates whether your enterprise has the financial, operational, and architectural controls needed to safely deploy AI at scale. It covers R&D capital allocation, AI unit economics, agent permissions, retry economics, and deterministic verification.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is a Technical Insolvency Date?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Technical Insolvency Date is the specific future quarter when an organization\'s technical debt maintenance will consume 100% of engineering capacity, leaving zero time for new development. It is calculated using the Product Debt Index (PDI).',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does an R&D Capital Audit cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'R&D Capital Audits range from $450 (gut-check diagnostic) to $7,500 (full board-ready audit). The audit quantifies hidden technical debt, AI unit economics, and capital misallocation with deliverables designed for executive and board consumption.',
            },
        },
    ],
};

export default function ChecklistPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <ChecklistPageContent />
            <div className="page-container max-w-4xl mx-auto">
                <AdvisoryCTA variant="tool-result" />
            </div>
        </>
    );
}

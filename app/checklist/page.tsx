import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ChecklistPageContent from './checklist-content';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/checklist' },
    title: '12-Point AI Audit Checklist ($7.5K Spec)',
    description: 'Run the exact 12-question R&D audit checklist CEOs, CFOs, and CTOs use to catch runaway LLM bills, agent retry loops, and technical debt early.',
    openGraph: {
        title: '12-Point AI Audit Checklist ($7.5K Spec) | Richard Ewing',
        description: 'Run the exact 12-question R&D audit checklist CEOs, CFOs, and CTOs use to catch runaway LLM bills, agent retry loops, and technical debt early.',
        url: 'https://www.richardewing.io/checklist',
        siteName: 'Richard Ewing',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '12-Point AI Audit Checklist ($7.5K Spec) | Richard Ewing',
        description: 'Run the exact 12-question R&D audit checklist CEOs, CFOs, and CTOs use to catch runaway LLM bills, agent retry loops, and technical debt early.',
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

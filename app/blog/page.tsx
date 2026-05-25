import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import BlogContent from './blog-content';

export const metadata: Metadata = {
    title: 'AI Economics Blog | Insights by Richard Ewing',
    description: 'Weekly analysis on AI unit economics, technical debt quantification, agentic governance, and R&D capital strategy for CTOs and CFOs.',
    keywords: ['engineering economics blog', 'technical debt articles', 'AI cost analysis', 'R&D capital management', 'AI economics insights', 'CTO blog'],
    alternates: { canonical: 'https://www.richardewing.io/blog' },
    openGraph: { title: 'Blog — 100+ Engineering Economics Articles', description: '100+ articles on engineering economics, technical debt, AI costs, and R&D capital.', url: 'https://www.richardewing.io/blog', type: 'website' },
};

export default function BlogPage() {
    return <BlogContent />;
}

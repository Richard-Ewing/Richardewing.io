import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import BlogContent from './blog-content';

export const metadata: Metadata = {
    title: 'How to Identify & Kill R&D Capital Waste | The AI Economics Blog',
    description: 'Forensic guides and data-driven post-mortems on why software solvency fails, how to audit your R&D portfolio, and methods to stop generative compute leaks.',
    keywords: ['engineering economics blog', 'technical debt articles', 'AI cost analysis', 'R&D capital management', 'AI economics insights', 'CTO blog'],
    alternates: { canonical: 'https://www.richardewing.io/blog' },
    openGraph: { title: 'Blog — 100+ Engineering Economics Articles', description: '100+ articles on engineering economics, technical debt, AI costs, and R&D capital.', url: 'https://www.richardewing.io/blog', type: 'website' },
};

export default function BlogPage() {
    return <BlogContent />;
}

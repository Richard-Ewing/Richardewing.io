import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import BlogContent from './blog-content';

export const metadata: Metadata = {
    title: 'AI Unit Economics & SaaS Margin Teardowns',
    description: 'Read real SaaS P&L teardowns on LLM API bills, vibe coding debt, and R&D capital audits written for CEOs, CFOs, CPOs, and Engineering Managers.',
    keywords: ['engineering economics blog', 'technical debt articles', 'AI cost analysis', 'R&D capital management', 'AI economics insights', 'CTO blog'],
    alternates: { canonical: 'https://www.richardewing.io/blog' },
    openGraph: {
        title: 'AI Unit Economics & SaaS Margin Teardowns | Richard Ewing',
        description: 'Read real SaaS P&L teardowns on LLM API bills, vibe coding debt, and R&D capital audits written for CEOs, CFOs, CPOs, and Engineering Managers.',
        url: 'https://www.richardewing.io/blog',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Unit Economics & SaaS Margin Teardowns | Richard Ewing',
        description: 'Read real SaaS P&L teardowns on LLM API bills, vibe coding debt, and R&D capital audits written for CEOs, CFOs, CPOs, and Engineering Managers.',
        images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
    }
};

import { getSortedArticles } from '@/lib/blog-data';

export default function BlogPage() {
    const articles = getSortedArticles();
    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'AI & Engineering Economics Essays by Richard Ewing',
        'description': 'Forensic teardowns, P&L case studies, and mathematical models on AI unit economics, R&D capital allocation, and technical debt.',
        'numberOfItems': articles.length,
        'itemListElement': articles.map((article, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'url': `https://www.richardewing.io/blog/${article.slug}`,
            'name': article.title,
            'description': article.excerpt
        }))
    };

    return (
        <main className="min-h-screen bg-[#FAF9F6] pt-24 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <div className="max-w-6xl mx-auto px-6 space-y-12">
                <header className="max-w-3xl space-y-4 border-b border-[var(--line)] pb-8">
                    <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)]">
                        Research Library · The AI Economist
                    </p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] leading-tight">
                        AI &amp; Engineering Economics Essays
                    </h1>
                    <p className="text-base text-[#4a5850] leading-relaxed">
                        Forensic teardowns, enterprise SaaS P&amp;L case studies, and cost formulas written for CEOs, CFOs, CPOs, and Engineering Managers who have to turn generative AI experiments, developer tooling budgets, and legacy technical debt into defensible gross margin.
                    </p>
                </header>

                <BlogContent />

                <div className="pt-8 border-t border-[var(--line)]">
                    <AdvisoryCTA variant="educational" />
                </div>
            </div>
        </main>
    );
}

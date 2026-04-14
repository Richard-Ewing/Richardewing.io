import type { Metadata } from 'next';
import { NewsletterForm } from '../components/newsletter-form';

export const metadata: Metadata = {
    title: 'The Product Economist — Book | Richard Ewing',
    description: 'The definitive guide to R&D capital allocation and technical debt valuation. By Richard Ewing, Product Economist and Founder of Exogram.',
    keywords: ['product economist book', 'technical debt book', 'R&D capital allocation', 'engineering economics', 'Richard Ewing book'],
    alternates: { canonical: 'https://www.richardewing.io/book' },
    openGraph: {
        title: 'The Product Economist — Book | Richard Ewing',
        description: 'The definitive guide to R&D capital allocation and technical debt valuation.',
        url: 'https://www.richardewing.io/book',
        type: 'website',
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-2xl">
                <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">Coming 2026</div>
                <h1 className="text-5xl md:text-7xl font-bold text-zinc-950 mb-6 font-grotesk">The Product Economist</h1>
                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 font-bold">
                    The Definitive Guide to R&D Capital Allocation
                </p>

                <p className="text-zinc-800 mb-12 text-lg leading-relaxed">
                    Why most engineering organizations are making uninformed capital allocation decisions with every sprint —
                    and the frameworks, metrics, and diagnostic tools to fix it. Based on advisory engagements with 50+ technology companies.
                </p>

                <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-zinc-400 mb-8">
                    <p className="text-sm text-zinc-950 mb-4 font-mono uppercase tracking-widest">Get Notified at Launch</p>
                    <NewsletterForm
                        buttonText="Join Waitlist"
                        placeholder="your@email.com"
                        extraData={{ tool: 'book_waitlist' }}
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-800 font-mono uppercase tracking-widest">
                    <span>Technical Debt Valuation</span>
                    <span>•</span>
                    <span>AI Unit Economics</span>
                    <span>•</span>
                    <span>Engineering Capital ROI</span>
                </div>
            </div>
        </div>
    );
}

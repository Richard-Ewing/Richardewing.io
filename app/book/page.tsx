import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { NewsletterForm } from '../components/newsletter-form';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
    title: 'Stop Losing Money on AI | The AI Economist Book | 2026',
    description: 'The definitive book on AI economics: why 73% of AI projects destroy margins, and the frameworks to prevent it. Pre-order now.',
    keywords: ['AI economist book', 'technical debt book', 'R&D capital allocation', 'engineering economics', 'Richard Ewing book'],
    alternates: { canonical: 'https://www.richardewing.io/book' },
    openGraph: {
        title: 'The AI Economist — Book | Richard Ewing',
        description: 'The definitive guide to R&D capital allocation and technical debt valuation.',
        url: 'https://www.richardewing.io/book',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The AI Economist — Book | Richard Ewing',
        description: 'The definitive guide to R&D capital allocation and technical debt valuation.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

export default function BookPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    'mainEntity': [
                        {
                            '@type': 'Question',
                            'name': 'When will The AI Economist book be published?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'The book is scheduled for publication in late 2026.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'What core topics are covered in the book?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'The book covers R&D capital allocation frameworks, technical debt valuation, AI unit economics modeling, and preventing margin collapse in production AI.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'How do I get early access?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'By joining the waitlist above, you will receive early draft chapters, summaries, and launch-day notifications.'
                            }
                        }
                    ]
                }) }}
            />
            <div className="text-center max-w-2xl w-full">
                <div className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest mb-4">Coming 2026</div>
                <h1 className="text-5xl md:text-7xl font-bold text-zinc-950 mb-6 font-grotesk">The AI Economist</h1>
                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 font-bold">
                    The Definitive Guide to R&D Capital Allocation
                </p>

                <p className="text-zinc-950 font-bold mb-12 text-lg leading-relaxed">
                    Why most engineering organizations are making uninformed capital allocation decisions with every sprint —
                    and the frameworks, metrics, and diagnostic tools to fix it. Based on advisory engagements with 50+ technology companies.
                </p>

                <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-zinc-400 mb-12">
                    <p className="text-sm font-semibold text-zinc-950 mb-4 font-mono uppercase tracking-widest">Get Notified at Launch</p>
                    <NewsletterForm
                        buttonText="Join Waitlist"
                        placeholder="your@email.com"
                        extraData={{ tool: 'book_waitlist' }}
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-zinc-900 font-bold font-mono uppercase tracking-widest mb-16">
                    <span>Technical Debt Valuation</span>
                    <span>•</span>
                    <span>AI Unit Economics</span>
                    <span>•</span>
                    <span>Engineering Capital ROI</span>
                </div>

                {/* FAQ Section */}
                <section className="border-t border-zinc-300 pt-12 text-left">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <FAQItem
                            question="When will The AI Economist book be published?"
                            answer="The book is scheduled for publication in late 2026."
                        />
                        <FAQItem
                            question="What core topics are covered in the book?"
                            answer="The book covers R&D capital allocation frameworks, technical debt valuation, AI unit economics modeling, and preventing margin collapse in production AI."
                        />
                        <FAQItem
                            question="How do I get early access?"
                            answer="By joining the waitlist above, you will receive early draft chapters, summaries, and launch-day notifications."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

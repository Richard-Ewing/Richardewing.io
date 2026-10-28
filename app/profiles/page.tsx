import { PublishedProfiles } from '@/components/PublishedProfiles';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Verified Author & Media Profiles',
    description: 'Verified publication directory for Product & AI Economist Richard Ewing across CIO.com, Built In, Mind the Product, HackerNoon, Exogram, and CareerWin.',
    keywords: [
        'Richard Ewing publications',
        'CIO.com contributor',
        'Built In author',
        'AI economist articles',
        'Mind the Product',
        'HackerNoon',
        'AI unit economics articles',
        'R&D audit thought leadership',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/profiles',
    },
    openGraph: {
        title: 'Verified Author & Media Profiles | Richard Ewing',
        description: 'Verified publication directory for Product & AI Economist Richard Ewing across CIO.com, Built In, Mind the Product, HackerNoon, Exogram, and CareerWin.',
        url: 'https://www.richardewing.io/profiles',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Verified Author & Media Profiles | Richard Ewing',
        description: 'Verified publication directory for Product & AI Economist Richard Ewing across CIO.com, Built In, Mind the Product, HackerNoon, Exogram, and CareerWin.',
        images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
    },
};

export default function ProfilesPage() {
    return (
        <main className="pt-24 pb-20 bg-[#FAF9F6] min-h-screen">
            <div className="page-container space-y-8">
                <header className="max-w-3xl space-y-3 border-b border-[var(--line)] pb-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-[var(--gold)]">
                        Entity Verification · Syndicated Bylines
                    </p>
                    <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] leading-tight">
                        Verified Author &amp; Media Profiles
                    </h1>
                    <p className="text-base text-[#4a5850] leading-relaxed">
                        Official contributor columns, syndicated research series, and founder directories for Product and AI Economist Richard Ewing across CIO.com, Built In, Mind the Product, HackerNoon, Substack, and The AI Economist newsletter.
                    </p>
                </header>

                <PublishedProfiles />

                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}

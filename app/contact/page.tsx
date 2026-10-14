import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/contact/contact-form';

export const metadata: Metadata = {
  title: 'Contact Richard Ewing | Executive Advisory & Keynote Inquiries',
  description:
    'Start a conversation about executive advisory, pricing sprints, keynote speaking, or AI unit economics research.',
  alternates: {
    canonical: 'https://www.richardewing.io/contact',
  },
  openGraph: {
    title: 'Contact Richard Ewing | Executive Advisory & Speaking',
    description:
      'Start a conversation about executive advisory, pricing sprints, or speaking engagements.',
    url: 'https://www.richardewing.io/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Richard Ewing',
    url: 'https://www.richardewing.io/contact',
    mainEntity: {
      '@type': 'Person',
      name: 'Richard Ewing',
      email: 'richardewing@exogram.ai',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Direct Inquiries · Executive Office
          </p>
          <h1>Let&apos;s talk about what&apos;s possible.</h1>
          <p className="inner-lede">
            Whether you are exploring a focused advisory sprint, booking a keynote, or
            seeking independent fiduciary oversight on your AI roadmap, I would love to
            hear from you.
          </p>

          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check first ↗
            </Link>
            <Link className="button button-outline" href="/advisory">
              Explore advisory paths
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>RESPONSE COMMITMENT</span>
          <strong>Direct Operator Reply</strong>
          <p>
            Inquiries are delivered directly to Richard. Expect a confidential response
            within 24 business hours.
          </p>
        </aside>
      </section>

      {/* Main Contact Form & Context */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Context */}
          <div className="lg:col-span-5 space-y-6">
            <p className="eyebrow">
              <i /> Confidential Inquiry
            </p>
            <h2 className="font-serif text-3xl font-medium text-[var(--ink)]">
              No sales reps. No consulting bureaucracy.
            </h2>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              When you get in touch, you talk directly with Richard. Every engagement
              starts with a frank examination of operational reality and unit economics.
            </p>

            <div className="p-6 bg-[#faf8f2] border border-[var(--line)] rounded-xl space-y-4 text-xs">
              <div className="font-serif text-base font-medium text-[var(--ink)]">
                Direct Channels:
              </div>
              <div className="space-y-2 text-zinc-700">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted)]">Email:</span>
                  <a
                    href="mailto:richardewing@exogram.ai"
                    className="font-mono text-[var(--forest)] font-bold hover:underline"
                  >
                    richardewing@exogram.ai
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted)]">LinkedIn:</span>
                  <a
                    href="https://www.linkedin.com/in/richard-ewing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[var(--forest)] font-bold hover:underline"
                  >
                    linkedin.com/in/richard-ewing ↗
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted)]">Newsletter:</span>
                  <Link
                    href="/newsletter"
                    className="font-mono text-[var(--forest)] font-bold hover:underline"
                  >
                    The AI Economist (11K+) ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-[#faf8f2] border border-[var(--line)] rounded-xl p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

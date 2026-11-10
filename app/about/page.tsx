import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '@/components/contact/contact-form';
import { personSchema } from '@/app/lib/schemas';

export const metadata: Metadata = {
  title: {
    absolute: 'Richard Ewing | Product & AI Economist & Founder',
  },
  description:
    'Richard Ewing is a Product & AI Economist ($25M ARR SaaS P&L), founder of Exogram.ai and CareerWin.ai, and CIO.com & Built In author advising CEOs and CFOs.',
  alternates: {
    canonical: 'https://www.richardewing.io/about',
  },
  openGraph: {
    title: 'Richard Ewing | Product & AI Economist & Founder',
    description:
      'Richard Ewing is a Product & AI Economist ($25M ARR SaaS P&L), founder of Exogram.ai and CareerWin.ai, and CIO.com & Built In author advising CEOs and CFOs.',
    url: 'https://www.richardewing.io/about',
    type: 'profile',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing | Product & AI Economist & Founder',
    description:
      'Richard Ewing is a Product & AI Economist ($25M ARR SaaS P&L), founder of Exogram.ai and CareerWin.ai, and CIO.com & Built In author advising CEOs and CFOs.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

export default function AboutPage() {
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://www.richardewing.io/about#profilepage',
    url: 'https://www.richardewing.io/about',
    name: 'About Richard Ewing | Product & AI Economist',
    mainEntity: personSchema,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.richardewing.io/about' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> About · Operator Provenance
          </p>
          <h1>Richard Ewing: Product Leader, AI Economist, and Operator.</h1>
          <p className="inner-lede">
            Richard Ewing is a Product and AI Economist with 15+ years of enterprise SaaS P&amp;L ownership, a computer science foundation, and a Finance MBA. Founder of Exogram and CareerWin, and contributor at CIO.com and Built In, he helps CEOs, CFOs, and CPOs turn AI spend into compounding margin.
          </p>

          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <a className="button button-outline" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="inner-aside glass space-y-4">
          <div className="w-full h-64 rounded-lg overflow-hidden relative">
            <Image
              src="/assets/images/richard-about.jpg"
              alt="Richard Ewing, Product & AI Economist"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center pt-2 border-t border-[var(--line)]">
            <div className="font-serif text-lg font-bold text-[var(--ink)]">
              Richard Ewing, MBA
            </div>
            <div className="text-xs text-[var(--muted)]">
              CS Foundation · Finance MBA · Founder
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Operator Principles */}
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-sm text-zinc-800 leading-relaxed">
            <h2 className="font-serif text-3xl font-medium text-[var(--ink)]">
              Connecting engineering spend directly to gross margin and enterprise value.
            </h2>
            <p>
              Over the last fifteen years, I have scaled software portfolios from early
              traction through $25M ARR, engineered +200% YoY turnarounds, and audited
              millions of dollars in engineering capital.
            </p>
            <p>
              When generative AI entered production, I observed the exact same failure mode
              that plagued previous software hype cycles: teams were writing enormous volumes
              of code and consuming vast compute budgets, yet shipping velocities stalled,
              PR review times doubled, and unit margins compressed.
            </p>
            <p>
              I founded <a href="https://exogram.ai" target="_blank" rel="noopener" className="underline font-semibold text-[var(--forest)]">Exogram (exogram.ai)</a> for contextual AI memory and runtime governance, founded <a href="https://careerwin.ai" target="_blank" rel="noopener" className="underline font-semibold text-[var(--forest)]">CareerWin (careerwin.ai)</a> to replace AI resume fluff with verified career records, and authored the 174+ piece <strong>AI Economist</strong> research corpus to help CEOs, CFOs, CPOs, and VPs of Engineering turn speculative AI spend into compounding gross margin.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
                <div className="font-serif text-2xl font-bold text-[var(--forest)]">
                  15+ Yrs
                </div>
                <div className="text-[11px] text-[var(--muted)] mt-1">
                  Product Leadership
                </div>
              </div>
              <div className="p-4 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
                <div className="font-serif text-2xl font-bold text-[var(--forest)]">
                  174+
                </div>
                <div className="text-[11px] text-[var(--muted)] mt-1">
                  Published Works
                </div>
              </div>
              <div className="p-4 bg-[#faf8f2] border border-[var(--line)] rounded-lg">
                <div className="font-serif text-2xl font-bold text-[var(--forest)]">
                  11K+
                </div>
                <div className="text-[11px] text-[var(--muted)] mt-1">
                  Executive Readers
                </div>
              </div>
            </div>
          </div>

          {/* Contact Box on Right */}
          <div id="contact" className="lg:col-span-5 bg-[#faf8f2] border border-[var(--line)] rounded-xl p-8 shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold)] block mb-1">
              Contact & Inquiries
            </span>
            <h3 className="font-serif text-2xl font-medium text-[var(--ink)] mb-2">
              Let&apos;s talk about what&apos;s possible.
            </h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
              Whether you&apos;re exploring executive advisory, a speaking engagement, or
              just want to discuss AI economics, I&apos;d love to hear from you.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

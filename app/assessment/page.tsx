import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FounderQuizEngine from '@/components/ai-product-builder/FounderQuizEngine';

export const metadata: Metadata = {
  title: 'AI Founder Readiness Diagnostic · 10-Question Benchmark | Richard Ewing',
  description:
    'Benchmark your product validation, technical architecture, cost governance, and capital readiness in 5 minutes with immediate scoring.',
  alternates: {
    canonical: 'https://www.richardewing.io/assessment',
  },
  openGraph: {
    title: 'AI Founder Readiness Diagnostic · 10-Question Benchmark | Richard Ewing',
    description:
      'Benchmark your product validation, technical architecture, cost governance, and capital readiness in 5 minutes with immediate scoring.',
    url: 'https://www.richardewing.io/assessment',
    type: 'website',
  },
};

export default function AssessmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Founder Readiness Diagnostic',
    description:
      'Benchmark your product validation, technical architecture, cost governance, and capital readiness in 5 minutes.',
    url: 'https://www.richardewing.io/assessment',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
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
            <i /> Diagnostic · Founder Readiness
          </p>
          <h1>AI Founder Readiness Benchmark</h1>
          <p className="inner-lede">
            Test your knowledge across cognitive architecture, semantic caching, legal
            formation, and GTM mechanics before investing months in code. Immediate scoring
            and empirical remediation steps.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run Flagship Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/tools">
              Explore All Diagnostics
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING INVARIANT</span>
          <strong>Test assumptions before writing code.</strong>
          <p>
            Avoid negative-carry architectures, prompt bloat, and unexpected token spend
            with a 5-minute pre-build check.
          </p>
        </aside>
      </section>

      {/* Main Diagnostic Engine */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <FounderQuizEngine />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Ready to Ship?</p>
        <h2>Build on hardened architectural foundations.</h2>
        <p>
          Explore our 21-Day AI Build Sprint or book a 1-on-1 P&amp;L Teardown to review
          your architecture.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/pricing-sprints">
            View Build Sprints ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}

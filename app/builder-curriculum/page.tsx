import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CurriculumMindmapViewer from '@/components/ai-product-builder/CurriculumMindmapViewer';

export const metadata: Metadata = {
  title: 'The AI Product Builder Master Curriculum',
  description:
    'Exhaustive 4-week syllabus for technical founders. Day-by-day sprint guides covering product validation, FastAPI, semantic caching, and GTM.',
  alternates: {
    canonical: 'https://www.richardewing.io/builder-curriculum',
  },
  openGraph: {
    title: 'The AI Product Builder Master Curriculum | Richard Ewing',
    description:
      'Exhaustive 4-week syllabus for technical founders. Day-by-day sprint guides covering product validation, FastAPI, semantic caching, and GTM.',
    url: 'https://www.richardewing.io/builder-curriculum',
    type: 'website',
  },
};

export default function BuilderCurriculumPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'The AI Product Builder Master Curriculum',
    description:
      'A concrete, day-by-day operational blueprint taking technical engineers through customer discovery, cognitive architecture, and initial paid pilots.',
    provider: {
      '@type': 'Person',
      name: 'Richard Ewing',
    },
    url: 'https://www.richardewing.io/builder-curriculum',
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
            <i /> Sovereign Asset Engine · Builder Academy
          </p>
          <h1>The AI Product Builder Master Curriculum</h1>
          <p className="inner-lede">
            Not another passive video course. A concrete, day-by-day operational blueprint
            taking technical engineers and founders through authentic problem validation,
            FastAPI backends, semantic caching, and landing your first 10 paying customers.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/pricing-sprints">
              View AI Build Sprints ↗
            </Link>
            <Link className="button button-outline" href="/operating-kit">
              Get $29 Operating Kit
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE ACADEMY MOAT</span>
          <strong>Research to Implementation</strong>
          <p>
            Research leads to Concept, Framework, Diagnostic, and finally Implementation.
            No commoditized courseware filler.
          </p>
        </aside>
      </section>

      {/* Main Mindmap Viewer */}
      <section className="section">
        <div className="max-w-6xl mx-auto">
          <CurriculumMindmapViewer />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Production Execution</p>
        <h2>Ready to ship production software?</h2>
        <p>
          Commission a 21-Day AI Build Sprint or get the complete $29 Operating Kit with
          all production financial models.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/pricing-sprints">
            View Engagement Tiers ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}

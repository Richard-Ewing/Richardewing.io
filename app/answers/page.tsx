import { Metadata } from 'next';
import Link from 'next/link';
import { SPOKE_MATRIX, Persona } from '../lib/spoke-data';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.richardewing.io/answers' },
  title: 'Enterprise AI Cost & Governance Q&A',
  description:
    'Direct answers to critical enterprise AI questions across board members, CTOs, CFOs, and engineering leaders. Cut through vendor hype with real data.',
};

export default function AnswersHubPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SPOKE_MATRIX.flatMap((topic) =>
      Object.values(topic.personas).flatMap((queries) =>
        queries
          ? queries.map((q) => ({
              '@type': 'Question',
              name: q.questionHeadline,
              acceptedAnswer: {
                '@type': 'Answer',
                text: `Detailed answer and analytical breakdown available on the Richard Ewing AI Economics Knowledge Base for ${q.questionHeadline}.`,
              },
            }))
          : []
      )
    ).slice(0, 30),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Knowledge Base · Decision Matrix
          </p>
          <h1>Engineering Economics Answer Matrix</h1>
          <p className="inner-lede">
            Hyper-specific answers to the hard questions on AI unit economics, technical
            debt, and R&amp;D capital efficiency. Select your executive role block below.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run Reality Check Diagnostic ↗
            </Link>
            <Link className="button button-outline" href="/research">
              Explore Research Library
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING PRINCIPLE</span>
          <strong>Ask the hard question. Measure the return.</strong>
          <p>
            Curated answers for CEOs, CFOs, CTOs, and Product Leaders with zero vendor
            fluff.
          </p>
        </aside>
      </section>

      {/* Answer Matrix */}
      <section className="section">
        <div className="max-w-4xl mx-auto space-y-12">
          {SPOKE_MATRIX.map((topic) => (
            <div
              key={topic.topicSlug}
              className="bg-white border border-[var(--line)] rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--line)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--forest)]" />
                <h2 className="text-2xl font-serif font-bold text-[var(--ink)]">
                  {topic.topicName}
                </h2>
              </div>

              <div className="space-y-10">
                {Object.entries(topic.personas).map(([personaStr, queries]) => {
                  const persona = personaStr as Persona;
                  return (
                    <div key={persona} className="space-y-4">
                      <h3 className="text-xs font-bold font-mono text-[var(--gold)] uppercase tracking-wider bg-[var(--paper2)] inline-block px-3 py-1 rounded">
                        For: {persona.replace('-', ' ')}
                      </h3>
                      <ul className="space-y-2.5">
                        {queries?.map((query) => (
                          <li key={query.questionSlug} className="group">
                            <Link
                              href={`/answers/${topic.topicSlug}/${persona}/${query.questionSlug}`}
                              className="flex items-start gap-3 p-4 bg-[var(--paper)]/50 hover:bg-white border border-[var(--line)] hover:border-[var(--gold)] rounded-xl transition-all shadow-xs"
                            >
                              <span className="text-[var(--gold)] font-bold mt-0.5">→</span>
                              <span className="text-[var(--ink)] text-sm font-serif font-bold group-hover:text-[var(--gold)] transition-colors">
                                {query.questionHeadline}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Direct Executive Consultation</p>
        <h2>Have a specific question about your AI roadmap?</h2>
        <p>
          Book a 1-on-1 working session to review your telemetry, contracts, and unit
          margins.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/contact?subject=Question+Matrix">
            Book 1-on-1 Session ↗
          </Link>
          <Link className="button button-ghost-light" href="/tools">
            Explore All Diagnostics ↗
          </Link>
        </div>
      </section>
    </>
  );
}

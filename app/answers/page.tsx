import { Metadata } from 'next';
import Link from 'next/link';
import { SPOKE_MATRIX, Persona } from '../lib/spoke-data';
import AnswersMatrixClient, { ClientSpokeTopic } from './AnswersMatrixClient';
import ScorecardCheckoutDrawer from '../components/ScorecardCheckoutDrawer';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.richardewing.io/answers' },
  title: 'AI Pricing, Automation & P&L Answers',
  description:
    'Direct, concrete answers on escaping the 80% vibe-coding trap, MCP agents, AEO/GEO citations, AI pricing, $250K+ PM interviews, and CFO board defense.',
};

export default function AnswersHubPage() {
  const stripHtml = (html: string) =>
    html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SPOKE_MATRIX.flatMap((topic) =>
      Object.values(topic.personas).flatMap((queries) =>
        queries
          ? queries.map((q) => {
              const cleanAnswer = stripHtml(q.answerHtml);
              return {
                '@type': 'Question',
                name: q.questionHeadline,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    cleanAnswer.length > 520
                      ? cleanAnswer.slice(0, 517).trim() + '...'
                      : cleanAnswer,
                },
              };
            })
          : []
      )
    ),
  };

  const clientTopics: ClientSpokeTopic[] = SPOKE_MATRIX.map((topic) => {
    const personas: ClientSpokeTopic['personas'] = {};
    (Object.entries(topic.personas) as [Persona, typeof topic.personas[Persona]][]).forEach(
      ([persona, queries]) => {
        if (queries) {
          personas[persona] = queries.map((q) => ({
            questionSlug: q.questionSlug,
            questionHeadline: q.questionHeadline,
          }));
        }
      }
    );
    return {
      topicSlug: topic.topicSlug,
      topicName: topic.topicName,
      personas,
    };
  });

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
          <h1>AI Building, Automation &amp; P&amp;L Answer Matrix</h1>
          <p className="inner-lede">
            Blunt, field-tested answers to the hardest questions on shipping vibe-coded apps to
            production, wiring governed MCP and n8n agents, getting cited by ChatGPT and
            Perplexity, pricing AI features for profit, and defending your R&amp;D roadmap to the
            board. Search or filter by role below.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run 60-Second Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/toolkit">
              Get the $29 Survival Kit ↗
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE OPERATING PRINCIPLE</span>
          <strong>Ask the hard question. Ship the working fix.</strong>
          <p>
            Curated answers for Builders, PMs, Founders, CTOs, and CFOs with zero vendor fluff.
          </p>
        </aside>
      </section>

      {/* Answer Matrix with Instant Search & Filter */}
      <section className="section">
        <AnswersMatrixClient topics={clientTopics} />
      </section>

      {/* Direct Conversion Drawer */}
      <section className="section pt-0">
        <div className="max-w-5xl mx-auto">
          <ScorecardCheckoutDrawer
            sourceTool="Answer Matrix (/answers)"
            headline="Need the Templates, a Live 60-Minute Fix, or a Done-For-You Sprint?"
            subheadline="Start tonight with our $29 Builder, PM & Operator Survival Kit, share your screen live with Richard for 60 minutes ($450), or have us build or automate your workflow in 14 to 21 days."
          />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Direct Executive &amp; Builder Consultation</p>
        <h2>Have a specific bottleneck on your app, workflow, or AI P&amp;L?</h2>
        <p>
          Book a 1-on-1 working session to review your codebase, unit margins, pricing tiers, or
          board defense deck live.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/services#gut_check">
            Book 60-Min 1-on-1 Session ($450) ↗
          </Link>
          <Link className="button button-ghost-light" href="/tools">
            Explore All 39 Free Calculators ↗
          </Link>
        </div>
      </section>
    </>
  );
}


import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { StarlingField } from '@/components/starling-field';

export const metadata: Metadata = {
  title: 'Richard Ewing | Product & AI Economist',
  description:
    'Helping CEOs, CFOs, and product leaders price AI features profitably, find engineering waste, and protect gross margins before the next board meeting.',
  alternates: {
    canonical: 'https://www.richardewing.io',
  },
  openGraph: {
    title: 'Richard Ewing | Product & AI Economist',
    description:
      'Helping CEOs, CFOs, and product leaders price AI features profitably, find engineering waste, and protect gross margins before the next board meeting.',
    url: 'https://www.richardewing.io',
    siteName: 'Richard Ewing',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing | Product & AI Economist',
    description:
      'Helping CEOs, CFOs, and product leaders price AI features profitably, find engineering waste, and protect gross margins before the next board meeting.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const outlets = [
  'CIO.com',
  'Built In',
  'Mind the Product',
  'HackerNoon',
  'LinkedIn',
  'Beehiiv',
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://www.richardewing.io/#person',
        name: 'Richard Ewing',
        jobTitle: 'Product & AI Economist',
        description:
          'Helping CEOs, CFOs, and product leaders price AI features profitably, find engineering waste, and protect gross margins.',
        url: 'https://www.richardewing.io',
        image: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg',
        sameAs: ['https://www.linkedin.com/in/richard-ewing/'],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.richardewing.io/#website',
        url: 'https://www.richardewing.io',
        name: 'Richard Ewing',
        publisher: { '@id': 'https://www.richardewing.io/#person' },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 01. HERO SECTION */}
      <section className="hero">
        <div className="hero-atmosphere" />
        <StarlingField />

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> Product & AI Economist · Enterprise software
            </p>
            <h1>
              Your AI bill goes up.
              <br />
              Your team isn’t shipping any faster.
              <br />
              <em>Fix the economics.</em>
            </h1>
            <p className="hero-lede">
              I help CEOs, CFOs, and product leaders price AI features profitably, find
              engineering waste, and protect gross margins before the next board meeting.
            </p>

            <div className="actions">
              <Link className="button button-gold" href="/reality-check">
                Run the free Reality Check ↗
              </Link>
              <Link className="button button-outline" href="/advisory">
                Explore executive advisory
              </Link>
            </div>

            <div className="proof-mini">
              <span>
                15+ years
                <small>product leadership</small>
              </span>
              <span>
                174+
                <small>published works</small>
              </span>
              <span>
                11K+
                <small>LinkedIn audience</small>
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-wrap">
              <Image
                src="/assets/images/richard-ewing-headshot.jpg"
                alt="Richard Ewing, Product & AI Economist"
                width={540}
                height={680}
                priority
                className="hero-photo"
              />
              <div className="photo-caption glass">
                <strong>Richard Ewing, MBA</strong>
                <span>Product & AI Economist</span>
                <span>Founder · Exogram AI & CareerWin</span>
              </div>
            </div>

            <div className="floating-note glass">
              <span className="note-dot" />
              Turning AI from a cost center into compound capital.
            </div>

            <div className="visual-index">01 / ECONOMICS IN MOTION</div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>As published in</span>
          {outlets.map((outlet) => (
            <strong key={outlet}>{outlet}</strong>
          ))}
        </div>
      </section>

      {/* 02. THE PROBLEM */}
      <section className="section problem-section">
        <div className="section-heading reveal">
          <p className="eyebrow">
            <i /> The problem
          </p>
          <h2>More AI activity doesn’t automatically create more value.</h2>
          <p>
            AI usage can rise while output stalls and margins erode. The missing layer is
            economic visibility.
          </p>
        </div>

        <div className="problem-cards">
          {[
            {
              n: '01',
              title: 'AI usage up.',
              body: 'Inference costs, retries, and exception handling can rise faster than revenue.',
              img: '/images/ai-usage.svg',
              metric: '+312% API Invocations',
            },
            {
              n: '02',
              title: 'Output isn’t scaling.',
              body: 'Teams produce more code and activity without proportionate shipped value.',
              img: '/images/abstract-output.svg',
              metric: '1.0x Velocity Index',
            },
            {
              n: '03',
              title: 'Margins are at risk.',
              body: 'Without unit economics, AI initiatives can quietly turn growth into cost.',
              img: '/images/margin-risk.svg',
              metric: '-37% Margin Compression',
            },
          ].map((c) => (
            <article className="problem-card reveal" key={c.n}>
              <div
                className="card-art"
                style={{
                  backgroundImage: `url(${c.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span className="card-art-metric">{c.metric}</span>
              </div>
              <span className="card-index">{c.n} / SIGNAL</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 03. A PRACTICAL PATH */}
      <section className="section split-section">
        <div className="section-heading reveal">
          <p className="eyebrow">
            <i /> A practical path
          </p>
          <h2>From AI activity to measurable outcomes.</h2>
          <p>
            Research, diagnostics, and advisory built to help leaders find the leak,
            understand the cause, and decide what to do next.
          </p>
          <Link className="text-link" href="/framework">
            Explore the framework ↗
          </Link>
        </div>

        <div className="path-list">
          {[
            {
              n: '01',
              t: 'Measure',
              d: 'Understand spend, cost per task, and usage patterns.',
              href: '/tools',
            },
            {
              n: '02',
              t: 'Find waste',
              d: 'Identify retries, redundant tools, maintenance burden, and review drag.',
              href: '/reality-check',
            },
            {
              n: '03',
              t: 'Model the economics',
              d: 'Stress-test pricing, unit margins, and return assumptions.',
              href: '/roi-calculator',
            },
            {
              n: '04',
              t: 'Act with confidence',
              d: 'Prioritize remediation and connect the work to business outcomes.',
              href: '/advisory',
            },
          ].map((x) => (
            <Link href={x.href} className="path-row reveal" key={x.n}>
              <span>{x.n}</span>
              <div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
              <b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      {/* 04. PUBLICATION BAND */}
      <section className="publication-band">
        <div>
          <p className="eyebrow">Research-backed perspective</p>
          <h2>Published work for builders and leaders.</h2>
          <p>
            Essays, frameworks, and tools on AI economics, product strategy,
            engineering productivity, and governance.
          </p>
          <Link className="button button-dark" href="/research/publications">
            Explore publications ↗
          </Link>
        </div>

        <div className="publication-logos">
          {outlets.map((x) => (
            <strong key={x}>{x}</strong>
          ))}
        </div>
      </section>

      {/* 05. CHOOSE YOUR NEXT STEP */}
      <section className="section offer-section">
        <div className="section-heading reveal">
          <p className="eyebrow">
            <i /> Choose your next step
          </p>
          <h2>Useful before you ever book a call.</h2>
        </div>

        <div className="offer-grid">
          {[
            {
              title: 'Run the Reality Check',
              body: 'Find the biggest gaps between AI claims and operational reality.',
              tag: 'START HERE',
              href: '/reality-check',
            },
            {
              title: 'Explore the research',
              body: 'Read the underlying ideas, evidence, and practical frameworks.',
              tag: 'LEARN',
              href: '/research',
            },
            {
              title: 'Work with Richard',
              body: 'Apply the economics to your roadmap, AI stack, or product P&L.',
              tag: 'ADVISORY',
              href: '/advisory',
            },
          ].map((x) => (
            <Link className="offer-card reveal" href={x.href} key={x.title}>
              <span>{x.tag}</span>
              <h3>{x.title}</h3>
              <p>{x.body}</p>
              <b>Explore ↗</b>
            </Link>
          ))}
        </div>
      </section>

      {/* 06. CLOSING CTA */}
      <section className="closing-cta">
        <p className="eyebrow">A clear next step</p>
        <h2>Stop guessing about AI ROI.</h2>
        <p>Start with the economics. Then decide what deserves more investment.</p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the free Reality Check ↗
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { StarlingField } from '@/components/starling-field';
import {
  AnimatedSignalCards,
  InteractiveVocabGrid,
  CopyableCharterKit,
} from '@/components/workplace/WorkplaceBentoClient';

export const metadata: Metadata = {
  title: 'AI Workplace & Leadership Playbooks',
  description:
    'I advise CEOs, VPs, and Engineering Managers on stopping workslop, fixing eight-report spans, and rebuilding trust without layoff theater.',
  keywords: [
    'AI workplace leadership',
    'workslop',
    'botsitting',
    'middle management AI',
    'engineering manager span of control',
    'AI brain fry',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/ai-workplace-leadership',
  },
  openGraph: {
    title: 'AI Workplace & Leadership Playbooks | Richard Ewing',
    description:
      'I advise CEOs, VPs, and Engineering Managers on stopping workslop, fixing eight-report spans, and rebuilding trust without layoff theater.',
    url: 'https://www.richardewing.io/ai-workplace-leadership',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=AI+Workplace+%26+Leadership&category=Advisory+Field+Notes',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workplace & Leadership Playbooks | Richard Ewing',
    description:
      'I advise CEOs, VPs, and Engineering Managers on stopping workslop, fixing eight-report spans, and rebuilding trust without layoff theater.',
    images: [
      'https://www.richardewing.io/api/og?title=AI+Workplace+%26+Leadership&category=Advisory+Field+Notes',
    ],
  },
};

const sourcesCrossChecked = [
  'Glean Index',
  'Stanford / BetterUp',
  'Visier',
  'HBR',
  'NBER',
  'Reddit & HN',
];

export default function AIWorkplaceLeadershipPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Workplace & Leadership Playbooks by Richard Ewing',
    description:
      'Field-tested leadership playbooks on stopping workslop, repairing eight-report manager spans, and rebuilding team trust.',
    url: 'https://www.richardewing.io/ai-workplace-leadership',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
      url: 'https://www.richardewing.io',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Workplace & Leadership',
        item: 'https://www.richardewing.io/ai-workplace-leadership',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a meat-proxy leader in an AI workplace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A meat-proxy leader forwards AI-generated memos, roadmaps, and feedback they barely read. Employees spot the synthetic phrasing in seconds, assume speed matters more than judgment, and stop sharing bad news upward.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do flattened teams break past eight direct reports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Flattening layers past seven or eight direct reports forces surviving Engineering Managers to absorb AI twice: adopting new tools themselves while cleaning up unchecked team outputs and losing all coaching bandwidth.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do teams stop workslop and botsitting burnout?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ban raw copy-pasted AI replies in internal Slack channels and design docs, require a human owner to verify every claim before shipping, and stop evaluating employees on raw token consumption.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 01. HERO BENTO */}
      <section className="hero">
        <div className="hero-atmosphere" />
        <StarlingField />

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> AI Workplace &amp; Leadership · Advisory Field Notes
            </p>
            <h1>
              You rolled out AI.
              <br />
              Now I watch trust crack.
              <br />
              <em>We fix how you lead.</em>
            </h1>
            <p className="hero-lede">
              I advise CEOs, VPs of Engineering, and Engineering Managers on how we kill workslop,
              repair broken spans of control, and earn back candor before your best people walk.
            </p>

            <div className="actions">
              <a className="button button-gold" href="#golden-sample">
                Read My 3 Golden Essays ↗
              </a>
              <a className="button button-outline" href="#charters">
                Grab the Charters I Use
              </a>
            </div>

            <div className="proof-mini">
              <span>
                6.4 hrs/wk
                <small>you lose to botsitting</small>
              </span>
              <span>
                48%
                <small>fake AI fluency for you</small>
              </span>
              <span>
                61%
                <small>prefer AI over their boss</small>
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-wrap">
              <Image
                src="/assets/images/richard-ewing-headshot.jpg"
                alt="Richard Ewing, AI Workplace & Leadership Advisor"
                width={540}
                height={680}
                priority
                className="hero-photo"
              />
              <div className="photo-caption glass">
                <strong>Richard Ewing, MBA</strong>
                <span>I Advise Leaders on AI Work</span>
                <span>Founder · Exogram AI &amp; CareerWin</span>
              </div>
            </div>

            <div className="floating-note glass">
              <span className="note-dot" />
              Call me blunt: AI did not break your managers. It showed us who only routed status updates.
            </div>

            <div className="visual-index">01 / LEADERSHIP IN MOTION</div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>Sources I cross-checked</span>
          {sourcesCrossChecked.map((src) => (
            <strong key={src}>{src}</strong>
          ))}
        </div>
      </section>

      {/* 02. ANIMATED SIGNAL CARDS BENTO */}
      <section className="section problem-section">
        <div className="section-heading reveal">
          <p className="eyebrow">
            <i /> What I see on your floor
          </p>
          <h2>I keep telling leaders the same thing: mandates fail.</h2>
          <p>
            You watch personal speed jump while I see team trust slide. When we ignore cleanup
            hours and layoff fear, your managers snap first.
          </p>
        </div>

        <AnimatedSignalCards />
      </section>

      {/* 03. SPLIT TRACKS BENTO */}
      <section className="section split-section">
        <div className="section-heading reveal">
          <p className="eyebrow">
            <i /> How we fix it together
          </p>
          <h2>Ten playbooks I hand you when we work together.</h2>
          <p>
            Every guide comes from rooms where you asked me why AI made work louder instead of
            calmer. Start where your floor hurts most.
          </p>
          <Link className="text-link" href="/blog">
            Browse the full essay library ↗
          </Link>
        </div>

        <div className="path-list">
          <Link href="/blog/stop-being-a-meat-proxy-leader" className="path-row reveal">
            <span>01</span>
            <div>
              <h3>Track A: How You Lead From the Top</h3>
              <p>
                I advise you on dropping meat-proxy memos, killing 14-day deadlines, and earning back real permission.
              </p>
            </div>
            <b>↗</b>
          </Link>

          <Link href="/blog/absorbing-ai-twice-eight-report-cliff" className="path-row reveal">
            <span>02</span>
            <div>
              <h3>Track B: How We Rewire Management</h3>
              <p>
                We reset eight-report cliffs, stop headcount empire building, and pull AI agents off your org chart.
              </p>
            </div>
            <b>↗</b>
          </Link>

          <Link href="/blog/workslop-tax-botsitting-burnout" className="path-row reveal">
            <span>03</span>
            <div>
              <h3>Track C: How We Clean Up Floor Culture</h3>
              <p>
                I show you how we curb workslop, cool down AI brain fry, set bot consent rules, and save junior rungs.
              </p>
            </div>
            <b>↗</b>
          </Link>

          <a href="#charters" className="path-row reveal">
            <span>04</span>
            <div>
              <h3>Charters You Can Paste Monday</h3>
              <p>
                Take what I hand clients: my Team AI Slop Charter, Human Holdback Rule, and Span Reset scorecard.
              </p>
            </div>
            <b>↗</b>
          </a>
        </div>
      </section>

      {/* 04. WARM LINEN VOCABULARY BENTO */}
      <section className="publication-band">
        <div>
          <p className="eyebrow">Words your floor whispers to me</p>
          <h2>Built around what your team actually vents about.</h2>
          <p>
            You will not read vendor fluff from me. I open each guide with a 35-word answer, tell
            you what broke on real teams, and hand you a 5-minute check we can run before Tuesday.
          </p>
          <a className="button button-dark" href="#golden-sample">
            Read My Golden Sample ↗
          </a>
        </div>

        <InteractiveVocabGrid />
      </section>

      {/* 05. WAVE 1 GOLDEN SAMPLE + COPYABLE CHARTERS */}
      <section id="golden-sample" className="section offer-section">
        <div className="section-heading reveal">
          <p className="eyebrow">
            <i /> Wave 1 · My 3 Golden Sample Playbooks
          </p>
          <h2>Test my first three with me before we scale to ten.</h2>
        </div>

        <div className="offer-grid">
          <Link className="offer-card reveal" href="/blog/stop-being-a-meat-proxy-leader">
            <span>TRACK A · FOR YOU (CEO &amp; VP)</span>
            <h3>Stop Sending Meat-Proxy Memos</h3>
            <p>
              I have watched one pasted AI Slack note cost a VP six months of candor. Use my Human Holdback Rule.
            </p>
            <b>Read With Me ↗</b>
          </Link>

          <Link className="offer-card reveal" href="/blog/absorbing-ai-twice-eight-report-cliff">
            <span>TRACK B · FOR YOUR MANAGERS</span>
            <h3>We Have to Fix Your 8-Report Cliff</h3>
            <p>
              You flattened the chart and left managers absorbing AI twice. Run my Span Reset Scorecard with me.
            </p>
            <b>Read With Me ↗</b>
          </Link>

          <Link className="offer-card reveal" href="/blog/workslop-tax-botsitting-burnout">
            <span>TRACK C · FOR YOUR FLOOR</span>
            <h3>How We Kill Workslop &amp; Botsitting</h3>
            <p>
              Your people lose 6.4 hours a week babysitting bots for you. Paste my Team AI Slop Charter Monday.
            </p>
            <b>Read With Me ↗</b>
          </Link>
        </div>

        <div id="charters">
          <CopyableCharterKit />
        </div>
      </section>

      {/* 06. CLOSING CTA BENTO */}
      <section className="closing-cta">
        <p className="eyebrow">Let me advise you first</p>
        <h2>Let me look at your floor before trust breaks.</h2>
        <p>We run one 5-minute check on your team first. You keep what holds up; we cut the theater.</p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the Check With Me ↗
          </Link>
          <Link
            className="button button-ghost-light"
            href="/schedule?source=ai-workplace-leadership"
          >
            Ask Me to Advise Your Team
          </Link>
        </div>
      </section>
    </>
  );
}

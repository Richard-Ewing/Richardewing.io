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
      {
        '@type': 'Question',
        name: 'Why do 14-day AI software deadlines fail in production?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Coding assistants speed up five-file prototypes on mock data, yet security reviews, permission boundaries, data migrations, and legacy integration still require human verification.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should companies put AI agents on their org chart?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Putting software agents inside org chart boxes diffuses accountability during silent failures. Track automated workflows inside an infrastructure registry with one named human owner and hard spend caps.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do leaders prevent AI brain fry and meeting bot legal risk?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Protect daily two-hour AI-Quiet deep-work blocks without agent review pings, disable global auto-join on meeting bots, and keep automated transcription out of 1-on-1s and HR discussions.',
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
              <a className="button button-gold" href="#playbooks">
                Browse All 10 Playbooks ↗
              </a>
              <a className="button button-outline" href="#charters">
                Grab the 7 Charters I Use
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
          <a href="#track-a" className="path-row reveal">
            <span>01</span>
            <div>
              <h3>Track A: How You Lead From the Top</h3>
              <p>
                Essays 1, 4 &amp; 5: dropping meat-proxy memos, killing 14-day deadlines, and rebuilding social permission.
              </p>
            </div>
            <b>↗</b>
          </a>

          <a href="#track-b" className="path-row reveal">
            <span>02</span>
            <div>
              <h3>Track B: How We Rewire Management</h3>
              <p>
                Essays 2, 6, 7 &amp; 8: fixing eight-report cliffs, stopping empire building, keeping agents off org charts, and mission pods.
              </p>
            </div>
            <b>↗</b>
          </a>

          <a href="#track-c" className="path-row reveal">
            <span>03</span>
            <div>
              <h3>Track C: How We Clean Up Floor Culture</h3>
              <p>
                Essays 3, 9 &amp; 10: curbing workslop, cooling AI brain fry, setting bot consent rules, and saving junior rungs.
              </p>
            </div>
            <b>↗</b>
          </a>

          <a href="#charters" className="path-row reveal">
            <span>04</span>
            <div>
              <h3>Charters You Can Paste Monday</h3>
              <p>
                Take all 7 templates I hand clients: Holdback Rule, Span Reset, Slop Charter, 14-Day Brief, Agent Matrix, Bot Consent, and Reverse Mentoring.
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
          <a className="button button-dark" href="#playbooks">
            Read All 10 Playbooks ↗
          </a>
        </div>

        <InteractiveVocabGrid />
      </section>

      {/* 05. ALL 10 PLAYBOOKS BY TRACK + COPYABLE CHARTERS */}
      <section id="playbooks" className="section offer-section">
        <div id="golden-sample" className="section-heading reveal">
          <p className="eyebrow">
            <i /> Complete Series · All 10 Workplace &amp; Leadership Playbooks
          </p>
          <h2>Every field guide in the series, organized by where your floor hurts most.</h2>
        </div>

        {/* TRACK A: LEADING FROM THE TOP */}
        <div id="track-a" className="mt-10 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--line)] pb-3">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#8a571c] block">
                Track A · Leading From the Top (3 Playbooks)
              </span>
              <h3 className="font-serif text-2xl text-[var(--ink)] mt-1 mb-0">
                For CEOs, CFOs &amp; VPs setting expectations and candor norms
              </h3>
            </div>
            <span className="font-mono text-xs text-[#3e4a42]">Essays 1, 4 &amp; 5</span>
          </div>

          <div className="offer-grid !mt-6">
            <Link className="offer-card reveal" href="/blog/stop-being-a-meat-proxy-leader">
              <span className="!text-[#8a571c] font-semibold">ESSAY 01 · EXECUTIVE VOICE</span>
              <h3>Stop Sending Meat-Proxy Memos</h3>
              <p className="!text-[#3e4a42]">
                I have watched one pasted AI Slack note cost a VP six months of candor. Use my Human Holdback Rule.
              </p>
              <b>Read With Me ↗</b>
            </Link>

            <Link className="offer-card reveal" href="/blog/you-have-ai-14-day-deadline-trap">
              <span className="!text-[#8a571c] font-semibold">ESSAY 04 · BOARD EXPECTATIONS</span>
              <h3>The &quot;You Have AI&quot; 14-Day Deadline Trap</h3>
              <p className="!text-[#3e4a42]">
                Boards confuse five-file prototypes with production shipping. Hand them my Realistic Delivery Scoping Brief.
              </p>
              <b>Read With Me ↗</b>
            </Link>

            <Link className="offer-card reveal" href="/blog/rebuilding-internal-social-permission">
              <span className="!text-[#8a571c] font-semibold">ESSAY 05 · TRUST RESET</span>
              <h3>Rebuilding Internal Social Permission</h3>
              <p className="!text-[#3e4a42]">
                Nearly half of workers fake AI fluency out of layoff panic. Use my Unscripted Town-Hall Q&amp;A Script.
              </p>
              <b>Read With Me ↗</b>
            </Link>
          </div>
        </div>

        {/* TRACK B: REWIRING MANAGEMENT */}
        <div id="track-b" className="mt-14 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--line)] pb-3">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#8a571c] block">
                Track B · Rewiring Management (4 Playbooks)
              </span>
              <h3 className="font-serif text-2xl text-[var(--ink)] mt-1 mb-0">
                For VPs of Engineering, Directors &amp; Operations Leads fixing org design
              </h3>
            </div>
            <span className="font-mono text-xs text-[#3e4a42]">Essays 2, 6, 7 &amp; 8</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Link className="offer-card reveal" href="/blog/absorbing-ai-twice-eight-report-cliff">
              <span className="!text-[#8a571c] font-semibold">ESSAY 02 · SPAN OF CONTROL</span>
              <h3>Absorbing AI Twice &amp; The 8-Report Cliff</h3>
              <p className="!text-[#3e4a42]">
                You flattened the chart and left managers absorbing AI twice. Run my Span Reset Scorecard with me.
              </p>
              <b>Read With Me ↗</b>
            </Link>

            <Link className="offer-card reveal" href="/blog/death-of-headcount-empire-building">
              <span className="!text-[#8a571c] font-semibold">ESSAY 06 · INCENTIVE REDESIGN</span>
              <h3>The Death of Empire Building</h3>
              <p className="!text-[#3e4a42]">
                Decouple pay and status from direct-report counts using our Player-Coach vs. Coordinator Scorecard.
              </p>
              <b>Read With Me ↗</b>
            </Link>

            <Link className="offer-card reveal" href="/blog/stop-putting-ai-agents-on-org-chart">
              <span className="!text-[#8a571c] font-semibold">ESSAY 07 · ACCOUNTABILITY GATES</span>
              <h3>Stop Putting AI Agents on Your Org Chart</h3>
              <p className="!text-[#3e4a42]">
                Software boxes create blame deflection when workflows fail silently. Enforce our Human Accountability Matrix.
              </p>
              <b>Read With Me ↗</b>
            </Link>

            <Link className="offer-card reveal" href="/blog/mission-is-the-boss-flatter-orgs">
              <span className="!text-[#8a571c] font-semibold">ESSAY 08 · OUTCOME PODS</span>
              <h3>&quot;Mission Is the Boss&quot; in Flatter Orgs</h3>
              <p className="!text-[#3e4a42]">
                Replace 1893 pyramid sign-offs with outcome-first backtracking, Flash Teams, and 24-hour escalation rules.
              </p>
              <b>Read With Me ↗</b>
            </Link>
          </div>
        </div>

        {/* TRACK C: FIXING FLOOR CULTURE */}
        <div id="track-c" className="mt-14 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[var(--line)] pb-3">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#8a571c] block">
                Track C · Fixing Floor Culture (3 Playbooks)
              </span>
              <h3 className="font-serif text-2xl text-[var(--ink)] mt-1 mb-0">
                For Engineering Managers, Staff Engineers &amp; People Leaders protecting flow
              </h3>
            </div>
            <span className="font-mono text-xs text-[#3e4a42]">Essays 3, 9 &amp; 10</span>
          </div>

          <div className="offer-grid !mt-6">
            <Link className="offer-card reveal" href="/blog/workslop-tax-botsitting-burnout">
              <span className="!text-[#8a571c] font-semibold">ESSAY 03 · CLEANUP TAX</span>
              <h3>The Workslop Tax &amp; Botsitting Burnout</h3>
              <p className="!text-[#3e4a42]">
                Your people lose 6.4 hours a week babysitting bots for you. Paste my Team AI Slop Charter Monday.
              </p>
              <b>Read With Me ↗</b>
            </Link>

            <Link className="offer-card reveal" href="/blog/ai-brain-fry-and-the-unblinking-ear">
              <span className="!text-[#8a571c] font-semibold">ESSAY 09 · COGNITIVE &amp; LEGAL RISK</span>
              <h3>AI Brain Fry &amp; The Unblinking Ear</h3>
              <p className="!text-[#3e4a42]">
                Constant agent review kills flow state while lingering meeting bots create discovery risk. Set AI-Quiet Hours.
              </p>
              <b>Read With Me ↗</b>
            </Link>

            <Link className="offer-card reveal" href="/blog/eating-your-seed-corn-junior-rungs">
              <span className="!text-[#8a571c] font-semibold">ESSAY 10 · TALENT PIPELINE</span>
              <h3>Eating Your Seed Corn: Junior Rungs</h3>
              <p className="!text-[#3e4a42]">
                Automating entry-level work destroys your future senior bench. Run my 4-Week Reverse-Mentoring Sprint.
              </p>
              <b>Read With Me ↗</b>
            </Link>
          </div>
        </div>

        <div id="charters" className="scroll-mt-24">
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

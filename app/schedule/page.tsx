import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Linkedin, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import CalEmbed from '@/app/components/client/CalEmbed';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
  title: 'Schedule Executive Advisory',
  description:
    'Book a direct diagnostic session, technical insolvency audit, or executive advisory briefing with AI Economist Richard Ewing.',
  alternates: {
    canonical: 'https://www.richardewing.io/schedule',
  },
  openGraph: {
    title: 'Schedule Executive Advisory | Richard Ewing',
    description:
      'Book a direct diagnostic session, technical insolvency audit, or executive advisory briefing with AI Economist Richard Ewing.',
    url: 'https://www.richardewing.io/schedule',
    type: 'website',
  },
};

export default function SchedulePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What advisory sessions are available to book?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer three primary sessions: (1) Rapid Gut-Check ($450, 30 min) for urgent cloud/API cost triage, (2) 1-on-1 Hourly Advisory ($650, 60 min) for hands-on architecture reviews and vendor vetting, and (3) Technical Insolvency Audit ($2,500, 60 min) which includes a formal Product Debt Index (PDI) calculation and a 30-day capital recovery roadmap. For ongoing support, fractional retainers are available at $10,000/month.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does payment and confirmation work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Payment is processed securely via Stripe at the time of booking. Once payment clears, Cal.com instantly reserves your slot, adds the event to Google Calendar, and generates an automated Google Meet video room.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I prepare for our session?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bring real numbers: your current cloud provider bills, API token commitments, architecture diagrams, or vendor proposals. No slide decks or formal presentations are needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are all sessions held under strict confidentiality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All discovery discussions, repository metrics, and cloud billing logs are held under strict confidentiality. Mutual NDAs are executed prior to any technical review.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I need to reschedule or cancel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every confirmation email includes a direct link to reschedule or cancel your session with at least 24 hours advance notice. Your booking payment automatically applies to your rescheduled slot.',
        },
      },
    ],
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
            <i /> Direct Advisory · Executive Calendar
          </p>
          <h1>Schedule an Executive Advisory Session</h1>
          <p className="inner-lede">
            Founders, CTOs, and Private Equity Operating Partners: Book a direct
            diagnostic, audit your AI unit economics, or schedule an executive briefing.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/pricing-sprints">
              View All Sprints &amp; Tiers ↗
            </Link>
            <Link className="button button-outline" href="/reality-check">
              Run Reality Check Diagnostic
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>CALENDAR AVAILABILITY</span>
          <strong>Direct 1-on-1 Sessions</strong>
          <p>
            Slots are opened on a rolling 14-day basis to preserve deep focus for active
            turnaround clients.
          </p>
        </aside>
      </section>

      {/* Booking Container Grid */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left: Cal.com Embed */}
            <div className="lg:col-span-8 bg-white border border-[var(--line)] rounded-2xl p-4 sm:p-6 shadow-sm min-h-[660px] flex flex-col relative overflow-hidden">
              <CalEmbed calLink="richard-ewing-2cevwb" />
            </div>

            {/* Right: Context & Authority Rail */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
              <div className="bg-white border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                <h3 className="text-base font-serif font-bold text-[var(--ink)] mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--gold)]" />
                  Session Structure
                </h3>
                <ul className="space-y-3 text-xs text-[var(--muted)] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[var(--ink)]">Rapid Gut-Check (30 Min):</strong> Immediate sanity check on runaway API spend and unit economics traps.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[var(--ink)]">1-on-1 Hourly Advisory (60 Min):</strong> Direct working session for architecture reviews and vendor vetting.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[var(--ink)]">Technical Insolvency Audit (60 Min):</strong> Deep-dive PDI calculation and a 30-day capital recovery roadmap.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[var(--ink)]">Executive Retainers:</strong> Introductory briefing for enterprise teams and PE portfolio review.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Confidentiality Box */}
              <div className="p-6 bg-white border border-[var(--line)] rounded-2xl flex flex-col shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[var(--paper2)] flex items-center justify-center border border-[var(--line)]">
                    <ShieldCheck className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono text-[var(--gold)] uppercase tracking-wider block">
                      CONFIDENTIALITY ASSURED
                    </span>
                    <h4 className="text-sm font-serif font-bold text-[var(--ink)]">
                      Mutual NDA Protocol
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed mt-2">
                  All metrics, cloud bills, and architecture reviews remain confidential.
                  Mutual NDAs are executed prior to code or log access.
                </p>
              </div>

              {/* Direct Channel Fallback */}
              <div className="bg-white border border-[var(--line)] rounded-2xl p-6 shadow-sm">
                <div className="text-xs font-mono font-bold text-[var(--muted)] uppercase tracking-widest mb-3">
                  Direct Channels
                </div>
                <div className="space-y-2.5">
                  <a
                    href="mailto:richardewing@exogram.ai"
                    className="flex items-center gap-3 p-3 bg-[var(--paper)] border border-[var(--line)] rounded-xl hover:border-[var(--gold)] transition-all text-xs font-bold text-[var(--ink)]"
                  >
                    <Mail className="w-4 h-4 text-[var(--gold)]" />
                    <span>richardewing@exogram.ai</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/richard-ewing-mba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[var(--paper)] border border-[var(--line)] rounded-xl hover:border-[var(--gold)] transition-all text-xs font-bold text-[var(--ink)]"
                  >
                    <Linkedin className="w-4 h-4 text-[var(--gold)]" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="border-t border-[var(--line)] pt-12">
            <h2 className="text-2xl font-serif font-bold text-[var(--ink)] mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <FAQItem
                question="What advisory sessions are available to book?"
                answer="We offer three primary sessions: (1) Rapid Gut-Check ($450, 30 min) for urgent cloud/API cost triage, (2) 1-on-1 Hourly Advisory ($650, 60 min) for hands-on architecture reviews and vendor vetting, and (3) Technical Insolvency Audit ($2,500, 60 min) which includes a formal Product Debt Index (PDI) calculation and a 30-day capital recovery roadmap. For ongoing support, fractional retainers are available at $10,000/month."
              />
              <FAQItem
                question="How does payment and confirmation work?"
                answer="Payment is processed securely via Stripe at the time of booking. Once payment clears, Cal.com instantly reserves your slot, adds the event to Google Calendar, and generates an automated Google Meet video room."
              />
              <FAQItem
                question="What should I prepare for our session?"
                answer="Bring real numbers: your current cloud provider bills, API token commitments, architecture diagrams, or vendor proposals. No slide decks or formal presentations are needed."
              />
              <FAQItem
                question="Are all sessions held under strict confidentiality?"
                answer="Yes. All discovery discussions, repository metrics, and cloud billing logs are held under strict confidentiality. Mutual NDAs are executed prior to any technical review."
              />
              <FAQItem
                question="What if I need to reschedule or cancel?"
                answer="Every confirmation email includes a direct link to reschedule or cancel your session with at least 24 hours advance notice. Your booking payment automatically applies to your rescheduled slot."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Enterprise Turnaround</p>
        <h2>Ready to align your product P&amp;L?</h2>
        <p>
          Select an available slot above, or reach out directly to discuss custom
          requirements.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/reality-check">
            Run the free Reality Check ↗
          </Link>
          <Link className="button button-ghost-light" href="/contact">
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}

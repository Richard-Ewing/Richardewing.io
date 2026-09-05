import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Linkedin, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import CalEmbed from '@/app/components/client/CalEmbed';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
  title: 'Schedule Executive Advisory | Richard Ewing',
  description: 'Book a direct diagnostic session, technical insolvency audit, or executive advisory briefing with AI Economist Richard Ewing.',
  alternates: {
    canonical: 'https://www.richardewing.io/schedule',
  },
  openGraph: {
    title: 'Schedule Executive Advisory | Richard Ewing',
    description: 'Book a direct diagnostic session, technical insolvency audit, or executive advisory briefing with AI Economist Richard Ewing.',
    url: 'https://www.richardewing.io/schedule',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Executive Advisory | Richard Ewing',
    description: 'Book a direct diagnostic session, technical insolvency audit, or executive advisory briefing with AI Economist Richard Ewing.',
    images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
  },
};

export default function SchedulePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What sessions are available to book?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'You can book a 30-minute Rapid Gut-Check Evaluation, a 60-minute Technical Insolvency Audit, or an introductory Executive Advisory Briefing for enterprise retainers.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Are meetings conducted under confidentiality?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. All discovery discussions, repository metrics, and cloud billing logs are held under strict confidentiality. Mutual NDAs are executed prior to any technical review.'
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <Link href="/" className="hover:text-cyan-900 transition-colors">Executive</Link>
          <span>/</span>
          <span className="text-cyan-900 font-extrabold">Schedule Advisory</span>
        </div>

        {/* Hero */}
        <section className="mb-12 border-b border-zinc-400 pb-10">
          <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-4 tracking-tight leading-[1.1]">
            Schedule an <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">Executive Advisory Session.</span>
          </h1>
          <p className="text-lg text-zinc-900 leading-relaxed font-semibold max-w-3xl">
            Founders, CTOs, and Private Equity Operating Partners: Book a direct diagnostic, audit your AI unit economics, or schedule an executive briefing.
          </p>
        </section>

        {/* Booking Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Cal.com Embed */}
          <div className="lg:col-span-8 bg-white border border-zinc-300 rounded-3xl p-4 sm:p-6 shadow-sm min-h-[660px] flex flex-col relative overflow-hidden">
            <CalEmbed calLink="richard-ewing-2cevwb" />
          </div>

          {/* Right: Context & Authority Rail */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm">
              <h3 className="text-base font-bold font-grotesk text-zinc-950 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-600" />
                Session Structure
              </h3>
              <ul className="space-y-3 text-xs text-zinc-800 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Rapid Gut-Check (30 Min):</strong> Immediate sanity check on runaway API spend and unit economics traps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>1-on-1 Hourly Advisory (60 Min):</strong> Direct working session for architecture reviews, vendor vetting, and engineering roadblocks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Technical Insolvency Audit (60 Min):</strong> Deep-dive PDI calculation and a 30-day capital recovery roadmap.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Executive Retainers:</strong> Guarded introductory briefing for enterprise teams and PE portfolio review.</span>
                </li>
              </ul>
            </div>

            {/* Confidentiality Box */}
            <div className="p-6 bg-white border border-zinc-300 rounded-3xl flex flex-col shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center border border-emerald-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] font-bold font-mono text-emerald-800 uppercase tracking-wider block">
                    CONFIDENTIALITY ASSURED
                  </span>
                  <h4 className="text-sm font-bold text-zinc-950 font-grotesk">Mutual NDA Protocol</h4>
                </div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-semibold mt-2">
                All metrics, cloud bills, and architecture reviews remain confidential. Mutual NDAs are executed prior to code or log access.
              </p>
            </div>

            {/* Direct Channel Fallback */}
            <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm">
              <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">Direct Channels</div>
              <div className="space-y-3">
                <a
                  href="mailto:richardewing@exogram.ai"
                  className="flex items-center gap-3 p-3 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50/10 transition-all text-xs font-bold text-zinc-950"
                >
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <span>richardewing@exogram.ai</span>
                </a>
                <a
                  href="https://linkedin.com/in/richard-ewing-mba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50/10 transition-all text-xs font-bold text-zinc-950"
                >
                  <Linkedin className="w-4 h-4 text-indigo-600" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="border-t border-zinc-300 pt-12">
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem
              question="What sessions are available to book?"
              answer="You can book a 30-minute Rapid Gut-Check Evaluation, a 60-minute Technical Insolvency Audit, or an introductory Executive Advisory Briefing for enterprise retainers."
            />
            <FAQItem
              question="Are meetings conducted under confidentiality?"
              answer="Yes. All discovery discussions, repository metrics, and cloud billing logs are held under strict confidentiality. Mutual NDAs are executed prior to any technical review."
            />
            <FAQItem
              question="What conferencing platform is used for the call?"
              answer="Calendar invitations include a direct Google Meet video conference link generated automatically upon booking."
            />
          </div>
        </section>

        <div className="mt-16 text-center border-t border-zinc-300 pt-10">
          <Link href="/" className="text-zinc-950 font-bold hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-semibold font-mono uppercase tracking-widest justify-center">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  DollarSign, 
  Sparkles, 
  Cpu, 
  Layers, 
  Clock, 
  Award, 
  Users, 
  Code2, 
  Target,
  FileCheck,
  ChevronRight,
  Headphones
} from 'lucide-react';
import ProgramMediaPlayers from '@/components/ai-product-builder/ProgramMediaPlayers';

export const metadata: Metadata = {
  title: 'The AI Product Builder: 4-Week Technical Founder Cohort',
  description: 'Go from developer to incorporated founder with paying customers. Capped at 15 builders. Live code reviews, cost governance, and capital rails.',
  alternates: {
    canonical: 'https://richardewing.io/programs/ai-product-builder',
  },
  openGraph: {
    title: 'The AI Product Builder: 4-Week Technical Founder Cohort',
    description: 'Go from developer to incorporated founder with paying customers. Capped at 15 builders. Live code reviews, cost governance, and capital rails.',
    url: 'https://richardewing.io/programs/ai-product-builder',
    siteName: 'Richard Ewing',
    type: 'website',
  }
};

export default function AIProductBuilderPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is this cohort designed for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The AI Product Builder is built specifically for technical founders, senior software engineers, and engineering leads who have coding ability but need structured guidance on validation economics, legal entity setup, cost governance, and B2B sales."
        }
      },
      {
        "@type": "Question",
        "name": "What is the time commitment required each week?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect to commit 8 to 12 hours per week for 4 consecutive weeks. This includes two 2-hour live interactive sessions on Mondays and Thursdays at 6:00 PM PST, plus 4 to 8 hours of dedicated code sprints and customer discovery."
        }
      },
      {
        "@type": "Question",
        "name": "What if I do not have a validated product idea yet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That is completely fine. In Week 0 and Week 1, we use our Idea Parking Lot exercise, forum mining recipes, and the Product Sense Framework to locate and validate high-pain business problems before writing code."
        }
      },
      {
        "@type": "Question",
        "name": "How does the 100% money-back guarantee work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you attend the live sessions, complete the daily sprint assignments, and do not feel you gained at least $10,000 in commercial and architectural clarity by Day 28, simply email Richard for a 100% refund."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Strictly Capped at 10 to 15 Technical Founders
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight sm:leading-none">
            Build an AI Product That Makes Money: <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Not Just Noise</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            A 4-week cohort for technical engineers bridging the gap between clean code, corporate formation, cost governance, and high-ticket customer acquisition.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-sky-400/20"
            >
              Apply for Pilot Cohort ($1,500) <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-sm font-semibold transition-all"
            >
              Take 10-Question Diagnostic <CheckCircle2 className="w-4 h-4 text-sky-400" />
            </Link>
          </div>

          {/* Proof Bar */}
          <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400 text-xs">
            <div>
              <span className="block font-mono text-xl font-bold text-white">15+ Years</span>
              <span>Enterprise Product Leadership</span>
            </div>
            <div>
              <span className="block font-mono text-xl font-bold text-emerald-400">$25M ARR</span>
              <span>Core Modules Scaled</span>
            </div>
            <div>
              <span className="block font-mono text-xl font-bold text-sky-400">Exogram &amp; CareerWin</span>
              <span>Proprietary AI Architectures</span>
            </div>
            <div>
              <span className="block font-mono text-xl font-bold text-amber-400">100% Day 28</span>
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Audio/Video Player Section */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
        <ProgramMediaPlayers />
      </section>

      {/* The Problem Agitation: The Backward Build */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono">
              The Fatal Founder Trap
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Why Flawless Code Kills AI Startups
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Most engineers execute backwards: they spend 3 months writing clean async FastAPI backends, tuning vector embeddings, and refining UI buttons, only to launch to total silence.
            </p>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              They fail not because their code was poor, but because they neglected customer discovery, pricing psychology, legal entity setup, and the consulting-to-SaaS flywheel. The AI Product Builder fixes the order of operations permanently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-slate-950/80 rounded-2xl border border-rose-950">
              <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider mb-2">
                The Backward Build (Why 90% Fail)
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Code for 90 days in private isolation</li>
                <li>• Generic landing page with no human outcome</li>
                <li>• Uncontrolled LLM inference costs and token leaks</li>
                <li>• Launch on Product Hunt to zero paying customers</li>
                <li>• Burn out and abandon the repository</li>
              </ul>
            </div>

            <div className="p-6 bg-slate-950/80 rounded-2xl border border-emerald-950">
              <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">
                The AI Product Builder Method
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• Validate business pain via Reddit &amp; live discovery calls (Week 1)</li>
                <li>• Deploy cost-governed semantic caching and Stripe (Week 2)</li>
                <li>• Incorporate LLC, file SAM.gov, and capture $100k+ credits (Week 3)</li>
                <li>• Secure 10 paying pilot customers before public exposure (Week 4)</li>
                <li>• Use high-ticket consulting cash flow to fund software scale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Integrated Disciplines */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
            Holistic Systems Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            The 6 Core Disciplines You Will Master
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            We do not teach isolated coding tricks. We build the complete operational organism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
            <Target className="w-6 h-6 text-sky-400" />
            <h3 className="text-base font-bold text-white">1. Product Sense &amp; Validation</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The Mom Test framework, the 3 layers of customer pain, and Google PM methods adapted for lean technical founders.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
            <Cpu className="w-6 h-6 text-emerald-400" />
            <h3 className="text-base font-bold text-white">2. Technical Architecture</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              FastAPI correlation IDs, Redis semantic caching at 0.92 cosine similarity, and hard HTTP 402 cost-caps.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
            <ShieldCheck className="w-6 h-6 text-amber-400" />
            <h3 className="text-base font-bold text-white">3. Business Formation</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Richard&apos;s Rule on LLC to C-Corp conversion, instant EIN filings, and corporate banking at Mercury and Brex.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
            <DollarSign className="w-6 h-6 text-purple-400" />
            <h3 className="text-base font-bold text-white">4. Startup Capital &amp; Grants</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Securing $500k in non-dilutive cloud credits, SAM.gov UEI registration, and $150k-$2M+ SBIR/STTR proposals.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
            <FileCheck className="w-6 h-6 text-rose-400" />
            <h3 className="text-base font-bold text-white">5. Value-Based Pricing</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Moving from cost-plus server math to 10x ROI anchors, $500 strategic pilots, and $7,500 forensic code audits.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
            <Layers className="w-6 h-6 text-sky-400" />
            <h3 className="text-base font-bold text-white">6. Go-To-Market Mechanics</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The 5-second landing page rule, silent launch outreach, and the authority content distribution engine.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Week Milestone Roadmap Teaser */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
                Structured 4-Week Syllabus
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Day-by-Day Milestone Roadmap
              </h2>
            </div>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
            >
              View Full 20-Day Interactive Syllabus <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-sky-400">Week 1</span>
              <h4 className="text-sm font-bold text-white">Validation &amp; Product Sense</h4>
              <p className="text-xs text-slate-400">The Mom Test, Reddit mining, and 1-sentence value proposition.</p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">Week 2</span>
              <h4 className="text-sm font-bold text-white">Architecture &amp; Code</h4>
              <p className="text-xs text-slate-400">FastAPI, Redis semantic caching (0.92 cosine), and Stripe webhooks.</p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400">Week 3</span>
              <h4 className="text-sm font-bold text-white">Entity, Capital &amp; Pricing</h4>
              <p className="text-xs text-slate-400">LLC filing, $500k cloud credits, SAM.gov UEI, and pilot contracts.</p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-rose-400">Week 4</span>
              <h4 className="text-sm font-bold text-white">GTM &amp; Silent Launch</h4>
              <p className="text-xs text-slate-400">Landing page conversion, 10 paying pilots, and Demo Day pitch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & 3-Tier Value Proposition */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Select Your Builder Tier
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Pilot cohort seats are limited to 10 builders to ensure direct code reviews with Richard Ewing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pilot Cohort */}
          <div className="p-8 bg-slate-900/90 rounded-3xl border-2 border-sky-500 flex flex-col justify-between relative shadow-2xl shadow-sky-500/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-sky-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
              Most Popular • Strictly 10 Seats
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Pilot Cohort Tier</h3>
              <p className="text-xs text-slate-400 mt-1">Direct feedback and inaugural founder pricing.</p>
              
              <div className="my-6">
                <span className="text-4xl font-extrabold text-white font-mono">$1,500</span>
                <span className="text-xs text-slate-400 block mt-1">One-time payment • Saves $1,000</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>All 4 Weeks of Live Interactive Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>1:1 Forensic Code &amp; Architecture Audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>All 50+ System Prompts &amp; Code Boilerplates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Master Consulting SOW &amp; Pilot Agreements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Lifetime Private Alumni Slack Access</span>
                </li>
              </ul>
            </div>

            <Link
              href="/apply"
              className="mt-8 w-full py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg shadow-sky-400/20"
            >
              Apply for Pilot ($1,500)
            </Link>
          </div>

          {/* Standard Cohort */}
          <div className="p-8 bg-slate-900/60 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Standard Cohort</h3>
              <p className="text-xs text-slate-400 mt-1">Standard post-pilot cohort rate.</p>
              
              <div className="my-6">
                <span className="text-4xl font-extrabold text-white font-mono">$2,500</span>
                <span className="text-xs text-slate-400 block mt-1">Standard tuition</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>All 4 Weeks of Live Interactive Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Small-Group Code Review Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Full Prompt Library &amp; Boilerplates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Notion Workspace Database Templates</span>
                </li>
              </ul>
            </div>

            <Link
              href="/apply"
              className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all"
            >
              Join Waitlist ($2,500)
            </Link>
          </div>

          {/* Enterprise / Advisory */}
          <div className="p-8 bg-slate-900/60 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Enterprise &amp; 1:1 Advisory</h3>
              <p className="text-xs text-slate-400 mt-1">Dedicated advisory for venture teams and spin-outs.</p>
              
              <div className="my-6">
                <span className="text-4xl font-extrabold text-white font-mono">$7,500</span>
                <span className="text-xs text-slate-400 block mt-1">Dedicated engagement</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Full Cohort Access for 2 Team Members</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Custom Forensic Codebase &amp; Token Audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Weekly Private 1:1 Executive Advisory</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Direct Enterprise Pilot Matchmaking</span>
                </li>
              </ul>
            </div>

            <a
              href="mailto:richard@richardewing.io?subject=Enterprise%20Advisory%20Inquiry"
              className="mt-8 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all"
            >
              Inquire for Advisory
            </a>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-8 bg-slate-900/80 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              The 100% Day-28 Money-Back Guarantee
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              Attend the live sessions, execute the daily sprints, and submit your deliverables. If you do not feel you gained at least $10,000 in commercial and architectural clarity by Day 28, email us for a prompt, 100% refund. Zero friction.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-slate-900/70 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-2">Who is this cohort designed for?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Technical founders, senior engineers, and engineering leads who can code but need structured execution on validation economics, legal setup, cost governance, and customer acquisition.
            </p>
          </div>

          <div className="p-6 bg-slate-900/70 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-2">What if I cannot attend every live session?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              All live Monday and Thursday 6:00 PM PST sessions are recorded in high-definition and uploaded to the student portal within 2 hours, alongside complete transcripts and code diffs.
            </p>
          </div>

          <div className="p-6 bg-slate-900/70 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-bold text-white mb-2">What tech stack is supported?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              While our provided boilerplates use Python (FastAPI), TypeScript (Next.js 14), PostgreSQL (Supabase), and Redis, the architectural patterns (semantic caching, HMAC cross-talk, Stripe webhooks) apply to any modern web stack.
            </p>
          </div>
        </div>
      </section>

      {/* Final Bottom Banner */}
      <section className="py-16 border-t border-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Build Your Product Organism?
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Applications are reviewed on a rolling basis. Once 10 pilot seats are filled, tuition increases to $2,500.
          </p>
          <div className="mt-6">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-sky-400/20"
            >
              Submit Pilot Application ($1,500) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

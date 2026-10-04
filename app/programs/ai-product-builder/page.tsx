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
  Headphones, 
  BookOpen 
} from 'lucide-react';
import ProgramMediaPlayers from '@/components/ai-product-builder/ProgramMediaPlayers';

export const metadata: Metadata = {
  title: 'The AI Product Builder: 4-Week Founder Cohort',
  description: 'Go from domain expert to AI founder with paying customers. Cost governance, $500k capital rails, and live production SOW audits.',
  alternates: {
    canonical: 'https://www.richardewing.io/programs/ai-product-builder',
  },
  openGraph: {
    title: 'The AI Product Builder: 4-Week Founder Cohort | Richard Ewing',
    description: 'Go from domain expert to incorporated AI founder with paying customers. For technical and non-technical builders. Cost governance, $500k capital rails, and live SOW audits.',
    url: 'https://www.richardewing.io/programs/ai-product-builder',
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
          "text": "The AI Product Builder is designed for both technical engineers and non-technical domain experts (operators, consultants, industry specialists) who want to build real, cash-flowing AI software without getting trapped in the toy wrapper graveyard."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a computer science degree or prior coding experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. In 2026, AI coding assistants (like Cursor, Claude, and Antigravity) write the code. We teach you the General Contractor method: how to direct the AI to build clean software while you focus on customer pain, unit economics, legal rails, and sales."
        }
      },
      {
        "@type": "Question",
        "name": "What is the time commitment required each week?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect to commit 8 to 12 hours per week for 4 consecutive weeks. This includes two 2-hour live interactive sessions on Mondays and Thursdays at 6:00 PM PST, plus dedicated sprints and customer discovery."
        }
      },
      {
        "@type": "Question",
        "name": "How does the 100% money-back guarantee work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you attend the live sessions, complete the sprint milestones, and do not feel you gained at least $10,000 in commercial, architectural, and capital clarity by Day 28, simply email Richard for a 100% prompt refund."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-28 pb-24 selection:bg-purple-200 selection:text-purple-950">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-zinc-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-6 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            Strictly Capped at 10 to 15 Founders &amp; Builders
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 max-w-4xl leading-tight font-grotesk">
            Build an AI Business That Makes Money: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">Not Just Noise</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-700 max-w-3xl leading-relaxed font-medium">
            A 4-week intensive cohort for builders, domain experts, and technical founders bridging the gap between AI coding tools, corporate formation, cost governance, and high-ticket customer acquisition.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-md shadow-purple-700/20"
            >
              Apply for Pilot Cohort ($1,500) <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-300 text-zinc-900 text-sm font-semibold transition-all shadow-sm"
            >
              Read the Book Blueprint <BookOpen className="w-4 h-4 text-purple-700" />
            </Link>
          </div>

          {/* Proof Bar */}
          <div className="mt-12 pt-8 border-t border-zinc-300 grid grid-cols-2 md:grid-cols-4 gap-6 text-zinc-600 text-xs">
            <div>
              <span className="block font-mono text-xl font-bold text-zinc-950">15+ Years</span>
              <span className="font-medium">Enterprise Product Leadership</span>
            </div>
            <div>
              <span className="block font-mono text-xl font-bold text-emerald-800">$25M ARR</span>
              <span className="font-medium">Core Modules Scaled</span>
            </div>
            <div>
              <span className="block font-mono text-xl font-bold text-purple-800">$500k+ Capital</span>
              <span className="font-medium">Non-Dilutive Credit Playbook</span>
            </div>
            <div>
              <span className="block font-mono text-xl font-bold text-amber-800">100% Day 28</span>
              <span className="font-medium">Money-Back Guarantee</span>
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
        <div className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 font-mono">
              The Fatal Founder Trap
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 mt-2 font-grotesk">
              Why Building in Isolation Kills AI Startups
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 mt-4 leading-relaxed font-medium">
              Most builders execute backwards: they spend 3 months writing code in private, tuning prompts, and refining UI buttons, only to launch to total silence.
            </p>
            <p className="text-sm sm:text-base text-zinc-700 mt-3 leading-relaxed font-medium">
              They fail not because their product was bad, but because they neglected customer discovery, pricing psychology, legal entity setup, and the consulting-to-SaaS flywheel. The AI Product Builder fixes the order of operations permanently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-rose-50/60 rounded-2xl border border-rose-200">
              <h3 className="text-sm font-bold text-rose-900 uppercase tracking-wider mb-2 font-mono">
                The Backward Build (Why 90% Fail)
              </h3>
              <ul className="space-y-2 text-xs text-zinc-700 font-medium">
                <li>• Build for 90 days in private isolation</li>
                <li>• Generic landing page with no human outcome</li>
                <li>• Uncontrolled LLM inference costs and token leaks</li>
                <li>• Launch on Product Hunt to zero paying customers</li>
                <li>• Burn out and abandon the project</li>
              </ul>
            </div>

            <div className="p-6 bg-emerald-50/60 rounded-2xl border border-emerald-200">
              <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2 font-mono">
                The AI Product Builder Method
              </h3>
              <ul className="space-y-2 text-xs text-zinc-700 font-medium">
                <li>• Validate business pain via Reddit &amp; live discovery calls (Week 1)</li>
                <li>• Direct AI tools like a General Contractor with smart caching (Week 2)</li>
                <li>• Incorporate LLC, file SAM.gov, and capture $500k+ credits (Week 3)</li>
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
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 font-mono">
            Holistic Systems Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-2 font-grotesk">
            The 6 Core Disciplines You Will Master
          </h2>
          <p className="text-sm text-zinc-600 mt-2 font-medium">
            We do not teach isolated coding tricks. We build the complete operational organism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-zinc-300 space-y-2 shadow-sm hover:border-purple-300 transition">
            <Target className="w-6 h-6 text-purple-700" />
            <h3 className="text-base font-bold text-zinc-950 font-grotesk">1. Product Sense &amp; Validation</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              The Mom Test framework, the 3 layers of customer pain, and Google PM methods adapted for lean founders.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-300 space-y-2 shadow-sm hover:border-emerald-300 transition">
            <Cpu className="w-6 h-6 text-emerald-700" />
            <h3 className="text-base font-bold text-zinc-950 font-grotesk">2. General Contractor Tech Architecture</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              Directing AI assistants, Redis semantic caching at 0.92 cosine similarity, and hard HTTP 402 cost-caps.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-300 space-y-2 shadow-sm hover:border-amber-300 transition">
            <ShieldCheck className="w-6 h-6 text-amber-700" />
            <h3 className="text-base font-bold text-zinc-950 font-grotesk">3. Business Formation</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              Richard&apos;s Rule on LLC to C-Corp conversion, instant EIN filings, and corporate banking at Mercury and Brex.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-300 space-y-2 shadow-sm hover:border-purple-300 transition">
            <DollarSign className="w-6 h-6 text-purple-700" />
            <h3 className="text-base font-bold text-zinc-950 font-grotesk">4. Startup Capital &amp; Grants</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              Securing $500k in non-dilutive cloud credits, SAM.gov UEI registration, and $150k-$2M+ SBIR/STTR proposals.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-300 space-y-2 shadow-sm hover:border-rose-300 transition">
            <FileCheck className="w-6 h-6 text-rose-700" />
            <h3 className="text-base font-bold text-zinc-950 font-grotesk">5. Value-Based Pricing</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              Moving from cost-plus server math to 10x ROI anchors, $500 strategic pilots, and $7,500 forensic audits.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-300 space-y-2 shadow-sm hover:border-indigo-300 transition">
            <Layers className="w-6 h-6 text-indigo-700" />
            <h3 className="text-base font-bold text-zinc-950 font-grotesk">6. Go-To-Market Mechanics</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              The 5-second landing page rule, silent launch outreach, and the authority content distribution engine.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Week Milestone Roadmap Teaser */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 bg-white rounded-3xl border border-zinc-300 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-zinc-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 font-mono">
                Structured 4-Week Syllabus
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-1 font-grotesk">
                Day-by-Day Milestone Roadmap
              </h2>
            </div>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 hover:text-purple-900 transition-colors"
            >
              View Full 20-Day Interactive Syllabus <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 space-y-2">
              <span className="text-xs font-mono font-bold text-purple-700">Week 1</span>
              <h4 className="text-sm font-bold text-zinc-950 font-grotesk">Validation &amp; Product Sense</h4>
              <p className="text-xs text-zinc-600 font-medium">The Mom Test, Reddit mining, and 1-sentence value proposition.</p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-700">Week 2</span>
              <h4 className="text-sm font-bold text-zinc-950 font-grotesk">Architecture &amp; Smart Caching</h4>
              <p className="text-xs text-zinc-600 font-medium">FastAPI, Redis semantic caching (0.92 cosine), and Stripe webhooks.</p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-700">Week 3</span>
              <h4 className="text-sm font-bold text-zinc-950 font-grotesk">Entity, Capital &amp; Pricing</h4>
              <p className="text-xs text-zinc-600 font-medium">LLC filing, $500k cloud credits, SAM.gov UEI, and pilot contracts.</p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200 space-y-2">
              <span className="text-xs font-mono font-bold text-rose-700">Week 4</span>
              <h4 className="text-sm font-bold text-zinc-950 font-grotesk">GTM &amp; Silent Launch</h4>
              <p className="text-xs text-zinc-600 font-medium">Landing page conversion, 10 paying pilots, and Demo Day pitch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & 3-Tier Value Proposition */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 font-mono">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-2 font-grotesk">
            Select Your Builder Tier
          </h2>
          <p className="text-sm text-zinc-600 mt-2 font-medium">
            Pilot cohort seats are limited to 10 builders to ensure direct 1:1 guidance with Richard Ewing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pilot Cohort */}
          <div className="p-8 bg-white rounded-3xl border-2 border-purple-600 flex flex-col justify-between relative shadow-xl shadow-purple-900/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-purple-700 text-white text-[10px] font-extrabold uppercase tracking-wider font-mono">
              Most Popular • Strictly 10 Seats
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-950 font-grotesk">Pilot Cohort Tier</h3>
              <p className="text-xs text-zinc-600 mt-1 font-medium">Direct feedback and inaugural founder pricing.</p>
              
              <div className="my-6">
                <span className="text-4xl font-extrabold text-zinc-950 font-mono">$1,500</span>
                <span className="text-xs text-zinc-500 block mt-1 font-medium">One-time payment • Saves $1,000</span>
              </div>

              <ul className="space-y-3 text-xs text-zinc-700 border-t border-zinc-200 pt-6 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>All 4 Weeks of Live Interactive Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>1:1 Forensic Code &amp; Architecture Audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>All 50+ System Prompts &amp; Boilerplates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Master Consulting SOW &amp; Pilot Agreements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Lifetime Private Alumni Slack Access</span>
                </li>
              </ul>
            </div>

            <Link
              href="/apply"
              className="mt-8 w-full py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-purple-700/20"
            >
              Apply for Pilot ($1,500)
            </Link>
          </div>

          {/* Standard Cohort */}
          <div className="p-8 bg-white rounded-3xl border border-zinc-300 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-zinc-950 font-grotesk">Standard Cohort</h3>
              <p className="text-xs text-zinc-600 mt-1 font-medium">Standard post-pilot cohort rate.</p>
              
              <div className="my-6">
                <span className="text-4xl font-extrabold text-zinc-950 font-mono">$2,500</span>
                <span className="text-xs text-zinc-500 block mt-1 font-medium">Standard tuition</span>
              </div>

              <ul className="space-y-3 text-xs text-zinc-700 border-t border-zinc-200 pt-6 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>All 4 Weeks of Live Interactive Sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Small-Group Product &amp; Architecture Reviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Full Prompt Library &amp; Starter Templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Notion Workspace Database Templates</span>
                </li>
              </ul>
            </div>

            <Link
              href="/apply"
              className="mt-8 w-full py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300 font-bold text-xs uppercase tracking-wider text-center transition-all shadow-sm"
            >
              Join Waitlist ($2,500)
            </Link>
          </div>

          {/* Enterprise / Advisory */}
          <div className="p-8 bg-white rounded-3xl border border-zinc-300 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-zinc-950 font-grotesk">Enterprise &amp; 1:1 Advisory</h3>
              <p className="text-xs text-zinc-600 mt-1 font-medium">Dedicated advisory for venture teams and domain leaders.</p>
              
              <div className="my-6">
                <span className="text-4xl font-extrabold text-zinc-950 font-mono">$7,500</span>
                <span className="text-xs text-zinc-500 block mt-1 font-medium">Dedicated engagement</span>
              </div>

              <ul className="space-y-3 text-xs text-zinc-700 border-t border-zinc-200 pt-6 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Full Cohort Access for 2 Team Members</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Custom Forensic Codebase &amp; Token Audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Weekly Private 1:1 Executive Advisory</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Direct Enterprise Pilot Matchmaking</span>
                </li>
              </ul>
            </div>

            <a
              href="mailto:richard@richardewing.io?subject=Enterprise%20Advisory%20Inquiry"
              className="mt-8 w-full py-3 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-sm"
            >
              Inquire for Advisory
            </a>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-8 bg-emerald-50/70 rounded-2xl border border-emerald-300 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-zinc-950 font-grotesk">
              The 100% Day-28 Money-Back Guarantee
            </h3>
            <p className="text-xs text-zinc-700 leading-relaxed max-w-2xl font-medium">
              Attend the live sessions, execute the daily sprints, and submit your deliverables. If you do not feel you gained at least $10,000 in commercial, capital, and architectural clarity by Day 28, email us for a prompt, 100% refund. Zero friction.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 font-grotesk">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-sm">
            <h3 className="text-sm font-bold text-zinc-950 mb-2 font-grotesk">Who is this cohort designed for?</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              Both technical founders and non-technical domain experts (operators, consultants, industry specialists) who want to build real, cash-flowing AI software without getting trapped in the toy wrapper graveyard.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-sm">
            <h3 className="text-sm font-bold text-zinc-950 mb-2 font-grotesk">Do I need a computer science degree or prior coding experience?</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              No. In 2026, AI coding assistants write the code. We teach you the General Contractor method: how to direct the AI to build clean software while you focus on customer pain, unit economics, legal rails, and sales.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-sm">
            <h3 className="text-sm font-bold text-zinc-950 mb-2 font-grotesk">What if I cannot attend every live session?</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              All live Monday and Thursday 6:00 PM PST sessions are recorded in high-definition and uploaded to the student portal within 2 hours, alongside complete transcripts and code diffs.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-300 shadow-sm">
            <h3 className="text-sm font-bold text-zinc-950 mb-2 font-grotesk">What tech stack is supported?</h3>
            <p className="text-xs text-zinc-700 leading-relaxed font-medium">
              While our provided starter templates use Python (FastAPI), TypeScript (Next.js 14), PostgreSQL (Supabase), and Redis, the architectural patterns (semantic caching, HMAC cross-talk, Stripe webhooks) apply to any modern web stack.
            </p>
          </div>
        </div>
      </section>

      {/* Final Bottom Banner */}
      <section className="py-16 border-t border-zinc-300 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-zinc-950 font-grotesk">
            Ready to Build Your Product Organism?
          </h2>
          <p className="text-xs text-zinc-600 mt-2 font-medium">
            Applications are reviewed on a rolling basis. Once 10 pilot seats are filled, tuition increases to $2,500.
          </p>
          <div className="mt-6">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-purple-700/20"
            >
              Submit Pilot Application ($1,500) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

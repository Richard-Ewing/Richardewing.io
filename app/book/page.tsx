import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  DollarSign, 
  Cpu, 
  Layers, 
  FileText, 
  Clock, 
  Download,
  Users
} from 'lucide-react';
import { NewsletterForm } from '../components/newsletter-form';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
  title: 'The Pragmatic AI Builder Book | Richard Ewing',
  description: 'How anyone can build, price, and launch a profitable AI business with or without a tech background. The full-stack engineering, economics, and GTM blueprint.',
  keywords: [
    'The Pragmatic AI Builder',
    'AI founder book',
    'non technical AI builder',
    'build AI software without coding',
    'AI cost governance',
    'Richard Ewing book'
  ],
  alternates: { canonical: 'https://richardewing.io/book' },
  openGraph: {
    title: 'The Pragmatic AI Builder - Book | Richard Ewing',
    description: 'How anyone can build, price, and launch a profitable AI business with or without a tech background.',
    url: 'https://richardewing.io/book',
    siteName: 'Richard Ewing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pragmatic AI Builder - Book | Richard Ewing',
    description: 'The definitive full-stack engineering, economics, and GTM blueprint for modern AI builders.',
  },
};

const chapters = [
  {
    section: "Stage 1: Mapping the Territory (Customer Pain & Product Sense)",
    desc: "Uncovering your authentic unfair foothold and applying the Meta & Google Product Sense framework to find high-pain niches.",
    items: [
      "Chapter 1: The Life Experience Audit (Your Unfair Foothold)",
      "Chapter 2: The Wedge Scout Framework (Finding What People Pay to Fix)",
      "Chapter 3: Assembling Your Virtual Crew (Cognitive Division of Labor)",
      "Chapter 4: Field Scouting (Finding Where People Complain When Nobody Is Watching)",
      "Chapter 5: The 15-Minute Coffee Chat (Getting the Truth Without Pitching)"
    ]
  },
  {
    section: "Stage 2: Building the Base Camp (De-Jargonized Systems & Smart Economics)",
    desc: "De-jargonizing software architecture, the General Contractor method, and smart whiteboard caching.",
    items: [
      "Chapter 6: The General Contractor Method (How Software Actually Works)",
      "Chapter 7: The Smart Whiteboard Trick (Stopping AI Bills from Draining Your Wallet)",
      "Chapter 8: Markdown Files: The Cheapest Database on Earth",
      "Chapter 9: Setting House Rules for Your AI Assistants (.cursorrules)",
      "Chapter 10: Safe Passage (Customer Data Privacy & Getting Paid via Stripe)"
    ]
  },
  {
    section: "Stage 3: Passing the Border (Legal Rails & Non-Dilutive Capital)",
    desc: "Setting up your entity cleanly and claiming non-dilutive capital before writing code.",
    items: [
      "Chapter 11: The 4-Step Simple Legal Setup (Richard's Rule: Don't Overpay Lawyers)",
      "Chapter 12: Claiming $500,000 in Free Cloud Compute & AI Credits",
      "Chapter 13: Getting Paid by the Government (SAM.gov & Federal SBIR Grants)",
      "Chapter 14: The Confidence Game (Why You Should Apply to YC and Thiel Fellowship)"
    ]
  },
  {
    section: "Stage 4: Establishing Trade Routes (Pricing, Pilots & The Cash-Flow Flywheel)",
    desc: "Using high-ticket audits to fund software and closing 10 paying customers in private.",
    items: [
      "Chapter 15: The Embedded Founder (How a $7,500 Audit Pays Your Bills While You Build)",
      "Chapter 16: Sweaty-Palm Pricing & The $500 Paid Pilot (The Rule of the Awkward Silence)",
      "Chapter 17: The 5-Second Landing Page & Domain Sandboxing",
      "Chapter 18: The Silent Launch & The 5-Day Email Funnel"
    ]
  }
];

export default function BookPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a technical background or computer science degree to read this book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The book is written in plain English using real-world analogies. It teaches you the General Contractor method: how to direct AI coding assistants like Cursor and Claude to build clean software while you focus on customer discovery, unit economics, and sales."
        }
      },
      {
        "@type": "Question",
        "name": "What formats will the book be available in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Pragmatic AI Builder will be available on Amazon Kindle ($9.99), Paperback ($24.99), Apple Books, and Google Play, with an expanded Digital Developer Toolkit available on richardewing.io."
        }
      },
      {
        "@type": "Question",
        "name": "What templates and tools are included with the book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The book includes a complete $7,500 Forensic Audit Statement of Work (SOW), the $500 Strategic Pilot Agreement, the drop-in .cursorrules starter pack, 12 multi-model prompt sequences, and the $500,000 non-dilutive credit checklist."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            Official Book Release (2026)
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            The Pragmatic AI Builder
          </h1>

          <p className="mt-4 text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 font-bold max-w-3xl mx-auto">
            How Anyone Can Build, Price, and Launch a Profitable AI Business (With or Without a Tech Background)
          </p>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop watching from the sidelines. Learn how to direct AI coding assistants like a General Contractor, protect your profit margins with smart caching, claim $500k in free cloud credits, and close paying customers before you write code.
          </p>

          {/* Value Props Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              No CS Degree Required
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              Includes $7.5k SOW Template
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              $500k Cloud Credit Guide
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              12 Multi-Model Prompts
            </span>
          </div>

          {/* Opt-in Box */}
          <div className="mt-10 max-w-md mx-auto p-6 rounded-2xl bg-slate-900/90 border border-sky-500/30 shadow-2xl">
            <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
              Get Early Draft Chapters &amp; Launch Notice
            </p>
            <NewsletterForm
              buttonText="Join Book Waitlist"
              placeholder="Enter your email address..."
              extraData={{ tool: 'pragmatic_ai_builder_book' }}
            />
            <span className="text-[11px] text-slate-500 mt-2 block">
              Instant access to Chapter 1 preview and the $500k Credit Checklist upon signing up.
            </span>
          </div>
        </div>
      </section>

      {/* The 4 Sections Breakdown */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Inside the 17-Chapter Operating Manual
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl mx-auto">
            Structured into four tactical sections that guide you step-by-step from zero to incorporated, cash-flowing software business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chapters.map((sec, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block mb-1">
                  Part {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {sec.section}
                </h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {sec.desc}
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {sec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Assets Included Callout */}
      <section className="py-12 bg-slate-900/40 border-y border-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Over $585,000 in Included Toolkits &amp; Financial Rails
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              This is not abstract theory. Every copy comes with ready-to-use production assets:
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="text-sm font-bold text-white">Production Legal Contracts</h4>
              <p className="text-xs text-slate-400 mt-1">
                Copy-paste $7,500 Forensic Audit SOW and $500 Strategic Pilot Agreement with automatic SaaS conversion terms.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
              <Cpu className="w-5 h-5 text-sky-400 mb-2" />
              <h4 className="text-sm font-bold text-white">Smart Caching Architecture</h4>
              <p className="text-xs text-slate-400 mt-1">
                Complete Redis vector semantic cache (0.92 cosine) Python class that slashes repetitive inference bills by 50%.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
              <DollarSign className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-sm font-bold text-white">$500k Capital Directory</h4>
              <p className="text-xs text-slate-400 mt-1">
                Direct step-by-step approval recipes for Google ($350k), Microsoft ($150k), AWS ($25k), and SAM.gov SBIR grants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <FAQItem
            question="Do I need a technical background or computer science degree to read this book?"
            answer="No. The book is written in plain English using real-world analogies. It teaches you the General Contractor method: how to direct AI coding assistants like Cursor and Claude to build clean software while you focus on customer discovery, unit economics, and sales."
          />
          <FAQItem
            question="What formats will the book be available in?"
            answer="The Pragmatic AI Builder will be available on Amazon Kindle ($9.99), Paperback ($24.99), Apple Books, and Google Play, with an expanded Digital Developer Toolkit available on richardewing.io."
          />
          <FAQItem
            question="What templates and tools are included with the book?"
            answer="The book includes a complete $7,500 Forensic Audit Statement of Work (SOW), the $500 Strategic Pilot Agreement, the drop-in .cursorrules starter pack, 12 multi-model prompt sequences, and the $500,000 non-dilutive credit checklist."
          />
        </div>

        {/* Links to ecosystem */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-wrap justify-center gap-4 text-xs font-semibold">
          <Link href="/curriculum" className="text-sky-400 hover:text-sky-300 transition-colors">
            Explore the 20-Day Curriculum →
          </Link>
          <span className="text-slate-700">•</span>
          <Link href="/vault/blueprints" className="text-sky-400 hover:text-sky-300 transition-colors">
            View Code &amp; Legal Vault →
          </Link>
          <span className="text-slate-700">•</span>
          <Link href="/programs/ai-product-builder" className="text-sky-400 hover:text-sky-300 transition-colors">
            Live 4-Week Cohort →
          </Link>
        </div>
      </section>
    </div>
  );
}

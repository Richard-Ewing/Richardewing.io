'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Clock, 
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface EmailLesson {
  day: string;
  title: string;
  subject: string;
  summary: string;
  takeaways: string[];
}

const lessons: EmailLesson[] = [
  {
    day: "Day 1",
    title: "Why Flawless Code Kills AI Startups",
    subject: "Why flawless code kills AI startups (and what actually matters)",
    summary: "Why building for 3 months in isolation leads to failure, and how to invert your engineering priorities toward customer discovery.",
    takeaways: [
      "The Backward Build trap: why great code fails without distribution.",
      "The Mom Test: extracting brutal truth instead of polite validation.",
      "The 5-Second Landing Page Rule: what you do, who it's for, and the outcome."
    ]
  },
  {
    day: "Day 2",
    title: "The AI Cognitive Division of Labor",
    subject: "Stop using one AI for everything (The Cognitive Division of Labor)",
    summary: "Assigning LLMs to their genuine cognitive superpowers: Thinking vs Searching vs Feeling vs Building.",
    takeaways: [
      "Claude 3.5 Sonnet: Deep synthesis, strategy, and architecture reasoning.",
      "Perplexity Pro: Real-time search, competitor complaints, and social mining.",
      "Kimi: Emotional depth, customer persona diary entries, and sales roleplay.",
      "GPT-4o: Code generation, schema design, and .cursorrules standards."
    ]
  },
  {
    day: "Day 3",
    title: "The $5,000 Consulting SOW That Funds Your SaaS",
    subject: "The $5,000 consulting offer that funds your SaaS",
    summary: "How to use high-ticket forensic code audits to get paid for customer discovery while feeding real edge cases into your software.",
    takeaways: [
      "Why 1 consulting client ($7,500) generates more cash than 75 standard SaaS users.",
      "The 2-week Forensic Code & AI Cost Governance Audit framework.",
      "Turning consulting clients into recurring annual SaaS subscribers."
    ]
  },
  {
    day: "Day 4",
    title: "The 0.92 Semantic Cache: Slashing LLM Bills by 50%",
    subject: "How we cut our LLM API bill by 54% with one Python class",
    summary: "Implementing Redis vector similarity search to intercept repetitive user prompts and issue HTTP 402 cost-caps.",
    takeaways: [
      "Setting the exact 0.92 cosine similarity threshold to prevent hallucinations.",
      "Deploying sentence-transformers (all-MiniLM-L6-v2) for low-latency embeddings.",
      "Issuing HTTP 402 Payment Required status codes to stop runaway token loops."
    ]
  },
  {
    day: "Day 5",
    title: "The Silent Launch: 10 Customers Before Public Exposure",
    subject: "The Silent Launch: 10 paying customers before you tell the internet",
    summary: "Why launching on Product Hunt on Day 1 is a mistake, and how to close your first 10 paying pilot customers in private.",
    takeaways: [
      "The $500 30-day Strategic Pilot Agreement with automatic SaaS conversion.",
      "Direct 1:1 outreach scripts that convert discovery interviewees into buyers.",
      "Collecting bulletproof case studies and ROI metrics before public press."
    ]
  }
];

export default function StarterKitPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [expandedDay, setExpandedDay] = useState<string | null>('Day 1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Header */}
      <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            Free 5-Day Email Crash Course
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            The AI Product Builder&apos;s Starter Kit
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            5 daily technical breakdowns delivered straight to your inbox: cognitive model division, semantic caching code, high-ticket consulting offers, and silent launch mechanics.
          </p>

          {/* Opt-in Card */}
          <div className="mt-8 max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your work email address..."
                  className="flex-1 px-4 py-3.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-400/20 shrink-0"
                >
                  Get Starter Kit
                </button>
              </form>
            ) : (
              <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl flex items-center justify-center gap-2 text-emerald-300 text-xs font-semibold animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Lesson 1 has been dispatched to {email}!
              </div>
            )}
            <span className="text-[11px] text-slate-500 mt-2 block">
              100% technical insights. Zero spam. Unsubscribe with 1 click anytime.
            </span>
          </div>
        </div>
      </div>

      {/* Course Curriculum Breakdown */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            What You Will Learn in the 5-Day Sprint
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Each email includes actionable Python code snippets, prompt templates, and step-by-step systems.
          </p>
        </div>

        <div className="space-y-4">
          {lessons.map(lesson => {
            const isOpen = expandedDay === lesson.day;
            return (
              <div 
                key={lesson.day}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-slate-700"
              >
                <button
                  onClick={() => setExpandedDay(isOpen ? null : lesson.day)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30">
                        {lesson.day}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{lesson.subject}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {lesson.title}
                    </h3>
                  </div>

                  <div className="p-2 rounded-xl bg-slate-800 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-3 text-xs text-slate-300 animate-in fade-in duration-200">
                    <p className="leading-relaxed text-slate-200">
                      {lesson.summary}
                    </p>
                    <div className="space-y-1.5 pt-2">
                      <span className="font-semibold text-sky-400 uppercase tracking-wider text-[11px]">
                        Key Takeaways:
                      </span>
                      <ul className="space-y-1.5">
                        {lesson.takeaways.map((t, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Full Cohort */}
        <div className="mt-12 p-8 bg-slate-900/90 rounded-2xl border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-white">
              Want the Full 4-Week Cohort with 1:1 Code Audits?
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Join 10 to 15 technical founders building alongside Richard Ewing with live sessions, legal templates, and 10-customer silent launch mechanics.
            </p>
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-400/20 shrink-0"
          >
            Apply for Pilot ($1,500) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}

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
    <main className="min-h-screen bg-[#F5F0EB] text-zinc-950 pt-28 pb-24 selection:bg-purple-200 selection:text-purple-950">
      {/* Header */}
      <div className="relative pb-12 sm:pb-16 border-b border-zinc-300 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-purple-700" />
            Free 5-Day Email Crash Course
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 max-w-3xl mx-auto">
            The AI Product Builder&apos;s Starter Kit
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-700 max-w-2xl mx-auto leading-relaxed">
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
                  className="flex-1 px-4 py-3.5 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 shadow-sm transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm shrink-0"
                >
                  Get Starter Kit
                </button>
              </form>
            ) : (
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-2xl flex items-center justify-center gap-2 text-emerald-900 text-xs font-semibold animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Lesson 1 has been dispatched to {email}!
              </div>
            )}
            <span className="text-[11px] text-zinc-500 mt-2 block">
              100% technical insights. Zero spam. Unsubscribe with 1 click anytime.
            </span>
          </div>
        </div>
      </div>

      {/* Course Curriculum Breakdown */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-950">
            What You Will Learn in the 5-Day Sprint
          </h2>
          <p className="text-xs text-zinc-600 mt-1">
            Each email includes actionable Python code snippets, prompt templates, and step-by-step systems.
          </p>
        </div>

        <div className="space-y-4">
          {lessons.map(lesson => {
            const isOpen = expandedDay === lesson.day;
            return (
              <div 
                key={lesson.day}
                className="bg-white border border-zinc-300 rounded-2xl overflow-hidden transition-all hover:border-purple-300 shadow-sm hover:shadow"
              >
                <button
                  onClick={() => setExpandedDay(isOpen ? null : lesson.day)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 border border-purple-200">
                        {lesson.day}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">{lesson.subject}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                      {lesson.title}
                    </h3>
                  </div>

                  <div className="p-2 rounded-xl bg-zinc-100 text-zinc-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-6 bg-[#F5F0EB]/60 border-t border-zinc-200 space-y-3 text-xs text-zinc-700 animate-in fade-in duration-200">
                    <p className="leading-relaxed text-zinc-800">
                      {lesson.summary}
                    </p>
                    <div className="space-y-1.5 pt-2">
                      <span className="font-semibold text-purple-900 uppercase tracking-wider text-[11px]">
                        Key Takeaways:
                      </span>
                      <ul className="space-y-1.5">
                        {lesson.takeaways.map((t, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-zinc-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
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
        <div className="mt-12 p-8 bg-white rounded-2xl border border-zinc-300 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-bold text-zinc-950">
              Want the Full 4-Week Cohort with 1:1 Code Audits?
            </h3>
            <p className="text-xs text-zinc-600 mt-1 max-w-md">
              Join 10 to 15 technical founders building alongside Richard Ewing with live sessions, legal templates, and 10-customer silent launch mechanics.
            </p>
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm shrink-0"
          >
            Apply for Pilot ($1,500) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}

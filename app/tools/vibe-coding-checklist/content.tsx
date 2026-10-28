'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle2,
  Lock,
  CreditCard,
  Database,
  FileCode2,
  RotateCcw,
  ArrowRight,
} from 'lucide-react';
import { saveDiagnosticSession } from '@/lib/storage/session';
import SlackScorecardExport from '@/components/SlackScorecardExport';

interface ChecklistItem {
  id: string;
  category: 'Database & RLS' | 'Auth & Secrets' | 'Billing & Token Caps' | 'Specs & Recovery';
  label: string;
  failureConsequence: string;
  criticalBlocker: boolean;
  exposureUsd: number;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  // 1. Database & Row-Level Security (5)
  {
    id: 'rls-enabled-all-tables',
    category: 'Database & RLS',
    label: 'Row-Level Security (RLS) is enabled and tested on every table in the public schema',
    failureConsequence: 'Any logged-in user can read or overwrite every customer row using the public anon key from DevTools.',
    criticalBlocker: true,
    exposureUsd: 45000,
  },
  {
    id: 'zero-service-role-client',
    category: 'Database & RLS',
    label: 'Zero Supabase service_role or admin database credentials exist in client-side bundles',
    failureConsequence: 'Full database dump and silent privilege escalation within minutes of launch.',
    criticalBlocker: true,
    exposureUsd: 60000,
  },
  {
    id: 'jwt-tenant-derivation',
    category: 'Database & RLS',
    label: 'API mutations read user_id / org_id from verified server auth tokens, never from JSON request bodies',
    failureConsequence: 'Horizontal account takeover by swapping user_id in a single curl call.',
    criticalBlocker: true,
    exposureUsd: 35000,
  },
  {
    id: 'bounded-cascade-deletes',
    category: 'Database & RLS',
    label: 'Foreign-key ON DELETE CASCADE rules are audited so deleting a draft cannot wipe billing or audit ledgers',
    failureConsequence: 'Irreversible loss of paid customer history from routine cleanup actions.',
    criticalBlocker: false,
    exposureUsd: 12000,
  },
  {
    id: 'verified-point-in-time-backup',
    category: 'Database & RLS',
    label: 'Automated daily backups and a tested restore drill exist outside the AI coding agent workspace',
    failureConsequence: 'One rogue migration from Cursor or Claude Code drops production tables permanently.',
    criticalBlocker: false,
    exposureUsd: 18000,
  },

  // 2. Auth & Secrets (5)
  {
    id: 'zero-next-public-secrets',
    category: 'Auth & Secrets',
    label: 'Zero OpenAI, Anthropic, Stripe secret, or Resend keys use NEXT_PUBLIC_ or VITE_ prefixes',
    failureConsequence: 'Automated GitHub/bundle scrapers drain your API credit limit overnight.',
    criticalBlocker: true,
    exposureUsd: 25000,
  },
  {
    id: 'git-history-secret-scan',
    category: 'Auth & Secrets',
    label: 'Full git commit history was scanned so previously deleted .env keys are rotated and revoked',
    failureConsequence: 'Old commits expose live keys even if HEAD looks clean.',
    criticalBlocker: true,
    exposureUsd: 20000,
  },
  {
    id: 'server-route-auth-guard',
    category: 'Auth & Secrets',
    label: 'Every POST/PUT/DELETE route verifies session auth on the server, not just hiding buttons in React UI',
    failureConsequence: 'Unauthenticated callers trigger paid workflows and admin mutations directly.',
    criticalBlocker: true,
    exposureUsd: 30000,
  },
  {
    id: 'upload-mime-size-bounds',
    category: 'Auth & Secrets',
    label: 'File and PDF upload endpoints enforce strict byte-size caps, MIME verification, and signed URLs',
    failureConsequence: 'Storage bucket exhaustion and malicious script hosting on your domain.',
    criticalBlocker: false,
    exposureUsd: 8000,
  },
  {
    id: 'prompt-injection-tool-isolation',
    category: 'Auth & Secrets',
    label: 'Untrusted user text is separated from LLM tool-execution permissions and SQL/shell calls',
    failureConsequence: 'Prompt injection tricks your assistant into leaking environment variables or other tenants.',
    criticalBlocker: false,
    exposureUsd: 22000,
  },

  // 3. Billing, Stripe Webhooks & Token Caps (5)
  {
    id: 'stripe-webhook-signature',
    category: 'Billing & Token Caps',
    label: 'Stripe webhooks verify cryptographic stripe-signature headers and log event_id idempotency',
    failureConsequence: 'Attackers forge paid plan upgrades for $0, or webhook retries double-credit accounts.',
    criticalBlocker: true,
    exposureUsd: 28000,
  },
  {
    id: 'per-user-token-ceiling',
    category: 'Billing & Token Caps',
    label: 'Every pricing tier enforces a hard daily and monthly LLM token/dollar circuit breaker per workspace',
    failureConsequence: 'A single $29 seat running scripted loops burns $600+ in Anthropic or OpenAI API calls.',
    criticalBlocker: true,
    exposureUsd: 32000,
  },
  {
    id: 'llm-retry-cap',
    category: 'Billing & Token Caps',
    label: 'LLM SDK wrappers cap automatic retries at 2 attempts and strip bloated context on schema failure',
    failureConsequence: 'Silent retry storms triple your monthly inference invoice with zero user value.',
    criticalBlocker: false,
    exposureUsd: 14000,
  },
  {
    id: 'anonymous-rate-limit',
    category: 'Billing & Token Caps',
    label: 'Public demos, magic-link emails, and AI preview endpoints enforce IP + fingerprint rate limits (HTTP 429)',
    failureConsequence: 'Bot traffic exhausts Resend/Clerk/OpenAI quotas during a Product Hunt or LinkedIn spike.',
    criticalBlocker: false,
    exposureUsd: 15000,
  },
  {
    id: 'subscription-downgrade-sync',
    category: 'Billing & Token Caps',
    label: 'Canceled, refunded, and failed-payment Stripe subscriptions revoke paid API entitlements automatically',
    failureConsequence: 'Churned users keep consuming paid LLM inference indefinitely.',
    criticalBlocker: false,
    exposureUsd: 11000,
  },

  // 4. Specs & Production Recovery (5)
  {
    id: 'agents-spec-blast-radius',
    category: 'Specs & Recovery',
    label: 'AGENTS.md and SPEC.md define explicit forbidden files (auth, billing, migrations) for AI coding tools',
    failureConsequence: 'A single "fix styling" vibe prompt silently rewrites checkout or authentication logic.',
    criticalBlocker: false,
    exposureUsd: 16000,
  },
  {
    id: 'zero-mock-fallbacks',
    category: 'Specs & Recovery',
    label: 'Production API catch blocks return honest HTTP error statuses instead of fake hardcoded demo data',
    failureConsequence: 'Customers make business decisions on fabricated fallback numbers when an upstream API times out.',
    criticalBlocker: false,
    exposureUsd: 19000,
  },
  {
    id: 'deterministic-ci-typecheck',
    category: 'Specs & Recovery',
    label: 'Deployments block automatically if TypeScript strict compilation or smoke tests fail',
    failureConsequence: 'Broken client bundles ship straight to paying users on Friday afternoon.',
    criticalBlocker: false,
    exposureUsd: 9000,
  },
  {
    id: 'pii-redacted-logging',
    category: 'Specs & Recovery',
    label: 'Server logs capture structured error context without dumping raw customer prompts, tokens, or passwords',
    failureConsequence: 'Enterprise security questionnaires fail immediately during first B2B procurement review.',
    criticalBlocker: false,
    exposureUsd: 14000,
  },
  {
    id: 'browser-hydration-prerender-guard',
    category: 'Specs & Recovery',
    label: 'window/localStorage calls and mobile viewports are verified on real iOS/Android screens, not just localhost',
    failureConsequence: 'Paid ad clicks hit white-screen hydration crashes on mobile Safari.',
    criticalBlocker: false,
    exposureUsd: 10000,
  },
];

const DEFAULT_CHECKED: Record<string, boolean> = {
  'zero-next-public-secrets': true,
  'deterministic-ci-typecheck': true,
  'browser-hydration-prerender-guard': true,
};

export default function VibeCodingChecklistContent() {
  const [checked, setChecked] = useState<Record<string, boolean>>(DEFAULT_CHECKED);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const summary = useMemo(() => {
    const passedCount = CHECKLIST_ITEMS.filter((item) => checked[item.id]).length;
    const score = Math.round((passedCount / CHECKLIST_ITEMS.length) * 100);
    const missingCritical = CHECKLIST_ITEMS.filter(
      (item) => item.criticalBlocker && !checked[item.id]
    );
    const unmitigatedExposureUsd = CHECKLIST_ITEMS.filter((item) => !checked[item.id]).reduce(
      (sum, item) => sum + item.exposureUsd,
      0
    );

    let verdict = 'DO NOT LAUNCH TO PAYING USERS';
    let verdictTone: 'danger' | 'warning' | 'safe' = 'danger';
    if (missingCritical.length === 0 && score >= 85) {
      verdict = 'CLEARED FOR PAID CUSTOMER LAUNCH';
      verdictTone = 'safe';
    } else if (missingCritical.length === 0 && score >= 65) {
      verdict = 'CONDITIONAL LAUNCH (CLOSE OPS GAPS IN 7 DAYS)';
      verdictTone = 'warning';
    } else if (missingCritical.length > 0) {
      verdict = `${missingCritical.length} SHOWSTOPPER SECURITY / BILLING GAPS OPEN`;
      verdictTone = 'danger';
    }

    return {
      passedCount,
      score,
      missingCritical,
      unmitigatedExposureUsd,
      verdict,
      verdictTone,
    };
  }, [checked]);

  useEffect(() => {
    saveDiagnosticSession('vibe-coding-checklist', {
      score: summary.score,
      criticalGaps: summary.missingCritical.length,
      exposureUsd: summary.unmitigatedExposureUsd,
      primaryMetricValue: `${summary.score}/100 (${summary.missingCritical.length} Blockers)`,
    });
  }, [summary]);

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { key: 'ALL', label: 'All 20 Gates', icon: CheckCircle2 },
    { key: 'Database & RLS', label: 'Database & RLS (5)', icon: Database },
    { key: 'Auth & Secrets', label: 'Auth & Secrets (5)', icon: Lock },
    { key: 'Billing & Token Caps', label: 'Billing & Token Caps (5)', icon: CreditCard },
    { key: 'Specs & Recovery', label: 'Specs & Recovery (5)', icon: FileCode2 },
  ];

  const visibleItems =
    activeCategory === 'ALL'
      ? CHECKLIST_ITEMS
      : CHECKLIST_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-6 space-y-8">
      {/* Live Executive Readout Bar */}
      <div className="rounded-3xl border border-[#24332b]/15 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35]">
              Interactive 20-Point Pre-Launch Gate
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#162e26] mt-1">
              Your Production Launch Readiness Score
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setChecked({})}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#24332b]/15 text-xs font-mono font-bold text-[#4a5850] hover:text-[#162e26] hover:bg-[#FAF9F6] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset All
            </button>
            <SlackScorecardExport
              toolName="Vibe-Coded App Security & Launch Audit"
              toolSlug="vibe-coding-checklist"
              primaryMetricLabel="Launch Readiness"
              primaryMetricValue={`${summary.score}/100`}
              statusLabel={summary.verdict}
              metrics={[
                { label: 'Gates Passed', value: `${summary.passedCount} of 20` },
                { label: 'Showstopper Blockers', value: `${summary.missingCritical.length}` },
                {
                  label: 'Unmitigated Exposure',
                  value: `$${summary.unmitigatedExposureUsd.toLocaleString()}`,
                },
              ]}
              canonicalUrl="https://www.richardewing.io/tools/vibe-coding-checklist"
            />
          </div>
        </div>

        {/* 3 Score Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-[#162e26] text-white p-5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#d8c7a8]">
              Readiness Score
            </div>
            <div className="font-serif text-4xl font-bold mt-1">
              {summary.score}
              <span className="text-lg text-zinc-300 font-normal">/100</span>
            </div>
            <div className="text-xs text-zinc-300 mt-2">
              {summary.passedCount} of 20 production controls verified
            </div>
          </div>

          <div
            className={`rounded-2xl border p-5 ${
              summary.missingCritical.length > 0
                ? 'bg-[#c86d56]/10 border-[#c86d56]/35 text-[#1e2924]'
                : 'bg-emerald-50 border-emerald-300 text-[#1e2924]'
            }`}
          >
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9f3a24]">
              Critical Showstoppers
            </div>
            <div className="font-serif text-4xl font-bold text-[#162e26] mt-1">
              {summary.missingCritical.length}
            </div>
            <div className="text-xs text-[#4a5850] mt-2">
              {summary.missingCritical.length === 0
                ? 'All 8 critical RLS, secret & billing gates passed'
                : 'Open RLS, key-leak, or billing holes that block launch'}
            </div>
          </div>

          <div className="rounded-2xl bg-[#FAF9F6] border border-[#24332b]/15 p-5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#66716a]">
              Estimated Incident / API Burn Exposure
            </div>
            <div className="font-serif text-4xl font-bold text-[#162e26] mt-1">
              ${summary.unmitigatedExposureUsd.toLocaleString()}
            </div>
            <div className="text-xs text-[#4a5850] mt-2">
              Modeled breach remediation + runaway token/webhook loss
            </div>
          </div>
        </div>

        {/* Verdict Banner */}
        <div
          className={`rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border ${
            summary.verdictTone === 'safe'
              ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
              : summary.verdictTone === 'warning'
              ? 'bg-[#b77a35]/10 border-[#b77a35]/35 text-[#1e2924]'
              : 'bg-[#c86d56]/12 border-[#c86d56]/40 text-[#1e2924]'
          }`}
        >
          <div className="flex items-start gap-3">
            {summary.verdictTone === 'safe' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-700 mt-0.5 shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-[#9f3a24] mt-0.5 shrink-0" />
            )}
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider">
                {summary.verdict}
              </div>
              <p className="text-sm text-[#4a5850] mt-0.5">
                {summary.missingCritical.length > 0
                  ? 'Fix every red Critical Blocker below before posting your launch link on LinkedIn, X, or Product Hunt.'
                  : 'Grab the copy-paste AGENTS.md, SPEC.md, and Supabase RLS audit prompts to keep future AI edits locked down.'}
              </p>
            </div>
          </div>
          <Link
            href="/system-prompts#vibe-production-templates"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#162e26] hover:bg-[#29473b] text-white text-xs font-bold whitespace-nowrap transition-all"
          >
            Copy Starter Templates <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all border ${
                isActive
                  ? 'bg-[#162e26] text-white border-[#162e26]'
                  : 'bg-white text-[#4a5850] border-[#24332b]/15 hover:border-[#162e26]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {visibleItems.map((item) => {
          const isChecked = !!checked[item.id];
          return (
            <label
              key={item.id}
              className={`block rounded-2xl border p-5 cursor-pointer transition-all ${
                isChecked
                  ? 'bg-emerald-50/50 border-emerald-600/30'
                  : item.criticalBlocker
                  ? 'bg-white border-[#c86d56]/35 hover:border-[#c86d56]'
                  : 'bg-white border-[#24332b]/15 hover:border-[#162e26]'
              }`}
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(item.id)}
                  className="mt-1 h-5 w-5 rounded border-[#24332b]/30 accent-[#162e26] shrink-0"
                />
                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF9F6] border border-[#24332b]/15 text-[#4a5850]">
                      {item.category}
                    </span>
                    {item.criticalBlocker && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#c86d56]/15 border border-[#c86d56]/30 text-[#9f3a24]">
                        Critical Launch Blocker
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-[#66716a] ml-auto">
                      Risk if skipped: ${item.exposureUsd.toLocaleString()}
                    </span>
                  </div>
                  <div
                    className={`font-semibold text-base ${
                      isChecked ? 'line-through text-[#66716a]' : 'text-[#162e26]'
                    }`}
                  >
                    {item.label}
                  </div>
                  <p className="text-sm text-[#4a5850] leading-relaxed">
                    <strong className="text-[#1e2924]">What breaks in production:</strong>{' '}
                    {item.failureConsequence}
                  </p>
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

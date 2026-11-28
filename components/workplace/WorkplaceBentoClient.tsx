'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export function AnimatedSignalCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0.22);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let rafId = 0;
    let started = false;

    const runAnimation = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const duration = 950;
      const step = (now: number) => {
        const raw = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - raw, 3);
        setProgress(eased);
        if (raw < 1) {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  const bars = [28, 40, 56, 70, 76, 82];
  const barColors = [
    'rgba(199,208,194,0.45)',
    'rgba(199,208,194,0.55)',
    'rgba(199,208,194,0.72)',
    '#b77a35',
    '#cf924c',
    '#e5aa62',
  ];

  const spanTotalW = Math.round(186 * progress);
  const spanSafeW = Math.min(74, spanTotalW);
  const spanOverW = Math.max(0, spanTotalW - 74);
  const spanReports = Math.max(4, Math.round(18 * progress));

  const fakeW = Math.round(104 * progress);
  const realW = Math.round(28 * progress);
  const fakePct = Math.round(48 * progress);
  const realPct = Math.round(13 * progress);

  return (
    <div ref={containerRef} className="problem-cards">
      <article className="problem-card reveal">
        <div
          className="card-art"
          style={{ background: 'linear-gradient(155deg, #1b2c24 0%, #263c32 100%)' }}
        >
          <span className="card-art-metric">70% UNCHECKED</span>
          <svg
            role="img"
            viewBox="0 0 260 138"
            className="w-full h-full block relative z-[1]"
            aria-label="Chart showing 70 percent unchecked AI outputs shipped"
          >
            <g stroke="rgba(255,255,255,0.09)" strokeWidth="1">
              <line x1="16" y1="36" x2="244" y2="36" />
              <line x1="16" y1="72" x2="244" y2="72" />
              <line x1="16" y1="108" x2="244" y2="108" />
            </g>
            <line
              x1="16"
              y1="48"
              x2="244"
              y2="48"
              stroke="#b77a35"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            {bars.map((maxH, idx) => {
              const h = Math.max(4, Math.round(maxH * progress));
              return (
                <rect
                  key={idx}
                  x={26 + idx * 32}
                  y={108 - h}
                  width="22"
                  height={h}
                  rx="3"
                  fill={barColors[idx]}
                />
              );
            })}
            <circle cx="197" cy={104 - Math.round(82 * progress)} r="4" fill="#f7f5ed" />
            <text
              x="16"
              y="124"
              fill="rgba(247,245,237,0.75)"
              fontFamily="DM Mono, monospace"
              fontSize="9"
            >
              UNVETTED OUTPUTS SHIPPED
            </text>
          </svg>
        </div>
        <span className="card-index">01 / SIGNAL</span>
        <h3>Workslop drains you.</h3>
        <p>
          You push faster output; your tired team stops checking drafts and hands you bloated memos nobody can defend.
        </p>
      </article>

      <article className="problem-card reveal">
        <div
          className="card-art"
          style={{ background: 'linear-gradient(155deg, #1b2c24 0%, #263c32 100%)' }}
        >
          <span className="card-art-metric">12 TO 25 REPORTS</span>
          <svg
            role="img"
            viewBox="0 0 260 138"
            className="w-full h-full block relative z-[1]"
            aria-label="Chart showing manager span growing past safe 8-report cap"
          >
            <g stroke="rgba(255,255,255,0.09)" strokeWidth="1">
              <line x1="16" y1="54" x2="244" y2="54" />
              <line x1="16" y1="88" x2="244" y2="88" />
            </g>
            <line
              x1="94"
              y1="24"
              x2="94"
              y2="106"
              stroke="#8fb9a8"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <text
              x="98"
              y="34"
              fill="#a8cbbd"
              fontFamily="DM Mono, monospace"
              fontSize="8.5"
            >
              8 REPORT SAFE CAP
            </text>
            <rect x="20" y="60" width="220" height="16" rx="4" fill="rgba(255,255,255,0.08)" />
            <rect x="20" y="60" width={spanSafeW} height="16" rx="4" fill="#52836f" />
            <rect x="94" y="60" width={spanOverW} height="16" rx="3" fill="#cf924c" />
            <circle cx={20 + spanTotalW} cy="68" r="5" fill="#f7f5ed" />
            <text
              x="20"
              y="102"
              fill="rgba(247,245,237,0.75)"
              fontFamily="DM Mono, monospace"
              fontSize="9"
            >
              SPAN: {spanReports} DIRECT REPORTS
            </text>
            <text
              x="20"
              y="124"
              fill="rgba(247,245,237,0.6)"
              fontFamily="DM Mono, monospace"
              fontSize="8.5"
            >
              COACHING HOURS DROP TO ZERO
            </text>
          </svg>
        </div>
        <span className="card-index">02 / SIGNAL</span>
        <h3>Your managers snap.</h3>
        <p>
          When we flatten past eight reports, you double the noise on survivors and squeeze out every hour of coaching.
        </p>
      </article>

      <article className="problem-card reveal">
        <div
          className="card-art"
          style={{ background: 'linear-gradient(155deg, #1b2c24 0%, #263c32 100%)' }}
        >
          <span className="card-art-metric">48% FAKING IT</span>
          <svg
            role="img"
            viewBox="0 0 260 138"
            className="w-full h-full block relative z-[1]"
            aria-label="Chart comparing 48 percent performative AI against 13 percent org gains"
          >
            <text
              x="20"
              y="42"
              fill="rgba(247,245,237,0.85)"
              fontFamily="DM Mono, monospace"
              fontSize="9"
            >
              PERFORMATIVE AI FLUENCY
            </text>
            <rect x="20" y="48" width="210" height="14" rx="4" fill="rgba(255,255,255,0.08)" />
            <rect x="20" y="48" width={fakeW} height="14" rx="4" fill="#cf924c" />
            <text
              x={28 + fakeW}
              y="59"
              fill="#f7f5ed"
              fontFamily="DM Mono, monospace"
              fontSize="9.5"
            >
              {fakePct}%
            </text>

            <text
              x="20"
              y="84"
              fill="rgba(247,245,237,0.75)"
              fontFamily="DM Mono, monospace"
              fontSize="9"
            >
              REAL ORG GAINS REPORTED
            </text>
            <rect x="20" y="90" width="210" height="14" rx="4" fill="rgba(255,255,255,0.08)" />
            <rect x="20" y="90" width={realW} height="14" rx="4" fill="#77a38f" />
            <text
              x={28 + realW}
              y="101"
              fill="#a8cbbd"
              fontFamily="DM Mono, monospace"
              fontSize="9.5"
            >
              {realPct}%
            </text>

            <text
              x="20"
              y="124"
              fill="rgba(247,245,237,0.6)"
              fontFamily="DM Mono, monospace"
              fontSize="8.5"
            >
              VISIER &amp; WORK AI INDEX GAP
            </text>
          </svg>
        </div>
        <span className="card-index">03 / SIGNAL</span>
        <h3>Fear makes us lie.</h3>
        <p>
          Half your floor fakes AI fluency for you out of layoff panic while hiding where tools stall on Tuesday.
        </p>
      </article>
    </div>
  );
}

const VOCAB_ITEMS = [
  {
    term: 'Workslop',
    note: 'Polished AI memos that look smart on Slack and push the real thinking onto whoever has to clean them up.',
  },
  {
    term: 'Botsitting',
    note: 'The 6.4 hours every week your staff burn feeding missing context, catching errors, and re-running prompts.',
  },
  {
    term: 'AI Brain Fry',
    note: 'Cognitive exhaustion from babysitting parallel agents and losing deep focus across nonstop review loops.',
  },
  {
    term: 'Meat Proxy',
    note: 'A manager who forwards unedited chatbot directives upward or downward with their own name pasted on top.',
  },
  {
    term: 'AI Shame',
    note: 'Hiding your real AI struggles or exaggerating fluency because you expect tool usage to decide layoffs.',
  },
  {
    term: 'Tokenmaxxing',
    note: 'Burning frontier tokens to climb internal leaderboards until finance steps in with hard monthly caps.',
  },
];

export function InteractiveVocabGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [userLocked, setUserLocked] = useState<boolean>(false);

  useEffect(() => {
    if (userLocked) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VOCAB_ITEMS.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [userLocked]);

  const active = VOCAB_ITEMS[activeIndex];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {VOCAB_ITEMS.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.term}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                setUserLocked(true);
                setActiveIndex(idx);
              }}
              onMouseEnter={() => {
                setUserLocked(true);
                setActiveIndex(idx);
              }}
              onFocus={() => {
                setUserLocked(true);
                setActiveIndex(idx);
              }}
              className={`font-serif font-semibold text-base py-3.5 px-3 rounded-md border transition-colors transition-transform text-center cursor-pointer ${
                isActive
                  ? 'bg-[var(--forest)] text-[#f7f5ed] border-[var(--forest)] -translate-y-0.5 shadow-md'
                  : 'bg-[#faf8f2]/75 text-[#3e4a42] border-[var(--line)] hover:border-[var(--forest)]'
              }`}
            >
              {item.term}
            </button>
          );
        })}
      </div>

      <div className="rounded-lg border border-[var(--line)] bg-[#faf8f2] px-4 py-3 text-xs leading-relaxed text-[var(--ink)]">
        <span className="font-mono font-semibold uppercase tracking-wider text-[10px] text-[#8a571c] mr-2">
          {active.term}:
        </span>
        {active.note}
      </div>
    </div>
  );
}

const CHARTERS = [
  {
    id: 'holdback',
    label: 'Human Holdback Rule',
    audience: 'For CEOs, VPs & Directors',
    text: `THE HUMAN HOLDBACK RULE (PASTE IN LEADERSHIP SLACK)
1. Never ship AI prose in four rooms: 1-on-1 feedback, conflict notes, layoff or org updates, and post-incident reviews.
2. Any memo longer than 300 words must open with a 2-sentence summary you wrote yourself without AI.
3. If you did not verify every claim and number in a draft, your name does not go on it.
4. Keep AI prompts private prep; send your own human words to your team.`,
  },
  {
    id: 'span-reset',
    label: 'Span Reset Scorecard',
    audience: 'For VPs & Engineering Managers',
    text: `MANAGER SPAN RESET SCORECARD (RUN EVERY 30 DAYS)
1. Count direct human reports per manager. Any pod above 8 direct reports triggers an automatic review.
2. Measure weekly hours spent de-slopping PRs, tickets, and docs handed down or up.
3. Audit 1-on-1 cancellation rate. Two skipped coaching weeks in a row means the manager span broke.
4. Pull all AI agents off human org charts. Name one human owner for every automated workflow.`,
  },
  {
    id: 'slop-charter',
    label: 'Team AI Slop Charter',
    audience: 'For Whole Product & Eng Teams',
    text: `TEAM AI SLOP CHARTER (FREE TO USE MONDAY)
1. No raw copy-pasted chatbot replies in Slack channels, PR descriptions, or design docs.
2. Respect the sender-to-reader rule: never ask five people to spend 20 minutes reading what took you 10 seconds to generate.
3. Turn off AI meeting bots during candid brainstorming, performance chats, and sensitive customer calls.
4. Reward clean deletions and bug catches over token volume or lines generated.`,
  },
  {
    id: 'scoping-brief',
    label: '14-Day Scoping Brief',
    audience: 'For CEOs, CFOs & VPs of Engineering',
    text: `REALISTIC DELIVERY SCOPING BRIEF (BEFORE YOU COMMIT A DATE)
1. Prototype Window (Days 1 to 3): Isolate what AI builds fast on mock data so stakeholders test UX early.
2. Integration Surface (Days 4 to 14): List every auth check, data migration, billing write, and legacy API touched.
3. Verification Owner: Name one Staff Engineer or Engineering Manager signing off before customer traffic arrives.
4. Cut Line: State plainly what ships in phase two if the board holds the 14-day calendar date.`,
  },
  {
    id: 'agent-matrix',
    label: 'Agent Ownership Matrix',
    audience: 'For CTOs, COOs & Operations Leads',
    text: `HUMAN ACCOUNTABILITY MATRIX (NO AGENTS ON THE ORG CHART)
1. Pull all AI agents off Lattice, Workday, and org slides. Track them strictly in your infrastructure spend registry.
2. Tool Default: Human sender signs their name and verifies every claim before pasting outputs.
3. Bounded Teammate: Named Team Lead audits sample triage or PR comments weekly against a clear rubric.
4. Autonomous Write Gate: Never rely on polite prompts. Enforce hard spend caps and one named human owner per workflow.`,
  },
  {
    id: 'bot-consent',
    label: 'AI-Quiet & Bot Consent',
    audience: 'For Whole Org, HR & General Counsel',
    text: `AI-QUIET HOURS & BOT CONSENT POLICY (REDUCE BRAIN FRY & LEGAL RISK)
1. Protect one daily 2-hour AI-Quiet deep-work block with zero Slack review pings or parallel agent status checks.
2. Disable global auto-join on Fireflies, Otter, and Read AI. Host must click admit and announce active recording.
3. Ban automated meeting bots inside 1-on-1s, performance reviews, HR disputes, and layoff discussions.
4. Auto-kick bots when the host exits and purge casual internal transcripts every 14 to 30 days.`,
  },
  {
    id: 'reverse-mentoring',
    label: 'Reverse-Mentoring Sprint',
    audience: 'For Engineering Managers & Staff ICs',
    text: `4-WEEK REVERSE-MENTORING SPRINT (PROTECT THE JUNIOR RUNG)
1. Week 1: Junior shadows Staff Engineer during live incident triage to see how real systems fail under load.
2. Week 2: Junior tests modern AI tooling and builds one automation removing manual team toil for the senior lead.
3. Week 3: Junior ships one scoped production change and explains every line and rollback path without prompt notes.
4. Week 4: Grade on concrete shipped ownership and debugging skill, not meeting hours attended.`,
  },
];

export function CopyableCharterKit() {
  const [selectedId, setSelectedId] = useState<string>(CHARTERS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const active = CHARTERS.find((c) => c.id === selectedId) || CHARTERS[0];

  const handleCopy = async () => {
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    setCopyError(null);
    try {
      await navigator.clipboard.writeText(active.text);
      setCopiedId(active.id);
      copyTimerRef.current = setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setCopiedId(null);
      setCopyError('Clipboard blocked by browser. Select and copy the text block below.');
      copyTimerRef.current = setTimeout(() => setCopyError(null), 4000);
    }
  };

  return (
    <div className="mt-14 rounded-xl border border-[var(--line)] bg-[#faf8f2] p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--line)] pb-5 mb-6">
        <div>
          <span className="font-mono font-semibold text-[10px] uppercase tracking-widest text-[#8a571c] block mb-1">
            FREE CHARTERS I USE WITH TEAMS
          </span>
          <h3 className="font-serif text-2xl text-[var(--ink)] m-0">
            Copy one rule you can paste in Slack before Monday.
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {CHARTERS.map((charter) => {
            const isSelected = charter.id === selectedId;
            return (
              <button
                key={charter.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(charter.id)}
                className={`px-3.5 py-2 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--forest)] text-[#f7f5ed]'
                    : 'bg-[#ebe7dc] text-[var(--ink)] hover:bg-[#ded9cb]'
                }`}
              >
                {charter.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <span className="font-mono text-xs text-[var(--muted)]">{active.audience}</span>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <span className="sr-only" aria-live="polite">
            {copiedId === active.id ? `${active.label} copied to clipboard.` : copyError || ''}
          </span>
          {copyError && (
            <span className="text-xs text-[#9b2c2c] font-medium">{copyError}</span>
          )}
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#85541a] text-white text-xs font-semibold hover:bg-[#6e4514] transition-colors cursor-pointer"
          >
            {copiedId === active.id ? (
              <>
                <Check className="w-3.5 h-3.5" aria-hidden="true" />
                Copied to clipboard
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                Copy charter text
              </>
            )}
          </button>
        </div>
      </div>

      <pre className="whitespace-pre-wrap font-mono text-xs sm:text-[13px] leading-relaxed text-[var(--ink)] bg-[#f4f1e9] border border-[var(--line)] rounded-lg p-5 overflow-x-auto">
        {active.text}
      </pre>
    </div>
  );
}

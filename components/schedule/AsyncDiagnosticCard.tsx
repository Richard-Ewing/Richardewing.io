'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export default function AsyncDiagnosticCard() {
  const [email, setEmail] = useState('');
  const [provider, setProvider] = useState('');
  const [spendOrBottleneck, setSpendOrBottleneck] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage('Please provide a valid work email address.');
      return;
    }

    if (!provider) {
      setErrorMessage('Please select your primary Cloud or AI provider.');
      return;
    }

    if (!spendOrBottleneck.trim()) {
      setErrorMessage('Please provide your estimated monthly spend or primary bottleneck.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const domain = trimmedEmail.split('@')[1] || '';
    const company = domain ? domain.split('.')[0].toUpperCase() : 'Not Specified';

    const formattedMessage = [
      `Cloud / AI Provider: ${provider}`,
      `Estimated Monthly Spend or Primary Bottleneck: ${spendOrBottleneck.trim()}`,
      `Architecture Notes / Questions: ${notes.trim() || 'None provided'}`,
    ].join('\n');

    try {
      const [leadsRes, captureRes] = await Promise.allSettled([
        fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: trimmedEmail,
            toolName: 'Async Executive Diagnostic Review',
            company,
            score: 100,
            message: formattedMessage,
            answers: {
              provider,
              spendOrBottleneck: spendOrBottleneck.trim(),
              notes: notes.trim(),
            },
          }),
        }),
        fetch('/api/lead-capture', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: trimmedEmail.split('@')[0],
            email: trimmedEmail,
            company,
            source: 'Async Executive Diagnostic Review',
            message: formattedMessage,
          }),
        }),
      ]);

      const leadsOk = leadsRes.status === 'fulfilled' && leadsRes.value.ok;
      const captureOk = captureRes.status === 'fulfilled' && captureRes.value.ok;

      if (!leadsOk && !captureOk) {
        throw new Error('Failed to submit async diagnostic review');
      }

      setSubmittedEmail(trimmedEmail);
      setIsSubmitted(true);
    } catch (err) {
      console.error('[AsyncDiagnosticCard] Submission error:', err);
      setErrorMessage('Could not dispatch your diagnostic review. Please verify your connection or email richardewing@exogram.ai directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-lg mx-auto text-center py-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <span className="text-[10px] font-bold font-mono text-[var(--gold)] uppercase tracking-wider block mb-1">
            INTAKE CONFIRMED : 24-HOUR SLA
          </span>
          <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-3">
            Async Diagnostic Review Dispatched
          </h3>
          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6">
            Your architecture details and infrastructure numbers have been sent to Richard&apos;s desk for{' '}
            <span className="font-semibold text-[var(--ink)]">{submittedEmail}</span>.
          </p>

          <div className="p-4 bg-[var(--paper)] border border-[var(--line)] rounded-xl text-left text-xs text-[var(--ink)] leading-relaxed space-y-2 mb-6">
            <div className="flex items-center gap-2 text-[var(--gold)] font-bold font-mono text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Mutual NDA Protocol</span>
            </div>
            <p className="text-[var(--muted)]">
              All billing logs, model commitments, and architectural notes are treated as strictly confidential under bilateral non-disclosure terms.
            </p>
            <p className="text-[var(--muted)]">
              Richard will personally review your numbers and reply with an initial executive diagnostic breakdown within 24 hours at {submittedEmail}.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setEmail('');
              setProvider('');
              setSpendOrBottleneck('');
              setNotes('');
            }}
            className="text-xs text-[var(--muted)] hover:text-[var(--ink)] underline transition-colors cursor-pointer"
          >
            Submit another diagnostic request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-bold font-mono text-[var(--gold)] uppercase tracking-wider">
          TIMEZONE &amp; ASYNC FALLBACK
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[var(--ink)] mb-2">
        Async Diagnostic Review
      </h3>

      <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6">
        Cannot make Pacific Time video meetings work? Submit your architecture metrics or cloud billing bottlenecks for a direct executive review.
      </p>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-900 text-xs">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Field 1: Work Email */}
        <div>
          <label htmlFor="async-email" className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="async-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="cto@company.com"
            className="w-full bg-white text-zinc-950 border border-[var(--line)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent placeholder:text-zinc-400"
          />
        </div>

        {/* Field 2: Cloud / AI Provider */}
        <div>
          <label htmlFor="async-provider" className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5">
            Cloud / AI Provider <span className="text-red-500">*</span>
          </label>
          <select
            id="async-provider"
            required
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="w-full bg-white text-zinc-950 border border-[var(--line)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent cursor-pointer"
          >
            <option value="" disabled>
              Select your primary cloud or AI provider...
            </option>
            <option value="AWS">AWS</option>
            <option value="Azure">Azure</option>
            <option value="GCP">GCP</option>
            <option value="OpenAI">OpenAI</option>
            <option value="Anthropic">Anthropic</option>
            <option value="Multi-Cloud">Multi-Cloud</option>
            <option value="Private Cluster">Private Cluster</option>
          </select>
        </div>

        {/* Field 3: Estimated Monthly Spend or Primary Bottleneck */}
        <div>
          <label htmlFor="async-spend" className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5">
            Estimated Monthly Spend or Primary Bottleneck <span className="text-red-500">*</span>
          </label>
          <input
            id="async-spend"
            type="text"
            required
            value={spendOrBottleneck}
            onChange={(e) => setSpendOrBottleneck(e.target.value)}
            placeholder="e.g. $50k/mo on Anthropic API, negative gross margins"
            className="w-full bg-white text-zinc-950 border border-[var(--line)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent placeholder:text-zinc-400"
          />
        </div>

        {/* Field 4: Notes / Architecture Questions */}
        <div>
          <label htmlFor="async-notes" className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5">
            Notes / Architecture Questions <span className="text-[var(--muted)] font-normal lowercase">(optional)</span>
          </label>
          <textarea
            id="async-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Key infrastructure bottlenecks, inference latency concerns, or questions for Richard..."
            className="w-full bg-white text-zinc-950 border border-[var(--line)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent placeholder:text-zinc-400 resize-none"
          />
        </div>

        {/* The Pitch Banner */}
        <div className="p-4 bg-[var(--paper2)] border border-[var(--line)] rounded-xl text-xs text-[var(--ink)] leading-relaxed">
          <p>
            <strong>Operating in a different timezone or prefer async?</strong> Drop your numbers above. Richard will review your architecture or billing leak and reply with an initial executive diagnostic breakdown within 24 hours.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="button button-gold w-full text-center flex items-center justify-center gap-2 py-3 text-sm font-bold shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Dispatching Diagnostic Review...</span>
            </>
          ) : (
            <>
              <span>Request 24-Hour Async Review</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Mutual NDA Note */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-[var(--muted)] pt-1 text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" />
          <span>Mutual NDA Protocol enforced. Your numbers and architecture details remain confidential.</span>
        </div>
      </form>
    </div>
  );
}

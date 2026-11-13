'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  SPONSORSHIP_PACKAGES,
  type SponsorshipPackage,
} from '@/lib/monetization/sponsorship-config';

export default function SponsorshipMediaKit() {
  const [selectedPkgId, setSelectedPkgId] = useState<SponsorshipPackage['id']>('all-three-exclusive');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [targetUrl, setTargetUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const pillar = params.get('pillar');
    if (pillar === 'glossary') {
      setSelectedPkgId('glossary-pillar');
    } else if (pillar === 'blog' || pillar === 'concepts') {
      setSelectedPkgId('editorial-concepts');
    }
  }, []);

  const activePackage =
    SPONSORSHIP_PACKAGES.find((pkg) => pkg.id === selectedPkgId) || SPONSORSHIP_PACKAGES[2];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const compiledMessage = [
      `Selected Package: ${activePackage.name} (${activePackage.priceDisplay})`,
      `Coverage: ${activePackage.pageCoverage}`,
      targetUrl.trim() ? `Destination URL: ${targetUrl.trim()}` : null,
      notes.trim() ? `Campaign Notes: ${notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          source: 'sponsorship_media_kit',
          message: compiledMessage,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(
          typeof errData?.error === 'string'
            ? errData.error
            : 'Unable to submit sponsorship request. Please try again.'
        );
      }

      setStatus('success');
      setName('');
      setEmail('');
      setCompany('');
      setTargetUrl('');
      setNotes('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Network error submitting sponsorship inquiry.'
      );
    }
  };

  return (
    <section id="sponsor" className="scroll-mt-24 mb-16">
      <div className="rounded-3xl border border-zinc-300 bg-white p-8 sm:p-10 shadow-sm">
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-widest mb-2">
            Direct B2B Advertising &amp; Editorial Sponsorships
          </div>
          <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950 mb-3">
            Sponsor Our Scoped Technical Directories (375 Pages)
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
            Place a native, zero-tracker sponsor card directly inside our highest-read search pages without competing against programmatic banner noise. Homepage, pricing, and diagnostic calculators stay strictly ad-free.
          </p>
        </div>

        {/* Verified 30-Day Cloudflare Human Readout */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-10">
          <div className="rounded-2xl border border-zinc-200 bg-[#FAF9F6] p-4">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-1">
              30-Day Scoped Pool
            </div>
            <div className="font-grotesk text-2xl font-bold text-zinc-950">13,690</div>
            <div className="text-xs font-semibold text-zinc-700 mt-0.5">
              Verified human reads
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-[#FAF9F6] p-4">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-1">
              /glossary/* (122 pages)
            </div>
            <div className="font-grotesk text-2xl font-bold text-zinc-950">6,480</div>
            <div className="text-xs font-semibold text-zinc-700 mt-0.5">
              Monthly human views
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-[#FAF9F6] p-4">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-1">
              /blog/* (131 pages)
            </div>
            <div className="font-grotesk text-2xl font-bold text-zinc-950">3,620</div>
            <div className="text-xs font-semibold text-zinc-700 mt-0.5">
              Monthly human views
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-[#FAF9F6] p-4">
            <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-1">
              /concepts/* (122 pages)
            </div>
            <div className="font-grotesk text-2xl font-bold text-zinc-950">3,590</div>
            <div className="text-xs font-semibold text-zinc-700 mt-0.5">
              Monthly human views
            </div>
          </div>
        </div>

        {/* Sponsorship Package Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {SPONSORSHIP_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === selectedPkgId;
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-700 bg-cyan-50/40 shadow-sm'
                    : 'border-zinc-200 bg-[#FAF9F6]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-800">
                      {isSelected ? 'Selected Slot' : 'Flat Monthly Rate'}
                    </span>
                    <span className="font-grotesk text-xl font-bold text-zinc-950">
                      {pkg.priceDisplay}
                    </span>
                  </div>
                  <h3 className="font-grotesk text-lg font-bold text-zinc-950 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-800 mb-2">
                    {pkg.trafficSummary}
                  </p>
                  <p className="text-xs text-zinc-700 leading-relaxed mb-4">
                    Best for: {pkg.idealFor}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPkgId(pkg.id)}
                  className={`min-h-[44px] w-full px-4 py-2.5 rounded-xl font-grotesk font-bold text-xs uppercase tracking-wider transition-colors border ${
                    isSelected
                      ? 'bg-zinc-950 text-white border-zinc-950'
                      : 'bg-white hover:bg-zinc-100 text-zinc-900 border-zinc-300'
                  }`}
                >
                  {isSelected ? 'Selected for Inquiry' : `Select ${pkg.priceDisplay}`}
                </button>
              </div>
            );
          })}
        </div>

        {/* Inquiry & Slot Reservation Form */}
        <div className="rounded-2xl border border-zinc-200 bg-[#FAF9F6] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-grotesk text-xl font-bold text-zinc-950">
                Reserve Inventory: {activePackage.name} ({activePackage.priceDisplay})
              </h3>
              <p className="text-xs sm:text-sm text-zinc-700 font-medium mt-1">
                Audience: CEOs, CFOs, CTOs, VPs of Engineering, Directors of Finance, and FinOps Leads.
              </p>
            </div>
            <Link
              href="/schedule?source=sponsorship"
              className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 font-mono text-xs font-bold transition-colors"
            >
              Book 15-Min Sponsor Slot -&gt;
            </Link>
          </div>

          {status === 'success' ? (
            <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 text-zinc-900 space-y-2">
              <div className="font-grotesk text-base font-bold text-emerald-950">
                Sponsorship inquiry received for {activePackage.name}.
              </div>
              <p className="text-sm text-emerald-900 font-medium">
                We received your campaign details and will reply within 1 business day with open calendar dates and creative guidelines.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/schedule?source=sponsorship"
                  className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-grotesk font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Lock Dates on Calendar Now -&gt;
                </Link>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 font-mono text-xs font-bold transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="sponsor-name"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="sponsor-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Lee"
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-zinc-300 bg-white text-sm text-zinc-950 focus:outline-none focus:border-cyan-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sponsor-email"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 mb-1.5"
                  >
                    Work Email *
                  </label>
                  <input
                    id="sponsor-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@finopsplatform.com"
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-zinc-300 bg-white text-sm text-zinc-950 focus:outline-none focus:border-cyan-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="sponsor-company"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 mb-1.5"
                  >
                    Company Name *
                  </label>
                  <input
                    id="sponsor-company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Vantage / CloudZero / Lakera"
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-zinc-300 bg-white text-sm text-zinc-950 focus:outline-none focus:border-cyan-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sponsor-url"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 mb-1.5"
                  >
                    Target Landing Page URL
                  </label>
                  <input
                    id="sponsor-url"
                    type="url"
                    value={targetUrl}
                    onChange={(e) => setTargetUrl(e.target.value)}
                    placeholder="https://yourcompany.com/demo"
                    className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-zinc-300 bg-white text-sm text-zinc-950 focus:outline-none focus:border-cyan-700"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="sponsor-notes"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 mb-1.5"
                >
                  Target Month &amp; Creative Copy Notes
                </label>
                <textarea
                  id="sponsor-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Preferred start month, product message, and whether you want category exclusivity."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 bg-white text-sm text-zinc-950 focus:outline-none focus:border-cyan-700"
                />
              </div>

              {status === 'error' && errorMsg && (
                <div className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-xs font-semibold text-rose-900">
                  {errorMsg}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 disabled:opacity-60 text-white font-grotesk font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  {status === 'submitting' ? 'Submitting Request...' : 'Request Sponsorship Dates ->'}
                </button>
                <span className="text-xs text-zinc-700 font-medium">
                  Want to lock dates immediately?{' '}
                  <Link
                    href="/schedule?source=sponsorship"
                    className="font-bold text-cyan-800 underline underline-offset-4 hover:text-cyan-950"
                  >
                    Schedule a 15-min call
                  </Link>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

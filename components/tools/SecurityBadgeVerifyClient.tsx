'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, CheckCircle2, Copy, ShieldCheck } from 'lucide-react';
import { BadgeTokenClaims } from '@/lib/pay-to-reveal/client-catalog';

export default function SecurityBadgeVerifyClient() {
  const [status, setStatus] = useState<'loading' | 'valid' | 'invalid' | 'missing'>('loading');
  const [cert, setCert] = useState<BadgeTokenClaims | null>(null);
  const [errorText, setErrorText] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const badge = params.get('badge')?.trim() || '';

    if (!badge) {
      setStatus('missing');
      return;
    }

    fetch(`/api/tools/verify-badge?badge=${encodeURIComponent(badge)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || !data.valid) {
          setErrorText(data.error || 'Badge verification failed.');
          setStatus('invalid');
          return;
        }
        setCert(data.certificate as BadgeTokenClaims);
        setStatus('valid');
      })
      .catch(() => {
        setErrorText('Unable to reach cryptographic verification service.');
        setStatus('invalid');
      });
  }, []);

  function copyShareUrl() {
    if (typeof window === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {status === 'loading' && (
        <div className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl p-8 text-center font-sans text-sm text-[#4a5850]">
          Validating HMAC-SHA256 clearance signature...
        </div>
      )}

      {status === 'missing' && (
        <div className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl p-8 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#162e26]">
            No Clearance Badge Token Provided
          </h2>
          <p className="font-sans text-sm text-[#4a5850] leading-relaxed">
            Append a signed <code className="font-mono text-xs">?badge=REBADGE1...</code> token from a Founder &amp; CTO Clearance Pack, or run a fresh scan on your live application.
          </p>
          <Link
            href="/tools/vibe-security-scanner"
            className="inline-block px-5 py-2.5 rounded-lg bg-[#1f3b2c] text-[#f4f1e9] font-sans text-sm font-bold"
          >
            Run Security Scanner ↗
          </Link>
        </div>
      )}

      {status === 'invalid' && (
        <div className="bg-[#c86d56]/15 border border-[#c86d56]/40 rounded-xl p-8 space-y-4">
          <div className="flex items-center gap-2.5 text-[#9e3f29]">
            <AlertTriangle className="w-6 h-6" />
            <h2 className="font-serif text-2xl font-bold">Signature Verification Failed</h2>
          </div>
          <p className="font-sans text-sm text-[#1e2924]">{errorText}</p>
          <Link
            href="/tools/vibe-security-scanner"
            className="inline-block px-5 py-2.5 rounded-lg bg-[#1f3b2c] text-[#f4f1e9] font-sans text-sm font-bold"
          >
            Generate a Fresh Clearance Scan ↗
          </Link>
        </div>
      )}

      {status === 'valid' && cert && (
        <div className="bg-[#162e26] text-[#f4f1e9] rounded-xl p-8 border-2 border-[#b77a35] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-[#b77a35]">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">
                HMAC-SHA256 Verified Clearance Record
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1f3b2c] border border-[#b77a35]/40 font-mono text-xs text-[#f4f1e9]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#b77a35]" />
              Signature Authentic
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="font-serif text-3xl font-bold text-[#f4f1e9]">{cert.target}</h2>
            <p className="font-mono text-xs text-[#f4f1e9]/70">Audit ID: {cert.auditId}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-[#1f3b2c] rounded-lg p-3.5">
              <span className="block font-mono text-[10px] uppercase text-[#f4f1e9]/70">Score</span>
              <span className="font-mono text-2xl font-bold text-[#f4f1e9]">{cert.score}/100</span>
            </div>
            <div className="bg-[#1f3b2c] rounded-lg p-3.5">
              <span className="block font-mono text-[10px] uppercase text-[#b77a35]">Grade</span>
              <span className="font-serif text-2xl font-bold text-[#b77a35]">{cert.grade}</span>
            </div>
            <div className="bg-[#1f3b2c] rounded-lg p-3.5">
              <span className="block font-mono text-[10px] uppercase text-[#f4f1e9]/70">
                Critical / High
              </span>
              <span className="font-mono text-lg font-bold text-[#f4f1e9]">
                {cert.criticalCount}C / {cert.highCount}H
              </span>
            </div>
            <div className="bg-[#1f3b2c] rounded-lg p-3.5">
              <span className="block font-mono text-[10px] uppercase text-[#f4f1e9]/70">
                Valid Until
              </span>
              <span className="font-mono text-xs font-bold text-[#f4f1e9]">
                {new Date(cert.expiresAt).toISOString().slice(0, 10)}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#f4f1e9]/15">
            <button
              type="button"
              onClick={copyShareUrl}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#b77a35] hover:bg-[#9f682b] text-white font-sans text-xs font-bold transition-colors"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Verification Link Copied!' : 'Copy Public Verification Link'}
            </button>
            <Link
              href="/tools/vibe-security-scanner"
              className="font-sans text-xs font-semibold text-[#f4f1e9]/85 hover:underline"
            >
              Scan Another Application ↗
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

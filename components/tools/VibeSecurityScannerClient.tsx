'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  FileCode2,
  GitBranch,
  Globe,
  Lock,
  RefreshCw,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import {
  ScanFocusProfile,
  ScanMode,
  SecurityFindingFull,
  VIBE_SCAN_SAMPLE_PRESETS,
  VibeScanPublicResponse,
  VibeScanSealedPayload,
} from '@/lib/pay-to-reveal/client-catalog';

interface VibeSecurityScannerClientProps {
  initialFocusProfile?: ScanFocusProfile;
  returnPath?: string;
}

const STORAGE_PREFIX = 're_vibe_run_';
const RESCAN_TOKEN_STORAGE_KEY = 're_vibe_rescan_token_v1';

export default function VibeSecurityScannerClient({
  initialFocusProfile = 'full',
  returnPath = '/tools/vibe-security-scanner',
}: VibeSecurityScannerClientProps) {
  const [mode, setMode] = useState<ScanMode>(
    initialFocusProfile === 'mcp-agent' || initialFocusProfile === 'supabase-rls' ? 'code' : 'code'
  );
  const [targetUrl, setTargetUrl] = useState('');
  const [codeSnippet, setCodeSnippet] = useState(
    initialFocusProfile === 'mcp-agent'
      ? VIBE_SCAN_SAMPLE_PRESETS[1].codeSnippet
      : VIBE_SCAN_SAMPLE_PRESETS[0].codeSnippet
  );
  const [focusProfile, setFocusProfile] = useState<ScanFocusProfile>(initialFocusProfile);

  const [isScanning, setIsScanning] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState<'vibe_scan_29' | 'vibe_scan_49' | null>(null);
  const [isVerifyingPayment, setIsVerifyingPayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  const [scanResult, setScanResult] = useState<VibeScanPublicResponse | null>(null);
  const [openedFindings, setOpenedFindings] = useState<SecurityFindingFull[] | null>(null);
  const [openedTier, setOpenedTier] = useState<'single_pass' | 'clearance_pack' | null>(null);
  const [activeRescanToken, setActiveRescanToken] = useState<string | null>(null);
  const [badgeVerifyUrl, setBadgeVerifyUrl] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Restore stored rescanToken & process post-Stripe return parameters safely on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedRescan = window.localStorage.getItem(RESCAN_TOKEN_STORAGE_KEY);
    if (savedRescan) {
      setActiveRescanToken(savedRescan);
    }

    const params = new URLSearchParams(window.location.search);
    const urlMode = params.get('mode');
    if (urlMode === 'url' || urlMode === 'github' || urlMode === 'code') {
      setMode(urlMode);
    } else if (urlMode === 'config') {
      setMode('code');
      setFocusProfile('mcp-agent');
      setCodeSnippet(VIBE_SCAN_SAMPLE_PRESETS[1].codeSnippet);
    }

    const runId = params.get('run_id');
    const sessionId = params.get('session_id');
    const canceled = params.get('canceled');

    if (runId) {
      try {
        const rawSaved = window.localStorage.getItem(`${STORAGE_PREFIX}${runId}`);
        if (rawSaved) {
          const parsed = JSON.parse(rawSaved) as VibeScanPublicResponse;
          setScanResult(parsed);
        }
      } catch {
        // Ignore corrupted local cache
      }
    }

    if (canceled === '1') {
      setStatusNotice(
        'Checkout canceled. Your free Finding #1 trace remains open below whenever you are ready.'
      );
    }

    if (runId && sessionId && sessionId.startsWith('cs_')) {
      setIsVerifyingPayment(true);
      let cachedEnvelope = '';
      try {
        const rawSaved = window.localStorage.getItem(`${STORAGE_PREFIX}${runId}`);
        if (rawSaved) {
          const parsed = JSON.parse(rawSaved) as VibeScanPublicResponse;
          cachedEnvelope = parsed.sealedEnvelope || '';
        }
      } catch {
        cachedEnvelope = '';
      }

      fetch('/api/tools/open-run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          runId,
          toolId: 'vibe-security-scanner',
          sessionId,
          sealedEnvelope: cachedEnvelope || undefined,
        }),
      })
        .then(async (res) => {
          const data = await res.json();
          if (!res.ok) {
            throw new Error(data.error || 'Unable to verify Stripe payment.');
          }
          if (data.rescanToken) {
            setActiveRescanToken(data.rescanToken);
            window.localStorage.setItem(RESCAN_TOKEN_STORAGE_KEY, data.rescanToken);
          }
          if (data.requiresRescanPaste) {
            setOpenedTier(data.tier || 'single_pass');
            setStatusNotice(data.message);
            return;
          }
          const fullPayload = data.payload as VibeScanSealedPayload;
          setOpenedFindings(fullPayload.findings);
          setOpenedTier(data.tier || 'single_pass');
          if (data.badgeVerifyUrl) {
            setBadgeVerifyUrl(data.badgeVerifyUrl);
          }
          setScanResult((prev) =>
            prev || {
              runId,
              targetLabel: fullPayload.targetLabel,
              mode: fullPayload.mode,
              scannedAt: fullPayload.scannedAt,
              score: fullPayload.score,
              grade: fullPayload.grade,
              verdictLabel: fullPayload.verdictLabel,
              estimatedMonthlyExposureUsd: fullPayload.estimatedMonthlyExposureUsd,
              scannedArtifacts: fullPayload.scannedArtifacts,
              severityCounts: {
                CRITICAL: fullPayload.findings.filter((f) => f.severity === 'CRITICAL').length,
                HIGH: fullPayload.findings.filter((f) => f.severity === 'HIGH').length,
                MEDIUM: fullPayload.findings.filter((f) => f.severity === 'MEDIUM').length,
                LOW: fullPayload.findings.filter((f) => f.severity === 'LOW').length,
              },
              freeFinding: fullPayload.findings[0] || null,
              lockedStubs: [],
              sealedEnvelope: cachedEnvelope,
            }
          );
          setStatusNotice(
            data.tier === 'clearance_pack'
              ? 'Founder & CTO Clearance Pack verified. Every vulnerability trace, Signed Clearance PDF, and 30-day re-scan pass are open.'
              : 'Single Scan Pass verified. All vulnerability traces, code patches, and Cursor/Claude fix prompts are open.'
          );
          if (typeof window !== 'undefined') {
            const cleanUrl = new URL(window.location.href);
            cleanUrl.searchParams.delete('session_id');
            cleanUrl.searchParams.delete('run_id');
            cleanUrl.searchParams.delete('paid_sku');
            window.history.replaceState(
              {},
              '',
              cleanUrl.pathname + (cleanUrl.search ? cleanUrl.search : '')
            );
          }
        })
        .catch((err: unknown) => {
          setErrorMessage(
            err instanceof Error ? err.message : 'Unable to verify Stripe payment session.'
          );
        })
        .finally(() => {
          setIsVerifyingPayment(false);
        });
    }
  }, []);

  async function handleRunScan(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatusNotice(null);
    setIsScanning(true);

    try {
      const response = await fetch('/api/tools/vibe-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          targetUrl: mode !== 'code' ? targetUrl.trim() : undefined,
          codeSnippet: mode === 'code' ? codeSnippet : undefined,
          focusProfile,
          rescanToken: activeRescanToken || undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Security scan failed.');
      }

      const publicRes = data as VibeScanPublicResponse & {
        autoOpened?: boolean;
        openedTier?: 'single_pass' | 'clearance_pack';
        fullFindings?: SecurityFindingFull[];
      };

      setScanResult(publicRes);

      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(
            `${STORAGE_PREFIX}${publicRes.runId}`,
            JSON.stringify(publicRes)
          );
        } catch {
          // Ignore storage quota warning
        }
      }

      if (publicRes.autoOpened && Array.isArray(publicRes.fullFindings)) {
        setOpenedFindings(publicRes.fullFindings);
        setOpenedTier(publicRes.openedTier || 'single_pass');
        setStatusNotice('Active re-scan pass recognized: all vulnerability traces opened automatically.');
      } else {
        setOpenedFindings(null);
        setBadgeVerifyUrl(null);
      }
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Unable to complete scan.');
    } finally {
      setIsScanning(false);
    }
  }

  async function handleCheckout(sku: 'vibe_scan_29' | 'vibe_scan_49') {
    if (!scanResult) return;
    setErrorMessage(null);
    setIsCheckingOut(sku);

    try {
      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(
            `${STORAGE_PREFIX}${scanResult.runId}`,
            JSON.stringify(scanResult)
          );
        } catch {
          // Ignore storage quota warning
        }
      }

      const res = await fetch('/api/tools/pay-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sku,
          runId: scanResult.runId,
          returnPath,
          scanRecovery: {
            mode,
            targetUrl: mode !== 'code' ? targetUrl.trim() : undefined,
            focusProfile,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.checkoutUrl) {
        throw new Error(data.error || 'Unable to start Stripe Checkout.');
      }

      window.location.href = data.checkoutUrl;
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Stripe Checkout initialization failed.');
      setIsCheckingOut(null);
    }
  }

  function handleCopyText(id: string, text: string) {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 2000);
    });
  }

  async function handleDownloadClearancePdf() {
    if (!scanResult) return;
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'pt', format: 'letter' });
    const findingsToPrint =
      openedFindings || (scanResult.freeFinding ? [scanResult.freeFinding] : []);

    // Executive Forest Header
    doc.setFillColor(22, 46, 38);
    doc.rect(0, 0, 612, 108, 'F');
    doc.setTextColor(183, 122, 53);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('RICHARDEWING.IO  |  BUYER & SOC2 APPLICATION SECURITY CLEARANCE REPORT', 42, 36);
    doc.setTextColor(244, 241, 233);
    doc.setFontSize(18);
    doc.text(`Target: ${scanResult.targetLabel.slice(0, 48)}`, 42, 64);
    doc.setFontSize(11);
    doc.text(
      `Clearance Score: ${scanResult.score}/100 (Grade ${scanResult.grade})  |  Audit ID: ${scanResult.runId}`,
      42,
      86
    );

    let y = 136;
    doc.setTextColor(30, 41, 36);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`Executive Verdict: ${scanResult.verdictLabel}`, 42, y);
    y += 18;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(
      `Estimated Unmitigated Exposure: $${scanResult.estimatedMonthlyExposureUsd.toLocaleString()}/month  |  Scanned: ${new Date(
        scanResult.scannedAt
      ).toUTCString()}`,
      42,
      y
    );
    y += 22;

    if (badgeVerifyUrl) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(31, 59, 44);
      doc.text(`Cryptographic Verification URL: ${badgeVerifyUrl.slice(0, 88)}`, 42, y);
      y += 24;
    }

    for (const f of findingsToPrint) {
      if (y > 670) {
        doc.addPage();
        y = 50;
      }
      doc.setFillColor(235, 231, 220);
      doc.rect(42, y - 12, 528, 22, 'F');
      doc.setTextColor(22, 46, 38);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(`[${f.severity} | ${f.cwe}] ${f.title.slice(0, 72)}`, 48, y + 3);
      y += 22;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(45, 55, 50);
      doc.setFontSize(9);
      const impactLines = doc.splitTextToSize(f.impactSummary, 520);
      doc.text(impactLines, 42, y);
      y += impactLines.length * 12 + 6;

      doc.setFont('helvetica', 'bold');
      doc.text(`Entrypoint: ${f.trace.entrypoint.slice(0, 82)}`, 42, y);
      y += 12;
      doc.text(`Sink: ${f.trace.sink.slice(0, 82)}`, 42, y);
      y += 18;
    }

    doc.save(`RichardEwing_Security_Clearance_${scanResult.runId}.pdf`);
  }

  function severityBadgeStyle(sev: SecurityFindingFull['severity']): string {
    switch (sev) {
      case 'CRITICAL':
        return 'bg-[#c86d56]/15 text-[#9e3f29] border-[#c86d56]/40';
      case 'HIGH':
        return 'bg-[#b77a35]/15 text-[#8a571d] border-[#b77a35]/40';
      case 'MEDIUM':
        return 'bg-[#29473b]/10 text-[#1f3b2c] border-[#29473b]/30';
      default:
        return 'bg-[#ebe7dc] text-[#4a5850] border-[#24332b]/15';
    }
  }

  const allOpened = openedFindings !== null;

  return (
    <section className="max-w-5xl mx-auto px-6 py-8 space-y-8">
      {/* Input Console */}
      <div className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-[#162e26] px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#b77a35] font-bold">
              Zero-Gate Taint &amp; Boundary Engine &middot; Instant 25% Free Reveal
            </p>
            <h2 className="font-serif text-xl text-[#f4f1e9] font-bold">
              Select Target Surface to Audit
            </h2>
          </div>
          {activeRescanToken && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#29473b] border border-[#b77a35]/50 font-mono text-xs text-[#f4f1e9]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#b77a35]" />
              Paid Re-Scan Pass Active
            </span>
          )}
        </div>

        <form onSubmit={handleRunScan} className="p-6 space-y-6">
          {/* Mode Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setMode('code')}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-lg border text-left font-sans text-sm font-semibold transition-colors ${
                mode === 'code'
                  ? 'bg-[#1f3b2c] text-[#f4f1e9] border-[#1f3b2c]'
                  : 'bg-[#FAF9F6] text-[#1e2924] border-[#24332b]/15 hover:bg-[#ebe7dc]'
              }`}
            >
              <FileCode2 className="w-4 h-4 shrink-0 text-[#b77a35]" />
              <span>Paste Code / .mcp.json / SQL</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('url')}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-lg border text-left font-sans text-sm font-semibold transition-colors ${
                mode === 'url'
                  ? 'bg-[#1f3b2c] text-[#f4f1e9] border-[#1f3b2c]'
                  : 'bg-[#FAF9F6] text-[#1e2924] border-[#24332b]/15 hover:bg-[#ebe7dc]'
              }`}
            >
              <Globe className="w-4 h-4 shrink-0 text-[#b77a35]" />
              <span>Live HTTPS App URL</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('github')}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-lg border text-left font-sans text-sm font-semibold transition-colors ${
                mode === 'github'
                  ? 'bg-[#1f3b2c] text-[#f4f1e9] border-[#1f3b2c]'
                  : 'bg-[#FAF9F6] text-[#1e2924] border-[#24332b]/15 hover:bg-[#ebe7dc]'
              }`}
            >
              <GitBranch className="w-4 h-4 shrink-0 text-[#b77a35]" />
              <span>Public GitHub Repository</span>
            </button>
          </div>

          {mode === 'code' ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label
                  htmlFor="vibe-code-input"
                  className="font-mono text-xs uppercase tracking-wider font-bold text-[#1e2924]"
                >
                  Paste Next.js Route, Supabase SQL Migration, package.json, or .mcp.json
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-[#66716a]">1-Click Test Sample:</span>
                  {VIBE_SCAN_SAMPLE_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => {
                        setCodeSnippet(preset.codeSnippet);
                      }}
                      className="px-2.5 py-1 rounded bg-[#ebe7dc] hover:bg-[#ded8c8] text-[#1f3b2c] font-mono text-[11px] font-semibold border border-[#24332b]/15 transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                id="vibe-code-input"
                rows={11}
                value={codeSnippet}
                onChange={(e) => setCodeSnippet(e.target.value)}
                placeholder="Paste route.ts, schema.sql, or .mcp.json here..."
                className="w-full rounded-lg border border-[#24332b]/20 bg-[#FAF9F6] p-4 font-mono text-xs text-[#1e2924] leading-relaxed focus:outline-none focus:border-[#1f3b2c]"
              />
            </div>
          ) : (
            <div className="space-y-2">
              <label
                htmlFor="vibe-url-input"
                className="block font-mono text-xs uppercase tracking-wider font-bold text-[#1e2924]"
              >
                {mode === 'url'
                  ? 'Live Production HTTPS Application URL'
                  : 'Public GitHub Repository URL'}
              </label>
              <input
                id="vibe-url-input"
                type="url"
                required
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                placeholder={
                  mode === 'url'
                    ? 'https://your-saas-app.com'
                    : 'https://github.com/owner/repository'
                }
                className="w-full rounded-lg border border-[#24332b]/20 bg-[#FAF9F6] px-4 py-3 font-mono text-sm text-[#1e2924] focus:outline-none focus:border-[#1f3b2c]"
              />
              <p className="font-sans text-xs text-[#66716a]">
                {mode === 'url'
                  ? 'Non-destructive passive check: inspects HTTP perimeter headers, public JS chunk references, and exposed Supabase PostgREST schema endpoints.'
                  : 'Inspects repository tree, .env git-tracking hygiene, .mcp.json manifests, API routes, and SQL migrations.'}
              </p>
            </div>
          )}

          {/* Priority Audit Lens + Submit */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#24332b]/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-[#4a5850] font-semibold">Priority Lens:</span>
              {(
                [
                  { id: 'full', label: 'Full Stack + AI Sink' },
                  { id: 'supabase-rls', label: 'Supabase RLS Focus' },
                  { id: 'mcp-agent', label: 'MCP & Agent Poisoning' },
                ] as const
              ).map((lens) => (
                <button
                  key={lens.id}
                  type="button"
                  onClick={() => setFocusProfile(lens.id)}
                  className={`px-3 py-1.5 rounded-full font-mono text-xs transition-colors ${
                    focusProfile === lens.id
                      ? 'bg-[#b77a35] text-white font-bold'
                      : 'bg-[#ebe7dc] text-[#4a5850] hover:bg-[#ded8c8]'
                  }`}
                >
                  {lens.label}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={isScanning}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1f3b2c] hover:bg-[#162e26] text-[#f4f1e9] font-sans text-sm font-bold shadow-sm transition-colors disabled:opacity-60"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#b77a35]" />
                  Running Taint &amp; Boundary Audit...
                </>
              ) : (
                <>
                  <ShieldAlert className="w-4 h-4 text-[#b77a35]" />
                  Run Instant Security Scan (Free Reveal)
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Notices & Errors */}
      {isVerifyingPayment && (
        <div className="p-4 rounded-lg bg-[#162e26] text-[#f4f1e9] font-sans text-sm flex items-center gap-3">
          <RefreshCw className="w-4 h-4 animate-spin text-[#b77a35]" />
          Verifying Stripe payment settlement and decrypting your sealed vulnerability traces...
        </div>
      )}

      {statusNotice && (
        <div className="p-4 rounded-lg bg-[#1f3b2c]/10 border border-[#1f3b2c]/30 text-[#162e26] font-sans text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#1f3b2c] shrink-0 mt-0.5" />
          <span>{statusNotice}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-lg bg-[#c86d56]/15 border border-[#c86d56]/40 text-[#9e3f29] font-sans text-sm flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Scan Results */}
      {scanResult && (
        <div className="space-y-8">
          {/* Scoreboard Banner */}
          <div className="bg-[#162e26] text-[#f4f1e9] rounded-xl p-6 sm:p-8 border border-[#b77a35]/30 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-bold">
                  Audit ID: {scanResult.runId} &middot; {scanResult.targetLabel}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f4f1e9]">
                  {scanResult.verdictLabel}
                </h2>
                <p className="font-sans text-sm text-[#f4f1e9]/80 max-w-2xl">
                  Inspected {scanResult.scannedArtifacts.length} surface(s):{' '}
                  {scanResult.scannedArtifacts.join(' · ')}
                </p>
              </div>

              <div className="flex items-center gap-5 bg-[#1f3b2c] px-6 py-4 rounded-xl border border-[#f4f1e9]/15 shrink-0">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#f4f1e9]/70">
                    Clearance Score
                  </p>
                  <p className="font-mono text-4xl font-bold text-[#f4f1e9]">
                    {scanResult.score}
                    <span className="text-lg text-[#f4f1e9]/60">/100</span>
                  </p>
                </div>
                <div className="h-12 w-px bg-[#f4f1e9]/15" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#b77a35]">
                    Grade
                  </p>
                  <p className="font-serif text-4xl font-bold text-[#b77a35]">{scanResult.grade}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 border-t border-[#f4f1e9]/10">
              <div className="bg-[#1f3b2c]/70 rounded-lg p-3">
                <p className="font-mono text-[11px] text-[#f4f1e9]/70 uppercase">Critical</p>
                <p className="font-mono text-2xl font-bold text-[#c86d56]">
                  {scanResult.severityCounts.CRITICAL}
                </p>
              </div>
              <div className="bg-[#1f3b2c]/70 rounded-lg p-3">
                <p className="font-mono text-[11px] text-[#f4f1e9]/70 uppercase">High</p>
                <p className="font-mono text-2xl font-bold text-[#b77a35]">
                  {scanResult.severityCounts.HIGH}
                </p>
              </div>
              <div className="bg-[#1f3b2c]/70 rounded-lg p-3">
                <p className="font-mono text-[11px] text-[#f4f1e9]/70 uppercase">Medium</p>
                <p className="font-mono text-2xl font-bold text-[#f4f1e9]">
                  {scanResult.severityCounts.MEDIUM}
                </p>
              </div>
              <div className="bg-[#1f3b2c]/70 rounded-lg p-3">
                <p className="font-mono text-[11px] text-[#f4f1e9]/70 uppercase">Low</p>
                <p className="font-mono text-2xl font-bold text-[#f4f1e9]/80">
                  {scanResult.severityCounts.LOW}
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-[#1f3b2c]/70 rounded-lg p-3">
                <p className="font-mono text-[11px] text-[#b77a35] uppercase">Est. Risk Exposure</p>
                <p className="font-mono text-xl font-bold text-[#f4f1e9]">
                  ${scanResult.estimatedMonthlyExposureUsd.toLocaleString()}/mo
                </p>
              </div>
            </div>

            {/* Paid Deliverables Toolbar when opened */}
            {allOpened && (
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#b77a35]/30">
                <div className="space-y-1">
                  <p className="font-mono text-xs font-bold text-[#b77a35] uppercase">
                    {openedTier === 'clearance_pack'
                      ? 'Founder & CTO Clearance Deliverables Ready'
                      : 'Single Scan Pass Active (All Traces Open)'}
                  </p>
                  {badgeVerifyUrl && (
                    <p className="font-mono text-xs text-[#f4f1e9]/80">
                      Signed Public Badge:{' '}
                      <Link
                        href={badgeVerifyUrl.replace('https://www.richardewing.io', '')}
                        className="underline text-[#b77a35]"
                      >
                        Inspect Live Verification Certificate ↗
                      </Link>
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleDownloadClearancePdf}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#b77a35] hover:bg-[#9f682b] text-white font-sans text-xs font-bold transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Signed Security Clearance PDF
                  </button>
                  {badgeVerifyUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyText(
                          'badge-md',
                          `[![Security Clearance Verified by RichardEwing.io](https://www.richardewing.io/api/og?title=Security+Score+${scanResult.score}%2F100&category=Verified+Audit)](${badgeVerifyUrl})`
                        )
                      }
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#f4f1e9] text-[#162e26] font-sans text-xs font-bold transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      {copiedId === 'badge-md' ? 'Copied README Badge!' : 'Copy README Badge Markdown'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Clean Score Case */}
          {!scanResult.freeFinding && (
            <div className="bg-[#f4f1e9] border border-[#1f3b2c]/25 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#1f3b2c]">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="font-serif text-xl font-bold">
                  Zero Automated Critical or High Flaws Triggered on This Artifact
                </h3>
              </div>
              <p className="font-sans text-sm text-[#4a5850] leading-relaxed">
                We do not invent synthetic bugs when your code passes baseline automated taint checks. If an enterprise customer or investor requests formal third-party verification, you can generate a cryptographically signed Buyer Clearance PDF and verification badge below for $49.
              </p>
            </div>
          )}

          {/* Free Finding #1 OR Full Opened Findings List */}
          {(allOpened
            ? openedFindings
            : scanResult.freeFinding
              ? [scanResult.freeFinding]
              : []
          ).map((finding, idx) => (
            <article
              key={finding.id}
              className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="px-6 py-4 bg-[#ebe7dc] border-b border-[#24332b]/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={`px-2.5 py-0.5 rounded font-mono text-xs font-bold border ${severityBadgeStyle(
                      finding.severity
                    )}`}
                  >
                    {finding.severity}
                  </span>
                  <span className="font-mono text-xs text-[#4a5850] font-semibold">
                    {finding.cwe} &middot; {finding.category}
                  </span>
                  {idx === 0 && !allOpened && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#1f3b2c] text-[#f4f1e9] font-mono text-[11px] font-bold">
                      FREE FULL TRACE REVEAL (#1)
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs font-bold text-[#9e3f29]">
                  Est. Exposure: ${finding.estimatedMonthlyExposureUsd.toLocaleString()}/mo
                </span>
              </div>

              <div className="p-6 space-y-5">
                <h3 className="font-serif text-xl font-bold text-[#162e26]">{finding.title}</h3>
                <p className="font-sans text-sm text-[#1e2924] leading-relaxed">
                  {finding.impactSummary}
                </p>

                {/* Entrypoint -> Propagation -> Sink Trace */}
                <div className="bg-[#FAF9F6] border border-[#24332b]/15 rounded-lg p-4 space-y-2.5 font-mono text-xs">
                  <p className="uppercase tracking-wider text-[11px] font-bold text-[#b77a35]">
                    Verified Taint Path (Entrypoint -&gt; Propagation -&gt; Sink)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-2.5 rounded bg-[#f4f1e9] border border-[#24332b]/10">
                      <span className="block text-[10px] uppercase text-[#66716a]">1. Entrypoint</span>
                      <span className="text-[#1e2924] font-semibold">{finding.trace.entrypoint}</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#f4f1e9] border border-[#24332b]/10">
                      <span className="block text-[10px] uppercase text-[#66716a]">
                        2. Propagation
                      </span>
                      <span className="text-[#1e2924] font-semibold">
                        {finding.trace.propagation}
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-[#f4f1e9] border border-[#24332b]/10">
                      <span className="block text-[10px] uppercase text-[#9e3f29]">3. Sink</span>
                      <span className="text-[#9e3f29] font-semibold">{finding.trace.sink}</span>
                    </div>
                  </div>
                  <p className="text-[#4a5850] pt-1">
                    Evidence: <code className="text-[#162e26]">{finding.trace.evidenceSnippet}</code>
                  </p>
                </div>

                {/* Remediation Patch */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1f3b2c]">
                      Drop-In Remediation Patch
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleCopyText(`patch-${finding.id}`, finding.remediationCode)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#ebe7dc] hover:bg-[#ded8c8] text-[#1e2924] font-mono text-xs font-semibold transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        {copiedId === `patch-${finding.id}` ? 'Copied Patch' : 'Copy Code Patch'}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyText(`prompt-${finding.id}`, finding.cursorFixPrompt)
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1f3b2c] hover:bg-[#162e26] text-[#f4f1e9] font-mono text-xs font-semibold transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5 text-[#b77a35]" />
                        {copiedId === `prompt-${finding.id}`
                          ? 'Copied AI Fix Prompt!'
                          : 'Copy 1-Click Cursor / Claude Fix Prompt'}
                      </button>
                    </div>
                  </div>
                  <pre className="bg-[#162e26] text-[#f4f1e9] p-4 rounded-lg overflow-x-auto font-mono text-xs leading-relaxed">
                    <code>{finding.remediationCode}</code>
                  </pre>
                </div>
              </div>
            </article>
          ))}

          {/* Redacted Server-Sealed Findings (#2..#N) + Frictionless Pay-to-Reveal Checkout */}
          {!allOpened && (
            <div className="space-y-6">
              {scanResult.lockedStubs.length > 0 && (
                <div className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl overflow-hidden">
                  <div className="px-6 py-4 bg-[#ebe7dc] border-b border-[#24332b]/10 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#9e3f29]" />
                      <h3 className="font-serif text-lg font-bold text-[#162e26]">
                        {scanResult.lockedStubs.length} Additional Vulnerability Trace(s) Sealed on
                        Server
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] text-[#66716a]">
                      AES-256-GCM Sealed Envelope &middot; Zero Plaintext in DevTools
                    </span>
                  </div>

                  <div className="divide-y divide-[#24332b]/10">
                    {scanResult.lockedStubs.map((stub, idx) => (
                      <div
                        key={stub.id}
                        className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded font-mono text-[11px] font-bold border ${severityBadgeStyle(
                                stub.severity
                              )}`}
                            >
                              {stub.severity}
                            </span>
                            <span className="font-mono text-xs text-[#66716a]">{stub.cwe}</span>
                            <span className="font-sans text-sm font-bold text-[#1e2924]">
                              Finding #{idx + 2}: {stub.title}
                            </span>
                          </div>
                          <p className="font-mono text-xs text-[#66716a]">
                            [Entrypoint -&gt; Propagation -&gt; Sink trace, SQL/TS patch &amp; Cursor
                            fix prompt sealed until payment]
                          </p>
                        </div>
                        <span className="font-mono text-xs font-bold text-[#9e3f29] shrink-0">
                          ${stub.estimatedMonthlyExposureUsd.toLocaleString()}/mo risk
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impulse Pricing Dual Card */}
              <div className="bg-[#162e26] text-[#f4f1e9] rounded-xl p-6 sm:p-8 border-2 border-[#b77a35] space-y-6">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-bold">
                    Instant Self-Serve Reveal &middot; Zero Account or Sales Call Required
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f4f1e9]">
                    Open Every Remaining Code Trace, Fix Patch &amp; Signed Clearance PDF
                  </h3>
                  <p className="font-sans text-sm text-[#f4f1e9]/80 max-w-2xl">
                    Pay once via Stripe Checkout and return directly to this screen with every finding decrypted in-browser. Built for CTOs, Engineering Managers, and technical founders shipping fast.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* $29 Single Scan Pass */}
                  <div className="bg-[#1f3b2c] border border-[#f4f1e9]/15 rounded-xl p-6 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#f4f1e9]/75 font-bold">
                          Single Scan Pass
                        </span>
                        <span className="font-mono text-3xl font-bold text-[#f4f1e9]">$29</span>
                      </div>
                      <ul className="space-y-2 font-sans text-sm text-[#f4f1e9]/90">
                        <li>&bull; Opens 100% of server-sealed vulnerability traces</li>
                        <li>&bull; Exact copy-paste SQL, TypeScript &amp; .mcp.json patches</li>
                        <li>&bull; 1-click Cursor &amp; Claude Code remediation prompts</li>
                        <li>&bull; 24-hour verification re-scans after you patch</li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      disabled={isCheckingOut !== null}
                      onClick={() => handleCheckout('vibe_scan_29')}
                      className="w-full py-3 px-4 rounded-lg bg-[#f4f1e9] hover:bg-white text-[#162e26] font-sans text-sm font-bold transition-colors disabled:opacity-60"
                    >
                      {isCheckingOut === 'vibe_scan_29'
                        ? 'Redirecting to Stripe...'
                        : 'Open Full Scan Report ($29 One-Time)'}
                    </button>
                  </div>

                  {/* $49 Founder & CTO Clearance Pack */}
                  <div className="bg-[#1f3b2c] border-2 border-[#b77a35] rounded-xl p-6 flex flex-col justify-between space-y-5 relative">
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <div>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#b77a35] text-white font-mono text-[10px] font-bold uppercase mb-1">
                            Recommended for B2B Buyers
                          </span>
                          <span className="block font-mono text-xs uppercase tracking-wider text-[#f4f1e9] font-bold">
                            Founder &amp; CTO Clearance Pack
                          </span>
                        </div>
                        <span className="font-mono text-3xl font-bold text-[#b77a35]">$49</span>
                      </div>
                      <ul className="space-y-2 font-sans text-sm text-[#f4f1e9]/95">
                        <li>&bull; Everything in the $29 Single Scan Pass</li>
                        <li>&bull; Signed Buyer &amp; SOC2 Security Clearance PDF export</li>
                        <li>&bull; 30-day unlimited verification re-scans across fixes</li>
                        <li>
                          &bull; Cryptographically signed public badge at{' '}
                          <code className="font-mono text-xs text-[#b77a35]">/tools/verify</code>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      disabled={isCheckingOut !== null}
                      onClick={() => handleCheckout('vibe_scan_49')}
                      className="w-full py-3 px-4 rounded-lg bg-[#b77a35] hover:bg-[#9f682b] text-white font-sans text-sm font-bold transition-colors disabled:opacity-60"
                    >
                      {isCheckingOut === 'vibe_scan_49'
                        ? 'Redirecting to Stripe...'
                        : 'Get Full Report + Signed Clearance Pack ($49)'}
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#f4f1e9]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-sans text-xs text-[#f4f1e9]/75">
                  <span>
                    Preparing for enterprise security review or M&amp;A technical due diligence?
                  </span>
                  <Link
                    href="/advisory"
                    className="inline-flex items-center gap-1 font-semibold text-[#b77a35] hover:underline"
                  >
                    Explore Hands-On Executive Architecture &amp; Security Audits
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

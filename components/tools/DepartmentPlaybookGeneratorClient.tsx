'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  AlertOctagon,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Lock,
  RefreshCw,
  ShieldAlert,
} from 'lucide-react';
import {
  AVAILABLE_STACK_TOOLS,
  DEPARTMENT_CATALOG,
  DepartmentId,
  DepartmentPlaybookPublicResponse,
  DepartmentPlaybookSealedPayload,
  GovernedSopFull,
} from '@/lib/pay-to-reveal/client-catalog';

const PLAYBOOK_STORAGE_PREFIX = 're_dept_sop_run_';

export default function DepartmentPlaybookGeneratorClient() {
  const [department, setDepartment] = useState<DepartmentId>('finance');
  const [headcount, setHeadcount] = useState<number>(DEPARTMENT_CATALOG.finance.defaultHeadcount);
  const [avgLoadedHourlyUsd, setAvgLoadedHourlyUsd] = useState<number>(
    DEPARTMENT_CATALOG.finance.defaultHourlyUsd
  );
  const [monthlyVolume, setMonthlyVolume] = useState<number>(
    DEPARTMENT_CATALOG.finance.defaultMonthlyVolume
  );
  const [softwareStack, setSoftwareStack] = useState<string[]>(
    DEPARTMENT_CATALOG.finance.recommendedStack
  );

  const [isCompiling, setIsCompiling] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState<'dept_playbook_39' | 'dept_playbook_79' | null>(
    null
  );
  const [isVerifyingPayment, setIsVerifyingPayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  const [publicPlaybook, setPublicPlaybook] = useState<DepartmentPlaybookPublicResponse | null>(
    null
  );
  const [openedPayload, setOpenedPayload] = useState<DepartmentPlaybookSealedPayload | null>(null);
  const [openedTier, setOpenedTier] = useState<'single_pass' | 'clearance_pack' | null>(null);
  const [xlsxDownload, setXlsxDownload] = useState<{ base64: string; filename: string } | null>(
    null
  );
  const [activeBundleTab, setActiveBundleTab] = useState<DepartmentId>('finance');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  function handleSelectDepartment(nextDept: DepartmentId) {
    const spec = DEPARTMENT_CATALOG[nextDept];
    setDepartment(nextDept);
    setHeadcount(spec.defaultHeadcount);
    setAvgLoadedHourlyUsd(spec.defaultHourlyUsd);
    setMonthlyVolume(spec.defaultMonthlyVolume);
    setSoftwareStack(spec.recommendedStack);
  }

  function toggleStackTool(tool: string) {
    setSoftwareStack((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool].slice(0, 10)
    );
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const runId = params.get('run_id');
    const sessionId = params.get('session_id');
    const canceled = params.get('canceled');

    if (runId) {
      try {
        const rawSaved = window.localStorage.getItem(`${PLAYBOOK_STORAGE_PREFIX}${runId}`);
        if (rawSaved) {
          const parsed = JSON.parse(rawSaved) as DepartmentPlaybookPublicResponse;
          setPublicPlaybook(parsed);
          setDepartment(parsed.department);
          setActiveBundleTab(parsed.department);
        }
      } catch {
        // Ignore storage parse failure
      }
    }

    if (canceled === '1') {
      setStatusNotice(
        'Checkout canceled. Your free Governed SOP #1 and busywork OpEx calculation remain open below.'
      );
    }

    if (runId && sessionId && sessionId.startsWith('cs_')) {
      setIsVerifyingPayment(true);
      let cachedEnvelope = '';
      try {
        const rawSaved = window.localStorage.getItem(`${PLAYBOOK_STORAGE_PREFIX}${runId}`);
        if (rawSaved) {
          const parsed = JSON.parse(rawSaved) as DepartmentPlaybookPublicResponse;
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
          toolId: 'department-ai-playbook',
          sessionId,
          sealedEnvelope: cachedEnvelope || undefined,
        }),
      })
        .then(async (res) => {
          const data = await res.json();
          if (!res.ok) {
            throw new Error(data.error || 'Unable to verify Stripe payment.');
          }
          const full = data.payload as DepartmentPlaybookSealedPayload;
          setOpenedPayload(full);
          setOpenedTier(data.tier || 'single_pass');
          setActiveBundleTab(full.department);
          if (data.xlsxBase64 && data.xlsxFilename) {
            setXlsxDownload({ base64: data.xlsxBase64, filename: data.xlsxFilename });
          }
          setPublicPlaybook((prev) =>
            prev || {
              runId,
              department: full.department,
              departmentLabel: full.departmentLabel,
              buyerTitles: full.buyerTitles,
              compiledAt: full.compiledAt,
              headcount: full.headcount,
              avgLoadedHourlyUsd: full.avgLoadedHourlyUsd,
              monthlyVolume: full.monthlyVolume,
              softwareStack: full.softwareStack,
              monthlyRecoverableUsd: full.monthlyRecoverableUsd,
              annualRecoverableUsd: full.annualRecoverableUsd,
              monthlyHoursRecovered: full.monthlyHoursRecovered,
              estimatedMonthlyTokenCostUsd: full.estimatedMonthlyTokenCostUsd,
              netAnnualSavingsUsd: full.netAnnualSavingsUsd,
              redLineWarning: full.redLineWarning,
              freeSop: full.sops[0],
              lockedSopStubs: [],
              workbookTabPreview: [],
              sealedEnvelope: cachedEnvelope,
            }
          );
          setStatusNotice(
            data.tier === 'clearance_pack'
              ? 'Complete 5-Department Bundle verified. All 40 governed SOPs, the 6-tab Master Excel (.xlsx) model, and the Board AI Policy PDF are ready below.'
              : 'Single Department Pack verified. All 8 governed SOPs and your 5-tab live-formula Excel (.xlsx) workbook are ready below.'
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
            err instanceof Error ? err.message : 'Unable to verify Stripe Checkout session.'
          );
        })
        .finally(() => {
          setIsVerifyingPayment(false);
        });
    }
  }, []);

  async function handleCompilePlaybook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatusNotice(null);
    setIsCompiling(true);

    try {
      const res = await fetch('/api/tools/playbook-compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          department,
          headcount,
          avgLoadedHourlyUsd,
          monthlyVolume,
          softwareStack,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to compile department playbook.');
      }

      const compiled = data as DepartmentPlaybookPublicResponse;
      setPublicPlaybook(compiled);
      setOpenedPayload(null);
      setXlsxDownload(null);
      setActiveBundleTab(compiled.department);

      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(
            `${PLAYBOOK_STORAGE_PREFIX}${compiled.runId}`,
            JSON.stringify(compiled)
          );
        } catch {
          // Ignore storage quota warning
        }
      }
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Playbook compilation failed.');
    } finally {
      setIsCompiling(false);
    }
  }

  async function handleCheckout(sku: 'dept_playbook_39' | 'dept_playbook_79') {
    if (!publicPlaybook) return;
    setErrorMessage(null);
    setIsCheckingOut(sku);

    try {
      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(
            `${PLAYBOOK_STORAGE_PREFIX}${publicPlaybook.runId}`,
            JSON.stringify(publicPlaybook)
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
          runId: publicPlaybook.runId,
          returnPath: '/tools/department-ai-playbook',
          playbookRecovery: {
            department: publicPlaybook.department,
            headcount: publicPlaybook.headcount,
            avgLoadedHourlyUsd: publicPlaybook.avgLoadedHourlyUsd,
            monthlyVolume: publicPlaybook.monthlyVolume,
            softwareStack: publicPlaybook.softwareStack,
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

  function handleDownloadXlsx() {
    if (!xlsxDownload || typeof window === 'undefined') return;
    const binary = window.atob(xlsxDownload.base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([bytes], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = xlsxDownload.filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  async function handleDownloadBoardPolicyPdf() {
    if (!openedPayload) return;
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({ unit: 'pt', format: 'letter' });

    doc.setFillColor(22, 46, 38);
    doc.rect(0, 0, 612, 106, 'F');
    doc.setTextColor(183, 122, 53);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text('RICHARDEWING.IO  |  BOARD-READY COMPANY AI ACCEPTABLE USE & RACI POLICY', 42, 36);
    doc.setTextColor(244, 241, 233);
    doc.setFontSize(17);
    doc.text(`Governed AI Operating Policy (${openedPayload.departmentLabel})`, 42, 62);
    doc.setFontSize(10);
    doc.text(
      `Stack Scope: ${openedPayload.softwareStack.join(', ')}  |  Target Net Annual Gain: $${openedPayload.netAnnualSavingsUsd.toLocaleString()}/yr`,
      42,
      84
    );

    let y = 132;
    doc.setTextColor(158, 63, 41);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(openedPayload.redLineWarning.headline.slice(0, 88), 42, y);
    y += 16;
    doc.setTextColor(40, 50, 45);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    const redLines = doc.splitTextToSize(
      `${openedPayload.redLineWarning.prohibitedAction} Mandatory Gate: ${openedPayload.redLineWarning.mandatoryGate}`,
      528
    );
    doc.text(redLines, 42, y);
    y += redLines.length * 12 + 16;

    for (const sop of openedPayload.sops) {
      if (y > 670) {
        doc.addPage();
        y = 48;
      }
      doc.setFillColor(235, 231, 220);
      doc.rect(42, y - 11, 528, 20, 'F');
      doc.setTextColor(22, 46, 38);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(`${sop.code}: ${sop.title.slice(0, 68)}`, 48, y + 3);
      y += 18;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(35, 45, 40);
      doc.setFontSize(9);
      const block = doc.splitTextToSize(
        `Operator (R): ${sop.ownerRole} | Sign-Off (A): ${sop.approverRole} | Hard-Stop: ${sop.hardStopBoundary} | Rule: ${sop.humanSignOffRule}`,
        524
      );
      doc.text(block, 42, y);
      y += block.length * 11 + 10;
    }

    doc.save(`RichardEwing_Board_AI_Governance_Policy_${openedPayload.department}.pdf`);
  }

  function handleCopyPrompt(code: string, prompt: string) {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    navigator.clipboard.writeText(prompt).then(() => {
      setCopiedCode(code);
      setTimeout(() => setCopiedCode((prev) => (prev === code ? null : prev)), 2000);
    });
  }

  const deptMeta = DEPARTMENT_CATALOG[department];
  const isOpened = openedPayload !== null;
  const displayedSops: GovernedSopFull[] = isOpened
    ? openedTier === 'clearance_pack' && openedPayload.allDepartmentsBundle
      ? openedPayload.allDepartmentsBundle[activeBundleTab] || openedPayload.sops
      : openedPayload.sops
    : publicPlaybook
      ? [publicPlaybook.freeSop]
      : [];

  return (
    <section className="max-w-5xl mx-auto px-6 py-8 space-y-8">
      {/* Department Configurator */}
      <div className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-[#162e26] px-6 py-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#b77a35] font-bold">
            SOX &amp; EU AI Act Governed Operating Engine &middot; Instant 25% Free Reveal
          </p>
          <h2 className="font-serif text-xl text-[#f4f1e9] font-bold">
            Configure Department Headcount, Volume &amp; Software Stack
          </h2>
        </div>

        <form onSubmit={handleCompilePlaybook} className="p-6 space-y-6">
          {/* 5 Department Selector */}
          <div className="space-y-2">
            <span className="block font-mono text-xs uppercase tracking-wider font-bold text-[#1e2924]">
              1. Operating Department
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
              {(Object.keys(DEPARTMENT_CATALOG) as DepartmentId[]).map((dKey) => {
                const info = DEPARTMENT_CATALOG[dKey];
                const selected = department === dKey;
                return (
                  <button
                    key={dKey}
                    type="button"
                    onClick={() => handleSelectDepartment(dKey)}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      selected
                        ? 'bg-[#1f3b2c] text-[#f4f1e9] border-[#1f3b2c]'
                        : 'bg-[#FAF9F6] text-[#1e2924] border-[#24332b]/15 hover:bg-[#ebe7dc]'
                    }`}
                  >
                    <span className="block font-sans text-xs font-bold leading-snug">
                      {info.label}
                    </span>
                    <span
                      className={`block font-mono text-[10px] mt-1 ${
                        selected ? 'text-[#b77a35]' : 'text-[#66716a]'
                      }`}
                    >
                      {info.buyerTitles.split(',').slice(0, 2).join(' · ')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Numeric Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="dept-headcount"
                className="block font-mono text-xs uppercase tracking-wider font-bold text-[#1e2924]"
              >
                2. Department Headcount
              </label>
              <input
                id="dept-headcount"
                type="number"
                min={1}
                max={500}
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value) || 1)}
                className="w-full rounded-lg border border-[#24332b]/20 bg-[#FAF9F6] px-3.5 py-2.5 font-mono text-sm text-[#1e2924]"
              />
              <span className="block font-sans text-[11px] text-[#66716a]">
                Full-time operators on this team
              </span>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="dept-hourly"
                className="block font-mono text-xs uppercase tracking-wider font-bold text-[#1e2924]"
              >
                3. Loaded Hourly Cost ($/hr)
              </label>
              <input
                id="dept-hourly"
                type="number"
                min={20}
                max={350}
                value={avgLoadedHourlyUsd}
                onChange={(e) => setAvgLoadedHourlyUsd(Number(e.target.value) || 45)}
                className="w-full rounded-lg border border-[#24332b]/20 bg-[#FAF9F6] px-3.5 py-2.5 font-mono text-sm text-[#1e2924]"
              />
              <span className="block font-sans text-[11px] text-[#66716a]">
                Salary + benefits + payroll taxes
              </span>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="dept-volume"
                className="block font-mono text-xs uppercase tracking-wider font-bold text-[#1e2924]"
              >
                4. Monthly Workflow Volume
              </label>
              <input
                id="dept-volume"
                type="number"
                min={25}
                max={100000}
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value) || 200)}
                className="w-full rounded-lg border border-[#24332b]/20 bg-[#FAF9F6] px-3.5 py-2.5 font-mono text-sm text-[#1e2924]"
              />
              <span className="block font-sans text-[11px] text-[#66716a]">
                {deptMeta.volumeUnitLabel}
              </span>
            </div>
          </div>

          {/* Software Stack Chips */}
          <div className="space-y-2">
            <span className="block font-mono text-xs uppercase tracking-wider font-bold text-[#1e2924]">
              5. Active Department Software Stack (Customizes Every SOP &amp; RACI Rule)
            </span>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_STACK_TOOLS.map((tool) => {
                const active = softwareStack.includes(tool);
                return (
                  <button
                    key={tool}
                    type="button"
                    onClick={() => toggleStackTool(tool)}
                    className={`px-3 py-1.5 rounded-full font-mono text-xs border transition-colors ${
                      active
                        ? 'bg-[#1f3b2c] text-[#f4f1e9] border-[#1f3b2c] font-bold'
                        : 'bg-[#FAF9F6] text-[#4a5850] border-[#24332b]/15 hover:bg-[#ebe7dc]'
                    }`}
                  >
                    {active ? `✓ ${tool}` : tool}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#24332b]/10">
            <p className="font-sans text-xs text-[#66716a]">
              Designed for {deptMeta.buyerTitles}
            </p>
            <button
              type="submit"
              disabled={isCompiling}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#1f3b2c] hover:bg-[#162e26] text-[#f4f1e9] font-sans text-sm font-bold shadow-sm transition-colors disabled:opacity-60"
            >
              {isCompiling ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#b77a35]" />
                  Calculating Busywork OpEx &amp; SOPs...
                </>
              ) : (
                <>
                  <FileSpreadsheet className="w-4 h-4 text-[#b77a35]" />
                  Calculate Busywork Cost &amp; Generate SOP #1 (Free)
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {isVerifyingPayment && (
        <div className="p-4 rounded-lg bg-[#162e26] text-[#f4f1e9] font-sans text-sm flex items-center gap-3">
          <RefreshCw className="w-4 h-4 animate-spin text-[#b77a35]" />
          Verifying Stripe payment and compiling your live-formula Excel (.xlsx) workbook...
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
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Compiled Output */}
      {publicPlaybook && (
        <div className="space-y-8">
          {/* Executive Financial Readout */}
          <div className="bg-[#162e26] text-[#f4f1e9] rounded-xl p-6 sm:p-8 border border-[#b77a35]/30 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-bold">
                  {publicPlaybook.departmentLabel} &middot; {publicPlaybook.headcount} Operators
                  &middot; {publicPlaybook.softwareStack.join(', ')}
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f4f1e9] mt-1">
                  Executive Busywork &amp; AI Governance Readout
                </h2>
              </div>
              <span className="font-mono text-xs text-[#f4f1e9]/70">
                Run ID: {publicPlaybook.runId}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-[#1f3b2c] rounded-lg p-4 border border-[#f4f1e9]/10">
                <p className="font-mono text-[11px] uppercase text-[#f4f1e9]/70">
                  Recoverable Busywork / Mo
                </p>
                <p className="font-mono text-2xl font-bold text-[#f4f1e9] mt-1">
                  ${publicPlaybook.monthlyRecoverableUsd.toLocaleString()}
                </p>
                <p className="font-mono text-xs text-[#b77a35] mt-0.5">
                  {publicPlaybook.monthlyHoursRecovered} hrs/mo freed
                </p>
              </div>
              <div className="bg-[#1f3b2c] rounded-lg p-4 border border-[#f4f1e9]/10">
                <p className="font-mono text-[11px] uppercase text-[#f4f1e9]/70">
                  Annualized Gross Recovery
                </p>
                <p className="font-mono text-2xl font-bold text-[#f4f1e9] mt-1">
                  ${publicPlaybook.annualRecoverableUsd.toLocaleString()}
                </p>
                <p className="font-mono text-xs text-[#f4f1e9]/60 mt-0.5">
                  At ${publicPlaybook.avgLoadedHourlyUsd}/hr loaded
                </p>
              </div>
              <div className="bg-[#1f3b2c] rounded-lg p-4 border border-[#f4f1e9]/10">
                <p className="font-mono text-[11px] uppercase text-[#f4f1e9]/70">
                  Est. AI API Spend / Mo
                </p>
                <p className="font-mono text-2xl font-bold text-[#f4f1e9] mt-1">
                  ${publicPlaybook.estimatedMonthlyTokenCostUsd.toLocaleString()}
                </p>
                <p className="font-mono text-xs text-[#f4f1e9]/60 mt-0.5">
                  Includes 1.2x retry cap
                </p>
              </div>
              <div className="bg-[#1f3b2c] rounded-lg p-4 border border-[#b77a35]/50">
                <p className="font-mono text-[11px] uppercase text-[#b77a35] font-bold">
                  Net Annual Margin Gain
                </p>
                <p className="font-mono text-2xl font-bold text-[#b77a35] mt-1">
                  ${publicPlaybook.netAnnualSavingsUsd.toLocaleString()}
                </p>
                <p className="font-mono text-xs text-[#f4f1e9]/75 mt-0.5">After inference costs</p>
              </div>
            </div>

            {/* Download Buttons When Paid */}
            {isOpened && (
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#b77a35]/30">
                <p className="font-mono text-xs font-bold text-[#b77a35] uppercase">
                  {openedTier === 'clearance_pack'
                    ? 'All 5 Departments (40 SOPs) + 6-Tab Master Excel + Board Policy PDF Ready'
                    : 'All 8 Department SOPs + 5-Tab Live-Formula Excel (.xlsx) Ready'}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {xlsxDownload && (
                    <button
                      type="button"
                      onClick={handleDownloadXlsx}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#b77a35] hover:bg-[#9f682b] text-white font-sans text-xs font-bold transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Live-Formula Excel (.xlsx) Workbook
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleDownloadBoardPolicyPdf}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#f4f1e9] text-[#162e26] font-sans text-xs font-bold transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Download Board AI Acceptable Use Policy (PDF)
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* #1 Unsupervised Agent Red-Line Warning */}
          <div className="bg-[#FAF9F6] border-2 border-[#c86d56] rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-[#9e3f29]">
              <AlertOctagon className="w-5 h-5 shrink-0" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold">
                {publicPlaybook.redLineWarning.controlStandard}
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#162e26]">
              {publicPlaybook.redLineWarning.headline}
            </h3>
            <p className="font-sans text-sm text-[#1e2924] leading-relaxed">
              <strong>What Breaks Without Governance:</strong>{' '}
              {publicPlaybook.redLineWarning.financialConsequence}
            </p>
            <div className="p-3.5 rounded-lg bg-[#ebe7dc] border border-[#24332b]/10 font-sans text-sm text-[#162e26]">
              <strong>Mandatory Human Gate:</strong> {publicPlaybook.redLineWarning.mandatoryGate}
            </div>
          </div>

          {/* Department Switcher Tabs for $79 All-5-Departments Bundle */}
          {isOpened && openedTier === 'clearance_pack' && (
            <div className="flex flex-wrap items-center gap-2 bg-[#ebe7dc] p-2 rounded-xl border border-[#24332b]/15">
              {(Object.keys(DEPARTMENT_CATALOG) as DepartmentId[]).map((dKey) => (
                <button
                  key={dKey}
                  type="button"
                  onClick={() => setActiveBundleTab(dKey)}
                  className={`px-3.5 py-2 rounded-lg font-sans text-xs font-bold transition-colors ${
                    activeBundleTab === dKey
                      ? 'bg-[#1f3b2c] text-[#f4f1e9]'
                      : 'text-[#1e2924] hover:bg-[#f4f1e9]'
                  }`}
                >
                  {DEPARTMENT_CATALOG[dKey].label} (8 SOPs)
                </button>
              ))}
            </div>
          )}

          {/* Free SOP #1 OR Full Opened SOP Cards */}
          <div className="space-y-6">
            {displayedSops.map((sop) => (
              <article
                key={sop.code}
                className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl overflow-hidden shadow-sm"
              >
                <div className="px-6 py-4 bg-[#ebe7dc] border-b border-[#24332b]/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded bg-[#1f3b2c] text-[#f4f1e9] font-mono text-xs font-bold">
                      {sop.code}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded font-mono text-[11px] font-bold border ${
                        sop.riskTier === 'HIGH_CONTROL'
                          ? 'bg-[#c86d56]/15 text-[#9e3f29] border-[#c86d56]/40'
                          : 'bg-[#b77a35]/15 text-[#8a571d] border-[#b77a35]/40'
                      }`}
                    >
                      {sop.riskTier}
                    </span>
                    {!isOpened && sop.sopNumber === 1 && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#b77a35] text-white font-mono text-[11px] font-bold">
                        FREE FULL SOP REVEAL (#1 OF 8)
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#1f3b2c]">
                    Saves {sop.monthlyHoursSaved} hrs/mo ($
                    {sop.monthlyDollarRecovery.toLocaleString()}/mo)
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-serif text-xl font-bold text-[#162e26]">{sop.title}</h3>
                    <span className="font-mono text-xs text-[#4a5850]">
                      Operator (R): <strong>{sop.ownerRole}</strong> &middot; Approver (A):{' '}
                      <strong>{sop.approverRole}</strong>
                    </span>
                  </div>

                  <p className="font-sans text-sm text-[#4a5850]">
                    <strong className="text-[#1e2924]">Trigger:</strong> {sop.triggerCondition}
                  </p>

                  <div className="bg-[#FAF9F6] border border-[#24332b]/10 rounded-lg p-4 space-y-2">
                    <p className="font-mono text-xs uppercase tracking-wider font-bold text-[#1f3b2c]">
                      Permitted Autonomous Read &amp; Draft Steps
                    </p>
                    <ol className="list-decimal list-inside space-y-1.5 font-sans text-sm text-[#1e2924]">
                      {sop.autonomousSteps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-lg bg-[#c86d56]/10 border border-[#c86d56]/30 space-y-1">
                      <span className="block font-mono text-[11px] uppercase font-bold text-[#9e3f29]">
                        Hard-Stop AI Boundary
                      </span>
                      <p className="font-sans text-xs text-[#1e2924] leading-relaxed">
                        {sop.hardStopBoundary}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-lg bg-[#ebe7dc] border border-[#24332b]/15 space-y-1">
                      <span className="block font-mono text-[11px] uppercase font-bold text-[#1f3b2c]">
                        Human Sign-Off Threshold &amp; Audit Trail
                      </span>
                      <p className="font-sans text-xs text-[#1e2924] leading-relaxed">
                        {sop.humanSignOffRule} ({sop.auditTrailSpec})
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#162e26]">
                        Sanitized Production Prompt Template
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopyPrompt(sop.code, sop.sanitizedPromptTemplate)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1f3b2c] hover:bg-[#162e26] text-[#f4f1e9] font-mono text-xs font-semibold transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5 text-[#b77a35]" />
                        {copiedCode === sop.code ? 'Copied Prompt!' : 'Copy Governed Prompt'}
                      </button>
                    </div>
                    <pre className="bg-[#162e26] text-[#f4f1e9] p-4 rounded-lg overflow-x-auto font-mono text-xs whitespace-pre-wrap leading-relaxed">
                      <code>{sop.sanitizedPromptTemplate}</code>
                    </pre>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Redacted SOPs #2-#8 + 5-Tab Excel Preview + Pay-to-Reveal Checkout */}
          {!isOpened && (
            <div className="space-y-6">
              <div className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl overflow-hidden">
                <div className="px-6 py-4 bg-[#ebe7dc] border-b border-[#24332b]/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#9e3f29]" />
                    <h3 className="font-serif text-lg font-bold text-[#162e26]">
                      7 Remaining Stack-Customized SOPs + 5-Tab Live-Formula Excel (.xlsx) Sealed
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-[#66716a]">
                    AES-256-GCM Server Redaction Active
                  </span>
                </div>

                <div className="divide-y divide-[#24332b]/10">
                  {publicPlaybook.lockedSopStubs.map((stub) => (
                    <div
                      key={stub.code}
                      className="px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded bg-[#ebe7dc] border border-[#24332b]/15 font-mono text-xs font-bold text-[#162e26]">
                          {stub.code}
                        </span>
                        <span className="font-sans text-sm font-bold text-[#1e2924]">
                          {stub.title}
                        </span>
                        <span className="font-mono text-xs text-[#66716a]">
                          ({stub.ownerRole})
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#1f3b2c] shrink-0">
                        {stub.monthlyHoursSaved} hrs/mo &middot; $
                        {stub.monthlyDollarRecovery.toLocaleString()}/mo
                      </span>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-4 bg-[#FAF9F6] border-t border-[#24332b]/10">
                  <p className="font-mono text-xs font-bold text-[#1f3b2c] uppercase mb-2">
                    Included 5-Tab Excel (.xlsx) Financial Reconciliation Sheets:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {publicPlaybook.workbookTabPreview.map((tab) => (
                      <span
                        key={tab}
                        className="px-2.5 py-1 rounded bg-[#ebe7dc] font-mono text-xs text-[#1e2924] border border-[#24332b]/10"
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Impulse Pricing Dual Card */}
              <div className="bg-[#162e26] text-[#f4f1e9] rounded-xl p-6 sm:p-8 border-2 border-[#b77a35] space-y-6">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-bold">
                    Instant Self-Serve Download &middot; Zero Account or Sales Call Required
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f4f1e9]">
                    Open All Governed SOPs &amp; Download Your Live-Formula Excel (.xlsx) Model
                  </h3>
                  <p className="font-sans text-sm text-[#f4f1e9]/80 max-w-2xl">
                    Built for CFOs, Controllers, COOs, VPs of Operations, Customer Support Managers, and HR Directors who need clear human approval thresholds before letting AI touch live business systems.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* $39 Single Department Pack */}
                  <div className="bg-[#1f3b2c] border border-[#f4f1e9]/15 rounded-xl p-6 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#f4f1e9]/75 font-bold">
                          Single Department Pack
                        </span>
                        <span className="font-mono text-3xl font-bold text-[#f4f1e9]">$39</span>
                      </div>
                      <ul className="space-y-2 font-sans text-sm text-[#f4f1e9]/90">
                        <li>
                          &bull; All 8 stack-customized SOPs for {publicPlaybook.departmentLabel}
                        </li>
                        <li>&bull; SOX / EU AI Act RACI human approval matrix</li>
                        <li>&bull; 8 sanitized copy-paste production prompts</li>
                        <li>&bull; Live 5-tab Excel (.xlsx) busywork &amp; token cap model</li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      disabled={isCheckingOut !== null}
                      onClick={() => handleCheckout('dept_playbook_39')}
                      className="w-full py-3 px-4 rounded-lg bg-[#f4f1e9] hover:bg-white text-[#162e26] font-sans text-sm font-bold transition-colors disabled:opacity-60"
                    >
                      {isCheckingOut === 'dept_playbook_39'
                        ? 'Redirecting to Stripe...'
                        : `Open ${publicPlaybook.departmentLabel} Pack ($39)`}
                    </button>
                  </div>

                  {/* $79 Complete 5-Department Bundle */}
                  <div className="bg-[#1f3b2c] border-2 border-[#b77a35] rounded-xl p-6 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <div>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#b77a35] text-white font-mono text-[10px] font-bold uppercase mb-1">
                            Executive Floor Bundle
                          </span>
                          <span className="block font-mono text-xs uppercase tracking-wider text-[#f4f1e9] font-bold">
                            All 5 Departments (40 SOPs)
                          </span>
                        </div>
                        <span className="font-mono text-3xl font-bold text-[#b77a35]">$79</span>
                      </div>
                      <ul className="space-y-2 font-sans text-sm text-[#f4f1e9]/95">
                        <li>
                          &bull; All 40 governed SOPs across Finance, Ops, Support, HR &amp; Small
                          Business
                        </li>
                        <li>&bull; 6-tab Master Consolidated Excel (.xlsx) financial workbook</li>
                        <li>&bull; Board-Ready Company AI Acceptable Use Policy PDF</li>
                        <li>&bull; 90-day rollout gate &amp; exception register templates</li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      disabled={isCheckingOut !== null}
                      onClick={() => handleCheckout('dept_playbook_79')}
                      className="w-full py-3 px-4 rounded-lg bg-[#b77a35] hover:bg-[#9f682b] text-white font-sans text-sm font-bold transition-colors disabled:opacity-60"
                    >
                      {isCheckingOut === 'dept_playbook_79'
                        ? 'Redirecting to Stripe...'
                        : 'Get Complete 5-Department Bundle ($79)'}
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#f4f1e9]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-sans text-xs text-[#f4f1e9]/75">
                  <span>
                    Rolling out AI governance across multiple business units with board oversight?
                  </span>
                  <Link
                    href="/advisory"
                    className="inline-flex items-center gap-1 font-semibold text-[#b77a35] hover:underline"
                  >
                    Inquire About a 14-Day Executive AI Operating Sprint
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

'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { ShieldAlert, TrendingDown } from 'lucide-react';

interface DiagnosticSourceConfig {
  title: string;
  badgeLabel: string;
  description: string;
}

const SOURCE_CONFIGS: Record<string, DiagnosticSourceConfig> = {
  'reality-check': {
    title: 'Reviewing Your AI Reality Check Scorecard',
    badgeLabel: 'Annual AI Spend Leak',
    description: 'Select a 30-Minute Rapid Gut-Check or 1-on-1 Advisory session below. Bring your cloud invoices, token logs, or vendor contracts. We will isolate your primary engineering bottleneck and map out an immediate 30-day remediation priority.',
  },
  'pdi': {
    title: 'Reviewing Your Product Debt Index (PDI) Audit',
    badgeLabel: 'Annual Maintenance Waste',
    description: 'Select a 30-Minute Triage or Executive Advisory session below. Bring your sprint allocations, backlog estimates, or headcount data. We will isolate your technical debt drag and establish a structural neutralization plan.',
  },
  'aueb': {
    title: 'Reviewing Your AI Unit Economics Audit',
    badgeLabel: 'Annual Carrying Cost Drag',
    description: 'Select a 30-Minute Triage session below. Bring your inference logs, token bills, or GPU hosting estimates to map out unit margin protection.',
  },
  'ev-se': {
    title: 'Reviewing Your Enterprise Valuation & Software Economics Audit',
    badgeLabel: 'EBITDA Margin Leak',
    description: 'Select an Executive Advisory session below. Bring your capitalization schedules or balance sheet data to review your software asset valuation.',
  },
  'exogram': {
    title: 'Exogram Architectural Boundary Audit & Runtime Briefing',
    badgeLabel: 'Runtime Policy Gate',
    description: 'Select a 30-Minute Architectural Triage or 60-Minute Working Session below. Bring your agent topology, MCP server manifests, or VPC requirements to design deterministic execution boundaries and token circuit breakers.',
  },
  'exogram-demo': {
    title: 'Exogram Live VPC Sandbox & Deployment Briefing',
    badgeLabel: 'VPC Sandbox Provisioning',
    description: 'Select a session below to fast-track your Exogram VPC sandbox credentials, review your cloud ingress topology, and configure EAAP v1.0 policy-as-code rules.',
  },
  'exogram-docs': {
    title: 'Exogram SDK & Runtime Integration Architecture Review',
    badgeLabel: 'EAAP v1.0 Integration',
    description: 'Select a technical session below to walk through Exogram SDK integration, schema admissibility contracts, and sub-5ms proxy routing alongside your existing LLM pipelines.',
  },
  'runtime-architecture': {
    title: '4-Layer Agent Runtime Architecture & Governance Audit',
    badgeLabel: 'Bounded Cognition Gate',
    description: 'Select a session below to audit your Identity, Skill, Tool, and Environment boundaries and eliminate unmonitored retry loops or excessive agent permissions.',
  },
  'security': {
    title: 'Enterprise Security, VPC Isolation & Bilateral NDA Briefing',
    badgeLabel: 'Zero Data Retention',
    description: 'Select a confidential briefing slot below to review private VPC deployment topologies, policy-as-code verification, and bilateral NDA execution for R&D capital audits.',
  },
  'careerwin': {
    title: 'Executive Career Architecture & Leveling Strategy Session',
    badgeLabel: 'Compensation & Scope Audit',
    description: 'Select a 1-on-1 working session below to review your Staff/Principal/VP leveling evidence, equity valuation, and compensation negotiation strategy.',
  },
  'speaking': {
    title: 'Keynote, Board Briefing & Executive Workshop Alignment',
    badgeLabel: 'Event & Board Briefing',
    description: 'Select a 15-minute alignment call below to lock in event dates, customize boardroom briefing topics, and review audience requirements.',
  },
  'ai-product-builder': {
    title: 'AI Product Builder Pilot Cohort Admissions Screening',
    badgeLabel: 'Pilot Seat Screening',
    description: 'Select a 15-minute diagnostic screening call below to review your 4-week product build scope, technical stack, and commercial milestones.',
  },
  'advisory-cta': {
    title: 'Product & AI Economist 1-on-1 P&L & Architecture Tear-Down',
    badgeLabel: 'P&L & Margin Turnaround',
    description: 'Select your session below to audit feature profitability, eliminate Zombie Feature carry costs, or scope a 14-day/21-day build and turnaround sprint.',
  },
  'mcp-security-auditor': {
    title: 'Reviewing Your MCP Security & Tool Permission Audit',
    badgeLabel: 'Tool Boundary Exposure',
    description: 'Select a session below to lock down exposed Model Context Protocol (MCP) servers, restrict file-system and database mutations, and enforce least-privilege sandboxes.',
  },
  'shadow-ai': {
    title: 'Reviewing Your Enterprise Shadow AI & Data Exposure Audit',
    badgeLabel: 'Unapproved AI Risk',
    description: 'Select a session below to remediate unapproved employee AI tool usage, prevent proprietary code or PII leakage, and deploy governed enterprise alternatives.',
  },
  'cfo-capitalization-audit': {
    title: 'Reviewing Your CFO Section 174 & AI Software Capitalization Audit',
    badgeLabel: 'Section 174 Tax & OpEx Exposure',
    description: 'Select an Executive Advisory session below. Bring your R&D sprint allocations and engineering payroll ledger to separate capitalizable innovation from maintenance waste.',
  },
};

export function ScheduleDiagnosticBanner() {
  const searchParams = useSearchParams();
  const source = searchParams.get('source');
  const leak = searchParams.get('leak');

  if (!source) {
    return null;
  }

  const config = SOURCE_CONFIGS[source] || {
    title: 'Reviewing Your Diagnostic Scorecard',
    badgeLabel: 'Annual Operational Drag',
    description: 'Select a 30-Minute Triage or Executive Advisory session below. Bring your data and estimates to isolate your primary capital leak.',
  };

  const formattedLeak = leak && !isNaN(Number(leak)) ? Number(leak).toLocaleString() : null;

  return (
    <div className="mb-8 p-5 bg-[var(--forest2)] text-white border border-[var(--gold)]/30 rounded-2xl shadow-md">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)] flex items-center justify-center shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5 text-[var(--gold)]" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d8c7a8]">
              Diagnostic Review Protocol
            </span>
            {formattedLeak && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <TrendingDown className="w-3 h-3" />
                ${formattedLeak} {config.badgeLabel}
              </span>
            )}
          </div>
          <h2 className="font-serif text-lg font-medium text-white">
            {config.title}
          </h2>
          <p className="text-xs text-zinc-300 leading-relaxed max-w-3xl">
            {config.description}
          </p>
        </div>
      </div>
    </div>
  );
}

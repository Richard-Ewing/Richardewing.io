'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ShineBorder from '@/components/magicui/shine-border';
import FAQItem from '@/app/components/FAQItem';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import { GooglePreferredBadge } from '@/app/components/GooglePreferredBadge';
import { ToolCard } from '@/components/editorial/ToolCard';

interface DiagnosticToolItem {
  id: string;
  href: string;
  isExternal?: boolean;
  problem: string;
  title: string;
  description: string;
  cta: string;
  color: [string, string];
  hoverColor: string;
  ctaColor: string;
  tagColor: string;
  roles: Array<'CFO' | 'CPO' | 'CTO' | 'EM' | 'FINOPS'>;
  category: 1 | 2 | 3 | 4;
  isSpan2?: boolean;
  remediationTrack?: {
    trackNumber: number;
    title: string;
    href: string;
  };
}

interface RoleProfile {
  id: 'ALL' | 'CFO' | 'CPO' | 'CTO' | 'EM' | 'FINOPS';
  label: string;
  roleTitle: string;
  desc: string;
  remediationTracks?: Array<{ trackNumber: number; title: string; href: string }>;
  recommendedBlueprints?: Array<{ title: string; href: string }>;
}

const ROLES: RoleProfile[] = [
  { 
    id: 'ALL', 
    label: 'All Diagnostics (25)', 
    roleTitle: 'Cross-Functional Executive Suite', 
    desc: 'Complete library of 25 forensic engineering, financial, and security instruments used in formal R&D capital audits.' 
  },
  { 
    id: 'CFO', 
    label: 'CFO / Finance', 
    roleTitle: 'Chief Financial Officer & Director of Finance', 
    desc: 'Protect software gross margins from API token runaway, audit Section 174 software capitalization vs maintenance waste, and calculate tech debt drag on company valuation.',
    remediationTracks: [
      { trackNumber: 2, title: 'AI Product Economics & Unit Margins', href: '/vault/curriculum/tracks/track-02' },
      { trackNumber: 6, title: 'R&D Capitalization & Section 174 Compliance', href: '/vault/curriculum/tracks/track-06' },
      { trackNumber: 21, title: 'Developer Tooling ROI & Engineering Capitalization', href: '/vault/curriculum/tracks/track-21' },
    ],
    recommendedBlueprints: [
      { title: '12-Month Financial Pro-Forma & Flywheel Engine', href: '/vault/blueprints' },
      { title: 'Strategic Pilot Agreement (30-Day Paid Conversion)', href: '/vault/blueprints' },
    ]
  },
  { 
    id: 'CPO', 
    label: 'CPO / Product Ops', 
    roleTitle: 'Chief Product Officer & Product Ops Lead', 
    desc: 'Identify negative-margin AI features, test specification quality before burning developer sprint capacity, and audit product portfolio margins.',
    remediationTracks: [
      { trackNumber: 3, title: 'AI Product Strategy & Feature Defensibility', href: '/vault/curriculum/tracks/track-03' },
      { trackNumber: 11, title: 'Prompt vs Fine-Tuning vs RAG Unit Economics', href: '/vault/curriculum/tracks/track-11' },
      { trackNumber: 2, title: 'AI Product Economics & Unit Margins', href: '/vault/curriculum/tracks/track-02' },
    ],
    recommendedBlueprints: [
      { title: 'Strategic Pilot Customer Agreement', href: '/vault/blueprints' },
      { title: 'FastAPI Production Scaffold with Correlation IDs', href: '/vault/blueprints' },
    ]
  },
  { 
    id: 'CTO', 
    label: 'CTO / VP Engineering', 
    roleTitle: 'Chief Technology Officer & VP of Engineering', 
    desc: 'Quantify codebase technical debt in dollar terms (PDI), audit MCP tool connection risks, inspect shadow AI leaks, and test prompt injection defenses.',
    remediationTracks: [
      { trackNumber: 1, title: 'Technical Debt Forensics & Legacy Modernization', href: '/vault/curriculum/tracks/track-01' },
      { trackNumber: 8, title: 'Runtime AI Safety, Red Teaming & Boundary Enforcement', href: '/vault/curriculum/tracks/track-08' },
      { trackNumber: 14, title: 'Local SLMs & Sovereign Inference Infrastructure', href: '/vault/curriculum/tracks/track-14' },
    ],
    recommendedBlueprints: [
      { title: 'Autonomous Agent Governance Proxy with Circuit Breakers', href: '/vault/blueprints' },
      { title: 'Postgres Read-Only Replica Guard & Mutation Staging Queue', href: '/vault/blueprints' },
      { title: 'Redis Vector Semantic Cache (0.92 Cosine Threshold)', href: '/vault/blueprints' },
    ]
  },
  { 
    id: 'EM', 
    label: 'Engineering Manager', 
    roleTitle: 'Engineering Manager & Tech Lead', 
    desc: 'Diagnose pull request review bottlenecks, calculate unreviewed vibe coding debt, audit AI coding agent readiness, and validate technical candidate judgment.',
    remediationTracks: [
      { trackNumber: 4, title: 'Engineering Organization Design & Talent Topology', href: '/vault/curriculum/tracks/track-04' },
      { trackNumber: 17, title: 'AI Pair Programming & Code Review Architecture', href: '/vault/curriculum/tracks/track-17' },
      { trackNumber: 22, title: 'Pull Request Bottleneck Eradication', href: '/vault/curriculum/tracks/track-22' },
    ],
    recommendedBlueprints: [
      { title: 'Autonomous Agent Governance Proxy & ATC Queue', href: '/vault/blueprints' },
      { title: 'FastAPI Production Scaffold with Structured JSON Logging', href: '/vault/blueprints' },
    ]
  },
  { 
    id: 'FINOPS', 
    label: 'FinOps / VP Operations', 
    roleTitle: 'FinOps Manager & VP of Operations', 
    desc: 'Benchmark AI unit economics (AUEB), calculate small language model break-even vs cloud APIs, audit cloud repatriation savings, and simulate multi-agent token burn.',
    remediationTracks: [
      { trackNumber: 2, title: 'AI Product Economics & Unit Margins', href: '/vault/curriculum/tracks/track-02' },
      { trackNumber: 10, title: 'Cloud FinOps & Multi-Cloud Inference Arbitrage', href: '/vault/curriculum/tracks/track-10' },
      { trackNumber: 14, title: 'Local SLMs & Sovereign Inference Infrastructure', href: '/vault/curriculum/tracks/track-14' },
    ],
    recommendedBlueprints: [
      { title: 'FinOps Real-Time Token Budget & Rate Limiting Guard', href: '/vault/blueprints' },
      { title: 'Redis Vector Semantic Cache (0.92 Cosine Threshold)', href: '/vault/blueprints' },
    ]
  },
];

const DIAGNOSTIC_TOOLS: DiagnosticToolItem[] = [
  // Category 1: Cost Audits & Financial Leaks
  {
    id: 'pdi',
    href: '/tools/pdi',
    problem: 'Problem: AI Slowing Down Sprints',
    title: 'Why AI Code Slows Down Your Team (PDI)',
    description: 'Your engineers are shipping 3x more code with AI assistants, but releases are slower and bugs doubled. Calculate how much messy AI code is costing your company in dollars.',
    cta: 'Calculate AI Code Cost →',
    color: ['#22d3ee', '#8b5cf6'],
    hoverColor: 'group-hover:text-cyan-900 font-extrabold',
    ctaColor: 'text-cyan-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['CTO', 'EM', 'CFO'],
    category: 1,
    remediationTrack: { trackNumber: 1, title: 'Technical Debt Forensics', href: '/vault/curriculum/tracks/track-01' },
  },
  {
    id: 'cfo-capitalization-audit',
    href: '/tools/cfo-capitalization-audit',
    problem: 'Problem: Software Tax Deductions & OpEx',
    title: 'How to Write Off AI Software Costs Properly',
    description: 'Calculate the difference between real software innovation and hidden maintenance waste to protect your tax deductions, Section 174 filings, and company earnings.',
    cta: 'Run Tax & OpEx Audit →',
    color: ['#10b981', '#3b82f6'],
    hoverColor: 'group-hover:text-emerald-900 font-extrabold',
    ctaColor: 'text-emerald-900 font-extrabold',
    tagColor: 'text-emerald-900',
    roles: ['CFO'],
    category: 1,
    remediationTrack: { trackNumber: 6, title: 'R&D Capitalization & Section 174', href: '/vault/curriculum/tracks/track-06' },
  },
  {
    id: 'board-risk-scorecard',
    href: '/tools/board-risk-scorecard',
    problem: 'Problem: Board Liability & Unapproved AI',
    title: 'Board AI Governance & Liability Scorecard',
    description: 'A 10-point check for CEOs, Board Directors, and Audit Committees to evaluate rogue AI agents, data privacy exposure, and capital risks before the next board meeting.',
    cta: 'Audit Board Risk →',
    color: ['#f59e0b', '#d97706'],
    hoverColor: 'group-hover:text-amber-900 font-extrabold',
    ctaColor: 'text-amber-900 font-extrabold',
    tagColor: 'text-amber-900',
    roles: ['CFO', 'CTO'],
    category: 1,
    remediationTrack: { trackNumber: 7, title: 'Board AI Governance', href: '/vault/curriculum/tracks/track-07' },
  },
  {
    id: 'ev-se',
    href: '/tools/ev-se',
    problem: 'Problem: Company Valuation Drag',
    title: 'Valuation Impact Calculator (EV-SE)',
    description: 'See exactly how delayed technical decisions, customer churn, and code debt reduce what buyers or investors will pay for your business.',
    cta: 'Calculate Valuation Impact →',
    color: ['#22d3ee', '#8b5cf6'],
    hoverColor: 'group-hover:text-cyan-900 font-extrabold',
    ctaColor: 'text-cyan-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['CFO', 'CTO'],
    category: 1,
    remediationTrack: { trackNumber: 19, title: 'M&A Technical Due Diligence', href: '/vault/curriculum/tracks/track-19' },
  },
  {
    id: 'aueb',
    href: '/tools/aueb',
    problem: 'Problem: Exploding AI Token Invoices',
    title: 'Why Your AI API Bill Outpaces Revenue (AUEB)',
    description: 'Customer signups grew 10%, but your monthly OpenAI or Anthropic bill jumped 300%. Calculate your exact profit margin loss per active user and find your break-even point.',
    cta: 'Calculate Token Margin Loss →',
    color: ['#22d3ee', '#8b5cf6'],
    hoverColor: 'group-hover:text-cyan-900 font-extrabold',
    ctaColor: 'text-cyan-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['CFO', 'FINOPS'],
    category: 1,
    remediationTrack: { trackNumber: 2, title: 'AI Product Economics & Unit Margins', href: '/vault/curriculum/tracks/track-02' },
  },
  {
    id: 'slm-vs-api',
    href: '/tools/slm-vs-api',
    problem: 'Problem: Cloud GPU vs API Pricing',
    title: 'Why Hosting Your Own AI Model Costs More Than APIs',
    description: 'You rented expensive cloud servers to escape API token fees, but the monthly server bill is higher. Find the exact request volume where self-hosting actually saves money.',
    cta: 'Find Hardware Break-Even →',
    color: ['#22d3ee', '#8b5cf6'],
    hoverColor: 'group-hover:text-cyan-900 font-extrabold',
    ctaColor: 'text-cyan-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['FINOPS', 'CFO'],
    category: 1,
    remediationTrack: { trackNumber: 14, title: 'Local SLMs & Sovereign Inference', href: '/vault/curriculum/tracks/track-14' },
  },
  {
    id: 'fte-displacement',
    href: '/tools/fte-displacement',
    problem: 'Problem: Headcount vs AI Automation',
    title: 'Did AI Actually Lower Customer Support Costs?',
    description: 'Calculate real payroll savings versus the hidden costs of managing, prompt tuning, and supervising autonomous AI agents.',
    cta: 'Calculate Headcount Impact →',
    color: ['#a855f7', '#ec4899'],
    hoverColor: 'group-hover:text-purple-900 font-extrabold',
    ctaColor: 'text-purple-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['FINOPS', 'CFO'],
    category: 1,
    remediationTrack: { trackNumber: 4, title: 'Engineering Org Design', href: '/vault/curriculum/tracks/track-04' },
  },
  {
    id: 'cloud-repatriation',
    href: '/tools/cloud-repatriation',
    problem: 'Problem: Overpaying on AWS / Azure',
    title: 'When to Move AI Off Expensive Cloud Servers',
    description: 'Calculate how much cash your business gets back each month by moving steady AI database workloads off AWS to dedicated servers.',
    cta: 'Calculate Cloud Savings →',
    color: ['#a855f7', '#ec4899'],
    hoverColor: 'group-hover:text-purple-900 font-extrabold',
    ctaColor: 'text-purple-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['FINOPS', 'CTO'],
    category: 1,
    remediationTrack: { trackNumber: 10, title: 'Cloud FinOps & Multi-Cloud Arbitrage', href: '/vault/curriculum/tracks/track-10' },
  },
  {
    id: 'slm-break-even',
    href: '/tools/slm-break-even',
    problem: 'Problem: Small Model Economics',
    title: 'Small AI Model Break-Even Calculator',
    description: 'Calculate the exact number of monthly prompts where fine-tuning a small 8B model beats paying frontier cloud APIs.',
    cta: 'Run Break-Even Model →',
    color: ['#8b5cf6', '#ec4899'],
    hoverColor: 'group-hover:text-violet-900 font-extrabold',
    ctaColor: 'text-violet-900 font-extrabold',
    tagColor: 'text-violet-900',
    roles: ['FINOPS', 'CPO'],
    category: 1,
    remediationTrack: { trackNumber: 14, title: 'Local SLMs & Sovereign Inference', href: '/vault/curriculum/tracks/track-14' },
  },
  {
    id: 'ai-feature-margin',
    href: '/tools/ai-feature-margin',
    problem: 'Problem: Unprofitable AI Features',
    title: 'Is Your AI Feature Losing Money on Each User?',
    description: 'Map flat-rate subscription pricing against actual variable token usage to spot features that eat into your product profits.',
    cta: 'Check Feature Margins →',
    color: ['#10b981', '#3b82f6'],
    hoverColor: 'group-hover:text-emerald-900 font-extrabold',
    ctaColor: 'text-emerald-900 font-extrabold',
    tagColor: 'text-emerald-900',
    roles: ['CPO', 'CFO'],
    category: 1,
    remediationTrack: { trackNumber: 2, title: 'AI Product Economics & Unit Margins', href: '/vault/curriculum/tracks/track-02' },
  },
  {
    id: 'negative-carry-code-auditor',
    href: '/tools/negative-carry-code-auditor',
    problem: 'Problem: Vibe Coding Liabilities',
    title: 'Vibe Coding & Unreviewed AI Code Auditor',
    description: 'Calculate the hidden debt and rewrite costs created when non-technical founders or teams generate thousands of lines of unreviewed code.',
    cta: 'Audit Code Risk →',
    color: ['#f43f5e', '#fb7185'],
    hoverColor: 'group-hover:text-rose-900 font-extrabold',
    ctaColor: 'text-rose-900 font-extrabold',
    tagColor: 'text-rose-900',
    roles: ['CTO', 'EM'],
    category: 1,
    remediationTrack: { trackNumber: 1, title: 'Technical Debt Forensics', href: '/vault/curriculum/tracks/track-01' },
  },
  {
    id: 'aari',
    href: '/tools/aari',
    problem: 'Problem: Agents Breaking Codebases',
    title: 'AI Coding Agent Readiness Check (AARI)',
    description: 'Check your codebase structure and automated test safety before turning on autonomous coding agents like Claude Code or Cursor.',
    cta: 'Audit Readiness →',
    color: ['#06b6d4', '#8b5cf6'],
    hoverColor: 'group-hover:text-cyan-900 font-extrabold',
    ctaColor: 'text-cyan-900 font-extrabold',
    tagColor: 'text-cyan-900',
    roles: ['CTO', 'EM'],
    category: 1,
    remediationTrack: { trackNumber: 15, title: 'Multi-Agent Orchestration', href: '/vault/curriculum/tracks/track-15' },
  },
  {
    id: 'agent-router',
    href: '/tools/agent-router',
    problem: 'Problem: Multi-Agent Token Costs',
    title: 'Multi-Agent AI Token Cost Simulator',
    description: 'Calculate the compounding token bills when multiple AI agents talk to each other in automated loops.',
    cta: 'Run Token Simulation →',
    color: ['#a855f7', '#ec4899'],
    hoverColor: 'group-hover:text-purple-900 font-extrabold',
    ctaColor: 'text-purple-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['FINOPS', 'CTO'],
    category: 1,
    isSpan2: true,
    remediationTrack: { trackNumber: 15, title: 'Multi-Agent Orchestration', href: '/vault/curriculum/tracks/track-15' },
  },

  // Category 2: Security Leaks & Rogue AI
  {
    id: 'exogram-sandbox',
    href: 'https://exogram.ai/proving-ground',
    isExternal: true,
    problem: 'Problem: AI Hallucinations in Production',
    title: 'Stop AI Agents From Going Off-Script',
    description: 'Test how Exogram blocks rogue tool calls, unauthorized database writes, and dangerous prompts without slowing down your app.',
    cta: 'Try Live Sandbox ↗',
    color: ['#10b981', '#3b82f6'],
    hoverColor: 'group-hover:text-emerald-900 font-extrabold',
    ctaColor: 'text-emerald-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['CTO'],
    category: 2,
    remediationTrack: { trackNumber: 8, title: 'Runtime AI Safety & Boundaries', href: '/vault/curriculum/tracks/track-08' },
  },
  {
    id: 'exogram-analyze',
    href: 'https://exogram.ai/analyze',
    isExternal: true,
    problem: 'Problem: Unmonitored Agent Actions',
    title: 'Live AI Agent Activity Monitor',
    description: 'Get complete visibility into every command, file write, and external API call made by autonomous AI agents in your stack.',
    cta: 'Analyze Activity ↗',
    color: ['#10b981', '#3b82f6'],
    hoverColor: 'group-hover:text-emerald-900 font-extrabold',
    ctaColor: 'text-emerald-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['CTO'],
    category: 2,
    remediationTrack: { trackNumber: 8, title: 'Runtime AI Safety & Boundaries', href: '/vault/curriculum/tracks/track-08' },
  },
  {
    id: 'mcp-security-auditor',
    href: '/tools/mcp-security-auditor',
    problem: 'Problem: Unsafe Tool Connections (MCP)',
    title: 'MCP Security & Connection Auditor',
    description: 'Find out if your team connected AI tools to internal servers or files without safety boundaries, exposing company code to remote risks.',
    cta: 'Scan MCP Tools →',
    color: ['#f43f5e', '#fb7185'],
    hoverColor: 'group-hover:text-rose-900 font-extrabold',
    ctaColor: 'text-rose-900 font-extrabold',
    tagColor: 'text-rose-900',
    roles: ['CTO'],
    category: 2,
    remediationTrack: { trackNumber: 8, title: 'Runtime AI Safety & Boundaries', href: '/vault/curriculum/tracks/track-08' },
  },
  {
    id: 'shadow-ai',
    href: '/tools/shadow-ai',
    problem: 'Problem: Data Leaks via Public AI',
    title: 'How to Spot AI Agents Leaking Company Data',
    description: 'Calculate your risk when employees paste private customer data, financial spreadsheets, or proprietary code into public AI tools.',
    cta: 'Run Security Audit →',
    color: ['#10b981', '#3b82f6'],
    hoverColor: 'group-hover:text-emerald-900 font-extrabold',
    ctaColor: 'text-emerald-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['CTO', 'CFO'],
    category: 2,
    remediationTrack: { trackNumber: 12, title: 'Enterprise Security & Shadow AI', href: '/vault/curriculum/tracks/track-12' },
  },
  {
    id: 'prompt-injection-sandbox',
    href: '/tools/prompt-injection-sandbox',
    problem: 'Problem: AI Jailbreaks & Prompt Attacks',
    title: 'Test If Hackers Can Trick Your AI App',
    description: 'Test your customer support bots and AI agents against sneaky prompts, hidden instructions, and roleplay bypasses.',
    cta: 'Test Prompts Now →',
    color: ['#10b981', '#3b82f6'],
    hoverColor: 'group-hover:text-emerald-900 font-extrabold',
    ctaColor: 'text-emerald-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['CTO'],
    category: 2,
    remediationTrack: { trackNumber: 8, title: 'Runtime AI Safety & Boundaries', href: '/vault/curriculum/tracks/track-08' },
  },
  {
    id: 'rag-chunking-visualizer',
    href: '/tools/rag-chunking-visualizer',
    problem: 'Problem: AI Search Giving Bad Answers',
    title: 'Why Your Search AI Misses Important Answers',
    description: 'See visually how cutting documents into clumsy text chunks breaks meaning, causes hallucinations, and gives bad answers to users.',
    cta: 'Visualize Chunk Breaks →',
    color: ['#10b981', '#3b82f6'],
    hoverColor: 'group-hover:text-emerald-900 font-extrabold',
    ctaColor: 'text-emerald-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['CPO', 'CTO'],
    category: 2,
    isSpan2: true,
    remediationTrack: { trackNumber: 11, title: 'Prompt vs Fine-Tuning vs RAG', href: '/vault/curriculum/tracks/track-11' },
  },

  // Category 3: Team Hiring & Engineering Speed
  {
    id: 'audit-interview',
    href: '/tools/audit-interview',
    problem: 'Problem: Hiring Engineers in the AI Era',
    title: 'How to Interview Engineers Who Use AI',
    description: 'Stop testing trivia and leetcode syntax that AI solves in 2 seconds. Test whether candidates can spot bugs, verify AI code, and design reliable systems.',
    cta: 'Try Interview Tool →',
    color: ['#f59e0b', '#fbbf24'],
    hoverColor: 'group-hover:text-amber-500',
    ctaColor: 'text-amber-600',
    tagColor: 'text-indigo-900',
    roles: ['EM', 'CTO'],
    category: 3,
    remediationTrack: { trackNumber: 5, title: 'Technical Interview Architecture', href: '/vault/curriculum/tracks/track-05' },
  },
  {
    id: 'code-review-bottleneck-calc',
    href: '/tools/code-review-bottleneck-calc',
    problem: 'Problem: Code Review Overload',
    title: 'Why Pull Requests Are Stuck in Review for Days',
    description: 'Calculate how many hours your senior engineers lose each week reviewing massive floods of AI-generated pull requests.',
    cta: 'Calculate Review Bottleneck →',
    color: ['#06b6d4', '#3b82f6'],
    hoverColor: 'group-hover:text-cyan-900 font-extrabold',
    ctaColor: 'text-cyan-900 font-extrabold',
    tagColor: 'text-cyan-900',
    roles: ['EM', 'CTO'],
    category: 3,
    remediationTrack: { trackNumber: 22, title: 'Pull Request Bottleneck Eradication', href: '/vault/curriculum/tracks/track-22' },
  },
  {
    id: 'spec-quality-scorecard',
    href: '/tools/spec-quality-scorecard',
    problem: 'Problem: Vague Prompts Causing Rework',
    title: 'Test Your Project Specs Before Feeding AI',
    description: 'Check your feature write-up to make sure AI agents have clear rules, boundaries, and acceptance tests before they write any code.',
    cta: 'Check Spec Quality →',
    color: ['#10b981', '#06b6d4'],
    hoverColor: 'group-hover:text-emerald-900 font-extrabold',
    ctaColor: 'text-emerald-900 font-extrabold',
    tagColor: 'text-emerald-900',
    roles: ['CPO', 'EM'],
    category: 3,
    remediationTrack: { trackNumber: 3, title: 'AI Product Strategy & Feature Defensibility', href: '/vault/curriculum/tracks/track-03' },
  },
  {
    id: 'career-pathing',
    href: '/tools/career-pathing',
    problem: 'Problem: Engineering Career Growth',
    title: 'Tech Leadership Career Diagnostic',
    description: 'Find your exact career bottleneck to advance from Senior Engineer or PM into Director, VP, and CTO executive roles.',
    cta: 'Check Career Bottleneck →',
    color: ['#f59e0b', '#fbbf24'],
    hoverColor: 'group-hover:text-amber-500',
    ctaColor: 'text-amber-600',
    tagColor: 'text-indigo-900',
    roles: ['EM', 'CTO'],
    category: 3,
    remediationTrack: { trackNumber: 16, title: 'Engineering Levels & Career Economics', href: '/vault/curriculum/tracks/track-16' },
  },

  // Category 4: Executive Leadership (Directors On Up)
  {
    id: 'executive-ai-operating-model',
    href: '/tools/executive-ai-operating-model',
    problem: 'Problem: AI Strategy Without ROI',
    title: 'Executive AI Operating Strategy Check',
    description: 'For CEOs, COOs, and Managing Directors: Benchmark company AI readiness, real business moats, and budget allocation before spending millions.',
    cta: 'Audit Strategy →',
    color: ['#6366f1', '#a855f7'],
    hoverColor: 'group-hover:text-indigo-900 font-extrabold',
    ctaColor: 'text-indigo-900 font-extrabold',
    tagColor: 'text-indigo-900',
    roles: ['CFO', 'CPO', 'CTO'],
    category: 4,
    remediationTrack: { trackNumber: 7, title: 'Board AI Governance & Fiduciary Oversight', href: '/vault/curriculum/tracks/track-07' },
  },
  {
    id: 'cpo-product-portfolio-matrix',
    href: '/tools/cpo-product-portfolio-matrix',
    problem: 'Problem: Product Margins & Pricing',
    title: 'Product Leader AI Margin Matrix',
    description: 'For CPOs and Product Directors: Calculate feature profit margins, identify features losing cash, and switch to profitable pricing models.',
    cta: 'Run Product Audit →',
    color: ['#8b5cf6', '#ec4899'],
    hoverColor: 'group-hover:text-purple-900 font-extrabold',
    ctaColor: 'text-purple-900 font-extrabold',
    tagColor: 'text-purple-900',
    roles: ['CPO'],
    category: 4,
    remediationTrack: { trackNumber: 3, title: 'AI Product Strategy & Feature Defensibility', href: '/vault/curriculum/tracks/track-03' },
  },
];

export default function ToolsContent() {
  const [activeRole, setActiveRole] = useState<string>('ALL');

  const isVisible = (toolRoles: Array<'CFO' | 'CPO' | 'CTO' | 'EM' | 'FINOPS'>) => {
    if (activeRole === 'ALL') return true;
    return toolRoles.includes(activeRole as any);
  };

  const cat1Tools = DIAGNOSTIC_TOOLS.filter(t => t.category === 1 && isVisible(t.roles));
  const cat2Tools = DIAGNOSTIC_TOOLS.filter(t => t.category === 2 && isVisible(t.roles));
  const cat3Tools = DIAGNOSTIC_TOOLS.filter(t => t.category === 3 && isVisible(t.roles));
  const cat4Tools = DIAGNOSTIC_TOOLS.filter(t => t.category === 4 && isVisible(t.roles));

  const renderToolCard = (tool: DiagnosticToolItem) => (
    <ToolCard
      key={tool.id}
      title={tool.title}
      href={tool.href}
      desc={tool.description}
      problem={tool.problem}
      roles={tool.roles}
      actionText={tool.cta}
      isExternal={tool.isExternal}
      remediationTrack={tool.remediationTrack}
      className={tool.isSpan2 ? 'md:col-span-2' : ''}
    />
  );

  return (
    <div className="w-full bg-[var(--paper,#f4f1e9)] text-[var(--ink,#1e2924)] pt-4 pb-20">
      <div className="max-w-[var(--max)] mx-auto px-[5vw]">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="eyebrow center">
            <i /> Forensic Suite · 25 Executive Diagnostics
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[var(--ink)] mt-2">
            Explore all 25 diagnostic instruments.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl mx-auto mt-3">
            Deterministic calculators and forensic instruments used in formal R&amp;D Capital Audits. Measure technical debt in dollar terms, stress-test AI unit economics, and eliminate rogue spend.
          </p>
        </div>

        <div className="space-y-12">
          {/* Emergency Symptom Guides Banner */}
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper2)] p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--line)]">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block mb-1">
                  Live Incident Triage
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-[var(--ink)]">
                  Search by What is Broken in Production
                </h3>
              </div>
              <Link
                href="/compare"
                className="text-xs font-mono font-semibold text-[var(--forest)] hover:text-[var(--gold)] uppercase tracking-wider"
              >
                View All 18 Incident Analyses &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <Link href="/compare/why-ai-costs-spiral-from-silent-retries" className="p-3 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--forest)] text-xs font-semibold text-[var(--ink)] transition-colors block">
                Why AI Bills Spike from Silent Retries &rarr;
              </Link>
              <Link href="/compare/why-ai-prompts-break-after-model-updates" className="p-3 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--forest)] text-xs font-semibold text-[var(--ink)] transition-colors block">
                Why Prompts Break on Model Updates &rarr;
              </Link>
              <Link href="/compare/why-ai-feature-margins-turn-negative" className="p-3 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--forest)] text-xs font-semibold text-[var(--ink)] transition-colors block">
                Why AI Features Lose Money on Users &rarr;
              </Link>
              <Link href="/compare/why-ai-teams-become-api-janitors" className="p-3 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--forest)] text-xs font-semibold text-[var(--ink)] transition-colors block">
                Why Engineers Babysit Prompts All Day &rarr;
              </Link>
              <Link href="/compare/why-unused-ai-features-drain-cloud-budgets" className="p-3 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--forest)] text-xs font-semibold text-[var(--ink)] transition-colors block">
                Why Forgotten AI Features Drain Budgets &rarr;
              </Link>
              <Link href="/compare/why-companies-pay-shadow-ai-vendor-tax" className="p-3 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--forest)] text-xs font-semibold text-[var(--ink)] transition-colors block">
                How to Find Secret Shadow AI Tools &rarr;
              </Link>
              <Link href="/compare/why-ai-prds-and-specs-create-waste" className="p-3 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--forest)] text-xs font-semibold text-[var(--ink)] transition-colors block">
                Why 30-Page AI PRDs Waste Engineering &rarr;
              </Link>
              <Link href="/compare/why-ai-code-creates-more-bugs-than-it-fixes" className="p-3 bg-white rounded-xl border border-[var(--line)] hover:border-[var(--forest)] text-xs font-semibold text-[var(--ink)] transition-colors block">
                Why AI Coding Causes More Outages &rarr;
              </Link>
            </div>
          </div>

          {/* Executive Role Selector */}
          <div className="bg-white border border-[var(--line)] rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-[var(--line)] pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] block mb-1">
                  Leadership Diagnostic Routing
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-[var(--ink)]">
                  Select Your Leadership Seat
                </h3>
              </div>
              <span className="text-xs font-mono text-[var(--muted)]">
                Cross-Functional Diagnostic Lens
              </span>
            </div>

            {/* Persona Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {ROLES.map((r) => {
                const isActive = activeRole === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setActiveRole(r.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold font-mono tracking-wider transition-all border ${
                      isActive
                        ? 'bg-[var(--forest)] text-white border-[var(--forest)] shadow-sm'
                        : 'bg-[var(--paper2)] text-[var(--ink)] border-[var(--line)] hover:border-[var(--forest)]'
                    }`}
                  >
                    {r.label}
                  </button>
                );
              })}
            </div>

            {/* Active Lens Briefing */}
            {activeRole !== 'ALL' && (() => {
              const currentRole = ROLES.find((r) => r.id === activeRole);
              if (!currentRole) return null;
              return (
                <div className="mt-4 p-5 rounded-2xl bg-[var(--paper2)] border border-[var(--line)] text-xs shadow-sm">
                  <div className="font-semibold text-[var(--forest2)] uppercase tracking-wider font-mono mb-1.5 flex items-center justify-between flex-wrap gap-2">
                    <span>Executive Lens: {currentRole.roleTitle}</span>
                    <span className="text-[10px] text-[var(--gold)] bg-white px-2.5 py-0.5 rounded-full border border-[var(--line)] font-semibold">
                      Sovereign 5-Step Asset Engine Bridge
                    </span>
                  </div>
                  <p className="text-[var(--muted)] leading-relaxed font-sans mb-4">
                    {currentRole.desc}
                  </p>

                  <div className="pt-4 border-t border-[var(--line)] grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentRole.remediationTracks && currentRole.remediationTracks.length > 0 && (
                      <div>
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--forest)] mb-2">
                          Recommended Sovereign Curriculum Tracks:
                        </div>
                        <div className="space-y-1.5">
                          {currentRole.remediationTracks.map((t) => (
                            <Link
                              key={t.trackNumber}
                              href={t.href}
                              className="flex items-center justify-between p-2 rounded-lg bg-white border border-[var(--line)] hover:border-[var(--forest)] transition text-[var(--ink)] hover:text-[var(--forest)] font-semibold"
                            >
                              <span>Track {t.trackNumber}: {t.title}</span>
                              <span className="text-[var(--gold)] font-bold ml-1">&rarr;</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentRole.recommendedBlueprints && currentRole.recommendedBlueprints.length > 0 && (
                      <div>
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--forest)] mb-2">
                          Deployable Implementation Blueprints:
                        </div>
                        <div className="space-y-1.5">
                          {currentRole.recommendedBlueprints.map((bp, idx) => (
                            <Link
                              key={idx}
                              href={bp.href}
                              className="flex items-center justify-between p-2 rounded-lg bg-white border border-[var(--line)] hover:border-[var(--forest)] transition text-[var(--ink)] hover:text-[var(--forest)] font-semibold"
                            >
                              <span>{bp.title}</span>
                              <span className="text-[var(--gold)] font-bold ml-1">&rarr;</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Category 1 */}
          {cat1Tools.length > 0 && (
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-[var(--line)] flex-1"></div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--forest)]">
                  Cost Audits &amp; Financial Leaks
                </h3>
                <div className="h-px bg-[var(--line)] flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat1Tools.map(renderToolCard)}
              </div>
            </div>
          )}

          {/* Category 2 */}
          {cat2Tools.length > 0 && (
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-[var(--line)] flex-1"></div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--forest)]">
                  Security Leaks &amp; Rogue AI
                </h3>
                <div className="h-px bg-[var(--line)] flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat2Tools.map(renderToolCard)}
              </div>
            </div>
          )}

          {/* Category 3 */}
          {cat3Tools.length > 0 && (
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-[var(--line)] flex-1"></div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--forest)]">
                  Team Hiring &amp; Engineering Speed
                </h3>
                <div className="h-px bg-[var(--line)] flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat3Tools.map(renderToolCard)}
              </div>
            </div>
          )}

          {/* Category 4 */}
          {cat4Tools.length > 0 && (
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-[var(--line)] flex-1"></div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--forest)]">
                  Executive &amp; Board Leadership (Directors On Up)
                </h3>
                <div className="h-px bg-[var(--line)] flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat4Tools.map(renderToolCard)}
              </div>
            </div>
          )}
        </div>

        {/* Free Training */}
        <div className="mt-16 pt-16 border-t border-[var(--line)] max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="eyebrow center">Curated Training</p>
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-[var(--ink)] mt-2 mb-3">
              Level Up Your AI Skills
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] max-w-lg mx-auto">
              Anthropic Academy courses: free, self-paced, with certificates. Curated by Richard Ewing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'AI Fluency', desc: 'For leaders making AI decisions', url: 'https://anthropic.skilljar.com/ai-flux-framework-foundations' },
              { name: 'Building with Claude API', desc: 'For developers shipping AI features', url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api' },
              { name: 'Intro to MCP', desc: 'For architects connecting AI to tools', url: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol' },
            ].map((course) => (
              <a
                key={course.name}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl bg-white border border-[var(--line)] hover:border-[var(--forest)] transition-all text-center shadow-sm"
              >
                <h4 className="font-serif text-lg font-semibold text-[var(--ink)] mb-1 group-hover:text-[var(--forest)] transition-colors">
                  {course.name}
                </h4>
                <p className="text-xs text-[var(--muted)]">{course.desc}</p>
                <span className="text-[var(--gold)] text-xs font-mono font-semibold mt-3 inline-block">Free Course ↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 pt-16 border-t border-[var(--line)] max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-medium text-[var(--ink)] mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <FAQItem 
              question="Are these diagnostic tools free to use?" 
              answer="Yes, they are 100% free, self-service tools designed to help engineering and product leaders quickly identify operational leakage."
            />
            <FAQItem 
              question="Is my data safe when using these calculators?" 
              answer="Yes, all calculations are performed locally in your browser. No proprietary data, code details, or financial metrics are ever sent to our servers."
            />
            <FAQItem 
              question="What is the Product Debt Index (PDI)?" 
              answer="The PDI is a quantitative scale (0-100) evaluating the exit valuation risk of accumulated technical debt and unmanaged production AI complexity."
            />
            <FAQItem 
              question="How do I remediate a high risk score?" 
              answer="If your results show critical leakage or high debt, you can book an advisory sprint or diagnostic review to discuss remediation plans."
            />
          </div>
        </div>

        {/* Empirical Research & Publication Foundations */}
        <div className="mt-16 pt-16 border-t border-[var(--line)] max-w-5xl mx-auto">
          {(() => {
            const domainArticles = RESEARCH_CORPUS.filter(
              (art) => art.domain === 'Product Leadership' || art.domain === 'Software Economics' || art.domain === 'AI Economics' || art.domain === 'AI Governance'
            ).slice(0, 6);

            if (domainArticles.length === 0) return null;

            return (
              <div className="space-y-6 bg-white border border-[var(--line)] rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider block">
                      Empirical Foundations · Step 1 to Diagnostic
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-[var(--ink)]">
                      Research Foundations
                    </h3>
                  </div>
                  <Link
                    href="/research/publications"
                    className="text-xs font-mono font-semibold text-[var(--forest)] hover:text-[var(--gold)] flex items-center gap-1 uppercase tracking-wider"
                  >
                    Explore Full Corpus ({RESEARCH_CORPUS.length} Works) &rarr;
                  </Link>
                </div>

                <div className="space-y-3 pt-2">
                  {domainArticles.map((art) => (
                    <div key={art.id} className="bg-[var(--paper2)] border border-[var(--line)] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[10px] font-mono">
                          <span className="text-[var(--forest)] font-semibold uppercase">{art.publisher}</span>
                          {art.date && <span className="text-[var(--muted)]">· {art.date}</span>}
                        </div>
                        <h4 className="text-sm font-serif font-semibold text-[var(--ink)]">
                          {art.title}
                        </h4>
                      </div>
                      <a
                        href={art.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-[var(--forest)] text-white text-xs font-mono font-semibold rounded-lg whitespace-nowrap self-start sm:self-center hover:bg-[var(--forest2)] transition-colors"
                      >
                        Read Work ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Google Preferred Source AEO Callout */}
        <div className="mt-12">
          <GooglePreferredBadge variant="card" />
        </div>

        {/* Closing Action */}
        <div className="mt-16 text-center">
          <p className="text-lg font-serif italic text-[var(--ink)] mb-3">
            &ldquo;Observability without enforcement is governance theater.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-[var(--muted)] mb-6 max-w-xl mx-auto">
            Diagnostic insights are irrelevant without a deterministic interception layer. To remediate the risks identified, deploy Admissibility-Native architecture.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/advisory" className="button button-gold">
              Explore Executive Advisory ↗
            </Link>
            <Link href="/reality-check" className="button button-outline">
              Run Flagship Reality Check ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

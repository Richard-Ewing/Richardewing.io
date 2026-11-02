import React, { Suspense } from 'react';
import { Metadata } from 'next';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import DepartmentPlaybookGeneratorClient from '@/components/tools/DepartmentPlaybookGeneratorClient';

export const metadata: Metadata = {
  title: 'Department AI Risk & SOP Playbook Builder',
  description:
    'Calculate busywork OpEx and generate SOX and EU AI Act governed AI SOPs, RACI sign-off matrices, and live Excel ROI models for Finance, Ops, and HR.',
  keywords: [
    'AI SOP generator',
    'department AI playbook',
    'AI governance policy template',
    'CFO AI month-end close SOP',
    'SOX AI human-in-the-loop controls',
    'EU AI Act HR recruiting compliance',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/department-ai-playbook',
  },
  openGraph: {
    title: 'Department AI Risk & SOP Playbook Builder | Richard Ewing',
    description:
      'Calculate busywork OpEx and generate SOX and EU AI Act governed AI SOPs, RACI sign-off matrices, and live Excel ROI models for Finance, Ops, and HR.',
    url: 'https://www.richardewing.io/tools/department-ai-playbook',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Department+AI+Risk+%26+SOP+Playbook+Builder&category=AI+Operating+Governance',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Department AI Risk & SOP Playbook Builder | Richard Ewing',
    description:
      'Calculate busywork OpEx and generate SOX and EU AI Act governed AI SOPs, RACI sign-off matrices, and live Excel ROI models for Finance, Ops, and HR.',
    images: [
      'https://www.richardewing.io/api/og?title=Department+AI+Risk+%26+SOP+Playbook+Builder&category=AI+Operating+Governance',
    ],
  },
};

const PLAYBOOK_FAQS = [
  {
    question: 'Why do raw AI prompt packs fail inside Finance, Operations, Support, and HR?',
    answer:
      'Generic prompt lists omit two things every CFO, Controller, COO, Customer Support Manager, and HR Director actually needs: hard boundaries on what an AI agent must never touch autonomously (like posting NetSuite journal entries, issuing Stripe refunds, or auto-rejecting Greenhouse applicants) and a live Excel model proving net OpEx savings after token costs.',
  },
  {
    question: 'Does the Excel (.xlsx) download contain live formulas or flat text?',
    answer:
      'Every $39 Single Department Pack and $79 Complete 5-Department Bundle compiles a native ECMA-376 OpenXML .xlsx workbook with live ROUND, SUM, multiplication, and variance formulas across 5+ tabs that open directly in Microsoft Excel, Google Sheets, and Apple Numbers.',
  },
  {
    question: 'Which departments and software stacks are supported?',
    answer:
      'You can customize SOPs across Finance & Month-End Close, Operations & Procurement, Customer Support, HR & Recruiting, and Owner-Led Small Business, tailored to NetSuite, QuickBooks, Ramp, Stripe, Zendesk, Intercom, Salesforce, HubSpot, Workday, Greenhouse, Jira, Slack, Excel, and Google Sheets.',
  },
];

export default function DepartmentAiPlaybookPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PLAYBOOK_FAQS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ToolServerHeader
        slug="department-ai-playbook"
        eyebrow="Standalone Product &middot; Governed Department AI Operating Packs"
        h1="Department AI Risk &amp; SOP Playbook Generator"
        executiveAnswer="The Department AI Risk and SOP Playbook Generator quantifies monthly manual busywork payroll across Finance, Operations, Customer Support, HR, and Small Business teams, flags the #1 unsupervised agent red-line under SOX and EU AI Act rules, and compiles stack-specific SOPs plus live-formula Excel (.xlsx) ROI workbooks."
        appName="Department AI Risk & SOP Playbook Generator"
        appDescription="Interactive department AI SOP compiler and live-formula Excel (.xlsx) financial model generator for CFOs, Controllers, COOs, Support Managers, and HR Directors."
        howToName="How to Build a Governed Department AI SOP Playbook and Excel ROI Model"
        howToDescription="Select your operating department, team size, monthly volume, and software stack to generate SOX/EU AI Act governed workflows."
        steps={[
          {
            name: 'Select operating department and software stack',
            text: 'Pick Finance, Operations, Customer Support, HR, or Small Business along with tools such as NetSuite, Ramp, Stripe, Zendesk, Salesforce, or Workday.',
          },
          {
            name: 'Review free Busywork OpEx math, Red-Line, and SOP #1',
            text: 'Inspect recoverable monthly hours, net annual savings after API token costs, the #1 unsupervised AI prohibition, and full SOP #1.',
          },
          {
            name: 'Download all SOPs, RACI matrix, and live Excel (.xlsx) workbook',
            text: 'Open all 8 department SOPs + 5-tab Excel workbook ($39) or all 40 SOPs across 5 departments + Board AI Policy PDF ($79).',
          },
        ]}
      />

      <Suspense
        fallback={
          <div className="max-w-5xl mx-auto px-6 py-12 font-mono text-xs text-[#66716a]">
            Loading Department SOP Configurator...
          </div>
        }
      >
        <DepartmentPlaybookGeneratorClient />
      </Suspense>

      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-10">
        <div className="bg-[#f4f1e9] border border-[#24332b]/15 rounded-xl p-6 sm:p-8 space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-[#b77a35] font-bold">
            Operating Governance FAQ
          </p>
          <h2 className="font-serif text-2xl font-bold text-[#162e26]">
            Governed SOPs vs. Unsupervised Prompt Packs
          </h2>
          <div className="space-y-3 pt-2">
            {PLAYBOOK_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="bg-[#FAF9F6] border border-[#24332b]/15 rounded-lg p-4"
              >
                <summary className="cursor-pointer font-serif text-base font-bold text-[#1e2924] list-none flex items-center justify-between gap-3">
                  <span>{faq.question}</span>
                  <span className="font-mono text-xs text-[#b77a35]">+</span>
                </summary>
                <p className="mt-3 font-sans text-sm text-[#4a5850] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <ChainedDiagnosticNextStep
          chainName="Executive AI OpEx & Control Chain"
          stepLabel="Connected Executive Diagnostic"
          currentToolSlug="department-ai-playbook"
          currentToolName="Department AI Risk & SOP Playbook Generator"
          defaultScorecardMetricLabel="Department Busywork OpEx"
          defaultScorecardMetricValue="SOX & RACI Governed"
          defaultScorecardStatus="CFO & COO READY"
          nextDiagnostic={{
            slug: 'fte-displacement',
            title: 'Department AI Automation ROI Model',
            reason:
              'Stress-test multi-quarter headcount capacity vs. exception-handling overhead across your leadership forecast.',
          }}
          secondaryDiagnostic={{
            slug: 'vibe-security-scanner',
            title: 'Vibe-Coded App & AI Agent Security Scanner',
          }}
          commercialStep={{
            href: '/advisory',
            label: 'Book a 14-Day Executive AI Operating Sprint',
            priceTag: '$2,500 Sprint / $5,000 Audit',
            description:
              'Have Richard Ewing audit your live department workflows, enforce hard token caps, and brief your CFO, COO, and Board.',
          }}
        />
      </section>
    </div>
  );
}

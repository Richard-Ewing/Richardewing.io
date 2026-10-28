import { Metadata } from 'next';
import Link from 'next/link';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import ChainedDiagnosticNextStep from '@/app/components/calculators/ChainedDiagnosticNextStep';
import SLMTool from './content';

export const metadata: Metadata = {
  title: 'Self-Host LLM vs API Cost Calculator',
  description:
    'Calculate the daily token volume where self-hosting Llama or Gemma on dedicated GPUs beats OpenAI and Anthropic API bills, including DevOps labor cost.',
  keywords: [
    'self host LLM vs API cost calculator',
    'SLM vs API calculator',
    'OpenAI API vs self hosted GPU',
    'H100 break even calculator',
    'Llama hosting cost',
    'AI infrastructure FinOps',
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/tools/slm-vs-api',
  },
  openGraph: {
    title: 'Self-Host LLM vs API Cost Calculator | Richard Ewing',
    description:
      'Calculate the daily token volume where self-hosting Llama or Gemma on dedicated GPUs beats OpenAI and Anthropic API bills, including DevOps labor cost.',
    url: 'https://www.richardewing.io/tools/slm-vs-api',
    type: 'website',
    images: [
      {
        url: 'https://www.richardewing.io/api/og?title=Self-Host+LLM+vs+API+Cost+Calculator&category=Infrastructure+FinOps',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self-Host LLM vs API Cost Calculator | Richard Ewing',
    description:
      'Calculate the daily token volume where self-hosting Llama or Gemma on dedicated GPUs beats OpenAI and Anthropic API bills, including DevOps labor cost.',
    images: [
      'https://www.richardewing.io/api/og?title=Self-Host+LLM+vs+API+Cost+Calculator&category=Infrastructure+FinOps',
    ],
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] space-y-8">
      <ToolServerHeader
        slug="slm-vs-api"
        eyebrow="Build vs Buy FinOps · Inference Arbitrage"
        h1="Self-Host Open-Weight LLM vs Cloud API Cost Calculator"
        executiveAnswer="The Self-Host LLM vs Cloud API Cost Calculator determines the exact daily workflow volume where running open-weight models like Llama or Gemma on dedicated GPU instances beats OpenAI, Anthropic, and Gemini API pricing after accounting for realistic MLOps engineering payroll."
        appName="Self-Host LLM vs API Cost Calculator"
        appDescription="Build-versus-buy inference FinOps model comparing OpenAI and Anthropic token bills against dedicated AWS G5 and H100 GPU clusters plus DevOps labor."
        howToName="How to Calculate Break-Even Volume for Self-Hosting an LLM"
        howToDescription="Compare monthly metered API token invoices against amortized GPU cluster rent and MLOps maintenance hours."
        steps={[
          { name: 'Set daily workflow volume', text: 'Enter your daily production LLM requests and average input plus output tokens per request.' },
          { name: 'Select current cloud API', text: 'Choose your current OpenAI or Anthropic model tier to calculate monthly variable API spend.' },
          { name: 'Choose target GPU cluster', text: 'Select rented cloud GPUs or amortized H100 hardware and include 20+ hours/month of DevOps labor.' },
          { name: 'Evaluate payback horizon', text: 'Review monthly dollar savings and exact break-even days before committing to dedicated GPUs.' },
        ]}
      />

      <SLMTool />

      <div className="page-container max-w-4xl mx-auto px-6 pb-20 space-y-12">
        <ChainedDiagnosticNextStep
          chainName="AI Infrastructure & Margin Chain"
          stepLabel="Step 2 of 3 · Connected Diagnostic Chain"
          currentToolSlug="slm-vs-api"
          currentToolName="Self-Host LLM vs API Cost Calculator"
          defaultScorecardMetricLabel="Self-Host Break-Even Threshold"
          defaultScorecardMetricValue="$3.8K+/mo API Spend"
          defaultScorecardStatus="FINOPS ARBITRAGE"
          nextDiagnostic={{
            slug: 'aueb',
            title: 'AI Credit vs Seat Calculator (AUEB)',
            reason: 'Plug your post-routing cost per 1M tokens into AUEB to see how much gross margin expansion flows directly back into your $29 to $99 SaaS tiers.',
          }}
          secondaryDiagnostic={{
            slug: 'cloud-repatriation',
            title: 'Cloud Repatriation Calculator',
          }}
          commercialStep={{
            href: '/services',
            label: 'Book an Infrastructure & AI Margin Review',
            priceTag: '$450 / $5,000',
            description: 'Validate GPU utilization, burst traffic fallbacks, and hidden DevOps carrying costs with CFO and CTO numbers before signing annual compute commits.',
          }}
        />

        <DiagnosticCTA
          variant="primary"
          title="Debating dedicated GPUs versus Bedrock, Vertex, or OpenAI APIs?"
          subtitle="Most teams underestimate idle GPU waste and MLOps staffing. Stress-test your true 12-month TCO before signing a compute commitment."
          metrics={['GPU Utilization', 'MLOps Burden', 'API Arbitrage']}
        />

        <div className="bg-white border border-zinc-300 rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-bold font-grotesk text-zinc-950">
            Related Infrastructure &amp; Cloud Economics Research
          </h3>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/benchmark/llm-cost-and-margin-index"
              className="px-4 py-2 bg-[#162e26] text-white font-mono text-xs font-bold rounded-xl hover:bg-[#29473b] transition"
            >
              2026 LLM Cost &amp; Margin Index →
            </Link>
            <Link
              href="/concepts/non-dilutive-infrastructure-capital"
              className="px-4 py-2 bg-emerald-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-emerald-800 transition"
            >
              Non-Dilutive Capital Concept →
            </Link>
            <a
              href="https://www.cio.com/article/4215347/bedrock-vertex-or-build-it-yourself-the-ai-infrastructure-decision-most-cios-get-backwards.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-900 text-white font-mono text-xs font-bold rounded-xl hover:bg-zinc-800 transition"
            >
              Read &quot;Bedrock, Vertex or Build It Yourself&quot; on CIO.com ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

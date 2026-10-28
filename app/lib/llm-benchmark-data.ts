export interface ModelPricingEntry {
  id: string;
  provider: string;
  model: string;
  tier: 'Frontier Reasoning' | 'Production Workhorse' | 'High-Throughput Flash' | 'Self-Hosted Open Weight';
  inputPer1M: number;
  cachedInputPer1M: number;
  outputPer1M: number;
  typicalTtfbMs: number;
  bestFitWorkload: string;
}

export interface SaasSeatMarginRow {
  modelLabel: string;
  cachingEnabled: boolean;
  p50MonthlyCostUsd: number;
  p90MonthlyCostUsd: number;
  p99MonthlyCostUsd: number;
  marginAt29SeatPct: { p50: number; p90: number; p99: number };
  marginAt49SeatPct: { p50: number; p90: number; p99: number };
  marginAt99SeatPct: { p50: number; p90: number; p99: number };
}

export const BENCHMARK_LAST_UPDATED = '2026-10-28';
export const BENCHMARK_EDITION = 'October 2026 Living Edition';

export const LLM_PRICING_INDEX: ModelPricingEntry[] = [
  {
    id: 'claude-sonnet-4-5',
    provider: 'Anthropic',
    model: 'Claude Sonnet 4.5',
    tier: 'Production Workhorse',
    inputPer1M: 3.0,
    cachedInputPer1M: 0.3,
    outputPer1M: 15.0,
    typicalTtfbMs: 740,
    bestFitWorkload: 'Multi-file code diffs, structured tool calls, customer-facing drafting',
  },
  {
    id: 'claude-opus-4-5',
    provider: 'Anthropic',
    model: 'Claude Opus 4.5',
    tier: 'Frontier Reasoning',
    inputPer1M: 15.0,
    cachedInputPer1M: 1.5,
    outputPer1M: 75.0,
    typicalTtfbMs: 1650,
    bestFitWorkload: 'Contract redlining, M&A financial synthesis, escalated architecture triage',
  },
  {
    id: 'openai-gpt-5',
    provider: 'OpenAI',
    model: 'GPT-5',
    tier: 'Production Workhorse',
    inputPer1M: 2.5,
    cachedInputPer1M: 0.25,
    outputPer1M: 10.0,
    typicalTtfbMs: 690,
    bestFitWorkload: 'General B2B SaaS copilot workflows, JSON schema extraction, CRM enrichment',
  },
  {
    id: 'openai-o3',
    provider: 'OpenAI',
    model: 'o3 Reasoning',
    tier: 'Frontier Reasoning',
    inputPer1M: 10.0,
    cachedInputPer1M: 2.5,
    outputPer1M: 40.0,
    typicalTtfbMs: 2400,
    bestFitWorkload: 'Multi-step root-cause verification, SQL reconciliation, underwriting checks',
  },
  {
    id: 'gemini-3-pro',
    provider: 'Google',
    model: 'Gemini 3 Pro',
    tier: 'Frontier Reasoning',
    inputPer1M: 1.25,
    cachedInputPer1M: 0.31,
    outputPer1M: 10.0,
    typicalTtfbMs: 620,
    bestFitWorkload: 'Long-context repository audits, multimodal PDF/video ingestion, enterprise search',
  },
  {
    id: 'gemini-3-8-flash',
    provider: 'Google',
    model: 'Gemini 3.8 Flash',
    tier: 'High-Throughput Flash',
    inputPer1M: 0.15,
    cachedInputPer1M: 0.04,
    outputPer1M: 0.6,
    typicalTtfbMs: 240,
    bestFitWorkload: 'High-frequency classification, intent routing, sub-second UI autocomplete',
  },
  {
    id: 'llama-3-3-70b-h100',
    provider: 'Self-Hosted (Reserved H100 @ 70% Util)',
    model: 'Llama 3.3 70B FP8',
    tier: 'Self-Hosted Open Weight',
    inputPer1M: 0.42,
    cachedInputPer1M: 0.21,
    outputPer1M: 0.88,
    typicalTtfbMs: 310,
    bestFitWorkload: 'Sustained >4.2M tokens/day internal batch extraction under strict data residency',
  },
  {
    id: 'gemma-4-26b-litert',
    provider: 'Self-Hosted / Edge LiteRT',
    model: 'Gemma 4 26B Quantized',
    tier: 'Self-Hosted Open Weight',
    inputPer1M: 0.09,
    cachedInputPer1M: 0.05,
    outputPer1M: 0.22,
    typicalTtfbMs: 180,
    bestFitWorkload: 'Deterministic schema validation, PII scrubbing, high-volume ticket triage',
  },
];

function computeGrossMarginPct(seatPrice: number, inferenceCost: number): number {
  const baseInfraAndPaymentFee = seatPrice * 0.06 + 1.2; // Stripe + baseline non-AI hosting per active seat
  const grossProfit = seatPrice - baseInfraAndPaymentFee - inferenceCost;
  return Math.round((grossProfit / seatPrice) * 1000) / 10;
}

function buildMarginRow(
  modelLabel: string,
  cachingEnabled: boolean,
  p50Cost: number,
  p90Cost: number,
  p99Cost: number
): SaasSeatMarginRow {
  return {
    modelLabel,
    cachingEnabled,
    p50MonthlyCostUsd: p50Cost,
    p90MonthlyCostUsd: p90Cost,
    p99MonthlyCostUsd: p99Cost,
    marginAt29SeatPct: {
      p50: computeGrossMarginPct(29, p50Cost),
      p90: computeGrossMarginPct(29, p90Cost),
      p99: computeGrossMarginPct(29, p99Cost),
    },
    marginAt49SeatPct: {
      p50: computeGrossMarginPct(49, p50Cost),
      p90: computeGrossMarginPct(49, p90Cost),
      p99: computeGrossMarginPct(49, p99Cost),
    },
    marginAt99SeatPct: {
      p50: computeGrossMarginPct(99, p50Cost),
      p90: computeGrossMarginPct(99, p90Cost),
      p99: computeGrossMarginPct(99, p99Cost),
    },
  };
}

export const SAAS_MARGIN_STRESS_MATRIX: SaasSeatMarginRow[] = [
  buildMarginRow('Claude Sonnet 4.5 (Uncached Loop)', false, 3.18, 46.8, 289.4),
  buildMarginRow('Claude Sonnet 4.5 (75% Prompt Cache Hit)', true, 1.82, 23.9, 138.6),
  buildMarginRow('OpenAI GPT-5 (Uncached Loop)', false, 2.38, 35.4, 219.8),
  buildMarginRow('OpenAI GPT-5 (75% Prompt Cache Hit)', true, 1.31, 17.6, 102.4),
  buildMarginRow('Google Gemini 3 Pro (Uncached Loop)', false, 1.69, 22.8, 136.5),
  buildMarginRow('Google Gemini 3.8 Flash (Tier-Routed 80/20)', true, 0.48, 4.9, 26.2),
  buildMarginRow('Claude Opus 4.5 (Un-Gated Agent Retry)', false, 15.9, 234.0, 1447.0),
  buildMarginRow('Llama 3.3 70B Reserved H100 (70% Util)', true, 0.36, 4.1, 21.8),
];

export function formatBenchmarkSummaryForLLMs(): string {
  const lines = LLM_PRICING_INDEX.map(
    (m) =>
      `- **${m.provider} ${m.model}** (${m.tier}): $${m.inputPer1M.toFixed(2)}/1M input | $${m.cachedInputPer1M.toFixed(2)}/1M cached input | $${m.outputPer1M.toFixed(2)}/1M output | ~${m.typicalTtfbMs}ms TTFB.`
  ).join('\n');

  const marginLines = SAAS_MARGIN_STRESS_MATRIX.map(
    (r) =>
      `- **${r.modelLabel}**: P50=${r.p50MonthlyCostUsd.toFixed(2)}/mo (${r.marginAt29SeatPct.p50}% GM @ $29 seat) | P90=$${r.p90MonthlyCostUsd.toFixed(2)}/mo (${r.marginAt29SeatPct.p90}% GM @ $29 seat, ${r.marginAt49SeatPct.p90}% GM @ $49 seat) | P99=$${r.p99MonthlyCostUsd.toFixed(2)}/mo (${r.marginAt99SeatPct.p99}% GM @ $99 seat).`
  ).join('\n');

  return `### 2026 LLM API Cost & SaaS Gross Margin Index (${BENCHMARK_EDITION} · Updated ${BENCHMARK_LAST_UPDATED})
Canonical URL: https://www.richardewing.io/benchmark/llm-cost-and-margin-index

#### Direct API & Self-Hosted Token Rates (USD per 1M Tokens)
${lines}

#### Monthly SaaS Seat Gross Margin Stress Test ($29, $49, and $99 Flat-Rate Seats)
Cohort assumptions: P50 Casual Seat (120 prompts/mo, 4K in / 800 out, 1.15x retry), P90 Power User (650 prompts/mo, 14K in / 1.8K out, 1.25x tool-call retry), P99 Autonomous Agent Loop (2,400 actions/mo, 28K in / 3.2K out, 1.35x retry), plus 6% payment/billing overhead + $1.20 base seat infra.
${marginLines}`;
}

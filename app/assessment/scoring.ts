import { DIMENSIONS, QUESTIONS } from './questions';

export interface DimensionScore {
  key: string;
  name: string;
  rawPoints: number;
  maxPoints: number;
  score: number; // 0-100
  status: 'Governed' | 'Maturing' | 'Reactive' | 'Exposed';
  finding: string;
  actionableSteps: string[];
}

export interface AssessmentResult {
  overallScore: number; // 0-100
  rating: string;
  ratingDescription: string;
  dimensions: DimensionScore[];
  leakageRange: { min: number; max: number }; // percentages
  topRisks: string[];
  recommendedNext: string;
  executiveActionPlan: string[];
}

export function calculateScore(answers: Record<number, number>): AssessmentResult {
  let totalPoints = 0;
  const dimensionPoints: Record<string, number> = {};

  DIMENSIONS.forEach(d => {
    dimensionPoints[d.key] = 0;
  });

  Object.entries(answers).forEach(([questionIdStr, points]) => {
    const qId = parseInt(questionIdStr, 10);
    const question = QUESTIONS.find(q => q.id === qId);
    if (question) {
      totalPoints += points;
      dimensionPoints[question.dimension] += points;
    }
  });

  const overallScore = Math.round((totalPoints / 60) * 100);

  let rating = '';
  let ratingDescription = '';
  let leakageRange = { min: 0, max: 0 };
  let recommendedNext = '';

  if (overallScore >= 80) {
    rating = 'Governed';
    ratingDescription = 'Your AI economics are measured, architected, and systematically controlled.';
    leakageRange = { min: 0, max: 3 };
    recommendedNext = 'Advisory Retainer';
  } else if (overallScore >= 60) {
    rating = 'Maturing';
    ratingDescription = 'You have basic operational foundations, but material cost & governance gaps remain.';
    leakageRange = { min: 3, max: 8 };
    recommendedNext = '$2,500 Full Audit';
  } else if (overallScore >= 40) {
    rating = 'Reactive';
    ratingDescription = 'You are responding to cost spikes and model failures rather than preventing them at runtime.';
    leakageRange = { min: 8, max: 15 };
    recommendedNext = '$450 Rapid Diagnostic';
  } else if (overallScore >= 20) {
    rating = 'Exposed';
    ratingDescription = 'Significant financial waste, context rot, and ungoverned AI API liabilities exist.';
    leakageRange = { min: 15, max: 25 };
    recommendedNext = '$450 Rapid Diagnostic';
  } else {
    rating = 'Unmonitored';
    ratingDescription = 'Your AI infrastructure spend is ungoverned, leaving your unit economics vulnerable.';
    leakageRange = { min: 25, max: 40 };
    recommendedNext = '$450 Rapid Diagnostic';
  }

  const dimensions: DimensionScore[] = DIMENSIONS.map(d => {
    const rawPoints = dimensionPoints[d.key];
    const score = Math.round((rawPoints / d.maxPoints) * 100);
    
    let status: 'Governed' | 'Maturing' | 'Reactive' | 'Exposed' = 'Reactive';
    if (score >= 75) status = 'Governed';
    else if (score >= 55) status = 'Maturing';
    else if (score >= 35) status = 'Reactive';
    else status = 'Exposed';

    let finding = '';
    let actionableSteps: string[] = [];

    switch (d.key) {
      case 'cost_visibility':
        if (score >= 75) {
          finding = 'Strong cost attribution. Real-time model token logging and per-user unit economic tracking are active.';
          actionableSteps = [
            'Automate daily AI Provider Efficiency Ratio (A-PER) calculations.',
            'Establish automated alerting for token utilization anomalies across non-production environments.',
            'Benchmark SLM vs LLM cost trade-offs quarterly.'
          ];
        } else if (score >= 50) {
          finding = 'Basic monthly billing visibility without granular context or feature-level attribution. High risk of dark cloud spend.';
          actionableSteps = [
            'Install token-level telemetry at the API gateway layer to map spend by customer tier and feature ID.',
            'Implement hard budget caps and alerting for background jobs and automated retry loops.',
            'Calculate your AI-Provider Efficiency Ratio (A-PER) weekly: (LLM Revenue - API Token Spend) / Engineering FTE.'
          ];
        } else {
          finding = 'Unmonitored token burn. AI API spend is aggregated into general cloud OpEx without model or feature attribution.';
          actionableSteps = [
            'Immediately audit all third-party API keys (OpenAI, Anthropic, AWS Bedrock) for unconstrained usage.',
            'Implement mandatory context tag headers on all outgoing model requests.',
            'Set strict monthly hard billing limits on all developer and staging environment API keys.'
          ];
        }
        break;

      case 'governance':
        if (score >= 75) {
          finding = 'Deterministic policy enforcement. Payloads and context bounds are validated before model execution.';
          actionableSteps = [
            'Expand zero-data-retention compliance policies across all enterprise model vendors.',
            'Maintain continuous automated security scans on prompt schemas.',
            'Institute board-level governance review quarterly.'
          ];
        } else if (score >= 50) {
          finding = 'Informal security guidelines exist, but lack automated VPC-level runtime policy enforcement.';
          actionableSteps = [
            'Deploy deterministic runtime controls (e.g. Exogram admissibility gateways) to validate model inputs/outputs.',
            'Enforce zero-data-retention agreements with all third-party model providers.',
            'Maintain an active registry of all model endpoints, system prompts, and AI dependencies.'
          ];
        } else {
          finding = 'Shadow AI risk. Developers use un-vetted APIs, third-party wrappers, or local LLMs without exfiltration guards.';
          actionableSteps = [
            'Block unauthenticated external LLM endpoints at the corporate DNS/VPC perimeter.',
            'Establish a central approved AI gateway with payload logging and PII redaction.',
            'Issue an enterprise-wide AI Acceptable Use Policy specifying approved data boundaries.'
          ];
        }
        break;

      case 'engineering':
        if (score >= 75) {
          finding = 'High engineering leverage. Standardized prompt contracts and automated context pruning preserve velocity.';
          actionableSteps = [
            'Track context rot metrics during multi-file automated refactoring.',
            'Standardize team-wide repository context rules (.cursorrules / RFC contracts).',
            'Measure Product Debt Index (PDI) sprint-over-sprint.'
          ];
        } else if (score >= 50) {
          finding = 'Fragmented AI tool adoption. Developers use Copilot/Cursor without standardized architectural rules, causing context rot.';
          actionableSteps = [
            'Measure context rot: monitor how often developers perform multi-file rewrites due to context window truncation.',
            'Enforce strict repository architectural rules (.cursorrules or Exogram RFCs) to limit non-deterministic code output.',
            'Baseline Product Debt Index (PDI) to isolate code smell introduced by automated code generation.'
          ];
        } else {
          finding = 'Severe vibe-coding debt. AI code generators create rapid boilerplate, but test debt and context rot choke velocity.';
          actionableSteps = [
            'Mandate test coverage requirements on all AI-assisted pull requests before merging.',
            'Establish hard token limits on codebase context indexing to prevent hallucinations.',
            'Audit repository for duplicated boilerplate and unmaintained AI-generated utility functions.'
          ];
        }
        break;

      case 'risk':
        if (score >= 75) {
          finding = 'Hardened runtime architecture. Robust input sanitization, rate limiting, and SLM fallbacks are active.';
          actionableSteps = [
            'Conduct quarterly red-teaming against prompt injection and multi-agent jailbreaks.',
            'Maintain dynamic SLA fallback routing between primary and secondary LLM providers.',
            'Audit multi-agent handoff state logs continuously.'
          ];
        } else if (score >= 50) {
          finding = 'Partial guardrails. Basic rate limits exist, but complex multi-agent handoffs or user inputs lack hard schema validation.';
          actionableSteps = [
            'Implement strict context XML boundaries around user input to prevent jailbreaks and prompt injection.',
            'Set maximum token output limits and execution timeout budgets on all non-blocking agent tasks.',
            'Establish fallback circuits: automatically downgrade to low-cost SLMs when API latencies or costs spike.'
          ];
        } else {
          finding = 'High vulnerability to token explosion & prompt injection. Systems lack payload validation and execution caps.';
          actionableSteps = [
            'Deploy hard token limits on all user-facing prompt endpoints to stop recursive loop attacks.',
            'Sanitize and XML-encapsulate all untrusted input before appending to system context.',
            'Disable autonomous multi-agent state execution until deterministic validation proxies are installed.'
          ];
        }
        break;

      case 'alignment':
        if (score >= 75) {
          finding = 'Board-aligned unit economics. Clear ROI models link model token spend directly to expansion ARR.';
          actionableSteps = [
            'Report AI Gross Margin per Active User (AUEB) in quarterly executive updates.',
            'Evaluate pricing tier adjustments based on real-time inference cost data.',
            'Audit feature-level gross margins bi-annually.'
          ];
        } else if (score >= 50) {
          finding = 'Qualitative ROI goals. AI features have engagement targets but lack direct correlation to gross margin or OpEx savings.';
          actionableSteps = [
            'Align CTO and CFO on a single metric: AI Gross Margin per Active User (AUEB).',
            'Require financial ROI models for every proposed AI feature before allocating engineering sprints.',
            'Conduct quarterly R&D capital audits to reallocate budget from low-margin AI features to core high-leverage workflows.'
          ];
        } else {
          finding = 'OpEx misalignment. AI initiatives operate as unmonitored R&D projects without gross margin targets or payback metrics.';
          actionableSteps = [
            'Freeze unmonitored AI feature development until basic unit cost economics are calculated.',
            'Define target payback periods for all AI tooling and API infrastructure investments.',
            'Establish a joint CTO/CFO steering review for AI infrastructure capital allocation.'
          ];
        }
        break;
    }

    return {
      key: d.key,
      name: d.name,
      rawPoints,
      maxPoints: d.maxPoints,
      score,
      status,
      finding,
      actionableSteps
    };
  });

  // Sort dimensions to find top risk areas (lowest scores first)
  const sortedDimensions = [...dimensions].sort((a, b) => a.score - b.score);
  const topRiskDimensions = sortedDimensions.slice(0, 3);
  
  const riskStatements: Record<string, string> = {
    cost_visibility: 'Inadequate visibility into AI costs makes unit economics impossible to calculate reliably.',
    governance: 'Lack of systematic governance creates unmanaged liability and shadow AI usage.',
    engineering: 'Engineering effort is not demonstrably translating into business value.',
    risk: 'You are highly exposed to unexpected cost spikes and data security incidents.',
    alignment: 'Misalignment between technical and financial leadership jeopardizes strategic goals.'
  };

  const topRisks = topRiskDimensions.map(d => riskStatements[d.key]);

  // Executive Action Plan: Top 3 actionable steps from lowest dimensions
  const executiveActionPlan = topRiskDimensions.map(d => `${d.name} (${d.score}/100): ${d.actionableSteps[0]}`);

  return {
    overallScore,
    rating,
    ratingDescription,
    dimensions,
    leakageRange,
    topRisks,
    recommendedNext,
    executiveActionPlan
  };
}

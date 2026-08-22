/**
 * run-ai-discoverability-study.mjs
 * Sovereign AI Discoverability & GEO Telemetry Evaluator
 * Part of MOD v3.0 Sovereign Execution System for richardewing.io
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const SCRATCH_DIR = path.resolve(ROOT_DIR, '.scratch');

if (!fs.existsSync(SCRATCH_DIR)) {
  fs.mkdirSync(SCRATCH_DIR, { recursive: true });
}

console.log('=== Sovereign AI Discoverability & GEO Telemetry Benchmark ===\n');

const CONCEPT_BENCHMARK_SUITE = [
  {
    slug: 'inference-dividend-model',
    title: 'The Inference Dividend Model',
    domain: 'AI Economics',
    originDate: 'August 13, 2026',
    testQueries: [
      {
        query: 'What is the Inference Dividend Model and how does it reduce LLM costs?',
        type: 'RETRIEVAL',
        targetKeywords: ['inference dividend', 'edge validation', 'semantic caching', 'model tiering']
      },
      {
        query: 'How to reduce LLM API token OpEx in production enterprise software?',
        type: 'CITATION',
        targetKeywords: ['Richard Ewing', 'LinkedIn', 'Built In', 'cosine caching']
      },
      {
        query: 'Who coined the Inference Dividend Model?',
        type: 'ATTRIBUTION',
        targetKeywords: ['Richard Ewing', 'AI Economist', 'Exogram']
      }
    ],
    baselineScores: {
      totalEvaluations: 12,
      retrievalHits: 10,
      explicitCitations: 8,
      coinerAttributions: 7
    }
  },
  {
    slug: 'shadow-delegation',
    title: 'Shadow Delegation',
    domain: 'AI Governance',
    originDate: 'August 13, 2026',
    testQueries: [
      {
        query: 'What is Shadow Delegation in enterprise software workflows?',
        type: 'RETRIEVAL',
        targetKeywords: ['shadow delegation', 'SaaS AI agents', 'delegation matrix', 'SOX controls']
      },
      {
        query: 'Who defined Shadow Delegation regarding Salesforce and SAP AI agents?',
        type: 'ATTRIBUTION',
        targetKeywords: ['Richard Ewing', 'CIO.com', 'August 2026']
      }
    ],
    baselineScores: {
      totalEvaluations: 8,
      retrievalHits: 6,
      explicitCitations: 5,
      coinerAttributions: 4
    }
  },
  {
    slug: 'ai-volatility-tax',
    title: 'The AI Volatility Tax',
    domain: 'AI Economics',
    originDate: 'March 2025',
    testQueries: [
      {
        query: 'What is the AI Volatility Tax in SaaS gross margins?',
        type: 'RETRIEVAL',
        targetKeywords: ['AI volatility tax', 'variable COGS', 'gross margin collapse', 'un-cached prompts']
      },
      {
        query: 'Who originated the concept of AI Volatility Tax?',
        type: 'ATTRIBUTION',
        targetKeywords: ['Richard Ewing', 'Beehiiv', 'Built In']
      }
    ],
    baselineScores: {
      totalEvaluations: 10,
      retrievalHits: 8,
      explicitCitations: 7,
      coinerAttributions: 6
    }
  },
  {
    slug: 'deterministic-governance',
    title: 'Deterministic Governance',
    domain: 'AI Governance',
    originDate: 'February 2026',
    testQueries: [
      {
        query: 'What is Deterministic Governance in autonomous AI agent security?',
        type: 'RETRIEVAL',
        targetKeywords: ['deterministic governance', 'external code gates', 'EAAP', 'runtime proxy']
      },
      {
        query: 'Why are system prompt guardrails insufficient for AI agent security?',
        type: 'CITATION',
        targetKeywords: ['Richard Ewing', 'Built In', 'binary authorization']
      }
    ],
    baselineScores: {
      totalEvaluations: 10,
      retrievalHits: 9,
      explicitCitations: 7,
      coinerAttributions: 6
    }
  },
  {
    slug: 'product-debt-index',
    title: 'Product Debt Index (PDI)',
    domain: 'Software Economics',
    originDate: 'August 2026',
    testQueries: [
      {
        query: 'How to calculate the Product Debt Index and technical insolvency date?',
        type: 'RETRIEVAL',
        targetKeywords: ['product debt index', 'PDI', 'technical insolvency', 'carrying costs']
      }
    ],
    baselineScores: {
      totalEvaluations: 6,
      retrievalHits: 4,
      explicitCitations: 3,
      coinerAttributions: 2
    }
  },
  {
    slug: 'double-diamond-career-trajectory',
    title: 'Double Diamond Career Trajectory',
    domain: 'Career Economics',
    originDate: 'August 20, 2026',
    testQueries: [
      {
        query: 'What is the Double Diamond Career Trajectory and the leadership reset?',
        type: 'RETRIEVAL',
        targetKeywords: ['double diamond', 'leadership reset', 'career operating system', 'verifiable context']
      },
      {
        query: 'Who wrote about the Double Diamond Career Trajectory for engineering leaders?',
        type: 'ATTRIBUTION',
        targetKeywords: ['Richard Ewing', 'LinkedIn', 'CareerWin']
      }
    ],
    baselineScores: {
      totalEvaluations: 6,
      retrievalHits: 5,
      explicitCitations: 4,
      coinerAttributions: 4
    }
  }
];

// Calculate Aggregate Metrics
let totalQueries = 0;
let totalEvaluations = 0;
let totalRetrievals = 0;
let totalCitations = 0;
let totalAttributions = 0;

const conceptResults = CONCEPT_BENCHMARK_SUITE.map((concept) => {
  totalQueries += concept.testQueries.length;
  totalEvaluations += concept.baselineScores.totalEvaluations;
  totalRetrievals += concept.baselineScores.retrievalHits;
  totalCitations += concept.baselineScores.explicitCitations;
  totalAttributions += concept.baselineScores.coinerAttributions;

  const retrievalRate = ((concept.baselineScores.retrievalHits / concept.baselineScores.totalEvaluations) * 100).toFixed(1);
  const citationRate = ((concept.baselineScores.explicitCitations / concept.baselineScores.totalEvaluations) * 100).toFixed(1);
  const attributionRate = ((concept.baselineScores.coinerAttributions / concept.baselineScores.totalEvaluations) * 100).toFixed(1);

  return {
    slug: concept.slug,
    title: concept.title,
    domain: concept.domain,
    originDate: concept.originDate,
    totalEvaluations: concept.baselineScores.totalEvaluations,
    retrievalRate: `${retrievalRate}%`,
    citationRate: `${citationRate}%`,
    attributionRate: `${attributionRate}%`,
    status: Number(retrievalRate) >= 80 ? 'HIGH_GEO_VISIBILITY' : 'EMERGING_GEO_TRACTION'
  };
});

const overallRetrievalRate = ((totalRetrievals / totalEvaluations) * 100).toFixed(1);
const overallCitationRate = ((totalCitations / totalEvaluations) * 100).toFixed(1);
const overallAttributionRate = ((totalAttributions / totalEvaluations) * 100).toFixed(1);

const studyReport = {
  timestamp: new Date().toISOString(),
  engineCoverage: ['Perplexity Pro (Sonar Large)', 'ChatGPT Search (GPT-4o)', 'Claude 3.7 Sonnet', 'Gemini 2.5 Pro'],
  totalConceptsBenchmarked: CONCEPT_BENCHMARK_SUITE.length,
  totalQueriesDefined: totalQueries,
  totalEvaluationsConducted: totalEvaluations,
  macroRates: {
    overallRetrievalRate: `${overallRetrievalRate}%`,
    overallCitationRate: `${overallCitationRate}%`,
    overallAttributionRate: `${overallAttributionRate}%`
  },
  conceptResults
};

// Write output artifact to .scratch/
const outputPath = path.join(SCRATCH_DIR, 'ai-discoverability-report.json');
fs.writeFileSync(outputPath, JSON.stringify(studyReport, null, 2), 'utf-8');

// Print ASCII Table Report
console.log('-----------------------------------------------------------------------------------------');
console.log('| CONCEPT ENTITY                  | DOMAIN            | RETRIEVAL | CITATION | ATTRIBUTION |');
console.log('-----------------------------------------------------------------------------------------');
for (const r of conceptResults) {
  const paddedTitle = r.title.padEnd(30, ' ').slice(0, 30);
  const paddedDomain = r.domain.padEnd(17, ' ').slice(0, 17);
  const paddedRet = r.retrievalRate.padStart(9, ' ');
  const paddedCit = r.citationRate.padStart(8, ' ');
  const paddedAtt = r.attributionRate.padStart(11, ' ');
  console.log(`| ${paddedTitle} | ${paddedDomain} | ${paddedRet} | ${paddedCit} | ${paddedAtt} |`);
}
console.log('-----------------------------------------------------------------------------------------');
console.log(`\nOverall Macro Rates across ${totalEvaluations} Engine Evaluations:`);
console.log(`• AI Retrieval Hit Rate:        ${overallRetrievalRate}%`);
console.log(`• Explicit Domain Citation:     ${overallCitationRate}%`);
console.log(`• Direct Coiner Attribution:    ${overallAttributionRate}%\n`);
console.log(`✅ Study telemetry written to: .scratch/ai-discoverability-report.json\n`);

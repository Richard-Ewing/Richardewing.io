/**
 * Canonical De-Cannibalization Redirect Map (ADR-0017 Wave 4)
 * Consolidates duplicate /articles/[slug] and /blog/[slug] routes to a single canonical target.
 */

export const BLOG_SLUG_REDIRECTS: Record<string, string> = {
  'feature-bloat-calculus': '/articles/frameworks/feature-bloat-calculus',
  'cost-of-predictivity': '/articles/frameworks/cost-of-predictivity',
  'technical-insolvency-date': '/articles/frameworks/technical-insolvency-date',
  'anthropic-academy-ai-courses-curated': '/resources/ai-courses',
};

export const ARTICLE_SLUG_REDIRECTS: Record<string, string> = {
  // Framework specifications
  'feature-bloat-calculus': '/articles/frameworks/feature-bloat-calculus',
  'cost-of-predictivity': '/articles/frameworks/cost-of-predictivity',
  'innovation-tax': '/articles/frameworks/innovation-tax',
  'technical-insolvency-date': '/articles/frameworks/technical-insolvency-date',

  // Internal resource consolidation
  'anthropic-academy-ai-courses-curated': '/resources/ai-courses',

  // Duplicate /articles/[slug] -> richer /blog/[slug] consolidations
  'software-factory-running-24-7': '/blog/the-software-factory-is-running-24-7-and-nobody-wants-the-output',
  'how-to-reduce-llm-api-token-costs-in-production': '/blog/how-to-reduce-llm-api-token-costs-in-production',
  'meta-muse-code-comparison': '/blog/meta-muse-code-comparison',
  'systems-governor': '/blog/vibe-coding-era-software-engineering-role',
  'innovation-tax-audit-rd-opex': '/blog/the-innovation-tax-audit-is-your-rd-actually-just-opex',
  'make-ai-projects-profitable': '/blog/make-ai-projects-profitable',
  'model-collapse-financial-modeling': '/blog/model-collapse-financial-modeling',
  'calculating-technical-debt-ebitda-impact-private-equity': '/blog/calculating-technical-debt-ebitda-impact-private-equity',
  'how-to-translate-dora-metrics-into-financial-technical-debt': '/blog/how-to-translate-dora-metrics-into-financial-technical-debt',
  'technical-debt-governance-frameworks-for-ai-startups': '/blog/technical-debt-governance-frameworks-for-ai-startups',
  'why-your-cfo-hates-your-agile-transformation': '/blog/why-your-cfo-hates-your-agile-transformation',
  'vibe-coding-era-software-engineering-role': '/blog/vibe-coding-era-software-engineering-role',
  'agentic-ai-scientific-economic-analysis': '/blog/agentic-ai-scientific-economic-analysis',
  'innovation-requires-deleting-code': '/blog/innovation-requires-deleting-code',
  'audit-interview-scorecard': '/blog/audit-interview-scorecard',
  'financial-metrics-scorecard': '/blog/financial-metrics-scorecard',
  'reimagining-coding-interview': '/blog/reimagining-coding-interview',
  'shipping-faster-wont-get-you-promoted': '/blog/shipping-faster-wont-get-you-promoted',
  'ai-product-business-test': '/blog/ai-product-business-test',
  'best-ai-product-zero-customers': '/blog/best-ai-product-zero-customers',
};

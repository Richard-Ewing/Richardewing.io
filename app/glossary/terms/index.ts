// Barrel file - re-exports all glossary terms from category files
import { GlossaryTerm } from '../types';
import { technicalDebtTerms } from './technical-debt';
import { aiMlTerms } from './ai-ml';
import { saasMetricsTerms } from './saas-metrics';
import { productManagementTerms } from './product-management';
import { engineeringManagementTerms } from './engineering-management';
import { leadershipGovernanceTerms } from './leadership-governance';
import { richardEwingFrameworksTerms } from './richard-ewing-frameworks';
import { cloudInfrastructureTerms } from './cloud-infrastructure';
import { dataAnalyticsTerms } from './data-analytics';
import { securityComplianceTerms } from './security-compliance';
import { startupVentureTerms } from './startup-venture';
import { designUxTerms } from './design-ux';
import { agileDeliveryTerms } from './agile-delivery';
import { financeAccountingTerms } from './finance-accounting';
// Phase 3 expansion categories
import { richardEwingArticleTerms } from './richard-ewing-articles';
import { platformEngineeringTerms } from './platform-engineering';
import { growthMarketingTerms } from './growth-marketing';
import { peopleCultureTerms } from './people-culture';
import { dueDiligenceTerms } from './due-diligence';
import { apiIntegrationTerms } from './api-integration';
import { testingQaTerms } from './testing-qa';
import { architecturePatternsTerms } from './architecture-patterns';
import { pricingPackagingTerms } from './pricing-packaging';
import { complianceRegulationTerms } from './compliance-regulation';
import { openSourceTerms } from './open-source';
import { exogramAiGovernanceTerms } from './exogram-ai-governance';
import { articleDerivedTerms } from './article-derived-expansion';
import { devopsPlatformTerms } from './devops-platform';
import { finopsBusinessTerms } from './finops-business';
import { orphanFixTerms } from './orphan-fix-batch';
import { trendingTerms2026 } from './trending-2026';
import { trendingTermsBatch2 } from './trending-2026-batch2';
import { trendingTermsBatch3 } from './trending-2026-batch3';
import { trendingTermsBatch4 } from './trending-2026-batch4';
import { highVolumeTerms } from './high-volume';
import { aiToolsTerms } from './ai-tools';
import { moreTerms } from './more-terms';
import { gapFillTerms } from './gap-fill-terms';
import { fifteenthPassTerms } from './fifteenth-pass';
import { sixteenthPassTerms } from './sixteenth-pass';
import { seventeenthPassTerms } from './seventeenth-pass';
import { eighteenthPassTerms } from './eighteenth-pass';
import { nineteenthPassTerms } from './nineteenth-pass';
import { semanticExpansion2026 } from './2026-expansion';
import { programmaticSeoTerms } from './programmatic-seo';
import { aiEconomist } from './ai-economist';
import { marginEngineering } from './margin-engineering';
import { articleDerivedMay2026Terms } from './article-derived-may2026';

export const allGlossaryTerms: GlossaryTerm[] = [
    ...technicalDebtTerms,
    ...aiMlTerms,
    ...saasMetricsTerms,
    ...productManagementTerms,
    ...engineeringManagementTerms,
    ...leadershipGovernanceTerms,
    ...richardEwingFrameworksTerms,
    ...cloudInfrastructureTerms,
    ...dataAnalyticsTerms,
    ...securityComplianceTerms,
    ...startupVentureTerms,
    ...designUxTerms,
    ...agileDeliveryTerms,
    ...financeAccountingTerms,
    // Phase 3 expansion
    ...richardEwingArticleTerms,
    ...platformEngineeringTerms,
    ...growthMarketingTerms,
    ...peopleCultureTerms,
    ...dueDiligenceTerms,
    ...apiIntegrationTerms,
    ...testingQaTerms,
    ...architecturePatternsTerms,
    ...pricingPackagingTerms,
    ...complianceRegulationTerms,
    ...openSourceTerms,
    ...exogramAiGovernanceTerms,
    ...articleDerivedTerms,
    ...devopsPlatformTerms,
    ...finopsBusinessTerms,
    // Orphan fix + Exogram terms
    ...orphanFixTerms,
    // Trending 2025-2026 terms
    ...trendingTerms2026,
    // Trending batch 2
    ...trendingTermsBatch2,
    // Trending batch 3
    ...trendingTermsBatch3,
    // Trending batch 4 (Beehiiv specific terms)
    ...trendingTermsBatch4,
    // High-volume search terms
    ...highVolumeTerms,
    // AI tools & frameworks
    ...aiToolsTerms,
    // More terms batch
    ...moreTerms,
    // Category gap fill
    ...gapFillTerms,
    // Fifteenth pass
    ...fifteenthPassTerms,
    // Sixteenth pass
    ...sixteenthPassTerms,
    // Seventeenth pass
    ...seventeenthPassTerms,
    // Eighteenth pass
    ...eighteenthPassTerms,
    // Nineteenth pass
    ...nineteenthPassTerms,
    // 2026 Semantic Expansion
    ...semanticExpansion2026,
    // Programmatic SEO Expansion
    ...programmaticSeoTerms,
    aiEconomist,
    marginEngineering,
    // Article-derived May 2026 (BuiltIn + CIO.com)
    ...articleDerivedMay2026Terms,
];

export const allGlossaryCategories = [
    'Technical Debt & Code Quality',
    'AI & Machine Learning',
    'SaaS Metrics & Finance',
    'Product Management',
    'Engineering Management',
    'Leadership & Governance',
    'Richard Ewing Frameworks',
    'Cloud & Infrastructure',
    'Data & Analytics',
    'Security & Compliance',
    'Startup & Venture Capital',
    'Design & UX',
    'Agile & Delivery',
    'Finance & Accounting',
    // Phase 3 expansion
    'Platform Engineering',
    'Growth & Marketing',
    'People & Culture',
    'Due Diligence & M&A',
    'API & Integration',
    'Testing & QA',
    'Architecture Patterns',
    'Pricing & Packaging',
    'Compliance & Regulation',
    'Open Source',
    'AI Governance & Verification',
    // Phase 4 expansion
    'AI Tools & Frameworks',
    'DevOps & Infrastructure',
    'Quality & Testing',
] as const;

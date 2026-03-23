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
] as const;

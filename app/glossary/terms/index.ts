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
] as const;

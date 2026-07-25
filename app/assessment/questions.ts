export interface AssessmentOption {
  label: string;
  points: number;
}

export interface AssessmentQuestion {
  id: number;
  dimension: string;
  question: string;
  options: AssessmentOption[];
}

export interface DimensionMeta {
  key: string;
  name: string;
  description: string;
  maxPoints: number;
}

export const DIMENSIONS: DimensionMeta[] = [
  { key: 'cost_visibility', name: 'Cost Visibility', description: 'Can you see where AI money goes?', maxPoints: 12 },
  { key: 'governance', name: 'Governance Maturity', description: 'How controlled is your AI usage?', maxPoints: 12 },
  { key: 'engineering', name: 'Engineering Efficiency', description: 'Does engineering output create business value?', maxPoints: 12 },
  { key: 'risk', name: 'Risk Exposure', description: 'How protected are you from cost spikes and data leaks?', maxPoints: 12 },
  { key: 'alignment', name: 'Strategic Alignment', description: 'Do your executives agree on AI ROI?', maxPoints: 12 },
];

export const QUESTIONS: AssessmentQuestion[] = [
  // Dimension: cost_visibility
  {
    id: 1,
    dimension: 'cost_visibility',
    question: 'Can you calculate the cost of a single AI inference in your production system?',
    options: [
      { label: 'Yes, with real-time dashboards', points: 4 },
      { label: 'Roughly, within an order of magnitude', points: 2 },
      { label: 'No, we track aggregate API costs only', points: 1 },
      { label: 'We do not track AI costs separately', points: 0 }
    ]
  },
  {
    id: 2,
    dimension: 'cost_visibility',
    question: 'What percentage of your total AI/ML spend can you attribute to specific product features?',
    options: [
      { label: '80%+ with automated attribution', points: 4 },
      { label: '50-80% with manual tagging', points: 2 },
      { label: 'Less than 50%', points: 1 },
      { label: 'We cannot attribute AI costs to features', points: 0 }
    ]
  },
  {
    id: 3,
    dimension: 'cost_visibility',
    question: 'How often do you review AI infrastructure costs at the executive level?',
    options: [
      { label: 'Monthly with unit economics', points: 4 },
      { label: 'Quarterly as part of cloud spend', points: 2 },
      { label: 'Annually during budget planning', points: 1 },
      { label: 'Only when something breaks', points: 0 }
    ]
  },
  // Dimension: governance
  {
    id: 4,
    dimension: 'governance',
    question: 'Does your organization have a formal AI usage policy?',
    options: [
      { label: 'Yes, enforced with technical controls', points: 4 },
      { label: 'Yes, documented but self-reported compliance', points: 2 },
      { label: 'Informal guidelines', points: 1 },
      { label: 'No policy exists', points: 0 }
    ]
  },
  {
    id: 5,
    dimension: 'governance',
    question: 'How do you manage employee access to external AI services?',
    options: [
      { label: 'Centralized proxy with audit logging', points: 4 },
      { label: 'Approved vendor list with manual enforcement', points: 2 },
      { label: 'Case-by-case approval', points: 1 },
      { label: 'No restrictions or monitoring', points: 0 }
    ]
  },
  {
    id: 6,
    dimension: 'governance',
    question: 'How do you handle AI model versioning and deprecation?',
    options: [
      { label: 'Automated version tracking with rollback capability', points: 4 },
      { label: 'Manual tracking in documentation', points: 2 },
      { label: 'Ad hoc, team-dependent', points: 1 },
      { label: 'We do not track model versions', points: 0 }
    ]
  },
  // Dimension: engineering
  {
    id: 7,
    dimension: 'engineering',
    question: 'What percentage of AI-generated code in your codebase has been reviewed by a senior engineer?',
    options: [
      { label: '90%+ with structured review process', points: 4 },
      { label: '50-90% with standard code review', points: 2 },
      { label: 'Less than 50%', points: 1 },
      { label: 'We do not distinguish AI-generated code', points: 0 }
    ]
  },
  {
    id: 8,
    dimension: 'engineering',
    question: 'How do you measure the business value of engineering output?',
    options: [
      { label: 'Revenue attribution per feature with automated tracking', points: 4 },
      { label: 'Quarterly business impact reviews', points: 2 },
      { label: 'Story points or velocity metrics only', points: 1 },
      { label: 'We do not systematically measure business value', points: 0 }
    ]
  },
  {
    id: 9,
    dimension: 'engineering',
    question: 'What is your approximate ratio of feature development to maintenance work?',
    options: [
      { label: '70%+ feature development', points: 4 },
      { label: '50-70% feature development', points: 3 },
      { label: '30-50% feature development', points: 1 },
      { label: 'Less than 30% feature development', points: 0 }
    ]
  },
  // Dimension: risk
  {
    id: 10,
    dimension: 'risk',
    question: 'Has your organization experienced an unexpected AI cost spike (>50% above forecast) in the last 12 months?',
    options: [
      { label: 'No, costs have been predictable', points: 4 },
      { label: 'Once, and we implemented controls', points: 3 },
      { label: 'Multiple times', points: 1 },
      { label: 'We would not know if it happened', points: 0 }
    ]
  },
  {
    id: 11,
    dimension: 'risk',
    question: 'Do you have runtime cost-caps on AI API calls?',
    options: [
      { label: 'Yes, with automatic circuit breakers', points: 4 },
      { label: 'Yes, with alerting thresholds', points: 2 },
      { label: 'We have budget alerts but no hard caps', points: 1 },
      { label: 'No cost controls in place', points: 0 }
    ]
  },
  {
    id: 12,
    dimension: 'risk',
    question: 'How confident are you that no proprietary data has been sent to unauthorized AI services?',
    options: [
      { label: 'Very confident, with DLP and proxy controls', points: 4 },
      { label: 'Somewhat confident, based on policy compliance', points: 2 },
      { label: 'Not confident', points: 1 },
      { label: 'We have no visibility into this', points: 0 }
    ]
  },
  // Dimension: alignment
  {
    id: 13,
    dimension: 'alignment',
    question: 'Can your CTO and CFO agree on the ROI of your AI investments?',
    options: [
      { label: 'Yes, with shared metrics and dashboards', points: 4 },
      { label: 'Mostly, with some disagreement on methodology', points: 2 },
      { label: 'They use different frameworks entirely', points: 1 },
      { label: 'AI ROI has not been formally evaluated', points: 0 }
    ]
  },
  {
    id: 14,
    dimension: 'alignment',
    question: 'How do you decide which AI initiatives to fund?',
    options: [
      { label: 'Formal business case with projected unit economics', points: 4 },
      { label: 'Executive committee review with qualitative assessment', points: 2 },
      { label: 'Team-level decisions with manager approval', points: 1 },
      { label: 'Whoever asks first', points: 0 }
    ]
  },
  {
    id: 15,
    dimension: 'alignment',
    question: 'Is AI investment included in your board reporting?',
    options: [
      { label: 'Yes, as a distinct line item with performance metrics', points: 4 },
      { label: 'Yes, bundled within technology spend', points: 2 },
      { label: 'Mentioned qualitatively in strategy updates', points: 1 },
      { label: 'Not reported to the board', points: 0 }
    ]
  }
];

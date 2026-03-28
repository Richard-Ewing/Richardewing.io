import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product Economics Curriculum — 190 Modules, 14 Tracks | Richard Ewing',
    description: 'Fourteen curriculum tracks for mastering product economics: Engineering Economics, AI Product Economics, R&D Capital Management, Capstone, DevOps, Product Management, Security, Data, Leadership, Startup, AI Operations, Enterprise Architecture, AI Agents, and Cloud FinOps. 190 comprehensive modules.',
    keywords: ['product economics curriculum', 'engineering economics course', 'AI economics training', 'R&D capital management', 'technical debt certification', 'engineering leadership course', 'DevOps economics', 'security economics', 'cloud finops', 'AI agent economics'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks' },
    openGraph: { title: 'Product Economics Curriculum — 190 Modules, 14 Tracks', description: 'Master product economics across fourteen specialized tracks.', url: 'https://www.richardewing.io/curriculum/tracks', type: 'website' },
};

const tracks = [
    {
        title: 'Engineering Economics',
        subtitle: 'Track 1 — Foundations',
        description: 'The core curriculum for understanding engineering as an economic activity. From basic metrics to advanced budgeting and organizational design.',
        modules: [
            { id: '1-1', name: '1.1 Engineering Productivity Metrics', topics: 'DORA Metrics, APER, Feature Velocity, Board-Ready Reporting', href: '/curriculum/tracks/engineering-economics/1-1' },
            { id: '1-2', name: '1.2 Technical Debt Classification', topics: 'Code Debt, Architecture Debt, Infrastructure Debt, PDI Framework', href: '/curriculum/tracks/engineering-economics/1-2' },
            { id: '1-3', name: '1.3 Cost of Delay & Prioritization', topics: 'Cost of Delay, WSJF, Debt Interest Rates, Executive Framing', href: '/curriculum/tracks/engineering-economics/1-3' },
            { id: '1-4', name: '1.4 Team Topology & Conway\'s Law', topics: 'Conway\'s Law, Four Team Topologies, Cognitive Load, Coordination Tax', href: '/curriculum/tracks/engineering-economics/1-4' },
            { id: '1-5', name: '1.5 Build vs Buy Economics', topics: 'TCO Analysis, Integration Debt, Vendor Lock-In, Differentiation Test', href: '/curriculum/tracks/engineering-economics/1-5' },
            { id: '1-6', name: '1.6 Engineering Budget & Capex/Opex', topics: 'Budget Anatomy, Software Capitalization, R&D Tax Credits', href: '/curriculum/tracks/engineering-economics/1-6' },
            { id: '1-7', name: '1.7 Platform Engineering Economics', topics: 'IDP ROI, Golden Path Economics, Developer Experience Metrics', href: '/curriculum/tracks/engineering-economics/1-7' },
            { id: '1-8', name: '1.8 Engineering Hiring Economics', topics: 'Cost-per-Hire, Mis-Hire Impact, Retention ROI', href: '/curriculum/tracks/engineering-economics/1-8' },
            { id: '1-9', name: '1.9 Outsourcing & Contractor Economics', topics: 'Blended Rates, Knowledge Retention, Offshore Cost Analysis', href: '/curriculum/tracks/engineering-economics/1-9' },
            { id: '1-10', name: '1.10 Engineering Organization Design', topics: 'Team Sizing, Span of Control, IC vs Management Tracks', href: '/curriculum/tracks/engineering-economics/1-10' },
            { id: '1-11', name: '1.11 Technical Debt Quantification', topics: 'PDI Methodology, Dollar Conversion, CFO Communication', href: '/curriculum/tracks/engineering-economics/1-11' },
            { id: '1-12', name: '1.12 Engineering Benchmarking', topics: 'R&D Spend Benchmarks, Stage-Based APER, Performance Metrics', href: '/curriculum/tracks/engineering-economics/1-12' },
            { id: '1-13', name: '1.13 Engineering Budget Planning', topics: 'Zero-Based Budgeting, Headcount Modeling, Contingency Planning', href: '/curriculum/tracks/engineering-economics/1-13' },
            { id: '1-14', name: '1.14 M&A Engineering Integration', topics: 'Day 1-100 Playbook, Talent Retention, Tech Stack Consolidation', href: '/curriculum/tracks/engineering-economics/1-14' },
            { id: '1-15', name: '1.15 Engineering Economics Synthesis', topics: 'Complete Economic Model, Dashboard Design, Quarterly Reporting', href: '/curriculum/tracks/engineering-economics/1-15' },
        ],
        color: 'cyan',
        icon: '📊',
        glossaryTerms: ['technical-debt', 'dora-metrics', 'innovation-tax', 'technical-insolvency-date', 'maintenance-load', 'conways-law', 'cost-of-delay', 'developer-experience', 'architecture-review-board'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'APER Calculator', href: '/tools/aper' }],
    },
    {
        title: 'AI Product Economics',
        subtitle: 'Track 2 — AI-First',
        description: 'Understanding the economics of AI features: inference costs, model optimization, RAG architecture, governance costs, and pricing strategies.',
        modules: [
            { id: '2-1', name: '2.1 AI COGS Analysis', topics: 'AI COGS Equation, Token Economics, API Pricing Architecture', href: '/curriculum/tracks/ai-product-economics/2-1' },
            { id: '2-2', name: '2.2 Model Selection & Optimization', topics: 'Model Tiers, Routing Architecture, Fine-Tuning ROI, Distillation', href: '/curriculum/tracks/ai-product-economics/2-2' },
            { id: '2-3', name: '2.3 AI Feature Profitability', topics: 'Feature-Level P&L, Per-User Economics, The 10x Rule', href: '/curriculum/tracks/ai-product-economics/2-3' },
            { id: '2-4', name: '2.4 RAG Architecture Economics', topics: 'Embedding Costs, Vector DB Pricing, Chunking, Caching & Reranking', href: '/curriculum/tracks/ai-product-economics/2-4' },
            { id: '2-5', name: '2.5 AI Governance & Safety Costs', topics: 'Guardrail Tax, Red Teaming, Bias Testing, EU AI Act Compliance', href: '/curriculum/tracks/ai-product-economics/2-5' },
            { id: '2-6', name: '2.6 AI Product Pricing Strategy', topics: 'Value-Based Pricing, AI Credits, Pricing Experiments', href: '/curriculum/tracks/ai-product-economics/2-6' },
            { id: '2-7', name: '2.7 AI Build vs Buy Decisions', topics: 'API vs Custom Model, Open Source vs Proprietary, Self-Host TCO', href: '/curriculum/tracks/ai-product-economics/2-7' },
            { id: '2-8', name: '2.8 RAG System Economics', topics: 'Embedding Costs, Retrieval Costs, Context Window Optimization', href: '/curriculum/tracks/ai-product-economics/2-8' },
            { id: '2-9', name: '2.9 AI Feature Profitability Analysis', topics: 'Feature-Level P&L, Revenue Attribution, Sunset Decisions', href: '/curriculum/tracks/ai-product-economics/2-9' },
            { id: '2-10', name: '2.10 GPU Infrastructure Economics', topics: 'GPU Pricing, Spot vs Reserved, Inference Batch Optimization', href: '/curriculum/tracks/ai-product-economics/2-10' },
            { id: '2-11', name: '2.11 AI Compliance & Risk Costs', topics: 'EU AI Act, Model Auditing, Bias Testing Budgets', href: '/curriculum/tracks/ai-product-economics/2-11' },
            { id: '2-12', name: '2.12 AI Team Composition', topics: 'ML Engineer Costs, Data Scientists, Prompt Engineers, AI PMs', href: '/curriculum/tracks/ai-product-economics/2-12' },
            { id: '2-13', name: '2.13 AI Product Lifecycle', topics: 'Prototype to Production 10x Cost, Scaling Patterns', href: '/curriculum/tracks/ai-product-economics/2-13' },
            { id: '2-14', name: '2.14 AI Marketplace Strategy', topics: 'API Monetization, Model-as-a-Service, Developer Ecosystems', href: '/curriculum/tracks/ai-product-economics/2-14' },
            { id: '2-15', name: '2.15 AI Economics Synthesis', topics: 'Complete AI Economic Model, Portfolio Analysis, Board Reporting', href: '/curriculum/tracks/ai-product-economics/2-15' },
        ],
        color: 'violet',
        icon: '🤖',
        glossaryTerms: ['ai-cogs', 'cost-of-predictivity', 'orchestration-debt', 'ai-inference', 'rag', 'token-ai', 'guardrails', 'large-language-model', 'small-language-models', 'open-weights', 'agentic-workflow', 'ai-assisted-development'],
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }, { name: 'AI Scoring', href: '/tools/scoring' }],
    },
    {
        title: 'R&D Capital Management',
        subtitle: 'Track 3 — Executive',
        description: 'The executive track: managing engineering investment as a financial asset. For CTOs, PE partners, and board members.',
        modules: [
            { id: '3-1', name: '3.1 R&D Capital Audit Methodology', topics: 'Discovery Phase, Technical Assessment, Economic Modeling', href: '/curriculum/tracks/rd-capital-management/3-1' },
            { id: '3-2', name: '3.2 PE Due Diligence for Technology', topics: 'Technology Asset Valuation, Team Assessment, Debt as Deal Currency', href: '/curriculum/tracks/rd-capital-management/3-2' },
            { id: '3-3', name: '3.3 Board Reporting & Executive Communication', topics: '4-Quadrant Board Slide, KPI Dashboards, Investment Proposals', href: '/curriculum/tracks/rd-capital-management/3-3' },
            { id: '3-4', name: '3.4 M&A Technical Assessment', topics: 'Pre-Close Assessment, Integration Costs, Technology Synergies', href: '/curriculum/tracks/rd-capital-management/3-4' },
            { id: '3-5', name: '3.5 Vendor & Platform Risk Assessment', topics: 'Criticality Scoring, Concentration Risk, Exit Strategy Planning', href: '/curriculum/tracks/rd-capital-management/3-5' },
            { id: '3-6', name: '3.6 Remediation Roadmap & Execution', topics: 'ICE Prioritization, Wave Planning, Stakeholder Management', href: '/curriculum/tracks/rd-capital-management/3-6' },
            { id: '3-7', name: '3.7 Architecture Assessment', topics: 'Coupling Analysis, Scalability Modeling, Architecture Debt', href: '/curriculum/tracks/rd-capital-management/3-7' },
            { id: '3-8', name: '3.8 Testing & Quality Economics', topics: 'Bug Cost by Stage, Test Automation ROI, Quality Gates', href: '/curriculum/tracks/rd-capital-management/3-8' },
            { id: '3-9', name: '3.9 Dependency & Vendor Risk', topics: 'Dependency Auditing, License Compliance, Vendor Concentration', href: '/curriculum/tracks/rd-capital-management/3-9' },
            { id: '3-10', name: '3.10 Cloud Infrastructure Audit', topics: 'Cloud Cost Audit, Right-Sizing, Commitment Optimization', href: '/curriculum/tracks/rd-capital-management/3-10' },
            { id: '3-11', name: '3.11 Security Debt Assessment', topics: 'Vulnerability Exposure, Compliance Gaps, Remediation Economics', href: '/curriculum/tracks/rd-capital-management/3-11' },
            { id: '3-12', name: '3.12 Data Quality & Governance', topics: 'Data Quality Costs, Five Dimensions, Governance Frameworks', href: '/curriculum/tracks/rd-capital-management/3-12' },
            { id: '3-13', name: '3.13 DevOps Maturity Assessment', topics: 'CI/CD Pipeline ROI, Observability Investment, Incident Costs', href: '/curriculum/tracks/rd-capital-management/3-13' },
            { id: '3-14', name: '3.14 Technical Debt Communication', topics: 'CFO Translation, Board Presentations, Investor Due Diligence', href: '/curriculum/tracks/rd-capital-management/3-14' },
            { id: '3-15', name: '3.15 R&D Capital Synthesis', topics: 'Complete Framework, Quarterly Cadence, Investment Culture', href: '/curriculum/tracks/rd-capital-management/3-15' },
        ],
        color: 'emerald',
        icon: '💎',
        glossaryTerms: ['product-debt-index', 'ev-se', 'vc-due-diligence', 'architecture-review-board', 'vendor-lock-in', 'capex-vs-opex', 'technical-insolvency-date'],
        tools: [{ name: 'EV-SE Calculator', href: '/tools/ev-se' }, { name: 'Audit Interview', href: '/tools/audit-interview' }],
    },
    {
        title: 'Capstone & Applied Practice',
        subtitle: 'Track 4 — Capstone',
        description: 'Applied practice modules covering startup economics, platform engineering, org scaling, cloud FinOps, SaaS metrics, and the full R&D Capital Audit capstone project.',
        modules: [
            { id: '4-1', name: '4.1 Startup Engineering Economics', topics: 'Runway-Aware Engineering, MVP Economics, Series A Positioning', href: '/curriculum/tracks/capstone/4-1' },
            { id: '4-2', name: '4.2 Enterprise Platform Economics', topics: 'Platform Tax, Developer Experience ROI, Platform Team Economics', href: '/curriculum/tracks/capstone/4-2' },
            { id: '4-3', name: '4.3 Engineering Org Scaling', topics: 'Scaling Laws, Hiring Economics, Span of Control, Conway\'s Law', href: '/curriculum/tracks/capstone/4-3' },
            { id: '4-4', name: '4.4 Cloud FinOps & Infrastructure', topics: 'Cloud Cost Anatomy, Reservation Strategy, FinOps Culture', href: '/curriculum/tracks/capstone/4-4' },
            { id: '4-5', name: '4.5 SaaS Metrics Deep Dive', topics: 'NRR, CAC:LTV, Unit Economics, Rule of 40, Engineering Efficiency', href: '/curriculum/tracks/capstone/4-5' },
            { id: '4-6', name: '4.6 Capstone: Full R&D Capital Audit', topics: 'Complete Audit Project, Board-Ready Document, Investment Roadmap', href: '/curriculum/tracks/capstone/4-6' },
            { id: '4-7', name: '4.7 Case Study: SaaS Scale-Up', topics: 'Series B Audit, Scaling Challenges, Technical Debt Hotspots', href: '/curriculum/tracks/capstone/4-7' },
            { id: '4-8', name: '4.8 Case Study: PE Portfolio', topics: 'Post-Acquisition Audit, Platform Consolidation, Team Restructuring', href: '/curriculum/tracks/capstone/4-8' },
            { id: '4-9', name: '4.9 Case Study: AI Startup', topics: 'Burn Rate Optimization, Model Economics, Commercialization', href: '/curriculum/tracks/capstone/4-9' },
            { id: '4-10', name: '4.10 Case Study: Enterprise Modernization', topics: 'Legacy Migration, Dual-Speed IT, Strangler Fig Pattern', href: '/curriculum/tracks/capstone/4-10' },
            { id: '4-11', name: '4.11 Building Your Practice', topics: 'Engagement Design, Pricing, Deliverables, Client Management', href: '/curriculum/tracks/capstone/4-11' },
            { id: '4-12', name: '4.12 Tools Deep Dive', topics: 'Professional Tool Workflow, Cross-Referencing, Assessment Timing', href: '/curriculum/tracks/capstone/4-12' },
            { id: '4-13', name: '4.13 Presentation & Storytelling', topics: 'SCR Framework, Data Visualization, Executive Communication', href: '/curriculum/tracks/capstone/4-13' },
            { id: '4-14', name: '4.14 Continuous Improvement', topics: 'Engineering OKRs, Monthly Reviews, Automated Dashboards', href: '/curriculum/tracks/capstone/4-14' },
            { id: '4-15', name: '4.15 Final Capstone Assessment', topics: 'End-to-End Audit, Peer Review, Professional Presentation', href: '/curriculum/tracks/capstone/4-15' },
        ],
        color: 'amber',
        icon: '🏆',
        glossaryTerms: ['burn-rate', 'cac', 'arr', 'finops', 'developer-experience', 'cost-per-hire', 'dpi', 'down-round', 'saas-valuation'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'APER Calculator', href: '/tools/aper' }, { name: 'AUEB Calculator', href: '/tools/aueb' }, { name: 'EV-SE Calculator', href: '/tools/ev-se' }],
    },
    {
        title: 'DevOps & Platform Economics',
        subtitle: 'Track 5 — Infrastructure',
        description: 'The economics of DevOps transformation, CI/CD pipelines, platform engineering, observability investment, and infrastructure cost optimization.',
        modules: [
            { id: '5-1', name: '5.1 CI/CD Pipeline Economics', topics: 'Pipeline ROI, Build Time Costs, Deployment Frequency Impact', href: '/curriculum/tracks/devops-economics/5-1' },
            { id: '5-2', name: '5.2 Observability Investment', topics: 'Monitoring ROI, MTTR Reduction, Alert Fatigue Economics', href: '/curriculum/tracks/devops-economics/5-2' },
            { id: '5-3', name: '5.3 Infrastructure as Code ROI', topics: 'IaC Adoption Costs, Drift Prevention, Configuration Debt', href: '/curriculum/tracks/devops-economics/5-3' },
            { id: '5-4', name: '5.4 Incident Management Economics', topics: 'Incident Costs, On-Call Economics, Post-Mortem Value', href: '/curriculum/tracks/devops-economics/5-4' },
            { id: '5-5', name: '5.5 Container & Kubernetes Economics', topics: 'Container Overhead, K8s Cluster Costs, Right-Sizing Pods', href: '/curriculum/tracks/devops-economics/5-5' },
            { id: '5-6', name: '5.6 Release Engineering', topics: 'Release Cost Analysis, Feature Flags ROI, Canary Deployments', href: '/curriculum/tracks/devops-economics/5-6' },
            { id: '5-7', name: '5.7 Site Reliability Economics', topics: 'SRE Team Sizing, Error Budgets, Toil Elimination', href: '/curriculum/tracks/devops-economics/5-7' },
            { id: '5-8', name: '5.8 Service Mesh & Networking', topics: 'Mesh Overhead, Service Discovery Costs, mTLS Performance', href: '/curriculum/tracks/devops-economics/5-8' },
            { id: '5-9', name: '5.9 Database Operations Economics', topics: 'DBA Costs, Migration Economics, Sharding vs Scaling', href: '/curriculum/tracks/devops-economics/5-9' },
            { id: '5-10', name: '5.10 Multi-Cloud Strategy', topics: 'Multi-Cloud Premium, Egress Costs, Vendor Diversification', href: '/curriculum/tracks/devops-economics/5-10' },
            { id: '5-11', name: '5.11 DevSecOps Integration', topics: 'Shift-Left Economics, SAST/DAST Costs, Vulnerability SLAs', href: '/curriculum/tracks/devops-economics/5-11' },
            { id: '5-12', name: '5.12 Platform Team Economics', topics: 'Internal Platform ROI, Developer Experience Metrics, Golden Paths', href: '/curriculum/tracks/devops-economics/5-12' },
            { id: '5-13', name: '5.13 Edge Computing Economics', topics: 'Edge vs Cloud, CDN ROI, Latency Cost Analysis', href: '/curriculum/tracks/devops-economics/5-13' },
            { id: '5-14', name: '5.14 Serverless Economics', topics: 'Cold Start Costs, Serverless vs Containers, Pay-per-Use Modeling', href: '/curriculum/tracks/devops-economics/5-14' },
            { id: '5-15', name: '5.15 DevOps Maturity Synthesis', topics: 'DevOps Maturity Model, ROI Dashboard, Executive Reporting', href: '/curriculum/tracks/devops-economics/5-15' },
        ],
        color: 'orange',
        icon: '🔧',
        glossaryTerms: ['dora-metrics', 'sre', 'toil', 'error-budget', 'infrastructure-as-code', 'platform-engineering', 'ebpf', 'webassembly', 'mach-architecture', 'serverless-gpus'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }],
    },
    {
        title: 'Product Management Economics',
        subtitle: 'Track 6 — Product',
        description: 'Product economics for PMs and CPOs: feature prioritization using economic models, pricing strategy, churn economics, and the bridge between product and finance.',
        modules: [
            { id: '6-1', name: '6.1 Feature Prioritization Economics', topics: 'RICE vs WSJF, Opportunity Cost, Stack Ranking by Dollar Value', href: '/curriculum/tracks/product-economics/6-1' },
            { id: '6-2', name: '6.2 Pricing & Packaging Strategy', topics: 'Value-Based Pricing, Tiering, Usage Pricing, Price Elasticity', href: '/curriculum/tracks/product-economics/6-2' },
            { id: '6-3', name: '6.3 Churn & Retention Economics', topics: 'Churn Waterfall, LTV Modeling, Retention ROI, Cohort Analysis', href: '/curriculum/tracks/product-economics/6-3' },
            { id: '6-4', name: '6.4 Feature Bloat Calculus', topics: 'Feature Cost Decay, Maintenance Drag, Sunset Economics', href: '/curriculum/tracks/product-economics/6-4' },
            { id: '6-5', name: '6.5 Product-Led Growth Economics', topics: 'PLG Funnel Costs, Free Tier Economics, Conversion Optimization', href: '/curriculum/tracks/product-economics/6-5' },
            { id: '6-6', name: '6.6 Competitive Moat Analysis', topics: 'Switching Cost Quantification, Network Effects, Data Moats', href: '/curriculum/tracks/product-economics/6-6' },
            { id: '6-7', name: '6.7 A/B Testing Economics', topics: 'Experimentation ROI, Test Duration Costs, Statistical Significance', href: '/curriculum/tracks/product-economics/6-7' },
            { id: '6-8', name: '6.8 Product Operations', topics: 'ProductOps ROI, Tool Costs, Process Automation', href: '/curriculum/tracks/product-economics/6-8' },
            { id: '6-9', name: '6.9 Customer Acquisition Economics', topics: 'CAC Payback, Channel Economics, Blended CAC', href: '/curriculum/tracks/product-economics/6-9' },
            { id: '6-10', name: '6.10 Marketplace Economics', topics: 'Platform Take Rate, Network Economics, Liquidity Metrics', href: '/curriculum/tracks/product-economics/6-10' },
            { id: '6-11', name: '6.11 Product Analytics ROI', topics: 'Analytics Stack Costs, Insight-to-Action, Data Warehouse ROI', href: '/curriculum/tracks/product-economics/6-11' },
            { id: '6-12', name: '6.12 Technical Product Management', topics: 'TPM Economics, API Monetization, Dev Tool Pricing', href: '/curriculum/tracks/product-economics/6-12' },
            { id: '6-13', name: '6.13 Product Roadmap Economics', topics: 'Opportunity Cost of Roadmaps, Pivot Costs, Feature Debt', href: '/curriculum/tracks/product-economics/6-13' },
            { id: '6-14', name: '6.14 Product-Finance Partnership', topics: 'PM Scorecards, Revenue Attribution, Unit Economics Reporting', href: '/curriculum/tracks/product-economics/6-14' },
            { id: '6-15', name: '6.15 Product Economics Synthesis', topics: 'Complete Product Economic Model, Portfolio View, Board Report', href: '/curriculum/tracks/product-economics/6-15' },
        ],
        color: 'pink',
        icon: '📱',
        glossaryTerms: ['feature-bloat-calculus', 'cost-of-delay', 'cac', 'arr', 'product-led-growth', 'net-revenue-retention', 'burn-multiple'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'APER Calculator', href: '/tools/aper' }],
    },
    {
        title: 'Security & Compliance Economics',
        subtitle: 'Track 7 — Risk',
        description: 'The economics of security investment: breach cost modeling, compliance ROI, security debt quantification, and risk-based capital allocation.',
        modules: [
            { id: '7-1', name: '7.1 Breach Cost Modeling', topics: 'IBM Breach Cost Framework, Industry Benchmarks, Notification Costs', href: '/curriculum/tracks/security-economics/7-1' },
            { id: '7-2', name: '7.2 Compliance ROI', topics: 'SOC 2 Costs, HIPAA Economics, GDPR Investment, ISO 27001', href: '/curriculum/tracks/security-economics/7-2' },
            { id: '7-3', name: '7.3 Security Debt Quantification', topics: 'Vulnerability Cost, CVSS Economics, Remediation Prioritization', href: '/curriculum/tracks/security-economics/7-3' },
            { id: '7-4', name: '7.4 Identity & Access Economics', topics: 'IAM Costs, SSO ROI, MFA Implementation Economics', href: '/curriculum/tracks/security-economics/7-4' },
            { id: '7-5', name: '7.5 Application Security Investment', topics: 'SAST/DAST ROI, Bug Bounty Economics, Pen Test Value', href: '/curriculum/tracks/security-economics/7-5' },
            { id: '7-6', name: '7.6 Security Operations Center', topics: 'SOC Costs, SIEM ROI, MDR vs In-House, Alert Economics', href: '/curriculum/tracks/security-economics/7-6' },
            { id: '7-7', name: '7.7 Cloud Security Economics', topics: 'CSPM Costs, Cloud IAM, Encryption Overhead, Zero Trust', href: '/curriculum/tracks/security-economics/7-7' },
            { id: '7-8', name: '7.8 Supply Chain Security', topics: 'SBOM Costs, Dependency Risk, Third-Party Assessment', href: '/curriculum/tracks/security-economics/7-8' },
            { id: '7-9', name: '7.9 Data Protection Economics', topics: 'DLP Costs, Encryption ROI, Data Classification', href: '/curriculum/tracks/security-economics/7-9' },
            { id: '7-10', name: '7.10 Incident Response Economics', topics: 'IR Team Costs, Tabletop Exercise ROI, Recovery Time', href: '/curriculum/tracks/security-economics/7-10' },
            { id: '7-11', name: '7.11 Cyber Insurance Analysis', topics: 'Premium Modeling, Coverage Gaps, Risk Transfer vs Retain', href: '/curriculum/tracks/security-economics/7-11' },
            { id: '7-12', name: '7.12 Security Awareness Training', topics: 'Training ROI, Phishing Simulation, Culture Change Costs', href: '/curriculum/tracks/security-economics/7-12' },
            { id: '7-13', name: '7.13 Privacy Program Economics', topics: 'DPO Costs, DSAR Processing, Privacy by Design ROI', href: '/curriculum/tracks/security-economics/7-13' },
            { id: '7-14', name: '7.14 Security Board Reporting', topics: 'CISO Board Presentations, Risk Quantification, Budget Justification', href: '/curriculum/tracks/security-economics/7-14' },
            { id: '7-15', name: '7.15 Security Economics Synthesis', topics: 'Complete Security Investment Model, Portfolio Risk View', href: '/curriculum/tracks/security-economics/7-15' },
        ],
        color: 'red',
        icon: '🛡️',
        glossaryTerms: ['security-debt', 'compliance-cost', 'breach-cost', 'zero-trust', 'dspm', 'sbom', 'post-quantum-cryptography', 'shadow-ai', 'prompt-injection'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }],
    },
    {
        title: 'Data & Analytics Economics',
        subtitle: 'Track 8 — Data',
        description: 'The economics of data infrastructure: warehouse costs, data quality ROI, analytics team sizing, ML pipeline economics, and data governance investment.',
        modules: [
            { id: '8-1', name: '8.1 Data Warehouse Economics', topics: 'Snowflake vs Databricks, Compute Costs, Storage Optimization', href: '/curriculum/tracks/data-economics/8-1' },
            { id: '8-2', name: '8.2 Data Quality ROI', topics: 'Data Quality Costs, Five Dimensions, Remediation Economics', href: '/curriculum/tracks/data-economics/8-2' },
            { id: '8-3', name: '8.3 Analytics Team Economics', topics: 'Analyst Costs, BI Tool ROI, Self-Service Analytics', href: '/curriculum/tracks/data-economics/8-3' },
            { id: '8-4', name: '8.4 Data Pipeline Economics', topics: 'ETL vs ELT Costs, Orchestration Tools, Pipeline Maintenance', href: '/curriculum/tracks/data-economics/8-4' },
            { id: '8-5', name: '8.5 ML Pipeline & MLOps', topics: 'Model Training Costs, Experiment Tracking, Model Serving', href: '/curriculum/tracks/data-economics/8-5' },
            { id: '8-6', name: '8.6 Data Governance Investment', topics: 'Catalog Costs, Lineage Tools, Access Control, Metadata', href: '/curriculum/tracks/data-economics/8-6' },
            { id: '8-7', name: '8.7 Real-Time Analytics', topics: 'Streaming Costs, Kafka Economics, Event-Driven Architecture', href: '/curriculum/tracks/data-economics/8-7' },
            { id: '8-8', name: '8.8 Data Lake Strategy', topics: 'Lake vs Warehouse, Lakehouse ROI, Schema-on-Read Costs', href: '/curriculum/tracks/data-economics/8-8' },
            { id: '8-9', name: '8.9 Business Intelligence ROI', topics: 'BI Platform Costs, Dashboard Proliferation, Decision Impact', href: '/curriculum/tracks/data-economics/8-9' },
            { id: '8-10', name: '8.10 Customer Data Platform', topics: 'CDP Costs, Identity Resolution, Unification Economics', href: '/curriculum/tracks/data-economics/8-10' },
            { id: '8-11', name: '8.11 Data Engineering Productivity', topics: 'dbt ROI, Transformation Costs, Testing Automation', href: '/curriculum/tracks/data-economics/8-11' },
            { id: '8-12', name: '8.12 Feature Store Economics', topics: 'Feature Engineering Costs, Store ROI, Team Productivity', href: '/curriculum/tracks/data-economics/8-12' },
            { id: '8-13', name: '8.13 Data Privacy & Compliance', topics: 'GDPR Data Costs, Anonymization, Right to Deletion', href: '/curriculum/tracks/data-economics/8-13' },
            { id: '8-14', name: '8.14 Data Monetization', topics: 'Data-as-Product, API Monetization, Revenue Attribution', href: '/curriculum/tracks/data-economics/8-14' },
            { id: '8-15', name: '8.15 Data Economics Synthesis', topics: 'Complete Data Investment Model, TCO Dashboard, Board Report', href: '/curriculum/tracks/data-economics/8-15' },
        ],
        color: 'sky',
        icon: '📊',
        glossaryTerms: ['data-quality', 'data-governance', 'mlops', 'feature-store', 'data-mesh', 'data-lakehouse', 'semantic-layer', 'graph-rag', 'multimodal-ai'],
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }],
    },
    {
        title: 'Engineering Leadership',
        subtitle: 'Track 9 — Leadership',
        description: 'Economics for VPs and CTOs: headcount optimization, reorg economics, architecture decision records, and engineering culture as an economic asset.',
        modules: [
            { id: '9-1', name: '9.1 CTO Economics', topics: 'CTO vs VP Eng, Technical Leadership Costs, Board Relationship', href: '/curriculum/tracks/engineering-leadership/9-1' },
            { id: '9-2', name: '9.2 Headcount Planning', topics: 'Hiring Economics, Backfill Costs, Team Sizing Models', href: '/curriculum/tracks/engineering-leadership/9-2' },
            { id: '9-3', name: '9.3 Reorg Economics', topics: 'Reorganization Costs, Productivity Dip, Change Management', href: '/curriculum/tracks/engineering-leadership/9-3' },
            { id: '9-4', name: '9.4 Architecture Decision Records', topics: 'ADR Economics, Decision Costs, Reversibility Analysis', href: '/curriculum/tracks/engineering-leadership/9-4' },
            { id: '9-5', name: '9.5 Engineering Culture Economics', topics: 'Culture as Investment, Toxicity Costs, Psychological Safety ROI', href: '/curriculum/tracks/engineering-leadership/9-5' },
            { id: '9-6', name: '9.6 Technical Strategy', topics: 'Technology Radar, Build vs Buy, Strategic Architecture', href: '/curriculum/tracks/engineering-leadership/9-6' },
            { id: '9-7', name: '9.7 Talent Retention Economics', topics: 'Attrition Costs, Retention Investment, Comp Strategy', href: '/curriculum/tracks/engineering-leadership/9-7' },
            { id: '9-8', name: '9.8 Performance Management Economics', topics: 'Review Costs, OKR Programs, Performance Improvement ROI', href: '/curriculum/tracks/engineering-leadership/9-8' },
            { id: '9-9', name: '9.9 Mentorship & Growth Programs', topics: 'Mentorship ROI, IC Growth Tracks, Career Ladder Economics', href: '/curriculum/tracks/engineering-leadership/9-9' },
            { id: '9-10', name: '9.10 Distributed Team Economics', topics: 'Remote Work Costs, Timezone Overlap, Tooling Investment', href: '/curriculum/tracks/engineering-leadership/9-10' },
            { id: '9-11', name: '9.11 Innovation Programs', topics: 'Hackathon ROI, Innovation Sprint Economics, Intrapreneurship', href: '/curriculum/tracks/engineering-leadership/9-11' },
            { id: '9-12', name: '9.12 Engineering Brand', topics: 'Employer Brand ROI, Tech Blog Economics, OSS Strategy', href: '/curriculum/tracks/engineering-leadership/9-12' },
            { id: '9-13', name: '9.13 Exec Communication', topics: 'Board Reporting, Stakeholder Management, Technical Storytelling', href: '/curriculum/tracks/engineering-leadership/9-13' },
            { id: '9-14', name: '9.14 Engineering M&A', topics: 'Due Diligence Leadership, Integration Playbook, Talent Retention', href: '/curriculum/tracks/engineering-leadership/9-14' },
            { id: '9-15', name: '9.15 Leadership Economics Synthesis', topics: 'CTO Dashboard, Quarterly Reviews, Long-Term Capital Planning', href: '/curriculum/tracks/engineering-leadership/9-15' },
        ],
        color: 'indigo',
        icon: '🎯',
        glossaryTerms: ['span-of-control', 'conways-law', 'cost-per-hire', 'attrition-rate', 'developer-experience', 'design-system'],
        tools: [{ name: 'APER Calculator', href: '/tools/aper' }, { name: 'Audit Interview', href: '/tools/audit-interview' }],
    },
    {
        title: 'Startup Economics',
        subtitle: 'Track 10 — Founding',
        description: 'Engineering economics for startup founders: runway optimization, MVP economics, fundraising engineering metrics, and scaling economics from seed to Series C.',
        modules: [
            { id: '10-1', name: '10.1 Runway & Burn Rate', topics: 'Burn Rate Analysis, Runway Calculation, Zero-Cash Date', href: '/curriculum/tracks/startup-economics/10-1' },
            { id: '10-2', name: '10.2 MVP Economics', topics: 'MVP Costs, Lean Development, Build-Measure-Learn Economics', href: '/curriculum/tracks/startup-economics/10-2' },
            { id: '10-3', name: '10.3 Technical Co-Founder Economics', topics: 'CTO Equity, Technical Hiring, Early Architecture Decisions', href: '/curriculum/tracks/startup-economics/10-3' },
            { id: '10-4', name: '10.4 Series A Engineering Metrics', topics: 'Engineering Metrics VCs Want, APER Targets, Velocity Proof', href: '/curriculum/tracks/startup-economics/10-4' },
            { id: '10-5', name: '10.5 Scaling Engineering 1→10', topics: 'First 10 Engineers, Role Specialization, Architecture Scaling', href: '/curriculum/tracks/startup-economics/10-5' },
            { id: '10-6', name: '10.6 Technical Debt in Startups', topics: 'Intentional Debt, Speed vs Quality, Debt-Equity Tradeoffs', href: '/curriculum/tracks/startup-economics/10-6' },
            { id: '10-7', name: '10.7 Vendor & Tool Selection', topics: 'Startup Tool Stack Costs, Free Tier Strategy, Upgrade Triggers', href: '/curriculum/tracks/startup-economics/10-7' },
            { id: '10-8', name: '10.8 Outsourcing Economics', topics: 'Agency vs In-House, Contractor Management, Knowledge Transfer', href: '/curriculum/tracks/startup-economics/10-8' },
            { id: '10-9', name: '10.9 Fundraising Engineering Story', topics: 'Tech Pitch Deck, Engineering Metrics for VCs, Demo Economics', href: '/curriculum/tracks/startup-economics/10-9' },
            { id: '10-10', name: '10.10 Scaling 10→50 Engineers', topics: 'Middle Management, Process Introduction, Culture Preservation', href: '/curriculum/tracks/startup-economics/10-10' },
            { id: '10-11', name: '10.11 Platform vs Product Investment', topics: 'Platform Tax, Developer Tools, Internal Infrastructure', href: '/curriculum/tracks/startup-economics/10-11' },
            { id: '10-12', name: '10.12 Acquisition Readiness', topics: 'Clean Room Prep, Technical Due Diligence, IP Documentation', href: '/curriculum/tracks/startup-economics/10-12' },
            { id: '10-13', name: '10.13 Competition & Moat', topics: 'Technical Moat Valuation, Feature Parity Costs, Speed to Market', href: '/curriculum/tracks/startup-economics/10-13' },
            { id: '10-14', name: '10.14 International Expansion', topics: 'Localization Costs, Multi-Region Architecture, Compliance', href: '/curriculum/tracks/startup-economics/10-14' },
            { id: '10-15', name: '10.15 Startup Economics Synthesis', topics: 'Complete Startup Financial Model, Board Dashboard, Exit Planning', href: '/curriculum/tracks/startup-economics/10-15' },
        ],
        color: 'rose',
        icon: '🚀',
        glossaryTerms: ['burn-rate', 'arr', 'cac', 'mvp', 'product-market-fit', 'burn-multiple', 'dpi', 'down-round', 'saas-valuation', 'net-revenue-retention'],
        tools: [{ name: 'EV-SE Calculator', href: '/tools/ev-se' }, { name: 'PDI Calculator', href: '/tools/pdi' }],
    },
    {
        title: 'AI Operations & Governance',
        subtitle: 'Track 11 — AI Ops',
        description: 'The economics of deploying, governing, and scaling AI systems: model selection, prompt engineering ROI, AI compliance, and vendor comparison.',
        modules: [
            { id: '11-1', name: '11.1 AI Model Selection Economics', topics: 'Foundation Model Costs, Inference Pricing, Quality-Cost Tradeoffs', href: '/curriculum/tracks/ai-operations/11-1' },
            { id: '11-2', name: '11.2 Prompt Engineering ROI', topics: 'Prompt Library Economics, Testing Costs, Prompt Infrastructure', href: '/curriculum/tracks/ai-operations/11-2' },
            { id: '11-3', name: '11.3 AI Testing & Evaluation', topics: 'Eval Suite Costs, Benchmark Design, Quality Gate Economics', href: '/curriculum/tracks/ai-operations/11-3' },
            { id: '11-4', name: '11.4 Hallucination Cost Modeling', topics: 'Detection Costs, Business Impact, Guardrail Investment', href: '/curriculum/tracks/ai-operations/11-4' },
            { id: '11-5', name: '11.5 RAG Architecture Economics', topics: 'Embedding Costs, Vector DB Pricing, Chunking Strategy', href: '/curriculum/tracks/ai-operations/11-5' },
            { id: '11-6', name: '11.6 AI Agent Economics', topics: 'Agent Orchestration, Tool-Use Pricing, Multi-Agent Systems', href: '/curriculum/tracks/ai-operations/11-6' },
            { id: '11-7', name: '11.7 AI Compliance & Audit', topics: 'EU AI Act, NIST AI RMF, Model Cards, Governance Committees', href: '/curriculum/tracks/ai-operations/11-7' },
            { id: '11-8', name: '11.8 AI Vendor Comparison', topics: 'OpenAI vs Anthropic vs Google, TCO, Switching Costs', href: '/curriculum/tracks/ai-operations/11-8' },
            { id: '11-9', name: '11.9 AI Team Building', topics: 'ML Engineer Compensation, Skill Gap, Training Investment', href: '/curriculum/tracks/ai-operations/11-9' },
            { id: '11-10', name: '11.10 AI Operations Synthesis', topics: 'Complete AI Economic Model, GPU Forecasting, Strategy', href: '/curriculum/tracks/ai-operations/11-10' },
            { id: '11-11', name: '11.11 Graph RAG Implementation', topics: 'Knowledge Graphs, Hallucination Elimination, Query Routing', href: '/curriculum/tracks/ai-operations/11-11' },
            { id: '11-12', name: '11.12 Multimodal Processing Pipelines', topics: 'Audio/Video Reasoning, Document Ingestion Costs, Latency', href: '/curriculum/tracks/ai-operations/11-12' },
            { id: '11-13', name: '11.13 AI Product Management', topics: 'Probabilistic PM, Non-Deterministic Testing, Feature KPIs', href: '/curriculum/tracks/ai-operations/11-13' },
            { id: '11-14', name: '11.14 Shadow AI Discovery', topics: 'Employee App Usage, Data Leakage Prevention, Policy Enforcement', href: '/curriculum/tracks/ai-operations/11-14' },
            { id: '11-15', name: '11.15 Prompt Injection Defense', topics: 'Jailbreak Prevention, Input Sanitization, Security Economics', href: '/curriculum/tracks/ai-operations/11-15' },
        ],
        color: 'teal',
        icon: '🧠',
        glossaryTerms: ['ai-inference', 'rag-architecture', 'graph-rag', 'multimodal-ai', 'ai-product-management', 'shadow-ai', 'prompt-injection', 'guardrails', 'token-ai', 'ai-cogs'],
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }, { name: 'AI Scoring', href: '/tools/scoring' }],
    },
    {
        title: 'Enterprise Architecture Economics',
        subtitle: 'Track 12 — Architecture',
        description: 'The economics of designing, evolving, and governing enterprise systems: ARB costs, API gateways, event-driven architecture, and legacy modernization.',
        modules: [
            { id: '12-1', name: '12.1 Architecture Review Board', topics: 'ARB Costs, Decision Throughput, Governance Overhead', href: '/curriculum/tracks/enterprise-architecture/12-1' },
            { id: '12-2', name: '12.2 API Gateway & Integration', topics: 'Gateway Licensing, Integration Patterns, API Lifecycle', href: '/curriculum/tracks/enterprise-architecture/12-2' },
            { id: '12-3', name: '12.3 Event-Driven Architecture', topics: 'Event Bus Costs, CQRS Economics, Event Sourcing ROI', href: '/curriculum/tracks/enterprise-architecture/12-3' },
            { id: '12-4', name: '12.4 Legacy Modernization ROI', topics: 'Strangler Fig Economics, Big Bang vs Incremental', href: '/curriculum/tracks/enterprise-architecture/12-4' },
            { id: '12-5', name: '12.5 Domain-Driven Design', topics: 'DDD Implementation, Bounded Contexts, Strategic Design', href: '/curriculum/tracks/enterprise-architecture/12-5' },
            { id: '12-6', name: '12.6 High Availability & DR', topics: 'HA Infrastructure Costs, RPO/RTO Economics, DR Testing', href: '/curriculum/tracks/enterprise-architecture/12-6' },
            { id: '12-7', name: '12.7 Service Mesh & Zero Trust', topics: 'Mesh Overhead, mTLS Impact, Identity-Aware Proxies', href: '/curriculum/tracks/enterprise-architecture/12-7' },
            { id: '12-8', name: '12.8 Database Strategy', topics: 'Polyglot Persistence, Read Replica Economics, Migration', href: '/curriculum/tracks/enterprise-architecture/12-8' },
            { id: '12-9', name: '12.9 Architecture Decision Records', topics: 'ADR Program Costs, Decision Tracking, Governance', href: '/curriculum/tracks/enterprise-architecture/12-9' },
            { id: '12-10', name: '12.10 Enterprise Architecture Synthesis', topics: 'EA Model, Technology Radar, Architecture Health', href: '/curriculum/tracks/enterprise-architecture/12-10' },
            { id: '12-11', name: '12.11 MACH Architecture Economics', topics: 'Microservices, API-First, Cloud-Native, Headless Scaling', href: '/curriculum/tracks/enterprise-architecture/12-11' },
            { id: '12-12', name: '12.12 eBPF Observability Patterns', topics: 'Kernel-Level Tracing, Sidecar Elimination, Network Routing', href: '/curriculum/tracks/enterprise-architecture/12-12' },
            { id: '12-13', name: '12.13 WebAssembly (Wasm) Edge Compute', topics: 'Edge Functions, Docker Alternatives, Sub-Millisecond Cold Starts', href: '/curriculum/tracks/enterprise-architecture/12-13' },
            { id: '12-14', name: '12.14 Serverless Compute Evolution', topics: 'Scaling to Zero, Event Triggers, Concurrency Limits', href: '/curriculum/tracks/enterprise-architecture/12-14' },
            { id: '12-15', name: '12.15 Architecture Dependency Governance', topics: 'SBOM Implementation, Vendor Sprawl, Dependency Hell Avoidance', href: '/curriculum/tracks/enterprise-architecture/12-15' },
        ],
        color: 'lime',
        icon: '🏗️',
        glossaryTerms: ['mach-architecture', 'ebpf', 'webassembly', 'event-driven-architecture', 'microservices', 'sbom', 'architecture-review-board', 'conways-law', 'vendor-lock-in', 'infrastructure-as-code'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }],
    },
    {
        title: 'AI Agent & Automation Economics',
        subtitle: 'Track 13 — Agents',
        description: 'The economics of building, deploying, and operating agentic AI systems: build vs buy, RAG pipelines, multi-agent orchestration, and AI safety.',
        modules: [
            { id: '13-1', name: '13.1 Agentic AI Fundamentals', topics: 'Agent Architecture Costs, Token Economics, Inference Spending', href: '/curriculum/tracks/ai-agent-economics/13-1' },
            { id: '13-2', name: '13.2 AI Agent Build vs Buy', topics: 'AutoGPT, CrewAI, LangGraph, Vendor Pricing, Customization ROI', href: '/curriculum/tracks/ai-agent-economics/13-2' },
            { id: '13-3', name: '13.3 RAG Pipeline Optimization', topics: 'Embedding Costs, Vector DB Pricing, Chunking Economics', href: '/curriculum/tracks/ai-agent-economics/13-3' },
            { id: '13-4', name: '13.4 LLM Inference Cost Modeling', topics: 'GPU Costs (H100, L40S), Cloud Pricing, Batching, Caching', href: '/curriculum/tracks/ai-agent-economics/13-4' },
            { id: '13-5', name: '13.5 AI Agent Monitoring', topics: 'LangSmith, Arize, Cost Per Query, Drift Detection', href: '/curriculum/tracks/ai-agent-economics/13-5' },
            { id: '13-6', name: '13.6 Multi-Agent Systems', topics: 'Orchestration Overhead, Agent Communication, Scaling', href: '/curriculum/tracks/ai-agent-economics/13-6' },
            { id: '13-7', name: '13.7 AI Workflow Automation', topics: 'RPA vs AI Agents, Human-in-the-Loop, Automation Maturity', href: '/curriculum/tracks/ai-agent-economics/13-7' },
            { id: '13-8', name: '13.8 Prompt Engineering at Scale', topics: 'Prompt Library, A/B Testing, Versioning, Prompt-as-Code', href: '/curriculum/tracks/ai-agent-economics/13-8' },
            { id: '13-9', name: '13.9 AI Safety & Guardrails', topics: 'Content Filtering, Output Validation, Safety-Performance', href: '/curriculum/tracks/ai-agent-economics/13-9' },
            { id: '13-10', name: '13.10 AI Maturity Assessment', topics: 'AI Maturity Models, Readiness Scoring, Total AI TCO', href: '/curriculum/tracks/ai-agent-economics/13-10' },
            { id: '13-11', name: '13.11 Small Language Models (SLMs)', topics: 'Llama 3 8B, Phi-3, Edge Inferencing, Latency Optimization', href: '/curriculum/tracks/ai-agent-economics/13-11' },
            { id: '13-12', name: '13.12 Open Weights Engineering', topics: 'Self-Hosting, VPC Security, Parameter Tuning, Licensing', href: '/curriculum/tracks/ai-agent-economics/13-12' },
            { id: '13-13', name: '13.13 AI-Assisted Development', topics: 'Copilot ROI, Devin Automation, Code Verification Costs', href: '/curriculum/tracks/ai-agent-economics/13-13' },
            { id: '13-14', name: '13.14 Agentic Governance Models', topics: 'Boundary Controls, Write vs Read Approvals, Financial Limits', href: '/curriculum/tracks/ai-agent-economics/13-14' },
            { id: '13-15', name: '13.15 AI System Threat Prevention', topics: 'Vulnerability Scanning, Data Poisoning, System Resiliency', href: '/curriculum/tracks/ai-agent-economics/13-15' },
        ],
        color: 'fuchsia',
        icon: '🤖',
        glossaryTerms: ['agentic-workflow', 'small-language-models', 'ai-assisted-development', 'open-weights', 'prompt-engineering', 'large-language-model', 'ai-inference', 'guardrails', 'orchestration-debt', 'ai-cogs'],
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }],
    },
    {
        title: 'Cloud FinOps & Infrastructure',
        subtitle: 'Track 14 — FinOps',
        description: 'The economics of cloud cost management, optimization, and FinOps practice: cost allocation, reserved instances, K8s cost management, and multi-cloud arbitrage.',
        modules: [
            { id: '14-1', name: '14.1 FinOps Fundamentals', topics: 'FinOps Maturity, Stakeholder Alignment, Team Sizing', href: '/curriculum/tracks/cloud-finops/14-1' },
            { id: '14-2', name: '14.2 Cloud Cost Allocation', topics: 'Tagging Strategies, Showback Dashboards, Chargeback', href: '/curriculum/tracks/cloud-finops/14-2' },
            { id: '14-3', name: '14.3 Reserved Instances & Savings Plans', topics: 'RI vs Savings Plans, Coverage Analysis, Break-Even', href: '/curriculum/tracks/cloud-finops/14-3' },
            { id: '14-4', name: '14.4 Kubernetes Cost Management', topics: 'K8s Right-Sizing, Namespace Budgets, Cluster Allocation', href: '/curriculum/tracks/cloud-finops/14-4' },
            { id: '14-5', name: '14.5 Serverless vs Container Economics', topics: 'Lambda vs ECS vs EKS, Cold Start, Workload Fit', href: '/curriculum/tracks/cloud-finops/14-5' },
            { id: '14-6', name: '14.6 Multi-Cloud Arbitrage', topics: 'Cross-Cloud Pricing, Egress Management, Negotiation', href: '/curriculum/tracks/cloud-finops/14-6' },
            { id: '14-7', name: '14.7 Cloud Migration ROI', topics: 'Lift-and-Shift vs Refactor, Timeline, Post-Migration', href: '/curriculum/tracks/cloud-finops/14-7' },
            { id: '14-8', name: '14.8 Data Transfer & Egress', topics: 'CDN Economics, Edge Caching, Bandwidth, Data Locality', href: '/curriculum/tracks/cloud-finops/14-8' },
            { id: '14-9', name: '14.9 FinOps Team & Governance', topics: 'FinOps Roles, KPI Frameworks, Executive Reporting', href: '/curriculum/tracks/cloud-finops/14-9' },
            { id: '14-10', name: '14.10 Infrastructure Synthesis', topics: 'Cloud Economic Model, Optimization Dashboard, Strategy', href: '/curriculum/tracks/cloud-finops/14-10' },
            { id: '14-11', name: '14.11 AI FinOps Specialization', topics: 'LLM Token Allocation, GPU Cluster Depreciation, Margin Triage', href: '/curriculum/tracks/cloud-finops/14-11' },
            { id: '14-12', name: '14.12 Cloud Repatriation Calculus', topics: 'Basecamp Migration Strategy, Bare Metal Racks, Egress Elimination', href: '/curriculum/tracks/cloud-finops/14-12' },
            { id: '14-13', name: '14.13 Serverless GPU Brokering', topics: 'Modal vs Runpod, Cold Start Tolerances, GPU Spot Markets', href: '/curriculum/tracks/cloud-finops/14-13' },
            { id: '14-14', name: '14.14 Data Security Posture Management (DSPM)', topics: 'Cloud Discovery Scanning, Shadow Data Remediation, ROI Analysis', href: '/curriculum/tracks/cloud-finops/14-14' },
            { id: '14-15', name: '14.15 Continuous Architecture Modernization', topics: 'Refactoring Rhythms, Retiring Legacy Instances, Savings Decay', href: '/curriculum/tracks/cloud-finops/14-15' },
        ],
        color: 'blue',
        icon: '☁️',
        glossaryTerms: ['finops', 'ai-finops', 'cloud-repatriation', 'serverless-gpus', 'dspm', 'burn-multiple', 'infrastructure-as-code', 'cloud-cost-optimization'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'AUEB Calculator', href: '/tools/aueb' }],
    },
    {
        title: 'Free Playbooks & Guides',
        subtitle: 'Track 15 — Free Guides',
        description: 'A curated selection of the most popular free playbooks on executive engineering and technology management.',
        modules: [
            { id: '15-1', name: '15.1 The CTO\'s First 90 Days', topics: 'Trust Bridge, 360 Audit, Objective Roadmaps', href: '/vault/curriculum/tracks/guides/15-1' },
            { id: '15-2', name: '15.2 The Definitive Guide to Technical Debt', topics: 'PDI Framework, Innovation Tax, Risk Exposure', href: '/vault/curriculum/tracks/guides/15-2' },
            { id: '15-3', name: '15.3 Build vs. Buy Economics', topics: 'TCO Models, Maintenance Burden, Margin Tax', href: '/vault/curriculum/tracks/guides/15-3' },
            { id: '15-4', name: '15.4 Engineering Efficiency Blueprint', topics: 'Revenue Per Engineer (RPE), DORA Metrics, APER Targets', href: '/vault/curriculum/tracks/guides/15-4' },
            { id: '15-5', name: '15.5 Product Economics & Unit Profitability', topics: 'Feature P&L, Kill Switch Protocol, Zombie Features', href: '/vault/curriculum/tracks/guides/15-5' },
        ],
        color: 'cyan',
        icon: '📖',
        glossaryTerms: ['technical-debt', 'dora-metrics', 'innovation-tax', 'cost-of-delay'],
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'APER Calculator', href: '/tools/aper' }],
    },
    {
        title: 'Executive Premium Playbooks',
        subtitle: 'Track 16 — Premium Authored Content',
        description: 'Advanced, high-impact technical playbooks covering edge AI, governance, and organizational transformation ($199 Value).',
        modules: [
            { id: '16-1', name: '16.1 How to Deploy SLMs', topics: 'Model Quantization, VRAM Allocation, Zero-Trust Architecture', href: '/vault/curriculum/tracks/guides/16-1' },
            { id: '16-2', name: '16.2 AI Governance & Compliance', topics: 'DLP Gateways, Prompt Injection, Context Sanitization', href: '/vault/curriculum/tracks/guides/16-2' },
            { id: '16-3', name: '16.3 AI-Native Engineering Teams', topics: 'Autonomous PR Reviews, 10x Developer Baselines, CI/CD Integration', href: '/vault/curriculum/tracks/guides/16-3' },
        ],
        color: 'emerald',
        icon: '💼',
        glossaryTerms: ['small-language-models', 'ai-governance', 'zero-trust'],
        tools: [],
    },
    {
        title: 'Technical Framework Comparisons',
        subtitle: 'Track 17 — Comparisons',
        description: 'Gartner-grade head-to-head analyses of major engineering frameworks, metrics, and models.',
        modules: [
            { id: '17-1', name: '17.1 Next.js vs Remix vs Astro', topics: 'RSC Architectural Boundaries, Vercel Edge Compute', href: '/vault/curriculum/tracks/comparisons/17-1' },
            { id: '17-2', name: '17.2 Anthropic Claude vs GPT-4o', topics: 'Context Window Degradation, Token Router Systems', href: '/vault/curriculum/tracks/comparisons/17-2' },
            { id: '17-3', name: '17.3 PDI vs DORA Metrics', topics: 'Financial Health vs Delivery Speed, Presentation Dynamics', href: '/vault/curriculum/tracks/comparisons/17-3' },
            { id: '17-4', name: '17.4 Agile vs Kanban', topics: 'Sprint Overhead, Batch Size Reduction, WIP Limits', href: '/vault/curriculum/tracks/comparisons/17-4' },
            { id: '17-5', name: '17.5 Monolith vs Microservices', topics: 'Premature Complexity, Domain Interfaces, Distributed Latency', href: '/vault/curriculum/tracks/comparisons/17-5' },
        ],
        color: 'indigo',
        icon: '⚖️',
        glossaryTerms: ['dora-metrics', 'product-debt-index'],
        tools: [],
    }
];

const colorMap: Record<string, string> = { cyan: 'border-cyan-500/30 bg-cyan-500/5', violet: 'border-violet-500/30 bg-violet-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5', amber: 'border-amber-500/30 bg-amber-500/5', orange: 'border-orange-500/30 bg-orange-500/5', pink: 'border-pink-500/30 bg-pink-500/5', red: 'border-red-500/30 bg-red-500/5', sky: 'border-sky-500/30 bg-sky-500/5', indigo: 'border-indigo-500/30 bg-indigo-500/5', rose: 'border-rose-500/30 bg-rose-500/5', teal: 'border-teal-500/30 bg-teal-500/5', lime: 'border-lime-500/30 bg-lime-500/5', fuchsia: 'border-fuchsia-500/30 bg-fuchsia-500/5', blue: 'border-blue-500/30 bg-blue-500/5' };
const textMap: Record<string, string> = { cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400', amber: 'text-amber-400', orange: 'text-orange-400', pink: 'text-pink-400', red: 'text-red-400', sky: 'text-sky-400', indigo: 'text-indigo-400', rose: 'text-rose-400', teal: 'text-teal-400', lime: 'text-lime-400', fuchsia: 'text-fuchsia-400', blue: 'text-blue-400' };

export default function CurriculumTracksPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-4">Curriculum — 190 Modules</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                            Fourteen Paths to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Mastery</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            From engineering metrics to AI economics to security to startup economics. 190 modules, 500+ lessons, each with hands-on exercises and tools. 420+ glossary definitions underpin every module.
                        </p>
                        <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">190</div>
                                <div className="text-xs text-zinc-500">Modules</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">500+</div>
                                <div className="text-xs text-zinc-500">Lessons</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">420+</div>
                                <div className="text-xs text-zinc-500">Glossary Terms</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">5</div>
                                <div className="text-xs text-zinc-500">Free Tools</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {tracks.map((track, i) => (
                            <div key={i} className={`rounded-2xl border p-8 sm:p-10 ${colorMap[track.color]}`}>
                                <div className="flex items-start gap-4 mb-8">
                                    <span className="text-4xl">{track.icon}</span>
                                    <div>
                                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">{track.subtitle}</div>
                                        <h2 className={`text-2xl font-grotesk font-bold ${textMap[track.color]}`}>{track.title}</h2>
                                        <p className="text-zinc-400 mt-2">{track.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    {track.modules.map((m, j) => (
                                        <Link key={j} href={m.href} className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/20 transition-colors group">
                                            <div>
                                                <div className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors">{m.name}</div>
                                                <div className="text-xs text-zinc-500 mt-1">{m.topics}</div>
                                            </div>
                                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                Start →
                                            </span>
                                        </Link>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2">Related Glossary</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {track.glossaryTerms.map(t => (
                                                <Link key={t} href={`/glossary/${t}`} className="px-2 py-1 rounded-md bg-white/5 text-xs text-zinc-400 hover:text-white transition-colors">{t.replace(/-/g, ' ')}</Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-2">Tools</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {track.tools.map(t => (
                                                <Link key={t.href} href={t.href} className={`px-3 py-1 rounded-md text-xs font-bold ${textMap[track.color]} hover:underline`}>{t.name} →</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12">
                            <h2 className="text-3xl font-grotesk font-bold text-white mb-4">Ready to Go Deeper?</h2>
                            <p className="text-zinc-400 max-w-xl mx-auto mb-8">Our curriculum gives you the frameworks. Our advisory gives you the implementation. Book a session to apply these concepts to your specific organization.</p>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <Link href="/advisory" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity">Book Advisory Session</Link>
                                <Link href="/tools/pdi" className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-violet-500/30 transition-colors font-bold">Try Free Tools →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export interface FrameworkConcept {
    id: string;
    name: string;
    definition: string;
    problem: string;
    whyItMatters: string;
    provenance: string[];
    implementation: {
        research: string[];
        diagnostics: string[];
        education: string[];
        enforcement: string;
    };
    conceptSlug?: string;
}

export interface SubFramework {
    slug: string;
    name: string;
    tagline: string;
    badgeColor: string;
    icon: string;
    overview: string;
    livedExperience: string;
    concepts: FrameworkConcept[];
}

export const subFrameworks: Record<string, SubFramework> = {
    economics: {
        slug: 'economics',
        name: 'Economics',
        tagline: 'Measure',
        badgeColor: 'bg-cyan-50 text-cyan-900 border-cyan-200',
        icon: '📊',
        overview: 'Forensic methodologies to audit, categorize, and optimize R&D capital allocation and GenAI margins.',
        livedExperience: 'While conducting R&D audits for PE-backed B2B SaaS companies, I kept seeing the same margin leak: teams scaled AI features assuming flat SaaS software costs, only to experience margin collapse. The pattern was clear—power users consumed model queries far faster than subscriptions recovered costs. The underlying mechanism was Synthetic COGS—variable GPU and API runtime execution capitalized incorrectly as fixed hosting. This reveals a general principle: AI features have variable unit economics that scale non-linearly with user activity. The broader implication is that SaaS companies must pivot to consumption-capped or credit-based pricing models to remain structurally solvent.',
        concepts: [
            {
                id: 'PAIG-ECON-001',
                name: 'AI Unit Economics',
                definition: 'The marginal cost structures of running generative inference models per user activity.',
                problem: 'Organizations scale AI features assuming standard SaaS gross margins (80%+), only to experience margin collapse as AI costs scale dynamically with usage.',
                whyItMatters: 'Calculating cost-per-interaction allows organizations to adjust pricing tiers or model routing before running at a loss.',
                provenance: ['CIO.com articles', 'Built In publications', 'Beehiiv Laboratory', 'LinkedIn Newsletters', 'AI Unit Economics Benchmark (AUEB)', 'Curriculum Track 2', 'Exogram Platform'],
                implementation: {
                    research: ['Growth Is Not Your Cost Problem — Your Architecture Is', 'How to Prevent Memory Loss in AI Applications', 'Giving an AI a bigger memory window is like giving a confused worker a bigger inbox', 'Most AI Projects Burn Cash', 'Your Claude API Bill is Higher Than Your Revenue'],
                    diagnostics: ['AI Unit Economics Benchmark (AUEB)', 'AI Unit Economics Audit'],
                    education: ['Track 2: AI AI Economics', 'Track 24: AI Economics & Margin Engineering'],
                    enforcement: 'Exogram API Token Budget Enforcer'
                },
                conceptSlug: 'ai-volatility-tax'
            },
            {
                id: 'PAIG-ECON-002',
                name: 'Synthetic COGS',
                definition: 'Attribute-based variable costs (GPU cycles, embeddings, vector search) that replace traditional static server opex.',
                problem: 'Variable AI inferencing is incorrectly capitalized as fixed server hosting, masking structural gross margin erosion.',
                whyItMatters: 'Correctly identifying Synthetic COGS ensures accurate gross profit reporting and models true product contribution margins.',
                provenance: ['CIO.com articles', 'Manning Book Proposal', 'Curriculum Track 2', 'LinkedIn Publications'],
                implementation: {
                    research: ['Growth Is Not Your Cost Problem — Your Architecture Is', 'The Hidden Inflation of AI: Why Model Collapse is a Business Risk'],
                    diagnostics: ['AI Unit Economics Benchmark (AUEB)', 'SLM vs API Arbitrage'],
                    education: ['Track 2: AI AI Economics', 'Track 7: Cloud FinOps & AI Cost Management'],
                    enforcement: 'Exogram Route optimizer & Caching Engine'
                },
                conceptSlug: 'inference-economics'
            },
            {
                id: 'PAIG-ECON-003',
                name: 'Innovation Tax',
                definition: 'The hidden cost of maintenance and bug-fixing disguised as new feature velocity.',
                problem: 'VP of Engineering reports that 70% of R&D goes to new capabilities, when forensic audit reveals only 20% produces growth assets; the other 50% is legacy maintenance.',
                whyItMatters: 'CFOs over-capitalize R&D spend, leading to surprise write-downs and stalled roadmap timelines.',
                provenance: ['CIO.com articles', 'Product Debt Index (PDI)', 'Curriculum Track 3'],
                implementation: {
                    research: ['The Innovation Tax Audit: Is Your R&D Actually Just OpEx?', 'Why Your CFO Hates Your Agile Transformation'],
                    diagnostics: ['Product Debt Index (PDI)', 'Innovation Tax Calculator'],
                    education: ['Track 3: R&D Capital Management', 'Track 9: Technical Debt as Financial Liability'],
                    enforcement: 'Exogram Audit Ledger & Subtraction Rules'
                },
                conceptSlug: 'ai-margin-squeeze'
            },
            {
                id: 'PAIG-ECON-004',
                name: 'Cost Per Outcome',
                definition: 'The cumulative inference cost required to achieve a successful user result, accounting for failures, retries, and formatting errors.',
                problem: 'A single user transaction requires multiple LLM round-trips due to prompt drift or formatting failures, multiplying the real variable cost.',
                whyItMatters: 'If cost-per-outcome is high, user scaling causes rapid profitability decline rather than scaling efficiency.',
                provenance: ['Built In publications', 'AUEB', 'Curriculum Track 24'],
                implementation: {
                    research: ['AI Product Business Test', 'Claude API Bill Blowup Costs'],
                    diagnostics: ['AI Unit Economics Benchmark (AUEB)', 'Agentic Token Simulator'],
                    education: ['Track 24: AI Economics & Margin Engineering', 'Track 6: AI Operations Economics'],
                    enforcement: 'Exogram Deterministic Formatting Gate (reduces retries)'
                }
            }
        ]
    },
    product: {
        slug: 'product',
        name: 'Product',
        tagline: 'Decide',
        badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
        icon: '🎯',
        overview: 'Metrics and gating frameworks to prioritize feature deprecation, prevent product bloating, and ensure feature-level profitability.',
        livedExperience: 'During product portfolio audits, I watched teams continually build complex AI capabilities that customers never actually used. I noticed a consistent feedback loop: engineers shipped buttons to hit sprint targets, but the carrying cost of maintaining those features slowly strangled roadmap velocity. The mechanism is Feature Bloat—unused code paths requiring continuous testing, dependency updates, and compute power. This leads to the principle of the Product Debt Index (PDI): the carrying cost of legacy features decays long-term valuation. Ultimately, companies must systematically deprecate their bottom 20% of features to restore EBITDA and engineering throughput.',
        concepts: [
            {
                id: 'PAIG-PROD-001',
                name: 'Product Debt Index',
                definition: 'A quantitative metric representing the drag of backlog maintenance load on product exit valuation.',
                problem: 'Product teams continually ship new features without auditing legacy carry, leading to a bloated system that stalls velocity and compresses Exit multiples.',
                whyItMatters: 'Provides private equity partners and boards with a dollar-value discount index during due diligence.',
                provenance: ['Mind the Product newsletter', 'PDI Calculator', 'Curriculum Track 5'],
                implementation: {
                    research: ['Calculating Technical Debt\'s EBITDA Impact', 'The 3 Financial Metrics Every PM Needs'],
                    diagnostics: ['Product Debt Index (PDI)', 'Valuation Scenario Engine (EV-SE)'],
                    education: ['Track 5: Product Management Economics', 'Track 10: AI Due Diligence for Investors'],
                    enforcement: 'Exogram Policy Rules'
                }
            },
            {
                id: 'PAIG-PROD-002',
                name: 'Feature Deprecation',
                definition: 'The systematic removal of low-value, high-maintenance features to recoup margin and velocity.',
                problem: 'Product managers are rewarded for adding buttons, never for removing them, creating exponential codebase carrying costs.',
                whyItMatters: 'Deprecating the bottom 20% of unused features restores up to 30% of engineering throughput.',
                provenance: ['Built In publications', 'Sunset Protocol', 'Curriculum Track 5'],
                implementation: {
                    research: ['Real Innovation Requires Deleting Code, Not Writing It', 'Hey Senior PMs: Shipping Faster Won\'t Get You Promoted'],
                    diagnostics: ['Product Debt Index (PDI)'],
                    education: ['Track 5: Product Management Economics'],
                    enforcement: 'Exogram Routing Redirect Rules'
                }
            },
            {
                id: 'PAIG-PROD-003',
                name: 'AI Margin Collapse Point',
                definition: 'The specific threshold where user volume and API usage cost exceeds subscription price.',
                problem: 'Pricing is modeled on flat SaaS formulas, meaning high-frequency power users actively bleed capital on every query.',
                whyItMatters: 'Predicts structural insolvency of specific product tiers, enabling value-based caps or credits.',
                provenance: ['Built In publications', 'AUEB', 'Curriculum Track 2'],
                implementation: {
                    research: ['I Built an Incredible AI Product That Nobody Wanted', 'Most AI Projects Burn Cash'],
                    diagnostics: ['AI Unit Economics Benchmark (AUEB)', 'Valuation Scenario Engine (EV-SE)'],
                    education: ['Track 2: AI AI Economics', 'Track 8: AI Pricing Strategy'],
                    enforcement: 'Exogram Adaptive Usage Boundary Control'
                }
            }
        ]
    },
    engineering: {
        slug: 'engineering',
        name: 'Engineering',
        tagline: 'Build',
        badgeColor: 'bg-purple-50 text-purple-900 border-purple-200',
        icon: '⚙️',
        overview: 'System-level validation structures to address vibe-coding debt, calculate velocity-insolvency horizons, and enforce testing standards.',
        livedExperience: 'After reviewing dozens of enterprise codebases, I saw development velocity freeze completely as teams spent 70% of their sprints resolving bugs. The pattern was unmistakable: developers were \'vibe coding\'—copy-pasting thousands of lines of LLM-generated code without writing unit tests. The mechanism is cyclomatic complexity explosion: AI-generated code introduces unmapped state mutations and subtle logic branches. This leads to the principle of the Technical Insolvency Date—the specific quarter when codebase maintenance consumes 100% of engineering resources. The broader implication is that AI-assisted velocity is a valuation liability unless coupled with strict, deterministic code compilation gates.',
        concepts: [
            {
                id: 'PAIG-ENG-001',
                name: 'Technical Insolvency Date',
                definition: 'The projected quarter when codebase maintenance load consumes 100% of engineering capacity, reducing feature velocity to zero.',
                problem: 'Organizations ignore technical debt growth until feature shipping halts completely, rendering them uncompetitive.',
                whyItMatters: 'Establishes a concrete deadline for boards to fund core modernization and refactoring.',
                provenance: ['CIO.com articles', 'PDI Calculator', 'Curriculum Track 1'],
                implementation: {
                    research: ['The Technical Insolvency Date', 'Why Your CFO Hates Your Agile Transformation'],
                    diagnostics: ['Product Debt Index (PDI)', 'Valuation Scenario Engine (EV-SE)'],
                    education: ['Track 1: Engineering Economics Foundations', 'Track 9: Technical Debt as Financial Liability'],
                    enforcement: 'Exogram Refactoring Track Controls'
                },
                conceptSlug: 'vibe-coding'
            },
            {
                id: 'PAIG-ENG-002',
                name: 'Vibe Coding Debt',
                definition: 'The rapid accumulation of unverified, AI-copilot-generated code that lacks architectural coherence.',
                problem: 'Engineers generate thousands of lines of syntax using LLMs without understanding the architectural blast radius, leading to system failure.',
                whyItMatters: 'Vibe coding codebases deteriorate 4x faster than human-written codebases, accelerating the Technical Insolvency Date.',
                provenance: ['Built In publications', 'Curriculum Track 1'],
                implementation: {
                    research: ['In the Vibe Coding Era, What Does a Software Engineer Even Do?', 'When AI Writes the Code, What Skills Are Employers Hiring For?'],
                    diagnostics: ['Audit Interview Protocol'],
                    education: ['Track 1: Engineering Economics Foundations', 'Track 17: Developer Experience (DX) Economics'],
                    enforcement: 'Exogram SECS Code Quality Boundary Gates'
                },
                conceptSlug: 'subprime-code-crisis'
            },
            {
                id: 'PAIG-ENG-003',
                name: 'SLM vs API Arbitrage',
                definition: 'The decision framework for replacing expensive commercial APIs with fine-tuned Small Language Models.',
                problem: 'Hosting commercial model APIs at scale burns excessive margins when a 7B local parameter model can perform the task at 90% lower cost.',
                whyItMatters: 'Preserves long-term SaaS gross margin profile by localizing standard workflows.',
                provenance: ['Built In publications', 'SLM vs API Arbitrage tool', 'Curriculum Track 11'],
                implementation: {
                    research: ['Claude API Bill Blowup Costs'],
                    diagnostics: ['SLM vs API Arbitrage', 'AI Unit Economics Benchmark (AUEB)'],
                    education: ['Track 11: Economics of Build vs. Buy for AI'],
                    enforcement: 'Exogram Semantic Model Router & Fallback Gate'
                },
                conceptSlug: 'innovation-tax'
            },
            {
                id: 'PAIG-ECON-004',
                name: 'The Inference Dividend Model Framework',
                definition: 'A 3-level edge optimization architecture (pre-call validation, vector intent caching, SLM routing) recapturing >50% of wasted AI token spend.',
                problem: 'Un-monitored model calls cause AI feature OpEx to scale linearly with user activity, destroying traditional 80% SaaS gross profit margins.',
                whyItMatters: 'Recaptures wasted token capital while dropping cache hit latencies under 20ms to preserve software unit margins.',
                provenance: ['LinkedIn Newsletters', 'CIO.com', 'Exogram Platform'],
                implementation: {
                    research: ['How to Reduce LLM Costs in Production: The Inference Dividend Model', 'Growth Is Not Your Cost Problem — Your Architecture Is'],
                    diagnostics: ['AI Unit Economics Benchmark (AUEB)', 'SLM vs API Arbitrage'],
                    education: ['Track 2: AI Economics', 'Track 7: Cloud FinOps & AI Cost Management'],
                    enforcement: 'Exogram 3-Level Edge Inference Dividend Interceptor'
                },
                conceptSlug: 'inference-dividend-model'
            }
        ]
    },
    security: {
        slug: 'security',
        name: 'Security',
        tagline: 'Protect',
        badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
        icon: '🛡️',
        overview: 'Defensive architectures to prevent data leakage, intercept adversarial payloads, and establish agent execution guardrails.',
        livedExperience: 'While analyzing runtime vulnerabilities in autonomous systems, I watched an agent exfiltrate a customer database because a user submitted a base64-encoded command. I kept seeing the same security flaw: developers relying on English system prompts to govern agent behavior. The mechanism is Prompt Injection—probabilistic models treat instructions and data as a single execution context, allowing data to overwrite rules. This generalized into a core principle: prompt-level guardrails are fundamentally non-deterministic and easily bypassed. The broader implication is that AI agents cannot be secured via prompts; they require physical network-level interception and action-admissibility proxy gates.',
        concepts: [
            {
                id: 'PAIG-SEC-001',
                name: 'AI Agent Kill Switch',
                definition: 'A deterministic runtime boundary that intercepts and terminates autonomous agent loops before they generate legal or financial liability.',
                problem: 'AI agents are given tools (database access, API keys) without absolute boundaries, leading to recursive feedback loops that consume budget or delete data.',
                whyItMatters: 'Prevents rogue agents from causing catastrophic operational crashes.',
                provenance: ['Built In publications', 'Exogram sandbox', 'Curriculum Track 19'],
                implementation: {
                    research: ['Your AI Agent Needs a Kill Switch'],
                    diagnostics: ['Prompt Injection Sandbox', 'Deterministic Execution Sandbox'],
                    education: ['Track 19: AI Agent Architecture & Economics', 'Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram Physical Execution Interceptor (Kill Switch)'
                },
                conceptSlug: 'agent-kill-switch'
            },
            {
                id: 'PAIG-SEC-002',
                name: 'Adversarial Injection Shield',
                definition: 'State-verification and schema-enforcement gates that isolate LLM prompt variables.',
                problem: 'Attackers inject system-override prompts into input forms, bypassing guardrails and capturing database context.',
                whyItMatters: 'Protects proprietary system instructions and blocks data exfiltration.',
                provenance: ['Exogram sandbox', 'Curriculum Track 21'],
                implementation: {
                    research: ['Your AI Agent Needs a Kill Switch', 'Technical Debt Governance Frameworks'],
                    diagnostics: ['Prompt Injection Sandbox'],
                    education: ['Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram Input State Hash Verifier'
                },
                conceptSlug: 'deterministic-governance'
            },
            {
                id: 'PAIG-SEC-003',
                name: 'Shadow AI Scanner',
                definition: 'Forensic evaluation to detect employee data exposure to unauthorized external models.',
                problem: 'Employees copy-paste proprietary code, customer records, or financial spreadsheets into public LLM interfaces, breaching compliance.',
                whyItMatters: 'Prevents intellectual property loss and guarantees compliance with SOC2 and GDPR.',
                provenance: ['Shadow AI Scanner tool', 'Curriculum Track 17'],
                implementation: {
                    research: ['Technical Debt Governance Frameworks', 'The hidden inflation of AI'],
                    diagnostics: ['Shadow AI Security Audit'],
                    education: ['Track 17: Developer Experience (DX) Economics', 'Track 3: R&D Capital Management'],
                    enforcement: 'Exogram Enterprise Proxy Filter'
                },
                conceptSlug: 'prompt-injection'
            },
            {
                id: 'PAIG-SEC-004',
                name: 'Shadow Delegation Boundary Framework',
                definition: 'A 3-tier zero-trust governance boundary containing vendor-supplied AI agents within explicit corporate delegation matrices.',
                problem: 'Enterprise SaaS vendors (Salesforce, SAP, Oracle) push native AI updates with authority to alter contracts and issue refunds, bypassing executive signing matrices.',
                whyItMatters: 'Prevents silent margin leaks, contract compliance violations, and SOX internal control audit failures caused by ungoverned software agents.',
                provenance: ['CIO.com publications', 'Exogram sandbox', 'Curriculum Track 21'],
                implementation: {
                    research: ['Salesforce and SAP are putting AI agents inside your workflows. Who tells them no?'],
                    diagnostics: ['Shadow AI Security Audit', 'Agentic Drift Matrix'],
                    education: ['Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram 3-Tier Binary Proxy Interceptor'
                },
                conceptSlug: 'shadow-delegation'
            }
        ]
    },
    operations: {
        slug: 'operations',
        name: 'Operations',
        tagline: 'Operate',
        badgeColor: 'bg-rose-50 text-rose-900 border-rose-200',
        icon: '🔄',
        overview: 'FinOps frameworks and hardware repatriation metrics to manage spot-GPU usage, local compute breakevens, and token decay.',
        livedExperience: 'During cloud infrastructure assessments, I watched a startup burn $40K in a single weekend because a multi-agent loop entered an infinite retry cycle. The pattern was highly repetitive: teams deployed autonomous agents with direct API access without setting loop caps or cost circuit breakers. The mechanism is Token Inflation—agents query models in loops, expanding context windows and scaling billing exponentially. This illustrates the principle of unoptimized inference routing: uncontrolled agent loops lead to rapid capital erosion. The broader implication is that companies must deploy autonomous agents behind sovereign gateway proxies that enforce deterministic token and cost budgets.',
        concepts: [
            {
                id: 'PAIG-OPS-001',
                name: 'Agentic FTE Simulator',
                definition: 'A model mapping the headcount substitution rate and margin adjustments of deploying AI agents in support and operations.',
                problem: 'Organizations deploy customer support bots without calculating the real cost of handling edge cases (human intervention rates), distorting savings projections.',
                whyItMatters: 'Calculates the real EBITDA payback of automation projects.',
                provenance: ['FTE Displacement Matrix tool', 'Curriculum Track 20'],
                implementation: {
                    research: ['AI Agents Won\'t Crash the Economy. Bad Governance Might.'],
                    diagnostics: ['Agentic FTE Displacement Matrix', 'AI ROI Timeline'],
                    education: ['Track 20: Agentic Process Automation Economics'],
                    enforcement: 'Exogram Human-in-the-loop Escalation Gateway'
                }
            },
            {
                id: 'PAIG-OPS-002',
                name: 'Cloud Repatriation Breakeven',
                definition: 'The financial math calculating the exit point from cloud databases (AWS, Azure) to private bare-metal configurations.',
                problem: 'Companies stay on hyperscalers for high-velocity database access, bleeding up to 60% of operating cash flow on markup pricing.',
                whyItMatters: 'Recaptures lost cash flow to directly improve EBITDA margins in mature products.',
                provenance: ['Cloud Repatriation Engine tool', 'Curriculum Track 7'],
                implementation: {
                    research: ['Calculating Technical Debt\'s EBITDA Impact'],
                    diagnostics: ['Cloud Repatriation Engine', 'SLM vs API Arbitrage'],
                    education: ['Track 7: Cloud FinOps & AI Cost Management'],
                    enforcement: 'Exogram Sovereign Routing Controllers'
                }
            },
            {
                id: 'PAIG-OPS-003',
                name: 'Token Simulation',
                definition: 'A model calculating prompt expansion and context decay in multi-step reasoning chains.',
                problem: 'Multi-agent workflows run recursive loops that expand prompt sizing exponentially, ballooning execution bills in hours.',
                whyItMatters: 'Sets clear guardrails to avoid runaway looping bills.',
                provenance: ['Agentic Token Simulator tool', 'Curriculum Track 6'],
                implementation: {
                    research: ['Claude API Bill Blowup Costs'],
                    diagnostics: ['Agentic Token Simulator'],
                    education: ['Track 6: AI Operations Economics & Cost Governance'],
                    enforcement: 'Exogram Loop Interception Controller'
                }
            }
        ]
    },
    'runtime-governance': {
        slug: 'runtime-governance',
        name: 'Runtime Governance',
        tagline: 'Enforce',
        badgeColor: 'bg-indigo-50 text-indigo-900 border-indigo-200',
        icon: '🛡️',
        overview: 'The final integration layer where frameworks, diagnostics, and educational guidelines compile into deterministic physical control boundaries.',
        livedExperience: 'While building Exogram, I watched our prototype agent continuously attempt to call disabled API endpoints because a model output suggested it. I noticed a clear operational mismatch: developers writing code-level checks that models easily bypassed by altering their payloads. The mechanism is Execution Boundary Drift—probabilistic outputs cannot be constrained by software-level logic alone because the execution state mutates dynamically. This led to the principle of Runtime Governance: physical security requires deterministic boundary control outside the model\'s cognition. The broader implication is that agent safety requires a network-intercepting runtime proxy that enforces action admissibility rules at the physical boundary.',
        concepts: [
            {
                id: 'PAIG-GOV-001',
                name: 'Deterministic Execution Sandbox',
                definition: 'An execution boundary that forces probabilistic outputs to comply with explicit state logic rules before shipping.',
                problem: 'Guardrails rely on "soft" LLM filters that are bypassed by adversarial prompts or simply fail randomly in production.',
                whyItMatters: 'Guarantees absolute conformity, preventing rogue model responses in high-trust applications.',
                provenance: ['Exogram.ai Proving Ground', 'Curriculum Track 21'],
                implementation: {
                    research: ['Your AI Agent Needs a Kill Switch', 'Technical Debt Governance Frameworks'],
                    diagnostics: ['Deterministic Execution Sandbox', 'Prompt Injection Sandbox'],
                    education: ['Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram Proving Ground Sandbox Engine'
                },
                conceptSlug: 'ai-governance'
            },
            {
                id: 'PAIG-GOV-002',
                name: 'State-Hashing Audit',
                definition: 'A cryptographic commit structure that records every agent action on a tamper-proof ledger.',
                problem: 'Autonomous agents take actions (sending emails, modifying records) without deterministic audit trails, creating diagnostic blindspots when errors occur.',
                whyItMatters: 'Guarantees total auditability for regulatory compliance and error trace recovery.',
                provenance: ['Exogram.ai Architecture', 'SECS Repo', 'Curriculum Track 28'],
                implementation: {
                    research: ['AI Agents Won\'t Crash the Economy. Bad Governance Might.'],
                    diagnostics: ['Agentic Telemetry Analyzer'],
                    education: ['Track 28: The AI Economist Masterclass'],
                    enforcement: 'Exogram Cryptographic State Ledger Engine'
                },
                conceptSlug: 'shadow-ai'
            },
            {
                id: 'PAIG-GOV-003',
                name: 'Rule-Based Interceptor',
                definition: 'A low-latency physical proxy intercepting LLM input/output streams to enforce security rules at the network layer.',
                problem: 'Validations written inside software code are easily bypassed, slow down processing, and are difficult to update.',
                whyItMatters: 'Enforces site-wide data-leakage and agent budget limits at the proxy tier, bypassing database delays.',
                provenance: ['Exogram.ai Proxy', 'Curriculum Track 21', 'Exogram Platform'],
                implementation: {
                    research: ['Your AI Agent Needs a Kill Switch'],
                    diagnostics: ['Agentic Telemetry Analyzer', 'Shadow AI Security Audit'],
                    education: ['Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram Physical Proxy Gateway'
                }
            }
        ]
    }
};

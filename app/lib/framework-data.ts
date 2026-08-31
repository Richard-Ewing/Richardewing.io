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
        livedExperience: 'While conducting R&D audits for PE-backed B2B SaaS companies, I kept seeing the same margin leak: teams scaled AI features assuming flat SaaS software costs, only to experience margin collapse. The pattern was clear - power users consumed model queries far faster than subscriptions recovered costs. The underlying mechanism was Synthetic COGS - variable GPU and API runtime execution capitalized incorrectly as fixed hosting. This reveals a general principle: AI features have variable unit economics that scale non-linearly with user activity. The broader implication is that SaaS companies must pivot to consumption-capped or credit-based pricing models to remain structurally solvent.',
        concepts: [
            {
                id: 'PAIG-ECON-001',
                name: 'AI Unit Economics',
                definition: 'The marginal cost structures of running generative inference models per user activity.',
                problem: 'Organizations scale AI features assuming standard SaaS gross margins (80%+), only to experience margin collapse as AI costs scale dynamically with usage.',
                whyItMatters: 'Calculating cost-per-interaction allows organizations to adjust pricing tiers or model routing before running at a loss.',
                provenance: ['CIO.com articles', 'Built In publications', 'Beehiiv Laboratory', 'LinkedIn Newsletters', 'AI Unit Economics Benchmark (AUEB)', 'Curriculum Track 2', 'Exogram Platform'],
                implementation: {
                    research: ['Growth Is Not Your Cost Problem  -  Your Architecture Is', 'How to Prevent Memory Loss in AI Applications', 'Giving an AI a bigger memory window is like giving a confused worker a bigger inbox', 'Most AI Projects Burn Cash', 'Your Claude API Bill is Higher Than Your Revenue'],
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
                    research: ['Growth Is Not Your Cost Problem  -  Your Architecture Is', 'The Hidden Inflation of AI: Why Model Collapse is a Business Risk'],
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
        livedExperience: 'During product portfolio audits, I watched teams continually build complex AI capabilities that customers never actually used. I noticed a consistent feedback loop: engineers shipped buttons to hit sprint targets, but the carrying cost of maintaining those features slowly strangled roadmap velocity. The mechanism is Feature Bloat - unused code paths requiring continuous testing, dependency updates, and compute power. This leads to the principle of the Product Debt Index (PDI): the carrying cost of legacy features decays long-term valuation. Ultimately, companies must systematically deprecate their bottom 20% of features to restore EBITDA and engineering throughput.',
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
                },
                conceptSlug: 'product-debt-index'
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
                },
                conceptSlug: 'margin-engineering'
            },
            {
                id: 'PAIG-PROD-004',
                name: 'The Software Phase Transition',
                definition: 'The structural breakdown of traditional product management as code creation costs approach zero, shifting teams from Solid (roadmaps and sprints) to Gas (autonomous AI creation and Product Economics).',
                problem: 'Product leaders continue using developer capacity rationing and sprint velocity metrics when generative tools make code generation virtually free, creating organizational complexity and margin erosion.',
                whyItMatters: 'Shifts product leadership from managing feature output to managing capital allocation, risk reduction, system architecture efficiency, and unit margins.',
                provenance: ['LinkedIn publications', 'CIO.com articles', 'Mind the Product', 'PDI Calculator', 'Curriculum Track 5'],
                implementation: {
                    research: ['When the Cost of Writing Software Approaches Zero, Traditional PM Frameworks Break Down', 'Hey Senior PMs: Shipping Faster Won\'t Get You Promoted'],
                    diagnostics: ['Product Debt Index (PDI)', 'AI Unit Economics Benchmark (AUEB)'],
                    education: ['Track 5: Product Management Economics', 'Track 24: AI Economics & Margin Engineering'],
                    enforcement: 'Exogram Economic Gate & Policy Rules'
                },
                conceptSlug: 'software-phase-transition'
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
        livedExperience: 'After reviewing dozens of enterprise codebases, I saw development velocity freeze completely as teams spent 70% of their sprints resolving bugs. The pattern was unmistakable: developers were \'vibe coding\' - copy-pasting thousands of lines of LLM-generated code without writing unit tests. The mechanism is cyclomatic complexity explosion: AI-generated code introduces unmapped state mutations and subtle logic branches. This leads to the principle of the Technical Insolvency Date - the specific quarter when codebase maintenance consumes 100% of engineering resources. The broader implication is that AI-assisted velocity is a valuation liability unless coupled with strict, deterministic code compilation gates.',
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
                conceptSlug: 'negative-carry-code-crisis'
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
                    research: ['How to Reduce LLM API Token Costs in Production', 'How to Reduce LLM Costs in Production: The Inference Dividend Model', 'Growth Is Not Your Cost Problem  -  Your Architecture Is'],
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
        livedExperience: 'While analyzing runtime vulnerabilities in autonomous systems, I watched an agent exfiltrate a customer database because a user submitted a base64-encoded command. I kept seeing the same security flaw: developers relying on English system prompts to govern agent behavior. The mechanism is Prompt Injection - probabilistic models treat instructions and data as a single execution context, allowing data to overwrite rules. This generalized into a core principle: prompt-level guardrails are fundamentally non-deterministic and easily bypassed. The broader implication is that AI agents cannot be secured via prompts; they require physical network-level interception and action-admissibility proxy gates.',
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
        livedExperience: 'During cloud infrastructure assessments, I watched a startup burn $40K in a single weekend because a multi-agent loop entered an infinite retry cycle. The pattern was highly repetitive: teams deployed autonomous agents with direct API access without setting loop caps or cost circuit breakers. The mechanism is Token Inflation - agents query models in loops, expanding context windows and scaling billing exponentially. This illustrates the principle of unoptimized inference routing: uncontrolled agent loops lead to rapid capital erosion. The broader implication is that companies must deploy autonomous agents behind sovereign gateway proxies that enforce deterministic token and cost budgets.',
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
        livedExperience: 'While building Exogram, I watched our prototype agent continuously attempt to call disabled API endpoints because a model output suggested it. I noticed a clear operational mismatch: developers writing code-level checks that models easily bypassed by altering their payloads. The mechanism is Execution Boundary Drift - probabilistic outputs cannot be constrained by software-level logic alone because the execution state mutates dynamically. This led to the principle of Runtime Governance: physical security requires deterministic boundary control outside the model\'s cognition. The broader implication is that agent safety requires a network-intercepting runtime proxy that enforces action admissibility rules at the physical boundary.',
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
    },

    'agentic-control-plane': {
        slug: 'agentic-control-plane',
        name: 'The 3-Tier Agentic Control Plane',
        tagline: 'Constrain',
        badgeColor: 'bg-cyan-50 text-cyan-900 border-cyan-200',
        icon: '🤖',
        overview: 'Architectural governance restricting autonomous coding agents (Claude Code, Antigravity, Devin) to verifiable sub-trees and sandboxed Git worktrees.',
        livedExperience: 'While developing complex multi-tenant platforms with autonomous coding agents, I watched unconstrained subagents create cascading failure loops: an agent tasked with fixing a UI button independently rewrote the database schema, altered unit tests to pass its own broken assertions, and broke production auth routes. The mechanism is Agentic Drift: unconstrained LLMs treat every task as permission to mutate the entire repository. The general principle is that autonomous agents require strict physical boundary gates rather than polite system prompts. The broader implication is that agentic velocity is only safe when bounded by three deterministic tiers: Spec Compilation, Sandboxed Worktree Isolation, and Zero-Trust Type Verification.',
        concepts: [
            {
                id: 'PAIG-ACP-001',
                name: 'Spec-Driven Agent Execution',
                definition: 'The requirement that natural language user intent is compiled into an immutable JSON/YAML execution contract before code generation begins.',
                problem: 'Agents start modifying files based on ambiguous conversational prompts, generating hallucinated features that diverge from architectural intent.',
                whyItMatters: 'Forces deterministic task boundaries, preventing agents from rewriting unrelated files and exploding PR diffs.',
                provenance: ['Beehiiv Publication (Aug 2026)', 'Built In Editor Pick', 'Autonomous Agent Readiness Index (AARI)', 'Curriculum Track 19'],
                implementation: {
                    research: ['Cursor vs Google Antigravity for Production AI Building', 'Most Companies Shouldn’t Be Using Autonomous Coding Agents Yet'],
                    diagnostics: ['Autonomous Agent Readiness Index (AARI)', 'Deterministic Execution Sandbox'],
                    education: ['Track 19: AI Agent Architecture & Economics', 'Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram Spec Verification Compiler'
                },
                conceptSlug: 'spec-driven-development'
            },
            {
                id: 'PAIG-ACP-002',
                name: 'Worktree Concurrency Isolation',
                definition: 'Executing concurrent subagent swarms in isolated Git worktrees and ephemeral test databases to prevent environment collisions.',
                problem: 'Multiple agents running concurrently mutate shared local files, port bindings, and database states, causing race conditions.',
                whyItMatters: 'Isolates failure blast radiuses so broken agent attempts can be discarded with a single git command.',
                provenance: ['Built In Editor Pick', 'Meta Muse Code Evaluation', 'Curriculum Track 21'],
                implementation: {
                    research: ['How Does Meta’s Muse Code Compare to Other AI Coding Tools?', 'I Used AI to Build My Startup. Here’s What I Learned.'],
                    diagnostics: ['Autonomous Agent Readiness Index (AARI)'],
                    education: ['Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram Git Worktree Isolation Sandbox'
                },
                conceptSlug: 'deterministic-governance'
            },
            {
                id: 'PAIG-ACP-003',
                name: 'Zero-Trust Compiler Gate',
                definition: 'A post-execution terminal hook that runs static type checks, linting, and unit tests before any human sees the pull request.',
                problem: 'Human engineers waste 40% of sprint capacity acting as manual compilers for sloppy AI-generated syntax.',
                whyItMatters: 'Ensures no hallucinated code ever reaches human review queues without passing mechanical verification.',
                provenance: ['Built In publications', 'Beehiiv Laboratory', 'AARI Diagnostic'],
                implementation: {
                    research: ['Cursor vs Google Antigravity for Production AI Building'],
                    diagnostics: ['Autonomous Agent Readiness Index (AARI)', 'Audit Interview Protocol'],
                    education: ['Track 1: Engineering Economics Foundations'],
                    enforcement: 'Exogram Compiler Interceptor'
                },
                conceptSlug: 'zero-trust-type-verification'
            }
        ]
    },
    'inference-dividend-cascade': {
        slug: 'inference-dividend-cascade',
        name: 'The 4-Stage Inference Dividend Cascade',
        tagline: 'Arbitrage',
        badgeColor: 'bg-violet-50 text-violet-900 border-violet-200',
        icon: '⚡',
        overview: 'A tiered inference routing architecture that drops token OpEx by 60%+ by replacing raw frontier model calls with semantic caching and quantized SLMs.',
        livedExperience: 'During cloud cost audits for high-scale generative applications, I noticed that 85% of queries hitting expensive frontier model APIs (Claude 3.7 / GPT-5) were routine, repetitive formatting and extraction tasks that did not require complex multi-step reasoning. Companies were essentially paying $15/million tokens for work an 8B parameter quantized model could execute locally for pennies. The mechanism is Synthetic COGS Arbitrage: tiered request routing that intercepts requests at the network edge. This proves that high-margin AI architecture requires an aggressive tiered cascade: Cache -> SLM Classifier -> Quantized Fine-Tune -> Frontier Escalation.',
        concepts: [
            {
                id: 'PAIG-IDC-001',
                name: 'Edge Semantic Intent Cache',
                definition: 'A vector similarity caching layer operating in <20ms that resolves duplicate semantic queries without invoking model APIs.',
                problem: 'Users repeatedly ask identical or slightly rephrased questions, triggering full multi-dollar inference calls every time.',
                whyItMatters: 'Cuts repetitive token bills by 30% to 50% while providing instant sub-20ms response times.',
                provenance: ['LinkedIn Publications', 'Exogram Platform', 'Curriculum Track 2'],
                implementation: {
                    research: ['How to Reduce LLM API Token Costs in Production: The Inference Dividend Model'],
                    diagnostics: ['AI Unit Economics Benchmark (AUEB)', 'SLM Break-Even Calculator'],
                    education: ['Track 2: AI Economics & Margin Engineering'],
                    enforcement: 'Exogram Edge Semantic Cache Gate'
                },
                conceptSlug: 'inference-dividend-model'
            },
            {
                id: 'PAIG-IDC-002',
                name: 'SLM Intent Router',
                definition: 'A lightweight 1B/3B Small Language Model that classifies request complexity and routes queries to the cheapest competent model.',
                problem: 'All user queries default to the flagship frontier model regardless of task difficulty.',
                whyItMatters: 'Prevents frontier model over-spending on structured extraction and classification.',
                provenance: ['Built In publications', 'Curriculum Track 11'],
                implementation: {
                    research: ['Small Models, Big Leverage: The SLM Revolution'],
                    diagnostics: ['SLM vs API Break-Even Calculator'],
                    education: ['Track 11: Economics of Build vs. Buy for AI'],
                    enforcement: 'Exogram Semantic Model Router'
                },
                conceptSlug: 'slm-vs-api-arbitrage'
            },
            {
                id: 'PAIG-IDC-003',
                name: 'Quantized Task Specialization',
                definition: 'Fine-tuning 8B-14B parameter models (Llama 3.3 / Gemma 2) on domain-specific datasets to match or exceed frontier model accuracy at 90% lower unit cost.',
                problem: 'Organizations assume custom capability requires massive 400B+ models, overpaying for unused general knowledge.',
                whyItMatters: 'Protects traditional 80%+ SaaS gross margins by decoupling feature volume from cloud API pricing markup.',
                provenance: ['Built In publications', 'Curriculum Track 24'],
                implementation: {
                    research: ['Fable 5 vs. GPT-5.6 Sol: Real-World Developer Backlog Evaluation'],
                    diagnostics: ['SLM vs API Break-Even Calculator', 'AI Unit Economics Benchmark (AUEB)'],
                    education: ['Track 24: AI Economics & Margin Engineering'],
                    enforcement: 'Exogram Dedicated SLM Cluster Proxy'
                },
                conceptSlug: 'model-right-sizing'
            }
        ]
    },
    'general-contractor-pm': {
        slug: 'general-contractor-pm',
        name: 'The General Contractor PM Operating Model',
        tagline: 'Architect',
        badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
        icon: '📐',
        overview: 'Product leadership operating model for the AI era: transitioning PMs from story-point backlog managers to economic system architects and spec contractors.',
        livedExperience: 'For twenty years, product managers managed developer scarcity: rationing story points and prioritizing 2-week sprint backlogs. When generative AI reduced the marginal cost of writing code toward zero, developer capacity ceased to be the constraint. The real bottleneck shifted to managing probabilistic uncertainty and protecting unit margins. The mechanism is The Software Phase Transition: software shifted from a solid material that was slow to carve to an abundant gas that easily expands into bloated, negative-carry codebases. The General Contractor PM specifies exact architectural outcomes, establishes token consumption budgets, and designs automated verification suites rather than running Jira standups.',
        concepts: [
            {
                id: 'PAIG-GCPM-001',
                name: 'Probabilistic Product Management (PPM)',
                definition: 'Product management methodology designed for non-deterministic software systems where features exhibit variable confidence intervals and dynamic token costs.',
                problem: 'Applying deterministic Scrum/Agile roadmaps to probabilistic AI systems creates endless estimation failures and margin collapse.',
                whyItMatters: 'Aligns product roadmap milestones with statistical confidence thresholds and unit economic profit caps.',
                provenance: ['LinkedIn Executive Series (Aug 2026)', 'Mind the Product', 'Curriculum Track 5'],
                implementation: {
                    research: ['The AI Economist: Leading Product Strategy When Build Costs Approach Zero', 'When the Cost of Writing Software Approaches Zero, Traditional PM Frameworks Break Down'],
                    diagnostics: ['AI Feature Unit Margin Matrix', 'Product Debt Index (PDI)'],
                    education: ['Track 5: Product Management Economics'],
                    enforcement: 'Exogram Product Policy Controller'
                },
                conceptSlug: 'software-phase-transition'
            },
            {
                id: 'PAIG-GCPM-002',
                name: 'Negative-Carry Feature Audit',
                definition: 'The systematic identification and deprecation of AI features whose variable inference COGS exceed user subscription contribution margin.',
                problem: 'Product teams celebrate high feature usage that actively loses money on every customer session.',
                whyItMatters: 'Restores EBITDA margin profile by transitioning flat SaaS pricing to credit-based consumption rails.',
                provenance: ['Built In publications', 'Curriculum Track 5'],
                implementation: {
                    research: ['Growth Is Not Your Cost Problem  -  Your Architecture Is'],
                    diagnostics: ['AI Feature Unit Margin Matrix'],
                    education: ['Track 5: Product Management Economics', 'Track 24: AI Economics & Margin Engineering'],
                    enforcement: 'Exogram Usage Boundary Governor'
                },
                conceptSlug: 'ai-margin-squeeze'
            }
        ]
    },
    'negative-carry-code-governance': {
        slug: 'negative-carry-code-governance',
        name: 'The 4-Law AI Code Diligence Rubric',
        tagline: 'Audit',
        badgeColor: 'bg-rose-50 text-rose-900 border-rose-200',
        icon: '⚖️',
        overview: 'Due diligence framework for Private Equity and M&A buyers to quantify AI-generated technical debt, calculate refactor discounts, and detect negative-carry code.',
        livedExperience: 'While conducting technical due diligence on an AI-native SaaS target seeking a $45M valuation, our forensic audit discovered that 60% of the codebase was generated by unconstrained AI coding tools over 6 months without automated test coverage. The developers shipped features at record speed, but the code had 4x the normal cyclomatic complexity, zero architectural documentation, and broke whenever dependencies updated. The mechanism is Negative-Carry Code: syntax that appears fully functional in staging but carries an ongoing maintenance liability exceeding its value creation. The general principle is that un-tested AI velocity is a balance-sheet liability that requires an immediate valuation write-down during M&A.',
        concepts: [
            {
                id: 'PAIG-SCG-001',
                name: 'Negative-Carry Code Crisis Index',
                definition: 'A quantitative due diligence metric calculating the ratio of unverified AI boilerplate to verified test-harness coverage.',
                problem: 'Buyers pay full multiples for target software companies whose codebases are on the verge of total maintenance insolvency.',
                whyItMatters: 'Provides PE operating partners with exact dollar-value escrow holdbacks to fund post-close code refactoring.',
                provenance: ['CIO.com publications', 'Built In', 'Negative-Carry Code Auditor (NCCA)', 'Curriculum Track 10'],
                implementation: {
                    research: ['The Technical Diligence Guide for PE-Backed AI Acquisitions', 'The Innovation Tax Audit: Is Your R&D Actually Just OpEx?'],
                    diagnostics: ['Negative-Carry Code Auditor (NCCA)', 'Product Debt Index (PDI)'],
                    education: ['Track 10: AI Due Diligence for Investors & Acquirers', 'Track 9: Technical Debt as Financial Liability'],
                    enforcement: 'Exogram Code Quality Gate'
                },
                conceptSlug: 'negative-carry-code-crisis'
            },
            {
                id: 'PAIG-SCG-002',
                name: 'Technical Insolvency Date Horizon',
                definition: 'The mathematically projected date when bug fixes and dependency maintenance consume 100% of sprint capacity, reducing new feature shipping to zero.',
                problem: 'Executives celebrate 300% feature velocity without realizing they are accelerating toward the insolvency wall.',
                whyItMatters: 'Forces engineering teams to establish automated test floors and subtraction budgets before codebases freeze.',
                provenance: ['CIO.com publications', 'Curriculum Track 1'],
                implementation: {
                    research: ['The Technical Insolvency Date: When Your Codebase Freezes'],
                    diagnostics: ['Negative-Carry Code Auditor (NCCA)', 'Valuation Scenario Engine (EV-SE)'],
                    education: ['Track 1: Engineering Economics Foundations'],
                    enforcement: 'Exogram Subtraction Rules'
                },
                conceptSlug: 'vibe-coding'
            }
        ]
    },

    'mcp-zero-trust-gateway': {
        slug: 'mcp-zero-trust-gateway',
        name: 'Zero-Trust MCP Defense Architecture',
        tagline: 'Defend',
        badgeColor: 'bg-rose-50 text-rose-900 border-rose-200',
        icon: '🛡️',
        overview: 'Enterprise security architecture for the Model Context Protocol (MCP): mitigating tool poisoning, STDIO transport RCE, and Shadow MCP exfiltration via proxy gateways.',
        livedExperience: 'While conducting a red-team security assessment of an agentic enterprise cluster using Model Context Protocol connections, we demonstrated an indirect prompt injection attack: an external GitHub issue comment contained malicious instructions that hijacked an un-sandboxed MCP database tool, exfiltrating internal AWS credentials through a raw STDIO transport. The protocol offloads security entirely to the deployer. The mechanism is Shadow MCP Tool Poisoning: agents implicitly trust mutable tool schemas. The general principle is that no autonomous agent should ever connect directly to an MCP server via un-isolated STDIO without an intervening zero-trust proxy gate enforcing cryptographic manifest pinning and payload sanitization.',
        concepts: [
            {
                id: 'PAIG-MCP-001',
                name: 'Cryptographic Manifest Pinning',
                definition: 'The security practice of hashing and pinning all MCP tool definitions at deployment time to prevent dynamic runtime schema mutation (rug-pull attacks).',
                problem: 'Malicious upstream packages modify tool parameters post-installation, tricking agents into executing unauthorized shell commands.',
                whyItMatters: 'Guarantees that agents only invoke verified, immutable tool contracts that have passed security static analysis.',
                provenance: ['OWASP MCP Top 10', 'Netsec Publications (Aug 2026)', 'MCP Security Auditor Tool'],
                implementation: {
                    research: ['Most Companies Shouldn’t Be Using Autonomous Coding Agents Yet'],
                    diagnostics: ['Model Context Protocol Security Auditor', 'Shadow AI Security Audit'],
                    education: ['Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram MCP Cryptographic Gateway'
                },
                conceptSlug: 'mcp-governance'
            },
            {
                id: 'PAIG-MCP-002',
                name: 'STDIO Transport Isolation',
                definition: 'Executing all MCP server binaries inside ephemeral gVisor/Firecracker micro-VMs rather than raw host child processes.',
                problem: 'Raw STDIO execution grants untrusted community MCP packages direct local filesystem and shell access.',
                whyItMatters: 'Contains remote code execution vulnerabilities to isolated memory instances with sub-second teardown.',
                provenance: ['Security Advisory 2026', 'Curriculum Track 21'],
                implementation: {
                    research: ['Your AI Agent Needs a Kill Switch: The Case for Runtime Interception'],
                    diagnostics: ['Model Context Protocol Security Auditor', 'Deterministic Execution Sandbox'],
                    education: ['Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram Micro-VM Tool Runner'
                },
                conceptSlug: 'runtime-vs-alignment'
            }
        ]
    },
    'macro-coding-governance': {
        slug: 'macro-coding-governance',
        name: 'The Macro-Coding Operating Standard',
        tagline: 'Structure',
        badgeColor: 'bg-cyan-50 text-cyan-900 border-cyan-200',
        icon: '🏛️',
        overview: 'Engineering organizational operating standard replacing micro-vibe coding with spec-first architectural bounding, automated compiler gates, and review decoupling.',
        livedExperience: 'In high-velocity engineering organizations, the deployment of AI coding assistants initially boosted feature generation by 300%, but within three months created severe "PR Review Gridlock": senior engineers were overwhelmed reviewing hundreds of fragile, 800-line synthetic PRs. The team had traded writing code for acting as human compilers. The mechanism is Micro-Coding Fragmentation: prompting AI at the line level creates un-coordinated syntactic sprawl. The Macro-Coding Standard enforces that human engineers operate exclusively at the architectural tier (specifying schemas, boundary constraints, and integration assertions) while automated subagent swarms execute within isolated Git worktrees under strict compiler gates.',
        concepts: [
            {
                id: 'PAIG-MCG-001',
                name: 'Spec-First Architectural Bounding',
                definition: 'The mandatory rule that no agent or developer begins coding until machine-readable schemas, file boundaries, and acceptance tests are merged into the repository.',
                problem: 'Conversational prompt-to-code leads to hallucinated database schema alterations and silent multi-tenant regressions.',
                whyItMatters: 'Provides autonomous coding agents with unambiguous execution boundaries, dropping hallucination rates by over 85%.',
                provenance: ['Reddit r/ExperiencedDevs (Aug 2026)', 'Built In Editor Pick', 'SDD Quality Scorecard'],
                implementation: {
                    research: ['Cursor vs Google Antigravity for Production AI Building', 'The AI Coding Tool Battle Is Moving Somewhere More Important Than Code'],
                    diagnostics: ['SDD Spec Quality Scorecard', 'AI Code Review Bottleneck Calculator'],
                    education: ['Track 19: AI Agent Architecture & Economics'],
                    enforcement: 'Exogram Spec Compiler Interceptor'
                },
                conceptSlug: 'spec-driven-development'
            },
            {
                id: 'PAIG-MCG-002',
                name: 'Pre-Review Mechanical Verification',
                definition: 'Automated CI/CD pipelines executing type compilation, linting, and unit assertions before PR assignment to senior engineers.',
                problem: 'Senior engineers waste 30-50% of sprint capacity reviewing broken AI syntax and unverified edge cases.',
                whyItMatters: 'Reclaims over $120k annually per senior engineer in wasted payroll drag and slashes review queues from weeks to minutes.',
                provenance: ['LinkedIn Executive Series', 'AARI Benchmark'],
                implementation: {
                    research: ['When AI Writes the Code, What Are Employers Hiring For?'],
                    diagnostics: ['AI Code Review Bottleneck Calculator', 'Autonomous Agent Readiness Index (AARI)'],
                    education: ['Track 1: Engineering Economics Foundations'],
                    enforcement: 'Exogram Zero-Trust Compiler Gate'
                },
                conceptSlug: 'zero-trust-type-verification'
            }
        ]
    },

    'board-fiduciary-governance': {
        slug: 'board-fiduciary-governance',
        name: 'The Boardroom AI Fiduciary Framework',
        tagline: 'Govern',
        badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
        icon: '🏛️',
        overview: 'Executive fiduciary governance for Board Directors, CEOs, and Audit Committees to oversee AI capital allocation, prevent shadow delegation, and verify balance-sheet code liabilities.',
        livedExperience: 'While briefing the board of a publicly traded software enterprise, the CEO proudly presented a slide claiming "300% AI engineering acceleration." When the Audit Committee asked what percentage of current sprint capacity was consumed by bug fixes and maintenance, management had no answer. Our forensic audit revealed that 58% of engineering payroll was consumed by uncapitalized maintenance on AI boilerplate, and autonomous CRM agents were executing unauthorized customer discounts. The mechanism is Fiduciary Blindness: board committees tracking revenue and headcount without quantitative visibility into R&D capital efficiency or agentic delegation limits. The Boardroom AI Fiduciary Framework provides directors with an un-fudgeable, financial-first dashboard of technical liabilities and autonomous boundaries.',
        concepts: [
            {
                id: 'PAIG-BFG-001',
                name: 'Boardroom AI Risk Oversight',
                definition: 'The fiduciary duty of corporate boards to actively govern non-deterministic AI systems, evaluate synthetic debt liabilities, and mandate formal signing matrices.',
                problem: 'Boards treat AI as an IT department concern until an autonomous agent bypasses internal controls or triggers an SEC disclosure event.',
                whyItMatters: 'Protects directors from duty-of-oversight liabilities (Caremark claims) and ensures enterprise capital is invested in genuine innovation.',
                provenance: ['CIO.com Executive Series', 'Board AI Governance Scorecard', 'Curriculum Track 10'],
                implementation: {
                    research: ['The Technical Diligence Guide for PE-Backed AI Acquisitions', 'The Innovation Tax: Is Your R&D Actually Just OpEx?'],
                    diagnostics: ['Board AI Governance Scorecard', 'Valuation Scenario Engine (EV-SE)'],
                    education: ['Track 10: AI Due Diligence for Investors & Acquirers'],
                    enforcement: 'Exogram Executive Policy Matrix'
                },
                conceptSlug: 'deterministic-governance'
            },
            {
                id: 'PAIG-BFG-002',
                name: 'Autonomous Agent Signing Matrix (SOX 404)',
                definition: 'A formal corporate delegation policy establishing deterministic dollar thresholds ($) and multi-signature gates for autonomous software agents.',
                problem: 'Autonomous agents independently modify pricing tiers, approve refunds, and commit code without executive authorization.',
                whyItMatters: 'Maintains strict Sarbanes-Oxley 404 internal control compliance for algorithmic enterprise workflows.',
                provenance: ['Built In publications', 'Exogram Runtime Governance'],
                implementation: {
                    research: ['Your AI Agent Needs a Kill Switch: The Case for Runtime Interception'],
                    diagnostics: ['Board AI Governance Scorecard', 'Shadow AI Security Audit'],
                    education: ['Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram Binary Signing Proxy'
                },
                conceptSlug: 'shadow-delegation'
            }
        ]
    },
    'cfo-capital-allocation': {
        slug: 'cfo-capital-allocation',
        name: 'The CFO AI Capital Allocation Model',
        tagline: 'Capitalize',
        badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
        icon: '📊',
        overview: 'Financial engineering operating model for CFOs and finance leaders to optimize Section 174 R&D capitalization, eliminate the Innovation Tax, and defend SaaS EBITDA margins.',
        livedExperience: 'In modern technology companies, CFOs face a dual financial crisis: cloud GPU token bills scale non-linearly with user activity (compressing gross margins from 80% to 45%), while IRS Section 174 rules mandate 5-year domestic amortization of all R&D expenses. If 60% of your engineering payroll is actually routine bug fixing on AI code, claiming that spend as capitalized R&D creates massive phantom taxable income. The CFO Capital Allocation Model provides finance leaders with automated telemetry to segregate true innovation from maintenance OpEx, structure tiered inference cascades, and defend enterprise exit multiples.',
        concepts: [
            {
                id: 'PAIG-CFO-001',
                name: 'Section 174 R&D Forensic Segregation',
                definition: 'The mathematical classification of engineering activities into capitalizable innovation R&D vs deductible maintenance OpEx.',
                problem: 'Over-reporting maintenance as innovation triggers severe 5-year amortization tax drag under Section 174.',
                whyItMatters: 'Restores cash flow liquidity by ensuring only genuine new architectural capabilities are subjected to multi-year amortization.',
                provenance: ['Foundry / CIO.com', 'CFO R&D Capitalization Audit', 'Curriculum Track 1'],
                implementation: {
                    research: ['Why Your CFO Hates Your Agile Transformation', 'The Innovation Tax'],
                    diagnostics: ['CFO AI R&D Capitalization Audit', 'Product Debt Index (PDI)'],
                    education: ['Track 1: Engineering Economics Foundations'],
                    enforcement: 'Exogram Sprint Telemetry Classifier'
                },
                conceptSlug: 'innovation-tax'
            },
            {
                id: 'PAIG-CFO-002',
                name: 'Synthetic COGS Amortization Curve',
                definition: 'The accounting and FinOps methodology for tracking variable token consumption as direct cost of goods sold rather than general hosting OpEx.',
                problem: 'Buried GPU bills obscure negative-carry features until gross margins collapse during financial audits.',
                whyItMatters: 'Enables feature-level contribution margin visibility and guides pricing transitions to credit-based token consumption rails.',
                provenance: ['Built In publications', 'AUEB Benchmark'],
                implementation: {
                    research: ['Growth Is Not Your Cost Problem  -  Your Architecture Is', 'How to Reduce LLM API Token Costs in Production'],
                    diagnostics: ['AI Unit Economics Benchmark (AUEB)', 'AI Feature Unit Margin Matrix'],
                    education: ['Track 2: AI Economics & Margin Engineering'],
                    enforcement: 'Exogram Token Ledger Interceptor'
                },
                conceptSlug: 'ai-cogs'
            }
        ]
    },
    'vp-engineering-operating-model': {
        slug: 'vp-engineering-operating-model',
        name: 'The VP Engineering Capital Operating Standard',
        tagline: 'Elevate',
        badgeColor: 'bg-indigo-50 text-indigo-900 border-indigo-200',
        icon: '⚡',
        overview: 'Executive leadership standard for VPs and Directors of Engineering: transitioning teams from story-point sprint velocity to capital efficiency, macro-coding, and talent modernization.',
        livedExperience: 'When I consult with engineering executives, the most common frustration is the "Productivity Paradox": the team has GitHub Copilot, Cursor, and Claude Code enabled, commit frequency is up 400%, but feature delivery dates are slipping and senior architects are exhausted. The root cause is managing modern AI teams with 2012 Agile metrics. Measuring story points or lines of code incentives synthetic clutter. The VP Engineering Capital Operating Standard re-aligns engineering incentives around Annualized Productive Engineering Revenue (APER), automated compiler bounding, and sovereign talent leveling.',
        concepts: [
            {
                id: 'PAIG-VPE-001',
                name: 'Annualized Productive Engineering Revenue (APER)',
                definition: 'An executive efficiency metric calculating the net enterprise revenue generated per fully-loaded engineering headcount after deducting technical debt maintenance.',
                problem: 'Sprint velocity and DORA deployment frequency reward teams for shipping high-churn, low-value boilerplate.',
                whyItMatters: 'Translates engineering productivity directly into boardroom revenue metrics ($/Engineer).',
                provenance: ['CIO.com publications', 'APER Diagnostic Tool', 'Curriculum Track 1'],
                implementation: {
                    research: ['Hey, Senior PMs: Shipping Faster Won’t Get You Promoted', 'The Technical Insolvency Date'],
                    diagnostics: ['APER Benchmark Tool', 'Product Debt Index (PDI)'],
                    education: ['Track 1: Engineering Economics Foundations'],
                    enforcement: 'Exogram Team Efficiency Dashboard'
                },
                conceptSlug: 'aper-metric'
            },
            {
                id: 'PAIG-VPE-002',
                name: 'Post-Syntax Career Architecture',
                definition: 'The restructuring of engineering job ladders, hiring rubrics, and performance reviews to reward verification, architectural judgment, and specification design over manual syntax writing.',
                problem: 'Interviewing candidates on whiteboard LeetCode algorithms when AI tools generate identical code in 200ms.',
                whyItMatters: 'Builds resilient engineering organizations staffed by macro-architects who can safely govern autonomous agent swarms.',
                provenance: ['Built In Editor Pick', 'Audit Interview Scorecard'],
                implementation: {
                    research: ['When AI Writes the Code, What Are Employers Hiring For?', 'Reimagining the Coding Interview for the AI Generation'],
                    diagnostics: ['Audit Interview Protocol', 'Career Architecture Funnel'],
                    education: ['Track 15: AI Career Pivot & Engineering Strategy'],
                    enforcement: 'Exogram Audit Interview Engine'
                },
                conceptSlug: 'audit-interview'
            }
        ]
    },

    'cpo-product-strategy': {
        slug: 'cpo-product-strategy',
        name: 'The CPO Sovereign Product Strategy Framework',
        tagline: 'Monetize',
        badgeColor: 'bg-violet-50 text-violet-900 border-violet-200',
        icon: '🎯',
        overview: 'Product leadership operating standard for CPOs, VPs of Product, and Product Directors: eliminating negative-carry AI features, enforcing 70%+ gross margin floors, and transitioning from seat-based to outcome monetization.',
        livedExperience: 'When consulting with growth-stage SaaS product leaders, the most common trap is the "AI Feature Panic": every competitor launched a conversational chat assistant, so the product team rushed 6 LLM features onto their roadmap without modeling the variable token burn. Within 6 months, their heaviest enterprise power users generated tens of thousands of complex multi-agent queries, driving feature-level gross margin to negative 35%. The mechanism is Flat-Fee AI Cannibalization: selling variable compute costs under fixed monthly seat pricing. The CPO Sovereign Product Strategy Framework forces product organizations to treat inference as direct COGS, enforce strict margin floors before PRD sign-off, and package AI capabilities into consumption credits and outcome-based pricing tiers.',
        concepts: [
            {
                id: 'PAIG-CPO-001',
                name: 'Product Portfolio Margin Floor (70% Rule)',
                definition: 'The product governance rule requiring all AI capabilities to maintain at least 70% gross margin under peak user consumption loads.',
                problem: 'Unbounded token consumption by power users secretly turns high-ARR accounts into net-negative gross margin liabilities.',
                whyItMatters: 'Preserves enterprise SaaS software valuation multiples by defending gross profit margins.',
                provenance: ['Built In publications', 'CPO Feature Margin Matrix', 'Curriculum Track 2'],
                implementation: {
                    research: ['How to Reduce LLM API Token Costs in Production', 'Growth Is Not Your Cost Problem  -  Your Architecture Is'],
                    diagnostics: ['CPO AI Feature Margin Matrix', 'AI Unit Economics Benchmark (AUEB)'],
                    education: ['Track 2: AI Economics & Margin Engineering'],
                    enforcement: 'Exogram Margin Interceptor'
                },
                conceptSlug: 'ai-cogs'
            },
            {
                id: 'PAIG-CPO-002',
                name: 'Seat-to-Outcome Pricing Transition',
                definition: 'The systematic migration of SaaS pricing architecture from per-user monthly seats to consumption credits, work units, or guaranteed business outcomes.',
                problem: 'As AI agents automate knowledge worker tasks, enterprise customers reduce employee seat counts, shrinking traditional SaaS contract values.',
                whyItMatters: 'Aligns vendor revenue with enterprise value creation rather than human headcounts that are actively being automated.',
                provenance: ['Product Leadership Series', 'AUEB Benchmark'],
                implementation: {
                    research: ['Why Your CFO Hates Your Agile Transformation', 'The Autonomous Enterprise'],
                    diagnostics: ['CPO AI Feature Margin Matrix', 'Agentic FTE Displacement Matrix'],
                    education: ['Track 19: AI Agent Architecture & Economics'],
                    enforcement: 'Exogram Usage Metering Proxy'
                },
                conceptSlug: 'probabilistic-product-management'
            }
        ]
    },
    'ceo-enterprise-operating-model': {
        slug: 'ceo-enterprise-operating-model',
        name: 'The CEO Autonomous Enterprise Standard',
        tagline: 'Transform',
        badgeColor: 'bg-indigo-50 text-indigo-900 border-indigo-200',
        icon: '👑',
        overview: 'Executive organizational operating blueprint for CEOs, COOs, Managing Directors, and SVPs to transition legacy corporate matrix hierarchies into high-leverage agentic operating units.',
        livedExperience: 'In large enterprises, executive leadership faces "Pilot Paralysis": hundreds of uncoordinated AI pilots across marketing, customer support, and engineering with zero compounding moat and millions in un-tracked SaaS spend. The root cause is applying legacy 20th-century matrix management to 21st-century autonomous software. The CEO Autonomous Enterprise Standard consolidates fragmented departmental experiments into sovereign, cross-functional agentic units governed by automated binary signing limits and centralized capital allocation ledgers.',
        concepts: [
            {
                id: 'PAIG-CEO-001',
                name: 'Sovereign Moat Architecture',
                definition: 'The executive strategy of investing capital in proprietary enterprise data pipelines, fine-tuned SLM weights, and deterministic governance rather than rented third-party wrapper APIs.',
                problem: 'Building thin wrappers on generic foundation models leaves enterprise software vulnerable to instant commoditization by platform providers.',
                whyItMatters: 'Guarantees durable enterprise value, defensible intellectual property, and independence from foundation model price hikes.',
                provenance: ['CIO.com Executive Briefing', 'CEO AI Operating Model Diagnostic'],
                implementation: {
                    research: ['The Technical Diligence Guide for PE-Backed AI Acquisitions', 'Most Companies Shouldn’t Be Using Autonomous Coding Agents Yet'],
                    diagnostics: ['Executive AI Operating Model Diagnostic', 'Board AI Governance Scorecard'],
                    education: ['Track 10: AI Due Diligence for Investors & Acquirers'],
                    enforcement: 'Exogram Sovereign Gateway'
                },
                conceptSlug: 'systems-governor'
            },
            {
                id: 'PAIG-CEO-002',
                name: 'Cross-Functional Agentic Unit Design',
                definition: 'Restructuring functional silos into small, multidisciplinary teams comprising a domain leader, an AI systems architect, and dedicated autonomous agent swarms.',
                problem: 'Traditional matrix orgs suffer from cross-departmental friction and communication latency that erases AI execution speed.',
                whyItMatters: 'Enables 10x output per employee while maintaining strict executive risk bounding and capital accountability.',
                provenance: ['Executive Advisory Series', 'Curriculum Track 21'],
                implementation: {
                    research: ['Cursor vs Google Antigravity for Production AI Building', 'The Innovation Tax'],
                    diagnostics: ['Executive AI Operating Model Diagnostic', 'APER Benchmark Tool'],
                    education: ['Track 21: AI Agent Governance & Trust Infrastructure'],
                    enforcement: 'Exogram Organization Policy Controller'
                },
                conceptSlug: 'deterministic-governance'
            }
        ]
    },
    'cro-revenue-transition': {
        slug: 'cro-revenue-transition',
        name: 'The CRO AI Monetization & GTM Standard',
        tagline: 'Monetize',
        badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
        icon: '💼',
        overview: 'Go-to-market and revenue leadership standard for CROs, VPs of Sales, and CS Directors: structuring AI consumption contracts, defending net revenue retention, and adapting sales quotas.',
        livedExperience: 'When enterprise sales teams pitch AI-powered SaaS solutions, enterprise procurement officers routinely demand proof of ROI before agreeing to multi-year contracts. Furthermore, as customers deploy internal AI agents that reduce their human headcount, annual contract renewals face 20-30% seat contraction. The CRO AI Monetization Standard equips revenue organizations to replace vulnerable per-seat contracts with hybrid platform-fee plus consumption-credit commitments, establishing net revenue retention expansion even as client headcounts streamline.',
        concepts: [
            {
                id: 'PAIG-CRO-001',
                name: 'Hybrid Platform + Consumption Packaging',
                definition: 'A commercial contract structure combining a predictable base platform license fee with prepaid consumption credits for high-compute AI reasoning workflows.',
                problem: 'Pure usage pricing creates volatile revenue forecasting; pure seat pricing leads to gross margin compression.',
                whyItMatters: 'Provides predictable recurring ARR while capturing upside from power-user enterprise token consumption.',
                provenance: ['SaaS Revenue Economics', 'Curriculum Track 2'],
                implementation: {
                    research: ['Why Your CFO Hates Your Agile Transformation', 'The Autonomous Enterprise'],
                    diagnostics: ['CPO AI Feature Margin Matrix', 'AI Unit Economics Benchmark (AUEB)'],
                    education: ['Track 2: AI Economics & Margin Engineering'],
                    enforcement: 'Exogram Metering Ledger'
                },
                conceptSlug: 'ai-cogs'
            },
            {
                id: 'PAIG-CRO-002',
                name: 'Net Retention AI Deflation Hedge',
                definition: 'The go-to-market strategy of expanding customer lifetime value by selling automated business outcome modules rather than licensing human user seats.',
                problem: 'Customer seat reductions cause severe net negative revenue retention (NDR < 90%) across traditional SaaS vendors.',
                whyItMatters: 'Protects enterprise valuation multiples by sustaining 120%+ net revenue retention through algorithmic workflow adoption.',
                provenance: ['Executive Advisory Series', 'EV-SE Scenario Engine'],
                implementation: {
                    research: ['The Technical Diligence Guide for PE-Backed AI Acquisitions'],
                    diagnostics: ['Valuation Scenario Engine (EV-SE)', 'Agentic FTE Displacement Matrix'],
                    education: ['Track 10: AI Due Diligence for Investors & Acquirers'],
                    enforcement: 'Exogram Customer Quota Gate'
                },
                conceptSlug: 'probabilistic-product-management'
            }
        ]
    }

};

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
}

export interface SubFramework {
    slug: string;
    name: string;
    tagline: string;
    badgeColor: string;
    icon: string;
    overview: string;
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
        concepts: [
            {
                id: 'PAIG-ECON-001',
                name: 'AI Unit Economics',
                definition: 'The marginal cost structures of running generative inference models per user activity.',
                problem: 'Organizations scale AI features assuming standard SaaS gross margins (80%+), only to experience margin collapse as AI costs scale dynamically with usage.',
                whyItMatters: 'Calculating cost-per-interaction allows organizations to adjust pricing tiers or model routing before running at a loss.',
                provenance: ['CIO.com articles', 'Built In publications', 'AI Unit Economics Benchmark (AUEB)', 'Curriculum Track 2', 'Exogram Platform'],
                implementation: {
                    research: ['Most AI Projects Burn Cash', 'Your Claude API Bill is Higher Than Your Revenue'],
                    diagnostics: ['AI Unit Economics Benchmark (AUEB)', 'AI Unit Economics Audit'],
                    education: ['Track 2: AI AI Economics', 'Track 24: AI Economics & Margin Engineering'],
                    enforcement: 'Exogram API Token Budget Enforcer'
                }
            },
            {
                id: 'PAIG-ECON-002',
                name: 'Synthetic COGS',
                definition: 'Attribute-based variable costs (GPU cycles, embeddings, vector search) that replace traditional static server opex.',
                problem: 'Variable AI inferencing is incorrectly capitalized as fixed server hosting, masking structural gross margin erosion.',
                whyItMatters: 'Correctly identifying Synthetic COGS ensures accurate gross profit reporting and models true product contribution margins.',
                provenance: ['CIO.com articles', 'Manning Book Proposal', 'Curriculum Track 2'],
                implementation: {
                    research: ['The Hidden Inflation of AI: Why Model Collapse is a Business Risk'],
                    diagnostics: ['AI Unit Economics Benchmark (AUEB)', 'SLM vs API Arbitrage'],
                    education: ['Track 2: AI AI Economics', 'Track 7: Cloud FinOps & AI Cost Management'],
                    enforcement: 'Exogram Route optimizer & Caching Engine'
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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

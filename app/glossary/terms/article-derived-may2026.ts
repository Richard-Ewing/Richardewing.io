/**
 * Glossary terms derived from Richard Ewing articles published 5/21/2026:
 * - "Your AI Agent Needs a Kill Switch" (Built In)
 * - "Your Claude API Bill Is Higher Than Your Revenue" (CIO.com)
 * 
 * Semantic compounding: each term cross-links to tools, failures, compare pages.
 */
import type { GlossaryTerm } from '../types';

export const articleDerivedMay2026Terms: GlossaryTerm[] = [
    {
        slug: 'agentic-kill-switch',
        title: 'Agentic Kill Switch',
        category: 'AI Governance & Verification',
        definition: `An agentic kill switch is a deterministic execution control mechanism that can immediately halt all autonomous AI agent actions when safety conditions are violated. Unlike probabilistic guardrails that evaluate whether an action "looks safe," a kill switch enforces binary pass/fail rules against an explicit allowlist of permitted operations.\n\nThe concept emerged from the recognition that enterprise AI agents now execute real actions against production systems  -  querying databases, calling APIs, modifying files, sending communications, and making decisions with financial and legal consequences. The primary containment model the industry adopted (guardrails, confidence scores, LLM-as-a-judge evaluations) is fundamentally broken because it uses probabilistic systems to police probabilistic systems.\n\nAs Richard Ewing wrote in Built In (May 2026): "Guardrails are the TSA of AI: expensive, visible, and designed to make stakeholders feel safe rather than actually prevent the breach." A kill switch replaces probabilistic evaluation with deterministic execution control  -  admissibility gates, state integrity hashing, and cryptographic audit ledgers.`,
        whyItMatters: `Enterprise AI agents have database credentials, API keys, and file system access. They make decisions with financial, legal, and reputational consequences. The industry's primary containment mechanism is asking a probabilistic system whether another probabilistic system's probabilistic output is probably safe.\n\nThat is not security. That is hope.\n\nA kill switch ensures that every action an AI agent proposes passes through a deterministic control layer before it touches any production system. This layer does not evaluate probability  -  it enforces rules. The action is either in the set of permitted operations or it is not. There is no "probably safe."\n\nOrganizations deploying AI agents without a kill switch are operating without the minimum viable security architecture for autonomous systems.`,
        howToApply: `1. **Implement an admissibility gate**: Every proposed agent action is evaluated against an explicit allowlist. Binary pass/fail  -  not a confidence check.\n2. **Add state integrity checking**: Hash the environment before and after every agent action. If post-action state deviates beyond a defined threshold, automatically roll back.\n3. **Deploy a cryptographic audit ledger**: Log every proposed action, every gate evaluation, and every execution outcome with immutable cryptographic integrity.\n4. **Enforce permission boundaries**: Agents should only access the minimum set of tools and data required for their specific task. No inherited permissions from parent agents.\n5. **Build the gate pipeline for speed**: The entire pipeline can execute in under 5ms per action  -  this is not a performance tradeoff.`,
        faqs: [
            { question: 'What is an AI agent kill switch?', answer: 'A deterministic mechanism that immediately halts all autonomous AI agent actions when safety conditions are violated. It enforces binary rules, not probabilistic guesses.' },
            { question: 'Why are guardrails insufficient for AI agents?', answer: 'Guardrails use probabilistic systems (confidence scores, LLM-as-a-judge) to evaluate other probabilistic systems. A prompt injection that looks syntactically valid will sail through. You are asking a guessing system to evaluate whether another guessing system guessed correctly.' },
            { question: 'How does a kill switch differ from guardrails?', answer: 'Guardrails evaluate probability. A kill switch enforces rules. The action is either permitted or blocked  -  no middle ground, no confidence scores, no "probably safe."' },
            { question: 'What is the performance impact of a kill switch?', answer: 'Minimal. The entire deterministic gate pipeline can execute in under 5 milliseconds per action. This is not a performance tradeoff  -  it is baseline security infrastructure.' },
        ],
        relatedTerms: ['guardrails', 'prompt-injection', 'hallucination-debt', 'agentic-workflow', 'admissibility-gate', 'memory-poisoning'],
        relatedFailures: ['autonomous-execution-risk', 'hallucination-debt'],
        relatedControls: ['boundary-control', 'schema-integrity'],
        relatedTools: [{ name: 'Exogram Architecture', url: '/exogram/architecture' }],
        relatedArticles: [{ title: 'Your AI Agent Needs a Kill Switch (Built In)', url: 'https://builtin.com/articles/ai-agent-kill-switch' }],
        tier: 'pillar',
    },
    {
        slug: 'admissibility-gate',
        title: 'Admissibility Gate',
        category: 'AI Governance & Verification',
        definition: `An admissibility gate is a deterministic checkpoint in an AI execution pipeline that evaluates every proposed agent action against an explicit allowlist of permitted operations. Unlike confidence thresholds or output filters, an admissibility gate performs a binary pass/fail evaluation  -  the action is either in the set of permitted operations or it is not.\n\nThe concept is central to deterministic execution control architecture. In this model, inference remains probabilistic (the AI can generate any proposal), but execution is deterministic (only pre-approved actions reach production systems). The admissibility gate is the boundary between these two layers.\n\nAdmissibility gates solve the fundamental flaw in guardrail-based security: guardrails evaluate probability, while gates enforce rules. A well-formed hallucination or a syntactically valid prompt injection will pass a guardrail. It will not pass an admissibility gate if the action is not on the allowlist.`,
        whyItMatters: `Without admissibility gates, AI agents operate with implicit permission to perform any action that "looks correct" to a probabilistic evaluator. This is equivalent to giving an employee access to every system in the company and relying on their "good judgment" to decide what to do.\n\nAdmissibility gates make the attack surface explicit and manageable. They transform AI security from "hope the model doesn't do something wrong" to "the model can only do things we explicitly permitted."`,
        howToApply: `1. **Define an explicit allowlist** of permitted operations for each agent role.\n2. **Evaluate every proposed action** against the allowlist before execution.\n3. **Return binary results**  -  PERMIT or DENY. No partial approvals.\n4. **Log every evaluation** to the cryptographic audit ledger.\n5. **Review and update allowlists** as agent capabilities expand.`,
        faqs: [
            { question: 'What is an admissibility gate in AI?', answer: 'A deterministic checkpoint that evaluates every proposed AI agent action against an explicit allowlist. Binary pass/fail  -  if the action is not on the list, it is blocked.' },
            { question: 'How is an admissibility gate different from a guardrail?', answer: 'Guardrails are probabilistic  -  they evaluate whether an action "looks safe." Admissibility gates are deterministic  -  they check whether an action is explicitly permitted. One guesses. The other enforces.' },
        ],
        relatedTerms: ['agentic-kill-switch', 'guardrails', 'prompt-injection', 'deterministic-routing'],
        relatedControls: ['boundary-control'],
        relatedTools: [{ name: 'Exogram Architecture', url: '/exogram/architecture' }],
        relatedArticles: [{ title: 'Your AI Agent Needs a Kill Switch (Built In)', url: 'https://builtin.com/articles/ai-agent-kill-switch' }],
    },
    {
        slug: 'memory-poisoning',
        title: 'Memory Poisoning',
        category: 'AI Governance & Verification',
        definition: `Memory poisoning is an attack vector against AI agents with persistent memory, where malicious data injected into an agent's memory store during one session influences every subsequent session. The agent cannot distinguish between legitimate learned context and adversarial input because it has no mechanism for memory integrity verification.\n\nThis attack is particularly dangerous because it is invisible to standard guardrails. The guardrail evaluates the current action in the current session  -  it has no visibility into how the agent's memory was formed. A poisoned memory creates a persistent backdoor that survives session boundaries.\n\nMemory poisoning compounds with cascading permissions in multi-agent orchestration. If a parent agent's memory is poisoned, every downstream agent that inherits its context operates on corrupted assumptions.`,
        whyItMatters: `Agents with persistent memory are increasingly deployed in enterprise environments for customer service, code generation, data analysis, and decision support. If an adversary can inject instructions into the agent's memory through a single interaction (e.g., an email, a document, a chat message), they gain persistent influence over every future interaction.\n\nThis is the AI equivalent of a rootkit  -  a persistent, invisible compromise that survives reboots (session boundaries). Standard security scans (guardrails) cannot detect it because the poisoned context looks like legitimate memory.`,
        howToApply: `1. **Implement memory integrity hashing**: Hash the agent's memory state before and after each session. Detect unauthorized modifications.\n2. **Isolate memory domains**: Separate memory by trust level. User-provided context should not have the same authority as system instructions.\n3. **Apply memory decay policies**: Automatically expire or quarantine memory entries older than a defined threshold.\n4. **Use cryptographic provenance**: Track the origin of every memory entry with tamper-proof logging.\n5. **Deploy state integrity checks**: Part of the kill switch architecture  -  verify environment state before and after every agent action.`,
        faqs: [
            { question: 'What is AI memory poisoning?', answer: 'An attack where malicious data is injected into an AI agent persistent memory during one session, influencing all future sessions. The agent cannot tell the difference between legitimate context and adversarial input.' },
            { question: 'Why can guardrails not prevent memory poisoning?', answer: 'Guardrails evaluate the current action in the current session. They have no visibility into how the agent memory was formed. The poisoned context looks like normal learned behavior.' },
        ],
        relatedTerms: ['agentic-kill-switch', 'prompt-injection', 'context-rot', 'hallucination-debt'],
        relatedFailures: ['context-rot'],
        relatedControls: ['schema-integrity'],
        relatedArticles: [{ title: 'Your AI Agent Needs a Kill Switch (Built In)', url: 'https://builtin.com/articles/ai-agent-kill-switch' }],
    },
    {
        slug: 'model-task-mismatch',
        title: 'Model-Task Mismatch',
        category: 'AI & Machine Learning',
        definition: `Model-task mismatch occurs when an organization deploys a high-capability (and high-cost) AI model for tasks that do not require its full reasoning capacity. The most common example is using frontier models like Claude Opus or GPT-4 for simple formatting, data extraction, or templated generation tasks that a smaller, cheaper model could handle equivalently.\n\nAs Richard Ewing wrote in CIO.com (May 2026): "Your Claude API bill is higher than your revenue"  -  a direct consequence of model-task mismatch at scale. The economics are straightforward: a frontier model costs 10-50x more per request than a smaller model, but for simple tasks, the output quality is identical.\n\nModel-task mismatch is the AI equivalent of hiring a surgeon to apply Band-Aids. The work gets done, but the unit economics destroy the business case.`,
        whyItMatters: `Most enterprises deploy a single model tier for all AI features during prototyping. When that prototype reaches production scale, the per-request cost scales linearly while revenue often does not. The result is margin collapse  -  the most popular AI features become the most expensive.\n\nOrganizations that do not implement tiered inference routing will inevitably reach a collapse point where the cost of serving AI features exceeds the revenue they generate. The AI Unit Economics Calculator at richardewing.io/tools/aueb quantifies this exact threshold.`,
        howToApply: `1. **Audit your API costs by task type**: Classify every AI call by complexity  -  simple (formatting, extraction), medium (summarization, analysis), complex (reasoning, planning).\n2. **Implement tiered inference routing**: Route simple tasks to smaller/cheaper models, reserve frontier models for complex reasoning.\n3. **Calculate your collapse point**: Use the AI Unit Economics Calculator to find the exact usage volume where your AI feature starts destroying margin.\n4. **Set cost ceilings per feature**: Cap API spend per feature and alert when thresholds approach.\n5. **Measure output quality across tiers**: Often a smaller model produces identical output for simple tasks at 1/50th the cost.`,
        faqs: [
            { question: 'What is model-task mismatch?', answer: 'Using an expensive frontier AI model for simple tasks that a cheaper model could handle equally well. It is the AI equivalent of hiring a surgeon to apply Band-Aids.' },
            { question: 'How much does model-task mismatch cost?', answer: 'Frontier models cost 10-50x more per request than smaller models. For simple tasks like formatting or extraction, the output quality is identical  -  you are paying 50x for zero incremental value.' },
            { question: 'How do I fix model-task mismatch?', answer: 'Implement tiered inference routing: classify tasks by complexity and route each to the appropriate model tier. Use the AUEB calculator at richardewing.io/tools/aueb to find your cost collapse point.' },
        ],
        relatedTerms: ['ai-cogs', 'cost-of-predictivity', 'ai-inference', 'tiered-inference-routing'],
        relatedTools: [{ name: 'AI Unit Economics Calculator', url: '/tools/aueb' }],
        relatedArticles: [{ title: 'Your Claude API Bill Is Higher Than Your Revenue (CIO.com)', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html' }],
        tier: 'pillar',
    },
    {
        slug: 'api-cost-governance',
        title: 'API Cost Governance',
        category: 'AI Governance & Verification',
        definition: `API cost governance is the organizational practice of monitoring, controlling, and optimizing the financial exposure created by AI model API consumption. It encompasses cost ceiling enforcement, usage-based alerting, tiered routing policies, and per-feature unit economics tracking.\n\nWithout API cost governance, enterprises commonly experience cost spirals  -  proof-of-concept AI features that cost hundreds of dollars in development balloon into million-dollar monthly bills at production scale. This happens because AI API costs scale with usage volume, not with fixed infrastructure pricing.\n\nAPI cost governance is distinct from traditional FinOps because it requires understanding the relationship between model capability, task complexity, and output quality  -  not just infrastructure utilization.`,
        whyItMatters: `The most dangerous cost in enterprise AI is invisible: variable compute charges that accumulate per-request without fixed ceilings. An AI agent entering a retry loop can burn thousands of dollars overnight. A popular AI feature can quietly consume more in API costs than it generates in revenue.\n\nPractitioners on Reddit and Hacker News have reported POCs costing hundreds of dollars that became nearly million-dollar monthly bills in production. Without governance, the most popular AI features become the most expensive  -  the "success penalty" of AI deployment.\n\nThe AI Unit Economics Calculator (AUEB) at richardewing.io/tools/aueb helps organizations calculate the exact usage volume where an AI feature starts destroying margin.`,
        howToApply: `1. **Track cost per request by feature**: Know exactly what each AI feature costs per invocation.\n2. **Set hard cost ceilings**: Implement automatic throttling or fallback when API spend exceeds defined thresholds.\n3. **Implement retry budgets**: Cap the number of retries any AI agent can perform per task to prevent retry inflation.\n4. **Deploy tiered routing**: Route tasks to the cheapest model capable of adequate output quality.\n5. **Alert on anomalies**: Flag sudden usage spikes before they become budget crises.`,
        faqs: [
            { question: 'What is API cost governance?', answer: 'The practice of monitoring, controlling, and optimizing AI model API costs. It prevents cost spirals where popular AI features silently consume more in API costs than they generate in revenue.' },
            { question: 'Why is AI API cost governance different from FinOps?', answer: 'Traditional FinOps focuses on infrastructure utilization. AI cost governance requires understanding model capability, task complexity, and output quality to optimize the cost-quality tradeoff per request.' },
        ],
        relatedTerms: ['ai-cogs', 'model-task-mismatch', 'retry-inflation', 'tiered-inference-routing', 'ai-finops'],
        relatedTools: [{ name: 'AI Unit Economics Calculator', url: '/tools/aueb' }],
        relatedArticles: [{ title: 'Your Claude API Bill Is Higher Than Your Revenue (CIO.com)', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html' }],
    },
    {
        slug: 'tiered-inference-routing',
        title: 'Tiered Inference Routing',
        category: 'AI & Machine Learning',
        definition: `Tiered inference routing is an AI infrastructure pattern where incoming requests are classified by complexity and routed to the most cost-efficient model capable of producing adequate output quality. Simple tasks (formatting, extraction, classification) route to smaller models, while complex tasks (multi-step reasoning, code generation, strategic analysis) route to frontier models.\n\nThis pattern directly addresses model-task mismatch  -  the most common cause of AI cost overruns in enterprise deployments. Without tiered routing, organizations pay frontier-model prices for every request, regardless of whether the task requires frontier-model capabilities.\n\nThe routing decision can be rule-based (keyword classification), model-based (a lightweight classifier), or hybrid. The key insight is that for 60-80% of enterprise AI tasks, a smaller model produces identical output at 1/10th to 1/50th the cost.`,
        whyItMatters: `Enterprise AI economics are unsustainable without tiered routing. When every API call goes to a frontier model, costs scale linearly with usage while output quality remains constant for simple tasks. The result is predictable: the most popular AI features become the most expensive, and margin collapse is inevitable.\n\nTiered routing is the primary engineering solution to the "Claude API bill higher than your revenue" problem. It transforms AI from a variable-cost liability into a manageable, optimizable infrastructure component.`,
        howToApply: `1. **Classify your request types**: Categorize all AI API calls into complexity tiers (simple, medium, complex).\n2. **Benchmark output quality**: Test smaller models on your specific tasks  -  you will often find identical quality at a fraction of the cost.\n3. **Build a routing layer**: Implement a lightweight classifier or rule engine that directs requests to the appropriate model tier.\n4. **Monitor cost per tier**: Track cost and quality metrics per tier to continuously optimize the routing thresholds.\n5. **Set fallback policies**: If a cheaper model fails to produce adequate output, automatically escalate to a higher tier with retry budget limits.`,
        faqs: [
            { question: 'What is tiered inference routing?', answer: 'An AI infrastructure pattern that classifies requests by complexity and routes each to the cheapest model capable of adequate output. Simple tasks go to small models; complex tasks go to frontier models.' },
            { question: 'How much can tiered routing save?', answer: 'For enterprise deployments where 60-80% of requests are simple tasks, tiered routing typically reduces API costs by 50-80% with no measurable quality degradation on simple tasks.' },
        ],
        relatedTerms: ['model-task-mismatch', 'api-cost-governance', 'ai-cogs', 'deterministic-routing', 'ai-inference'],
        relatedTools: [{ name: 'AI Unit Economics Calculator', url: '/tools/aueb' }],
        relatedArticles: [{ title: 'Your Claude API Bill Is Higher Than Your Revenue (CIO.com)', url: 'https://www.cio.com/article/4175244/your-claude-api-bill-is-higher-than-your-revenue-why-simple-python-tasks-are-blowing-up-ai-costs.html' }],
    },
];

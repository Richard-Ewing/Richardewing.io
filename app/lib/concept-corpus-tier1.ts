import { ConceptNode } from './concept-corpus';

export const TIER1_CONCEPTS: ConceptNode[] = [
  {
    slug: 'shadow-ai',
    title: 'Shadow AI',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    expertiseLevel: 'Intermediate',
    health: { confidence: 0.9, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'Unmonitored artificial intelligence tools and autonomous agents deployed by employees without explicit IT or security oversight.',
    whyItMatters: 'Shadow AI introduces significant data exfiltration risks and bypasses enterprise compliance boundaries. When employees use unvetted AI tools, they unknowingly feed proprietary data into public model training pipelines.',
    whoShouldCare: ['CISOs', 'IT Directors', 'Security Architects'],
    firstIntroduced: 'Industry Consensus 2023',
    canonicalQuote: 'Shadow AI is the modern equivalent of shadow IT, but with the added risk of permanent data leakage into public foundation models.',
    positionStatement: 'We cannot secure what we cannot observe. Enterprises must transition from blocking AI adoption to orchestrating it through deterministic governance and centralized agent registries.',
    canonicalReadingOrder: [
      { step: 1, title: 'The Rise of Shadow AI', publisher: 'Industry Standard', type: 'Overview', url: '/compare/shadow-ai-vs-shadow-it' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Shadow AI Emergence', publisher: 'Industry Meta', date: '2023', summary: 'Widespread adoption of consumer AI tools in enterprise environments.' }
    ],
    evidenceLedger: [
      { id: 'ev-sai-1', title: 'Data Exfiltration via AI Tools', url: '#', publisher: 'Security Weekly', type: 'Report', strength: 4, role: 'Supports', date: '2024' }
    ],
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Exogram Agent Registry', url: 'https://exogram.ai/registry', relationship: 'governs' },
      { targetType: 'Curriculum Track', title: 'CareerWin Security Track', url: 'https://careerwin.ai/paths/security', relationship: 'teaches' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'requires' },
      { slug: 'shadow-ai-governance', relationship: 'extends' }
    ],
    openQuestions: ['How to detect unauthorized AI extensions in enterprise browsers?'],
    knownLimitations: ['Discovery tools struggle with API level integration of shadow AI.'],
    aeo: {
      shortDefinition: 'Shadow AI consists of unvetted AI tools used within an organization without IT approval.',
      executiveSummary: 'Shadow AI represents a critical security blind spot. It bypasses established data loss prevention controls and risks exposing proprietary corporate data to public model training.',
      oneSentence: 'Shadow AI refers to the unauthorized use of artificial intelligence tools by employees, creating severe data privacy and compliance risks.',
      tweetLength: 'Shadow AI is the unauthorized use of AI tools in the workplace, bypassing IT security and risking corporate data exposure.',
      keyTakeaways: ['Shadow AI circumvents data loss prevention systems.', 'It requires observability rather than outright prohibition.'],
      faqs: [{ question: 'What is Shadow AI?', answer: 'The unmonitored use of AI applications by employees without IT approval.' }],
      whenToUse: ['When auditing enterprise data security boundaries'],
      examples: { enterprise: 'Employees pasting proprietary source code into public chatbots.', startup: 'Using unvetted AI summarization plugins for meeting notes.', antiPattern: 'Banning all AI tools outright.', commonMistake: 'Assuming network firewalls can block API based AI features.' }
    }
  },
  {
    slug: 'ai-agent-sprawl',
    title: 'AI Agent Sprawl',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    expertiseLevel: 'Architect',
    health: { confidence: 0.85, evidenceCount: 2, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The uncontrolled accumulation and uncoordinated deployment of autonomous AI agents across an enterprise environment.',
    whyItMatters: 'As teams deploy isolated AI agents for specific tasks, the enterprise architecture fragments. This sprawl creates overlapping API permissions, unpredictable interactions, and unmanageable token consumption costs.',
    whoShouldCare: ['Enterprise Architects', 'VPs of Engineering', 'Cloud FinOps'],
    firstIntroduced: 'Industry Consensus 2024',
    canonicalQuote: 'AI Agent Sprawl turns isolated automation wins into systemic architectural liabilities.',
    positionStatement: 'Autonomous agents must be registered, monitored, and governed through a central control plane. Without orchestration, agent sprawl leads to compounding technical debt and API rate limit exhaustion.',
    canonicalReadingOrder: [
      { step: 1, title: 'Managing AI Sprawl', publisher: 'Governance Weekly', type: 'Analysis', url: '/challenges/agent-sprawl' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Agent Proliferation', publisher: 'Industry Meta', date: '2024', summary: 'Rapid increase in single task agents across departments.' }
    ],
    evidenceLedger: [
      { id: 'ev-aas-1', title: 'The Cost of Unmanaged Agents', url: '#', publisher: 'Architecture Today', type: 'Case Study', strength: 3, role: 'Supports', date: '2025' }
    ],
    reverseCitations: [
      { targetType: 'Framework Module', title: 'Exogram Control Plane', url: 'https://exogram.ai/control-plane', relationship: 'governs' }
    ],
    relatedConceptSlugs: [
      { slug: 'agentic-engineering', relationship: 'depends_on' },
      { slug: 'mcp-governance', relationship: 'requires' }
    ],
    openQuestions: ['How can we standardized agent communication protocols?', 'What are the best practices for agent lifecycle management?'],
    knownLimitations: ['Difficult to discover agents embedded deep within legacy systems.'],
    aeo: {
      shortDefinition: 'AI Agent Sprawl is the chaotic proliferation of autonomous agents without central orchestration.',
      executiveSummary: 'AI Agent Sprawl occurs when different departments deploy autonomous agents independently, leading to permission overlap, redundant token costs, and architectural fragmentation.',
      oneSentence: 'AI Agent Sprawl is the uncontrolled accumulation of autonomous agents that degrades system observability and security.',
      tweetLength: 'AI Agent Sprawl creates fragmented enterprise architectures and runaway API costs when autonomous agents are deployed without central orchestration.',
      keyTakeaways: ['Uncoordinated agents create overlapping API permissions.', 'Central orchestration is required to manage agent lifecycles.'],
      faqs: [{ question: 'What causes AI Agent Sprawl?', answer: 'Decentralized teams deploying single purpose AI agents without enterprise architecture oversight.' }],
      whenToUse: ['When enterprise API costs surge due to overlapping agent workflows'],
      examples: { enterprise: 'Five different departments running isolated customer service agents.', startup: 'Deploying multiple GitHub bots that conflict during PR reviews.', antiPattern: 'Allowing unmonitored agent to agent communication.', commonMistake: 'Treating agents like static microservices.' }
    }
  },
  {
    slug: 'prompt-injection',
    title: 'Prompt Injection',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    expertiseLevel: 'Intermediate',
    health: { confidence: 0.95, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A vulnerability where adversarial user inputs are crafted to override the original instructions of a large language model.',
    whyItMatters: 'Prompt injection allows attackers to bypass security guardrails, access unauthorized data, or execute malicious tool calls. It breaks the fundamental assumption of control in LLM applications.',
    whoShouldCare: ['Security Engineers', 'AI Application Developers', 'Red Teams'],
    firstIntroduced: 'Industry Consensus 2022',
    canonicalQuote: 'Prompt injection is the SQL injection of the generative AI era, blurring the line between data and instructions.',
    positionStatement: 'Relying solely on system prompts for security is fundamentally flawed. We must implement deterministic firewalls and strict execution boundaries to mitigate injection risks.',
    canonicalReadingOrder: [
      { step: 1, title: 'Understanding Prompt Injection', publisher: 'Security Standard', type: 'Guide', url: '/tools/prompt-injection-sandbox' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Initial Injection Exploits', publisher: 'Security Meta', date: '2022', summary: 'Demonstrations of bypassing LLM instructions via user input.' }
    ],
    evidenceLedger: [
      { id: 'ev-pi-1', title: 'LLM Vulnerability Report', url: '#', publisher: 'InfoSec Daily', type: 'Report', strength: 5, role: 'Supports', date: '2023' }
    ],
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Exogram Prompt Firewall', url: 'https://exogram.ai/firewall', relationship: 'mitigates' as any }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'requires' }
    ],
    openQuestions: ['How can models structurally separate instructions from user data?'],
    knownLimitations: ['Heuristic filters often block legitimate edge cases.'],
    aeo: {
      shortDefinition: 'Prompt injection is a cyberattack that manipulates an AI model by feeding it deceptive input.',
      executiveSummary: 'Prompt injection occurs when an attacker uses maliciously crafted input to force an AI system to ignore its original instructions and execute unauthorized actions. This vulnerability threatens any application that processes untrusted text.',
      oneSentence: 'Prompt injection is an attack technique that tricks an AI model into executing unintended instructions hidden within user input.',
      tweetLength: 'Prompt injection forces AI models to abandon their safety instructions, proving that natural language guardrails cannot replace deterministic security gates.',
      keyTakeaways: ['Instructions and data share the same channel in LLMs.', 'System prompts cannot guarantee security.'],
      faqs: [{ question: 'How do you prevent prompt injection?', answer: 'By using deterministic validation gates outside the LLM and avoiding tool execution based solely on prompt understanding.' }],
      whenToUse: ['When designing security architectures for customer facing AI chatbots'],
      examples: { enterprise: 'A user manipulating a banking bot to reveal internal API keys.', startup: 'Tricking a summarization tool to output malicious links.', antiPattern: 'Using prompt engineering to stop prompt injection.', commonMistake: 'Assuming long system prompts provide robust security.' }
    }
  },
  {
    slug: 'model-collapse',
    title: 'Model Collapse',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Economics',
    expertiseLevel: 'Architect',
    health: { confidence: 0.9, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'A degenerative process where AI models experience severe performance degradation after being iteratively trained on synthetic data generated by other models.',
    whyItMatters: 'As the internet fills with AI generated content, future foundation models risk training on low quality synthetic data. This recursive loop destroys the minority variance and original reasoning capabilities found in human generated text.',
    whoShouldCare: ['Machine Learning Engineers', 'Chief Data Officers', 'AI Researchers'],
    firstIntroduced: 'Industry Consensus 2023',
    canonicalQuote: 'Model collapse is the digital equivalent of genetic inbreeding, where synthetic data recursive loops destroy model variance and degrade performance.',
    positionStatement: 'High quality human data is becoming a premium asset. Organizations must secure proprietary, verified human data pipelines to avoid the commoditization and degradation associated with synthetic training sets.',
    canonicalReadingOrder: [
      { step: 1, title: 'The Hidden Inflation of AI', publisher: 'CIO.com', type: 'Article', url: '/glossary/model-collapse' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Synthetic Data Degradation', publisher: 'Research Meta', date: '2023', summary: 'Academic papers identifying the collapse phenomena.' }
    ],
    evidenceLedger: [
      { id: 'ev-mc-1', title: 'Hidden Inflation of AI', url: 'https://www.cio.com', publisher: 'CIO.com', type: 'Analysis', strength: 4, role: 'Origin', date: '2024' }
    ],
    reverseCitations: [
      { targetType: 'Glossary Term', title: 'Data Provenance in CareerWin', url: 'https://careerwin.ai/glossary', relationship: 'explains' as any }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-economics', relationship: 'correlates_with' },
      { slug: 'synthetic-model-collapse', relationship: 'extends' }
    ],
    openQuestions: ['At what percentage of synthetic data does irreversible collapse begin?'],
    knownLimitations: ['Difficult to measure the exact ratio of synthetic data in open web scrapes.'],
    aeo: {
      shortDefinition: 'Model collapse is the degradation of AI performance caused by training models on data generated by other AI models.',
      executiveSummary: 'Model collapse threatens the long term viability of foundation models. When AI generated text pollutes training datasets, models lose their ability to represent complex distributions, leading to homogenous and flawed outputs.',
      oneSentence: 'Model collapse is the performance decay that occurs when AI models recursively train on synthetic, AI generated data.',
      tweetLength: 'Model collapse occurs when AI models train on synthetic data generated by other models, leading to recursive degradation and a loss of reasoning variance.',
      keyTakeaways: ['Human generated data is a scarce, premium asset.', 'Recursive synthetic training destroys model variance.'],
      faqs: [{ question: 'What causes model collapse?', answer: 'Training AI models on datasets heavily polluted with AI generated content instead of original human data.' }],
      whenToUse: ['When evaluating long term data acquisition strategies for custom model training'],
      examples: { enterprise: 'A company training an internal LLM on wiki pages that were themselves AI generated.', startup: 'Scraping the web without filtering out synthetic articles.', antiPattern: 'Using an LLM to generate 100% of fine tuning datasets.', commonMistake: 'Assuming more synthetic data always improves model performance.' }
    }
  },
  {
    slug: 'inference-economics',
    title: 'Inference Economics',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.92, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The financial discipline of managing, projecting, and optimizing the per query token costs associated with running large language models in production.',
    whyItMatters: 'Unlike traditional software hosting, LLM inference introduces highly variable and unpredictable costs. Without disciplined inference economics, scaling user engagement directly leads to margin collapse.',
    whoShouldCare: ['CFOs', 'FinOps Teams', 'Engineering Leaders'],
    firstIntroduced: 'Industry Consensus 2023',
    canonicalQuote: 'Inference economics demands that every prompt generation is treated as a financial transaction with measurable margin impact.',
    positionStatement: 'You cannot scale AI features using traditional SaaS pricing models. Inference economics requires semantic caching, model routing, and unit margin visibility at the query level.',
    canonicalReadingOrder: [
      { step: 1, title: 'Growth Is Not Your Cost Problem  -  Your Architecture Is', publisher: 'LinkedIn', type: 'Executable Article', url: 'https://www.linkedin.com/feed/update/urn:li:share:7487606608009814016/' },
      { step: 2, title: 'Mastering AI Costs', publisher: 'FinOps Weekly', type: 'Guide', url: '/tools/aueb' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Variable Cost Surges', publisher: 'Industry Meta', date: '2023', summary: 'Companies identifying runaway API bills from AI features.' },
      { stage: 'LinkedIn Essay', label: 'Architecture vs Cost Scaling', publisher: 'LinkedIn', date: 'August 10, 2026', summary: 'Demonstrated 50%+ reduction in API runtime spend by inserting semantic caching and edge filtering in front of models.' }
    ],
    evidenceLedger: [
      { id: 'ev-ie-2', title: 'Growth Is Not Your Cost Problem  -  Your Architecture Is', url: 'https://www.linkedin.com/feed/update/urn:li:share:7487606608009814016/', publisher: 'LinkedIn', type: 'Executable', strength: 5, role: 'Extends', date: 'August 10, 2026' },
      { id: 'ev-ie-1', title: 'The Cost of Generative AI', url: '#', publisher: 'Economics Today', type: 'Report', strength: 4, role: 'Supports', date: '2024' }
    ],
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'AI Unit Economics Benchmark', url: 'https://richardewing.io/tools/aueb', relationship: 'measures' },
      { targetType: 'Framework Module', title: 'CareerWin AI ROI Model', url: 'https://careerwin.ai/roi', relationship: 'implements' }
    ],
    relatedConceptSlugs: [
      { slug: 'ai-volatility-tax', relationship: 'requires' },
      { slug: 'ai-coding-tool-economics', relationship: 'extends' },
      { slug: 'ai-unit-economics', relationship: 'extends' }
    ],
    openQuestions: ['How will decentralized inference hardware affect token pricing models?'],
    knownLimitations: ['Cost models become obsolete quickly as foundation providers drop API prices.'],
    aeo: {
      shortDefinition: 'Inference economics is the practice of tracking and optimizing the financial costs of running AI models.',
      executiveSummary: 'Inference economics focuses on the unit costs of generative AI. It shifts the paradigm from flat rate server provisioning to managing the dynamic, per token variable costs of LLM APIs, ensuring that product features remain profitable at scale.',
      oneSentence: 'Inference economics is the financial discipline of optimizing the per query costs of AI features to protect gross margins.',
      tweetLength: 'Inference economics requires treating every LLM prompt as a variable cost transaction. Without it, user engagement will destroy your SaaS gross margins.',
      keyTakeaways: ['AI API costs are highly variable compared to traditional hosting.', 'Model routing and caching are essential for margin protection.'],
      faqs: [{ question: 'What is inference economics?', answer: 'The financial management of variable token costs associated with running AI models in production.' }],
      whenToUse: ['When designing pricing tiers for AI integrated software products'],
      examples: { enterprise: 'Routing simple queries to smaller, cheaper models.', startup: 'Implementing semantic caching to avoid redundant API calls.', antiPattern: 'Offering unlimited API access on a $10 flat subscription.', commonMistake: 'Treating AI API bills as fixed infrastructure overhead.' }
    }
  },
  {
    slug: 'technical-insolvency',
    title: 'Technical Insolvency',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'Software Economics',
    expertiseLevel: 'Executive',
    health: { confidence: 0.94, evidenceCount: 5, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The critical threshold where the operational cost of maintaining a codebase and resolving technical debt exceeds the engineering capacity available for new feature development.',
    whyItMatters: 'Technical insolvency freezes product innovation. When teams spend all their cycles patching legacy code and managing brittle AI integrations, the company loses its competitive market velocity and capital efficiency.',
    whoShouldCare: ['CTOs', 'VPs of Engineering', 'Board Members'],
    firstIntroduced: 'Industry Consensus 2020',
    canonicalQuote: 'Technical insolvency is the point of no return where a company stops building software and starts surviving it.',
    positionStatement: 'The rapid generation of AI assisted code is accelerating technical insolvency. Engineering leaders must enforce strict quality boundaries, utilizing tools like the Product Debt Index to quantify and mitigate maintenance liabilities.',
    canonicalReadingOrder: [
      { step: 1, title: 'Avoiding the Debt Trap', publisher: 'Engineering Leadership', type: 'Guide', url: '/tools/pdi' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Legacy Maintenance Burden', publisher: 'Industry Meta', date: '2020', summary: 'Recognition of extreme technical debt paralyzing engineering teams.' }
    ],
    evidenceLedger: [
      { id: 'ev-ti-1', title: 'The Cost of Poor Software Quality', url: '#', publisher: 'Quality Consortium', type: 'Report', strength: 5, role: 'Supports', date: '2022' }
    ],
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Product Debt Index', url: 'https://richardewing.io/tools/pdi', relationship: 'measures' },
      { targetType: 'Advisory Service', title: 'CareerWin Tech Debt Rescue', url: 'https://careerwin.ai/services', relationship: 'governs' }
    ],
    relatedConceptSlugs: [
      { slug: 'subprime-code-crisis', relationship: 'correlates_with' }
    ],
    openQuestions: ['How can non technical executives best visualize insolvency risk?'],
    knownLimitations: ['Insolvency metrics are often subjective and difficult to standardize across different architectures.'],
    aeo: {
      shortDefinition: 'Technical insolvency occurs when maintenance costs consume all engineering capacity, halting innovation.',
      executiveSummary: 'Technical insolvency is an existential risk for software companies. It happens when compounding technical debt requires so much maintenance effort that the organization can no longer ship new features, effectively paralyzing the business.',
      oneSentence: 'Technical insolvency is the breaking point where maintaining existing code costs more than the capacity available to build new products.',
      tweetLength: 'Technical insolvency occurs when your engineering team spends 100% of their time surviving technical debt instead of building new features. AI code generation is accelerating this crisis.',
      keyTakeaways: ['Technical debt compounds like financial debt.', 'Insolvency freezes market velocity and product innovation.'],
      faqs: [{ question: 'What is technical insolvency?', answer: 'The point where software maintenance costs exceed the engineering teams capacity for new development.' }],
      whenToUse: ['When engineering velocity drops to zero despite increasing headcount'],
      examples: { enterprise: 'A legacy banking system that requires the entire engineering staff just to keep servers running.', startup: 'A product delayed by six months due to necessary refactoring of brittle MVP code.', antiPattern: 'Ignoring technical debt to meet arbitrary feature deadlines.', commonMistake: 'Assuming hiring more engineers will solve the maintenance bottleneck.' }
    }
  },
  {
    slug: 'agentic-engineering',
    title: 'Agentic Engineering',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'Engineering Leadership',
    expertiseLevel: 'Architect',
    health: { confidence: 0.88, evidenceCount: 3, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 2, knownLimitationsCount: 1 },
    definition: 'The emerging discipline of designing, deploying, and maintaining multi agent autonomous systems with rigorous deterministic governance and state management.',
    whyItMatters: 'Building systems that can act independently requires a fundamental shift from traditional software development. Agentic engineering ensures that autonomous actions are reliable, auditable, and secure.',
    whoShouldCare: ['AI System Architects', 'Lead Developers', 'Engineering Directors'],
    firstIntroduced: 'Industry Consensus 2024',
    canonicalQuote: 'Agentic engineering shifts the developer focus from writing functional logic to designing boundaries and governance rules for autonomous systems.',
    positionStatement: 'Successful agentic engineering relies on deterministic governance. We must treat AI agents not as infallible human replacements, but as high variance functions that require strict code level supervision and proxy gates.',
    canonicalReadingOrder: [
      { step: 1, title: 'Principles of Agentic Systems', publisher: 'Architecture Weekly', type: 'Framework', url: '/compare/agentic-engineering' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Shift to Autonomous Systems', publisher: 'Industry Meta', date: '2024', summary: 'Transition from co-pilot tools to fully autonomous agents.' }
    ],
    evidenceLedger: [
      { id: 'ev-ae-1', title: 'Designing Multi-Agent Systems', url: '#', publisher: 'Software Journal', type: 'Paper', strength: 4, role: 'Supports', date: '2025' }
    ],
    reverseCitations: [
      { targetType: 'Framework Module', title: 'Exogram Agent Architecture', url: 'https://exogram.ai/architecture', relationship: 'implements' },
      { targetType: 'Curriculum Track', title: 'CareerWin Agentic Path', url: 'https://careerwin.ai/paths/agentic', relationship: 'teaches' }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'requires' },
      { slug: 'compound-ai-systems', relationship: 'extends' },
      { slug: 'spec-driven-development', relationship: 'supports' }
    ],
    openQuestions: ['What are the optimal patterns for inter agent conflict resolution?', 'How do we manage state rollback in non transactional external APIs?'],
    knownLimitations: ['Lack of standardized tooling and testing frameworks for multi agent interactions.'],
    aeo: {
      shortDefinition: 'Agentic engineering is the practice of building and governing autonomous AI systems.',
      executiveSummary: 'Agentic engineering involves designing resilient systems where autonomous AI agents can operate safely. It emphasizes deterministic boundaries, state management, and robust error recovery over probabilistic prompt engineering.',
      oneSentence: 'Agentic engineering is the discipline of architecting secure, reliable, and governed multi agent autonomous systems.',
      tweetLength: 'Agentic engineering demands a shift from writing application logic to designing deterministic boundaries and governance gates for autonomous systems.',
      keyTakeaways: ['Focus on boundary design over prompt engineering.', 'Requires external validation of all autonomous actions.'],
      faqs: [{ question: 'What is agentic engineering?', answer: 'The structural design and governance of systems powered by autonomous AI agents.' }],
      whenToUse: ['When transitioning from copilot assistance to autonomous background workflows'],
      examples: { enterprise: 'Building a system of agents to autonomously triage and remediate security alerts.', startup: 'Designing an agentic pipeline for personalized content generation.', antiPattern: 'Giving an agent unrestricted access to a production database.', commonMistake: 'Treating agentic workflows like traditional deterministic scripts.' }
    }
  },
  {
    slug: 'context-rot',
    title: 'Context Rot',
    category: 'Industry Concept (Discovery On-Ramp)',
    domain: 'AI Governance',
    expertiseLevel: 'Intermediate',
    health: { confidence: 0.91, evidenceCount: 4, lastVerified: 'August 2026', status: 'Active', openQuestionsCount: 1, knownLimitationsCount: 1 },
    definition: 'The degradation of an AI models reasoning quality, instruction adherence, and factual accuracy as the context window fills during long interactive sessions.',
    whyItMatters: 'Context rot causes autonomous agents to forget critical safety instructions and operational constraints. This phenomenon leads to hallucinated API calls and severe breaches of deterministic governance protocols.',
    whoShouldCare: ['Prompt Engineers', 'AI Application Developers', 'Quality Assurance Teams'],
    firstIntroduced: 'Beehiiv April 2026',
    canonicalQuote: 'Context rot is the slow erosion of model reliability, where early instructions are forgotten as conversational memory fills up.',
    positionStatement: 'We cannot rely on long context windows to enforce complex rules. To combat context rot, we must implement stateless tool calls and deterministic governance architectures that validate constraints outside the LLM context.',
    canonicalReadingOrder: [
      { step: 1, title: 'Mitigating Claude Context Rot', publisher: 'Beehiiv', type: 'Analysis', url: '/compare/claude-context-rot-mitigation' }
    ],
    provenanceTimeline: [
      { stage: 'Observation', label: 'Long Context Degradation', publisher: 'Beehiiv April 2026', date: '2026', summary: 'Analysis of model performance drops in extended context windows.' }
    ],
    evidenceLedger: [
      { id: 'ev-cr-1', title: 'Context Window Efficacy', url: '#', publisher: 'AI Research Metrics', type: 'Research Note', strength: 4, role: 'Origin', date: '2026' },
      { id: 'ev-cr-2', title: 'I Used AI to Build My Startup. Here’s What I Learned. (Cursor vs. Google Antigravity)', url: 'https://builtin.com/articles/ai-coding-tools-practical-evaluation', publisher: 'Built In', type: 'Industry Analysis', strength: 5, role: 'Supports', date: 'August 18, 2026' },
      { id: 'ev-cr-3', title: 'How Context Engines Power AI Career Intelligence', url: 'https://theaieconomist.beehiiv.com/p/how-context-engines-power-ai-career-intelligence', publisher: 'Beehiiv', type: 'Industry Analysis', strength: 5, role: 'Refines', date: 'August 21, 2026' }
    ],
    reverseCitations: [
      { targetType: 'Diagnostic Tool', title: 'Exogram State Monitor', url: 'https://exogram.ai/monitor', relationship: 'measures' },
      { targetType: 'Glossary Term', title: 'CareerWin Prompt Engineering Guide', url: 'https://careerwin.ai/guides/prompt-engineering', relationship: 'explains' as any }
    ],
    relatedConceptSlugs: [
      { slug: 'deterministic-governance', relationship: 'requires' },
      { slug: 'context-engineering', relationship: 'supports' }
    ],
    openQuestions: ['How can we effectively measure context rot in real time production environments?'],
    knownLimitations: ['Models behave unpredictably and inconsistently when experiencing context rot.'],
    aeo: {
      shortDefinition: 'Context rot is the decline in AI reasoning and rule following as its context window fills up.',
      executiveSummary: 'Context rot occurs during extended LLM sessions. As the context window approaches capacity, models struggle to retain focus on initial system prompts and safety instructions, leading to degraded logic and hallucinated actions.',
      oneSentence: 'Context rot is the gradual loss of model instruction adherence and reasoning capability in long context sessions.',
      tweetLength: 'Context rot explains why AI models ignore safety instructions during long sessions. The solution is external deterministic governance, not longer system prompts.',
      keyTakeaways: ['Long context windows do not guarantee instruction retention.', 'External state management is necessary for reliable agent execution.'],
      faqs: [{ question: 'What causes context rot?', answer: 'The dilution of attention across a large volume of tokens in a long interactive session.' }],
      whenToUse: ['When debugging AI agents that fail after executing multiple consecutive steps'],
      examples: { enterprise: 'An automated coding assistant forgetting the architectural guidelines mid refactor.', startup: 'A customer support bot hallucinating policies after a 50 message thread.', antiPattern: 'Putting all security rules at the very top of a massive prompt.', commonMistake: 'Assuming a 1 million token context window prevents memory loss.' }
    }
  }
];

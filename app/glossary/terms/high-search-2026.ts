import type { GlossaryTerm } from '../types';

export const highSearch2026Terms: GlossaryTerm[] = [
    {
        slug: 'tool-poisoning-attack',
        title: 'Tool-Poisoning Attack',
        category: 'Security & Compliance',
        definition: 'A cybersecurity attack vector where an adversary modifies an AI agent tool schema, JSON definition, or upstream package post-installation (a rug-pull attack) to trick the model into executing unauthorized commands, reading secrets, or exfiltrating data.',
        whyItMatters: 'As Model Context Protocol (MCP) servers proliferate, tool poisoning allows malicious third parties to execute arbitrary remote code with zero model fine-tuning.',
        howToMeasure: 'Hash comparison of runtime tool schemas against cryptographically signed deployment manifests.',
        faqs: [
            {
                question: 'How does tool poisoning differ from prompt injection?',
                answer: 'Prompt injection manipulates model reasoning through text; tool poisoning alters the physical function signatures and execution parameters the model invokes.'
            },
            {
                question: 'How do you prevent tool poisoning?',
                answer: 'Enforce cryptographic manifest pinning and route tool calls through a zero-trust proxy gateway like Exogram.'
            }
        ],
        relatedTerms: ['shadow-mcp', 'stdio-transport-rce', 'owasp-mcp-top-10']
    },
    {
        slug: 'shadow-mcp',
        title: 'Shadow MCP',
        category: 'Security & Compliance',
        definition: 'The unauthorized or unmanaged installation of Model Context Protocol servers by developers on local workstations without central infosec auditing, schema verification, or outbound network controls.',
        whyItMatters: 'Shadow MCP creates massive, un-monitored attack surfaces that bypass corporate firewalls and expose internal databases to local AI assistants.',
        howToMeasure: 'Endpoint workstation audit of local config files (e.g. claude_desktop_config.json) and active STDIO child processes.',
        faqs: [
            {
                question: 'Why do developers install Shadow MCP?',
                answer: 'To quickly connect local AI assistants (Claude, Cursor, Antigravity) to proprietary databases, Jira, or GitHub repos without waiting for infosec procurement.'
            }
        ],
        relatedTerms: ['tool-poisoning-attack', 'stdio-transport-rce']
    },
    {
        slug: 'stdio-transport-rce',
        title: 'STDIO Transport RCE',
        category: 'Security & Compliance',
        definition: 'A remote code execution vulnerability stemming from the Model Context Protocol standard execution model, which launches local binaries via standard input/output without native sandboxing or memory isolation.',
        whyItMatters: 'Over 40 CVEs in 2026 were linked to malicious or unsanitized STDIO transports executing unauthorized shell commands on developer machines.',
        howToMeasure: 'Scan MCP configurations for un-sandboxed process spawning and missing gVisor/Firecracker container isolation.',
        faqs: [
            {
                question: 'Is SSE (Server-Sent Events) safer than STDIO?',
                answer: 'SSE allows network-level firewall inspection and mutual TLS authentication, making it superior for enterprise deployment.'
            }
        ],
        relatedTerms: ['tool-poisoning-attack', 'shadow-mcp']
    },
    {
        slug: 'owasp-mcp-top-10',
        title: 'OWASP MCP Top 10',
        category: 'Compliance & Regulation',
        definition: 'The authoritative security standard categorizing the ten most critical vulnerability classes in Model Context Protocol architectures, including Tool Poisoning, Context Over-Sharing, and Unsanitized STDIO Spawning.',
        whyItMatters: 'Provides enterprise CISOs with a standardized compliance rubric to audit agentic AI tool integrations before production sign-off.',
        howToMeasure: 'Compliance scorecard evaluation using the [Model Context Protocol Security Auditor](/tools/mcp-security-auditor).',
        faqs: [
            {
                question: 'What is the #1 vulnerability on the OWASP MCP list?',
                answer: 'Unpinned dynamic tool schema mutation (Tool Poisoning / Rug-Pull Attacks).'
            }
        ],
        relatedTerms: ['tool-poisoning-attack', 'stdio-transport-rce']
    },
    {
        slug: 'macro-coding',
        title: 'Macro-Coding',
        category: 'Architecture Patterns',
        definition: 'The engineering paradigm where human developers work exclusively at the macro-architectural tier (specifying machine-readable schemas, system boundary constraints, and integration assertions) while delegating micro-syntactic implementation to autonomous agent swarms.',
        whyItMatters: 'Replaces chaotic line-by-line vibe coding with structured, deterministic system architecture, eliminating the AI code review bottleneck.',
        howToMeasure: 'Ratio of sprint time spent on architectural specifications and test harnesses vs manual line-by-line syntax authoring.',
        faqs: [
            {
                question: 'How does macro-coding differ from traditional software architecture?',
                answer: 'Macro-coding produces machine-executable specifications (JSON Schema, Zod) designed for immediate consumption by autonomous coding agents rather than static human-readable PRDs.'
            }
        ],
        relatedTerms: ['spec-driven-development', 'pr-review-gridlock']
    },
    {
        slug: 'pr-review-gridlock',
        title: 'PR Review Gridlock',
        category: 'Engineering Management',
        definition: 'The organizational bottleneck where rapid AI code generation causes a 4x surge in pull request volume, overwhelming senior engineers with hundreds of un-vetted synthetic diffs and inflating review queues from days to weeks.',
        whyItMatters: 'Erases the productivity gains of AI coding tools by turning high-salary senior architects into manual human compilers.',
        howToMeasure: 'Calculate senior engineer review hours and cycle time inflation via the [AI Code Review Bottleneck Calculator](/tools/code-review-bottleneck-calc).',
        faqs: [
            {
                question: 'How do you break PR review gridlock?',
                answer: 'Install automated mechanical compiler gates and enforce Spec-Driven Development contracts before PR assignment.'
            }
        ],
        relatedTerms: ['macro-coding', 'human-compiler-syndrome']
    },
    {
        slug: 'executable-specification',
        title: 'Executable Specification',
        category: 'Product Management',
        definition: 'A machine-readable feature contract (written in Markdown, YAML, or JSON Schema) that specifies input/output validation rules, file mutation boundaries, and automated test assertions that an AI agent must satisfy before completion.',
        whyItMatters: 'Eliminates agentic drift and prompt hallucinations by anchoring AI coding agents to deterministic mathematical pass/fail criteria.',
        howToMeasure: 'Audit requirement documents using the [SDD Spec Quality Scorecard](/tools/spec-quality-scorecard).',
        faqs: [
            {
                question: 'What tools compile executable specifications?',
                answer: 'Frameworks like OpenSpec, Spec Kit, Amazon Kiro, and Exogram Spec Compilers.'
            }
        ],
        relatedTerms: ['spec-driven-development', 'macro-coding']
    },
    {
        slug: 'human-compiler-syndrome',
        title: 'Human Compiler Syndrome',
        category: 'Engineering Management',
        definition: 'The cognitive fatigue and productivity loss experienced by senior engineers who spend the majority of their workdays identifying syntax errors, unhandled edge cases, and missing types in AI-generated pull requests.',
        whyItMatters: 'Drives senior engineer burnout and diverts strategic architectural focus to mechanical bug fixing.',
        howToMeasure: '% of senior engineer sprint hours spent reviewing PRs containing mechanical type or linting errors.',
        faqs: [
            {
                question: 'What eliminates human compiler syndrome?',
                answer: 'Zero-trust pre-review terminal hooks (tsc --noEmit, test suite pass) that reject invalid PRs automatically.'
            }
        ],
        relatedTerms: ['pr-review-gridlock', 'zero-trust-type-gate']
    },
    {
        slug: 'synthetic-code-entropy',
        title: 'Synthetic Code Entropy',
        category: 'Technical Debt & Code Quality',
        definition: 'The rapid decay in codebase coherence caused by merging unconstrained AI code that introduces duplicate helper functions, inconsistent state management, and bloated dependencies.',
        whyItMatters: 'Accelerates target codebases toward the Technical Insolvency Date 3x to 5x faster than human-authored software.',
        howToMeasure: 'Cyclomatic complexity growth + duplicate code fragment ratio calculated via static analysis.',
        faqs: [
            {
                question: 'How is synthetic entropy detected during M&A?',
                answer: 'Via the [Subprime Code Risk Auditor](/tools/subprime-code-auditor) during pre-close technical due diligence.'
            }
        ],
        relatedTerms: ['subprime-code', 'vibe-coding-debt']
    }
];

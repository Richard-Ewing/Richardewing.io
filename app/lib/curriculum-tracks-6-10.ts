import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks6to10Modules: Record<string, CurriculumModule> = {};

const t6Mods: [string,string,string,string[]][] = [
    ['6-1','Technical Debt Taxonomy','Identify and categorize 4 types of tech debt.',['Categorize debt visually','Quantify interest rate of debt','Identify toxic vs strategic debt','Build a debt registry']],
    ['6-2','Refactoring Economics','Calculate ROI on rewriting vs refactoring.',['Establish rewrite ROI models','Measure refactor velocity gains','Prevent second-system effect','Build refactoring business cases']],
    ['6-3','Codebase Valuation','Value a software asset for M&A.',['Perform code quality audits','Assess architectural fitness','Measure key person dependencies','Calculate enterprise value']]
];

t6Mods.forEach(([id, title, desc, takeaways], i) => {
    const nextId = i < t6Mods.length - 1 ? t6Mods[i+1][0] : undefined;
    tracks6to10Modules[`technical-debt-valuation/${id}`] = m(id.replace('-','.'), title, desc, 'Track 6 — Technical Debt Valuation', takeaways, [
        l(`Lesson 1: ${title} Baseline`, `An introduction to the mechanics of ${title.toLowerCase()}`, [d('Metric A', 'Description of key performance indicator', 'Target Objective')], 'Analyze your codebase for this characteristic.')
    ], nextId ? `/vault/curriculum/tracks/technical-debt-valuation/${nextId}` : undefined);
});

const t7Mods: [string,string,string,string[]][] = [
    ['7-1','Domain Driven Design','Mapping subdomains to bounded contexts.',['Identify bounded contexts','Define ubiquitous language','Isolate core domains','Architect context maps']],
    ['7-2','Microservices vs Monoliths','The economic threshold for distributed systems.',['Calculate network boundary costs','Assess operational readiness','Design anti-corruption layers','Measure latency budgets']],
    ['7-3','Event-Driven Architecture','Decoupling dependencies via event streams.',['Design event sourcing systems','Handle eventual consistency','Architect CQRS patterns','Build robust message brokers']]
];

t7Mods.forEach(([id, title, desc, takeaways], i) => {
    const nextId = i < t7Mods.length - 1 ? t7Mods[i+1][0] : undefined;
    tracks6to10Modules[`enterprise-architecture/${id}`] = m(id.replace('-','.'), title, desc, 'Track 7 — Enterprise Architecture', takeaways, [
        l(`Lesson 1: ${title} Baseline`, `An introduction to the mechanics of ${title.toLowerCase()}`, [d('Metric A', 'Description of key performance indicator', 'Target Objective')], 'Analyze your codebase for this characteristic.')
    ], nextId ? `/vault/curriculum/tracks/enterprise-architecture/${nextId}` : undefined);
});

const t8Mods: [string,string,string,string[]][] = [
    ['8-1','First 90 Days','The definitive CTO onboarding playbook.',['Assess organizational health','Build engineering trust','Ship an early win','Map the technology landscape']],
    ['8-2','Engineering Org Design','Building resilient development teams.',['Design team topologies','Calculate optimal span of control','Establish career matrices','Build platform engineering teams']],
    ['8-3','Board Communication','Translating engineering to the board.',['Construct engineering scorecards','Communicate risk to non-technical partners','Present technical debt conceptually','Defend R&D budgets']]
];

t8Mods.forEach(([id, title, desc, takeaways], i) => {
    const nextId = i < t8Mods.length - 1 ? t8Mods[i+1][0] : undefined;
    tracks6to10Modules[`cto-transition/${id}`] = m(id.replace('-','.'), title, desc, 'Track 8 — CTO Transition', takeaways, [
        l(`Lesson 1: ${title} Baseline`, `An introduction to the mechanics of ${title.toLowerCase()}`, [d('Metric A', 'Description of key performance indicator', 'Target Objective')], 'Analyze your codebase for this characteristic.')
    ], nextId ? `/vault/curriculum/tracks/cto-transition/${nextId}` : undefined);
});

const t9Mods: [string,string,string,string[]][] = [
    ['9-1','Data Residency','Managing cross-border data constraints.',['Map compliance boundaries','Architect sharded environments','Implement cell-based architecture','Audit data transmission']],
    ['9-2','SOC2 & ISO27001','Automating compliance protocols.',['Establish internal security controls','Automate evidence collection','Manage recurring audits','Align Vanta/Drata workflows']],
    ['9-3','Zero Trust Networking','Beyond the VPN perimeter defense.',['Implement identity-aware proxies','Establish continuous authentication','Remove implicit network trust','Enforce least privilege access']]
];

t9Mods.forEach(([id, title, desc, takeaways], i) => {
    const nextId = i < t9Mods.length - 1 ? t9Mods[i+1][0] : undefined;
    tracks6to10Modules[`security-compliance/${id}`] = m(id.replace('-','.'), title, desc, 'Track 9 — Security & Compliance', takeaways, [
        l(`Lesson 1: ${title} Baseline`, `An introduction to the mechanics of ${title.toLowerCase()}`, [d('Metric A', 'Description of key performance indicator', 'Target Objective')], 'Analyze your codebase for this characteristic.')
    ], nextId ? `/vault/curriculum/tracks/security-compliance/${nextId}` : undefined);
});

const t10Mods: [string,string,string,string[]][] = [
    ['10-1','Agentic Architectures','Orchestrating autonomous AI agents.',['Design multi-agent supervisors','Establish agentic tool use','Manage context windows','Architect state machines for LLMs']],
    ['10-2','RAG vs Fine-tuning','Economic thresholds for knowledge injection.',['Calculate fine-tuning costs','Design vector search systems','Implement hybrid search algorithms','Evaluate RAG accuracy thresholds']],
    ['10-3','LLM Security','Defending against prompt injection.',['Build robust system prompts','Implement input sanitization','Design an LLM firewall','Monitor inference telemetry']]
];

t10Mods.forEach(([id, title, desc, takeaways], i) => {
    const nextId = i < t10Mods.length - 1 ? t10Mods[i+1][0] : undefined;
    tracks6to10Modules[`multi-agent-ops/${id}`] = m(id.replace('-','.'), title, desc, 'Track 10 — Multi-Agent Ops', takeaways, [
        l(`Lesson 1: ${title} Baseline`, `An introduction to the mechanics of ${title.toLowerCase()}`, [d('Metric A', 'Description of key performance indicator', 'Target Objective')], 'Analyze your codebase for this characteristic.')
    ], nextId ? `/vault/curriculum/tracks/multi-agent-ops/${nextId}` : undefined);
});

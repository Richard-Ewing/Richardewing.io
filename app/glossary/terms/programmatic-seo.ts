import { GlossaryTerm } from '../types';

export const programmaticSeoTerms: GlossaryTerm[] = [
    {
        slug: 'calculating-roai',
        title: 'ROAI (Return on AI Investment)',
        category: 'AI & Machine Learning',
        definition: `ROAI (Return on AI Investment) is the financial metric for evaluating generative models, autonomous agents, and RAG pipelines. Unlike traditional software ROI, which is deterministic, ROAI must account for probabilistic outcomes, hallucination costs, and variable inference burn rates.\n\nROAI = (Human Wage Savings + Net New Revenue) - (Inference Cost + Human Remediation Cost + Model Fine-Tuning CapEx). A positive ROAI requires the value of the automated workflow to strictly exceed the CapEx of model training plus the ongoing OpEx of token inference and hallucination remediation.`,
        whyItMatters: `Deploying AI for AI's sake is financial negligence. If a deterministic Python script or SQL query can solve the problem with 100% accuracy for $0 in inference costs, building an LLM agent to do it destroys value. Reserving heavy AI models strictly for high-variance problems ensures the human wage offset justifies the inference burn.`,
        faqs: [
            { question: 'What is ROAI?', answer: 'Return on AI Investment. It measures the financial return of AI deployments by subtracting inference costs and human remediation costs from wage savings and new revenue.' },
            { question: 'Why is ROAI different from traditional ROI?', answer: 'Traditional software has fixed hosting costs and deterministic outputs. AI has variable token inference costs and probabilistic outputs (hallucinations) that require expensive human remediation.' }
        ],
        relatedTerms: ['agent-drift-taxonomy', 'technical-debt', 'inference-cost']
    },
    {
        slug: 'incident-management-cost',
        title: 'Incident Management Cost',
        category: 'SaaS Metrics & Finance',
        definition: `Incident Management Cost is the true financial bleed of Sev-1 outages, calculated not just by immediate transactional revenue lost, but by the engineering capital burn of the "War Room" and SLA penalties.\n\nThe True Outage Equation: Lost Revenue + (War Room Hours × Hourly Engineer Cost) + SLA Fines = Total Cost. When a Sev-1 incident occurs, pulling 10-40 highly paid engineers off feature development into a War Room incinerates capitalized R&D wages that should have been spent on new capabilities.`,
        whyItMatters: `When Platform Engineers fail to quantify the exact financial bleed of outages, they cannot secure the budget necessary for dedicated resiliency infrastructure. SREs and Chaos Engineering tool chains are insurance policies with guaranteed mathematical ROIs if you calculate incident costs correctly.`,
        faqs: [
            { question: 'How do you calculate incident management cost?', answer: 'Calculate the direct ARR loss during the outage window, add the hourly wages of all engineers pulled into the War Room (opportunity cost), and include any SLA penalty clawbacks.' }
        ],
        relatedTerms: ['technical-debt', 'software-entropy', 'service-level-agreement']
    },
    {
        slug: 'code-smell-engineering-manager',
        title: 'Organizational Code Smell',
        category: 'Engineering Management',
        definition: `An organizational code smell is a surface-level technical issue that indicates a deeper leadership or cultural rot within an engineering team. For an Engineering Manager, technical symptoms like 5,000-line "God Classes" or duplicated code across multiple files are leading indicators of process failures, misaligned incentives, or severe skill gaps.\n\nExamples include "The Hero Culture" (relying on one 10x engineer working weekends), "The Silent Standup" (no blockers raised, indicating lack of psychological safety), and "The QA Crutch" (developers merging sloppy code because QA will catch it).`,
        whyItMatters: `Code smells are leading indicators of future outages and velocity collapse. Managers who ignore them to hit quarterly product targets are stealing from next year's budget to pay for today's bonuses.`,
        faqs: [
            { question: 'What is an organizational code smell?', answer: 'A technical issue that points to a deeper cultural or management failure, such as siloed teams causing duplicated code, or lack of psychological safety causing silent standups.' },
            { question: 'How do managers fix code smells?', answer: 'By enforcing rigorous code reviews, investing in Platform Engineering to build shared libraries, and changing incentives to reward developers who simplify architecture instead of just shipping fast.' }
        ],
        relatedTerms: ['technical-debt', 'spaghetti-code', 'hero-culture']
    }
];

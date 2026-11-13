import { GlossaryTerm } from '../types';

export const programmaticSeoTerms: GlossaryTerm[] = [
    {
        slug: 'calculating-roai',
        title: 'ROAI (Return on AI Investment)',
        category: 'AI & Machine Learning',
        definition: `ROAI (Return on AI Investment) is the net financial return of an AI system, calculated by dividing verified payroll savings and net new revenue minus model API, cloud, and human review costs by total investment.\n\n**The CFO ROAI Formula:**\nROAI = (Verified Labor Savings + Net Retained or Expanded ARR) - (Model Token Inference Cost + Human QA Rework + Ongoing Maintenance Burn)\n\nOn paper, a Customer Support Manager automates 40% of Tier-1 tickets and projects an instant payback. Then the finance audit arrives: two senior specialists spend 25 hours a week fixing hallucinated refund promises, and frontier model bills climb $14,000 a month. Test your actual numbers in the [Enterprise AI ROI & ROAI Calculator](/roi-calculator) or inspect your seat margins inside the [AI Unit Economics Calculator](/ai-unit-economics).`,
        whyItMatters: `Deploying AI because competitors announced an agent destroys operating cash if unit costs rise faster than realized payroll savings. When a straightforward database rule handles the workflow with 100% accuracy for zero variable token fees, sending every request through a reasoning model burns margin on every ticket.`,
        faqs: [
            { question: 'What does ROAI stand for?', answer: 'ROAI stands for Return on AI Investment. It measures realized financial yield after subtracting ongoing model token fees, cloud retrieval, integration engineering, and human error-correction payroll.' },
            { question: 'How is ROAI different from traditional software ROI?', answer: 'Traditional software scales on fixed server budgets with predictable behavior. AI carries variable per-query model token charges and probabilistic mistakes that require human review payroll before value reaches the P&L.' },
            { question: 'What is a healthy ROAI payback window for CFOs?', answer: 'Boards and CFOs generally expect verified net savings or margin expansion to recover initial implementation and integration costs within 6 to 9 months, with gross margins remaining above 70%.' }
        ],
        relatedTerms: ['ai-unit-economics', 'agent-drift-taxonomy', 'technical-debt', 'inference-cost'],
        relatedTools: [
            { name: 'Enterprise AI ROI & ROAI Calculator', url: '/roi-calculator' },
            { name: 'AI Unit Economics Calculator', url: '/ai-unit-economics' }
        ]
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

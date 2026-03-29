import { CurriculumModule, m, l, d } from './curriculum-data';

export const tracks18to22Modules: Record<string, CurriculumModule> = {};

const trackDefs: [string, string, string, [string,string,string,string[]][]][] = [
    // ═══════════════════ TRACK 18: The Fullstack Career ═══════════════════
    ['fullstack-career', 'Track 18 — The Fullstack Career', 'Economics of the engineering lifecycle: from frontend state to backend scaling.', [
        ['18-1','Frontend State Economics','Cost of uncontrolled state, re-rendering waste, and React optimization ROI.',['Identify re-rendering waste','Optimize state economics','Measure frontend performance ROI','Refactor state securely']],
        ['18-2','Backend API Design ROI','REST vs GraphQL caching economics, overfetching cost, and latency impacts.',['Calculate overfetching costs','Compare REST vs GraphQL caching','Optimize API latency','Determine business impact']],
        ['18-3','Database Query Optimization','Cost of N+1 problems, indexing ROI, and query refactoring business cases.',['Identify N+1 costs','Calculate indexing ROI','Refactor slow queries','Measure DB load savings']],
        ['18-4','Client-Side vs Server-Side Rendering','SSR compute costs vs CSR SEO benefits, latency impacts on conversion.',['Model SSR compute costs','Quantify CSR SEO impact','Optimize rendering strategy','Measure conversion changes']],
        ['18-5','The Fullstack Promotion Calculus','How to connect fullstack optimizations to business outcomes for promotion.',['Calculate personal leverage','Present business impact','Secure promotion pathways','Translate code to revenue']]
    ]],
    // ═══════════════════ TRACK 19: Agile & Delivery Economics ═══════════════════
    ['agile-economics', 'Track 19 — Agile & Delivery Economics', 'Mapping agile velocity, story points, and sprint planning directly to margin.', [
        ['19-1','Story Point Dollar Value','Converting arbitrary story points into hard engineering cost metrics.',['Convert points to dollars','Calculate sprint burn rate','Identify estimation waste','Adjust velocity metrics']],
        ['19-2','Cost of Agile Ceremonies','Meeting overhead costs, planning ROI, and asynchronous transition savings.',['Calculate meeting overhead','Measure planning ROI','Transition to async','Quantify time savings']],
        ['19-3','Technical Debt in the Backlog','Quantifying the shadow backlog, maintenance drag, and refactoring ROI.',['Quantify shadow backlogs','Measure maintenance drag','Build refactoring ROI','Prioritize tech debt']],
        ['19-4','Predictability vs Velocity','The financial cost of missed sprint commitments vs the risk of under-promising.',['Model missed commitments','Value predictable delivery','Optimize sprint sizing','Improve stakeholder trust']],
        ['19-5','Agile Capitalization','Capex vs Opex in software development and how agile impacts the balance sheet.',['Understand Capex vs Opex','Map agile to balance sheets','Capitalize software correctly','Increase enterprise value']]
    ]],
    // ═══════════════════ TRACK 20: System Design & Architecture ═══════════════════
    ['system-design', 'Track 20 — System Design & Architecture', 'The financial impact of monoliths, microservices, and distributed systems.', [
        ['20-1','Monolith vs Microservice TCO','Calculating the network tax, deployment overhead, and mental load of microservices.',['Calculate the network tax','Measure deployment overhead','Quantify mental load','Model microservice TCO']],
        ['20-2','Event-Driven Cost Models','Queueing costs, eventual consistency reconciliation, and message bus pricing.',['Model queueing costs','Reconcile consistency errors','Price message buses','Optimize event streaming']],
        ['20-3','Caching Layer Economics','Redis costs vs database scale-up costs, cache invalidation risk, and CDN ROI.',['Compare Redis vs DB costs','Measure cache invalidation risk','Calculate CDN ROI','Optimize read speed limits']],
        ['20-4','Database Sharding & Scaling','The engineering cost of horizontal sharding vs the hardware cost of vertical scaling.',['Hardware vs Engineering costs','Model sharding complexity','Scale vertically efficiently','Measure DB limits']],
        ['20-5','System Design Defensibility','How architectural choices create technical moats and enterprise valuation premiums.',['Build architectural moats','Drive valuation premiums','Create vendor lock-in strategy','Defend market position']]
    ]],
    // ═══════════════════ TRACK 21: Traditional Product Management ═══════════════════
    ['traditional-pm', 'Track 21 — Traditional Product Management', 'Backlog economics, discovery ROI, and stakeholder management frameworks.', [
        ['21-1','Discovery Phase Economics','The cost of building the wrong thing vs the cost of endless discovery.',['Measure discovery costs','Quantify wrong-build costs','Optimize user research','Calculate prototype ROI']],
        ['21-2','Feature Sunset Calculus','Identifying negative-ROI features, managing customer churn, and sunsetting gracefully.',['Identify negative-ROI features','Calculate sunset savings','Manage churn risk','Execute feature sunsetting']],
        ['21-3','The Cost of Scope Creep','Measuring the compounding delay cost of mid-cycle feature additions.',['Measure compounding delays','Calculate scope creep costs','Enforce feature freezes','Protect sprint integrity']],
        ['21-4','Build vs Buy Validation','Economic frameworks for third-party integrations vs internal development.',['Model build vs buy','Calculate maintenance costs','Measure integration risk','Select vendor partners']],
        ['21-5','Stakeholder Alignment Value','The invisible cost of misalignment and the ROI of definitive product roadmaps.',['Quantify misalignment costs','Build definitive roadmaps','Measure stakeholder trust','Reduce political friction']]
    ]],
    // ═══════════════════ TRACK 22: Engineering Culture & Motivation ═══════════════════
    ['engineering-culture', 'Track 22 — Engineering Culture & Motivation', 'The hard financial ROI of psychological safety, retention, and team dynamics.', [
        ['22-1','Engineer Replacement Cost','The true cost of replacing a senior engineer: recruiting, onboarding, and lost velocity.',['Calculate replacement costs','Measure onboarding drag','Quantify lost velocity','Build retention cases']],
        ['22-2','The Economics of Psychological Safety','How fear of failure creates hidden redundancy, massive QA costs, and slow deployments.',['Measure hidden redundancy','Calculate fear-based QA costs','Speed up deployments','Foster psychological safety']],
        ['22-3','Toxic Debt Quantification','The impact of negative team members on overall output, collaboration, and attrition.',['Quantify toxic behavior drag','Measure collaboration loss','Calculate attrition impact','Manage team dynamics']],
        ['22-4','Developer Experience (DX) ROI','Internal tooling investments, build time reduction, and the financial value of flow state.',['Invest in internal tooling','Reduce build times','Value engineer flow state','Measure DX improvements']],
        ['22-5','Compensation vs Equity Strategy','Structuring pay bands and equity grants to align with long-term enterprise value.',['Structure pay bands','Distribute equity effectively','Align with enterprise value','Retain top performers']]
    ]]
];

trackDefs.forEach(([trackId, trackTitle, trackDesc, tMods]) => {
    tMods.forEach(([id, title, desc, takeaways], i) => {
        const nextId = i < tMods.length - 1 ? tMods[i+1][0] : undefined;
        tracks18to22Modules[`${trackId}/${id}`] = m(
            `${id.replace('-','.')}`,
            title,
            desc,
            trackTitle,
            takeaways,
            [
                l(`Lesson 1: The Economics of ${title}`, `Foundational analysis of the costs, risks, and financial implications of ${title.toLowerCase()}.`,
                    [d('Cost Baseline','Initial implementation and maintenance costs.','Benchmark your spend'),
                     d('Hidden Waste','Where capital leaks during execution.','Identify efficiency gaps'),
                     d('ROI Vector','How to measure the return on this specific discipline.','Establish KPI tracking')],
                    `Audit your current processes against the ${title} baseline to identify one immediate capital leak.`),
                l(`Lesson 2: Execution & Strategy`, `The tactical steps required to execute ${title.toLowerCase()} securely and profitably.`,
                    [d('Process Implementation','Step-by-step rollout strategy.','Minimize disruption'),
                     d('Risk Mitigation','Identifying and neutralizing execution risks.','Reduce rollout risk'),
                     d('Team Alignment','Getting stakeholder buy-in and engineering alignment.','Accelerate adoption')],
                    `Draft a 1-page strategy memo for executing a ${title} initiative in your organization.`),
                l(`Lesson 3: Executive Reporting`, `Translating the technical reality of ${title.toLowerCase()} into board-level financial reports.`,
                    [d('Financial Translation','Converting technical metrics to EBITDA.','Speak the language of finance'),
                     d('Trend Presentation','Showing momentum rather than snapshots.','Demonstrate continuous ROI'),
                     d('Capital Request','How to ask for budget based on projected returns.','Secure operational funding')],
                    `Prepare an executive summary slide demonstrating the ROI of your ${title} strategy.`)
            ],
            nextId ? `/vault/curriculum/tracks/${trackId}/${nextId}` : undefined
        );
    });
});

import { StakeholderPosition, StrategicRehearsalPackage } from '../ontology/negotiation';

/**
 * Stakeholder Negotiation & Strategic Rehearsal Engine
 * Synthesizes multi-stakeholder compromise options and generates rehearsal packages for board meetings and vendor negotiations.
 */
export function getStakeholderPositions(): StakeholderPosition[] {
    return [
        {
            stakeholderRole: 'CFO',
            primaryObjectionOrGoal: 'Reduce annual OpEx spend by at least $250,000.',
            evidenceSource: 'AWS Billing & Anthropic API Invoices',
            confidencePct: 88,
            acceptableCompromiseBoundary: 'Approve CapEx if 12-month ROI exceeds 3.0x'
        },
        {
            stakeholderRole: 'CTO',
            primaryObjectionOrGoal: 'Increase developer tooling productivity and prevent context rot.',
            evidenceSource: 'GitHub Pull Request Telemetry & Cursor Audit',
            confidencePct: 82,
            acceptableCompromiseBoundary: 'Accept local SLMs if code generation latency remains under 400ms'
        },
        {
            stakeholderRole: 'CISO',
            primaryObjectionOrGoal: 'Ensure zero telemetry data leakage to third-party frontier API endpoints.',
            evidenceSource: 'Runtime Governance Audit & SOC2 Logs',
            confidencePct: 95,
            acceptableCompromiseBoundary: 'Mandate local Token Saver MCP sidecars with zero outbound telemetry'
        }
    ];
}

export function generateStrategicRehearsalPackage(rehearsalType: 'BoardMeeting' | 'VendorNegotiation' = 'BoardMeeting'): StrategicRehearsalPackage {
    return {
        engagementTitle: 'Q3 Board Technology & AI Investment Defense',
        rehearsalType,
        simulatedQuestionsAndObjections: [
            {
                question: 'Why did AI infrastructure spend double in Q2?',
                askingRole: 'CFO',
                recommendedResponse: 'Context rot and un-cached repetitive PDF context queries inflated API tokens by +410%. We deployed Token Saver MCP sidecars, recovering $319,500/yr.',
                supportingEvidence: 'Token Saver MCP Telemetry Audit (31 verified interventions)'
            },
            {
                question: 'Are we exposed to proprietary data leaks via developer LLM tools?',
                askingRole: 'CISO',
                recommendedResponse: 'All local sidecars run hybrid RAG with local BM25 keyword matching and zero third-party data egress.',
                supportingEvidence: 'Exogram Cryptographic Ledger Hashes & SOC2 Firewalls'
            }
        ],
        batnaSummary: 'Walk away from Anthropic Enterprise tier if discount is under 22%; migrate 60% of deterministic routing to local 8B SLMs.',
        recommendedConcessions: [
            'Offer 2-year enterprise commitment in exchange for 30% volume pricing tier',
            'Agree to quarterly seat utilization audits'
        ],
        synthesizedCompromiseOptions: [
            {
                optionLabel: 'Option A: Maximize Savings (Local SLM Cluster)',
                tradeoffSummary: 'Saves $319,500/yr; requires $40k CapEx for edge nodes.',
                acceptedByRoles: ['CFO', 'CISO'],
                rejectedByRoles: [],
                expectedFinancialImpactUSD: 319500
            },
            {
                optionLabel: 'Option B: Balanced Hybrid Routing (Intent Router + Sidecar)',
                tradeoffSummary: 'Saves $262,000/yr; zero latency impact on developer IDEs.',
                acceptedByRoles: ['CFO', 'CTO', 'CISO'],
                rejectedByRoles: [],
                expectedFinancialImpactUSD: 262000
            }
        ]
    };
}

import { DecisionApprovalRecord, ApprovalGovernanceRuntime } from '../governance/approvalGovernanceRuntime';

export interface ExecutiveInboxItem {
    id: string;
    type: 'ApprovalRequired' | 'BoardMeetingPrep' | 'RiskAlert' | 'DelayedTask' | 'VendorRenewal';
    title: string;
    subtitle: string;
    priority: 'Urgent' | 'High' | 'Normal';
    actionRequired: string;
    targetRefUrl: string;
    createdAt: string;
}

export class ExecutiveInboxStore {
    static getInboxItems(): ExecutiveInboxItem[] {
        const pendingApprovals = ApprovalGovernanceRuntime.getPendingApprovals();

        const items: ExecutiveInboxItem[] = [
            {
                id: 'inbox_01',
                type: 'ApprovalRequired',
                title: 'Signoff Required: $319,500 Token Saver MCP Rollout',
                subtitle: 'CFO approval required for $40,000 edge node CapEx investment.',
                priority: 'Urgent',
                actionRequired: 'Grant Digital Signature',
                targetRefUrl: '/workspace/inbox',
                createdAt: new Date().toISOString()
            },
            {
                id: 'inbox_02',
                type: 'BoardMeetingPrep',
                title: 'Q3 Board Meeting Briefing Deck Ready',
                subtitle: '11-slide presentation deck compiled with verified savings.',
                priority: 'High',
                actionRequired: 'Review & Rehearse Deck',
                targetRefUrl: '/missions',
                createdAt: new Date().toISOString()
            },
            {
                id: 'inbox_03',
                type: 'VendorRenewal',
                title: 'Cursor Enterprise Contract Renewal',
                subtitle: 'Annual contract expires in 45 days. Negotiation package prepared.',
                priority: 'High',
                actionRequired: 'Review Negotiation Brief',
                targetRefUrl: '/assessments',
                createdAt: new Date().toISOString()
            }
        ];

        return items;
    }
}

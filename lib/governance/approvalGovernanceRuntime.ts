import { EnterprisePerson } from '../organization/peopleResponsibilityGraph';
import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';

export interface DecisionApprovalRecord {
    approvalId: string;
    decisionId: string;
    approver: EnterprisePerson;
    status: 'Pending' | 'Approved' | 'Rejected' | 'Abstained';
    digitalSignatureHash: string;
    comment: string;
    timestamp: string;
}

export class ApprovalGovernanceRuntime {
    private static approvals: DecisionApprovalRecord[] = [];

    static stageApprovalRequest(pkg: CanonicalDecisionPackage, approver: EnterprisePerson): DecisionApprovalRecord {
        const record: DecisionApprovalRecord = {
            approvalId: `appr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
            decisionId: pkg.id,
            approver,
            status: 'Pending',
            digitalSignatureHash: `sig_pending_${pkg.id}`,
            comment: 'Awaiting formal executive signoff.',
            timestamp: new Date().toISOString()
        };
        this.approvals.push(record);
        return record;
    }

    static grantApproval(approvalId: string, comment: string = 'Approved for execution'): DecisionApprovalRecord | undefined {
        const record = this.approvals.find(a => a.approvalId === approvalId);
        if (record) {
            record.status = 'Approved';
            record.comment = comment;
            record.digitalSignatureHash = `sig_approved_${Date.now()}_${record.approver.personId}`;
            record.timestamp = new Date().toISOString();
        }
        return record;
    }

    static getPendingApprovals(): DecisionApprovalRecord[] {
        return this.approvals.filter(a => a.status === 'Pending');
    }
}

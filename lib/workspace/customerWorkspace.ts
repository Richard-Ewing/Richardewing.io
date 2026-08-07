import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';
import { ExecutiveArtifact } from '../compiler/artifactCompiler';
import { ExecutiveInboxItem } from './executiveInbox';
import { EnterpriseProgram } from '../execution/programExecutionRuntime';
import { DecisionApprovalRecord } from '../governance/approvalGovernanceRuntime';

export interface CustomerOrganizationWorkspace {
    organizationId: string;
    organizationName: string;
    subscriptionTier: 'EnterpriseContinuous' | 'WorkspaceMonthly' | 'DiagnosticOneTime';
    cumulativeSavingsUSD: number;
    decisionAccuracyPct: number;
    activeMissionsCount: number;
    completedMissionsCount: number;
    historicalBoardDecksCount: number;
    latestDecisionPackage?: CanonicalDecisionPackage;
    storedArtifacts: ExecutiveArtifact[];
    inboxItems?: ExecutiveInboxItem[];
    pendingApprovals?: DecisionApprovalRecord[];
    activePrograms?: EnterpriseProgram[];
}

export class CustomerWorkspaceStore {
    private static workspace: CustomerOrganizationWorkspace = {
        organizationId: 'org_acme_corp_01',
        organizationName: 'Acme Enterprise Solutions',
        subscriptionTier: 'EnterpriseContinuous',
        cumulativeSavingsUSD: 1420000,
        decisionAccuracyPct: 94.2,
        activeMissionsCount: 3,
        completedMissionsCount: 14,
        historicalBoardDecksCount: 8,
        storedArtifacts: []
    };

    static getWorkspace(): CustomerOrganizationWorkspace {
        return this.workspace;
    }

    static recordCompletedMission(savingsUSD: number, artifacts: ExecutiveArtifact[]) {
        this.workspace.cumulativeSavingsUSD += savingsUSD;
        this.workspace.completedMissionsCount += 1;
        this.workspace.storedArtifacts.push(...artifacts);
    }
}

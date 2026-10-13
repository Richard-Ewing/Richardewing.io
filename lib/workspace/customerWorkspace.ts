import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';
import { ExecutiveArtifact } from '../compiler/artifactCompiler';
import { ExecutiveInboxItem } from './executiveInbox';
import { EnterpriseProgram } from '../execution/programExecutionRuntime';
import { DecisionApprovalRecord } from '../governance/approvalGovernanceRuntime';

export interface SavedPnLScenario {
    id: string;
    name: string;
    createdAt: string;
    annualArrUSD: number;
    monthlyAiSpendUSD: number;
    engineeringHeadcount: number;
    zombieFeaturePct: number;
    projectedAnnualSavingsUSD: number;
    aperUSD: number;
}

export interface CustomerOrganizationWorkspace {
    organizationId: string;
    organizationName: string;
    subscriptionTier: 'EnterpriseContinuous' | 'WorkspaceMonthly' | 'DiagnosticOneTime';
    annualArrUSD: number;
    monthlyAiSpendUSD: number;
    engineeringHeadcount: number;
    zombieFeaturePct: number;
    cumulativeSavingsUSD: number;
    decisionAccuracyPct: number;
    activeMissionsCount: number;
    completedMissionsCount: number;
    historicalBoardDecksCount: number;
    savedScenarios: SavedPnLScenario[];
    latestDecisionPackage?: CanonicalDecisionPackage;
    storedArtifacts: ExecutiveArtifact[];
    inboxItems?: ExecutiveInboxItem[];
    pendingApprovals?: DecisionApprovalRecord[];
    activePrograms?: EnterpriseProgram[];
}

const STORAGE_KEY = 're_product_economist_workspace_v1';

const DEFAULT_WORKSPACE: CustomerOrganizationWorkspace = {
    organizationId: 'org_acme_corp_01',
    organizationName: 'Acme Enterprise Solutions',
    subscriptionTier: 'EnterpriseContinuous',
    annualArrUSD: 12500000,
    monthlyAiSpendUSD: 35000,
    engineeringHeadcount: 42,
    zombieFeaturePct: 28,
    cumulativeSavingsUSD: 1420000,
    decisionAccuracyPct: 94.2,
    activeMissionsCount: 3,
    completedMissionsCount: 14,
    historicalBoardDecksCount: 8,
    savedScenarios: [
        {
            id: 'scen_baseline_01',
            name: 'Q3 Baseline P&L & AI Margin Model',
            createdAt: '2026-10-01',
            annualArrUSD: 12500000,
            monthlyAiSpendUSD: 35000,
            engineeringHeadcount: 42,
            zombieFeaturePct: 28,
            projectedAnnualSavingsUSD: 1233400,
            aperUSD: 297619,
        }
    ],
    storedArtifacts: []
};

export class CustomerWorkspaceStore {
    private static workspace: CustomerOrganizationWorkspace = { ...DEFAULT_WORKSPACE };

    static calculateProjectedSavings(ws: Pick<CustomerOrganizationWorkspace, 'monthlyAiSpendUSD' | 'engineeringHeadcount' | 'zombieFeaturePct'>): number {
        const annualAiSavings = Math.round(ws.monthlyAiSpendUSD * 12 * 0.38);
        const zombieCarryCost = ws.engineeringHeadcount * 185000 * (ws.zombieFeaturePct / 100);
        const recoverableZombieCost = Math.round(zombieCarryCost * 0.5);
        return annualAiSavings + recoverableZombieCost;
    }

    static getWorkspace(): CustomerOrganizationWorkspace {
        if (typeof window !== 'undefined') {
            try {
                const raw = window.localStorage.getItem(STORAGE_KEY);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    this.workspace = {
                        ...DEFAULT_WORKSPACE,
                        ...parsed,
                        savedScenarios: Array.isArray(parsed.savedScenarios)
                            ? parsed.savedScenarios
                            : DEFAULT_WORKSPACE.savedScenarios,
                    };
                }
            } catch {
                // Ignore localStorage read errors in restricted environments
            }
        }
        return this.workspace;
    }

    private static persist() {
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.workspace));
                window.dispatchEvent(new Event('re-workspace-updated'));
            } catch {
                // Ignore localStorage quota/write errors
            }
        }
    }

    static updateOrganizationProfile(
        updates: Partial<Pick<CustomerOrganizationWorkspace, 'organizationName' | 'annualArrUSD' | 'monthlyAiSpendUSD' | 'engineeringHeadcount' | 'zombieFeaturePct'>>
    ): CustomerOrganizationWorkspace {
        const current = this.getWorkspace();
        const next: CustomerOrganizationWorkspace = {
            ...current,
            ...updates,
        };
        next.cumulativeSavingsUSD = this.calculateProjectedSavings(next);
        this.workspace = next;
        this.persist();
        return this.workspace;
    }

    static saveScenario(scenarioName: string): CustomerOrganizationWorkspace {
        const current = this.getWorkspace();
        const projectedAnnualSavingsUSD = this.calculateProjectedSavings(current);
        const aperUSD = current.engineeringHeadcount > 0
            ? Math.round(current.annualArrUSD / current.engineeringHeadcount)
            : 0;
        const newScenario: SavedPnLScenario = {
            id: `scen_${Date.now()}`,
            name: scenarioName.trim() || `${current.organizationName} Scenario`,
            createdAt: new Date().toISOString().slice(0, 10),
            annualArrUSD: current.annualArrUSD,
            monthlyAiSpendUSD: current.monthlyAiSpendUSD,
            engineeringHeadcount: current.engineeringHeadcount,
            zombieFeaturePct: current.zombieFeaturePct,
            projectedAnnualSavingsUSD,
            aperUSD,
        };
        this.workspace = {
            ...current,
            cumulativeSavingsUSD: projectedAnnualSavingsUSD,
            historicalBoardDecksCount: current.historicalBoardDecksCount + 1,
            savedScenarios: [newScenario, ...current.savedScenarios],
        };
        this.persist();
        return this.workspace;
    }

    static deleteScenario(scenarioId: string): CustomerOrganizationWorkspace {
        const current = this.getWorkspace();
        this.workspace = {
            ...current,
            savedScenarios: current.savedScenarios.filter(s => s.id !== scenarioId),
        };
        this.persist();
        return this.workspace;
    }

    static resetWorkspace(): CustomerOrganizationWorkspace {
        this.workspace = { ...DEFAULT_WORKSPACE };
        if (typeof window !== 'undefined') {
            try {
                window.localStorage.removeItem(STORAGE_KEY);
                window.dispatchEvent(new Event('re-workspace-updated'));
            } catch {
                // Ignore
            }
        }
        return this.workspace;
    }

    static recordCompletedMission(savingsUSD: number, artifacts: ExecutiveArtifact[]) {
        const current = this.getWorkspace();
        this.workspace = {
            ...current,
            cumulativeSavingsUSD: current.cumulativeSavingsUSD + savingsUSD,
            completedMissionsCount: current.completedMissionsCount + 1,
            storedArtifacts: [...current.storedArtifacts, ...artifacts],
        };
        this.persist();
    }

    static generateBoardReportMarkdown(ws: CustomerOrganizationWorkspace = this.getWorkspace()): string {
        const aper = ws.engineeringHeadcount > 0 ? Math.round(ws.annualArrUSD / ws.engineeringHeadcount) : 0;
        const annualAiSpend = ws.monthlyAiSpendUSD * 12;
        const zombieCarryCost = Math.round(ws.engineeringHeadcount * 185000 * (ws.zombieFeaturePct / 100));
        const projectedSavings = this.calculateProjectedSavings(ws);

        return [
            `# ${ws.organizationName} - Product & AI Economics Board Briefing`,
            `Generated via RichardEwing.io Live Product Economist Workspace`,
            `Date: ${new Date().toISOString().slice(0, 10)}`,
            ``,
            `## 1. Executive P&L Telemetry Summary`,
            `- **Organization / Product Line**: ${ws.organizationName}`,
            `- **Annual Recurring Revenue (ARR)**: $${ws.annualArrUSD.toLocaleString()}`,
            `- **Engineering Headcount**: ${ws.engineeringHeadcount} FTEs`,
            `- **Revenue Per Engineer (APER)**: $${aper.toLocaleString()} / FTE (Healthy Enterprise Target: $350,000+)`,
            `- **Monthly AI / LLM Spend**: $${ws.monthlyAiSpendUSD.toLocaleString()} / mo ($${annualAiSpend.toLocaleString()} / yr)`,
            `- **Estimated Zombie Feature Maintenance Load**: ${ws.zombieFeaturePct}% of engineering capacity ($${zombieCarryCost.toLocaleString()} annual fully-loaded carry cost)`,
            `- **Total Recoverable Annual EBITDA / Savings**: $${projectedSavings.toLocaleString()} / yr`,
            ``,
            `## 2. Recommended 30-Day Product Economist Interventions`,
            `1. **Sunset Bottom-Quartile Zombie Features**: Deprecate features consuming ${ws.zombieFeaturePct}% of engineering cycles with <3% active seat utilization to reclaim ~$${Math.round(zombieCarryCost * 0.5).toLocaleString()}/yr in R&D capacity.`,
            `2. **Enforce AI Token Margin Guardrails**: Implement semantic caching, small-model routing, and P90/P99 usage tier caps to save ~$${Math.round(annualAiSpend * 0.38).toLocaleString()}/yr in token burn.`,
            `3. **Realign Roadmap to Net Dollar Retention (NDR)**: Require every Q3/Q4 epic to state its attributed ARR defense or expansion payback period before sprint allocation.`,
            ``,
            `## 3. Saved P&L Scenarios (${ws.savedScenarios.length})`,
            ...ws.savedScenarios.map(
                (s, idx) => `${idx + 1}. **${s.name}** (${s.createdAt}): ARR $${s.annualArrUSD.toLocaleString()} | Headcount ${s.engineeringHeadcount} | AI Spend $${s.monthlyAiSpendUSD.toLocaleString()}/mo | Projected Savings $${s.projectedAnnualSavingsUSD.toLocaleString()}/yr`
            ),
            ``,
            `---`,
            `Prepared with The Product & AI Economist Operating System (https://www.richardewing.io/workspace)`
        ].join('\n');
    }
}


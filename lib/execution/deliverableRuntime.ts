import { EnterpriseEntity } from '../entities/enterpriseEntity';

export type ExecutiveArtifactType =
  | 'BoardDeck'
  | 'BudgetProposal'
  | 'ExecutiveMemo'
  | 'ArchitectureDecision'
  | 'RiskRegister'
  | 'ImplementationPlan';

export type ArtifactApprovalStatus = 'Draft' | 'UnderReview' | 'Approved' | 'Executed';

export interface ArtifactRevision {
  version: number;
  updatedAt: string;
  updatedBy: string;
  changeSummary: string;
}

export interface ExecutiveArtifact {
  id: string;
  title: string;
  artifactType: ExecutiveArtifactType;
  sourceMissionId: string;
  sourceEvidence: string[];
  version: number;
  owner: string;
  approvalStatus: ArtifactApprovalStatus;
  history: ArtifactRevision[];
  executionLinks: string[];
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export class DeliverableRuntime {
  private static store: Map<string, ExecutiveArtifact> = new Map([
    [
      'art_board_001',
      {
        id: 'art_board_001',
        title: 'Q3 Enterprise AI Strategy & Capital Allocation Deck',
        artifactType: 'BoardDeck',
        sourceMissionId: 'mission_board_prep',
        sourceEvidence: ['ev_token_savings_01', 'ev_cursor_audit_02'],
        version: 2,
        owner: 'Chief Technology Officer',
        approvalStatus: 'Approved',
        history: [
          { version: 1, updatedAt: '2026-07-15T10:00:00Z', updatedBy: 'CTO', changeSummary: 'Initial deck draft compiled.' },
          { version: 2, updatedAt: '2026-08-01T14:30:00Z', updatedBy: 'CFO', changeSummary: 'Verified $319,500 token savings included.' }
        ],
        executionLinks: ['/workspace/finance', '/workspace/vendors'],
        metadata: { slideCount: 11, format: 'PDF', downloadUrl: 'https://richardewing.io/exports/boarddeck_dp_board_001.pdf' },
        createdAt: '2026-07-15T10:00:00Z',
        updatedAt: '2026-08-01T14:30:00Z'
      }
    ],
    [
      'art_memo_002',
      {
        id: 'art_memo_002',
        title: 'Token Saver Sidecar Architecture & Zero Egress Mandate',
        artifactType: 'ExecutiveMemo',
        sourceMissionId: 'mission_token_optimization',
        sourceEvidence: ['ev_latency_benchmark_04'],
        version: 1,
        owner: 'VP Infrastructure',
        approvalStatus: 'Executed',
        history: [
          { version: 1, updatedAt: '2026-07-20T09:15:00Z', updatedBy: 'VP Infra', changeSummary: 'Final architecture memo signed off.' }
        ],
        executionLinks: ['/workspace/engineering', '/workspace/governance'],
        metadata: { wordCount: 1450, classification: 'Restricted', downloadUrl: 'https://richardewing.io/exports/executivememo_dp_board_001.pdf' },
        createdAt: '2026-07-20T09:15:00Z',
        updatedAt: '2026-07-20T09:15:00Z'
      }
    ]
  ]);

  static getAllArtifacts(): ExecutiveArtifact[] {
    return Array.from(this.store.values());
  }

  static getArtifact(id: string): ExecutiveArtifact | undefined {
    return this.store.get(id);
  }

  static createArtifact(artifact: Omit<ExecutiveArtifact, 'id' | 'createdAt' | 'updatedAt' | 'version' | 'history'>): ExecutiveArtifact {
    const id = `art_${Date.now()}`;
    const now = new Date().toISOString();
    const newArtifact: ExecutiveArtifact = {
      ...artifact,
      id,
      version: 1,
      history: [{ version: 1, updatedAt: now, updatedBy: artifact.owner, changeSummary: 'Artifact created.' }],
      createdAt: now,
      updatedAt: now
    };
    this.store.set(id, newArtifact);
    return newArtifact;
  }

  static mutateArtifactStatus(id: string, newStatus: ArtifactApprovalStatus, updatedBy: string, summary: string): ExecutiveArtifact | null {
    const existing = this.store.get(id);
    if (!existing) return null;
    const now = new Date().toISOString();
    const nextVersion = existing.version + 1;
    const updated: ExecutiveArtifact = {
      ...existing,
      version: nextVersion,
      approvalStatus: newStatus,
      updatedAt: now,
      history: [
        ...existing.history,
        { version: nextVersion, updatedAt: now, updatedBy, changeSummary: summary }
      ]
    };
    this.store.set(id, updated);
    return updated;
  }
}

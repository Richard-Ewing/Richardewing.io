import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';

export interface DecisionVersionRecord {
    versionId: string;
    decisionId: string;
    versionTag: 'v1.0-Proposal' | 'v2.0-Approved' | 'v3.0-Verified';
    timestamp: string;
    decisionPackage: CanonicalDecisionPackage;
    lessonsLearned: string[];
}

export class VersionedDecisionMemory {
    private static memoryStore: DecisionVersionRecord[] = [];

    static logDecisionVersion(pkg: CanonicalDecisionPackage, tag: 'v1.0-Proposal' | 'v2.0-Approved' | 'v3.0-Verified', lessons: string[] = []): DecisionVersionRecord {
        const record: DecisionVersionRecord = {
            versionId: `ver_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
            decisionId: pkg.id,
            versionTag: tag,
            timestamp: new Date().toISOString(),
            decisionPackage: pkg,
            lessonsLearned: lessons.length > 0 ? lessons : ['Initial decision package compiled based on verified telemetry.']
        };
        this.memoryStore.push(record);
        return record;
    }

    static queryInstitutionalMemory(keyword: string): DecisionVersionRecord[] {
        return this.memoryStore.filter(rec => 
            rec.decisionPackage.questionText.toLowerCase().includes(keyword.toLowerCase()) ||
            rec.decisionPackage.summary.toLowerCase().includes(keyword.toLowerCase())
        );
    }
}

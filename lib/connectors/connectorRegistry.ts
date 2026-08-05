import { TelemetryProvider, UniversalEvidenceRecord, normalizeEvidencePayload } from '../evidence/universalEvidenceSchema';

export interface EnterpriseConnector {
    provider: TelemetryProvider;
    status: 'Connected' | 'Disconnected' | 'PendingAuth';
    authenticate(credentials: Record<string, string>): Promise<boolean>;
    collectEvidence(): Promise<UniversalEvidenceRecord[]>;
}

export class AWSBillingConnector implements EnterpriseConnector {
    provider: TelemetryProvider = 'AWS';
    status: 'Connected' | 'Disconnected' | 'PendingAuth' = 'Connected';

    async authenticate(): Promise<boolean> {
        return true;
    }

    async collectEvidence(): Promise<UniversalEvidenceRecord[]> {
        return [
            normalizeEvidencePayload('AWS', 'MonthlyInferenceCostUSD', 45000, 'Finance'),
            normalizeEvidencePayload('AWS', 'UncachedPDFContextRotUSD', 319500, 'Engineering')
        ];
    }
}

export class GitHubTelemetryConnector implements EnterpriseConnector {
    provider: TelemetryProvider = 'GitHub';
    status: 'Connected' | 'Disconnected' | 'PendingAuth' = 'Connected';

    async authenticate(): Promise<boolean> {
        return true;
    }

    async collectEvidence(): Promise<UniversalEvidenceRecord[]> {
        return [
            normalizeEvidencePayload('GitHub', 'ProductDebtIndexScore', 52, 'Engineering'),
            normalizeEvidencePayload('GitHub', 'PRVerificationDragHours', 14.2, 'Engineering')
        ];
    }
}

export class ConnectorRegistry {
    private static connectors: EnterpriseConnector[] = [
        new AWSBillingConnector(),
        new GitHubTelemetryConnector()
    ];

    static getActiveConnectors(): EnterpriseConnector[] {
        return this.connectors;
    }

    static async collectAllEnterpriseEvidence(): Promise<UniversalEvidenceRecord[]> {
        const results: UniversalEvidenceRecord[] = [];
        for (const conn of this.connectors) {
            const records = await conn.collectEvidence();
            results.push(...records);
        }
        return results;
    }
}

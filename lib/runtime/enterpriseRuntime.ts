import { EnterpriseEntity } from '../entities/enterpriseEntity';
import { CustomerWorkspaceStore, CustomerOrganizationWorkspace } from '../workspace/customerWorkspace';

export interface EnterpriseOperatingModel {
    riskAppetite: 'Aggressive' | 'Balanced' | 'Conservative';
    governanceStyle: 'Deterministic' | 'Flexible';
    primaryIndustry: string;
}

export class EnterpriseRuntime {
    private static entities: EnterpriseEntity[] = [
        {
            id: 'ent_vendor_cursor',
            type: 'Vendor',
            name: 'Cursor Enterprise',
            version: 1,
            ownerRole: 'CIO',
            status: 'Active',
            metadata: { annualSpendUSD: 185000, userCount: 450 },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 'ent_repo_core',
            type: 'Repository',
            name: 'richardewing-io-core',
            version: 1,
            ownerRole: 'VP Engineering',
            status: 'Active',
            metadata: { language: 'TypeScript', framework: 'Next.js' },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];

    static getOrganizationState(): CustomerOrganizationWorkspace {
        return CustomerWorkspaceStore.getWorkspace();
    }

    static getEntities(): EnterpriseEntity[] {
        return this.entities;
    }

    static registerEntity(entity: EnterpriseEntity) {
        this.entities.push(entity);
    }
}

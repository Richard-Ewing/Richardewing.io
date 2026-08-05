import { ExecutiveRole } from '../kernel/decisionPackageSchema';

export type EntityType = 
    | 'Vendor' 
    | 'Repository' 
    | 'Program' 
    | 'Mission' 
    | 'Meeting' 
    | 'Risk' 
    | 'Budget' 
    | 'System' 
    | 'Person'
    | 'DecisionPackage';

export interface EnterpriseEntity {
    id: string;
    type: EntityType;
    name: string;
    version: number;
    ownerRole: ExecutiveRole | string;
    status: string;
    metadata: Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
}

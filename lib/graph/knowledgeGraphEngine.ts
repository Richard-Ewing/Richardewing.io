import { EnterpriseEntity } from '../entities/enterpriseEntity';

export interface EnterpriseEdge {
    edgeId: string;
    sourceEntityId: string;
    targetEntityId: string;
    relationshipType: 'owns' | 'supports' | 'funds' | 'blocks' | 'mitigates' | 'decides' | 'evaluates' | 'impacts' | 'depends_on';
}

export class KnowledgeGraphEngine {
    private static edges: EnterpriseEdge[] = [
        {
            edgeId: 'edge_01',
            sourceEntityId: 'person_ceo_01',
            targetEntityId: 'ent_vendor_cursor',
            relationshipType: 'owns'
        },
        {
            edgeId: 'edge_02',
            sourceEntityId: 'ent_vendor_cursor',
            targetEntityId: 'ent_repo_core',
            relationshipType: 'supports'
        }
    ];

    static getEdges(): EnterpriseEdge[] {
        return this.edges;
    }

    static addEdge(edge: EnterpriseEdge) {
        this.edges.push(edge);
    }
}

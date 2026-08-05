import { EnterpriseEntity } from '../entities/enterpriseEntity';
import { EnterpriseRuntime } from '../runtime/enterpriseRuntime';

export interface SearchResultItem {
    id: string;
    type: string;
    title: string;
    snippet: string;
    matchScore: number;
}

export class EnterpriseSearch {
    static search(query: string): SearchResultItem[] {
        const entities = EnterpriseRuntime.getEntities();
        const results: SearchResultItem[] = [];

        for (const ent of entities) {
            if (ent.name.toLowerCase().includes(query.toLowerCase()) || ent.type.toLowerCase().includes(query.toLowerCase())) {
                results.push({
                    id: ent.id,
                    type: ent.type,
                    title: ent.name,
                    snippet: `Owner: ${ent.ownerRole} • Status: ${ent.status}`,
                    matchScore: 0.95
                });
            }
        }

        if ('cursor'.includes(query.toLowerCase()) || 'vendor'.includes(query.toLowerCase())) {
            results.push({
                id: 'ent_cursor_contract',
                type: 'VendorContract',
                title: 'Cursor Enterprise Seat Agreement',
                snippet: '450 Licenses • $185,000 Annual Spend • Renewal Date: Nov 2026',
                matchScore: 0.98
            });
        }

        return results;
    }
}

import { ExecutiveRole } from '../kernel/decisionPackageSchema';

export interface EnterprisePerson {
    personId: string;
    name: string;
    email: string;
    title: string;
    role: ExecutiveRole;
    department: 'Executive' | 'Finance' | 'Engineering' | 'Security' | 'Product' | 'IT';
    approvalLimitUSD: number;
    reportsToPersonId?: string;
}

export const ENTERPRISE_PEOPLE_GRAPH: EnterprisePerson[] = [
    {
        personId: 'person_ceo_01',
        name: 'Richard Ewing',
        email: 'richard@enterprise.internal',
        title: 'Chief Executive Officer',
        role: 'CEO',
        department: 'Executive',
        approvalLimitUSD: 10000000
    },
    {
        personId: 'person_cfo_01',
        name: 'Sarah Vance',
        email: 'sarah.vance@enterprise.internal',
        title: 'Chief Financial Officer',
        role: 'CFO',
        department: 'Finance',
        approvalLimitUSD: 2500000,
        reportsToPersonId: 'person_ceo_01'
    },
    {
        personId: 'person_cto_01',
        name: 'Marcus Thorne',
        email: 'marcus.thorne@enterprise.internal',
        title: 'Chief Technology Officer',
        role: 'CTO',
        department: 'Engineering',
        approvalLimitUSD: 1000000,
        reportsToPersonId: 'person_ceo_01'
    },
    {
        personId: 'person_ciso_01',
        name: 'Elena Rostova',
        email: 'elena.rostova@enterprise.internal',
        title: 'Chief Information Security Officer',
        role: 'CISO',
        department: 'Security',
        approvalLimitUSD: 500000,
        reportsToPersonId: 'person_ceo_01'
    }
];

export class PeopleResponsibilityGraph {
    static findPersonByRole(role: ExecutiveRole): EnterprisePerson {
        return ENTERPRISE_PEOPLE_GRAPH.find(p => p.role === role) || ENTERPRISE_PEOPLE_GRAPH[0];
    }

    static getApprovalChainForAmount(amountUSD: number): EnterprisePerson[] {
        return ENTERPRISE_PEOPLE_GRAPH.filter(p => p.approvalLimitUSD >= amountUSD);
    }
}

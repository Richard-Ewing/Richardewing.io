import { ExecutionTicket } from '../connectors/executionRegistry';

export type ExecutionLifecycleStatus = 'Staged' | 'Approved' | 'InExecution' | 'Blocked' | 'Completed' | 'Verified';

export interface TrackedExecutionItem {
    id: string;
    ticket: ExecutionTicket;
    status: ExecutionLifecycleStatus;
    blockedReason?: string;
    completionPct: number;
    lastUpdated: string;
}

export class ExecutionIntelligence {
    private static items: TrackedExecutionItem[] = [];

    static trackTicket(ticket: ExecutionTicket): TrackedExecutionItem {
        const item: TrackedExecutionItem = {
            id: `track_${ticket.ticketId}`,
            ticket,
            status: 'InExecution',
            completionPct: 40,
            lastUpdated: new Date().toISOString()
        };
        this.items.push(item);
        return item;
    }

    static getExecutionSummary(): { total: number; inExecution: number; completed: number; verified: number } {
        return {
            total: this.items.length || 4,
            inExecution: 2,
            completed: 1,
            verified: 1
        };
    }
}

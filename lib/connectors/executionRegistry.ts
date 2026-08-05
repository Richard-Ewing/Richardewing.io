export type ExecutionTarget = 'Jira' | 'ServiceNow' | 'GitHub' | 'Slack';

export interface ExecutionTicket {
    ticketId: string;
    target: ExecutionTarget;
    title: string;
    description: string;
    status: 'Staged' | 'Created' | 'InExecution' | 'Completed';
    externalRefUrl: string;
    createdAt: string;
}

export class ExecutionConnectorRegistry {
    static async stageExecutionTask(target: ExecutionTarget, title: string, description: string): Promise<ExecutionTicket> {
        const ticketId = `tkt_${target.toLowerCase()}_${Date.now()}`;
        return {
            ticketId,
            target,
            title,
            description,
            status: 'Created',
            externalRefUrl: `https://${target.toLowerCase()}.enterprise.internal/tickets/${ticketId}`,
            createdAt: new Date().toISOString()
        };
    }

    static async executeDecisionPackageActions(recommendedActions: string[]): Promise<ExecutionTicket[]> {
        const tickets: ExecutionTicket[] = [];
        for (const action of recommendedActions) {
            const ticket = await this.stageExecutionTask('Jira', `Execute: ${action}`, `Automated task staged via Enterprise Execution Engine for action: ${action}`);
            tickets.push(ticket);
        }
        return tickets;
    }
}

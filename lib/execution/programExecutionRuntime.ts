import { ExecutionTicket } from '../connectors/executionRegistry';

export type TaskStatus = 'Todo' | 'InProgress' | 'Blocked' | 'Completed' | 'Verified';

export interface ProgramTask {
    taskId: string;
    title: string;
    ownerRole: string;
    assignedToPersonId: string;
    priority: 'Critical' | 'High' | 'Medium';
    status: TaskStatus;
    blockedReason?: string;
    executionTicketRef?: ExecutionTicket;
    dueDate: string;
}

export interface ProgramWorkstream {
    workstreamId: string;
    title: string;
    ownerRole: string;
    tasks: ProgramTask[];
}

export interface EnterpriseProject {
    projectId: string;
    title: string;
    objective: string;
    workstreams: ProgramWorkstream[];
    completionPct: number;
}

export interface EnterpriseProgram {
    programId: string;
    missionId: string;
    title: string;
    projects: EnterpriseProject[];
    targetOutcomeUSD: number;
    status: 'Active' | 'OnHold' | 'Completed';
}

export class ProgramExecutionRuntime {
    private static programs: EnterpriseProgram[] = [];

    static createProgramFromMission(missionId: string, title: string, targetOutcomeUSD: number, actions: string[]): EnterpriseProgram {
        const tasks: ProgramTask[] = actions.map((act, idx) => ({
            taskId: `task_${Date.now()}_${idx}`,
            title: act,
            ownerRole: 'VP Engineering',
            assignedToPersonId: 'person_cto_01',
            priority: 'High',
            status: 'InProgress',
            dueDate: new Date(Date.now() + 14 * 86400000).toISOString()
        }));

        const program: EnterpriseProgram = {
            programId: `prog_${Date.now()}`,
            missionId,
            title: `Program: ${title}`,
            projects: [
                {
                    projectId: `proj_01_${Date.now()}`,
                    title: 'Token Optimization & Infrastructure Upgrade',
                    objective: 'Reduce LLM inference token waste by 60%',
                    workstreams: [
                        {
                            workstreamId: `ws_01_${Date.now()}`,
                            title: 'Engineering Sidecar Deployment',
                            ownerRole: 'VP Engineering',
                            tasks
                        }
                    ],
                    completionPct: 35
                }
            ],
            targetOutcomeUSD,
            status: 'Active'
        };

        this.programs.push(program);
        return program;
    }

    static getActivePrograms(): EnterpriseProgram[] {
        return this.programs;
    }
}

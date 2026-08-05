export type EnterpriseEventType = 
    | 'MissionStarted' 
    | 'EvidenceCollected' 
    | 'DecisionPackageCompiled' 
    | 'ApprovalGranted' 
    | 'TaskCompleted' 
    | 'VerificationFinished';

export interface EnterpriseEvent {
    eventId: string;
    eventType: EnterpriseEventType;
    sourceModule: string;
    payload: Record<string, unknown>;
    timestamp: string;
}

export class EventBusRuntime {
    private static listeners: ((event: EnterpriseEvent) => void)[] = [];

    static publish(eventType: EnterpriseEventType, sourceModule: string, payload: Record<string, unknown>): EnterpriseEvent {
        const event: EnterpriseEvent = {
            eventId: `evt_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
            eventType,
            sourceModule,
            payload,
            timestamp: new Date().toISOString()
        };
        this.listeners.forEach(fn => fn(event));
        return event;
    }

    static subscribe(callback: (event: EnterpriseEvent) => void) {
        this.listeners.push(callback);
    }
}

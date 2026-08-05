export interface TimelineEvent {
    eventId: string;
    title: string;
    category: 'Board' | 'Vendor' | 'Budget' | 'Security' | 'Deployment';
    description: string;
    financialImpactUSD?: number;
    timestamp: string;
}

export class EnterpriseTimeline {
    private static events: TimelineEvent[] = [
        {
            eventId: 'timeline_01',
            title: 'Q3 Board Meeting Briefing Completed',
            category: 'Board',
            description: 'Presented $319,500 token saver savings to Board Audit Committee.',
            financialImpactUSD: 319500,
            timestamp: new Date(Date.now() - 86400000 * 2).toISOString()
        },
        {
            eventId: 'timeline_02',
            title: 'Token Saver MCP Sidecars Deployed',
            category: 'Deployment',
            description: 'Rolled out hybrid BM25 RAG sidecars to 14 core repositories.',
            financialImpactUSD: 319500,
            timestamp: new Date(Date.now() - 86400000 * 5).toISOString()
        }
    ];

    static getTimeline(): TimelineEvent[] {
        return this.events;
    }
}

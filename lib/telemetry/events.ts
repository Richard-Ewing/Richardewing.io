import posthog from 'posthog-js';

export type DiagnosticEventName = 
  | 'diagnostic_started' 
  | 'diagnostic_completed' 
  | 'pdf_exported' 
  | 'exogram_clicked'
  | 'commercial_pathway_clicked';

export interface TelemetryEvent {
    eventName: DiagnosticEventName;
    toolId: string;
    properties?: Record<string, any>;
    timestamp: string;
}

export interface CommercialAttributionProperties {
    conceptSlug?: string;
    toolId?: string;
    problemStatement?: string;
    relationshipType: 'MEASURES' | 'OPERATIONALIZES' | 'IMPLEMENTS' | 'ADVISES_ON' | 'ADDRESSES' | 'RELATED_SOLUTION';
    destination: 'RICHARD_EWING_ADVISORY' | 'EXOGRAM_SOFTWARE' | 'CAREERWIN_PLATFORM';
    targetRole?: string;
}

export function trackDiagnosticEvent(eventName: DiagnosticEventName, toolId: string, properties?: Record<string, any>) {
    const event: TelemetryEvent = {
        eventName,
        toolId,
        properties,
        timestamp: new Date().toISOString()
    };
    
    // Log to console locally.
    if (typeof window !== 'undefined') {
        console.log(`[Telemetry] ${eventName}`, event);
        
        // Push to PostHog
        if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
            posthog.capture(eventName, {
                tool_id: toolId,
                ...properties
            });
        }
    }
}

export function trackCommercialJourney(
    action: 'pathway_clicked' | 'advisory_inquiry' | 'product_demo_requested',
    attribution: CommercialAttributionProperties
) {
    trackDiagnosticEvent('commercial_pathway_clicked', attribution.toolId || attribution.conceptSlug || 'concept-graph', {
        action,
        ...attribution
    });
}


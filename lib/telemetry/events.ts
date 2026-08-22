import posthog from 'posthog-js';

export type DiagnosticEventName = 
  | 'diagnostic_started' 
  | 'diagnostic_completed' 
  | 'pdf_exported' 
  | 'exogram_clicked'
  | 'commercial_routing_rendered'
  | 'commercial_pathway_clicked'
  | 'commercial_intent_engaged'
  | 'commercial_conversion_completed';

export type CommercialFunnelStage = 'ROUTING' | 'INTEREST' | 'INTENT' | 'CONVERSION';

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
    funnelStage: CommercialFunnelStage;
    targetRole?: string;
    metadata?: Record<string, any>;
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

export function trackCommercialFunnelStep(
    stage: CommercialFunnelStage,
    attribution: Omit<CommercialAttributionProperties, 'funnelStage'>
) {
    const eventNameMap: Record<CommercialFunnelStage, DiagnosticEventName> = {
        ROUTING: 'commercial_routing_rendered',
        INTEREST: 'commercial_pathway_clicked',
        INTENT: 'commercial_intent_engaged',
        CONVERSION: 'commercial_conversion_completed'
    };

    trackDiagnosticEvent(
        eventNameMap[stage],
        attribution.toolId || attribution.conceptSlug || 'concept-graph',
        {
            funnelStage: stage,
            ...attribution
        }
    );
}

// Backward-compatible helper for immediate pathway clicks and inquiries
export function trackCommercialJourney(
    action: 'pathway_clicked' | 'advisory_inquiry' | 'product_demo_requested',
    attribution: Omit<CommercialAttributionProperties, 'funnelStage'>
) {
    const stage: CommercialFunnelStage = action === 'pathway_clicked' ? 'INTEREST' : 'INTENT';
    trackCommercialFunnelStep(stage, attribution);
}


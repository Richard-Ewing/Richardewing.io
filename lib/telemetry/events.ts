import posthog from 'posthog-js';

export type DiagnosticEventName = 'diagnostic_started' | 'diagnostic_completed' | 'pdf_exported' | 'exogram_clicked';

export interface TelemetryEvent {
    eventName: DiagnosticEventName;
    toolId: string;
    properties?: Record<string, any>;
    timestamp: string;
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

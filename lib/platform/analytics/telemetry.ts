'use client';

/**
 * AI Economics Commercial Knowledge Platform - Baseline Telemetry Dispatcher
 * Subsystem: /lib/platform/analytics
 */

export interface TelemetryEvent {
  action: string;
  category: 'engagement' | 'assessment' | 'commercial' | 'ecosystem' | 'navigation';
  label?: string;
  value?: number;
  metadata?: Record<string, any>;
}

/**
 * Dispatch an analytics event safely across PostHog, Google Analytics, and custom trackers.
 */
export function trackEvent({ action, category, label, value, metadata }: TelemetryEvent) {
  if (typeof window === 'undefined') return;

  try {
    // 1. Google Analytics / gtag
    if ((window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...metadata,
      });
    }

    // 2. PostHog
    if ((window as any).posthog) {
      (window as any).posthog.capture(action, {
        category,
        label,
        value,
        ...metadata,
      });
    }

    // 3. Plausible
    if ((window as any).plausible) {
      (window as any).plausible(action, {
        props: {
          category,
          label,
          value,
          ...metadata,
        },
      });
    }

    // Debug logging in non-production
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Telemetry] ${category}:${action}`, { label, value, metadata });
    }
  } catch (err) {
    console.warn('[Telemetry Error]', err);
  }
}

/**
 * Specialized event dispatchers for core funnel milestones.
 */
export function trackAssessmentStart(source: string = 'direct') {
  trackEvent({
    action: 'assessment_start',
    category: 'assessment',
    label: source,
  });
}

export function trackAssessmentComplete(score: number, dimensionScores: Record<string, number>) {
  trackEvent({
    action: 'assessment_complete',
    category: 'assessment',
    label: `score_${score}`,
    value: score,
    metadata: { dimensionScores },
  });
}

export function trackDiagnosticBookingClick(productId: string, source: string) {
  trackEvent({
    action: 'diagnostic_booking_click',
    category: 'commercial',
    label: productId,
    metadata: { source },
  });
}

export function trackEcosystemBridgeClick(destination: 'exogram' | 'careerwin', sourceLocation: string) {
  trackEvent({
    action: 'ecosystem_bridge_click',
    category: 'ecosystem',
    label: destination,
    metadata: { sourceLocation },
  });
}

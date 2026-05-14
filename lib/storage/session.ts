export interface DiagnosticSessionRecord {
    timestamp: number;
    data: any;
}

export function saveDiagnosticSession(key: string, data: any) {
    if (typeof window !== 'undefined') {
        try {
            // Fetch existing history
            const existingRaw = localStorage.getItem(`diag_session_history_${key}`);
            const history: DiagnosticSessionRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
            
            // Append new record
            history.push({
                timestamp: Date.now(),
                data: data
            });

            // Keep the latest 10 sessions to prevent storage bloat
            if (history.length > 10) {
                history.shift();
            }

            localStorage.setItem(`diag_session_history_${key}`, JSON.stringify(history));
            
            // Still save the single latest session for backward compatibility
            localStorage.setItem(`diag_session_${key}`, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save session state', e);
        }
    }
}

export function loadDiagnosticSession(key: string) {
    if (typeof window !== 'undefined') {
        try {
            const data = localStorage.getItem(`diag_session_${key}`);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Failed to load session state', e);
            return null;
        }
    }
    return null;
}

export function loadDiagnosticHistory(key: string): DiagnosticSessionRecord[] {
    if (typeof window !== 'undefined') {
        try {
            const data = localStorage.getItem(`diag_session_history_${key}`);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Failed to load session history', e);
            return [];
        }
    }
    return [];
}

export function clearDiagnosticSession(key: string) {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(`diag_session_${key}`);
        localStorage.removeItem(`diag_session_history_${key}`);
    }
}

import { DiagnosticResult } from '../../types/diagnostics';

const UNIFIED_HISTORY_KEY = 'unified_diagnostic_history';

export function saveUnifiedDiagnosticResult(result: DiagnosticResult) {
    if (typeof window !== 'undefined') {
        try {
            const existingRaw = localStorage.getItem(UNIFIED_HISTORY_KEY);
            const history: DiagnosticResult[] = existingRaw ? JSON.parse(existingRaw) : [];
            
            history.push(result);

            // Keep the latest 50 to prevent bloat
            if (history.length > 50) {
                history.shift();
            }

            localStorage.setItem(UNIFIED_HISTORY_KEY, JSON.stringify(history));
        } catch (e) {
            console.error('Failed to save unified diagnostic result', e);
        }
    }
}

export function loadUnifiedDiagnosticHistory(): DiagnosticResult[] {
    if (typeof window !== 'undefined') {
        try {
            const data = localStorage.getItem(UNIFIED_HISTORY_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Failed to load unified diagnostic history', e);
            return [];
        }
    }
    return [];
}


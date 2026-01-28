import fs from 'fs';
import path from 'path';
import os from 'os';
import { SCENARIOS, Role } from './question-bank';

const DB_PATH = path.join(os.tmpdir(), 'hiring_db.json');

// Ensure data directory exists (tmp always exists, but good practice if nested)
if (!fs.existsSync(path.dirname(DB_PATH))) {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
}

interface DB {
    sessions: Record<string, Session>;
    scores: Score[];
    questions_served: QuestionLog[];
}

interface Session {
    session_id: string;
    candidate_id: string;
    interviewer_id: string;
    role: Role;
    current_phase: string;
    start_time: number;
    phases: string[]; // NEW: Store specific phases for this session
    level?: number; // NEW: Store caliber level
    questions_map: Record<string, string>;
    finalized: boolean;
}

interface Score {
    session_id: string;
    phase: string;
    dimension: string;
    score: number;
    rationale: string;
    timestamp: number;
    time_taken: number;
}

interface QuestionLog {
    session_id: string;
    phase: string;
    question_id: string;
    prompt: string;
    timestamp: number;
}

function readDB(): DB {
    if (!fs.existsSync(DB_PATH)) {
        return { sessions: {}, scores: [], questions_served: [] };
    }
    return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
}

function writeDB(data: DB) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

export const HiringStore = {
    createSession: (sessionId: string, candidateId: string, interviewerId: string, role: Role, phases: string[], questionsMap: Record<string, string>, level?: number) => {
        const db = readDB();
        db.sessions[sessionId] = {
            session_id: sessionId,
            candidate_id: candidateId,
            interviewer_id: interviewerId,
            role,
            current_phase: phases[0],
            phases, // Store dynamic phases
            start_time: Date.now(),
            finalized: false,
            questions_map: questionsMap,
            // @ts-ignore - straightforward extension
            level: level || 5
        };
        writeDB(db);
        return db.sessions[sessionId];
    },

    getSession: (sessionId: string) => {
        const db = readDB();
        return db.sessions[sessionId];
    },

    advancePhase: (sessionId: string) => {
        const db = readDB();
        const session = db.sessions[sessionId];
        if (!session) throw new Error("Session not found");
        if (session.finalized) return "FINALIZED";

        // Use stored phases if available, else fallback (legacy support)
        const phases = session.phases || SCENARIOS[session.role].phases;
        const currentIdx = phases.indexOf(session.current_phase);

        if (currentIdx === phases.length - 1) {
            session.finalized = true;
            writeDB(db);
            return "FINALIZED";
        }

        session.current_phase = phases[currentIdx + 1];
        writeDB(db);
        return session.current_phase;
    },
    // ...

    logScore: (sessionId: string, phase: string, dimension: string, score: number, rationale: string) => {
        const db = readDB();
        const session = db.sessions[sessionId];
        if (session?.finalized) throw new Error("Session locked");

        // Check duplicate - UPSERT behavior (Overwrite if exists)
        const existingIdx = db.scores.findIndex(s => s.session_id === sessionId && s.phase === phase && s.dimension === dimension);

        const newScore: Score = {
            session_id: sessionId,
            phase,
            dimension,
            score,
            rationale,
            timestamp: Date.now(),
            time_taken: 0
        };

        if (existingIdx >= 0) {
            db.scores[existingIdx] = newScore;
        } else {
            db.scores.push(newScore);
        }

        writeDB(db);
    },

    getScores: (sessionId: string) => {
        const db = readDB();
        return db.scores.filter(s => s.session_id === sessionId);
    },

    analyzeSession: (sessionId: string) => {
        const db = readDB();
        const scores = db.scores.filter(s => s.session_id === sessionId);
        const session = db.sessions[sessionId];

        let total = 0;
        scores.forEach(s => {
            total += s.score;
        });

        // Limit Max Score assumption: 5 questions * 7 = 35 points

        let verdict = "";
        let rationale = "";
        let decision = "NO HIRE";
        const roleTitle = session?.role === 'engineering' ? 'ENGINEER' : 'PRODUCT MANAGER';
        const isEng = session?.role === 'engineering';

        // Calibration Bands (Extended for L3-L8)
        if (total < 20) {
            verdict = `L3: JUNIOR ${roleTitle}`;
            if (isEng) {
                rationale = "Focuses on execution and syntax. Lacks broader system awareness. \"Code Monkey\" mode.";
            } else {
                rationale = "Focuses on rote feature lists. Lacks strategic depth or economic awareness.";
            }
            decision = "NO HIRE";
        } else if (total < 25) {
            verdict = `L4: ${roleTitle}`;
            if (isEng) {
                rationale = "Competent execution but trade-offs are limited to local scope. Misses second-order effects.";
            } else {
                rationale = "Can manage a backlog but lacks capital governance or rigorous prioritization frameworks.";
            }
            decision = session?.role === 'engineering' ? "NO HIRE" : "NO HIRE"; // Strict bar
        } else if (total < 28) {
            verdict = `L5: SENIOR ${roleTitle}`;
            if (isEng) {
                rationale = "Demonstrates system ownership and understands maintenance liability. Good default hire.";
            } else {
                rationale = "Understand Unit Economics and can prioritize based on ROI. Solid operator.";
            }
            decision = "HIRE";
        } else if (total < 32) {
            verdict = `L6: STAFF ${roleTitle}`; // PM equivalent: Group PM
            if (isEng) {
                rationale = "Exceptional capital stewardship. Prioritizes ROI, Leverage, and Capital Efficiency.";
            } else {
                rationale = "Drives portfolio-level strategy. Aligns engineering efforts with Enterprise Value.";
            }
            decision = "HIRE";
        } else {
            // High score > 32
            verdict = `L7/L8: PRINCIPAL ${roleTitle}`; // PM equivalent: Director/VP
            if (isEng) {
                rationale = "Visionary technical governance. Realigns entire organizations towards solvency and leverage.";
            } else {
                rationale = "Executive-grade strategic foresight. defines the market and capital allocation strategy.";
            }
            decision = "HIRE";
        }

        return {
            total,
            verdict,
            decision,
            rationale,
            scores
        };
    }
};

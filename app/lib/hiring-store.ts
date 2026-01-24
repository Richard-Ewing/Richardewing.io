import fs from 'fs';
import path from 'path';
import { SCENARIOS, Role } from './question-bank';

const DB_PATH = path.join(process.cwd(), 'data', 'hiring_db.json');

// Ensure data directory exists
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
    createSession: (sessionId: string, candidateId: string, interviewerId: string, role: Role) => {
        const db = readDB();
        db.sessions[sessionId] = {
            session_id: sessionId,
            candidate_id: candidateId,
            interviewer_id: interviewerId,
            role,
            current_phase: SCENARIOS[role].phases[0],
            start_time: Date.now(),
            finalized: false
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

        const phases = SCENARIOS[session.role].phases;
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

    logScore: (sessionId: string, phase: string, dimension: string, score: number, rationale: string) => {
        const db = readDB();
        const session = db.sessions[sessionId];
        if (session?.finalized) throw new Error("Session locked");

        // Check duplicate
        const exists = db.scores.find(s => s.session_id === sessionId && s.phase === phase && s.dimension === dimension);
        if (exists) throw new Error("Score already logged for this phase/dimension");

        db.scores.push({
            session_id: sessionId,
            phase,
            dimension,
            score,
            rationale,
            timestamp: Date.now(),
            time_taken: 0 // Simplification for now
        });
        writeDB(db);
    },

    getScores: (sessionId: string) => {
        const db = readDB();
        return db.scores.filter(s => s.session_id === sessionId);
    },

    analyzeSession: (sessionId: string) => {
        const db = readDB();
        const scores = db.scores.filter(s => s.session_id === sessionId);

        let total = 0;
        scores.forEach(s => total += s.score);

        // Max score is typically 12 (4 dimensions * 3 points). 
        // Note: Python script logic sums all logged scores. We assume one score per dimension per session ideally, 
        // but the python logic allows summing across phases if dimensions repeat.
        // We will adapt the Python verdict logic:
        // <= 4: Strong No Hire
        // <= 7: No Hire
        // <= 10: Hire
        // > 10: Strong Hire

        let verdict = "";
        let rationale = "";

        if (total <= 4) {
            verdict = "Strong No Hire";
            rationale = "Candidate optimizes for narrative/syntax over judgment. High capital risk.";
        } else if (total <= 7) {
            verdict = "No Hire";
            rationale = "Identifies issues but avoids ownership and hard trade-offs.";
        } else if (total <= 10) {
            verdict = "Hire";
            rationale = "Demonstrates sound judgment. Can act as a capital steward.";
        } else {
            verdict = "Strong Hire";
            rationale = "Exceptional judgment. Prioritizes constraints and economic efficiency.";
        }

        return {
            total,
            verdict,
            rationale,
            scores
        };
    }
};

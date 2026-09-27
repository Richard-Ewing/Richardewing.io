'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ShieldCheck, 
  ShieldAlert, 
  Database, 
  Cpu, 
  Zap, 
  Activity, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  Server,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface AgentNode {
  id: string;
  agentName: string;
  status: 'pending' | 'inspecting' | 'queued' | 'committed' | 'tripped' | 'rejected';
  nonce: string;
  isRetry: boolean;
  cost: number;
}

export default function AirTrafficControlVisualizer() {
  // Configuration State
  const [concurrency, setConcurrency] = useState<number>(6);
  const [failureRate, setFailureRate] = useState<number>(20); // percent
  const [governanceMode, setGovernanceMode] = useState<'governed' | 'ungoverned'>('governed');
  const [isRunning, setIsRunning] = useState<boolean>(true);

  // Simulation Telemetry
  const [tokensBurned, setTokensBurned] = useState<number>(1420);
  const [costAccumulated, setCostAccumulated] = useState<number>(0.0426);
  const [phantomRowsPrevented, setPhantomRowsPrevented] = useState<number>(0);
  const [circuitBreakerTrips, setCircuitBreakerTrips] = useState<number>(0);
  const [poolUtilization, setPoolUtilization] = useState<number>(22);
  const [activeQueueLength, setActiveQueueLength] = useState<number>(0);
  const [recentEvents, setRecentEvents] = useState<Array<{ id: string; time: string; text: string; type: 'success' | 'warning' | 'danger' }>>([]);

  const tickRef = useRef<number | null>(null);

  // Simulation Loop
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      // 1. Calculate dynamic values based on governance mode
      if (governanceMode === 'ungoverned') {
        // Ungoverned: Concurrency drives exponential connection exhaustion and runaway retries
        const newPool = Math.min(100, Math.round(concurrency * 7.5 + (failureRate * 0.8)));
        setPoolUtilization(newPool);

        // Runaway token cost: each failure retries 4-6 times without circuit breakers
        const tokenIncrement = Math.round(concurrency * 850 * (1 + (failureRate / 100) * 3));
        setTokensBurned(prev => prev + tokenIncrement);
        setCostAccumulated(prev => prev + (tokenIncrement / 1000) * 0.015);

        // Ungoverned queue overflows
        setActiveQueueLength(Math.round(concurrency * 1.8));

        // Add event
        if (Math.random() < 0.4) {
          const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
          setRecentEvents(prev => [
            {
              id: Math.random().toString(),
              time: timestamp,
              text: `[ALERT] DB connection pool at ${newPool}%. Unbounded retry loop triggered for Agent-${Math.floor(Math.random() * concurrency) + 1}`,
              type: newPool > 80 ? 'danger' : 'warning'
            },
            ...prev.slice(0, 5)
          ]);
        }
      } else {
        // Governed: ATC locks queue mutations cleanly, circuit breaker caps pool usage
        const newPool = Math.min(38, Math.round(14 + (concurrency * 1.5)));
        setPoolUtilization(newPool);

        // Token burn capped: circuit breaker stops repeated retries
        const tokenIncrement = Math.round(concurrency * 210);
        setTokensBurned(prev => prev + tokenIncrement);
        setCostAccumulated(prev => prev + (tokenIncrement / 1000) * 0.003);

        // ATC serializes queue: strictly 1-3 active
        setActiveQueueLength(Math.min(3, Math.round(concurrency * 0.3)));

        // Increment prevented duplicates
        if (Math.random() < 0.35) {
          setPhantomRowsPrevented(prev => prev + 1);
          const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
          setRecentEvents(prev => [
            {
              id: Math.random().toString(),
              time: timestamp,
              text: `[ATC PROXY] Duplicate nonce intercepted. Phantom write blocked on resource #order_ref_${Math.floor(Math.random() * 800) + 100}`,
              type: 'success'
            },
            ...prev.slice(0, 5)
          ]);
        }

        // Circuit breaker trip if failure rate is high
        if (failureRate > 25 && Math.random() < 0.25) {
          setCircuitBreakerTrips(prev => prev + 1);
        }
      }
    }, 1400);

    return () => clearInterval(interval);
  }, [isRunning, concurrency, failureRate, governanceMode]);

  const handleReset = () => {
    setTokensBurned(1420);
    setCostAccumulated(0.0426);
    setPhantomRowsPrevented(0);
    setCircuitBreakerTrips(0);
    setPoolUtilization(governanceMode === 'governed' ? 22 : 65);
    setActiveQueueLength(0);
    setRecentEvents([]);
  };

  return (
    <div className="w-full bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-slate-800 bg-slate-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            Air Traffic Control (ATC) Interactive Simulator
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-grotesk">
            Agent Concurrency &amp; Circuit Breaker Engine
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Simulate how unmonitored background agents saturate database connection pools and trigger exponential retry bills versus a deterministic 4-Pillar Governance Proxy.
          </p>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
              isRunning ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
            }`}
          >
            {isRunning ? <><Pause className="w-3.5 h-3.5" /> Pause</> : <><Play className="w-3.5 h-3.5" /> Run</>}
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition"
            title="Reset Telemetry"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Control Sliders & Mode Toggle */}
      <div className="p-6 sm:p-8 bg-slate-900/40 border-b border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Governance Mode */}
        <div className="flex flex-col justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2">
            Architecture Governance Layer
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setGovernanceMode('governed')}
              className={`px-3 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                governanceMode === 'governed'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Sovereign Proxy
            </button>
            <button
              onClick={() => setGovernanceMode('ungoverned')}
              className={`px-3 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                governanceMode === 'ungoverned'
                  ? 'bg-rose-500 text-slate-950 font-bold shadow-md shadow-rose-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              Ungoverned DB
            </button>
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-2">
            {governanceMode === 'governed' 
              ? '4 Pillars active: Nonce checks, schema verification, ATC queue, circuit breaker.' 
              : 'Direct connection string provided to agents: No serial locks, no backoff caps.'}
          </div>
        </div>

        {/* Concurrency Slider */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Background Agent Concurrency
            </span>
            <span className="text-sm font-mono font-bold text-cyan-400">
              {concurrency} Agents
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={concurrency}
            onChange={(e) => setConcurrency(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
            <span>1 (Isolated)</span>
            <span>10 (Swarm)</span>
            <span>20 (Stress Test)</span>
          </div>
        </div>

        {/* Error Rate Slider */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
              Schema Validation Failure Rate
            </span>
            <span className="text-sm font-mono font-bold text-rose-400">
              {failureRate}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            step="5"
            value={failureRate}
            onChange={(e) => setFailureRate(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
            <span>0% (Deterministic)</span>
            <span>25% (Standard Drift)</span>
            <span>50% (Model Breakage)</span>
          </div>
        </div>

      </div>

      {/* Live Interactive Telemetry HUD */}
      <div className="p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-950">
        
        {/* Token Cost Burn Rate */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
            Accumulated Token Spend
          </div>
          <div className={`text-2xl font-mono font-bold ${governanceMode === 'ungoverned' ? 'text-rose-400' : 'text-cyan-400'}`}>
            ${costAccumulated.toFixed(3)}
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-1">
            {tokensBurned.toLocaleString()} tokens burned
          </div>
        </div>

        {/* Database Connection Pool Saturation */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
            DB Pool Saturation
          </div>
          <div className={`text-2xl font-mono font-bold ${poolUtilization > 80 ? 'text-rose-500 animate-pulse' : poolUtilization > 50 ? 'text-amber-400' : 'text-emerald-400'}`}>
            {poolUtilization}%
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${poolUtilization > 80 ? 'bg-rose-500' : poolUtilization > 50 ? 'bg-amber-400' : 'bg-emerald-400'}`} 
              style={{ width: `${poolUtilization}%` }}
            />
          </div>
        </div>

        {/* Phantom Mutations Prevented */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
            Phantom Writes Blocked
          </div>
          <div className="text-2xl font-mono font-bold text-emerald-400">
            {governanceMode === 'governed' ? phantomRowsPrevented : '0 (Exposed)'}
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-1">
            {governanceMode === 'governed' ? 'Nonce deduplication active' : 'Direct DB writes leaking'}
          </div>
        </div>

        {/* Circuit Breaker Status */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
            Circuit Breaker State
          </div>
          <div className="text-sm font-mono font-bold flex items-center gap-1.5 mt-1">
            {governanceMode === 'governed' ? (
              failureRate > 25 ? (
                <span className="text-amber-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  QUARANTINED ({circuitBreakerTrips} Trips)
                </span>
              ) : (
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  CLOSED (Nominal)
                </span>
              )
            ) : (
              <span className="text-rose-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                DISABLED (Unprotected)
              </span>
            )}
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-1">
            {governanceMode === 'governed' ? 'Trip threshold: 3 failures' : 'Runaway loop risk: CRITICAL'}
          </div>
        </div>

      </div>

      {/* Visual Canvas: Architecture Pipeline */}
      <div className="p-6 sm:p-8 bg-slate-900/80 border-t border-slate-800">
        <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
          Live Runtime Interception Pipeline
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* Node 1: Agent Swarm */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-300">1. Agent Swarm</span>
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="space-y-1.5 my-2">
              {Array.from({ length: Math.min(4, concurrency) }).map((_, i) => (
                <div key={i} className="flex items-center justify-between text-[11px] font-mono p-1.5 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-300">Agent-{i + 1}</span>
                  <span className="text-cyan-400 font-bold animate-pulse">&bull; active</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              {concurrency} background workers dispatching mutations
            </div>
          </div>

          {/* Node 2: Interceptor & Nonce Check */}
          <div className={`p-4 rounded-2xl bg-slate-950 border transition-all ${
            governanceMode === 'governed' ? 'border-cyan-500/50 shadow-md shadow-cyan-500/10' : 'border-rose-500/50 opacity-40'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-300">2. Nonce &amp; Invariant Check</span>
              <Lock className={`w-4 h-4 ${governanceMode === 'governed' ? 'text-cyan-400' : 'text-rose-500'}`} />
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono space-y-1.5 my-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Nonce Dual-Check:</span>
                <span className={governanceMode === 'governed' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                  {governanceMode === 'governed' ? 'ENFORCED' : 'BYPASSED'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Schema Invariants:</span>
                <span className={governanceMode === 'governed' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                  {governanceMode === 'governed' ? 'STRICT' : 'NONE'}
                </span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              {governanceMode === 'governed' ? 'Blocks duplicate & malformed payload writes' : 'Rogue state mutations passed raw to DB'}
            </div>
          </div>

          {/* Node 3: ATC Serialization Queue */}
          <div className={`p-4 rounded-2xl bg-slate-950 border transition-all ${
            governanceMode === 'governed' ? 'border-cyan-500/50 shadow-md shadow-cyan-500/10' : 'border-rose-500/50 opacity-40'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-300">3. ATC Concurrency Queue</span>
              <Server className={`w-4 h-4 ${governanceMode === 'governed' ? 'text-cyan-400' : 'text-rose-500'}`} />
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono space-y-1.5 my-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Queue Depth:</span>
                <span className="text-amber-400 font-bold">{activeQueueLength} locked</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Serial Execution:</span>
                <span className={governanceMode === 'governed' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                  {governanceMode === 'governed' ? '1 MUT/RESOURCE' : 'RACE CONDITION'}
                </span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              {governanceMode === 'governed' ? 'Prevents parallel write collision on shared records' : 'Parallel writes cause database lock contention'}
            </div>
          </div>

          {/* Node 4: Persistence Decoupling */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-slate-300">4. Persistence Authority</span>
              <Database className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono space-y-1.5 my-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Agent DB Credential:</span>
                <span className={governanceMode === 'governed' ? 'text-cyan-400 font-bold' : 'text-rose-400 font-bold'}>
                  {governanceMode === 'governed' ? 'READ-ONLY REPLICA' : 'PRIMARY READ/WRITE'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Staging Queue:</span>
                <span className={governanceMode === 'governed' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                  {governanceMode === 'governed' ? 'APPEND-ONLY' : 'DIRECT WRITE'}
                </span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              {governanceMode === 'governed' ? 'Authority service verifies invariants before master commit' : 'Direct DB mutation bypasses all business logic'}
            </div>
          </div>

        </div>

        {/* Live Event Stream */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 flex items-center justify-between">
            <span>Real-Time Audit Telemetry Stream</span>
            <span className="text-[9px] text-cyan-400">Live Tick: 1.4s</span>
          </div>
          <div className="space-y-1 text-xs font-mono">
            {recentEvents.length === 0 ? (
              <div className="text-slate-500 py-1">Telemetry stream listening...</div>
            ) : (
              recentEvents.map(evt => (
                <div key={evt.id} className="flex items-start gap-2 py-0.5">
                  <span className="text-slate-500 shrink-0">[{evt.time}]</span>
                  <span className={
                    evt.type === 'danger' ? 'text-rose-400' :
                    evt.type === 'warning' ? 'text-amber-400' :
                    'text-emerald-400'
                  }>
                    {evt.text}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Remediation Callout */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400">
            Looking to deploy this exact proxy layer in your stack?
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/vault/curriculum/tracks/track-15"
              className="font-mono text-cyan-400 hover:text-cyan-300 font-bold underline"
            >
              Track 15: Multi-Agent Orchestration &rarr;
            </Link>
            <Link
              href="/vault/blueprints"
              className="px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition"
            >
              Copy Proxy Scaffold
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

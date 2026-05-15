"use client";

import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { DiagnosticResult } from '../../types/diagnostics';

interface LongitudinalTrendChartProps {
    history: DiagnosticResult[];
    title: string;
    description?: string;
    isHigherBetter?: boolean;
}

export function LongitudinalTrendChart({ history, title, description, isHigherBetter = false }: LongitudinalTrendChartProps) {
    if (!history || history.length < 2) {
        return (
            <div className="w-full h-48 border border-zinc-200 border-dashed rounded-xl flex items-center justify-center bg-zinc-50">
                <p className="text-zinc-800 font-medium text-sm text-center px-4">
                    Not enough historical data to generate trend intelligence. <br/> Complete another assessment to establish a baseline.
                </p>
            </div>
        );
    }

    const data = history.map(h => ({
        date: new Date(h.timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        score: h.score,
        fullDate: new Date(h.timestamp).toLocaleString()
    }));

    return (
        <div className="w-full p-6 border border-zinc-300 rounded-xl bg-white shadow-sm">
            <div className="mb-6">
                <h3 className="text-lg font-grotesk font-bold text-zinc-900">{title}</h3>
                {description && <p className="text-sm text-zinc-900 font-medium mt-1">{description}</p>}
            </div>
            
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis 
                            dataKey="date" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 12, fill: '#6B7280' }} 
                            dy={10} 
                        />
                        <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 12, fill: '#6B7280' }} 
                            domain={['dataMin - 10', 'dataMax + 10']}
                        />
                        <Tooltip 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            labelStyle={{ color: '#6B7280', fontSize: '12px', marginBottom: '4px' }}
                            itemStyle={{ color: '#111827', fontSize: '14px', fontWeight: 'bold' }}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="score" 
                            stroke="#06b6d4" 
                            strokeWidth={3} 
                            dot={{ r: 4, strokeWidth: 2, fill: '#fff', stroke: '#06b6d4' }} 
                            activeDot={{ r: 6, fill: '#06b6d4', stroke: '#cffafe', strokeWidth: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

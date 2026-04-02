import { ShieldAlert, Target, FileSpreadsheet, Lock } from 'lucide-react';

export type DefaultPersona = 'CISO' | 'VP Eng' | 'CFO' | 'Legal';
export type Persona = DefaultPersona;

export type PersonaConfig<T extends string = string> = { id: T; label: string; icon: React.ComponentType<any> };

export const DEFAULT_PERSONAS: PersonaConfig<DefaultPersona>[] = [
    { id: 'CISO', label: 'CISO / SecOps', icon: ShieldAlert },
    { id: 'VP Eng', label: 'VP Engineering', icon: Target },
    { id: 'CFO', label: 'CFO / Finance', icon: FileSpreadsheet },
    { id: 'Legal', label: 'General Counsel', icon: Lock },
];

export function PersonaSwitcher<T extends string = DefaultPersona>({ 
    activePersona, 
    onChange, 
    personas = DEFAULT_PERSONAS as unknown as PersonaConfig<T>[] 
}: { 
    activePersona: T, 
    onChange: (p: T) => void,
    personas?: PersonaConfig<T>[]
}) {
    return (
        <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-black/40 border border-white/5 rounded-2xl w-full">
            {personas.map(p => {
                const isActive = p.id === activePersona;
                const Icon = p.icon;
                return (
                    <button
                        key={p.id}
                        onClick={() => onChange(p.id)}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-[10px] sm:text-xs font-mono uppercase tracking-widest transition-all flex-1 justify-center whitespace-nowrap
                            ${isActive ? 'bg-zinc-800 text-white font-bold border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border border-transparent'}`}
                    >
                        <Icon size={14} className={isActive ? 'text-amber-400' : ''} />
                        <span className="hidden sm:inline">{p.label}</span>
                        <span className="sm:hidden">{p.id}</span>
                    </button>
                );
            })}
        </div>
    );
}

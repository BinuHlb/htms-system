import React from 'react';

export interface DirectoryPerson {
    name: string;
    role: string;
    dept: string;
    active: boolean;
    me?: boolean;
    avatarId?: number;
}

interface CompanyDirectoryProps {
    people: DirectoryPerson[];
    onPersonClick?: (person: DirectoryPerson) => void;
    onViewAllClick?: () => void;
}

const CompanyDirectory: React.FC<CompanyDirectoryProps> = ({
    people,
    onPersonClick,
    onViewAllClick,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl flex flex-col h-[calc(100vh-200px)] sticky top-24 overflow-hidden shadow-sm border border-slate-50 dark:border-slate-800">
            <div className="p-8 pb-4">
                <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-6">Company Directory</h3>
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-lg">search</span>
                    <input
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl pl-10 py-3 text-sm font-bold text-slate-900 dark:text-white focus:ring-primary/20"
                        placeholder="Search by name, role..."
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4 space-y-2">
                {people.map((person, i) => (
                    <div
                        key={i}
                        onClick={() => onPersonClick?.(person)}
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer group 
                            ${person.me ? 'bg-primary/5 dark:bg-primary/10 border border-primary/20' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}
                        `}
                    >
                        <div
                            className="size-12 rounded-full bg-slate-200 dark:bg-slate-800 bg-center bg-cover border-2 border-white dark:border-slate-700"
                            style={{ backgroundImage: `url('https://picsum.photos/id/${person.avatarId || (200 + i)}/100/100')` }}
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <p className="text-sm font-black text-slate-900 dark:text-white truncate">{person.name}</p>
                                {person.me && <span className="text-[8px] bg-primary text-white px-1.5 py-0.5 rounded-full font-black">YOU</span>}
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 truncate uppercase tracking-tighter">{person.role} • {person.dept}</p>
                        </div>
                        <div className={`size-2 rounded-full ${person.active ? 'bg-green-500 animate-pulse' : 'bg-slate-300 dark:bg-slate-700'}`} />
                    </div>
                ))}
            </div>
            <div className="p-6 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-50 dark:border-slate-800 text-center">
                <button
                    onClick={onViewAllClick}
                    className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline"
                >
                    View All {people.length > 20 ? people.length : '142'} Employees
                </button>
            </div>
        </div>
    );
};

export default CompanyDirectory;

import React from 'react';

export interface SelectedEmployee {
    name: string;
    role: string;
    id: string;
    avatar: string;
    status: string;
    balance: string;
}

interface EmployeeContextSelectorProps {
    employee: SelectedEmployee;
    onSearchChange?: (val: string) => void;
    onDeptChange?: (val: string) => void;
}

const EmployeeContextSelector: React.FC<EmployeeContextSelectorProps> = ({
    employee,
    onSearchChange,
    onDeptChange,
}) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-50">
            <div className="p-4 bg-slate-50/50 border-b border-slate-100">
                <h2 className="text-sm font-black text-slate-900 flex items-center gap-2 uppercase tracking-tight">
                    <span className="material-symbols-outlined text-primary font-bold">person_search</span>
                    1. Select Employee Context
                </h2>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Search Employee</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input
                                type="text"
                                defaultValue={employee.name}
                                onChange={(e) => onSearchChange?.(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-bold focus:ring-primary focus:ring-2"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Department</label>
                        <select
                            onChange={(e) => onDeptChange?.(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-bold focus:ring-primary focus:ring-2 appearance-none cursor-pointer"
                        >
                            <option>Engineering (All)</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                        </select>
                    </div>
                </div>

                <div className="mt-8 p-5 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in slide-in-from-top-2">
                    <div className="flex items-center gap-4">
                        <div
                            className="size-16 rounded-2xl border-2 border-primary bg-center bg-cover shadow-sm shrink-0"
                            style={{ backgroundImage: `url('${employee.avatar}')` }}
                        />
                        <div className="min-w-0">
                            <h3 className="text-lg font-black text-slate-900 truncate">{employee.name}</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mt-0.5 truncate">{employee.role} • {employee.id}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                                <span className="flex items-center gap-1.5 text-[9px] font-black text-green-500 uppercase">
                                    <span className="size-1.5 rounded-full bg-green-500 animate-pulse"></span> {employee.status}
                                </span>
                                <span className="text-[9px] font-black text-primary uppercase tracking-widest whitespace-nowrap">Leave Balance: {employee.balance}</span>
                            </div>
                        </div>
                    </div>
                    <button className="w-full md:w-auto text-primary border border-primary/20 hover:bg-primary/10 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm">Change</button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeContextSelector;

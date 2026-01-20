import React, { useState, useMemo } from 'react';
import { EmployeeData } from '../../data/employees';

interface EmployeeDirectoryViewProps {
    employees: EmployeeData[];
}

const EmployeeDirectoryView: React.FC<EmployeeDirectoryViewProps> = ({ employees }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredEmployees = useMemo(() => {
        return employees.filter(emp =>
            emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
            emp.dept.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [employees, searchQuery]);

    return (
        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-sm border border-slate-50 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                <div className="relative w-full md:w-96 group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-focus-within:text-primary transition-colors">search</span>
                    <input
                        type="text"
                        placeholder="Search by name, role or department..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                    />
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-primary/5 dark:hover:bg-primary/10 transition-all text-sm font-bold uppercase tracking-widest border border-transparent hover:border-primary/10">
                        <span className="material-symbols-outlined text-xl">filter_list</span>
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white hover:bg-primary/5 dark:hover:bg-primary/10 transition-all text-sm font-bold uppercase tracking-widest border border-transparent hover:border-primary/10">
                        <span className="material-symbols-outlined text-xl">grid_view</span>
                        Layout
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredEmployees.map(emp => (
                    <div
                        key={emp.id}
                        className="group relative bg-white dark:bg-slate-800/50 p-8 rounded-[32px] border border-slate-50 dark:border-slate-800 hover:border-primary/20 dark:hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 dark:hover:shadow-none transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                        {/* Decorative background circle */}
                        <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 blur-2xl" />

                        <div className="relative flex flex-col items-center text-center">
                            <div className="relative mb-6">
                                <div className="size-28 rounded-full bg-slate-100 dark:bg-slate-700 bg-center bg-cover border-4 border-white dark:border-slate-800 shadow-xl group-hover:scale-110 transition-transform duration-500 z-10 relative"
                                    style={{ backgroundImage: `url('https://picsum.photos/id/${emp.avatar}/200/200')` }}>
                                </div>
                                {/* Online Status Indicator */}
                                <div className="absolute bottom-1 right-1 size-6 bg-green-500 border-4 border-white dark:border-slate-800 rounded-full z-20 shadow-sm animate-pulse" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">{emp.name}</h3>
                            <p className="text-xs font-bold text-primary mt-2 uppercase tracking-widest">{emp.role}</p>
                            <p className="text-[12px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-[0.2em] mt-2 py-1 px-3 bg-slate-50 dark:bg-slate-900/50 rounded-full">{emp.dept}</p>

                            <div className="flex gap-3 mt-8 w-full">
                                <button className="flex-1 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-[12px] uppercase tracking-widest hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">Message</button>
                                <button className="flex-1 py-3 rounded-xl bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-[12px] uppercase tracking-widest hover:bg-slate-900 dark:hover:bg-slate-100 dark:hover:text-slate-900 hover:text-white hover:shadow-lg transition-all active:scale-95">Profile</button>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredEmployees.length === 0 && (
                    <div className="col-span-full py-20 flex flex-col items-center justify-center text-slate-300 dark:text-slate-700">
                        <span className="material-symbols-outlined text-6xl mb-4">search_off</span>
                        <p className="text-sm font-bold uppercase tracking-widest">No employees found matching your search</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployeeDirectoryView;

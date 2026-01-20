import React from 'react';
import EmployeeDirectoryView from '../employees/EmployeeDirectoryView';
import { employeesData } from '../../data/employees';

const DirectoryView: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm space-y-10 animate-in fade-in slide-in-from-right-4 duration-500 overflow-hidden">
            <div className="flex items-center gap-5">
                <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl">
                    <span className="material-symbols-outlined text-blue-500 dark:text-blue-400 text-3xl fill-1">person_search</span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Employee Directory</h3>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Universal search for all organization personnel.</p>
                </div>
            </div>
            <div className="border border-slate-50 dark:border-slate-800 rounded-[2rem] overflow-hidden">
                <EmployeeDirectoryView employees={employeesData} />
            </div>
        </div>
    );
};

export default DirectoryView;

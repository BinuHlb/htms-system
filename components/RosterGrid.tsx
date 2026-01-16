import React from 'react';

export interface RosterEmployee {
    id: string;
    name: string;
    avatar: string;
    dept: string;
    shifts: { [date: string]: string };
}

export interface ShiftDefinition {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    color: string;
}

interface RosterGridProps {
    dates: string[];
    employees: RosterEmployee[];
    shifts: ShiftDefinition[];
    onAddShift?: (empId: string, date: string) => void;
    onShiftClick?: (empId: string, date: string, shiftId: string) => void;
}

const RosterGrid: React.FC<RosterGridProps> = ({
    dates,
    employees,
    shifts,
    onAddShift,
    onShiftClick,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                            <th className="sticky left-0 z-10 bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 text-left border-b border-slate-100 dark:border-slate-700 min-w-[280px]">
                                <span className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Employee</span>
                            </th>
                            {dates.map(date => (
                                <th key={date} className="p-6 text-center border-b border-slate-100 dark:border-slate-700 min-w-[140px]">
                                    <div className="flex flex-col">
                                        <span className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{new Date(date).toLocaleDateString(undefined, { weekday: 'short' })}</span>
                                        <span className="text-sm font-bold text-slate-900 dark:text-white mt-1">{new Date(date).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp => (
                            <tr key={emp.id} className="group hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors">
                                <td className="sticky left-0 z-10 bg-white dark:bg-slate-900 group-hover:bg-slate-50/30 dark:group-hover:bg-slate-800/30 p-6 border-b border-slate-100 dark:border-slate-700 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="size-10 rounded-2xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm"
                                            style={{ backgroundImage: `url(${emp.avatar})` }}
                                        />
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-none">{emp.name}</h4>
                                            <span className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1.5 block">{emp.dept}</span>
                                        </div>
                                    </div>
                                </td>
                                {dates.map(date => {
                                    const shiftId = emp.shifts[date];
                                    const shift = shifts.find(s => s.id === shiftId);
                                    return (
                                        <td key={date} className="p-4 border-b border-slate-100 dark:border-slate-700">
                                            {shift ? (
                                                <div
                                                    onClick={() => onShiftClick?.(emp.id, date, shiftId)}
                                                    className={`p-3 rounded-2xl ${shift.color} dark:bg-opacity-20 dark:border-opacity-40 text-center transition-transform hover:scale-105 cursor-pointer shadow-sm`}
                                                >
                                                    <span className="text-[12px] font-bold uppercase tracking-widest block">{shift.name}</span>
                                                    <span className="text-[11px] font-bold opacity-80 block mt-1">{shift.startTime} - {shift.endTime}</span>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => onAddShift?.(emp.id, date)}
                                                    className="w-full h-14 rounded-2xl border-2 border-dashed border-slate-100 dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/40 hover:bg-primary/5 transition-all flex items-center justify-center text-slate-200 dark:text-slate-800 hover:text-primary dark:hover:text-primary"
                                                >
                                                    <span className="material-symbols-outlined">add</span>
                                                </button>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RosterGrid;

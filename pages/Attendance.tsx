
import React from 'react';

const Attendance: React.FC = () => {
    const employees = [
        { name: 'Robert Fox', role: 'Senior Developer', avatar: 'https://picsum.photos/id/110/40/40', shifts: ['D1', 'D1', 'D1', 'D1', 'A1', 'OFF', 'OFF'] },
        { name: 'Jane Cooper', role: 'Product Designer', avatar: 'https://picsum.photos/id/111/40/40', shifts: ['N1', 'N1', 'N1', 'OFF', 'OFF', 'D1', 'D1'] },
        { name: 'Liam Wilson', role: 'Frontend Lead', avatar: 'https://picsum.photos/id/112/40/40', shifts: ['D1', 'D1', 'OFF', 'OFF', 'A1', 'A1', 'A1'] },
    ];

    const stats = [
        { label: 'Total OT Hours', value: '128 hrs', trend: '+12%', color: 'text-emerald-500' },
        { label: 'Estimated Cost', value: '$3,450', trend: '-5%', color: 'text-rose-500' },
        { label: 'Late Arrivals', value: '24', trend: 'High', color: 'text-amber-500' },
        { label: 'Pending Corrections', value: '12', trend: 'Active', color: 'text-primary' },
    ];

    return (
        <div className="p-8 max-w-[1440px] mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2 text-slate-500 text-sm font-bold uppercase tracking-widest">
                        <span>HRMS</span>
                        <span className="text-slate-300">/</span>
                        <span className="text-primary">Time & Attendance</span>
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 font-display">Attendance & Scheduling</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm">
                        <span className="material-symbols-outlined text-lg">calendar_today</span>
                        Oct 01 - Oct 31, 2023
                    </button>
                    <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">add</span>
                        New Rotation
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                            <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.color} bg-slate-50 shadow-sm border border-slate-100`}>
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-50 p-1 rounded-lg border border-slate-200">
                            <button className="bg-white text-slate-900 text-xs font-black px-4 py-1.5 rounded shadow-sm">Week</button>
                            <button className="text-slate-400 text-xs font-bold px-4 py-1.5">Month</button>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1"><span className="size-2.5 rounded-sm bg-emerald-500"></span> Day</span>
                            <span className="flex items-center gap-1"><span className="size-2.5 rounded-sm bg-amber-500"></span> After</span>
                            <span className="flex items-center gap-1"><span className="size-2.5 rounded-sm bg-indigo-500"></span> Night</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50"><span className="material-symbols-outlined text-xl">filter_list</span></button>
                        <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50"><span className="material-symbols-outlined text-xl">download</span></button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="p-4 w-64 border-r border-slate-100 text-[10px] font-black uppercase text-slate-400 tracking-widest">Employee</th>
                                {['Mon 02', 'Tue 03', 'Wed 04', 'Thu 05', 'Fri 06', 'Sat 07', 'Sun 08'].map(day => (
                                    <th key={day} className="p-4 text-center border-r border-slate-100 last:border-0 min-w-[120px]">
                                        <div className="text-[10px] font-black text-slate-400 uppercase">{day.split(' ')[0]}</div>
                                        <div className="text-sm font-black text-slate-900">{day.split(' ')[1]} Oct</div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {employees.map((emp, i) => (
                                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4 border-r border-slate-100 sticky left-0 bg-white z-10 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.05)]">
                                        <div className="flex items-center gap-3">
                                            <div className="size-10 rounded-xl bg-slate-200 bg-center bg-cover shadow-sm border border-white" style={{ backgroundImage: `url(${emp.avatar})` }} />
                                            <div>
                                                <p className="text-sm font-bold text-slate-900">{emp.name}</p>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{emp.role}</p>
                                            </div>
                                        </div>
                                    </td>
                                    {emp.shifts.map((shift, j) => (
                                        <td key={j} className="p-3 border-r border-slate-50 last:border-0">
                                            {shift === 'OFF' ? (
                                                <div className="border border-dashed border-slate-200 rounded-lg p-3 text-center opacity-40">
                                                    <span className="text-[10px] font-black text-slate-400 uppercase">OFF</span>
                                                </div>
                                            ) : (
                                                <div className={`p-2.5 rounded-lg border flex flex-col items-center transition-transform hover:scale-105 cursor-pointer shadow-sm
                                                    ${shift.startsWith('D') ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 
                                                      shift.startsWith('A') ? 'bg-amber-50 border-amber-200 text-amber-700' : 
                                                      'bg-indigo-50 border-indigo-200 text-indigo-700'}
                                                `}>
                                                    <span className="text-[10px] font-black uppercase tracking-widest">{shift}</span>
                                                    <span className="text-[9px] font-bold opacity-70 mt-1 whitespace-nowrap">
                                                        {shift === 'D1' ? '09:00 - 18:00' : shift === 'A1' ? '14:00 - 23:00' : '22:00 - 07:00'}
                                                    </span>
                                                </div>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Attendance;

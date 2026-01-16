import React, { useState } from 'react';
import PageSubHeader from '../components/PageSubHeader';
import PageContent from '../components/PageContent';
import RosterGrid from '../components/RosterGrid';

const ATTENDANCE_TABS = [
    { id: 'my', label: 'My Attendance' },
    { id: 'scheduling', label: 'Shift Scheduling' }
] as const;

const Attendance: React.FC = () => {
    const [activeTab, setActiveTab] = useState<typeof ATTENDANCE_TABS[number]['id']>('my');

    const rosterDates = [
        '2024-07-08', '2024-07-09', '2024-07-10', '2024-07-11', '2024-07-12', '2024-07-13', '2024-07-14'
    ];

    const rosterShifts = [
        { id: 'M', name: 'Morning', startTime: '06:00', endTime: '14:00', color: 'bg-emerald-50 text-emerald-700 border border-emerald-100' },
        { id: 'A', name: 'Afternoon', startTime: '14:00', endTime: '22:00', color: 'bg-amber-50 text-amber-700 border border-amber-100' },
        { id: 'N', name: 'Night', startTime: '22:00', endTime: '06:00', color: 'bg-slate-800 text-slate-100 border border-slate-700' },
        { id: 'O', name: 'OFF', startTime: '-', endTime: '-', color: 'bg-rose-50 text-rose-700 border border-rose-100' },
    ];

    const rosterEmployees = [
        {
            id: '1', name: 'Alex Rivera', dept: 'Engineering', avatar: 'https://picsum.photos/id/191/100/100',
            shifts: { '2024-07-08': 'M', '2024-07-09': 'M', '2024-07-10': 'O', '2024-07-11': 'A', '2024-07-12': 'A' }
        },
        {
            id: '2', name: 'Sarah Chen', dept: 'Engineering', avatar: 'https://picsum.photos/id/180/100/100',
            shifts: { '2024-07-08': 'A', '2024-07-09': 'A', '2024-07-10': 'M', '2024-07-11': 'M', '2024-07-12': 'O' }
        }
    ];

    const MyAttendanceView = () => (
        <PageContent
            layout="wide"
            main={
                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Current Week Activity</h3>
                            <div className="flex bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl gap-2">
                                <button className="size-10 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-primary"><span className="material-symbols-outlined">chevron_left</span></button>
                                <span className="px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">July 08 - July 14</span>
                                <button className="size-10 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center text-primary"><span className="material-symbols-outlined">chevron_right</span></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-4">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                                <div key={day} className={`text-center p-4 rounded-3xl transition-all ${i === 2 ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-110' : 'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                                    <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${i === 2 ? 'text-primary-light' : 'text-slate-400 dark:text-slate-500'}`}>{day}</p>
                                    <p className="text-xl font-black dark:text-white">{8 + i}</p>
                                    <div className={`mt-3 size-1.5 rounded-full mx-auto ${i < 3 ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-slate-300 dark:bg-slate-700'}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="p-8 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center bg-slate-50/30 dark:bg-slate-800/30">
                            <h3 className="font-black text-slate-900 dark:text-white tracking-tight">Daily Breakdown</h3>
                            <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm">Export Logs</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 font-black uppercase text-[10px] tracking-widest border-b border-slate-50 dark:border-slate-800">
                                    <tr>
                                        <th className="px-8 py-4">Date</th>
                                        <th className="px-8 py-4">Clock In</th>
                                        <th className="px-8 py-4">Clock Out</th>
                                        <th className="px-8 py-4">Hours</th>
                                        <th className="px-8 py-4 text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                    {[
                                        { date: 'July 10, Wed', in: '08:55 AM', out: '05:30 PM', hrs: '8.5h', status: 'On Time', sColor: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10' },
                                        { date: 'July 09, Tue', in: '09:15 AM', out: '06:05 PM', hrs: '8.8h', status: 'Late In', sColor: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10' },
                                        { date: 'July 08, Mon', in: '08:50 AM', out: '05:45 PM', hrs: '8.9h', status: 'On Time', sColor: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10' },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                                            <td className="px-8 py-5 font-bold text-slate-900 dark:text-white">{row.date}</td>
                                            <td className="px-8 py-5 font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{row.in}</td>
                                            <td className="px-8 py-5 font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{row.out}</td>
                                            <td className="px-8 py-5 font-black text-slate-900 dark:text-white">{row.hrs}</td>
                                            <td className="px-8 py-5 text-center">
                                                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${row.sColor}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
            sidebar={
                <div className="space-y-8">
                    <div className="bg-primary rounded-[32px] p-8 text-white shadow-2xl shadow-primary/30 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 size-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-primary-light mb-2">Month Performance</h4>
                        <div className="flex items-end gap-3 mb-6">
                            <span className="text-5xl font-black">94%</span>
                            <span className="text-primary-light font-bold text-xs mb-1.5 uppercase tracking-widest">Attendance Rate</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs font-bold bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                <span className="opacity-70">Overtime Hours</span>
                                <span>12.5h</span>
                            </div>
                            <div className="flex justify-between items-center text-xs font-bold bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                                <span className="opacity-70">Late Comings</span>
                                <span>2 Days</span>
                            </div>
                        </div>
                        <button className="w-full py-4 mt-8 bg-white text-primary rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            Request Correction
                        </button>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                        <h4 className="font-black text-slate-900 dark:text-white mb-6 tracking-tight">Shift Info</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="size-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center"><span className="material-symbols-outlined">schedule</span></div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Global Shift</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Morning Rotation (08:00 - 17:00)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="size-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center"><span className="material-symbols-outlined">event_repeat</span></div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Schema Type</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Flexible 5/2 Hybrid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );

    const SchedulingView = () => (
        <PageContent layout="full">
            <div className="space-y-8 pb-32">
                <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-6 rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-6">
                        <div className="flex bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl">
                            {['Week 28', 'Week 29', 'Week 30'].map((w, i) => (
                                <button key={i} className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${i === 1 ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}>
                                    {w}
                                </button>
                            ))}
                        </div>
                        <div className="h-8 w-px bg-slate-100 dark:bg-slate-800"></div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Department:</span>
                            <select className="bg-transparent border-none text-sm font-bold text-slate-900 dark:text-white focus:ring-0 cursor-pointer">
                                <option className="dark:bg-slate-900">Engineering</option>
                                <option className="dark:bg-slate-900">Product Design</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-3 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">auto_fix</span> Auto-Generate
                        </button>
                        <button className="px-6 py-3 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                            Publish Roster
                        </button>
                    </div>
                </div>

                <RosterGrid
                    dates={rosterDates}
                    employees={rosterEmployees}
                    shifts={rosterShifts}
                    onAddShift={(e, d) => console.log('Add shift', e, d)}
                    onShiftClick={(e, d, s) => console.log('Edit shift', e, d, s)}
                />
            </div>
        </PageContent>
    );

    return (
        <div className="p-8 max-w-[1600px] mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PageSubHeader
                title="Attendance & Scheduling"
                subtitle="Manage employee shifts, week schemas, and department rotations."
                badge="Manager Portal"
                tabs={ATTENDANCE_TABS as any}
                activeTab={activeTab}
                onTabChange={(id) => setActiveTab(id as any)}
            />

            {activeTab === 'scheduling' ? <SchedulingView /> : <MyAttendanceView />}
        </div>
    );
};

export default Attendance;

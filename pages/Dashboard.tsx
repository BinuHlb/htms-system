
import React from 'react';

const Dashboard: React.FC = () => {
    const attendanceData = [
        { day: 'Mon', time: '08:52', status: 'On Time', color: 'text-green-500', bg: 'bg-slate-50' },
        { day: 'Tue', time: '09:05', status: 'Late (5m)', color: 'text-amber-500', bg: 'bg-slate-50' },
        { day: 'Wed', time: '08:45', status: 'Active', color: 'text-primary', bg: 'bg-primary/10', ring: 'ring-2 ring-primary' },
        { day: 'Thu', time: '--:--', status: 'Upcoming', color: 'text-slate-400', bg: 'bg-slate-50', opacity: 'opacity-50' },
        { day: 'Fri', time: '--:--', status: 'Upcoming', color: 'text-slate-400', bg: 'bg-slate-50', opacity: 'opacity-50' },
    ];

    const pendingApprovals = [
        { id: 1, name: 'Marcus Chen', role: 'Developer', type: 'Sick Leave', duration: '2 Days (Oct 24-25)', avatar: 'https://picsum.photos/id/101/40/40' },
        { id: 2, name: 'Sarah Jenkins', role: 'Designer', type: 'Expense Claim', duration: 'Travel Reimbursement', avatar: 'https://picsum.photos/id/102/40/40' },
    ];

    return (
        <div className="p-8 max-w-[1400px] mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight font-display text-slate-900">Dashboard Overview</h2>
                    <p className="text-slate-500 mt-1 font-medium">Welcome back, Alex. Here's what's happening today.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-white text-sm font-bold px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
                        <span className="material-symbols-outlined text-lg">receipt_long</span>
                        Latest Payslip
                    </button>
                    <button className="bg-white text-sm font-bold px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
                        <span className="material-symbols-outlined text-lg">lightbulb</span>
                        Submit Suggestion
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-8 space-y-6">
                    {/* Weekly Attendance */}
                    <div className="bg-white rounded-3xl p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary fill-1">calendar_month</span>
                                Weekly Attendance
                            </h3>
                            <p className="text-sm font-medium text-slate-500">Oct 21 - Oct 25, 2024</p>
                        </div>
                        <div className="grid grid-cols-5 gap-4">
                            {attendanceData.map((item, idx) => (
                                <div key={idx} className={`${item.bg} ${item.ring || ''} ${item.opacity || ''} p-5 rounded-2xl text-center transition-all hover:translate-y-[-2px]`}>
                                    <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{item.day}</p>
                                    <p className="text-2xl font-bold mt-2 text-slate-900">{item.time}</p>
                                    <p className={`text-[10px] ${item.color} font-bold uppercase mt-2 tracking-tighter`}>{item.status}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center gap-10 pt-6 border-t border-slate-50">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Weekly Total</span>
                                <span className="text-xl font-bold text-slate-900 mt-1">24h 42m</span>
                            </div>
                            <div className="h-8 w-px bg-slate-100"></div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Average Clock-in</span>
                                <span className="text-xl font-black text-slate-900 mt-1">08:54 AM</span>
                            </div>
                        </div>
                    </div>

                    {/* Pending Approvals */}
                    <div className="bg-white rounded-3xl p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary fill-1">rule</span>
                                Pending Approvals
                                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full ml-2 font-bold uppercase tracking-tighter">3 Requests</span>
                            </h3>
                            <button className="text-primary text-sm font-bold hover:underline">View All</button>
                        </div>
                        <div className="space-y-3">
                            {pendingApprovals.map((req) => (
                                <div key={req.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-white transition-all cursor-pointer group">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="size-11 rounded-full bg-slate-200 bg-center bg-cover border-2 border-white shadow-sm"
                                            style={{ backgroundImage: `url(${req.avatar})` }}
                                        />
                                        <div>
                                            <p className="font-bold text-slate-900">{req.name}</p>
                                            <p className="text-xs text-slate-500 italic mt-0.5">{req.type} • {req.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="size-9 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-lg">close</span>
                                        </button>
                                        <button className="size-9 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-lg">check</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-4 space-y-6">
                    {/* Leave Balance */}
                    {/* Leave Balance */}
                    <div className="bg-white rounded-3xl p-6 relative overflow-hidden group transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-bold text-slate-500">Annual Leave</h3>
                            <button className="size-8 rounded-full bg-slate-50 hover:bg-primary hover:text-white text-slate-400 flex items-center justify-center transition-all group-hover:scale-110">
                                <span className="material-symbols-outlined text-lg">add</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative size-16">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                    <path className="text-primary stroke-current" strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-xl">beach_access</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-slate-900 leading-none group-hover:text-primary transition-colors">14.5</div>
                                <div className="text-xs font-medium text-slate-400 mt-1">Days Available</div>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Accrual: Nov 1</span>
                            <span className="text-[10px] font-bold text-primary cursor-pointer hover:underline">View History</span>
                        </div>
                    </div>

                    {/* News & Circulars */}
                    <div className="bg-white rounded-3xl overflow-hidden">
                        <div className="p-6 pb-2">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary fill-1">campaign</span>
                                News & Circulars
                            </h3>
                        </div>
                        <div className="divide-y divide-slate-50">
                            <div className="p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
                                <p className="text-[10px] text-primary font-bold mb-2 uppercase tracking-widest">October 22, 2024</p>
                                <h4 className="font-bold text-sm leading-snug text-slate-900 group-hover:text-primary transition-colors">Annual Performance Review Cycle 2024</h4>
                                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">The annual review process starts next week. Please ensure all self-assessments are completed.</p>
                            </div>
                            <div className="p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
                                <p className="text-[10px] text-primary font-bold mb-2 uppercase tracking-widest">October 19, 2024</p>
                                <h4 className="font-bold text-sm leading-snug text-slate-900 group-hover:text-primary transition-colors">New Healthcare Benefits Package</h4>
                                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">We've partnered with a new provider to enhance dental and vision coverage for all full-time employees.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-slate-50 text-center">
                            <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">View All Announcements</button>
                        </div>
                    </div>

                    {/* Mini Stats */}
                    <div className="bg-white rounded-3xl p-8 space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-amber-100 text-amber-600">
                                    <span className="material-symbols-outlined text-xl">payments</span>
                                </div>
                                <span className="text-sm font-bold text-slate-700">Next Payday</span>
                            </div>
                            <span className="text-sm font-black text-slate-900">In 8 Days</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
                                    <span className="material-symbols-outlined text-xl">cake</span>
                                </div>
                                <span className="text-sm font-bold text-slate-700">Upcoming Birthday</span>
                            </div>
                            <span className="text-sm font-black text-slate-900">Tomorrow</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

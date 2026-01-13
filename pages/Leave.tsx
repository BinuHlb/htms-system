import React, { useState, useEffect } from 'react';

interface LeaveBalance {
    type: string;
    remaining: number;
    total: number;
    color: string;
}

interface LeaveRequest {
    id: string;
    type: string;
    start: string;
    end: string;
    days: number;
    status: 'Pending' | 'Approved' | 'Rejected' | 'Active' | 'Completed';
    date: string;
}

const Leave: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [balances, setBalances] = useState<LeaveBalance[]>([
        { type: 'Annual Leave', remaining: 12, total: 25, color: 'blue' },
        { type: 'Sick Leave', remaining: 5, total: 10, color: 'emerald' },
        { type: 'Casual Leave', remaining: 3, total: 5, color: 'amber' },
        { type: 'Unpaid Leave', remaining: 2, total: 2, color: 'purple' },
    ]);

    const [history, setHistory] = useState<LeaveRequest[]>([
        { id: '1', type: 'Annual Leave', start: '2024-05-07', end: '2024-05-09', days: 3, status: 'Completed', date: '2d ago' },
    ]);

    const [planningEntries, setPlanningEntries] = useState<number[]>([6, 12]); // Just indices for mock calendar

    // Form states
    const [newLeave, setNewLeave] = useState({
        type: 'Annual Leave',
        start: '',
        end: '',
        reason: ''
    });

    const calculateDays = (start: string, end: string) => {
        if (!start || !end) return 0;
        const d1 = new Date(start);
        const d2 = new Date(end);
        const diff = d2.getTime() - d1.getTime();
        return Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    };

    const handleRequestSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const days = calculateDays(newLeave.start, newLeave.end);

        const request: LeaveRequest = {
            id: Math.random().toString(36).substr(2, 9),
            type: newLeave.type,
            start: newLeave.start,
            end: newLeave.end,
            days,
            status: 'Pending',
            date: 'Just now'
        };

        setHistory([request, ...history]);
        setIsModalOpen(false);

        // Simulate Manager Approval after 3 seconds
        setTimeout(() => {
            setHistory(prev => prev.map(h =>
                h.id === request.id ? { ...h, status: 'Approved' } : h
            ));

            // Deduct from balance
            setBalances(prev => prev.map(b =>
                b.type === request.type ? { ...b, remaining: b.remaining - days } : b
            ));
        }, 3000);
    };

    const handleRejoin = (id: string) => {
        setHistory(prev => prev.map(h =>
            h.id === id ? { ...h, status: 'Completed' } : h
        ));
    };

    const togglePlanning = (day: number) => {
        setPlanningEntries(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    return (
        <div className="p-8 max-w-[1400px] mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-black tracking-tight font-display text-slate-900">Leave & Absence Hub</h2>
                    <p className="text-slate-500 mt-1 font-medium">Manage your time off requests and check balances.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
                >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Request Leave
                </button>
            </div>

            <section>
                <div className="flex flex-wrap gap-8 items-center justify-start bg-white rounded-3xl p-8 mb-8">
                    {balances.map((leave, idx) => (
                        <div key={idx} className="group relative flex items-center gap-4 cursor-pointer">
                            <div className="relative size-16">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path className={`text-${leave.color}-100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                    <path className={`text-${leave.color}-500 transition-all duration-1000 ease-out`} strokeDasharray={`${(leave.remaining / leave.total) * 100}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className={`material-symbols-outlined text-${leave.color}-500 text-xl`}>
                                        {leave.type === 'Annual Leave' ? 'calendar_today' :
                                            leave.type === 'Sick Leave' ? 'medical_services' :
                                                leave.type === 'Casual Leave' ? 'weekend' : 'event_busy'}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">{leave.type}</h4>
                                <div className="flex items-baseline gap-1 mt-0.5">
                                    <span className="text-xl font-black text-slate-900">{leave.remaining}</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">/ {leave.total} Days</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-3xl p-8">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tight">Leave Planning</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Select dates to plan future leaves</p>
                            </div>
                            <div className="flex items-center bg-slate-50 border border-slate-100 rounded-xl overflow-hidden p-1">
                                <button className="p-2 hover:bg-white rounded-lg transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                                <span className="px-6 text-sm font-black font-display">May 2024</span>
                                <button className="p-2 hover:bg-white rounded-lg transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                                <div key={d} className="py-4 bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest text-center">{d}</div>
                            ))}
                            {Array.from({ length: 31 }).map((_, i) => {
                                const day = i + 1;
                                const isPlanned = planningEntries.includes(day);
                                return (
                                    <div
                                        key={i}
                                        onClick={() => togglePlanning(day)}
                                        className={`h-24 p-3 bg-white text-xs font-bold text-slate-500 relative cursor-pointer hover:bg-slate-50 transition-all group`}
                                    >
                                        <span className={`${isPlanned ? 'text-primary' : ''}`}>{day}</span>
                                        {isPlanned && (
                                            <div className="mt-2 bg-primary/10 text-[9px] text-primary px-2 py-1 rounded-md border border-primary/20 flex items-center gap-1 animate-in zoom-in-90 fill-mode-both">
                                                <span className="size-1 bg-primary rounded-full"></span>
                                                Planned
                                            </div>
                                        )}
                                        <div className="absolute inset-0 border-2 border-primary rounded-lg opacity-0 group-hover:opacity-10 transition-opacity m-1"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Recent History</h3>
                    <div className="space-y-4">
                        {history.length === 0 && (
                            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                                <p className="text-sm font-bold text-slate-400">No leave history found.</p>
                            </div>
                        )}
                        {history.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-3xl transition-all border border-transparent hover:border-slate-100 group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${item.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' :
                                            item.status === 'Pending' ? 'bg-amber-100 text-amber-700 animate-pulse' :
                                                'bg-slate-100 text-slate-500'
                                        }`}>
                                        {item.status}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.date}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className={`size-12 rounded-2xl flex items-center justify-center ${item.type === 'Annual Leave' ? 'bg-blue-50 text-blue-500' :
                                            item.type === 'Sick Leave' ? 'bg-emerald-50 text-emerald-500' :
                                                'bg-amber-50 text-amber-500'
                                        }`}>
                                        <span className="material-symbols-outlined filled">calendar_month</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-black text-slate-900">{item.type}</h4>
                                        <p className="text-xs text-slate-500 font-bold mt-0.5">{new Date(item.start).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} - {new Date(item.end).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} ({item.days} Days)</p>
                                    </div>
                                </div>

                                {item.status === 'Approved' && (
                                    <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {[1, 2].map(i => (
                                                <div key={i} className="size-6 rounded-full border-2 border-white bg-slate-200 bg-cover" style={{ backgroundImage: `url('https://picsum.photos/id/${10 + i}/50/50')` }}></div>
                                            ))}
                                            <div className="size-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-black text-slate-400">+2</div>
                                        </div>
                                        <button
                                            onClick={() => handleRejoin(item.id)}
                                            className="px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                                        >
                                            Submit Rejoin
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Simulation */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white w-full max-w-xl rounded-[32px] overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-black font-display text-slate-900">Request Leave</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Fill in the details below</p>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="size-10 flex items-center justify-center hover:bg-slate-50 rounded-full transition-colors text-slate-400">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={handleRequestSubmit}>
                            <div className="p-8 space-y-8">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Leave Type</label>
                                        <select
                                            value={newLeave.type}
                                            onChange={e => setNewLeave({ ...newLeave, type: e.target.value })}
                                            className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                                        >
                                            <option>Annual Leave</option>
                                            <option>Sick Leave</option>
                                            <option>Casual Leave</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Attachment (Optional)</label>
                                        <div className="h-11 flex items-center gap-3 bg-slate-50 px-4 rounded-2xl border border-dashed border-slate-200 cursor-pointer hover:border-primary transition-colors text-slate-400">
                                            <span className="material-symbols-outlined text-sm">cloud_upload</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Upload File</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Start Date</label>
                                        <input
                                            required
                                            type="date"
                                            value={newLeave.start}
                                            onChange={e => setNewLeave({ ...newLeave, start: e.target.value })}
                                            className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">End Date</label>
                                        <input
                                            required
                                            type="date"
                                            value={newLeave.end}
                                            onChange={e => setNewLeave({ ...newLeave, end: e.target.value })}
                                            className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Reason for Leave</label>
                                    <textarea
                                        required
                                        placeholder="Briefly explain the reason..."
                                        value={newLeave.reason}
                                        onChange={e => setNewLeave({ ...newLeave, reason: e.target.value })}
                                        className="w-full bg-slate-50 border-none rounded-2xl px-4 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 min-h-[120px] resize-none"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-3 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-600">Cancel</button>
                                <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-10 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">Submit Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Leave;

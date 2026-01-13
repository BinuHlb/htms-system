
import React, { useState } from 'react';

const Leave: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const leaveBalances = [
        { type: 'Annual Leave', remaining: 12, total: 25, color: 'blue' },
        { type: 'Sick Leave', remaining: 5, total: 10, color: 'emerald' },
        { type: 'Study Leave', remaining: 3, total: 5, color: 'amber' },
        { type: 'Unpaid Leave', remaining: 2, total: 2, color: 'purple' },
    ];

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
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                    Leave Balances
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {leaveBalances.map((leave, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <span className={`material-symbols-outlined p-2 rounded-lg bg-${leave.color}-100 text-${leave.color}-600`}>
                                    {leave.type === 'Annual Leave' ? 'calendar_today' : 
                                     leave.type === 'Sick Leave' ? 'medical_services' : 
                                     leave.type === 'Study Leave' ? 'school' : 'event_busy'}
                                </span>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total: {leave.total}</span>
                            </div>
                            <h4 className="text-sm font-bold text-slate-500 mb-1">{leave.type}</h4>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-black text-slate-900">{leave.remaining}</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Days Left</span>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full mt-4 overflow-hidden">
                                <div 
                                    className={`bg-${leave.color}-500 h-full rounded-full transition-all duration-1000`} 
                                    style={{ width: `${(leave.remaining / leave.total) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold">Leave Planning</h3>
                            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
                                <button className="p-2 hover:bg-slate-100"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                                <span className="px-6 text-sm font-bold">May 2024</span>
                                <button className="p-2 hover:bg-slate-100"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                            </div>
                        </div>
                        {/* Mock Calendar Grid */}
                        <div className="grid grid-cols-7 border border-slate-100 rounded-lg overflow-hidden text-center">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                                <div key={d} className="py-3 bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-r border-slate-100">{d}</div>
                            ))}
                            {Array.from({ length: 31 }).map((_, i) => (
                                <div key={i} className="h-20 p-2 border-b border-r border-slate-50 text-xs font-bold text-slate-500 relative hover:bg-slate-50/50 transition-colors">
                                    {i + 1}
                                    {i === 6 && <div className="mt-1 bg-blue-500 text-[9px] text-white px-1.5 py-0.5 rounded shadow-sm">Annual</div>}
                                    {i === 12 && <div className="mt-1 bg-emerald-500 text-[9px] text-white px-1.5 py-0.5 rounded shadow-sm">Sick</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Recent History</h3>
                    <div className="space-y-3">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-primary transition-all cursor-pointer group">
                            <div className="flex justify-between items-start mb-3">
                                <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest">Approved</span>
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">2d ago</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="size-11 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined">event</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">Annual Leave</h4>
                                    <p className="text-xs text-slate-500 font-medium mt-0.5">May 07 - May 09 (3 Days)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Simulation */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white w-full max-w-xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <h3 className="text-xl font-black font-display">New Leave Request</h3>
                            <button onClick={() => setIsModalOpen(false)} className="size-10 flex items-center justify-center hover:bg-slate-50 rounded-full transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Leave Type</label>
                                        <select className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm font-bold focus:ring-primary focus:border-primary">
                                            <option>Annual Leave</option>
                                            <option>Sick Leave</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Attachment</label>
                                        <div className="flex items-center gap-2 border border-dashed border-slate-300 rounded-lg p-2.5 text-xs text-slate-400 font-bold cursor-pointer hover:border-primary transition-colors">
                                            <span className="material-symbols-outlined text-sm">upload_file</span>
                                            <span>Upload Document</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Start Date</label>
                                        <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm font-bold" type="date" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">End Date</label>
                                        <input className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm font-bold" type="date" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Reason</label>
                                    <textarea className="w-full bg-slate-50 border-slate-200 rounded-lg py-2.5 text-sm font-medium h-24" placeholder="Describe your leave reason..."></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                            <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 text-sm font-bold text-slate-400 hover:text-slate-600">Cancel</button>
                            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">Submit Request</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Leave;

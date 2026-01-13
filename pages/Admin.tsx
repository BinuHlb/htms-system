
import React from 'react';

const Admin: React.FC = () => {
    return (
        <div className="flex h-full animate-in fade-in duration-500 overflow-hidden">
            {/* Sub-sidebar for Workspace Context */}
            <aside className="w-72 flex-shrink-0 border-r border-slate-200 bg-white/50 p-6 space-y-8 flex flex-col">
                <div className="space-y-1">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Workspace</h3>
                    <p className="text-xs font-bold text-slate-600">Departmental Operations</p>
                </div>
                
                <nav className="space-y-1.5">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold text-sm shadow-sm ring-1 ring-primary/20">
                        <span className="material-symbols-outlined text-[20px] fill-1">group_add</span>
                        On-Behalf Actions
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all font-medium text-sm">
                        <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                        Leave Management
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all font-medium text-sm">
                        <span className="material-symbols-outlined text-[20px]">payments</span>
                        Payroll Processing
                    </button>
                </nav>

                <div className="mt-auto p-4 bg-primary/5 rounded-2xl border border-primary/20">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Proxy Authorization</p>
                    <p className="text-[11px] font-medium text-slate-500 leading-relaxed">
                        Authorized for Engineering & HR departments. System context active.
                    </p>
                </div>
            </aside>

            {/* Main Admin View */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="p-8 pb-4 space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span>Admin Portal</span>
                        <span className="text-slate-300">/</span>
                        <span className="text-primary">On-Behalf Request Center</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div>
                            <h1 className="text-3xl font-black font-display text-slate-900">On-Behalf Action Center</h1>
                            <p className="text-slate-500 font-medium mt-1">Submit requests for employees within your jurisdiction.</p>
                        </div>
                        <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm hover:bg-slate-50">
                            <span className="material-symbols-outlined text-lg">history</span>
                            Action Logs
                        </button>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-8 space-y-6">
                        {/* Employee Selector */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
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
                                            <input type="text" value="Sarah Jenkins" className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-bold focus:ring-primary" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Department</label>
                                        <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-bold focus:ring-primary appearance-none">
                                            <option>Engineering (All)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-8 p-5 bg-primary/5 rounded-2xl border border-primary/30 flex items-center justify-between animate-in slide-in-from-top-2">
                                    <div className="flex items-center gap-4">
                                        <div 
                                            className="size-16 rounded-2xl border-2 border-primary bg-center bg-cover shadow-sm"
                                            style={{ backgroundImage: `url('https://picsum.photos/id/177/100/100')` }}
                                        />
                                        <div>
                                            <h3 className="text-lg font-black text-slate-900">Sarah Jenkins</h3>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Senior Fullstack Engineer • EMP-4420</p>
                                            <div className="flex gap-4 mt-2">
                                                <span className="flex items-center gap-1.5 text-[9px] font-black text-green-500 uppercase"><span className="size-1.5 rounded-full bg-green-500"></span> Active</span>
                                                <span className="text-[9px] font-black text-primary uppercase tracking-widest">Leave Balance: 14 Days</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-primary hover:bg-primary/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Change</button>
                                </div>
                            </div>
                        </div>

                        {/* Action Tabs */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[400px]">
                            <div className="flex border-b border-slate-100 bg-slate-50/30 overflow-x-auto scrollbar-hide">
                                {['Leave Request', 'Loan/Advance', 'Attendance Adjust', 'Expense Claim'].map((tab, i) => (
                                    <button key={i} className={`px-8 py-5 text-[11px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-b-2
                                        ${i === 0 ? 'border-primary text-primary' : 'border-transparent text-slate-400 hover:text-slate-600'}
                                    `}>
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="p-10">
                                <form className="space-y-8">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Leave Type</label>
                                            <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-bold">
                                                <option>Annual Leave (Paid)</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date Range</label>
                                            <div className="flex items-center gap-3">
                                                <input type="date" className="flex-1 px-4 py-3 bg-slate-50 border-none rounded-xl text-xs font-bold" />
                                                <span className="text-slate-300 font-bold">to</span>
                                                <input type="date" className="flex-1 px-4 py-3 bg-slate-50 border-none rounded-xl text-xs font-bold" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Proxy Justification</label>
                                        <textarea rows={3} className="w-full px-4 py-4 bg-slate-50 border-none rounded-2xl text-sm font-medium" placeholder="Explain the reason for on-behalf submission..."></textarea>
                                    </div>
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <span className="material-symbols-outlined text-sm">info</span>
                                            <p className="text-[10px] font-bold uppercase tracking-widest">Bypasses initial line-manager approval.</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <button className="px-6 py-3 rounded-xl border border-slate-200 text-slate-400 text-xs font-bold uppercase tracking-widest">Cancel</button>
                                            <button className="px-10 py-3 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 transition-all hover:scale-105">Submit Request</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full sticky top-24">
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <div>
                                    <h2 className="text-slate-900 font-black tracking-tight">Pending Approvals</h2>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Engineering Queue</p>
                                </div>
                                <span className="bg-primary/10 text-primary text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ring-1 ring-primary/20">12 Total</span>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {[
                                    { name: 'Marcus Thorne', time: '2h ago', detail: 'Loan App: $2,500', color: 'text-primary' },
                                    { name: 'David Chen', time: '5h ago', detail: 'Sick Leave: 3 Days', color: 'text-amber-500' },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-2xl border border-slate-50 hover:border-slate-100 transition-all group">
                                        <div className="flex items-start gap-4">
                                            <div className="size-11 rounded-full bg-slate-100 shadow-inner flex-shrink-0" />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between">
                                                    <p className="text-sm font-black text-slate-900 truncate tracking-tight">{item.name}</p>
                                                    <span className="text-[9px] font-bold text-slate-300 uppercase">{item.time}</span>
                                                </div>
                                                <p className={`text-[11px] font-black uppercase tracking-tighter mt-1 ${item.color}`}>{item.detail}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100">
                                            <button className="flex-1 py-2 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase rounded-lg border border-emerald-100 hover:bg-emerald-500 hover:text-white transition-all">Approve</button>
                                            <button className="flex-1 py-2 bg-rose-50 text-rose-600 text-[9px] font-black uppercase rounded-lg border border-rose-100 hover:bg-rose-500 hover:text-white transition-all">Reject</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-slate-50 border-t border-slate-100">
                                <button className="w-full py-2.5 text-[9px] font-black text-slate-400 hover:text-primary transition-all uppercase tracking-widest">View All Notifications</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;

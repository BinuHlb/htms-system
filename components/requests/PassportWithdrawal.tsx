import React from 'react';

const PassportWithdrawal: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-5">
                <div className="p-4 bg-primary/10 rounded-2xl">
                    <span className="material-symbols-outlined text-primary text-3xl fill-1">wallet</span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Passport Withdrawal</h3>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Request temporary withdrawal for travel or administrative needs.</p>
                </div>
            </div>

            <div className="bg-slate-50/50 dark:bg-slate-800/10 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 flex items-start gap-4">
                <span className="material-symbols-outlined text-amber-500">info</span>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-wider">
                    Passport withdrawal requests usually take <span className="text-slate-900 dark:text-slate-100">2-3 working days</span> to process. Please ensure you have necessary travel insurance if withdrawing for international travel.
                </div>
            </div>

            <form className="space-y-8 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Proposed Withdrawal Date</label>
                        <input type="date" className="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Expected Return Date</label>
                        <input type="date" className="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Detailed Reason</label>
                    <textarea
                        rows={4}
                        placeholder="Please provide the specific reason for withdrawal (e.g., Annual Vacation, Visa Renewal)..."
                        className="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-5 text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm resize-none"
                    />
                </div>

                <div className="bg-white dark:bg-slate-900 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl p-10 flex flex-col items-center justify-center text-slate-400 hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="size-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">upload_file</span>
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">Upload Supporting Documents</p>
                    <p className="text-[12px] font-bold mt-1">Flight Ticket, Visa Copy, etc. (Max 10MB)</p>
                </div>

                <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-[2rem] font-bold text-sm shadow-xl shadow-primary/20 transition-all uppercase tracking-[0.2em] transform active:scale-95">
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default PassportWithdrawal;

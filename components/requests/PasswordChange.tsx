import React from 'react';

interface PasswordChangeProps {
    type: 'login' | 'payslip';
}

const PasswordChange: React.FC<PasswordChangeProps> = ({ type }) => {
    const isPayslip = type === 'payslip';

    return (
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-5">
                <div className={`p-4 ${isPayslip ? 'bg-indigo-50 dark:bg-indigo-500/10' : 'bg-rose-50 dark:bg-rose-500/10'} rounded-2xl`}>
                    <span className={`material-symbols-outlined ${isPayslip ? 'text-indigo-500 dark:text-indigo-400' : 'text-rose-500 dark:text-rose-400'} text-3xl fill-1`}>
                        {isPayslip ? 'key' : 'lock_reset'}
                    </span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {isPayslip ? 'Change Payslip Password' : 'Change Login Password'}
                    </h3>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">
                        Ensure your sensitive data remains protected.
                    </p>
                </div>
            </div>

            <div className="bg-slate-50/50 dark:bg-slate-800/10 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 space-y-3">
                <p className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.1em]">Security Requirements:</p>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        'At least 8 characters',
                        'One uppercase letter',
                        'One special character',
                        'At least one number'
                    ].map((req, i) => (
                        <div key={i} className="flex items-center gap-2 text-[12px] font-bold text-slate-500 dark:text-slate-400">
                            <div className="size-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                            {req}
                        </div>
                    ))}
                </div>
            </div>

            <form className="space-y-6 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Current Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Verify New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm" />
                    </div>
                </div>
                <button className={`w-full ${isPayslip ? 'bg-indigo-600 shadow-indigo-200 dark:shadow-indigo-900/20' : 'bg-rose-600 shadow-rose-200 dark:shadow-rose-900/20'} text-white py-5 rounded-[2rem] font-bold text-sm shadow-xl transition-all uppercase tracking-[0.2em] transform active:scale-[0.98]`}>
                    Securely Save Changes
                </button>
            </form>
        </div>
    );
};

export default PasswordChange;

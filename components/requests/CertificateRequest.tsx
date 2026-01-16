import React from 'react';

const CertificateRequest: React.FC = () => {
    const certificates = [
        { title: 'Employment Certificate', sub: 'Standard proof for banks/rent', icon: 'badge', color: 'blue' },
        { title: 'Salary Certificate', sub: 'Monthly earnings breakdown', icon: 'payments', color: 'emerald' },
        { title: 'No Objection Certificate', sub: 'For Visa/International Travel', icon: 'flight_takeoff', color: 'purple' },
        { title: 'Experience Letter', sub: 'Full tenure & role summary', icon: 'history_edu', color: 'amber' },
        { title: 'Salary Transfer Letter', sub: 'For Bank Loan applications', icon: 'account_balance', color: 'indigo' },
        { title: 'Bonafide Certificate', sub: 'Official status confirmation', icon: 'verified', color: 'rose' },
    ];

    return (
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-5">
                <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-2xl">
                    <span className="material-symbols-outlined text-amber-500 dark:text-amber-400 text-3xl fill-1">description</span>
                </div>
                <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">Certificate Request</h3>
                    <p className="text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">Generate and request official HR documentation.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, i) => (
                    <div key={i} className="group relative bg-slate-50/50 dark:bg-slate-800/30 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 cursor-pointer overflow-hidden transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 dark:hover:border-primary/40">
                        <div className="flex items-center gap-6 relative z-10">
                            <div className={`size-16 rounded-2xl bg-${cert.color}-50 dark:bg-${cert.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <span className={`material-symbols-outlined text-${cert.color}-500 dark:text-${cert.color}-400 text-2xl`}>{cert.icon}</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{cert.title}</h4>
                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">{cert.sub}</p>
                            </div>
                            <div className="size-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                                <span className="material-symbols-outlined text-primary">chevron_right</span>
                            </div>
                        </div>
                        <div className={`absolute -bottom-10 -right-10 size-32 bg-${cert.color}-50/50 dark:bg-${cert.color}-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform opacity-50`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificateRequest;

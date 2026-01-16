import React from 'react';
import PageSubHeader from '../components/PageSubHeader';
import LoanProgressCard from '../components/LoanProgressCard';
import PageContent from '../components/PageContent';

const Loans: React.FC = () => {
    const loanStats = [
        { label: 'Active Loan Balance', val: '$4,250.00', trend: '-15%', note: 'Employee Personal Loan', tColor: 'text-red-500' },
        { label: 'Total Disbursed', val: '$10,000.00', trend: '+0%', note: 'Disbursed Jan 2024', tColor: 'text-slate-400' },
        { label: 'Next Installment', val: '$500.00', trend: 'July 15th', note: 'Automatic Deduction', tColor: 'text-primary' },
    ];

    return (
        <div className="p-8 max-w-[1400px] mx-auto w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PageSubHeader
                title="Loan Management"
                subtitle="Manage your active loans and check repayment progress."
            />

            <PageContent
                layout="standard"
                className="!items-stretch"
                main={
                    <section className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-primary/10 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-[20px] fill-1">payments</span>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Active Loans</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {loanStats.map((card, i) => (
                                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl transition-all shadow-sm border border-slate-50 dark:border-slate-800 hover:shadow-md">
                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{card.label}</p>
                                    <div className="flex items-baseline gap-2">
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">{card.val}</h3>
                                        <span className={`text-[10px] font-bold ${card.tColor}`}>{card.trend}</span>
                                    </div>
                                    <p className="text-[9px] text-slate-400 dark:text-slate-500 mt-3 uppercase tracking-widest font-black">{card.note}</p>
                                </div>
                            ))}
                        </div>

                        <LoanProgressCard
                            loanId="LN-99281-2024"
                            totalAmount={10000}
                            paidAmount={5750}
                            percentage={57.5}
                        />
                    </section>
                }
                sidebar={
                    <div className="space-y-8 sticky top-8">
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">add_circle</span>
                                New Loan Request
                            </h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Loan Amount</label>
                                        <div className="relative">
                                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-bold">$</span>
                                            <input
                                                required
                                                type="number"
                                                placeholder="5,000"
                                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl pl-10 pr-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Purpose</label>
                                        <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer appearance-none shadow-sm">
                                            <option>Personal Loan</option>
                                            <option>Education Loan</option>
                                            <option>Emergency Fund</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Repayment Term</label>
                                        <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer appearance-none shadow-sm">
                                            <option>6 Months</option>
                                            <option>12 Months</option>
                                            <option>24 Months</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-[2rem] text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Loans;

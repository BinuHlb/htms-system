
import React from 'react';

const Financials: React.FC = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 font-display">Loans & Expenses</h1>
                    <p className="text-slate-500 text-base font-medium">Manage your active loans and submit reimbursement claims.</p>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    New Loan Request
                </button>
            </div>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary text-[20px] fill-1">payments</span></div>
                    <h2 className="text-xl font-bold text-slate-900">Loan Management</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: 'Active Loan Balance', val: '$4,250.00', trend: '-15%', note: 'Employee Personal Loan', tColor: 'text-red-500' },
                        { label: 'Total Disbursed', val: '$10,000.00', trend: '+0%', note: 'Disbursed Jan 2024', tColor: 'text-slate-400' },
                        { label: 'Next Installment', val: '$500.00', trend: 'July 15th', note: 'Automatic Deduction', tColor: 'text-primary' },
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl transition-all">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{card.label}</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-2xl font-black text-slate-900">{card.val}</h3>
                                <span className={`text-[10px] font-bold ${card.tColor}`}>{card.trend}</span>
                            </div>
                            <p className="text-[9px] text-slate-400 mt-3 uppercase tracking-widest font-black">{card.note}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-8 rounded-3xl">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h4 className="font-black text-slate-900 text-lg">Repayment Progress</h4>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Loan ID: LN-99281-2024</p>
                        </div>
                        <span className="text-4xl font-black text-primary">57.5%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden shadow-inner">
                        <div className="bg-primary h-full rounded-full transition-all duration-1000 shadow-sm" style={{ width: '57.5%' }}></div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p className="text-xs font-bold text-slate-500 tracking-wide">$5,750.00 Paid</p>
                        <p className="text-xs font-bold text-slate-500 tracking-wide">$4,250.00 Remaining</p>
                    </div>
                </div>
            </section>

            <div className="h-px bg-slate-100"></div>

            <section className="space-y-6 pb-20">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-primary/10 rounded-lg"><span className="material-symbols-outlined text-primary text-[20px] fill-1">receipt_long</span></div>
                    <h2 className="text-xl font-bold text-slate-900">Expense Claims</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-3xl overflow-hidden sticky top-24">
                            <div className="p-1.5 flex bg-slate-50 border-b border-slate-100">
                                <button className="flex-1 py-2.5 text-[10px] font-black rounded-xl bg-white shadow-sm text-primary uppercase tracking-widest">Domestic</button>
                                <button className="flex-1 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">International</button>
                                <button className="flex-1 py-2.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Allowance</button>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Departure</label>
                                        <input type="date" className="w-full bg-slate-50 border-slate-100 rounded-xl py-2.5 text-sm font-bold focus:ring-primary focus:border-primary" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Return</label>
                                        <input type="date" className="w-full bg-slate-50 border-slate-100 rounded-xl py-2.5 text-sm font-bold focus:ring-primary focus:border-primary" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Destination</label>
                                    <select className="w-full bg-slate-50 border-slate-100 rounded-xl py-2.5 text-sm font-bold focus:ring-primary focus:border-primary">
                                        <option>San Francisco, CA</option>
                                        <option>Austin, TX</option>
                                    </select>
                                </div>
                                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-slate-400 hover:border-primary/50 transition-colors cursor-pointer group">
                                    <span className="material-symbols-outlined text-4xl mb-3 group-hover:scale-110 transition-transform">cloud_upload</span>
                                    <p className="text-xs font-bold uppercase tracking-widest">Click to upload</p>
                                    <p className="text-[9px] font-medium mt-1 uppercase tracking-tighter">PDF, PNG, JPG up to 10MB</p>
                                </div>
                                <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-black text-sm shadow-xl shadow-primary/20 transition-all uppercase tracking-widest">
                                    Submit Claim
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-3xl overflow-hidden">
                            <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
                                <h3 className="font-black text-slate-900 tracking-tight">Recent Claims</h3>
                                <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline">View All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50/50 text-slate-400 font-black uppercase text-[10px] tracking-widest border-b border-slate-50">
                                        <tr>
                                            <th className="px-8 py-4">Claim Detail</th>
                                            <th className="px-8 py-4 text-right">Amount</th>
                                            <th className="px-8 py-4 text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {[
                                            { title: 'Annual Tech Conference', sub: 'Domestic Travel - SF', amt: '$1,240.50', status: 'Pending', sColor: 'bg-amber-100 text-amber-700' },
                                            { title: 'Client Dinner - Blue Bay', sub: 'Food Allowance', amt: '$85.00', status: 'Approved', sColor: 'bg-emerald-100 text-emerald-700' },
                                            { title: 'Uber - Airport Return', sub: 'Travel Expense', amt: '$45.20', status: 'Approved', sColor: 'bg-emerald-100 text-emerald-700' },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                                <td className="px-8 py-5">
                                                    <p className="font-black text-slate-900 text-sm tracking-tight">{row.title}</p>
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{row.sub}</p>
                                                </td>
                                                <td className="px-8 py-5 text-right font-black text-slate-900 text-base">{row.amt}</td>
                                                <td className="px-8 py-5 text-center">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${row.sColor}`}>
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
                </div>
            </section>
        </div>
    );
};

export default Financials;

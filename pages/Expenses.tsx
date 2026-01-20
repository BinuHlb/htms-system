import React, { useState } from 'react';
import PageContent from '../components/common/PageContent';

const Expenses: React.FC = () => {
    const [claimType, setClaimType] = useState('domestic');
    const recentClaims = [
        { title: 'Annual Tech Conference', sub: 'Domestic Travel - SF', amt: '$1,240.50', status: 'Pending', sColor: 'bg-amber-100 text-amber-700' },
        { title: 'Client Dinner - Blue Bay', sub: 'Food Allowance', amt: '$85.00', status: 'Approved', sColor: 'bg-emerald-100 text-emerald-700' },
        { title: 'Uber - Airport Return', sub: 'Travel Expense', amt: '$45.20', status: 'Approved', sColor: 'bg-emerald-100 text-emerald-700' },
    ];

    return (
        <div className="p-8 max-w-[1400px] mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">


            <PageContent
                layout="standard"
                className="!items-stretch"
                main={
                    <div className="space-y-8">
                        {/* Expense Balances Section */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Approved This Month', val: '$2,450.00', color: 'emerald', icon: 'check_circle' },
                                { label: 'Pending Approval', val: '$850.50', color: 'amber', icon: 'pending' },
                                { label: 'Yearly Utilized', val: '$12,000.00', color: 'blue', icon: 'account_balance_wallet' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <div className={`size-12 rounded-2xl bg-${stat.color}-50 dark:bg-${stat.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <span className={`material-symbols-outlined text-${stat.color}-500 dark:text-${stat.color}-400 fill-1`}>{stat.icon}</span>
                                        </div>
                                        <p className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.val}</h3>
                                    </div>
                                    <div className={`absolute -bottom-6 -right-6 size-24 bg-${stat.color}-50 dark:bg-${stat.color}-500/10 rounded-full blur-2xl opacity-50`}></div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Claim History</h3>
                                <button className="text-primary text-[12px] font-bold uppercase tracking-widest hover:underline">View All</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 font-bold uppercase text-[12px] tracking-widest border-b border-slate-50 dark:border-slate-800">
                                        <tr>
                                            <th className="px-8 py-5">Claim Detail</th>
                                            <th className="px-8 py-5 text-right">Amount</th>
                                            <th className="px-8 py-5 text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                        {recentClaims.map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                                                <td className="px-8 py-6">
                                                    <p className="font-bold text-slate-900 dark:text-white text-base tracking-tight">{row.title}</p>
                                                    <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest mt-1">{row.sub}</p>
                                                </td>
                                                <td className="px-8 py-6 text-right font-bold text-slate-900 dark:text-white text-lg">{row.amt}</td>
                                                <td className="px-8 py-6 text-center">
                                                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-widest ${row.sColor} dark:bg-opacity-20`}>
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
                    <div className="space-y-8 sticky top-8">
                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                            <div className="p-8 space-y-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-primary fill-1">add_circle</span>
                                    New Claim
                                </h3>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Claim Category</label>
                                        <div className="relative">
                                            <select
                                                value={claimType}
                                                onChange={(e) => setClaimType(e.target.value)}
                                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-all cursor-pointer appearance-none shadow-sm"
                                            >
                                                <option value="domestic">Domestic Travel Claim</option>
                                                <option value="food">Food Allowance Claim</option>
                                                <option value="int">International Travel Claim</option>
                                                <option value="medical">Medical Claim</option>
                                                <option value="trailer">Trailer Travel Allowance</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Claim Title</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. SF Project Lunch"
                                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-all shadow-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Date</label>
                                            <input type="date" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-all shadow-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Amount</label>
                                            <div className="relative">
                                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 font-bold">$</span>
                                                <input type="number" placeholder="0.00" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl pl-10 pr-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-all shadow-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    {(claimType === 'domestic' || claimType === 'int') && (
                                        <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                                            <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Destination</label>
                                            <input type="text" placeholder="City, Country" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-all shadow-sm" />
                                        </div>
                                    )}

                                    {claimType === 'trailer' && (
                                        <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                                            <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Distance (km)</label>
                                            <input type="number" placeholder="Distance traveled" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-primary focus:border-primary transition-all shadow-sm" />
                                        </div>
                                    )}
                                </div>

                                <div className="border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 hover:border-primary/50 dark:hover:border-primary/40 transition-colors cursor-pointer group">
                                    <span className="material-symbols-outlined text-4xl mb-3 group-hover:scale-110 transition-transform">cloud_upload</span>
                                    <p className="text-xs font-bold uppercase tracking-widest">Upload Receipt</p>
                                    <p className="text-[11px] font-medium mt-1 uppercase tracking-tighter">PDF, PNG, JPG up to 10MB</p>
                                </div>

                                <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-[2rem] font-bold text-sm shadow-xl shadow-primary/20 transition-all uppercase tracking-widest">
                                    Submit Request
                                </button>
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Expenses;

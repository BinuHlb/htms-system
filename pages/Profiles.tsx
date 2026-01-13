
import React from 'react';

const Profiles: React.FC = () => {
    const directory = [
        { name: 'Sarah Chen', role: 'Lead UI/UX Designer', dept: 'Engineering', active: false },
        { name: 'Alex Rivera', role: 'Senior Product Designer', dept: 'Engineering', active: true, me: true },
        { name: 'Marcus Thompson', role: 'Product Manager', dept: 'Product', active: false },
        { name: 'Jamie Lee', role: 'Frontend Engineer', dept: 'Engineering', active: false },
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-3xl font-black font-display text-slate-900 tracking-tight">Profile & Directory</h1>
                    <p className="text-slate-500 font-medium mt-1">View personal records and connect with your colleagues.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white font-bold text-sm shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">print</span> Export CV
                    </button>
                    <button className="px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-sm shadow-xl shadow-primary/20 flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">download</span> Download Payslip
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8 space-y-8">
                    {/* Hero Profile Card */}
                    <div className="bg-white rounded-3xl overflow-hidden">
                        <div className="h-32 bg-gradient-to-r from-primary/30 to-primary/10"></div>
                        <div className="px-10 pb-10 -mt-16 flex flex-col md:flex-row items-end gap-8">
                            <div className="relative">
                                <div
                                    className="size-40 rounded-[32px] border-8 border-white bg-slate-200 bg-center bg-cover shadow-2xl"
                                    style={{ backgroundImage: `url('https://picsum.photos/id/191/200/200')` }}
                                />
                                <div className="absolute -bottom-2 -right-2 bg-green-500 size-8 rounded-full border-4 border-white shadow-lg" />
                            </div>
                            <div className="pt-20 flex-1">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Alex Rivera</h2>
                                <div className="flex items-center gap-3 text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">
                                    <span>Senior Product Designer</span>
                                    <span className="size-1 rounded-full bg-slate-200"></span>
                                    <span>EMP-1024</span>
                                    <span className="size-1 rounded-full bg-slate-200"></span>
                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Engineering</span>
                                </div>
                            </div>
                            <div className="pb-2 flex gap-3">
                                <button className="px-6 py-3 rounded-xl border border-slate-100 bg-slate-50 text-xs font-black uppercase tracking-widest text-slate-500 hover:bg-white hover:shadow-md transition-all">Message</button>
                                <button className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20">Edit Profile</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl p-8 space-y-8">
                            <div className="flex justify-between items-center">
                                <h3 className="font-black text-lg flex items-center gap-3 tracking-tight">
                                    <span className="material-symbols-outlined text-primary fill-1">contact_phone</span>
                                    Contact Details
                                </h3>
                                <button className="text-primary font-black uppercase text-[10px] tracking-widest hover:underline">Edit</button>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Work Email</p>
                                    <p className="text-sm font-bold text-slate-900 mt-1">alex.rivera@company.com</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mobile Phone</p>
                                    <p className="text-sm font-bold text-slate-900 mt-1">+1 (555) 012-3456</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Emergency Contact</p>
                                    <p className="text-sm font-bold text-slate-900 mt-1">Maria Rivera (Spouse) - •••-••••</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 space-y-8">
                            <div className="flex justify-between items-center">
                                <h3 className="font-black text-lg flex items-center gap-3 tracking-tight">
                                    <span className="material-symbols-outlined text-primary fill-1">badge</span>
                                    Identification
                                </h3>
                                <button className="text-primary font-black uppercase text-[10px] tracking-widest hover:underline">Edit</button>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date of Birth</p>
                                    <p className="text-sm font-bold text-slate-900 mt-1">March 14, 1992 (32 years)</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">National ID</p>
                                    <p className="text-sm font-bold text-slate-900 mt-1">•••• •••• 4492</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Passport</p>
                                        <p className="text-[10px] font-black text-primary mt-1 uppercase">Verified</p>
                                    </div>
                                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Visa</p>
                                        <p className="text-[10px] font-black text-slate-400 mt-1 uppercase">N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-4">
                    <div className="bg-white rounded-3xl flex flex-col h-[calc(100vh-200px)] sticky top-24 overflow-hidden">
                        <div className="p-8 pb-4">
                            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-6">Company Directory</h3>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                                <input className="w-full bg-slate-50 border-none rounded-2xl pl-10 py-3 text-sm font-bold focus:ring-primary/20" placeholder="Search by name, role..." />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto px-4 space-y-2">
                            {directory.map((person, i) => (
                                <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer group 
                                    ${person.me ? 'bg-primary/5 border border-primary/20' : 'hover:bg-slate-50'}
                                `}>
                                    <div className="size-12 rounded-full bg-slate-200 bg-center bg-cover border-2 border-white" style={{ backgroundImage: `url('https://picsum.photos/id/${200 + i}/100/100')` }} />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <p className="text-sm font-black text-slate-900 truncate">{person.name}</p>
                                            {person.me && <span className="text-[8px] bg-primary text-white px-1.5 py-0.5 rounded-full font-black">YOU</span>}
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 truncate uppercase tracking-tighter">{person.role} • {person.dept}</p>
                                    </div>
                                    <div className={`size-2 rounded-full ${person.active ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`} />
                                </div>
                            ))}
                        </div>
                        <div className="p-6 bg-slate-50/50 border-t border-slate-50 text-center">
                            <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View All 142 Employees</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profiles;

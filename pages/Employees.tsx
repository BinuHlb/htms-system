
import React, { useState } from 'react';

const Employees: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'directory' | 'org' | 'team'>('directory');

    const employees = [
        { id: 1, name: 'Sarah Chen', role: 'Lead UI/UX Designer', dept: 'Engineering', email: 'sarah.c@company.com', avatar: '180' },
        { id: 2, name: 'Alex Rivera', role: 'Senior Product Designer', dept: 'Engineering', email: 'alex.r@company.com', avatar: '191' },
        { id: 3, name: 'Marcus Thompson', role: 'Product Manager', dept: 'Product', email: 'marcus.t@company.com', avatar: '192' },
        { id: 4, name: 'Jamie Lee', role: 'Frontend Engineer', dept: 'Engineering', email: 'jamie.l@company.com', avatar: '193' },
        { id: 5, name: 'David Kim', role: 'Backend Engineer', dept: 'Engineering', email: 'david.k@company.com', avatar: '194' },
        { id: 6, name: 'Emily White', role: 'HR Specialist', dept: 'Human Resources', email: 'emily.w@company.com', avatar: '195' },
        { id: 7, name: 'Michael Brown', role: 'Marketing Lead', dept: 'Marketing', email: 'michael.b@company.com', avatar: '196' },
        { id: 8, name: 'Linda Wilson', role: 'Data Analyst', dept: 'Product', email: 'linda.w@company.com', avatar: '197' },
    ];

    const teamMembers = employees.slice(0, 4); // Simulating "My Team"

    const Tabs = () => (
        <div className="flex bg-white rounded-2xl p-1 mb-8 w-fit border border-slate-100">
            {[
                { id: 'directory', label: 'Directory', icon: 'perm_contact_calendar' },
                { id: 'org', label: 'Organization Tree', icon: 'account_tree' },
                { id: 'team', label: 'My Team', icon: 'groups' }
            ].map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all
                        ${activeTab === tab.id
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}
                    `}
                >
                    <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
                    {tab.label}
                </button>
            ))}
        </div>
    );

    const DirectoryView = () => (
        <div className="bg-white rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
                <div className="relative w-96">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input
                        type="text"
                        placeholder="Search employees..."
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm font-bold focus:ring-2 focus:ring-primary/20"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="p-3 bg-slate-50 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span className="material-symbols-outlined">filter_list</span>
                    </button>
                    <button className="p-3 bg-slate-50 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                        <span className="material-symbols-outlined">grid_view</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {employees.map(emp => (
                    <div key={emp.id} className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all group group cursor-pointer">
                        <div className="flex flex-col items-center text-center">
                            <div className="size-24 rounded-full bg-slate-100 mb-4 bg-center bg-cover border-4 border-slate-50 shadow-sm group-hover:scale-105 transition-transform"
                                style={{ backgroundImage: `url('https://picsum.photos/id/${emp.avatar}/200/200')` }}></div>
                            <h3 className="text-lg font-black text-slate-900">{emp.name}</h3>
                            <p className="text-xs font-bold text-primary mt-1">{emp.role}</p>
                            <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mt-1">{emp.dept}</p>

                            <div className="flex gap-2 mt-6 w-full">
                                <button className="flex-1 py-2 rounded-lg bg-slate-50 text-slate-600 font-bold text-xs hover:bg-primary hover:text-white transition-colors">Message</button>
                                <button className="flex-1 py-2 rounded-lg bg-slate-50 text-slate-600 font-bold text-xs hover:bg-slate-100 transition-colors">Profile</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const OrgTreeView = () => (
        <div className="bg-white rounded-3xl p-12 min-h-[600px] flex justify-center">
            <div className="flex flex-col items-center gap-8 w-full">
                {/* CEO Level */}
                <div className="flex flex-col items-center">
                    <div className="p-4 rounded-2xl bg-slate-900 text-white w-64 shadow-xl relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-slate-700 border-2 border-slate-600 bg-center bg-cover"
                                style={{ backgroundImage: `url('https://picsum.photos/id/100/200/200')` }}></div>
                            <div>
                                <p className="font-bold text-sm">Jonathan Doe</p>
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Chief Executive Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                </div>

                {/* VP Level */}
                <div className="w-full flex justify-center gap-16 relative">
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-slate-200 -mt-px"></div>
                    <div className="absolute top-0 left-1/4 h-8 w-px bg-slate-200 -mt-px"></div>
                    <div className="absolute top-0 right-1/4 h-8 w-px bg-slate-200 -mt-px"></div>

                    {['Engineering', 'Product', 'Marketing'].map((dept, i) => (
                        <div key={i} className="flex flex-col items-center relative">
                            <div className="absolute -top-8 h-8 w-px bg-slate-200"></div>
                            <div className="p-4 rounded-2xl bg-white border border-slate-200 w-56 shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-primary">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-xs">VP</div>
                                    <div>
                                        <p className="font-bold text-sm text-slate-900">VP of {dept}</p>
                                        <p className="text-[10px] text-slate-400 font-bold">{Math.floor(Math.random() * 20 + 5)} Reports</p>
                                    </div>
                                </div>
                            </div>
                            {i === 0 && (
                                <div className="flex flex-col items-center mt-8 gap-4">
                                    <div className="h-8 w-px bg-slate-200 -mt-8"></div>
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-48">
                                        <p className="text-xs font-bold text-primary text-center">Your Team Here</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const MyTeamView = () => (
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8 space-y-8">
                <div className="bg-white rounded-3xl p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-black text-xl text-slate-900">Team Performance</h3>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest">On Track</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {teamMembers.map(member => (
                            <div key={member.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 hover:bg-white transition-all cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-slate-200 bg-center bg-cover shadow-sm"
                                        style={{ backgroundImage: `url('https://picsum.photos/id/${member.avatar}/200/200')` }}></div>
                                    <div>
                                        <p className="font-bold text-slate-900">{member.name}</p>
                                        <p className="text-xs font-medium text-slate-500">{member.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <div className="text-right">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tasks</p>
                                        <p className="font-bold text-slate-900">12/15</p>
                                    </div>
                                    <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full w-3/4"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-span-4 space-y-6">
                <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20">
                    <h3 className="font-black text-xl mb-2">Team Announcements</h3>
                    <p className="text-primary-light text-sm font-medium mb-6">Post updates for your direct reports.</p>

                    <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] bg-white/20 px-2 py-1 rounded text-white font-bold uppercase tracking-widest">Important</span>
                                <span className="text-[10px] text-white/60 font-bold">2h ago</span>
                            </div>
                            <p className="text-sm font-bold leading-snug">Design Sprint V2 kicks off next Monday. Please review the brief.</p>
                        </div>
                    </div>

                    <button className="w-full py-3 mt-6 bg-white text-primary rounded-xl font-black text-sm uppercase tracking-widest hover:bg-primary-light transition-colors">
                        + New Announcement
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="p-8 max-w-[1600px] mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-slate-900 font-display">Employees</h1>
                    <p className="text-slate-500 font-medium mt-1">Manage personnel, view structure, and track team progress.</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 flex items-center gap-2 transition-all">
                        <span className="material-symbols-outlined text-lg">person_add</span>
                        Add Employee
                    </button>
                </div>
            </div>

            <Tabs />

            <div className="min-h-[600px]">
                {activeTab === 'directory' && <DirectoryView />}
                {activeTab === 'org' && <OrgTreeView />}
                {activeTab === 'team' && <MyTeamView />}
            </div>
        </div>
    );
};

export default Employees;

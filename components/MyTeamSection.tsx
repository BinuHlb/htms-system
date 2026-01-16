import React, { useState } from 'react';
import { EmployeeData } from '../data/employees';

interface TeamMemberStatus extends EmployeeData {
    status: 'off' | 'not-checked-in' | 'late' | 'on-time';
    time?: string;
    reason?: string;
}

interface MyTeamSectionProps {
    teamMembers: TeamMemberStatus[];
}

const MyTeamSection: React.FC<MyTeamSectionProps> = ({ teamMembers }) => {
    const [filter, setFilter] = useState<TeamMemberStatus['status'] | 'all'>('all');

    const filteredMembers = filter === 'all'
        ? teamMembers
        : teamMembers.filter(m => m.status === filter);

    const stats = {
        'off': teamMembers.filter(m => m.status === 'off').length,
        'not-checked-in': teamMembers.filter(m => m.status === 'not-checked-in').length,
        'late': teamMembers.filter(m => m.status === 'late').length,
        'on-time': teamMembers.filter(m => m.status === 'on-time').length,
    };

    const filterOptions = [
        { id: 'all', label: 'All Members', icon: 'groups', count: teamMembers.length, color: 'text-slate-600', bg: 'bg-slate-100' },
        { id: 'on-time', label: 'On Time', icon: 'check_circle', count: stats['on-time'], color: 'text-green-600', bg: 'bg-green-100' },
        { id: 'late', label: 'Late Arrivals', icon: 'schedule', count: stats['late'], color: 'text-amber-600', bg: 'bg-amber-100' },
        { id: 'not-checked-in', label: 'Not Checked In', icon: 'pending', count: stats['not-checked-in'], color: 'text-blue-600', bg: 'bg-blue-100' },
        { id: 'off', label: 'Off Today', icon: 'event_busy', count: stats['off'], color: 'text-rose-600', bg: 'bg-rose-100' },
    ];

    const getStatusStyle = (status: TeamMemberStatus['status']) => {
        switch (status) {
            case 'on-time': return 'bg-green-100 text-green-700';
            case 'late': return 'bg-amber-100 text-amber-700';
            case 'not-checked-in': return 'bg-blue-100 text-blue-700';
            case 'off': return 'bg-rose-100 text-rose-700';
        }
    };

    const getStatusLabel = (status: TeamMemberStatus['status']) => {
        switch (status) {
            case 'on-time': return 'On Time';
            case 'late': return 'Late Arrival';
            case 'not-checked-in': return 'Pending';
            case 'off': return 'Off Today';
        }
    };

    return (
        <div className="space-y-6">
            {/* Filter Tabs / Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {filterOptions.map((opt) => (
                    <button
                        key={opt.id}
                        onClick={() => setFilter(opt.id as any)}
                        className={`p-4 rounded-3xl transition-all duration-300 text-left border-2 ${filter === opt.id
                            ? 'border-primary bg-white shadow-lg -translate-y-1'
                            : 'border-transparent bg-white/50 hover:bg-white'
                            }`}
                    >
                        <div className={`size-10 rounded-2xl ${opt.bg} ${opt.color} flex items-center justify-center mb-3`}>
                            <span className="material-symbols-outlined text-2xl fill-1">{opt.icon}</span>
                        </div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{opt.label}</p>
                        <p className="text-2xl font-black text-slate-900">{opt.count}</p>
                    </button>
                ))}
            </div>

            {/* Members List */}
            <div className="bg-white/40 backdrop-blur-xl rounded-[2rem] p-8 border border-white/20 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                            {filter === 'all' ? 'Team Overview' : filterOptions.find(o => o.id === filter)?.label}
                        </h3>
                        <p className="text-slate-500 font-medium mt-1">
                            {filter === 'all' ? 'Real-time attendance status for your direct reports' : `Showing members who are ${filterOptions.find(o => o.id === filter)?.label.toLowerCase()}`}
                        </p>
                    </div>
                    <div className="flex -space-x-3">
                        {filteredMembers.slice(0, 5).map(m => (
                            <div
                                key={m.id}
                                className="size-10 rounded-full border-4 border-white bg-slate-200 bg-center bg-cover shadow-sm ring-1 ring-slate-100"
                                style={{ backgroundImage: `url('https://picsum.photos/id/${m.avatar}/100/100')` }}
                            />
                        ))}
                        {filteredMembers.length > 5 && (
                            <div className="size-10 rounded-full border-4 border-white bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-sm ring-1 ring-slate-100">
                                +{filteredMembers.length - 5}
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="size-14 rounded-2xl bg-slate-200 bg-center bg-cover shadow-inner group-hover:scale-105 transition-transform duration-300"
                                    style={{ backgroundImage: `url('https://picsum.photos/id/${member.avatar}/200/200')` }}
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{member.name}</h4>
                                    <p className="text-xs font-semibold text-slate-500">{member.role}</p>
                                    <div className="flex items-center gap-2 mt-1.5">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${getStatusStyle(member.status)}`}>
                                            {getStatusLabel(member.status)}
                                        </span>
                                        {member.time && (
                                            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                                                {member.time}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-xl">info</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredMembers.length === 0 && (
                    <div className="text-center py-20">
                        <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-symbols-outlined text-4xl text-slate-300">search_off</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900">No members found</h4>
                        <p className="text-slate-500">No one matches the selected attendance filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTeamSection;

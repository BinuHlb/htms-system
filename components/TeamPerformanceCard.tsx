import React from 'react';

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    avatar: number;
    attendanceRate: number; // Percentage
    lateCount: number;
}

interface TeamPerformanceCardProps {
    title: string;
    members: TeamMember[];
    statusLabel?: string;
    onMemberClick?: (member: TeamMember) => void;
}

const TeamPerformanceCard: React.FC<TeamPerformanceCardProps> = ({
    title,
    members,
    onMemberClick,
}) => {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-black text-lg text-slate-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">insights</span>
                    {title}
                </h3>
                <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-slate-50 text-slate-500 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest">Late Arrival</span>
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
            </div>

            <div className="space-y-5">
                {members.map(member => (
                    <div
                        key={member.id}
                        onClick={() => onMemberClick?.(member)}
                        className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer group"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="size-10 rounded-xl bg-slate-200 bg-center bg-cover shadow-sm"
                                style={{ backgroundImage: `url('https://picsum.photos/id/${member.avatar}/100/100')` }}
                            />
                            <div>
                                <p className="font-bold text-sm text-slate-900 leading-tight">{member.name}</p>
                                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-tight">{member.role.split(' ')[0]}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="font-bold text-sm text-slate-900">{member.attendanceRate}%</p>
                            </div>
                            <div className="w-12 bg-slate-100 h-1 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-full rounded-full transition-all duration-500"
                                    style={{ width: `${member.attendanceRate}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPerformanceCard;

import React from 'react';

export interface AttendanceDay {
    day: string;
    time: string;
    status: string;
    color: string;
    bg: string;
    ring?: string;
    opacity?: string;
}

export interface AttendanceStat {
    label: string;
    value: string;
}

interface WeeklyAttendanceCardProps {
    title: string;
    icon: string;
    period: string;
    data: AttendanceDay[];
    stats: AttendanceStat[];
}

const WeeklyAttendanceCard: React.FC<WeeklyAttendanceCardProps> = ({
    title,
    icon,
    period,
    data,
    stats,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-50 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary fill-1">{icon}</span>
                    {title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{period}</p>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className={`${item.bg} dark:bg-slate-800/40 ${item.ring || ''} ${item.opacity || ''} p-5 rounded-2xl text-center transition-all hover:translate-y-[-2px] group cursor-default`}
                    >
                        <p className="text-[12px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider transition-colors group-hover:text-primary">
                            {item.day}
                        </p>
                        <p className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">{item.time}</p>
                        <p className={`text-[12px] ${item.color} font-bold uppercase mt-2 tracking-tighter`}>
                            {item.status}
                        </p>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex items-center gap-10 pt-6 border-t border-slate-50 dark:border-slate-800">
                {stats.map((stat, idx) => (
                    <React.Fragment key={idx}>
                        <div className="flex flex-col">
                            <span className="text-[12px] uppercase tracking-widest font-bold text-slate-400">{stat.label}</span>
                            <span className="text-xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</span>
                        </div>
                        {idx < stats.length - 1 && <div className="h-8 w-px bg-slate-100 dark:bg-slate-800"></div>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default WeeklyAttendanceCard;

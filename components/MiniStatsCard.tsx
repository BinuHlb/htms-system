import React from 'react';

export interface MiniStatItem {
    id: string | number;
    label: string;
    value: string;
    icon: string;
    iconBgColor: string;
    iconTextColor: string;
}

interface MiniStatsCardProps {
    items: MiniStatItem[];
}

const MiniStatsCard: React.FC<MiniStatsCardProps> = ({ items }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 space-y-6 shadow-sm border border-slate-50 dark:border-slate-800">
            {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between group cursor-default">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${item.iconBgColor} dark:bg-opacity-20 ${item.iconTextColor} group-hover:scale-110 transition-transform`}>
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                        </div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item.label}</span>
                    </div>
                    <span className="text-sm font-black text-slate-900 dark:text-white">{item.value}</span>
                </div>
            ))}
        </div>
    );
};

export default MiniStatsCard;

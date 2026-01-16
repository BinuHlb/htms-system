import React from 'react';

interface StatCardProps {
    title: string;
    value: string | number;
    label: string;
    icon: string;
    progress?: number;
    color?: string;
    footerLeft?: string;
    footerRight?: string;
    onActionClick?: () => void;
    onFooterRightClick?: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    label,
    icon,
    progress = 0,
    color = 'primary',
    footerLeft,
    footerRight,
    onActionClick,
    onFooterRightClick,
}) => {
    // Progress calculation for SVG
    const radius = 15.9155;
    const circumference = 2 * Math.PI * radius;
    const dashArray = `${progress}, 100`;

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 relative overflow-hidden group transition-all duration-300 shadow-sm hover:shadow-md border border-slate-50 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400">{title}</h3>
                <button
                    onClick={onActionClick}
                    className="size-8 rounded-full bg-slate-50 dark:bg-slate-800 hover:bg-primary hover:text-white text-slate-400 dark:text-slate-500 flex items-center justify-center transition-all group-hover:scale-110"
                >
                    <span className="material-symbols-outlined text-lg">add</span>
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative size-16">
                    <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                        <path
                            className="text-slate-100 dark:text-slate-800"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        <path
                            className={`text-${color} stroke-current`}
                            strokeDasharray={dashArray}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`material-symbols-outlined text-${color} text-xl`}>{icon}</span>
                    </div>
                </div>
                <div>
                    <div className={`text-4xl font-bold text-slate-900 dark:text-white leading-none group-hover:text-${color} transition-colors`}>
                        {value}
                    </div>
                    <div className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1">{label}</div>
                </div>
            </div>

            {(footerLeft || footerRight) && (
                <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                    {footerLeft && (
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                            {footerLeft}
                        </span>
                    )}
                    {footerRight && (
                        <span
                            onClick={onFooterRightClick}
                            className={`text-[10px] font-bold text-${color} cursor-pointer hover:underline uppercase tracking-wider`}
                        >
                            {footerRight}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default StatCard;

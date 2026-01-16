import React from 'react';

export interface LeaveBalance {
    type: string;
    remaining: number;
    total: number;
    color: string;
}

interface LeaveBalanceCardProps {
    balances: LeaveBalance[];
    onBalanceClick?: (balance: LeaveBalance) => void;
}

const LeaveBalanceCard: React.FC<LeaveBalanceCardProps> = ({
    balances,
    onBalanceClick,
}) => {
    return (
        <div className="flex flex-wrap gap-8 items-center justify-start bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-50 dark:border-slate-800">
            {balances.map((leave, idx) => (
                <div
                    key={idx}
                    onClick={() => onBalanceClick?.(leave)}
                    className="group relative flex items-center gap-4 cursor-pointer"
                >
                    <div className="relative size-16">
                        <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-slate-100 dark:text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                            <path
                                className={`text-${leave.color}-500 dark:text-${leave.color}-400 transition-all duration-1000 ease-out`}
                                strokeDasharray={`${(leave.remaining / leave.total) * 100}, 100`}
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`material-symbols-outlined text-${leave.color}-500 dark:text-${leave.color}-400 text-xl`}>
                                {leave.type.toLowerCase().includes('annual') ? 'calendar_today' :
                                    leave.type.toLowerCase().includes('sick') ? 'medical_services' :
                                        leave.type.toLowerCase().includes('casual') ? 'weekend' : 'event_busy'}
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">{leave.type}</h4>
                        <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-xl font-bold text-slate-900 dark:text-white">{leave.remaining}</span>
                            <span className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase">/ {leave.total} Days</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LeaveBalanceCard;

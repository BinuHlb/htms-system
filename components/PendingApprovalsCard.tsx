import React from 'react';

export interface ApprovalItem {
    id: string | number;
    name: string;
    role: string;
    type: string;
    duration: string;
    avatar: string;
}

interface PendingApprovalsCardProps {
    title: string;
    icon: string;
    count: number;
    items: ApprovalItem[];
    onViewAllClick?: () => void;
    onApproveClick?: (item: ApprovalItem) => void;
    onRejectClick?: (item: ApprovalItem) => void;
}

const PendingApprovalsCard: React.FC<PendingApprovalsCardProps> = ({
    title,
    icon,
    count,
    items,
    onViewAllClick,
    onApproveClick,
    onRejectClick,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-50 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary fill-1">{icon}</span>
                    {title}
                    <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full ml-2 font-bold uppercase tracking-tighter">
                        {count} {count === 1 ? 'Request' : 'Requests'}
                    </span>
                </h3>
                <button
                    onClick={onViewAllClick}
                    className="text-primary text-sm font-bold hover:underline"
                >
                    View All
                </button>
            </div>
            <div className="space-y-3">
                {items.map((req) => (
                    <div
                        key={req.id}
                        className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer group hover:shadow-md hover:shadow-slate-100 dark:hover:shadow-none"
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className="size-11 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border-2 border-white dark:border-slate-600 shadow-sm"
                                style={{ backgroundImage: `url(${req.avatar})` }}
                            />
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{req.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-0.5">{req.type} • {req.duration}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRejectClick?.(req);
                                }}
                                className="size-9 rounded-lg bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-500/20 transition-colors flex items-center justify-center shadow-sm"
                            >
                                <span className="material-symbols-outlined text-lg">close</span>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onApproveClick?.(req);
                                }}
                                className="size-9 rounded-lg bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-500/20 transition-colors flex items-center justify-center shadow-sm"
                            >
                                <span className="material-symbols-outlined text-lg">check</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PendingApprovalsCard;

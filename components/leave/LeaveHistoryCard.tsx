import React from 'react';

export interface LeaveHistoryItem {
    id: string;
    type: string;
    start: string;
    end: string;
    days: number;
    status: 'Pending' | 'Approved' | 'Rejected' | 'Active' | 'Completed';
    date: string;
}

interface LeaveHistoryCardProps {
    history: LeaveHistoryItem[];
    onRejoin?: (id: string) => void;
    title?: string;
    className?: string;
}

const LeaveHistoryCard: React.FC<LeaveHistoryCardProps> = ({
    history,
    onRejoin,
    title = "Recent History",
    className = "",
}) => {
    const getStatusColor = (status: LeaveHistoryItem['status']) => {
        switch (status) {
            case 'Approved': return 'bg-emerald-100 text-emerald-700';
            case 'Pending': return 'bg-amber-100 text-amber-700 animate-pulse';
            case 'Completed': return 'bg-slate-100 text-slate-500';
            case 'Rejected': return 'bg-rose-100 text-rose-700';
            case 'Active': return 'bg-primary/10 text-primary';
            default: return 'bg-slate-100 text-slate-500';
        }
    };

    const getIconColor = (type: string) => {
        if (type.toLowerCase().includes('annual')) return 'bg-blue-50 text-blue-500';
        if (type.toLowerCase().includes('sick')) return 'bg-emerald-50 text-emerald-500';
        if (type.toLowerCase().includes('casual')) return 'bg-amber-50 text-amber-500';
        return 'bg-purple-50 text-purple-500';
    };

    return (
        <div className={`space-y-6 ${className}`}>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
            <div className="space-y-4">
                {history.length === 0 ? (
                    <div className="p-10 text-center bg-slate-50/50 rounded-[32px] border-2 border-dashed border-slate-100 flex flex-col items-center">
                        <span className="material-symbols-outlined text-4xl text-slate-200 mb-3">history_toggle_off</span>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No activity found</p>
                    </div>
                ) : (
                    history.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-6 rounded-[32px] transition-all border border-slate-50 hover:shadow-xl hover:shadow-slate-200/50 group shadow-sm relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest ${getStatusColor(item.status)}`}>
                                    {item.status}
                                </span>
                                <span className="text-[12px] text-slate-400 font-bold uppercase tracking-widest">{item.date}</span>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className={`size-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 ${getIconColor(item.type)}`}>
                                    <span className="material-symbols-outlined text-[24px] filled">calendar_month</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-base font-bold text-slate-900 truncate tracking-tight">{item.type}</h4>
                                    <p className="text-xs text-slate-500 font-bold mt-1 tracking-tight">
                                        {new Date(item.start).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                        <span className="mx-1 text-slate-300">→</span>
                                        {new Date(item.end).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                        <span className="ml-2 text-primary font-bold">({item.days} Days)</span>
                                    </p>
                                </div>
                            </div>

                            {item.status === 'Approved' && (
                                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between animate-in slide-in-from-top-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div
                                                key={i}
                                                className="size-7 rounded-full border-2 border-white bg-slate-200 bg-cover shadow-sm bg-center"
                                                style={{ backgroundImage: `url('https://picsum.photos/id/${20 + i}/60/60')` }}
                                            />
                                        ))}
                                        <div className="size-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 shadow-sm">+2</div>
                                    </div>
                                    <button
                                        onClick={() => onRejoin?.(item.id)}
                                        className="px-5 py-2.5 bg-primary text-white text-[12px] font-bold uppercase tracking-widest rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined text-[14px]">task_alt</span>
                                        Submit Rejoin
                                    </button>
                                </div>
                            )}

                            <div className="absolute top-0 right-0 size-16 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default LeaveHistoryCard;

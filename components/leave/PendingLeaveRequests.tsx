import React, { useState } from 'react';

export interface Approver {
    name: string;
    role: string;
    status: 'pending' | 'approved' | 'rejected';
}

export interface PendingRequest {
    id: string;
    type: string;
    start: string;
    end: string;
    days: number;
    approvers: Approver[];
}

interface PendingLeaveRequestsProps {
    requests: PendingRequest[];
}

const PendingLeaveRequests: React.FC<PendingLeaveRequestsProps> = ({ requests }) => {
    const [expandedId, setExpandedId] = useState<string | null>(requests[0]?.id || null);

    if (requests.length === 0) return null;

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="space-y-4 mb-8">
            <h3 className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ml-2">
                Pending Requests ({requests.length})
            </h3>

            <div className="space-y-3">
                {requests.map((request) => {
                    const isExpanded = expandedId === request.id;
                    const approvedCount = request.approvers.filter(a => a.status === 'approved').length;

                    return (
                        <div
                            key={request.id}
                            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-300"
                        >
                            {/* Header / Clickable Area */}
                            <div
                                onClick={() => toggleExpand(request.id)}
                                className="p-6 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-2xl">event_upcoming</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
                                            {request.type}
                                        </h4>
                                        <p className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">
                                            {request.start} — {request.end}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8">
                                    <div className="text-right hidden sm:block">
                                        <div className="flex items-center gap-2 justify-end">
                                            <div className="flex -space-x-1.5">
                                                {request.approvers.map((a, i) => (
                                                    <div
                                                        key={i}
                                                        className={`size-5 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold
                                                            ${a.status === 'approved' ? 'bg-emerald-500 text-white' : a.status === 'rejected' ? 'bg-rose-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}
                                                        `}
                                                    >
                                                        {a.status === 'approved' ? '✓' : a.status === 'rejected' ? '×' : '?'}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
                                                {approvedCount}/{request.approvers.length} Approved
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="text-right flex flex-col items-end">
                                            <span className="text-base font-bold text-slate-900 dark:text-white leading-none">
                                                {request.days}
                                            </span>
                                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter mt-0.5">
                                                Days
                                            </span>
                                        </div>
                                        <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Expandable Content (Timeline) */}
                            <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <div className="px-10 pb-10 pt-4 border-t border-slate-50 dark:border-slate-800/50">
                                    <div className="relative pt-6 max-w-2xl mx-auto">
                                        <div className="absolute top-8 left-0 right-0 h-[1.5px] bg-slate-100 dark:bg-slate-800" />
                                        <div className="relative flex justify-between">
                                            {request.approvers.map((approver, idx) => (
                                                <div key={idx} className="flex flex-col items-center gap-2 z-10 bg-white dark:bg-slate-900 px-3 first:pl-0 last:pr-0">
                                                    <div className={`size-5 rounded-full border-2 flex items-center justify-center transition-all duration-500
                                                        ${approver.status === 'approved'
                                                            ? 'bg-emerald-500 border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                                                            : approver.status === 'rejected'
                                                                ? 'bg-rose-500 border-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]'
                                                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'}
                                                    `}>
                                                        {approver.status === 'approved' && (
                                                            <span className="material-symbols-outlined text-white text-[12px] font-bold">check</span>
                                                        )}
                                                        {approver.status === 'rejected' && (
                                                            <span className="material-symbols-outlined text-white text-[12px] font-bold">close</span>
                                                        )}
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-[12px] font-bold text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
                                                            {approver.role}
                                                        </p>
                                                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter mt-1">
                                                            {approver.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PendingLeaveRequests;

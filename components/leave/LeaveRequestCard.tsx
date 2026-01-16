import React, { useState } from 'react';

interface LeaveRequestCardProps {
    onSubmit: (data: any) => void;
    className?: string;
}

const LeaveRequestCard: React.FC<LeaveRequestCardProps> = ({
    onSubmit,
    className = "",
}) => {
    const [newLeave, setNewLeave] = useState({ type: 'Annual Leave', start: '', end: '', reason: '' });
    const [fileName, setFileName] = useState<string | null>(null);
    const [showApprovers, setShowApprovers] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ ...newLeave, fileName });
    };

    const approvers = [
        { name: 'John Doe', role: 'Direct Manager', avatar: 'https://picsum.photos/id/64/32/32' },
        { name: 'Sarah Chen', role: 'HR Manager', avatar: 'https://picsum.photos/id/65/32/32' },
        { name: 'Marcus Thompson', role: 'Department Head', avatar: 'https://picsum.photos/id/66/32/32' },
    ];

    return (
        <div className={`bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md ${className}`}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary fill-1">add_circle</span>
                Request Leave
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Leave Type</label>
                        <select
                            value={newLeave.type}
                            onChange={e => setNewLeave({ ...newLeave, type: e.target.value })}
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer appearance-none shadow-sm"
                        >
                            <option>Annual Leave</option>
                            <option>Sick Leave</option>
                            <option>Casual Leave</option>
                            <option>Compensatory Off</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Start Date</label>
                            <input
                                required
                                type="date"
                                value={newLeave.start}
                                onChange={e => setNewLeave({ ...newLeave, start: e.target.value })}
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 shadow-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">End Date</label>
                            <input
                                required
                                type="date"
                                value={newLeave.end}
                                onChange={e => setNewLeave({ ...newLeave, end: e.target.value })}
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Reason for Leave</label>
                        <textarea
                            required
                            placeholder="Briefly describe your request..."
                            value={newLeave.reason}
                            onChange={e => setNewLeave({ ...newLeave, reason: e.target.value })}
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 min-h-[100px] resize-none shadow-sm"
                        ></textarea>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                        <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Attachments (Optional)</label>
                        <div className="relative group">
                            <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                            />
                            <div className="border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center transition-all group-hover:border-primary/40 group-hover:bg-primary/5">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary mb-2">upload_file</span>
                                <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                                    {fileName || 'Upload Doc/Image'}
                                </p>
                                <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 mt-1">Medical certificate, travel docs, etc.</p>
                            </div>
                        </div>
                    </div>

                    {/* Approvers with Micro-interaction */}
                    <div className="space-y-3 pt-2">
                        <div
                            className="flex items-center justify-between cursor-pointer group/label"
                            onClick={() => setShowApprovers(!showApprovers)}
                        >
                            <label className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 cursor-pointer group-hover/label:text-primary transition-colors">
                                Approvers ({approvers.length})
                            </label>
                            {!showApprovers && (
                                <div className="flex -space-x-2 animate-in fade-in slide-in-from-right-2">
                                    {approvers.map((a, i) => (
                                        <img
                                            key={i}
                                            src={a.avatar}
                                            className="size-5 rounded-full border-2 border-white dark:border-slate-900 shadow-sm"
                                            alt=""
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showApprovers ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/50 space-y-3">
                                {approvers.map((approver, idx) => (
                                    <div key={idx} className="flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300" style={{ animationDelay: `${idx * 50}ms` }}>
                                        <div className="relative">
                                            <img
                                                src={approver.avatar}
                                                alt={approver.name}
                                                className="size-8 rounded-full border-2 border-white dark:border-slate-700 shadow-sm"
                                            />
                                            {idx < approvers.length - 1 && (
                                                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-slate-200 dark:bg-slate-700" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[11px] font-bold text-slate-900 dark:text-white truncate uppercase tracking-tight">{approver.name}</p>
                                            <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{approver.role}</p>
                                        </div>
                                        <div className="size-2 rounded-full bg-slate-200 dark:bg-slate-700" />
                                    </div>
                                ))}
                                <p className="text-[11px] font-bold text-primary text-center mt-2 cursor-pointer hover:underline" onClick={() => setShowApprovers(false)}>
                                    Hide Details
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-[2rem] text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default LeaveRequestCard;

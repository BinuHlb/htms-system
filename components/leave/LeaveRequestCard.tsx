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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(newLeave);
    };

    return (
        <div className={`bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm transition-all hover:shadow-md ${className}`}>
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">add_circle</span>
                Request Leave
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Leave Type</label>
                        <select
                            value={newLeave.type}
                            onChange={e => setNewLeave({ ...newLeave, type: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer appearance-none shadow-sm"
                        >
                            <option>Annual Leave</option>
                            <option>Sick Leave</option>
                            <option>Casual Leave</option>
                            <option>Compensatory Off</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Start Date</label>
                            <input
                                required
                                type="date"
                                value={newLeave.start}
                                onChange={e => setNewLeave({ ...newLeave, start: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 shadow-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">End Date</label>
                            <input
                                required
                                type="date"
                                value={newLeave.end}
                                onChange={e => setNewLeave({ ...newLeave, end: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Reason for Leave</label>
                        <textarea
                            required
                            placeholder="Briefly describe your request..."
                            value={newLeave.reason}
                            onChange={e => setNewLeave({ ...newLeave, reason: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 min-h-[120px] resize-none shadow-sm"
                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-[2rem] text-sm font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default LeaveRequestCard;

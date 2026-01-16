import React, { useState } from 'react';
import PageSubHeader from '../components/PageSubHeader';
import PageContent from '../components/PageContent';
import LeaveBalanceCard, { LeaveBalance } from '../components/leave/LeaveBalanceCard';
import LeavePlanningCalendar from '../components/leave/LeavePlanningCalendar';
import LeaveHistoryCard, { LeaveHistoryItem } from '../components/leave/LeaveHistoryCard';

import LeaveRequestCard from '../components/leave/LeaveRequestCard';
import PendingLeaveRequests, { PendingRequest } from '../components/leave/PendingLeaveRequests';

export interface EmployeeLeave {
    id: string;
    name: string;
    avatar: string;
    dates: string[]; // ISO format YYYY-MM-DD
    type: string;
}

const Leave: React.FC = () => {
    const [balances, setBalances] = useState<LeaveBalance[]>([
        { type: 'Annual Leave', remaining: 12, total: 25, color: 'blue' },
        { type: 'Sick Leave', remaining: 5, total: 10, color: 'emerald' },
        { type: 'Casual Leave', remaining: 3, total: 5, color: 'amber' },
        { type: 'Unpaid Leave', remaining: 2, total: 2, color: 'purple' },
    ]);

    const [history, setHistory] = useState<LeaveHistoryItem[]>([
        { id: '1', type: 'Annual Leave', start: '2024-05-07', end: '2024-05-09', days: 3, status: 'Completed', date: '2d ago' },
    ]);

    const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([
        {
            id: 'req-1',
            type: 'Annual Leave',
            start: '2026-02-12',
            end: '2026-02-15',
            days: 4,
            approvers: [
                { name: 'John Doe', role: 'Manager', status: 'approved' },
                { name: 'Sarah Chen', role: 'HR', status: 'pending' },
                { name: 'Marcus T', role: 'Director', status: 'pending' },
            ]
        },
        {
            id: 'req-2',
            type: 'Casual Leave',
            start: '2026-02-25',
            end: '2026-02-25',
            days: 1,
            approvers: [
                { name: 'John Doe', role: 'Manager', status: 'approved' },
                { name: 'Sarah Chen', role: 'HR', status: 'approved' },
                { name: 'Marcus T', role: 'Director', status: 'rejected' },
            ]
        }
    ]);

    const [planningDates, setPlanningDates] = useState<string[]>(['2026-01-14', '2026-01-22']);

    // Mock team leave data
    const teamLeaves: EmployeeLeave[] = [
        { id: '1', name: 'Sarah Chen', avatar: '180', dates: ['2026-01-20', '2026-01-21', '2026-01-22'], type: 'Annual' },
        { id: '2', name: 'Alex Rivera', avatar: '191', dates: ['2026-01-15', '2026-01-16'], type: 'Sick' },
        { id: '3', name: 'Marcus Thompson', avatar: '192', dates: ['2026-01-28', '2026-01-29', '2026-01-30'], type: 'Annual' },
    ];

    const allTeamLeaveDates = teamLeaves.flatMap(l => l.dates);

    const calculateDays = (start: string, end: string) => {
        if (!start || !end) return 0;
        const d1 = new Date(start);
        const d2 = new Date(end);
        const diff = d2.getTime() - d1.getTime();
        return Math.ceil(diff / (1000 * 3600 * 24)) + 1;
    };

    const handleDateToggle = (date: string) => {
        setPlanningDates(prev =>
            prev.includes(date)
                ? prev.filter(d => d !== date)
                : [...prev, date]
        );
    };

    const handleRequestSubmit = (formData: any) => {
        const days = calculateDays(formData.start, formData.end);
        const request: LeaveHistoryItem = {
            id: Math.random().toString(36).substr(2, 9),
            type: formData.type,
            start: formData.start,
            end: formData.end,
            days,
            status: 'Pending',
            date: 'Just now'
        };
        setHistory([request, ...history]);

        // Simulate approval and balance update
        setTimeout(() => {
            setHistory(prev => prev.map(h => h.id === request.id ? { ...h, status: 'Approved' } : h));
            setBalances(prev => prev.map(b => b.type === request.type ? { ...b, remaining: b.remaining - days } : b));
        }, 3000);
    };

    const handleRejoin = (id: string) => {
        setHistory(prev => prev.map(h => h.id === id ? { ...h, status: 'Completed' } : h));
    };

    return (
        <div className="p-8 max-w-[1400px] mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PageSubHeader
                title="Leave & Absence Hub"
                subtitle="Manage your time off requests and check balances."
            />

            <PageContent
                layout="standard"
                className="!items-stretch"
                main={
                    <div className="space-y-8">
                        <LeaveBalanceCard balances={balances} />

                        <PendingLeaveRequests requests={pendingRequests} />

                        <LeavePlanningCalendar
                            selectedDates={planningDates}
                            teamDates={allTeamLeaveDates}
                            onDateToggle={handleDateToggle}
                        />

                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center justify-between">
                                Team Leave Overview
                                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">January 2026</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {teamLeaves.map((member) => (
                                    <div key={member.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100/50 dark:border-slate-800/50 hover:border-primary/20 dark:hover:border-primary/40 transition-all group">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="size-12 rounded-xl bg-slate-200 dark:bg-slate-700 bg-center bg-cover shadow-sm group-hover:scale-110 transition-transform"
                                                style={{ backgroundImage: `url('https://picsum.photos/id/${member.avatar}/200/200')` }}
                                            />
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white">{member.name}</p>
                                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{member.type} Leave</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-black text-primary uppercase tracking-tighter">
                                                {member.dates[0]} to {member.dates[member.dates.length - 1]}
                                            </p>
                                            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500">({member.dates.length} Days)</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                sidebar={
                    <div className="space-y-8 sticky top-8">
                        <LeaveRequestCard onSubmit={handleRequestSubmit} />
                        <LeaveHistoryCard
                            history={history}
                            onRejoin={handleRejoin}
                        />
                    </div>
                }
            />
        </div>
    );
};

export default Leave;

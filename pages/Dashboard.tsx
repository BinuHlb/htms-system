import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import NewsCard, { NewsItem } from '../components/dashboard/NewsCard';
import MiniStatsCard, { MiniStatItem } from '../components/dashboard/MiniStatsCard';
import PendingApprovalsCard, { ApprovalItem } from '../components/dashboard/PendingApprovalsCard';
import WeeklyAttendanceCard, { AttendanceDay, AttendanceStat } from '../components/dashboard/WeeklyAttendanceCard';
import PageSubHeader, { PageAction } from '../components/common/PageSubHeader';
import PageContent from '../components/common/PageContent';

const Dashboard: React.FC = () => {
    const attendanceData: AttendanceDay[] = [
        { day: 'Mon', time: '08:52', status: 'On Time', color: 'text-green-500', bg: 'bg-slate-50' },
        { day: 'Tue', time: '09:05', status: 'Late (5m)', color: 'text-amber-500', bg: 'bg-slate-50' },
        { day: 'Wed', time: '08:45', status: 'Active', color: 'text-primary', bg: 'bg-primary/10', ring: 'ring-2 ring-primary' },
        { day: 'Thu', time: '--:--', status: 'Upcoming', color: 'text-slate-400', bg: 'bg-slate-50', opacity: 'opacity-50' },
        { day: 'Fri', time: '--:--', status: 'Upcoming', color: 'text-slate-400', bg: 'bg-slate-50', opacity: 'opacity-50' },
    ];

    const attendanceStats: AttendanceStat[] = [
        { label: 'Weekly Total', value: '24h 42m' },
        { label: 'Average Clock-in', value: '08:54 AM' }
    ];

    const pendingApprovals = [
        { id: 1, name: 'Marcus Chen', role: 'Developer', type: 'Sick Leave', duration: '2 Days (Oct 24-25)', avatar: 'https://picsum.photos/id/101/40/40' },
        { id: 2, name: 'Sarah Jenkins', role: 'Designer', type: 'Expense Claim', duration: 'Travel Reimbursement', avatar: 'https://picsum.photos/id/102/40/40' },
    ];

    const newsData: NewsItem[] = [
        {
            id: 1,
            date: 'October 22, 2024',
            title: 'Annual Performance Review Cycle 2024',
            description: 'The annual review process starts next week. Please ensure all self-assessments are completed.'
        },
        {
            id: 2,
            date: 'October 19, 2024',
            title: 'New Healthcare Benefits Package',
            description: "We've partnered with a new provider to enhance dental and vision coverage for all full-time employees."
        }
    ];

    const miniStatsData: MiniStatItem[] = [
        {
            id: 'payday',
            label: 'Upcoming Anniversary',
            value: 'In 8 Days',
            icon: 'cake',
            iconBgColor: 'bg-amber-100',
            iconTextColor: 'text-amber-600'
        },
        {
            id: 'birthday',
            label: 'Upcoming Birthday',
            value: 'Tomorrow',
            icon: 'cake',
            iconBgColor: 'bg-indigo-100',
            iconTextColor: 'text-indigo-600'
        }
    ];



    return (
        <div className="p-8 max-w-[1400px] mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PageSubHeader />

            <PageContent
                layout="standard"
                main={
                    <>
                        {/* Weekly Attendance */}
                        <WeeklyAttendanceCard
                            title="Weekly Attendance"
                            icon="calendar_month"
                            period="Oct 21 - Oct 25, 2024"
                            data={attendanceData}
                            stats={attendanceStats}
                        />

                        {/* Pending Approvals */}
                        <PendingApprovalsCard
                            title="Pending Approvals"
                            icon="rule"
                            count={3}
                            items={pendingApprovals as ApprovalItem[]}
                            onViewAllClick={() => console.log('View all approvals')}
                            onApproveClick={(item) => console.log('Approved', item.name)}
                            onRejectClick={(item) => console.log('Rejected', item.name)}
                        />
                    </>
                }
                sidebar={
                    <>
                        <button
                            onClick={() => console.log('Opening suggestion form...')}
                            className="w-full group relative p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 overflow-hidden"
                        >
                            <div className="size-11 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform duration-300">lightbulb</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Submit Suggestion</span>
                                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">Share your ideas</span>
                            </div>
                            <div className="ml-auto size-8 rounded-full flex items-center justify-center text-slate-300 group-hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-xl">chevron_right</span>
                            </div>
                            <div className="absolute top-0 right-0 size-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
                        </button>

                        {/* Leave Balance */}
                        <StatCard
                            title="Annual Leave"
                            value="14.5"
                            label="Days Available"
                            progress={65}
                            icon="beach_access"
                            footerLeft="Accrual: Nov 1"
                            footerRight="View History"
                        />

                        {/* News & Circulars */}
                        <NewsCard
                            title="News & Circulars"
                            icon="campaign"
                            items={newsData}
                        />

                        {/* Mini Stats */}
                        <MiniStatsCard items={miniStatsData} />
                    </>
                }
            />
        </div>
    );
};

export default Dashboard;

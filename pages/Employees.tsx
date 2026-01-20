import React, { useState } from 'react';
import PageSubHeader from '../components/common/PageSubHeader';
import PageContent from '../components/common/PageContent';
import TeamPerformanceCard from '../components/employees/TeamPerformanceCard';
import AnnouncementCard from '../components/employees/AnnouncementCard';
import EmployeeDirectoryView from '../components/employees/EmployeeDirectoryView';
import OrgTreeView from '../components/employees/OrgTreeView';
import { employeesData, orgStructureData } from '../data/employees';
import MyTeamSection from '../components/employees/MyTeamSection';

const Employees: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'directory' | 'org' | 'team'>('team');

    const teamMembersWithStatus = employeesData.map((emp, index) => {
        const statuses: ('on-time' | 'late' | 'not-checked-in' | 'off')[] = ['on-time', 'late', 'not-checked-in', 'off'];
        const status = statuses[index % 4];
        const times = ['08:45 AM', '09:12 AM', '', ''];
        const time = times[index % 4];

        return {
            ...emp,
            status,
            time: time || undefined,
        };
    });

    const MyTeamView = () => (
        <PageContent
            layout="standard"
            main={
                <MyTeamSection teamMembers={teamMembersWithStatus as any} />
            }
            sidebar={
                <div className="space-y-6">
                    <TeamPerformanceCard
                        title="Team Stats"
                        members={employeesData.slice(0, 3).map(emp => ({
                            id: emp.id.toString(),
                            name: emp.name,
                            role: emp.role,
                            avatar: emp.avatar,
                            attendanceRate: 95 + Math.floor(Math.random() * 5),
                            lateCount: Math.floor(Math.random() * 2)
                        }))}
                    />
                    <AnnouncementCard
                        title="Team Announcements"
                        subtitle="Post updates for your direct reports."
                        announcements={[
                            { id: '1', title: 'Design Sprint V2 kicks off next Monday. Please review the brief.', time: '2h ago', tag: 'Important' }
                        ]}
                    />
                </div>
            }
        />
    );

    return (
        <div className="p-8 max-w-[1400px] mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PageSubHeader
                actions={[
                    {
                        id: 'add',
                        label: 'Add Employee',
                        icon: 'person_add',
                        variant: 'ghost',
                        onClick: () => console.log('Add employee')
                    }
                ]}
                tabs={[
                    { id: 'team', label: 'My Team' },
                    { id: 'directory', label: 'Directory' },
                    { id: 'org', label: 'Organization Tree' }
                ]}
                activeTab={activeTab}
                onTabChange={(id) => setActiveTab(id as any)}
            />

            <div className="min-h-[600px]">
                {activeTab === 'directory' && (
                    <PageContent layout="full">
                        <EmployeeDirectoryView employees={employeesData} />
                    </PageContent>
                )}
                {activeTab === 'org' && (
                    <PageContent layout="full">
                        <OrgTreeView data={orgStructureData} />
                    </PageContent>
                )}
                {activeTab === 'team' && <MyTeamView />}
            </div>
        </div>
    );
};

export default Employees;

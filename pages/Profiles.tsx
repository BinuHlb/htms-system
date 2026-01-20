import React from 'react';
import PageSubHeader from '../components/common/PageSubHeader';
import PageContent from '../components/common/PageContent';
import ProfileHero from '../components/profiles/ProfileHero';
import InfoCard from '../components/profiles/InfoCard';
import CompanyDirectory from '../components/profiles/CompanyDirectory';

const Profiles: React.FC = () => {
    const directory = [
        { name: 'Sarah Chen', role: 'Lead UI/UX Designer', dept: 'Engineering', active: false, avatarId: 201 },
        { name: 'Alex Rivera', role: 'Senior Product Designer', dept: 'Engineering', active: true, me: true, avatarId: 191 },
        { name: 'Marcus Thompson', role: 'Product Manager', dept: 'Product', active: false, avatarId: 203 },
        { name: 'Jamie Lee', role: 'Frontend Engineer', dept: 'Engineering', active: false, avatarId: 204 },
    ];

    const contactItems = [
        { label: 'Work Email', value: 'alex.rivera@company.com' },
        { label: 'Mobile Phone', value: '+1 (555) 012-3456' },
        { label: 'Emergency Contact', value: 'Maria Rivera (Spouse) - •••-••••' }
    ];

    const identificationItems = [
        { label: 'Date of Birth', value: 'March 14, 1992 (32 years)' },
        { label: 'National ID', value: '•••• •••• 4492' },
        {
            label: 'Documents',
            value: (
                <div className="flex gap-3">
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Passport</p>
                        <p className="text-[12px] font-bold text-primary mt-1 uppercase">Verified</p>
                    </div>
                    <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Visa</p>
                        <p className="text-[12px] font-bold text-slate-400 mt-1 uppercase">N/A</p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="p-8 max-w-7xl mx-auto w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <PageSubHeader />

            <PageContent
                layout="standard"
                main={
                    <div className="space-y-8">
                        <ProfileHero
                            name="Alex Rivera"
                            role="Senior Product Designer"
                            employeeId="EMP-1024"
                            department="Engineering"
                            avatarUrl="https://picsum.photos/id/191/200/200"
                            onMessageClick={() => console.log('Message Alex')}
                            onEditClick={() => console.log('Edit profile')}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <InfoCard
                                title="Contact Details"
                                icon="contact_phone"
                                items={contactItems}
                                onEditClick={() => console.log('Edit contact')}
                                actions={
                                    <button
                                        onClick={() => console.log('Export CV')}
                                        className="size-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all group"
                                        title="Export CV"
                                    >
                                        <span className="material-symbols-outlined text-[20px] group-hover:fill-1">print</span>
                                    </button>
                                }
                            />
                            <InfoCard
                                title="Identification"
                                icon="badge"
                                items={identificationItems}
                                onEditClick={() => console.log('Edit ID')}
                            />
                        </div>
                    </div>
                }
                sidebar={
                    <CompanyDirectory
                        people={directory}
                        onPersonClick={(p) => console.log('View', p.name)}
                        onViewAllClick={() => console.log('View all directory')}
                    />
                }
            />
        </div>
    );
};

export default Profiles;

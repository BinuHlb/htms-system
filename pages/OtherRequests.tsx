import React, { useState } from 'react';
import PassportWithdrawal from '../components/requests/PassportWithdrawal';
import CertificateRequest from '../components/requests/CertificateRequest';
import PasswordChange from '../components/requests/PasswordChange';
import DirectoryView from '../components/requests/DirectoryView';

type RequestType = 'passport' | 'certificate' | 'password' | 'payslip-password' | 'directory';

interface MenuItem {
    id: RequestType;
    label: string;
    icon: string;
}

const OtherRequests: React.FC = () => {
    const [activeRequest, setActiveRequest] = useState<RequestType>('passport');

    const menuItems: MenuItem[] = [
        { id: 'passport', label: 'Passport Withdrawal', icon: 'wallet' },
        { id: 'certificate', label: 'Certificate Request', icon: 'description' },
        { id: 'password', label: 'Change Password', icon: 'lock_reset' },
        { id: 'payslip-password', label: 'Change Payslip Password', icon: 'key' },
        { id: 'directory', label: 'Employee Directory', icon: 'person_search' },
    ];

    const renderContent = () => {
        switch (activeRequest) {
            case 'passport':
                return <PassportWithdrawal />;
            case 'certificate':
                return <CertificateRequest />;
            case 'password':
                return <PasswordChange type="login" />;
            case 'payslip-password':
                return <PasswordChange type="payslip" />;
            case 'directory':
                return <DirectoryView />;
            default:
                return null;
        }
    };

    return (
        <div className="p-8 max-w-[1400px] mx-auto w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">


            <div className="flex flex-col lg:flex-row gap-0 items-start -mx-8 -mb-8 min-h-[calc(100vh-200px)]">
                {/* Classic Sidebar Style */}
                <aside className="lg:w-80 w-full flex-shrink-0 border-r border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 p-8 space-y-10 flex flex-col self-stretch sticky top-16">
                    <div className="space-y-1.5 px-2">
                        <h3 className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Workspace</h3>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Corporate Headquarters</p>
                    </div>

                    <nav className="space-y-1.5">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveRequest(item.id)}
                                className={`w-full flex items-center gap-3.5 px-5 py-4 rounded-[1.25rem] transition-all font-bold text-[13px] group
                                    ${activeRequest === item.id
                                        ? 'bg-primary/10 dark:bg-primary/20 text-primary shadow-sm ring-1 ring-primary/20'
                                        : 'text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:shadow-sm'}
                                `}
                            >
                                <span className={`material-symbols-outlined text-[22px] transition-transform duration-300 group-hover:scale-110 ${activeRequest === item.id ? 'fill-1' : ''}`}>
                                    {item.icon}
                                </span>
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto p-6 bg-primary/5 dark:bg-primary/10 rounded-[2rem] border border-primary/10 dark:border-primary/20">
                        <p className="text-[12px] font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            System Secure
                        </p>
                        <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 leading-relaxed uppercase tracking-tighter">
                            All requests are encrypted and logged for security compliance.
                        </p>
                    </div>
                </aside>

                {/* Main Area */}
                <main className="flex-1 p-10 overflow-hidden">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default OtherRequests;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../types';

interface SidebarProps {
    activePage: Page;
    onPageChange: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
    const navItems = [
        { id: Page.Dashboard, label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
        { id: Page.Employees, label: 'Teams', icon: 'groups', path: '/employees' },
        { id: Page.Profiles, label: 'My Profile', icon: 'person', path: '/profiles' },
        { id: Page.Leave, label: 'Leave', icon: 'calendar_today', path: '/leave' },
        { id: Page.Attendance, label: 'Time & Attendance', icon: 'schedule', path: '/attendance' },
        { id: Page.Loan, label: 'Loan', icon: 'payments', path: '/loans' },
        { id: Page.Expense, label: 'Expense', icon: 'receipt_long', path: '/expenses' },
        { id: Page.OtherRequests, label: 'Other Requests', icon: 'apps', path: '/other-requests' },
    ];

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col bg-white dark:bg-[#111722] border-r border-slate-200 dark:border-slate-800 z-20">
            <div className="p-6 flex items-center gap-3">
                <div className="bg-primary size-10 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined font-bold">cloud_circle</span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-base font-bold leading-none font-display dark:text-white">HRMS</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-[12px] uppercase tracking-widest font-bold mt-1">Management</p>
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        onClick={() => onPageChange(item.id)}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 font-medium
                            ${isActive
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}
                        `}
                    >
                        <span className={`material-symbols-outlined text-[22px] ${activePage === item.id ? 'fill-1' : ''}`}>
                            {item.icon}
                        </span>
                        <p className={`text-sm ${activePage === item.id ? 'font-bold' : 'font-medium'}`}>{item.label}</p>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 px-2 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <div
                        className="size-10 rounded-full bg-slate-300 bg-center bg-cover border border-white dark:border-slate-700"
                        style={{ backgroundImage: `url('https://picsum.photos/id/64/100/100')` }}
                    />
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">Alex Johnson</p>
                        <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">HR Manager</p>
                    </div>
                    <button className="ml-auto text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <span className="material-symbols-outlined text-lg">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

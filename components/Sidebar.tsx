
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
        { id: Page.Profiles, label: 'Profiles', icon: 'person', path: '/profiles' },
        { id: Page.Leave, label: 'Leave', icon: 'calendar_today', path: '/leave' },
        { id: Page.Attendance, label: 'Time & Attendance', icon: 'schedule', path: '/attendance' },
        { id: Page.Financials, label: 'Financials', icon: 'account_balance_wallet', path: '/financials' },
        { id: Page.Admin, label: 'Admin', icon: 'settings', path: '/admin' },
    ];

    return (
        <aside className="w-64 flex-shrink-0 flex flex-col bg-white dark:bg-[#111722] border-r border-slate-200 dark:border-slate-800 z-20">
            <div className="p-6 flex items-center gap-3">
                <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white shadow-sm">
                    <span className="material-symbols-outlined font-bold">corporate_fare</span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-base font-bold leading-none font-display">HRMS Central</h1>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mt-1">Management Portal</p>
                </div>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        onClick={() => onPageChange(item.id)}
                        className={({ isActive }) => `
                            flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                            ${isActive 
                                ? 'bg-primary/10 text-primary shadow-sm ring-1 ring-primary/20' 
                                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                        `}
                    >
                        <span className={`material-symbols-outlined text-[22px] ${activePage === item.id ? 'fill-1' : ''}`}>
                            {item.icon}
                        </span>
                        <p className={`text-sm ${activePage === item.id ? 'font-bold' : 'font-medium'}`}>{item.label}</p>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 mt-auto border-t border-slate-100">
                <div className="flex items-center gap-3 px-2 py-3 bg-slate-50 rounded-xl">
                    <div 
                        className="size-10 rounded-full bg-slate-300 bg-center bg-cover border border-white"
                        style={{ backgroundImage: `url('https://picsum.photos/id/64/100/100')` }}
                    />
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-xs font-bold text-slate-900 truncate">Alex Johnson</p>
                        <p className="text-[10px] text-slate-500 font-medium">HR Manager</p>
                    </div>
                    <button className="ml-auto text-slate-400 hover:text-slate-600">
                        <span className="material-symbols-outlined text-lg">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

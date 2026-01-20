import React from 'react';

export interface PageAction {
    id: string;
    label: string;
    icon: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'white' | 'ghost';
}

export interface PageTab {
    id: string;
    label: string;
}

interface PageSubHeaderProps {
    title?: string;
    subtitle?: string;
    badge?: string;
    actions?: PageAction[];
    tabs?: PageTab[];
    activeTab?: string;
    onTabChange?: (tabId: string) => void;
}

const PageSubHeader: React.FC<PageSubHeaderProps> = ({
    title,
    subtitle,
    badge,
    actions = [],
    tabs = [],
    activeTab,
    onTabChange,
}) => {
    return (
        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in slide-in-from-top-4 duration-500 ${(title || subtitle || badge) ? 'mb-0' : 'mb-[-12px]'}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
                {(title || subtitle || badge) && (
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            {badge && (
                                <span className="px-3 py-1 bg-primary/10 text-primary text-[12px] font-bold uppercase tracking-widest rounded-full">
                                    {badge}
                                </span>
                            )}
                            {title && (
                                <h2 className="text-3xl font-bold tracking-tight font-display text-slate-900 dark:text-white leading-tight">
                                    {title}
                                </h2>
                            )}
                        </div>
                        {subtitle && <p className="text-slate-500 dark:text-slate-400 font-medium">{subtitle}</p>}
                    </div>
                )}

                {/* Tabs Logic */}
                {tabs.length > 0 && (
                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl w-fit">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => onTabChange?.(tab.id)}
                                className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab.id
                                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Actions Logic */}
            {actions.length > 0 && (
                <div className="flex items-center gap-3">
                    {actions.map((action) => {
                        const isPrimary = action.variant === 'primary';
                        const isSecondary = action.variant === 'secondary';
                        const isGhost = action.variant === 'ghost';

                        return (
                            <button
                                key={action.id}
                                onClick={action.onClick}
                                className={`
                                    flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all active:scale-95
                                    ${isPrimary ? 'bg-primary text-white hover:bg-primary-dark shadow-sm shadow-primary/20' : ''}
                                    ${isSecondary ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white shadow-sm' : ''}
                                    ${isGhost ? 'bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary' : ''}
                                    ${!isPrimary && !isSecondary && !isGhost ? 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 shadow-sm' : ''}
                                `}
                            >
                                <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
                                {action.label}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PageSubHeader;

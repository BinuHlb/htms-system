import React from 'react';

export interface InfoItem {
    label: string;
    value: string | React.ReactNode;
}

interface InfoCardProps {
    title: string;
    icon: string;
    items: InfoItem[];
    onEditClick?: () => void;
    editable?: boolean;
    actions?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    icon,
    items,
    onEditClick,
    editable = true,
    actions,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 space-y-8 h-full border border-transparent dark:border-slate-800">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg flex items-center gap-3 tracking-tight dark:text-white">
                    <span className="material-symbols-outlined text-primary fill-1">{icon}</span>
                    {title}
                </h3>
                <div className="flex items-center gap-2">
                    {actions}
                    {editable && (
                        <button
                            onClick={onEditClick}
                            className="size-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all group"
                            title="Edit Section"
                        >
                            <span className="material-symbols-outlined text-[20px] group-hover:fill-1">edit</span>
                        </button>
                    )}
                </div>
            </div>
            <div className="space-y-6">
                {items.map((item, idx) => (
                    <div key={idx}>
                        <p className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{item.label}</p>
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-200 mt-1">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoCard;

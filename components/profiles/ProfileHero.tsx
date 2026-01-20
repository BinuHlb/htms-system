import React from 'react';

interface ProfileHeroProps {
    name: string;
    role: string;
    employeeId: string;
    department: string;
    avatarUrl: string;
    statusColor?: string;
    onMessageClick?: () => void;
    onEditClick?: () => void;
}

const ProfileHero: React.FC<ProfileHeroProps> = ({
    name,
    role,
    employeeId,
    department,
    avatarUrl,
    statusColor = 'bg-green-500',
    onMessageClick,
    onEditClick,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden mt-6 border border-transparent dark:border-slate-800 relative">
            <div className="h-32 bg-gradient-to-r from-primary/30 to-primary/10 dark:from-primary/20 dark:to-primary/5 relative">
                <div className="absolute bottom-4 right-10 flex items-center gap-2 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 dark:border-slate-800/40 text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-white/60 dark:hover:bg-slate-900/60 shadow-sm">
                    <span className="text-slate-600 dark:text-slate-400">{employeeId}</span>
                    <span className="w-px h-3 bg-slate-400/30 dark:bg-slate-600/30"></span>
                    <span className="text-primary">{department}</span>
                </div>
            </div>
            <div className="px-10 pb-10 -mt-16 flex flex-col md:flex-row items-end gap-8">
                <div className="relative">
                    <div
                        className="size-40 rounded-[32px] border-8 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 bg-center bg-cover shadow-2xl"
                        style={{ backgroundImage: `url('${avatarUrl}')` }}
                    />
                    <div className={`absolute -bottom-2 -right-2 ${statusColor} size-8 rounded-full border-4 border-white dark:border-slate-900 shadow-lg`} />
                </div>
                <div className="pt-20 flex-1">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{name}</h2>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 dark:text-slate-400 font-bold uppercase text-[12px] tracking-widest mt-2">
                        <span>{role}</span>
                    </div>
                </div>
                <div className="pb-2 flex gap-1">
                    <button
                        onClick={onMessageClick}
                        className="size-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all group"
                        title="Message"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:fill-1">chat</span>
                    </button>
                    <button
                        onClick={onEditClick}
                        className="size-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary/10 hover:text-primary transition-all group"
                        title="Edit Profile"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:fill-1">edit</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileHero;

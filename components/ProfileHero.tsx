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
        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden mt-6 border border-transparent dark:border-slate-800">
            <div className="h-32 bg-gradient-to-r from-primary/30 to-primary/10 dark:from-primary/20 dark:to-primary/5"></div>
            <div className="px-10 pb-10 -mt-16 flex flex-col md:flex-row items-end gap-8">
                <div className="relative">
                    <div
                        className="size-40 rounded-[32px] border-8 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 bg-center bg-cover shadow-2xl"
                        style={{ backgroundImage: `url('${avatarUrl}')` }}
                    />
                    <div className={`absolute -bottom-2 -right-2 ${statusColor} size-8 rounded-full border-4 border-white dark:border-slate-900 shadow-lg`} />
                </div>
                <div className="pt-20 flex-1">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{name}</h2>
                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-widest mt-1">
                        <span>{role}</span>
                        <span className="size-1 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                        <span>{employeeId}</span>
                        <span className="size-1 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                        <span className="bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full">{department}</span>
                    </div>
                </div>
                <div className="pb-2 flex gap-3">
                    <button
                        onClick={onMessageClick}
                        className="px-6 py-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md transition-all"
                    >
                        Message
                    </button>
                    <button
                        onClick={onEditClick}
                        className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileHero;

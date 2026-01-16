import React from 'react';

export interface Announcement {
    id: string;
    title: string;
    time: string;
    tag: string;
}

interface AnnouncementCardProps {
    title: string;
    subtitle: string;
    announcements: Announcement[];
    onNewClick?: () => void;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
    title,
    subtitle,
    announcements,
    onNewClick,
}) => {
    return (
        <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20 h-fit sticky top-24">
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p className="text-primary-light text-sm font-medium mb-6">{subtitle}</p>

            <div className="space-y-4">
                {announcements.map(ann => (
                    <div key={ann.id} className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[12px] bg-white/20 px-2 py-1 rounded text-white font-bold uppercase tracking-widest">{ann.tag}</span>
                            <span className="text-[12px] text-white/60 font-bold">{ann.time}</span>
                        </div>
                        <p className="text-sm font-bold leading-snug">{ann.title}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={onNewClick}
                className="w-full py-3 mt-6 bg-white text-primary rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-colors shadow-lg"
            >
                + New Announcement
            </button>
        </div>
    );
};

export default AnnouncementCard;

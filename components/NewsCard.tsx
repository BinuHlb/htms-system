import React from 'react';

export interface NewsItem {
    id: string | number;
    date: string;
    title: string;
    description: string;
}

interface NewsCardProps {
    title: string;
    icon: string;
    items: NewsItem[];
    onViewAllClick?: () => void;
    onItemClick?: (item: NewsItem) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
    title,
    icon,
    items,
    onViewAllClick,
    onItemClick,
}) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-50 dark:border-slate-800">
            <div className="p-6 pb-2">
                <h3 className="font-bold text-lg flex items-center gap-2 text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary fill-1">{icon}</span>
                    {title}
                </h3>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-slate-800">
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => onItemClick?.(item)}
                        className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group"
                    >
                        <p className="text-[12px] text-primary font-bold mb-2 uppercase tracking-widest">{item.date}</p>
                        <h4 className="font-bold text-sm leading-snug text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 text-center">
                <button
                    onClick={onViewAllClick}
                    className="text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-primary transition-colors uppercase tracking-widest"
                >
                    View All Announcements
                </button>
            </div>
        </div>
    );
};

export default NewsCard;

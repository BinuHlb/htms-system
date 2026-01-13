
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-[#111722]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16">
            <div className="flex items-center gap-4 w-1/3">
                <div className="relative w-full max-w-sm">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                    <input 
                        className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all" 
                        placeholder="Search employees, tasks, reports..." 
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-lg">timer</span>
                    <span>Time-In / Time-Out</span>
                </button>
                
                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors relative">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>

                <div className="w-px h-6 bg-slate-200"></div>

                <div 
                    className="size-10 rounded-full bg-center bg-cover border-2 border-primary/20 cursor-pointer hover:ring-2 hover:ring-primary/30 transition-all"
                    style={{ backgroundImage: `url('https://picsum.photos/id/65/100/100')` }}
                />
            </div>
        </header>
    );
};

export default Header;

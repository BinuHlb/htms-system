
import React from 'react';

const Header: React.FC = () => {
    const [isClockedIn, setIsClockedIn] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [startTime, setStartTime] = React.useState<Date | null>(null);
    const [elapsedTime, setElapsedTime] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
            if (isClockedIn && startTime) {
                setElapsedTime(Math.floor((new Date().getTime() - startTime.getTime()) / 1000));
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [isClockedIn, startTime]);

    return (
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-[#111722]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16">
            <div className="flex items-center gap-4 w-1/3">
                <div className="relative w-full max-w-sm">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                    <input
                        className="w-full pl-11 pr-4 py-2.5 text-sm rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all placeholder:text-slate-400 font-medium"
                        placeholder="Search anything..."
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="hidden md:flex flex-col items-end mr-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{currentTime.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                        <span className="text-sm font-black text-slate-900 tabular-nums">{currentTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>

                    <div className="relative group">
                        {isClockedIn ? (
                            <div className="flex items-center p-1 bg-slate-900 rounded-2xl shadow-lg border-2 border-slate-700 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="px-4 flex flex-col justify-center items-start mr-2">
                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        Work Timer
                                    </span>
                                    <span className="text-lg font-black text-white tabular-nums tracking-tight leading-none mt-0.5">
                                        {new Date(elapsedTime * 1000).toISOString().substr(11, 8)}
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        setIsClockedIn(false);
                                        setElapsedTime(0);
                                    }}
                                    className="h-10 px-4 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center gap-2 group-hover:pr-6"
                                >
                                    <span className="material-symbols-outlined text-lg filled">stop_circle</span>
                                    <span className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap">Stop</span>
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => {
                                    setIsClockedIn(true);
                                    setStartTime(new Date());
                                }}
                                className="px-6 py-2.5 rounded-2xl bg-slate-900 text-white border-2 border-transparent shadow-lg shadow-slate-900/30 hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-lg">timer</span>
                                <span className="text-sm font-bold">Time In</span>
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors relative">
                        <span className="material-symbols-outlined filled">notifications</span>
                        <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
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

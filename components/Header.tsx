
import React from 'react';

const Header: React.FC = () => {
    const [isClockedIn, setIsClockedIn] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [startTime, setStartTime] = React.useState<Date | null>(null);
    const [elapsedTime, setElapsedTime] = React.useState(0);

    // Swipe state
    const [swipePos, setSwipePos] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const trackRef = React.useRef<HTMLDivElement>(null);

    // Set initial position based on clock state
    React.useEffect(() => {
        if (!isDragging && trackRef.current) {
            const maxX = trackRef.current.clientWidth - 52;
            setSwipePos(isClockedIn ? maxX : 0);
        }
    }, [isClockedIn, isDragging]);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
            if (isClockedIn && startTime) {
                setElapsedTime(Math.floor((new Date().getTime() - startTime.getTime()) / 1000));
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [isClockedIn, startTime]);

    const handleStart = () => setIsDragging(true);

    const handleMove = (e: any) => {
        if (!isDragging || !trackRef.current) return;
        const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        const rect = trackRef.current.getBoundingClientRect();
        const maxX = rect.width - 52; // handle width
        const currentX = Math.max(0, Math.min(maxX, clientX - rect.left - 26));
        setSwipePos(currentX);

        if (!isClockedIn && currentX >= maxX - 5) {
            handleComplete();
        } else if (isClockedIn && currentX <= 5) {
            handleComplete();
        }
    };

    const handleEnd = () => {
        setIsDragging(false);
        if (trackRef.current) {
            const maxX = trackRef.current.clientWidth - 52;
            if (!isClockedIn) {
                if (swipePos < maxX - 5) setSwipePos(0);
            } else {
                if (swipePos > 5) setSwipePos(maxX);
            }
        }
    };

    const handleComplete = () => {
        setIsDragging(false);
        if (!isClockedIn) {
            setIsClockedIn(true);
            setStartTime(new Date());
            setSwipePos(trackRef.current ? trackRef.current.clientWidth - 52 : 0);
        } else {
            setIsClockedIn(false);
            setElapsedTime(0);
            setStartTime(null);
            setSwipePos(0);
        }
    };

    React.useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleMove, { passive: false });
            window.addEventListener('touchend', handleEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging]);

    return (
        <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-[#111722]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16">
            <div className="flex items-center gap-4 w-1/4">
                <div className="relative w-full max-w-sm">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                    <input
                        className="w-full pl-11 pr-4 py-2 text-sm rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white transition-all placeholder:text-slate-400 font-medium"
                        placeholder="Search anything..."
                        type="text"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    {/* Time & Date Display */}
                    <div className="hidden lg:flex flex-col items-end border-r border-slate-200 pr-4">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{currentTime.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                        <span className="text-sm font-black text-slate-900 tabular-nums leading-none mt-1">{currentTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>

                    {isClockedIn && (
                        <div className="flex flex-col items-center px-4 bg-slate-50 rounded-xl py-1 animate-in fade-in slide-in-from-top-2">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 opacity-60">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                On Clock
                            </span>
                            <span className="text-base font-black text-slate-900 tabular-nums leading-none tracking-tight">
                                {new Date(elapsedTime * 1000).toISOString().substr(11, 8)}
                            </span>
                        </div>
                    )}

                    {/* Swipe Component */}
                    <div
                        ref={trackRef}
                        className={`relative h-12 w-64 ${isClockedIn ? 'bg-red-50' : 'bg-slate-100'} rounded-[20px] p-1 flex items-center transition-colors overflow-hidden group border border-transparent select-none active:scale-[0.98] transition-all`}
                    >
                        {/* Clock In Label (Show when NOT clocked in) */}
                        {!isClockedIn && (
                            <div
                                className={`absolute right-4 flex items-center pointer-events-none transition-all duration-300
                                ${isDragging ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.12em] text-slate-500 flex items-center gap-1.5">
                                    Slide to Clock In
                                    <span className="material-symbols-outlined text-sm animate-pulse">chevron_right</span>
                                </span>
                            </div>
                        )}

                        {/* Clock Out Label (Show when clocked in) */}
                        {isClockedIn && (
                            <div
                                className={`absolute left-4 flex items-center pointer-events-none transition-all duration-300
                                ${isDragging ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.12em] text-red-400 flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-sm animate-pulse rotate-180">chevron_right</span>
                                    Slide to Clock Out
                                </span>
                            </div>
                        )}

                        {/* Drag Handle */}
                        <div
                            onMouseDown={handleStart}
                            onTouchStart={handleStart}
                            style={{
                                transform: `translateX(${swipePos}px)`,
                                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
                            }}
                            className={`
                                size-10 rounded-[16px] flex items-center justify-center cursor-grab active:cursor-grabbing z-20 shadow-lg active:shadow-xl
                                ${isClockedIn ? 'bg-red-500 text-white' : 'bg-slate-900 text-white'}
                            `}
                        >
                            <span className={`material-symbols-outlined text-[20px] transition-transform ${isDragging ? 'scale-110' : ''}`}>
                                {isClockedIn ? 'logout' : 'timer'}
                            </span>
                        </div>

                        {/* Professional Dynamic Fill */}
                        <div
                            className={`absolute top-1 bottom-1 rounded-[16px] transition-all opacity-15 ${isClockedIn ? 'bg-red-500' : 'bg-slate-900'}`}
                            style={{
                                left: isClockedIn ? `${swipePos}px` : '4px',
                                right: isClockedIn ? '4px' : 'auto',
                                width: isClockedIn ? 'auto' : `${swipePos + 40}px`,
                                transition: isDragging ? 'none' : 'all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)'
                            }}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors relative">
                        <span className="material-symbols-outlined filled">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                </div>

                <div className="w-px h-6 bg-slate-200"></div>

                <div
                    className="size-10 rounded-full bg-center bg-cover border-2 border-primary/20 cursor-pointer hover:ring-2 hover:ring-primary/30 transition-all shadow-sm"
                    style={{ backgroundImage: `url('https://picsum.photos/id/65/100/100')` }}
                />
            </div>
        </header>
    );
};

export default Header;

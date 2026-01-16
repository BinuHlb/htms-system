import React, { useState, useMemo } from 'react';

export interface LeavePlanningCalendarProps {
    title?: string;
    subtitle?: string;
    selectedDates?: string[]; // ISO format YYYY-MM-DD
    teamDates?: string[]; // ISO format YYYY-MM-DD
    onDateToggle?: (date: string) => void;
    className?: string;
}

const LeavePlanningCalendar: React.FC<LeavePlanningCalendarProps> = ({
    title = "Leave Planning",
    subtitle = "Select dates to plan future leaves",
    selectedDates = [],
    teamDates = [],
    onDateToggle,
    className = "",
}) => {
    const [viewDate, setViewDate] = useState(new Date());

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const { days, monthName, year } = useMemo(() => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        // Days in current month
        const daysInMonth = lastDayOfMonth.getDate();

        // Day of week of first day (0-6, Sun-Sat)
        const startingDay = firstDayOfMonth.getDay();

        // Days from previous month to fill the first row
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        const prevMonthDays = Array.from({ length: startingDay }, (_, i) => ({
            day: prevMonthLastDay - startingDay + i + 1,
            month: month === 0 ? 11 : month - 1,
            year: month === 0 ? year - 1 : year,
            isCurrentMonth: false
        }));

        // Days in current month
        const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
            day: i + 1,
            month: month,
            year: year,
            isCurrentMonth: true
        }));

        // Days from next month to fill the last row (up to 42 cells total for 6 rows)
        const totalCells = 42;
        const nextMonthDaysNeeded = totalCells - (prevMonthDays.length + currentMonthDays.length);
        const nextMonthDays = Array.from({ length: nextMonthDaysNeeded }, (_, i) => ({
            day: i + 1,
            month: month === 11 ? 0 : month + 1,
            year: month === 11 ? year + 1 : year,
            isCurrentMonth: false
        }));

        return {
            days: [...prevMonthDays, ...currentMonthDays, ...nextMonthDays],
            monthName: monthNames[month],
            year
        };
    }, [viewDate]);

    const changeMonth = (offset: number) => {
        const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1);
        setViewDate(newDate);
    };

    const isToday = (day: number, month: number, year: number) => {
        const today = new Date();
        return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    };

    const isSelected = (day: number, month: number, year: number) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return selectedDates.includes(dateStr);
    };

    const isTeamOnLeave = (day: number, month: number, year: number) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return teamDates.includes(dateStr);
    };

    const handleDateClick = (day: number, month: number, year: number) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        onDateToggle?.(dateStr);
    };

    return (
        <div className={`bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-sm border border-slate-100 dark:border-slate-800 ${className}`}>
            <div className="flex items-center justify-between mb-8 gap-4">
                <div className="flex items-center bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-1 gap-1">
                    <button
                        onClick={() => changeMonth(-1)}
                        className="p-2 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm rounded-xl transition-all text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary active:scale-95"
                    >
                        <span className="material-symbols-outlined text-xl">chevron_left</span>
                    </button>
                    <div className="px-4 min-w-[160px] text-center">
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{monthName} {year}</span>
                    </div>
                    <button
                        onClick={() => changeMonth(1)}
                        className="p-2 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm rounded-xl transition-all text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary active:scale-95"
                    >
                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-px bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-[24px] overflow-hidden shadow-inner">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                    <div key={d} className="py-4 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm text-[12px] font-bold uppercase text-slate-400 dark:text-slate-500 tracking-widest text-center">
                        {d}
                    </div>
                ))}

                {days.map((d, i) => {
                    const selected = isSelected(d.day, d.month, d.year);
                    const teamOnLeave = isTeamOnLeave(d.day, d.month, d.year);
                    const today = isToday(d.day, d.month, d.year);

                    return (
                        <div
                            key={i}
                            onClick={() => handleDateClick(d.day, d.month, d.year)}
                            className={`h-24 md:h-32 p-3 bg-white dark:bg-slate-900 relative cursor-pointer group transition-all duration-300
                                ${!d.isCurrentMonth ? 'opacity-40' : ''}
                                hover:bg-slate-50 dark:hover:bg-slate-800
                            `}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`text-sm font-bold transition-colors
                                    ${selected ? 'text-primary' : today ? 'text-white bg-primary size-7 rounded-full flex items-center justify-center -mt-1 -ml-1' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}
                                `}>
                                    {d.day}
                                </span>
                            </div>

                            <div className="mt-2 space-y-1">
                                {selected && (
                                    <div className="bg-primary text-[11px] text-white px-2 py-1 rounded-lg border border-primary/20 flex items-center gap-1.5 animate-in zoom-in-95 duration-300 shadow-sm">
                                        <div className="size-1 bg-white rounded-full animate-pulse"></div>
                                        <span className="font-bold uppercase tracking-tighter">Your Plan</span>
                                    </div>
                                )}
                                {teamOnLeave && (
                                    <div className="bg-rose-50 dark:bg-rose-500/10 text-[11px] text-rose-500 dark:text-rose-400 px-2 py-1 rounded-lg border border-rose-100 dark:border-rose-500/20 flex items-center gap-1.5 animate-in slide-in-from-bottom-2 duration-300">
                                        <div className="size-1 bg-rose-500 dark:bg-rose-400 rounded-full"></div>
                                        <span className="font-bold uppercase tracking-tighter">Team Off</span>
                                    </div>
                                )}
                            </div>

                            <div className="absolute inset-2 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none"></div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 flex flex-wrap gap-6 items-center border-t border-slate-50 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.4)]"></div>
                    <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20"></div>
                    <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                    <span className="text-[12px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Other Month</span>
                </div>
                <div className="ml-auto">
                    <p className="text-[12px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        {selectedDates.length} {selectedDates.length === 1 ? 'Day' : 'Days'} Planned
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeavePlanningCalendar;

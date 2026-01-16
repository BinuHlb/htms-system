import React from 'react';
import { OrgNode } from '../data/employees';

interface OrgTreeViewProps {
    data: OrgNode;
}

const OrgTreeView: React.FC<OrgTreeViewProps> = ({ data }) => {
    return (
        <div className="bg-white rounded-[32px] p-12 min-h-[600px] flex justify-center border border-slate-50 shadow-sm overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 size-64 bg-primary/5 rounded-full -ml-32 -mt-32 blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 size-64 bg-primary/5 rounded-full -mr-32 -mb-32 blur-3xl opacity-50" />

            <div className="flex flex-col items-center gap-8 w-full relative z-10">
                {/* CEO / Top Level */}
                <div className="flex flex-col items-center">
                    <div className="p-5 rounded-[24px] bg-slate-900 text-white w-72 shadow-2xl relative z-10 group hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center gap-4">
                            <div className="size-14 rounded-2xl bg-slate-700 border-2 border-slate-600 bg-center bg-cover shadow-inner group-hover:border-primary transition-colors"
                                style={{ backgroundImage: `url('${data.avatar}')` }}></div>
                            <div>
                                <p className="font-black text-sm tracking-tight">{data.name}</p>
                                <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold mt-0.5">{data.role}</p>
                            </div>
                        </div>
                        {/* Status chip */}
                        <div className="absolute -top-2 -right-2 px-3 py-1 bg-primary rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">Head Office</div>
                    </div>
                    <div className="h-12 w-px bg-gradient-to-b from-slate-200 to-slate-100"></div>
                </div>

                {/* Second Level / VPs */}
                <div className="w-full flex justify-center gap-12 relative">
                    {/* Connecting line */}
                    <div className="absolute top-0 left-[15%] right-[15%] h-px bg-slate-200 -mt-px"></div>

                    {data.children?.map((dept, i) => (
                        <div key={dept.id} className="flex flex-col items-center relative">
                            {/* Vertical connector to main line */}
                            <div className="absolute -top-px left-1/2 -translate-x-1/2 h-8 w-px bg-slate-200"></div>

                            <div className="mt-8 p-5 rounded-[24px] bg-white border border-slate-100 w-60 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 cursor-pointer group group">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center font-black text-xs group-hover:bg-primary group-hover:text-white transition-all">
                                        {dept.role.substring(0, 2).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-black text-sm text-slate-900 leading-tight">VP of {dept.role}</p>
                                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1.5 flex items-center gap-1.5">
                                            <span className="size-1 rounded-full bg-emerald-500" />
                                            {dept.reports} Reports
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between items-center text-[9px] font-black text-slate-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span>Expand Team</span>
                                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                </div>
                            </div>

                            {/* Special Highlight for one team (mocking nested view) */}
                            {i === 0 && (
                                <div className="flex flex-col items-center mt-8 gap-4 animate-in slide-in-from-top-4 duration-1000">
                                    <div className="h-10 w-px bg-slate-100"></div>
                                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 w-52 shadow-sm shadow-primary/5">
                                        <div className="flex items-center gap-3">
                                            <div className="size-2 rounded-full bg-primary animate-pulse" />
                                            <p className="text-[10px] font-black text-primary uppercase tracking-widest">Active Workspace</p>
                                        </div>
                                        <p className="text-[11px] font-bold text-slate-600 mt-2">Your current team is situated within this department.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend / Floor Plan Toggle */}
            <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2">
                    <span className="size-2 bg-slate-900 rounded-full" />
                    <span className="text-[9px] font-black uppercase text-slate-400">Executive</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="size-2 bg-primary rounded-full" />
                    <span className="text-[9px] font-black uppercase text-slate-400">Department</span>
                </div>
            </div>
        </div>
    );
};

export default OrgTreeView;

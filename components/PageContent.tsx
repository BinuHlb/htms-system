import React from 'react';

interface PageContentProps {
    children?: React.ReactNode;
    main?: React.ReactNode;
    sidebar?: React.ReactNode;
    /**
     * Layout mode:
     * 'standard' -> 8/4 split (Main/Sidebar)
     * 'equal' -> 6/6 split
     * 'wide' -> 9/3 split
     * 'full' -> 12 cols (uses main or children)
     */
    layout?: 'standard' | 'equal' | 'wide' | 'full';
    className?: string;
}

const PageContent: React.FC<PageContentProps> = ({
    children,
    main,
    sidebar,
    layout = 'standard',
    className = "",
}) => {
    // Determine column spans based on layout and presence of sidebar
    const getSpans = () => {
        if (!sidebar) {
            return {
                main: 'col-span-12',
                sidebar: 'hidden',
                grid: 'grid-cols-1' // Simplifies the grid when there's only one column
            };
        }

        switch (layout) {
            case 'equal': return { main: 'lg:col-span-6', sidebar: 'lg:col-span-6', grid: 'lg:grid-cols-12' };
            case 'wide': return { main: 'lg:col-span-9', sidebar: 'lg:col-span-3', grid: 'lg:grid-cols-12' };
            case 'full': return { main: 'col-span-12', sidebar: 'hidden', grid: 'grid-cols-1' };
            case 'standard':
            default: return { main: 'lg:col-span-8', sidebar: 'lg:col-span-4', grid: 'lg:grid-cols-12' };
        }
    };

    const spans = getSpans();

    return (
        <div className={`grid grid-cols-1 ${spans.grid} gap-6 items-start ${className}`}>
            {/* Main Content Area */}
            <div className={`${spans.main} space-y-6`}>
                {main || children}
            </div>

            {/* Sidebar Content Area */}
            {sidebar && (
                <div className={`${spans.sidebar} space-y-6`}>
                    {sidebar}
                </div>
            )}
        </div>
    );
};

export default PageContent;

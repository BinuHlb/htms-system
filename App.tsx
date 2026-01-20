
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import Dashboard from './pages/Dashboard';
import Leave from './pages/Leave';
import Attendance from './pages/Attendance';
import Loans from './pages/Loans';
import Expenses from './pages/Expenses';
import OtherRequests from './pages/OtherRequests';
import Profiles from './pages/Profiles';
import Employees from './pages/Employees';
import { Page } from './types';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Dashboard);

    return (
        <HashRouter>
            <div className="flex h-screen overflow-hidden font-sans">
                <Sidebar activePage={currentPage} onPageChange={setCurrentPage} />
                <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark overflow-hidden">
                    <Header />
                    <main className="flex-1 overflow-y-auto overflow-x-hidden">
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/profiles" element={<Profiles />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/leave" element={<Leave />} />
                            <Route path="/attendance" element={<Attendance />} />
                            <Route path="/loans" element={<Loans />} />
                            <Route path="/expenses" element={<Expenses />} />
                            <Route path="/other-requests" element={<OtherRequests />} />
                            <Route path="*" element={<Navigate to="/dashboard" replace />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;

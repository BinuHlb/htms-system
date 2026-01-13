
export enum Page {
    Dashboard = 'dashboard',
    Profiles = 'profiles',
    Employees = 'employees',
    Leave = 'leave',
    Attendance = 'attendance',
    Financials = 'financials',
    Admin = 'admin'
}

export interface Employee {
    id: string;
    name: string;
    role: string;
    avatar: string;
    department: string;
}

export interface AttendanceRecord {
    day: string;
    time: string;
    status: 'on-time' | 'late' | 'active' | 'upcoming' | 'off';
    delay?: string;
}

export interface LeaveBalance {
    type: string;
    total: number;
    remaining: number;
    color: string;
}

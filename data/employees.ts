export interface EmployeeData {
    id: number;
    name: string;
    role: string;
    dept: string;
    email: string;
    avatar: number;
}

export const employeesData: EmployeeData[] = [
    { id: 1, name: 'Sarah Chen', role: 'Lead UI/UX Designer', dept: 'Engineering', email: 'sarah.c@company.com', avatar: 180 },
    { id: 2, name: 'Alex Rivera', role: 'Senior Product Designer', dept: 'Engineering', email: 'alex.r@company.com', avatar: 191 },
    { id: 3, name: 'Marcus Thompson', role: 'Product Manager', dept: 'Product', email: 'marcus.t@company.com', avatar: 192 },
    { id: 4, name: 'Jamie Lee', role: 'Frontend Engineer', dept: 'Engineering', email: 'jamie.l@company.com', avatar: 193 },
    { id: 5, name: 'David Kim', role: 'Backend Engineer', dept: 'Engineering', email: 'david.k@company.com', avatar: 194 },
    { id: 6, name: 'Emily White', role: 'HR Specialist', dept: 'Human Resources', email: 'emily.w@company.com', avatar: 195 },
    { id: 7, name: 'Michael Brown', role: 'Marketing Lead', dept: 'Marketing', email: 'michael.b@company.com', avatar: 196 },
    { id: 8, name: 'Linda Wilson', role: 'Data Analyst', dept: 'Product', email: 'linda.w@company.com', avatar: 197 },
];

export interface OrgNode {
    id: string;
    name: string;
    role: string;
    avatar: string;
    reports?: number;
    children?: OrgNode[];
}

export const orgStructureData: OrgNode = {
    id: 'ceo',
    name: 'Jonathan Doe',
    role: 'Chief Executive Officer',
    avatar: 'https://picsum.photos/id/100/200/200',
    children: [
        { id: 'vp-eng', name: 'VP of Engineering', role: 'Engineering', avatar: '', reports: 25 },
        { id: 'vp-prod', name: 'VP of Product', role: 'Product', avatar: '', reports: 12 },
        { id: 'vp-mktg', name: 'VP of Marketing', role: 'Marketing', avatar: '', reports: 8 },
    ]
};

import React from 'react';

interface LoanProgressCardProps {
    loanId: string;
    totalAmount: number;
    paidAmount: number;
    percentage: number;
    title?: string;
}

const LoanProgressCard: React.FC<LoanProgressCardProps> = ({
    loanId,
    totalAmount,
    paidAmount,
    percentage,
    title = 'Repayment Progress',
}) => {
    const remainingAmount = totalAmount - paidAmount;

    return (
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-50 dark:border-slate-800">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">{title}</h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest mt-1">Loan ID: {loanId}</p>
                </div>
                <span className="text-4xl font-bold text-primary">{percentage}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-4 rounded-full overflow-hidden shadow-inner">
                <div
                    className="bg-primary h-full rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="flex justify-between mt-4">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide">${paidAmount.toLocaleString()}.00 Paid</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wide">${remainingAmount.toLocaleString()}.00 Remaining</p>
            </div>
        </div>
    );
};

export default LoanProgressCard;

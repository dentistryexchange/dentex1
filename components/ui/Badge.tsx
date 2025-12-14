import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'neutral' | 'accent';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', icon }) => {
  const styles = {
    success: "bg-dentex-emeraldLight text-emerald-700 border-emerald-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
    neutral: "bg-slate-50 text-slate-600 border-slate-100",
    accent: "bg-dentex-primaryLight text-dentex-primaryDark border-blue-100"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border ${styles[variant]} shadow-sm`}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {children}
    </span>
  );
};
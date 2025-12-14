import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
  
  const variants = {
    // Gradient Glacier
    primary: "bg-gradient-to-r from-dentex-primary to-dentex-primaryDark text-white shadow-lg shadow-dentex-primary/25 hover:shadow-dentex-primary/40 hover:brightness-110 border border-transparent",
    // Clean White
    secondary: "bg-white text-dentex-dark border border-slate-200 hover:border-dentex-primary/50 hover:bg-slate-50 shadow-sm hover:shadow-md",
    // Thin Outline
    outline: "border border-slate-300 bg-transparent text-dentex-secondary hover:text-dentex-primary hover:border-dentex-primary hover:bg-dentex-primary/5",
    // Minimal
    ghost: "bg-transparent text-dentex-secondary hover:text-dentex-primary hover:bg-dentex-primary/5",
    // Frosted Glass
    glass: "bg-white/30 backdrop-blur-md border border-white/60 text-dentex-dark shadow-sm hover:bg-white/50"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2 transition-transform group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
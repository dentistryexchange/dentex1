import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
  return (
    <div className={`glass-card rounded-3xl overflow-hidden ${noPadding ? '' : 'p-8'} ${className}`}>
      {children}
    </div>
  );
};
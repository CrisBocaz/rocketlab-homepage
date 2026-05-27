import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`
        bg-black border border-steel-gray/30 rounded-lg p-6
        ${hover ? 'hover:border-gold/50 hover:bg-navy/20 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

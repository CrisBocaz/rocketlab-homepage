import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-display font-bold transition-all duration-300 ease-out';

  const variants = {
    primary: 'bg-gold text-black hover:bg-opacity-90 active:scale-95',
    secondary: 'bg-royal-blue text-soft-white hover:bg-opacity-90 active:scale-95',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-black transition-colors',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}) => {
  const baseStyle = "px-6 py-3 rounded-md font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 text-center cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-prk-magenta to-purple-600 text-white shadow-purple-500/30",
    secondary: "bg-prk-teal text-prk-deepTeal hover:bg-prk-mint",
    outline: "border-2 border-prk-teal text-prk-teal hover:bg-prk-teal hover:text-prk-deepTeal"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

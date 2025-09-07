import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const baseStyle = 'font-bold py-2 px-4 rounded ';
  const variantStyle = variant === 'primary' ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-500 hover:bg-gray-700 text-white';

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {text}
    </button>
  );
};

export default Button;

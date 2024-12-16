import { cn } from '@/utils';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  color = 'primary',
  size = 'md',
  type = 'button',
}) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'py-1 px-2';
      case 'md':
        return 'py-2 px-4';
      case 'lg':
        return 'py-3 px-6';
      default:
        return 'py-2 px-4';
    }
  };

  const getColor = () => {
    switch (color) {
      case 'primary':
        return 'bg-primary text-white';
      case 'secondary':
        return 'bg-white text-primary border border-primary';
      default:
        return 'bg-primary text-white';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'font-bold rounded-md w-full',
        getColor(),
        getSize(),
        className,
      )}
    >
      {children}
    </button>
  );
};

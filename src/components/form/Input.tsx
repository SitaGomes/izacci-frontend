import { cn } from '@/utils';
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn('border border-primary p-2 rounded-lg w-full', className)}
      {...props}
    />
  );
};

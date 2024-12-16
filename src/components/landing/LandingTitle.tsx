import { cn } from '@/utils';
import { ReactNode } from 'react';

type LandingTitleProps = {
  children: ReactNode;
  color?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export const LandingTitle: React.FC<LandingTitleProps> = ({
  children,
  className,
  color = 'primary',
  size = 'md',
}) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'text-2xl';
      case 'md':
        return 'text-2xl sm:text-4xl';
      case 'lg':
        return 'text-4xl sm:text-6xl';
      default:
        return 'text-4xl';
    }
  };

  const getColor = () => {
    switch (color) {
      case 'primary':
        return 'text-black';
      case 'secondary':
        return 'text-primary';
      default:
        return 'text-black';
    }
  };

  return (
    <h1
      className={cn(
        'font-bold text-center font-title',
        getColor(),
        getSize(),
        className,
      )}
    >
      {children}
    </h1>
  );
};

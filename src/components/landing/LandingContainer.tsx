import { cn } from '@/utils';
import { CSSProperties, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: 'section' | 'div' | 'header' | 'footer' | 'main';
};

export const LandingContainer: React.FC<ContainerProps> = ({
  children,
  className = '',
  style = {} as CSSProperties,
  as = 'section',
}) => {
  const Component = as;

  return (
    <Component className={cn(className, 'max-w-6xl w-full')} style={style}>
      {children}
    </Component>
  );
};

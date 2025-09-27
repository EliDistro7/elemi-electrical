import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-2xl border-2 border-border-default bg-white px-4 py-3 text-base font-medium ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-semibold file:text-text-primary placeholder:text-text-tertiary placeholder:font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:border-primary-500 focus-visible:shadow-soft hover:border-border-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-background-200',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
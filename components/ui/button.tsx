import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-display font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-primary-gradient text-white shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 border-0',
        destructive: 'bg-gradient-to-r from-error-500 to-error-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-error-600 hover:to-error-700',
        outline: 'border-2 border-primary-300 bg-transparent text-primary-700 hover:bg-primary-50 hover:border-primary-500 hover:shadow-soft',
        secondary: 'bg-secondary-gradient text-white shadow-yellow hover:shadow-yellow-lg hover:-translate-y-0.5',
        ghost: 'bg-transparent text-text-secondary hover:bg-background-200 hover:text-primary-600 hover:shadow-soft',
        link: 'bg-transparent text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline font-medium tracking-normal',
        success: 'bg-accent-gradient text-white shadow-green hover:shadow-green-lg hover:-translate-y-0.5',
      },
      size: {
        sm: 'h-9 px-4 py-2 text-sm rounded-xl font-medium',
        default: 'h-11 px-6 py-3 text-base rounded-2xl',
        lg: 'h-14 px-8 py-4 text-lg rounded-2xl font-bold',
        xl: 'h-16 px-10 py-5 text-xl rounded-3xl font-bold',
        icon: 'h-11 w-11 rounded-xl',
        'icon-sm': 'h-9 w-9 rounded-lg',
        'icon-lg': 'h-14 w-14 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
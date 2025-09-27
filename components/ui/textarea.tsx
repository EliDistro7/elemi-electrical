import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-2xl border-2 border-border-default bg-white px-4 py-3 text-base font-medium ring-offset-background placeholder:text-text-tertiary placeholder:font-medium focus-visible:outline-none focus-visible:ring-0 focus-visible:border-primary-500 focus-visible:shadow-soft hover:border-border-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-background-200 resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
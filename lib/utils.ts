import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

 const handleActionClick = (message:string) => {
    
      const whatsappUrl = `https://wa.me/255745787370?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

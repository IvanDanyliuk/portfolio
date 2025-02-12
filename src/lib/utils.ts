import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const splitStringWithRestItems = (data: string[]) => {
  return `${data[0]} + ${data.length - 1} other${data.length > 0 ? 's' : ''}`;
};
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const splitStringWithRestItems = (str: string) => {
  const splittedData = str.split(', ');
  const restNum = splittedData.length - 1;
  return `${splittedData[0]} + ${restNum} other${restNum > 0 ? 's' : ''}`;
};
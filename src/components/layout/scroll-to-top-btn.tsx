'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '../ui/button';
import { ChevronUp } from 'lucide-react';
import { useRouter } from 'next/navigation';


export const ScrollToTopButton: React.FC = () => {
  const router = useRouter();
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth',
    });
    router.push('/')
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button 
            asChild 
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 w-16 h-16 bg-secondary hover:bg-tertiary hover:border hover:border-primary text-white hover:text-primary transition-all rounded-full'
          >
            <ChevronUp />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
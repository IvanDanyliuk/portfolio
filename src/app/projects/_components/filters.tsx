'use client';

import { Settings2 } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import useMediaQuery from '@/lib/use-media-query';
import { FilterForm } from './filter-form';


export const Filters: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px');

  return (
    <>
      {isMobile ? (
        <Sheet>
          <SheetTrigger className='absolute left-6 bottom-6 w-16 h-16 flex justify-center items-center text-white bg-primary border border-white rounded-full'>
            <Settings2 className='w-7 h-7' />
          </SheetTrigger>
          <SheetContent className='py-10 space-y-6'>
            <SheetHeader className='hidden'>
              <SheetTitle />
              <SheetDescription />
            </SheetHeader>
            <h4 className='text-xl md:text-lg'>
              Filters
            </h4>
            <FilterForm />
          </SheetContent>
        </Sheet>
      ) : (
        <div className='w-72 min-h-full h-full space-y-6'>
          <h4 className='text-lg font-medium'>
            Filters
          </h4>
          <FilterForm />
        </div>
      )}
    </>
  );
};
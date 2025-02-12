'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CheckedState } from '@radix-ui/react-checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { PROJECT_TYPES, SKILLS } from '@/lib/constants';


type FiltersData = {
  types: string[];
  stack: string[];
};


export const FilterForm: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const {
    register, 
    handleSubmit, 
    watch, 
    setValue
  } = useForm<FiltersData>({
    defaultValues: {
      types: [],
      stack: [],
    }
  });

  const selectedTypes = watch('types');
  const selectedStack = watch('stack');

  const onSubmit: SubmitHandler<FiltersData> = (data) => {
    if(data.types.length > 0) {
      params.set('types', data.types.join(';'));
    } else {
      params.delete('types');
    };

    if(data.stack.length > 0) {
      params.set('stack', data.stack.join(';'));
    } else {
      params.delete('stack');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const onClearFilters = () => {
    setValue('types', []);
    setValue('stack', []);
    replace(pathname);
  };

  useEffect(() => {
    const checkedTypes = params.get('types');
    const checkedStack = params.get('stack');

    if(checkedTypes) setValue('types', checkedTypes.split(';'));
    if(checkedStack) setValue('stack', checkedStack.split(';'));
  }, []);

  return (
    <>
      <form className='w-full'>
        <Accordion 
          type='multiple' 
          className='space-y-3'
        >
          <AccordionItem 
            value='types' 
            className='px-4 text-primary border border-tertiary rounded-xl'
          >
            <AccordionTrigger className='text-lg md:text-base'>
              Type
            </AccordionTrigger>
            <AccordionContent className='space-y-5 md:space-y-3'>
              {PROJECT_TYPES.map(type => (
                <div 
                  key={crypto.randomUUID()} 
                  className='flex items-center space-x-2'
                >
                  <Checkbox 
                    id={type.value} 
                    value={type.value}
                    {...register('types')}
                    checked={selectedTypes.includes(type.value)}
                    onCheckedChange={(checked: CheckedState) => {
                      const updatedTypes = checked 
                        ? [...selectedTypes, type.value] 
                        : selectedTypes.filter(item => item !== type.value);
                      setValue('types', updatedTypes, { shouldValidate: true });
                      handleSubmit(onSubmit)();
                    }}
                  />
                  <Label htmlFor={type.value}>
                    {type.label}
                  </Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem 
            value='stack' 
            className='px-4 text-primary border border-tertiary rounded-xl'
          >
            <AccordionTrigger className='text-lg md:text-base'>
              Tech stack
            </AccordionTrigger>
            <AccordionContent className='space-y-5 md:space-y-3'>
              {SKILLS.map(technology => (
                <div 
                  key={crypto.randomUUID()} 
                  className='flex items-center space-x-2'
                >
                  <Checkbox 
                    id={technology.value} 
                    value={technology.value}
                    {...register('stack')}
                    checked={selectedStack.includes(technology.value)}
                    onCheckedChange={(checked: CheckedState) => {
                      const updatedStack = checked 
                        ? [...selectedStack, technology.value] 
                        : selectedStack.filter(item => item !== technology.value);
                      setValue('stack', updatedStack, { shouldValidate: true });
                      handleSubmit(onSubmit)();
                    }}
                  />
                  <Label htmlFor={technology.value}>
                    {technology.label}
                  </Label>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
      <Button 
        type='button' 
        onClick={onClearFilters} 
        className='px-4 bg-white border border-primary text-primary hover:text-white transition-all delay-100 rounded-full'
      >
        Clear filters
      </Button>
    </>
  );
};
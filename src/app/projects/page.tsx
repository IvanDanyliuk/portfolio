import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { format } from 'date-fns';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Filters } from './_components';
import { getProjects } from '@/lib/projects';
import { Chip } from '@/components/layout';
import { SKILLS } from '@/lib/constants';


export default function ProjectsPage({ 
  searchParams: { 
    types, 
    stack 
  } 
}: { 
  searchParams: { 
    types: string; 
    stack: string 
  } 
}) {
  const projects = getProjects();
  const selectedTypes = types ? types.split(';') : [];
  const selectedStack = stack ? stack.split(';') : [];

  return (
    <div className='relative w-full min-h-[calc(100vh-6rem)] h-full flex bg-white'>
      <div className='mx-auto px-3 md:px-0 py-6 w-fit container flex flex-1 gap-6'>
        <Filters />
        <Separator orientation='vertical' className='hidden md:block' />
        <div className='flex-1 space-y-6'>
          <h1 className='text-4xl text-primary font-medium'>
            My projects
          </h1>
          <Accordion type="single" collapsible className='space-y-3'>
            {projects
              .filter(project => {
                const matchesType = selectedTypes.length === 0 || selectedTypes.includes(project.type);
                const matchesStack = selectedStack.length === 0 || project.stack.some(s => selectedStack.includes(s));
                return matchesType && matchesStack;
              })
              .map(project => (
                <AccordionItem 
                  key={crypto.randomUUID()} 
                  value={project.title} 
                  className='p-3 border border-tertiary rounded-xl'
                >
                  <AccordionTrigger className='w-full flex justify-between text-primary hover:no-underline font-normal'>
                    <div className='flex-1 space-y-3'>
                      <h5 className='text-lg font-medium'>
                        {project.title}
                      </h5>
                      <p className='text-secondary text-sm'>
                        {format(project.createdAt, 'dd.MM.yyyy')}
                      </p>
                    </div>
                    <div className='px-3 w-fit flex flex-col md:flex-row-reverse items-center gap-3'>
                      <Chip value={project.type} />
                      <p>
                        {project.stack.map(item => SKILLS.find(s => s.value === item)?.label).join(' ')}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='w-full flex items-center gap-3'>
                    <div className='relative w-72 h-32'>
                      <Image 
                        src={project.titleImage} 
                        alt={project.title} 
                        fill 
                      />
                    </div>
                    <p className='flex-1 text-secondary'>
                      {project.intro}
                    </p>
                    <Link 
                      href={`/projects/${project.slug}`} 
                      className='w-16 h-16 flex justify-center items-center text-white hover:text-primary bg-primary hover:bg-tertiary border border-primary transition-all delay-100 rounded-full'
                    >
                      <ArrowUpRight className='w-5 h-5' />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              ))
            }
          </Accordion>
        </div>
      </div>
    </div>
  );
};
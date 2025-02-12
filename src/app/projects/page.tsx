import { Separator } from '@/components/ui/separator';
import { Filters } from './_components';
import { getProjects } from '@/lib/projects';


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

  console.log('PROJECTS', projects)

  return (
    <div className='relative w-full min-h-[calc(100vh-6rem)] h-full flex bg-white'>
      <div className='mx-auto px-3 md:px-0 py-6 w-fit container flex flex-1 gap-6'>
        <Filters />
        <Separator orientation='vertical' className='hidden md:block' />
        <div className='flex-1'>
          <h1 className='text-4xl font-medium'>
            My projects
          </h1>
          <ul>
            {projects
              .filter(project => {
                const matchesType = selectedTypes.length === 0 || selectedTypes.includes(project.type);
                const matchesStack = selectedStack.length === 0 || project.stack.split(', ').some(s => selectedStack.includes(s));
                return matchesType && matchesStack;
              })
              .map(project => (
                <div key={crypto.randomUUID()}>
                  {project.title}
                </div>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Markdown from 'markdown-it';
import { format } from 'date-fns';
import { MoveRight } from 'lucide-react';
import { getProjects } from '@/lib/projects';
import { SKILLS } from '@/lib/constants';


export default async function ProjectPage({ 
  params 
}: { 
  params: {
    slug: string;
  } 
}) {
  const { slug } = params;
  const md = new Markdown()

  if(!slug) notFound();

  const projects = getProjects();
  const project = projects.find(item => item.slug === slug);

  if(!project) notFound();

  const content = md.render(project.content);

  return (
    <div className='w-full'>
      <div className='mx-auto py-3 container'>
        <h1 className='text-3xl font-medium text-primary'>
          {project.title}
        </h1>
        <p className='mb-8 text-sm text-secondary'>
          {format(project.createdAt, 'dd.MM.yyyy')}
        </p>
        <div className='px-3 md:px-0 flex flex-col-reverse md:flex-row gap-10'>
          <div className='space-y-6'>
            {project.images.map((path, i) => (
              <div 
                key={crypto.randomUUID()} 
                className='relative w-full md:w-80 h-52 md:h-44 border border-tertiary overflow-hidden rounded-xl'
              >
                <Image 
                  src={path} 
                  alt={`project-image-${i + 1}`} 
                  fill 
                  className='object-cover'
                />
              </div>
            ))}
          </div>
          <div 
            dangerouslySetInnerHTML={{ __html: content }} 
            className='flex-1 project-content' 
          />
          <div className='space-y-3 md:space-y-10'>
            <div>
              <h4 className='text-lg text-primary font-medium'>
                Tech stack
              </h4>
              <ul className='py-3 text-sm text-secondary'>
                {project.stack.map(item => (
                  <li key={crypto.randomUUID()}>
                    {SKILLS.find(skill => skill.value === item)?.label}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={project.deploymentLink} className='project-link'>
              Watch this project live
              <MoveRight className='inline ml-2' />
            </Link>
            <Link href={project.repoLink} className='project-link'>
              See the code
              <MoveRight className='inline ml-2' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
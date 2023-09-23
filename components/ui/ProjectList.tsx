'use client'

import { useRouter, usePathname } from 'next/navigation';
import { v4 as uuid } from 'uuid';
import { Credential, Feature } from '@/common.types';
import Chip from './Chip';
import IconButton from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectListProps {
  projects: {
    _id: string;
    name: string;
    summary: string;
    category: string;
    imageUrl: string;
    technologies: string[];
    features: Feature[];
    credentials: Credential[];
    previewUrl?: string;
    repoFrontend?: string;
    repoBackend?: string;
  }[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (projectId: string) => {
    router.push(`${pathname}/${projectId}`);
  }

  return (
    <div className='bg-white mx-auto max-w-2xl lg:max-w-7xl'>
      <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
        {projects.map((project) => (
          <div key={uuid()} className='group relative cursor-pointer'>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
              <img
                src={project.imageUrl}
                alt={project.name}
                className='h-full w-full object-cover object-center lg:h-full lg:w-full'
              />
            </div>
            <div className='mt-4'>
              <div className='flex justify-between items-center gap-3'>
                <h3 className='text-lg font-semibold text-gray-700'>
                  {project.name}
                </h3>
                <Chip title={project.category} />
              </div>
              <p className='mt-2 text-sm text-gray-500'>
                  {project.summary}
                </p>
            </div>
            <div className='mt-6 w-full flex justify-center gap-1'>
              <IconButton label='More'>
                <FontAwesomeIcon icon={faAngleRight} />
              </IconButton>
              {project.previewUrl && (
                <IconButton label='Preview'>
                  <FontAwesomeIcon icon={faLaptop} />
                </IconButton>
              )}
              {project.repoFrontend && (
                <IconButton label='Frontend'>
                  <FontAwesomeIcon icon={faGithub} />
                </IconButton>
              )}
              {project.repoBackend && (
                <IconButton label='Backend'>
                  <FontAwesomeIcon icon={faGithub} />
                </IconButton>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
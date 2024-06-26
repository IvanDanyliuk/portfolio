'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { v4 as uuid } from 'uuid';
import { Credential, Feature } from '@/common.types';
import NoDataMessage from '../common/NoDataMessage';
import ListItemWrapper from '../common/ListItemWrapper';
import Chip from '../common/Chip';
import IconButton from '../common/IconButton';


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

  if(projects.length === 0) {
    return <div className='w-full flex grow justify-center items-center'>
      <NoDataMessage message='No projects found' />
    </div>
  }
 
  return (
    <div className='bg-white mx-auto max-w-2xl lg:max-w-7xl'>
      <ul className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
        {projects.map((project, i) => (
          <ListItemWrapper key={uuid()} index={i}>
            <div className='w-full cursor-pointer' onClick={() => handleNavigate(project._id)}>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 border-b border-gray-100'>
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='px-2 py-3'>
                <div className='flex justify-between items-center gap-3'>
                  <h3 className='text-lg font-semibold text-gray-700'>
                    {project.name}
                  </h3>
                  <Chip title={project.category} />
                </div>
                <p className='mt-2 text-sm text-gray-500 truncate'>
                  {project.summary}
                </p>
              </div>
            </div>
            <div className='bg-white w-full flex justify-center gap-1'>
              <IconButton label='More' link={`${pathname}/${project._id}`}>
                <FontAwesomeIcon icon={faAngleRight} />
              </IconButton>
              {project.previewUrl && (
                <IconButton label='Preview' link={project.previewUrl} newTab>
                  <FontAwesomeIcon icon={faLaptop} />
                </IconButton>
              )}
              {project.repoFrontend && (
                <IconButton label='Frontend' link={project.repoFrontend} newTab>
                  <FontAwesomeIcon icon={faGithub} />
                </IconButton>
              )}
              {project.repoBackend && (
                <IconButton label='Backend' link={project.repoBackend} newTab>
                  <FontAwesomeIcon icon={faGithub} />
                </IconButton>
              )}
            </div>
          </ListItemWrapper>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
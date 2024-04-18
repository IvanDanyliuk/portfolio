'use client';

import { v4 as uuid } from 'uuid';
import { Credential, Feature } from '@/common.types';
import NoDataMessage from '../common/NoDataMessage';
import ProjectListItem from './ProjectListItem';


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
  if(projects.length === 0) {
    return <div className='w-full flex grow justify-center items-center'>
      <NoDataMessage message='No projects found' />
    </div>
  }
 
  return (
    <div className='bg-white mx-auto max-w-2xl lg:max-w-7xl'>
      <ul className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
        {projects.map((project, i) => (
          <ProjectListItem key={uuid()} project={project} index={i} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
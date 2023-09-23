import { v4 as uuid } from 'uuid';
import { Credential, Feature } from '@/common.types';

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
  return (
    <div className='flex-1'>
      {projects.map(project => (
        <div key={uuid()}>
          {project._id}
        </div>
      ))}
    </div>
  )
}

export default ProjectList
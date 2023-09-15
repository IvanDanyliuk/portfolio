'use client'

import { usePathname } from 'next/navigation'
import { v4 as uuid } from 'uuid'
import { deleteTechnology } from '@/lib/actions/technologies.actions';
import Chip from './Chip';

interface TechnologiesListProps {
  technologies: {
    _id: string;
    title: string;
  }[];
}

const TechnologiesList: React.FC<TechnologiesListProps> = ({ technologies }) => {
  const pathname = usePathname();

  const handleExperienceItemDelete = async (id: string) => {
    await deleteTechnology({ id, pathname });
  };

  return (
    <div className='py-3 w-full flex flex-wrap gap-3'>
      {technologies.map(tech => (
        <Chip 
          key={uuid()} 
          title={tech.title} 
          onClose={() => handleExperienceItemDelete(tech._id)} 
        />
      ))}
    </div>
  )
}

export default TechnologiesList
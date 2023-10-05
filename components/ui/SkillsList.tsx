'use client';

import { usePathname } from 'next/navigation';
import { v4 as uuid } from 'uuid';
import Chip from './common/Chip';
import { deleteSkill } from '@/lib/actions/skills.actions';
import NoDataMessage from './common/NoDataMessage';

interface SkillsListProps {
  skills: {
    _id: string;
    title: string;
    isAdditional: boolean;
  }[];
}

const SkillsList = ({ skills }: SkillsListProps) => {
  const pathname = usePathname();

  const handleSkillsDelete = async (id: string) => {
    await deleteSkill({id, pathname});
  }

  return (
    <>
      {skills.length > 0 ? (
        <ul className='flex flex-wrap gap-3'>
          {skills.map(skill => (
            <li key={uuid()}>
              <Chip 
                title={skill.title} 
                onClose={() => handleSkillsDelete(skill._id)} 
              />
            </li>
          ))}
        </ul>
      ) : (
        <NoDataMessage message='Add your skills' />
      )}
    </>
  )
}

export default SkillsList
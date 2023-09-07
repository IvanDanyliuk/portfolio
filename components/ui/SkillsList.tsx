'use client';

import { v4 as uuid } from 'uuid';
import Chip from './Chip';
import { deleteSkill } from '@/lib/actions/user.actions';

interface SkillsListProps {
  userId: string;
  skills: {
    title: string;
    isAdditional: boolean;
  }[];
}

const SkillsList = ({ userId, skills }: SkillsListProps) => {

  const handleSkillsDelete = async (title: string) => {
    await deleteSkill(userId, title);
  }

  return (
    <ul className='flex flex-wrap gap-3'>
      {skills.map(skill => (
        <li key={uuid()}>
          <Chip 
            title={skill.title} 
            onClose={() => handleSkillsDelete(skill.title)} 
          />
        </li>
      ))}
    </ul>
  )
}

export default SkillsList
'use client';

import { v4 as uuid } from 'uuid';
import Chip from './Chip';

interface SkillsListProps {
  skills: {
    id: string;
    title: string;
  }[]
}

const SkillsList = ({ skills }: SkillsListProps) => {
  const deleteSkill = (id: string) => {
    console.log(`Skill with ${id} ID has been deleted!`);
  }

  return (
    <ul className='flex flex-wrap gap-3'>
      {skills.map(skill => (
        <li key={uuid()}>
          <Chip 
            title={skill.title} 
            onClose={() => deleteSkill(skill.id)} 
          />
        </li>
      ))}
    </ul>
  )
}

export default SkillsList
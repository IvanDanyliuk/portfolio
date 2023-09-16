'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { v4 as uuid } from 'uuid'
import { Credential, Feature, Technology } from '@/common.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import ConfirmAction from './ConfirmAction'
import { deleteProject } from '@/lib/actions/project.actions'

interface ProjectsTableProps {
  projects: {
    _id: string;
    name: string;
    summary: string;
    imageUrl: string;
    category: string[];
    technologies: Technology[];
    features: Feature[];
    credentials: Credential[];
  }[]
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleProjectDelete = async (id: string) => {
    await deleteProject({ id, pathname });
  };

  const navigateToEditPage = (id: string) => {
    router.push(`/admin/projects/edit-project/${id}`);
  }

  return (
    <table className='relative w-full'>
      <thead className='w-full'>
        <tr>
          <th className='py-3 text-start'>Name</th>
          <th className='py-3 text-start'>Category</th>
          <th className='py-3 text-start'>Tech Stack</th>
          <th className='py-3 text-start'></th>
        </tr>
      </thead>
      <tbody className='w-full'>
        {projects.map(project => (
          <tr key={uuid()}>
            <td className='py-2'>{project.name}</td>
            <td className='py-2'>{project.category}</td>
            <td className='py-2'>
              {project.technologies.join(', ')}
            </td>
            <td className='py-2 flex justify-center gap-6'>
              <button className='round-btn' onClick={() => navigateToEditPage(project._id)}>
                <FontAwesomeIcon icon={faPen} />
              </button>
              <ConfirmAction 
                message='Are you sure you want to delete this project?' 
                actionHandler={() => handleProjectDelete(project._id)} 
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProjectsTable
import ProjectForm from '@/components/forms/ProjectForm'
import { fetchTechnologies } from '@/lib/actions/technologies.actions'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const CreateProject = async () => {
  const technologies = await fetchTechnologies();
  
  return (
    <div>
      <div className='mb-3 w-full flex justify-between items-center'>
        <h3 className='text-xl font-semibold'>Create a new project</h3>
        <Link href='/admin/projects' className='btn'>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className='ml-3'>Go back</span>
        </Link>
      </div>
      <ProjectForm technologies={technologies} />
    </div>
  )
}

export default CreateProject
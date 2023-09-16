import Link from 'next/link'
import ProjectsTable from '@/components/ui/ProjectsTable';
import { fetchProjects } from '@/lib/actions/project.actions'

const Projects = async () => {
  const availablePojects = await fetchProjects();
  const projects = availablePojects.map(project => JSON.parse(JSON.stringify(project)))

  return (
    <div>
      <div className='w-full flex justify-between items-center'>
        <h3 className='mb-3 text-xl font-semibold'>Projects</h3>
        <Link href='/admin/projects/create-project' className='btn'>New Project</Link>
      </div>
      <ProjectsTable projects={projects} />
    </div>
  )
}

export default Projects
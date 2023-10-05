import Link from 'next/link'
import ProjectsTable from '@/components/ui/projects/ProjectsTable';
import { fetchProjects } from '@/lib/actions/project.actions'
import SectionTitle from '@/components/ui/common/SectionTitle';

const Projects = async () => {
  const availablePojects = await fetchProjects();
  const projects = availablePojects.map(project => JSON.parse(JSON.stringify(project)))

  return (
    <div>
      <SectionTitle title='Projects'>
        <Link href='/admin/projects/create-project' className='btn'>New Project</Link>
      </SectionTitle>
      <ProjectsTable projects={projects} />
    </div>
  )
}

export default Projects
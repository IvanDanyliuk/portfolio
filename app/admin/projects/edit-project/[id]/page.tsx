import ProjectForm from '@/components/forms/ProjectForm';
import SectionTitle from '@/components/ui/common/SectionTitle';
import { fetchProject } from '@/lib/actions/project.actions';
import { fetchTechnologies } from '@/lib/actions/technologies.actions';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const EditProject = async ({ params }: { params: { id: string } }) => {
  const technologies = await fetchTechnologies();
  const project = await fetchProject(params.id);
  const projectToUpdate = JSON.parse(JSON.stringify(project));

  return (
    <div>
      <div className='mb-3 w-full flex justify-between items-center'>
        <SectionTitle title='Create a new project' />
        <Link href='/admin/projects' className='btn'>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className='ml-3'>Go back</span>
        </Link>
      </div>
      <div>{params.id}</div>
      <ProjectForm technologies={technologies} projectToUpdate={projectToUpdate!} />
    </div>
  )
}

export default EditProject
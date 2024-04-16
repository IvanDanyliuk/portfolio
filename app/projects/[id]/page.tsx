import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { v4 as uuid } from 'uuid';
import { Project } from '@/common.types';
import Chip from '@/components/ui/common/Chip';
import { fetchProject } from '@/lib/actions/project.actions';
import FeatureImage from '@/components/ui/projects/FeatureImage';

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const project: Project = await fetchProject(params.id);

  return (
    <div className='relative container mx-auto pb-3 w-full flex flex-auto flex-col-reverse lg:flex-row gap-x-10 md:gap-x-6'>
      <div className='md:pr-5 w-full lg:w-1/5 flex flex-col gap-7 lg:border-r md:border-gray-100'>
        <section className='pb-6 flex justify-between items-center border-b border-gray-100'>  
          <h3 className='text-lg font-semibold text-gray-400'>Category</h3>
          <Chip title={project.category} />
        </section>
        <section className='pb-6 border-b border-gray-100'>
          <h3 className='text-lg font-semibold text-gray-400'>Technologies</h3>
          <ul className='mt-3 flex flex-wrap gap-3'>
            {project.technologies.map(technology => (
              <li key={uuid()}>
                <Chip title={technology} />
              </li>
            ))}
          </ul>
        </section>
        <section className='pb-6 border-b border-gray-100'>
          <h3 className='text-lg font-semibold text-gray-400'>Links</h3>
          <ul className='mt-3'>
            {project.previewUrl && (
              <li>
                <Link 
                  href={project.previewUrl} 
                  target='_blank' 
                  className='py-3 flex justify-between items-center'
                >
                  <span>Live Preview</span>
                  <span className='text-xl'>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </Link>
              </li>
            )}
            {project.repoFrontend && (
              <li>
                <Link 
                  href={project.repoFrontend} 
                  target='_blank' 
                  className='py-3 flex justify-between items-center'
                >
                  <span>Frontend Repository</span>
                  <span className='text-xl'>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </Link>
              </li>
            )}
            {project.repoBackend && (
              <li>
                <Link 
                  href={project.repoBackend} 
                  target='_blank' 
                  className='py-3 flex justify-between items-center'
                >
                  <span>Backend Repository</span>
                  <span className='text-xl'>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </section>
        {project.credentials && (
          <section>
            <h3 className='mb-1 text-lg font-semibold text-gray-400'>Credentials</h3>
            <p className='text-sm text-gray-400'>You can use data below to login and check all the project features</p>
            <ul className='mt-3'>
              {project.credentials.map(credential => (
                <li key={uuid()} className='mt-3 text-gray-400'>
                  <h6 className='font-semibold'>{credential.title}</h6>
                  <p className='text-sm'>{credential.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
      <div className='flex-1'>
        <div className='relative mb-6 pb-6 w-full flex justify-between items-center'>
          <h2 className='w-4/6 text-4xl font-bold '>{project.name}</h2>
          <Link href='/projects' className='btn'>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span className='ml-3'>Go back</span>
          </Link>
        </div>
        <section className='flex flex-col md:flex-row md:justify-between lg:gap-10'>
          <div className='mb-6 md:mb-0'>
            <h4 className='mb-3 text-xl font-semibold '>Common Information</h4>
            <p>{project.summary}</p>
          </div>
          <Image src={project.imageUrl} alt={project.name} width={400} height={300} />
        </section>
        <section className='mt-6'>
          <h4 className='mb-3 text-xl font-semibold '>Key Features</h4>
          <ul className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10'>
            {project.features.map((feature, i) => (
              <li key={uuid()} className='relative group overflow-hidden drop-shadow-lg'>
                <FeatureImage imageUrl={feature.featureImageUrl} altText={feature.title} />
                <div className='pt-3'>
                  <h5 className='text-base font-bold text-gray-700'>
                    {`${i + 1}. ${feature.title}`}
                  </h5>
                  <p className='text-sm text-gray-400'>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
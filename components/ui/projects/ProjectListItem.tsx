'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProject } from '@/common.types';
import Chip from '../common/Chip';
import IconButton from '../common/IconButton';


interface IProjectListItem {
  project: IProject;
  index: number;
}


const ProjectListItem: React.FC<IProjectListItem> = ({ project, index }) => {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  const handleNavigate = (projectId: string) => {
    router.push(`${pathname}/${projectId}`);
  }

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.li ref={ref}>
      <motion.div 
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.8, delay: 0.25 * index
        }}
        className='group relative flex flex-col justify-between overflow-hidden rounded-md border cursor-pointer shadow-lg'
      >
        <div className='w-full' onClick={() => handleNavigate(project._id)}>
          <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 border-b border-gray-100'>
            <img
              src={project.imageUrl}
              alt={project.name}
              className='h-full w-full object-cover object-center'
            />
          </div>
          <div className='px-2 py-3'>
            <div className='flex justify-between items-center gap-3'>
              <h3 className='text-lg font-semibold text-gray-700'>
                {project.name}
              </h3>
              <Chip title={project.category} />
            </div>
            <p className='mt-2 text-sm text-gray-500 truncate'>
              {project.summary}
            </p>
          </div>
        </div>
        <div className='bg-white w-full flex justify-center gap-1'>
          <IconButton label='More' link={`${pathname}/${project._id}`}>
            <FontAwesomeIcon icon={faAngleRight} />
          </IconButton>
          {project.previewUrl && (
            <IconButton label='Preview' link={project.previewUrl} newTab>
              <FontAwesomeIcon icon={faLaptop} />
            </IconButton>
          )}
          {project.repoFrontend && (
            <IconButton label='Frontend' link={project.repoFrontend} newTab>
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
          )}
          {project.repoBackend && (
            <IconButton label='Backend' link={project.repoBackend} newTab>
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
          )}
        </div>
      </motion.div>
    </motion.li>
  );
};

export default ProjectListItem;
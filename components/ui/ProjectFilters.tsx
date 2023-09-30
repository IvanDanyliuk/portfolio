'use client'

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { Popover, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import Button from './Button'
import { Technology } from '@/common.types'
import Checkbox from './Checkbox';
import { useWindowSize } from '@/hooks/useWindowSize';

interface ProjectFiltersProps {
  categories: string[];
  technologies: Technology[];
}

interface FiltersForm {
  categories: string[];
  technologies: string[];
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ categories, technologies }) => {
  const router = useRouter();
  const pathname = usePathname();

  const { width } = useWindowSize();

  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [checkedTechnologies, setCheckedTechnologies] = useState<string[]>([]);

  const {  
    control,
    handleSubmit,
    watch,
    getValues, 
    reset 
  } = useForm<FiltersForm>({
    defaultValues: {
      categories: [],
      technologies: []
    },
    mode: 'onChange'
  });

  const data = watch();

  const handleCategorySelect = (categoryName: string) => {
    const checkedData = checkedCategories.includes(categoryName) ? 
      checkedCategories.filter(item => item !== categoryName) : 
      [...checkedCategories, categoryName];
    setCheckedCategories(checkedData);
    return checkedData;
  }

  const handleTechnologySelect = (technologyName: string) => {
    const checkedData = checkedTechnologies.includes(technologyName) ? 
      checkedTechnologies.filter(item => item !== technologyName) : 
      [...checkedTechnologies, technologyName];
    setCheckedTechnologies(checkedData);
    return checkedData;
  }

  const setSearchParams = (pathname: string, categories: string[], technologies: string[]) => {
    switch(true) {
      case categories.length > 0 && technologies.length > 0:
        return `${pathname}?categories=${categories.join(';')}&technologies=${technologies.join(';')}`;
      case categories.length > 0:
        return `${pathname}?categories=${categories.join(';')}`;
      case technologies.length > 0:
        return `${pathname}?technologies=${technologies.join(';')}`;
      default:
        return pathname;
    }
  }

  const clearFilters = () => {
    reset();
    router.push(pathname)
  }

  useEffect(() => {
    router.push(setSearchParams(pathname, data.categories, data.technologies));
  }, [data, reset]);

  const filterForm = (
    <>
      <h4 className='mb-6 text-xl font-semibold'>Filters</h4>
      <form onSubmit={handleSubmit((data) => console.log('SUBMIT', data))}>
        <fieldset className='mb-7'>
          <legend className='mb-2 text-lg font-semibold'>Categories:</legend>
          {categories.map(category => (
            <Controller 
              key={uuid()}
              name='categories'
              render={({ field: { onChange: onCheckChange } }) => (
                <Checkbox 
                  label={category} 
                  checked={getValues().categories.includes(category)} 
                  onChange={() => onCheckChange(handleCategorySelect(category))}
                />
              )}
              control={control}
            />
          ))}
        </fieldset>
        <fieldset className='mb-7'>
          <legend className='mb-2 text-lg font-semibold'>Technologies:</legend>
          {technologies.map(technology => (
            <Controller 
              key={uuid()}
              name='technologies'
              render={({ field: { onChange: onCheckChange } }) => (
                <Checkbox 
                  label={technology.title} 
                  checked={getValues().technologies.includes(technology.title)} 
                  onChange={() => onCheckChange(handleTechnologySelect(technology.title))}
                />
              )}
              control={control}
            />
          ))}
        </fieldset>
        <Button title='Clear Filters' onClick={clearFilters} />
      </form>
    </>
  );

  if(!width) {
    return null;
  }

  return (
    <>
      {width! < 785 ? (
        <div className='fixed bottom-0 right-0 z-50'>
          <Popover className='relative flex items-end'>
            {({ open }) => (
              <>
                <Popover.Button className='m-3 w-12 h-12 text-lg border border-black rounded-full bg-white z-50'>
                  <FontAwesomeIcon icon={open ? faXmark : faFilter} />
                </Popover.Button>
                <Popover.Overlay className='fixed inset-0 bg-black opacity-50' />
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Popover.Panel>
                    <div className='w-auto h-screen px-10 py-5 bg-white'>
                      {filterForm}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      ) : (
        <div className='w-1/5 min-h-full top-0'>
          {filterForm}
        </div>
      )}
    </>
  )
}

export default ProjectFilters
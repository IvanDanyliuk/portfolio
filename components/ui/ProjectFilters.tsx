'use client'

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import Button from './Button'
import { Technology } from '@/common.types'
import Checkbox from './Checkbox';

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

  return (
    <div className='min-h-full top-0'>
      <h4 className='mb-6 text-xl font-semibold'>Filters</h4>
      <form onSubmit={handleSubmit((data) => console.log('SUBMIT', data))} className='flex flex-col gap-6'>
        <fieldset>
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
        <fieldset>
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
    </div>
  )
}

export default ProjectFilters
'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Project } from '@/common.types';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Select from '../ui/Select';
import { projectCategories } from '@/constants';
import Button from '../ui/Button';

interface ProjectFormProps {
  projectToUpdate?: {
    id: string;
    data: Project
  }
}

interface ProjectForm {
  name: string;
  summary: string;
  category: string;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ projectToUpdate }) => {
  const pathname = usePathname();

  const { 
    register,
    handleSubmit, 
    setError,
    control, 
    formState: { errors },
    reset 
  } = useForm<ProjectForm>();

  const handleFormSubmit = async (data: any) => {
    console.log(data)
  }

  useEffect(() => {
    if(projectToUpdate) {
      reset({

      })
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='relative w-full flex flex-col gap-3 form'>
      <Input 
        name='name' 
        label='Name' 
        register={register} 
        registerOptions={{ required: 'Name is required!' }} 
        error={errors.name} 
      />
      <Textarea 
        name='summary' 
        label='Summary' 
        register={register} 
        registerOptions={{ required: 'Summary is required!' }} 
        minLength={3} 
        maxLength={1500}
        error={errors.summary}
      />
      <Select 
        name='category' 
        label='Category' 
        register={register} 
        control={control} 
        registerOptions={{ required: 'Category is required!' }} 
        error={errors.category} 
        options={projectCategories} 
      />
      <Button type='submit' title='Create' />
    </form>
  )
}

export default ProjectForm
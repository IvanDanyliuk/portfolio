'use client'

import { useForm } from 'react-hook-form'
import Input from '@/components/Input'
import Editor from '@/components/Editor'
import Button from '@/components/Button'

interface FormState {
  greeting: string;
  biography: string;
}

interface User {
  greeting: string;
  bio: string;
  skills: { title: string }[];
  education: {
    institution: string;
    degree?: string;
    periodFrom: string;
    periodTo: string;
  }[];
  experience: {
    company: string;
    position: string;
    periodFrom: string;
    periodTo: string;
  }[];
  certifications: {
    imageUrl: string;
    verificationUrl: string;
  }[];
}

const BiographyForm = ({ user }: { user: User }) => {
  const { 
    register,
    control, 
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormState>();

  const handleBiographySubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form 
      onSubmit={handleSubmit(handleBiographySubmit)} 
      className='relative w-full flex flex-col gap-3 form'
    >
      <Input 
        name='greeting' 
        label='Greeting'
        register={register} 
        registerOptions={{ required: 'Greeting is required!' }} 
        error={errors.greeting}
      />
      <Editor 
        name='biography' 
        label='Biography'
        control={control} 
        register={register} 
        error={errors.biography} 
      />
      <Button type='submit' title='Submit' />
    </form>
  )
}

export default BiographyForm
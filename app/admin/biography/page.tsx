'use client'

import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'
import Input from '@/components/Input'
import Editor from '@/components/Editor';
import { error } from 'console';
import Button from '@/components/Button';

interface FormState {
  greeting: string;
  biography: string;
}

const Biography = () => {
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
    <div>
      <section>
        <h3 className='mb-3 text-xl font-semibold'>Biography</h3>
        <form 
          onSubmit={handleSubmit(handleBiographySubmit)} 
          className='relative mb-7 w-full flex flex-col gap-3 form'
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
      </section>
      <section>

      </section>
      <section>

      </section>
    </div>
  )
}

export default Biography
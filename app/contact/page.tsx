'use client'

import { useForm } from 'react-hook-form'
import Input from "@/components/Input";
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';
import SocialMediaList from '@/components/SocialMediaList';

interface Email {
  name: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors }, 
    getValues,
    reset 
  } = useForm<Email>();

  const submitFormData = async (data: any) => {
    console.log(data)
  }

  return (
    <div className='relative mx-auto w-full md:w-1/2 flex flex-col items-center'>
      <h2 className='mb-12 font-bold text-6xl text-center'>Let's talk!</h2>
      <form onSubmit={submitFormData} className='mx-auto mb-6 w-full flex flex-col gap-5 items-center'>
        <Input 
          name='name' 
          label='Name' 
          register={register} 
          registerOptions={{ required: 'Name is required!' }} 
          error={errors.name} 
        />
        <Input 
          name='subject' 
          label='Subject' 
          register={register} 
          registerOptions={{ required: 'Subject is required!' }} 
          error={errors.subject} 
        />
        <Textarea 
          name='message'
          label='Message'
          rows={6}
          minLength={3}
          maxLength={3000}
          register={register}
          registerOptions={{ required: 'Write you message!' }}
          error={errors.message}
        />
        <Button title='Send' type='submit' />
      </form>
      <hr className='my-12 w-full bg-gray-100 ' />
      <div>
        <SocialMediaList orientation='horizontal' />
      </div>
    </div>
  )
}
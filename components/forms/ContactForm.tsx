'use client'

import { useForm } from 'react-hook-form'
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ContactForm>();

  const handleFormSubmit = (data: any) => {
    console.log(data)

    reset();
  }
  
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='w-full flex flex-col items-center gap-3 form'>
      <Input 
        name='name' 
        label='Name' 
        register={register} 
        error={errors.name} 
        registerOptions={{ required: 'Enter your name' }} 
      />
      <Input 
        name='email' 
        label='Email' 
        type='email'
        register={register} 
        error={errors.email} 
        registerOptions={{ required: 'Enter your email' }} 
      />
      <Input 
        name='subject' 
        label='Subject' 
        register={register} 
        error={errors.subject} 
        registerOptions={{ required: 'Enter a subject of your email' }} 
      />
      <Textarea 
        name='message'
        label='Message'
        register={register}
        error={errors.message}
        registerOptions={{ required: 'Enter your message' }} 
        rows={7}
      />
      <Button type='submit' title='Send Message' />
    </form>
  )
}

export default ContactForm
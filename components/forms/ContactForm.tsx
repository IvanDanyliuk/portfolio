'use client'

import { useForm } from 'react-hook-form'
import Input from '../ui/common/Input';
import Textarea from '../ui/common/Textarea';
import Button from '../ui/common/Button';
import { sendEmail } from '@/lib/actions/common.actions';

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

  const handleFormSubmit = async (data: any) => {
    const response = await sendEmail(data)
    
    if(response?.success) {
      console.log('SUBMITTED!')
      reset();
    }
  };
  
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
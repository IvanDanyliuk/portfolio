'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendMessage } from '@/lib/actions';
import { ActionStatus } from '@/lib/types';
import { ContactFormData, contactFormDataSchema } from '@/lib/schema';


export const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormDataSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);

    const { status, error } = await sendMessage(formData);
    
    if(status === ActionStatus.Succeded) {
      reset();
      toast({
        title: 'Succeded!',
        description: 'Your message has been successfully send!',
      });
    }

    if(status === ActionStatus.Failed && error) {
      toast({
        title: 'Something went wrong!',
        description: 'Cannot sent the message. Please, try again!',
      });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className='relative w-full md:w-fit flex flex-col justify-center items-center space-y-3'
    >
      <div className='w-full'>
        <Input 
          placeholder='Name' 
          {...register('name')} 
          className='p-6 w-full md:min-w-96 border border-secondary rounded-full' 
        />
        {errors['name'] && (
          <p className='mt-2 px-6 text-xs text-red-600'>
            {errors['name']?.message}
          </p>
        )}
      </div>
      <div className='w-full'>
        <Input 
          placeholder='Email' 
          {...register('email')} 
          className='p-6 w-full md:min-w-96 border border-secondary rounded-full' 
        />
        {errors['email'] && (
          <p className='mt-2 px-6 text-xs text-red-600'>
            {errors['email']?.message}
          </p>
        )}
      </div>
      <div className='w-full'>
        <Input 
          placeholder='Subject' 
          {...register('subject')} 
          className='p-6 w-full md:min-w-96 border border-secondary rounded-full' 
        />
        {errors['subject'] && (
          <p className='mt-2 px-6 text-xs text-red-600'>
            {errors['subject']?.message}
          </p>
        )}
      </div>
      <div className='w-full'>
        <Textarea 
          placeholder='Message' 
          {...register('message')} 
          rows={10}
          className='p-6 w-full md:min-w-96 border border-secondary rounded-3xl' 
        />
        {errors['message'] && (
          <p className='mt-2 px-6 text-xs text-red-600'>
            {errors['message']?.message}
          </p>
        )}
      </div>
      <Button 
        type='submit' 
        className='px-10 py-6 bg-primary rounded-full'
      >
        {isSubmitting ? 'Loading' : 'Submit'}
      </Button>
    </form>
  );
};
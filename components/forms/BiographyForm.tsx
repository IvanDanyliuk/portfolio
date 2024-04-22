'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Editor from '@/components/ui/common/Editor';
import Button from '@/components/ui/common/Button';
import { updateGeneralData } from '@/lib/actions/user.actions';

interface BiographyFormProps {
  data: {
    userId: string;
    biography: string;
    photoUrl: string;
  }
}

interface FormState {
  biography: string;
}

const BiographyForm: React.FC<BiographyFormProps> = ({ data }) => {
  const pathname = usePathname();
  const { 
    register,
    control, 
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset
  } = useForm<FormState>();

  const handleBiographySubmit = async (formData: any) => {
    await updateGeneralData({ 
      userId: data.userId, 
      photoUrl: data.photoUrl, 
      biography: formData.biography, 
      pathname 
    });
    reset();
  }

  useEffect(() => {
    reset({
      biography: data ? data.biography : ''
    })
  }, []);

  useEffect(() => {
    if(isSubmitSuccessful) {
      toast.success('Biography has been updated!');
    }
  }, [isSubmitSuccessful]);

  return (
    <form 
      onSubmit={handleSubmit(handleBiographySubmit)} 
      className='mt-3 relative w-full flex flex-col items-start gap-3 form'
    >
      <Editor 
        name='biography' 
        control={control} 
        register={register} 
        error={errors.biography} 
      />
      <Button type='submit' title='Submit' />
    </form>
  )
}

export default BiographyForm
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Editor from '@/components/ui/Editor'
import Button from '@/components/ui/Button'
import { updateGeneralData } from '@/lib/actions/user.actions'

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
    formState: { errors },
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

  return (
    <form 
      onSubmit={handleSubmit(handleBiographySubmit)} 
      className='relative w-full flex flex-col gap-3 form'
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
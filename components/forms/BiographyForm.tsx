'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Editor from '@/components/ui/Editor'
import Button from '@/components/ui/Button'
import { updateUser } from '@/lib/actions/user.actions'
import { User } from '@/common.types'

interface BiographyFormProps {
  user: User;
}

interface FormState {
  biography: string;
}

const BiographyForm: React.FC<BiographyFormProps> = ({ user }) => {
  const pathname = usePathname();
  const { 
    register,
    control, 
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormState>();

  const handleBiographySubmit = async (data: any) => {
    await updateUser({ 
      userId: user.userId,
      pathname,
      biography: data.biography,
      photoUrl: user.photoUrl,
      skills: user.skills,
      education: user.education,
      certifications: user.certifications,
      experience: user.experience
    });
    reset();
  }

  useEffect(() => {
    reset({
      biography: user.biography
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
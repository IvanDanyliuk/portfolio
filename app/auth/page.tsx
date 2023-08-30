'use client'

import Button from '@/components/Button';
import Input from '@/components/Input'
import React, { FormEventHandler, SyntheticEvent } from 'react'
import { useForm } from 'react-hook-form'

interface Credentials {
  keyword: string;
  password: string;
}

const page = () => {
  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors }, 
    reset 
  } = useForm<Credentials>();

  const login = (data: any) => {
    console.log(data)

    reset()
  }

  return (
    <div className='flex flex-col grow justify-center items-center'>
      <h2 className='mb-3 text-3xl font-bold'>Login</h2>
      <form action="" onSubmit={login} className='w-full md:w-[350px] flex flex-col gap-3 items-center'>
        <Input 
          name='keyword' 
          label='Keyword' 
          register={register} 
          registerOptions={{ required: 'Provide the keyword!' }} 
          error={errors.keyword} 
        />
        <Input 
          name='password' 
          label='Password' 
          register={register} 
          registerOptions={{ required: 'Provide the password!' }} 
          error={errors.keyword} 
        />
        <Button type='submit' title='Login' />
      </form>
    </div>
  )
}

export default page
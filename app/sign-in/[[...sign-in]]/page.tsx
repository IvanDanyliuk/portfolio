'use client'

import React, { FormEventHandler, SyntheticEvent } from 'react'
import { SignIn } from '@clerk/nextjs'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button';
import Input from '@/components/Input'

// interface Credentials {
//   keyword: string;
//   password: string;
// }

// const page = () => {
//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors }, 
//     reset 
//   } = useForm<Credentials>();

//   const login = (data: any) => {
//     console.log(data)

//     reset()
//   }

//   return (
//     <div className='flex flex-col grow justify-center items-center'>
//       <h2 className='mb-3 text-3xl font-bold'>Login</h2>
//       <form action="" onSubmit={handleSubmit(login)} className='w-full md:w-[350px] flex flex-col gap-3 items-center form'>
//         <Input 
//           name='keyword' 
//           label='Keyword' 
//           register={register} 
//           registerOptions={{ required: 'Provide the keyword!' }} 
//           error={errors.keyword} 
//         />
//         <Input 
//           name='password' 
//           label='Password' 
//           register={register} 
//           registerOptions={{ required: 'Provide the password!' }} 
//           error={errors.keyword} 
//         />
//         <Button type='submit' title='Login' />
//       </form>
//     </div>
//   )
// }

// export default page

export default function Page() {
  return <SignIn />;
}
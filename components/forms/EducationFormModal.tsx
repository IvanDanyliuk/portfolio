'use client'

import { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import Button from '../ui/Button';
import Input from '../ui/Input';
import { User } from '@/common.types';
// import { updateUser } from '@/lib/actions/user.actions';

interface EducationFormModalProps {
  user: User;
}

interface EducationItem {
  institution: string;
  qualification?: string;
  periodFrom: string;
  periodTo: string;
}

const EducationFormModal: React.FC<EducationFormModalProps> = ({ user }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<EducationItem>();

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleAddEducationItem = async (data: any) => {
    if(data.institution && data.institution.trim()) {
      // await updateUser({
      //   userId: user.userId,
      //   pathname,
      //   biography: user.biography,
      //   photoUrl: user.photoUrl,
      //   skills: user.skills,
      //   certifications: user.certifications,
      //   experience: user.experience,
      //   education: [...user.education, data]
      // })
      reset();
      setIsOpen(false);
    }
  }

  return (
    <>
      <Button type='button' title='Add' onClick={handleModalOpen} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative w-1/3 z-10' onClose={handleModalOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add a new institution
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(handleAddEducationItem)} className='mt-3 form flex flex-col items-center gap-3'>
                    <Input 
                      name='institution' 
                      label='University/Courses' 
                      register={register} 
                      registerOptions={{ required: 'This field is required!' }} 
                      error={errors.institution}
                    />
                    <Input 
                      name='degree' 
                      label='Degree (optional)' 
                      register={register}  
                    />
                    <Input 
                      type='number'
                      name='periodFrom' 
                      label='From' 
                      register={register} 
                      registerOptions={{ required: 'This field is required!' }} 
                      error={errors.institution}
                    />
                    <Input 
                      type='number'
                      name='periodTo' 
                      label='To' 
                      register={register} 
                      registerOptions={{ required: 'This field is required!' }} 
                      error={errors.institution}
                    />
                    <Button type='submit' title='Add' />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default EducationFormModal
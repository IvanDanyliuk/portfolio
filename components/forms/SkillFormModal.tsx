'use client'

import { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Skill } from '@/common.types';
import { addSkill } from '@/lib/actions/skills.actions'

const SkillFormModal: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<Skill>();

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleAddSkill = async (skill: any) => {
    if(skill.title && skill.title.trim()) {
      await addSkill({
        skill,
        pathname
      });
      
      reset();
      setIsOpen(false);
    }
  }

  return (
    <>
      <Button type='button' width='auto' title='Add' onClick={handleModalOpen} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative w-1/3 z-10' onClose={handleModalOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Add a new skill
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(handleAddSkill)} className='mt-3 form flex flex-col items-center gap-3'>
                    <Input 
                      name='title' 
                      label='Title' 
                      register={register} 
                      registerOptions={{ required: 'Title is required!' }} 
                      error={errors.title}
                    />
                    <Input 
                      type='checkbox'
                      name='isAdditional' 
                      label='is additional' 
                      register={register} 
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

export default SkillFormModal
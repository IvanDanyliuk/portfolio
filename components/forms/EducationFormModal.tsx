'use client';

import { Fragment, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Button from '../ui/common/Button';
import Input from '../ui/common/Input';
import { addEducationItem } from '@/lib/actions/education.actions';
import { EducationItem } from '@/common.types';
import DatePicker from '../ui/common/DatePicker';

const EducationFormModal: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { 
    control, 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitSuccessful }, 
    reset 
  } = useForm<EducationItem>();

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleAddEducationItem = async (educationItem: any) => {
    if(educationItem.institution && educationItem.institution.trim()) {
      await addEducationItem({ educationItem, pathname });
      reset();
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if(isSubmitSuccessful) {
      toast.success('Done!');
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <Button type='button' width='auto' title='Add' onClick={handleModalOpen} />

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
                    <DatePicker 
                      name='periodFrom' 
                      label='From' 
                      control={control}
                      register={register} 
                      registerOptions={{ required: 'This field is required!' }} 
                      error={errors.periodFrom} 
                    />
                    <DatePicker 
                      name='periodTo' 
                      label='To' 
                      control={control}
                      register={register} 
                      registerOptions={{ required: 'This field is required!' }} 
                      error={errors.periodTo} 
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
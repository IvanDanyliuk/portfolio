'use client'

import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';

interface FeatureImageProps {
  imageUrl: string;
  altText?: string;
}

const FeatureImage: React.FC<FeatureImageProps> = ({ imageUrl, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Image 
        src={imageUrl} 
        alt={altText || 'image'} 
        width={0}
        height={0}
        sizes='100vw'
        className='w-full h-auto cursor-pointer'
        onClick={handleModalOpen}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative w-full z-10' onClose={handleModalOpen}>
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
                <Dialog.Panel className='transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <button onClick={handleModalOpen} className='certificate-cta-btn right-6 w-10 h-10'>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <Image 
                    src={imageUrl} 
                    alt={altText || 'image'} 
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-auto'
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default FeatureImage
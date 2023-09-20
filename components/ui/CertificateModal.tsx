'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface CertificationMoalProps {
  imageUrl: string;
  verificationUrl: string;
}

const CertificateModal: React.FC<CertificationMoalProps> = ({ imageUrl, verificationUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  }



  return (
    <>
      <div className='certificate-list-item' onClick={handleModalOpen}>
        <div className='backdrop'>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <Image src={imageUrl} alt='certificate' width={490} height={300} />
      </div>

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
                  {verificationUrl && (
                    <Link href={verificationUrl} className='absolute top-6 left-6 px-6 py-2 border border-black rounded-full bg-white hover:bg-black text-black hover:text-white transition cursor-pointer'>Verify</Link>
                  )}
                  <Image src={imageUrl} alt='certificate' width={1000} height={600} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CertificateModal
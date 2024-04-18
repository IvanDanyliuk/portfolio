'use client';

import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid'
import { navLinks } from '@/constants';
import { useWindowSize } from '@/hooks/useWindowSize';
import SocialMediaList from '../ui/common/SocialMediaList';


const NavbarMenu: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false)
  const { width } = useWindowSize();

  useEffect(() => {
    if(open) {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <>
      {width && width >= 640 ? (
        <ul className='md:flex justify-between gap-5 hidden'>
          {navLinks.map((item) => (
            <li key={uuid()}>
              <Link
                href={item.link}
                className={item.link === pathname ? 'nav-link__active' : 'nav-link'}
                aria-current={true ? 'page' : undefined}
              >
                {item.label}
            </Link>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <button onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faBars} className='text-3xl' />
          </button>
          <Transition.Root show={open} as={Fragment}>
            <Dialog as='div' className='relative z-50' onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-500'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-500'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
              </Transition.Child>

              <div className='fixed inset-0 overflow-hidden'>
                <div className='absolute inset-0 overflow-hidden'>
                  <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full '>
                    <Transition.Child
                      as={Fragment}
                      enter='transform transition ease-in-out duration-500 sm:duration-700'
                      enterFrom='translate-x-full'
                      enterTo='translate-x-0'
                      leave='transform transition ease-in-out duration-500 sm:duration-700'
                      leaveFrom='translate-x-0'
                      leaveTo='translate-x-full'
                    >
                      <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                        <Transition.Child
                          as={Fragment}
                          enter='ease-in-out duration-500'
                          enterFrom='opacity-0'
                          enterTo='opacity-100'
                          leave='ease-in-out duration-500'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <div className='absolute right-3 top-0 flex pr-2 pt-4 sm:pr-4'>
                            <button
                              type='button'
                              className='relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                              onClick={() => setOpen(false)}
                            >
                              <FontAwesomeIcon icon={faXmark} className='text-3xl text-black' />
                            </button>
                          </div>
                        </Transition.Child>
                        <div className='px-3 py-16 flex h-full flex-col justify-between overflow-y-scroll bg-white shadow-xl'>
                          <ul className='space-y-8 px-2 pb-3 pt-2'>
                            {navLinks.map((item) => (
                              <li key={uuid()} className='text-2xl'>
                                <Link 
                                  href={item.link} 
                                  className={`${pathname === item.link ? 'text-gray-800 main-bg font-semibold' : 'text-black bg-white'} block w-full px-5 py-3`}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className='px-6'>
                            <div className='mb-6 w-full h-[2px] bg-gray-300' />
                            <SocialMediaList orientation='horizontal' />
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      )}
    </>
  );
};

export default NavbarMenu;
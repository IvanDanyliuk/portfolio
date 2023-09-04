'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Disclosure, Transition } from '@headlessui/react'
import { UserButton } from '@clerk/nextjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuid } from 'uuid'
import { navLinks } from '@/constants'
import SocialMediaList from './SocialMediaList'


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const pathname = usePathname();

  return (
    <Disclosure as='nav' className='bg-white'>
      {({ open }) => (
        <>
          <div className='relative h-20 flex items-center justify-between'>
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
              <li>
                <UserButton afterSignOutUrl="/"/>
              </li>
            </ul>

            <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
              <Disclosure.Button className='relative inline-flex items-center justify-center p-2 text-2xl text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <FontAwesomeIcon icon={faBars} />
              </Disclosure.Button>
            </div>
          </div>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className='sm:hidden absolute top-0 left-0 w-full h-full z-10 bg-white'
          >
            <Disclosure.Panel static>
              <div className='px-2'>
                <div className='w-full h-20 flex justify-end items-center'>
                  <Disclosure.Button className='text-2xl p-2'>
                    <FontAwesomeIcon icon={faXmark} />
                  </Disclosure.Button>
                </div>
                <ul className='space-y-5 px-2 pb-3 pt-2'>
                  {navLinks.map((item) => (
                    <li key={uuid()}>
                      <Disclosure.Button
                        as='a'
                        href={item.link}
                        className={classNames(
                          item.link === pathname ? 'nav-link__active' : 'nav-link',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.link === pathname ? 'page' : undefined}
                      >
                      {item.label}
                    </Disclosure.Button>
                    </li>
                  ))}
                </ul>
                <div className='px-7 py-5 w-full absolute left-0 bottom-3'>
                  <SocialMediaList orientation='horizontal' />
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
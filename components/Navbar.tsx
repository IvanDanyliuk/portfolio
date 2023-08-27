'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Disclosure } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuid } from 'uuid'
import Logo from '@/components/Logo'
import { navLinks } from '@/constants'
import SocialMediaList from './SocialMediaList'


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const pathname = usePathname();

  return (
    <Disclosure as='nav' className='bg-white w-full'>
      {() => (
        <>
          <div className='relative w-full h-16 flex items-center justify-between'>
            <Logo />
            
            <div className='hidden sm:ml-6 sm:block'>
              <ul className='flex justify-between gap-5'>
                {navLinks.map((item) => (
                  <li>
                    <Link
                      key={uuid()}
                      href={item.link}
                      className={item.link === pathname ? 'nav-link__active' : 'nav-link'}
                      aria-current={true ? 'page' : undefined}
                    >
                      {item.label}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
              {/* Mobile menu button*/}
              <Disclosure.Button className='relative inline-flex items-center justify-center p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <FontAwesomeIcon icon={faBars} />
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden absolute top-0 left-0 w-full h-full z-10 bg-white'>
            <div className='p-3'>
              <div className='w-full flex justify-end'>
                <Disclosure.Button className='text-xl p-2'>
                  <FontAwesomeIcon icon={faXmark} />
                </Disclosure.Button>
              </div>
              <ul className='space-y-1 px-2 pb-3 pt-2'>
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
              <hr className='my-7 bg-gray-100' />
              <div className='px-10'>
                <SocialMediaList orientation='horizontal' />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
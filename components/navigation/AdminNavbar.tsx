'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { v4 as uuid } from 'uuid';
import { adminPanelLinks } from '@/constants';

const AdminNavbar = () => {
  const pathname = usePathname();

  return (
    <ul className='w-full md:w-72 flex flex-row md:flex-col gap-3'>
        {adminPanelLinks.map(({ label, link }) => (
          <li key={uuid()}>
            <Link href={link} className={pathname === link ? 'admin-nav-link__active' : 'admin-nav-link'}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
  )
}

export default AdminNavbar
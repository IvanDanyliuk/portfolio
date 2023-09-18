'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { v4 as uuid } from 'uuid';
import { adminPanelLinks } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowSize } from '@/hooks/useWindowSize';

const AdminNavbar = () => {
  const pathname = usePathname();
  const { width } = useWindowSize();

  return (
    <ul className='relative w-full md:w-72 flex flex-row md:flex-col gap-3'>
        {adminPanelLinks.map(({ label, icon, link }) => (
          <li key={uuid()} className='w-1/4 md:w-auto text-center'>
            <Link href={link} className={pathname === link ? 'admin-nav-link__active' : 'admin-nav-link'}>
              {width! > 786 ? label : (<FontAwesomeIcon icon={icon} />)}
            </Link>
          </li>
        ))}
      </ul>
  )
}

export default AdminNavbar
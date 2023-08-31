// 'use client'

import AdminNavbar from "@/components/AdminNavbar";

// import Link from 'next/link';
// import { usePathname } from 'next/navigation'
// import { v4 as uuid } from 'uuid';
// import { adminPanelLinks } from '@/constants';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  // const pathname = usePathname();

  return (
    <div className='py-3 flex flex-col md:flex-row grow'>
      {/* <ul className='w-full md:w-72 flex flex-row md:flex-col gap-3'>
        {adminPanelLinks.map(({ label, link }) => (
          <li key={uuid()}>
            <Link href={link} className={`p-3 block bg-gray-${pathname === link ? '300' : '200'}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul> */}
      <AdminNavbar />
      <div className='px-3'>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
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
    <div className='py-3 flex flex-col md:flex-row grow gap-7'>
      <AdminNavbar />
      <div className='flex-1'>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
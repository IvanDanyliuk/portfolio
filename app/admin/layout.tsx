'use client'

import { redirect } from 'next/navigation'
import AdminNavbar from '@/components/navigation/AdminNavbar'

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  // const { isLoaded, userId, getToken } = useAuth();

  // if ((!isLoaded || !userId) && (userId !== process.env.CLERK_USER_ID)) {
  //   redirect('/sign-in');
  // }

  return (
    <div className='py-3 flex flex-col md:flex-row grow gap-7'>
      <AdminNavbar />
      <div className='flex-1 pb-10'>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
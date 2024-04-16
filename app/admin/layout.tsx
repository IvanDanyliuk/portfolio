'use client'

import AdminNavbar from '@/components/navigation/AdminNavbar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className='container mx-auto py-3 flex flex-col md:flex-row grow gap-7'>
      <AdminNavbar />
      <div className='flex-1 pb-10'>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
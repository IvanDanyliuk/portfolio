interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        Navigation
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout
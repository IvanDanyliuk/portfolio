'use client';

import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Navbar from '@/components/navigation/Navbar';


const Header: React.FC = () => {
  const pathname = usePathname();

  console.log('HOMEPAGE PATHNAME', pathname)

  return (
    <header className={pathname === '/' ? 'homepage' : 'bg-white'}>
      <div className='container mx-auto flex justify-between items-center'>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
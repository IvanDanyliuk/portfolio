'use client';

import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Navbar from '@/components/navigation/Navbar';
import NavbarMenu from '@/components/navigation/NavbarMenu';


const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className={`sticky top-0 ${pathname === '/' ? 'main-bg' : 'bg-white'} backdrop-filter backdrop-blur-md bg-opacity-80 z-30`}>
      <div className='container mx-auto px-3 py-6 md:py-8 flex justify-between items-center'>
        <Logo />
        <NavbarMenu />
      </div>
    </header>
  );
};

export default Header;
'use client';

import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Navbar from '@/components/navigation/Navbar';


const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className={`sticky top-0 ${pathname === '/' ? 'homepage' : 'bg-white'} backdrop-filter backdrop-blur-md bg-opacity-80 z-30`}>
      <div className='container mx-auto flex justify-between items-center'>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
import Image from 'next/image';
import Link from 'next/link';
import { NavMenu } from './nav-menu';


export const Header: React.FC = () => {
  return (
    <header className='fixed w-full bg-white/95 backdrop-blur-sm z-10'>
      <nav className='mx-auto px-3 md:px-0 h-24 container flex justify-between items-center'>
        <Link href='/'>
          <Image 
            src='/logo.png'
            alt='Logo'
            width={50}
            height={50}
          />
        </Link>
        <NavMenu />
      </nav>
    </header>
  );
};
'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MENU_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';


export const Header: React.FC = () => {
  const pathname = usePathname();

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className='w-full'>
      <nav className='mx-auto h-24 container flex justify-between items-center'>
        <Link href='/'>
          <Image 
            src='/logo.png'
            alt='Logo'
            width={50}
            height={50}
          />
        </Link>
        <ul className='flex items-center gap-x-16'>
          {MENU_LINKS.map(link => (
            <li key={crypto.randomUUID()}>
              {pathname === '/' ? (
                <button 
                  onClick={() => handleScroll(link.href.slice(1))} 
                  className={cn(
                    pathname === link.href ? 'before:w-full' : 'before:w-0 hover:before:w-full',
                    'relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 text-primary font-medium'
                  )}
                >
                  {link.label}
                </button>
              ) : (
                <Link 
                  href={link.href}
                  className={cn(
                    pathname === link.href ? 'before:w-full' : 'before:w-0 hover:before:w-full',
                    'relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-blue-500 before:transition-all before:duration-300 text-primary font-medium'
                  )}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
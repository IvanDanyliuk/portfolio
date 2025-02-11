'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AlignJustify, ArrowDownToLine } from 'lucide-react';
import { ActionLink } from './action-link';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '../ui/sheet';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/lib/use-media-query';
import { MENU_LINKS } from '@/lib/constants';


export const NavMenu: React.FC = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('/');
  const isMobile = useMediaQuery('(max-width: 768px');

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ 
        top: y, 
        behavior: 'smooth',
      });
    }

    setActiveLink(`/${id}`);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setActiveLink(`/${entry.target.id !== 'home' ? entry.target.id : ''}`);
        }
      });
    }, observerOptions);

    MENU_LINKS.forEach((link) => {
      const id = link.href === '/' ? 'home' : link.href.slice(1);
      const section = document.getElementById(id);
      if(section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      {
        isMobile ? (
          <Sheet>
            <SheetTrigger>
              <AlignJustify className='w-10 h-10' />
            </SheetTrigger>
            <SheetContent className='py-16 h-screen flex flex-col justify-between items-center'>
              <SheetHeader className='hidden'>
                <SheetTitle />
                <SheetDescription />
              </SheetHeader>
              <div className='py-6 flex flex-col justify-between gap-y-12'>
                {MENU_LINKS.map(link => (
                  <Link 
                    key={crypto.randomUUID()} 
                    href={link.href}
                    className={cn(
                      pathname === link.href ? 'before:w-full' : 'before:w-0 hover:before:w-full',
                      'relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 text-primary text-lg text-center font-medium'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <ActionLink 
                href='/Ivan_Danyliuk_CV.pdf' 
                download 
                label='Download CV'
              >
                <ArrowDownToLine />
              </ActionLink>
            </SheetContent>
          </Sheet>
        ) : (
          <ul className='flex items-center gap-x-16'>
            {MENU_LINKS.map(link => (
              <li key={crypto.randomUUID()}>
                {pathname === '/' ? (
                  <button 
                    onClick={() => handleScroll(link.href === '/' ? 'home' : link.href.slice(1))} 
                    className={cn(
                      activeLink === link.href ? 'before:w-full' : 'before:w-0 hover:before:w-full',
                      'relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 text-primary font-medium'
                    )}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link 
                    href={link.href}
                    className={cn(
                      pathname === link.href ? 'before:w-full' : 'before:w-0 hover:before:w-full',
                      'relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 text-primary font-medium'
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )
      }
    </>
  );
};
import { AlignJustify } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import Link from 'next/link';
import { MENU_LINKS } from '@/lib/constants';
import { DownloadCV } from './donwload-cv';


export const NavMenuMobile: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <AlignJustify />
      </DrawerTrigger>
      <DrawerContent>
        <div className='py-6 h-screen flex flex-col justify-between'>
          {MENU_LINKS.map(link => (
            <Link 
              key={crypto.randomUUID()} 
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <DownloadCV />
      </DrawerContent>
    </Drawer>
  );
};
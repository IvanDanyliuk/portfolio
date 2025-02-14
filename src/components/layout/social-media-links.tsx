import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SOCIAL_MEDIA_LINKS } from '@/lib/constants';


interface ISocialMediaList {
  orientation?: 'vertical' | 'horizontal';
};


export const SocialMediaLinks: React.FC<ISocialMediaList> = ({ 
  orientation = 'vertical' 
}) => {
  return (
    <ul className={cn(
      orientation === 'vertical' ? 'flex-col' : 'flex-row   ', 
      'p-6 flex gap-10'
    )}>
      {SOCIAL_MEDIA_LINKS.map(link => (
        <li key={crypto.randomUUID()}>
          <Link href={link.href} target='_blank'>
            <Image 
              src={link.icon} 
              alt={link.label} 
              width={40} 
              height={40} 
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
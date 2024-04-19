import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuid } from 'uuid';
import { socialMediaLinks } from '@/constants';

type ListOrientation = 'horizontal' | 'vertical';


interface SocialMediaListProps {
  orientation: ListOrientation;
  [props: string]: any
}


const SocialMediaList = ({ orientation, ...props }: SocialMediaListProps) => {
  return (
    <ul className={`${orientation === 'horizontal' ? 'socialMediaList__horizontal' : 'socialMediaList__vertical'} ${props.className}`}>
      {socialMediaLinks.map(({ icon, url }) => (
        <li key={uuid()}>
          <Link href={url} target='_blank'>
            <FontAwesomeIcon icon={icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
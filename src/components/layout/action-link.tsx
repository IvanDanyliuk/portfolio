import Link from 'next/link';
import { ReactNode } from 'react';


interface IActionLink {
  href: string;
  label: string;
  download: boolean;
  children: ReactNode;
}


export const ActionLink: React.FC<IActionLink> = ({ 
  href, 
  label, 
  download, 
  children 
}) => {
  return (
    <Link href={href} download={download}>
      <span>
        {label}
      </span>
      {children}
    </Link>
  );
};
import React, { ReactNode, useRef, useState } from 'react';
import Link from 'next/link';

interface IconButtonProps {
  children: ReactNode;
  label: string;
  link: string;
  newTab?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ children, label, link, newTab, ...props }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<any>(null);

  return (
    <Link
      href={link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      target={newTab ? '_blank' : '_self'}
      className='flex px-4 py-2 items-center rounded-lg text-lg text-black bg-white'
      {...props}
    >
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className='overflow-x-hidden transition-all duration-300 ease-out'
      >
        <span ref={ref} className='pr-2 text-sm'>
          {label}
        </span>
      </div>
      <div className='w-7 h-7 flex justify-center items-center'>
        {children}
      </div>
    </Link>
  )
}

export default IconButton
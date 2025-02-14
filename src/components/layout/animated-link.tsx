'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


interface IAnimatedLink {
  href: string;
  text: string;
  download?: boolean;
  children: ReactNode;
};


export const AnimatedLink: React.FC<IAnimatedLink> = ({ 
  href, 
  text, 
  download, 
  children 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, []);

  return (
    <Link 
      href={href} 
      className='w-fit'
      download={download}
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ width: 50, height: 50 }}
        animate={{ width: isHovered ? textWidth + 30 : 50, height: 50 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='relative w-fit h-fit flex items-center bg-white border border-primary rounded-full overflow-hidden'
      >
        <motion.div
          className='absolute top-0 left-0 w-12 h-12 flex justify-center items-center rounded-full text-white bg-primary z-10'
        >
          {children}
        </motion.div>
        <motion.span
          ref={textRef}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='ml-2 pl-14 text-primary whitespace-nowrap'
        >
          {text}
        </motion.span>
      </motion.div>
    </Link>
  );
};
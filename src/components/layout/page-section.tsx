'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';


interface IPageSection { 
  id: string; 
  children: ReactNode; 
};


export const PageSection: React.FC<IPageSection> = ({ 
  id,  
  children 
}) => {
  return (
    <motion.section
      id={id}
      className='w-full'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';


interface IPageSection { 
  id: string; 
  className?: string;
  children: ReactNode; 
};


export const PageSection: React.FC<IPageSection> = ({ 
  id, 
  className, 
  children 
}) => {
  return (
    <motion.section
      id={id}
      className={`w-full ${className || ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};
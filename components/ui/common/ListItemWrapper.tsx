'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';


interface IListItemWrapper {
  delay?: number;
  duration?: string;
  children: ReactNode;
  index: number;
  [props: string]: any;
}


const ListItemWrapper: React.FC<IListItemWrapper> = ({ delay = 0.25, duration = 0.8, children, index, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <motion.li ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration, delay: delay * index
        }}
        {...props}
      >
        {children}
      </motion.div>
    </motion.li>
  );
};

export default ListItemWrapper;
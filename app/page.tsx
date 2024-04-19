'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SocialMediaList from '@/components/ui/common/SocialMediaList';


export default function Home() {
  return (
    <div className='h-full grow flex justify-center items-center main-bg'>
      <div className='container mx-auto px-3 min-h-full flex flex-row-reverse md:flex-row justify-between items-center gap-10'>
        <div className='flex-1'>
          <div className='relative px-3 overflow-hidden'>
            <motion.div 
              initial='invisible'
              animate='visible'
              variants={{
                invisible: {
                  y: 'var(--y-from, 0px)'
                },
                visible: {
                  y: 'var(--y-to, 0px)'
                }
              }}
              transition={{
                duration: 1,
                delay: 1
              }}
              className='py-6 [--y-from:300px] [--y-to:15px]'
            >
              <h1 className='text-5xl md:text-7xl lg:text-8xl drop-shadow-xl'>
                Hello, I am <strong className='font-bold'>Ivan Danyliuk</strong>.
              </h1>
              <h2 className='mt-5 text-xl md:text-4xl text-gray-400 drop-shadow-xl'>
                I am a creative frontend developer based in Ukraine
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{
              width: 0
            }}
            animate={{
              width: [0, '100%', 0]
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.5, 1]
            }}
            className='mx-3 my-6 h-[2px] bg-gray-400' 
          />
          <div className='relative mt-6 px-3 overflow-hidden'>
            <motion.div 
              initial='invisible'
              animate='visible'
              variants={{
                invisible: {
                  y: 'var(--y-from, 0px)'
                },
                visible: {
                  y: 'var(--y-to, 0px)'
                }
              }}
              transition={{
                duration: 1,
                delay: 1
              }}
              className='pt-3 pb-8 flex flex-col md:flex-row gap-6 [--y-from:-200px] md:[--y-from:-100px] [--y-to:0]'
            >
              <Link 
                href='/projects' 
                className='cta-link'
              >
                See my projects
              </Link>
              <Link 
                href='/assets/Ivan_Danyliuk_CV.pdf' 
                download='Ivan_Danyliuk_CV.pdf'
                target='_blank'
                rel='noreferrer'
                className='cta-link'
              >
                Download CV
              </Link>
            </motion.div>
          </div>
        </div>
        <div className='relative flex justify-center'>
          <div className='social-media-container'>
            <SocialMediaList orientation='vertical' />
          </div>
        </div>
      </div>
    </div>
  );
};

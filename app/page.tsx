'use client'

import Link from 'next/link';
import SocialMediaList from '@/components/ui/common/SocialMediaList';

export default function Home() {
  return (
    <div className='h-full grow flex justify-center items-center main-bg'>
      {/* <div className='relative w-full h-full container mx-auto flex flex-col md:flex-row justify-around md:justify-center items-center gap-6 homepage'>
        <div className='relative w-full md:w-10/12 flex flex-col justify-center items-center'>
          <div className='relative w-full h-60 md:h-72 overflow-hidden border-b-4 border-gray-900'>
            <div className='py-5 absolute top-block'>
              <h1 className='text-5xl md:text-7xl lg:text-8xl drop-shadow-xl'>Hello, I am <strong className='font-bold'>Ivan Danyliuk</strong>.</h1>
              <h2 className='mt-5 text-xl md:text-3xl text-gray-400 drop-shadow-xl'>I am a creative frontend developer based in Ukraine</h2>
            </div>
          </div>
          <div className='relative w-full h-24 md:h-72 lg:h-56 overflow-hidden'>
            <div className='py-5 absolute left-0 top-0 bottom-block'>
              <div>
                <SocialMediaList orientation='horizontal' />
              </div>
            </div>
          </div>
        </div>

        <div className='md:h-full flex md:flex-1 flex-col justify-center items-center gap-8'>
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
        </div>
      </div> */}
      <div className='container mx-auto px-3 min-h-full flex justify-between items-center gap-10'>
        <div className='flex-1'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl drop-shadow-xl'>Hello, I am <strong className='font-bold'>Ivan Danyliuk</strong>.</h1>
          <h2 className='mt-5 text-xl md:text-4xl text-gray-400 drop-shadow-xl'>I am a creative frontend developer based in Ukraine</h2>
          <div className='mt-6 flex flex-col md:flex-row gap-6'>
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

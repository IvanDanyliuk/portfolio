'use client'

import Link from 'next/link';
import SocialMediaList from '@/components/SocialMediaList';

export default function Home() {
  return (
    <div className='flex w-full relative flex-col grow justify-between overflow-hidden'>
      <div className='flex flex-col md:flex-row grow justify-between items-center'>
        <div className='relative w-full md:w-1/2 py-24 md:py-0 md:h-auto greeting-block'>
          <h1 className='mainHeading'>Hi! I am <strong className='font-bold'>Ivan Danyliuk</strong>.</h1>
          <h2 className='subHeading'>I am a creative frontend developer based in Ukraine</h2>
        </div>
        <div className='relative w-full md:w-1/2 flex grow flex-col gap-5 items-center justify-center btns-block'>
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
      <div className='w-full md:w-1/6 h-20 px-7 md:px-0 social-media'>
        <SocialMediaList orientation='horizontal' />
      </div>
    </div>
  )
}

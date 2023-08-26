'use client'

import Link from 'next/link';
import SocialMediaList from '@/components/SocialMediaList';

export default function Home() {
  return (
    <div className='flex w-full flex-col grow justify-between overflow-hidden'>
      <div className='flex grow justify-between items-center'>
        <div className='relative w-1/2 greeting-block'>
          <h1 className='mainHeading'>Hi! I am <strong className='font-bold'>Ivan Danyliuk</strong>.</h1>
          <h2 className='subHeading'>I am a creative frontend developer based in Ukraine</h2>
        </div>
        <div className='flex grow flex-col gap-5 items-center btns-block'>
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
      <div className='w-1/6 h-20 social-media'>
        <SocialMediaList orientation='horizontal' />
      </div>
    </div>
  )
}

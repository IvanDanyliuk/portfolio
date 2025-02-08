import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ActionLink, PageSection } from '@/components/layout';
import { Separator } from '@/components/ui/separator';
import Portrait from '../../public/portrait.png';
import LinkedIn from '../../public/social-media-icons/icons8-linked-in.svg';
import Github from '../../public/social-media-icons/icons8-github.svg';
import Instagram from '../../public/social-media-icons/icons8-instagram.svg';
import Facebook from '../../public/social-media-icons/icons8-facebook.svg';


export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='relative mx-auto container flex flex-col flex-1'>
      <PageSection id='' className='relative min-h-[calc(100vh-96px)] flex flex-1 gap-3'>
        <div className='pb-3 w-[46px] min-h-full hidden md:flex flex-col justify-between items-center gap-y-3 text-secondary'>
          <p className='[writing-mode:vertical-lr] text-xs'>
            Front-end developer
          </p>
          <Separator orientation='vertical' className='flex-1' />
          <p className='text-xs'>
            {currentYear}
          </p>
        </div>
        <div className='relative min-h-full flex flex-1 flex-col md:flex-row justify-between items-center gap-6 bg-white'>
          <div className='relative pl-0 md:pl-20 h-full flex flex-col flex-1 justify-around'>
            <div className='hidden md:flex items-center gap-10'>
              <ActionLink 
                href='/Ivan_Danyliuk_CV.pdf' 
                label='Download CV' 
                download
              >
                <ArrowDownToLine />
              </ActionLink>
              <ActionLink 
                href='/projects' 
                label='See my projects'
              >
                <ArrowRight />
              </ActionLink>
              <ActionLink 
                href='/contact' 
                label='Let&apos;s talk'
              >
                <ArrowUpRight />
              </ActionLink>
            </div>
            <div className='text-primary'>
              <h1 className='-mx-4 md:-mx-8 text-[8rem] md:text-[16rem] leading-[8rem] md:leading-[16rem]'>
                Hello
              </h1>
              <h2 className='relative before:relative before:w-12 md:before:w-44 before:h-0.5 before:bg-primary flex items-center gap-6 text-xl md:text-3xl tracking-widest'>
                I am Ivan Danyliuk.
              </h2>
            </div>
            <Link href='#about' className='hidden md:flex items-center gap-2 text-base text-secondary font-semibold'>
              <span>
                Scroll down
              </span>
              <ArrowDown className='w-5 h-5' />
            </Link>
          </div>
          <div className='relative md:min-h-[calc(100vh-96px)] flex flex-row-reverse md:flex-row justify-between md:justify-end items-end gap-10'>
            <Image src={Portrait} alt='portrait' width={0} height={0} className='w-auto max-w-full h-full md:h-[80vh] object-contain' />
            <ul className='p-6 flex flex-col gap-10'>
              <li>
                <Link href='https://www.linkedin.com/in/ivan-danyliuk/'>
                  <Image 
                    src={LinkedIn} 
                    alt='Linked In' 
                    width={40} 
                    height={40} 
                  />
                </Link>
              </li>
              <li>
                <Link href='https://github.com/IvanDanyliuk'>
                  <Image 
                    src={Github} 
                    alt='Github' 
                    width={40} 
                    height={40} 
                  />
                </Link>
              </li>
              <li>
                <Link href='https://github.com/IvanDanyliuk'>
                  <Image 
                    src={Instagram} 
                    alt='Instagram' 
                    width={40} 
                    height={40} 
                  />
                </Link>
              </li>
              <li>
                <Link href='https://www.facebook.com/ivan.a.danyliuk'>
                  <Image 
                    src={Facebook} 
                    alt='Facebook' 
                    width={40} 
                    height={40} 
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </PageSection>
      <PageSection id='about'>
        About section
      </PageSection>
      <PageSection id='projects'>
        Projects me section
      </PageSection>
      <PageSection id='contact'>
        Contact section
      </PageSection>
    </div>
  );
};

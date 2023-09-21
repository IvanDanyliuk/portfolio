import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialMediaList from '@/components/ui/SocialMediaList';

export default function Contact() {
  return (
    <div className='mx-auto py-6 w-full h-full md:w-1/2 overflow-hidden bg-white'>
      <h2 className='mb-10 font-bold text-5xl text-center animate-from-top'>Let's talk!</h2>
      <div className='flex justify-center'>
        <Link href='mailto:ivandaniliuk@gmail.com' className='flex justify-center items-center my-16 w-32 h-32 text-5xl border-2 rounded-full bg-black text-white pulse'>
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
      <div className='bg-gray-100 line' />
      <div className='px-10 md:px-32'>
        <SocialMediaList orientation='horizontal' />
      </div>
    </div>
  )
}
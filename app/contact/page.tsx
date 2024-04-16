import SocialMediaList from '@/components/ui/common/SocialMediaList';
import ContactForm from '@/components/forms/ContactForm';

export default function Contact() {
  return (
    <div className='container mx-auto py-6 w-full h-full md:w-1/2 flex flex-1 flex-col justify-center items-center overflow-hidden bg-white'>
      <h2 className='mb-10 font-bold text-5xl text-center animate-from-top'>Let's talk!</h2>
      <ContactForm />
      <div className='bg-gray-100 line' />
      <div className='px-10 md:px-32'>
        <SocialMediaList orientation='horizontal' />
      </div>
    </div>
  );
};
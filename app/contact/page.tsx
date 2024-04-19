import SocialMediaList from '@/components/ui/common/SocialMediaList';
import ContactForm from '@/components/forms/ContactForm';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function Contact() {
  return (
    <div className='container mx-auto px-3 md:px-0 py-6 w-full h-full md:w-1/2 flex flex-1 flex-col justify-center items-center gap-10 md:gap-16 overflow-hidden bg-white'>
      <SectionWrapper>
        <h2 className='mb-10 font-bold text-5xl text-center'>Let's talk!</h2>
        <ContactForm />
      </SectionWrapper>
      <SectionWrapper className='space-y-6'>
        <div className='w-full h-[2px] bg-gray-100' />
        <div className='mx-auto md:w-[30rem]'>
          <SocialMediaList orientation='horizontal' />
        </div>
      </SectionWrapper>
    </div>
  );
};
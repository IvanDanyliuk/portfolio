import { ContactForm } from "./_components/contact-form";

export default function ContactPage() {
  return (
    <div className='w-full h-[calc(100vh-6rem)]'>
      <div className='relative mx-auto p-3 md:p-0 h-full container flex flex-col justify-center items-center gap-6'>
        <h1 className='text-center text-6xl text-primary font-medium'>
          Let&apos;s talk!
        </h1>
        <p className='text-center text-lg text-secondary'>
          I’m always excited to collaborate on new and innovative projects.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};
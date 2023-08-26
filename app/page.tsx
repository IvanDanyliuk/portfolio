import SocialMediaList from "@/components/SocialMediaList";

export default function Home() {
  return (
    <div className='flex w-full flex-col grow justify-between'>
      <div className='flex grow justify-between items-center'>
        <div className='w-1/2'>
          <h1 className='mainHeading'>Hi! I am <strong className='font-bold'>Ivan Danyliuk</strong>.</h1>
          <h2 className='subHeading'>I am a creative frontend developer based in Ukraine</h2>
        </div>
        <div>

        </div>
      </div>
      <div className='py-6 w-1/6'>
        <SocialMediaList orientation='horizontal' />
      </div>
    </div>
  )
}

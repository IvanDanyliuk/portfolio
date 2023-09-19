import SocialMediaList from "@/components/ui/SocialMediaList"
import { fetchUserData } from "@/lib/actions/user.actions"
import Image from "next/image"
import userPhoto from '@/public/assets/photo.png'

const About = async () => {
  const userInfo = await fetchUserData();
  const technicalSkills = userInfo.skills.filter(skill => !skill.isAdditional && JSON.parse(JSON.stringify(skill)));
  const additionalSkills = userInfo.skills.filter(skill => skill.isAdditional && JSON.parse(JSON.stringify(skill)));

  return (
    <div>
      <section className='w-full flex gap-x-6 border-b-[1px] border-gray-100'>
        <div className='flex border-r-[1px] border-gray-100'>
          <div>
            <h2 className='mb-7 text-4xl'>Hi! My name is <strong className='font-bold'>Ivan Danyliuk</strong></h2>
            <div dangerouslySetInnerHTML={{ __html: userInfo.generalData.biography }} className='pr-7 font-base' />
          </div>
          <Image src={userPhoto} alt='photo' className='bottom-0 w-auto h-[450px] flex' />
        </div>
        <SocialMediaList orientation='vertical' />
      </section>
      <section>
        <h3>Experience</h3>
        
      </section>
      <section>

      </section>
      <section>

      </section>
    </div>
  )
}

export default About
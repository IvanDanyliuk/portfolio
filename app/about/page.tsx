import Image from 'next/image'
import { v4 as uuid } from 'uuid'
import SocialMediaList from '@/components/ui/SocialMediaList'
import { fetchUserData } from '@/lib/actions/user.actions'
import userPhoto from '@/public/assets/photo.png'
import { formatDate } from '@/lib/helpers/heplers'
import { fetchCertifications } from '@/lib/actions/certifications.actions'
import CertificateModal from '@/components/ui/CertificateModal'

const About = async () => {
  const userInfo = await fetchUserData();
  const certifications = await fetchCertifications();
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
      <section className='py-10 border-b-[1px]'>
        <h3 className='mb-6 text-4xl text-center font-semibold'>Experience</h3>
        <ul>
          {userInfo.experience.map(item => (
            <li key={uuid()} className='flex gap-3 md:gap-16'>
              <div className='text-base'>
                {`${formatDate(item.periodFrom, 'month/year')} - ${formatDate(item.periodTo, 'month/year')}`}
              </div>
              <div>
                <p className='text-lg font-semibold'>{item.position}</p>
                <p className='font-semibold'>{item.company}</p>
                <p className='mt-2 font-semibold italic'>Responsibilities:</p>
                <div dangerouslySetInnerHTML={{ __html: item.responsibilities }} className='content-list' />
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className='py-10 flex justify-between gap-6 border-b-[1px]'>
        <div>
          <h3 className='mb-6 text-3xl text-center font-semibold'>Technical Skills</h3>
          <ul className='flex flex-wrap gap-3'>
            {technicalSkills.map(skill => (
              <li key={uuid()} className='px-5 py-2 border-none rounded-full bg-gray-100'>
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='mb-6 text-3xl text-center font-semibold'>Additional Skills</h3>
          <ul className='flex flex-wrap gap-3'>
            {additionalSkills.map(skill => (
              <li key={uuid()} className='px-5 py-2 border-none rounded-full bg-gray-100'>
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='mb-6 text-3xl text-center font-semibold'>Education</h3>
          <ul>
            {userInfo.education.map(item => (
              <li key={uuid()} className='mb-3 flex gap-x-10'>
                <div className='text-base'>
                  {`${formatDate(item.periodFrom, 'year')} - ${formatDate(item.periodTo, 'year')}`}
                </div>
                <div>
                  <p className='text-lg font-semibold'>{item.institution}</p>
                  <p className='font-semibold'>{item.degree}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='py-10 border-b-[1px]'>
        <h3 className='mb-6 text-4xl text-center font-semibold'>Courses & Certifications</h3>
        <p className='px-10 md:px-52 text-center'>From the first day when I first got into front-end development until now, I have completed plenty of courses and learning programs. I gained a solid understanding of web development standards and principles.</p>
        <ul className='py-12 flex flex-wrap gap-6'>
          {certifications.map(certificate => (
            <li key={uuid()} className='relative border border-gray-100 rounded-lg overflow-hidden'>
              <CertificateModal 
                imageUrl={certificate.imageUrl} 
                verificationUrl={certificate.verificationUrl} 
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default About
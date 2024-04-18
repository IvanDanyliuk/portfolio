import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import SocialMediaList from '@/components/ui/common/SocialMediaList';
import { fetchUserData } from '@/lib/actions/user.actions';
import userPhoto from '@/public/assets/photo.png';
import { formatDate } from '@/lib/helpers/heplers';
import { fetchCertifications } from '@/lib/actions/certifications.actions';
import CertificateModal from '@/components/ui/certifications/CertificateModal';
import { Skill } from '@/common.types';
import SectionWrapper from '@/components/ui/SectionWrapper';


const About = async () => {
  const userInfo = await fetchUserData();
  const certifications = await fetchCertifications();
  const technicalSkills = userInfo.skills.filter(skill => !skill.isAdditional && JSON.parse(JSON.stringify(skill)));
  const additionalSkills = userInfo.skills.filter(skill => skill.isAdditional && JSON.parse(JSON.stringify(skill)));

  return (
    <div className='container mx-auto px-3 md:px-0'>
      <SectionWrapper className='relative pt-3 w-full flex flex-col md:flex-row items-end gap-6 border-b-[1px] border-gray-100'>
        <div className='w-full md:w-2/3 lg:w-3/4'>
          <h2 className='mb-7 text-4xl'>Hi! My name is <strong className='font-bold'>Ivan Danyliuk</strong></h2>
          <div 
            dangerouslySetInnerHTML={{ __html: userInfo.generalData.biography }} 
            className='pb-6 md:pr-7 text-sm md:text-base' 
          />
        </div>
        <div className='w-full md:w-1/3 lg:w-1/4 h-full flex md:flex-col-reverse lg:flex-row justify-end md:justify-between md:items-end lg:items-center gap-3'>
          <Image 
            src={userPhoto} 
            alt='photo' 
            className='bottom-0 w-auto h-auto max-h-[400px] lg:max-h-[450px] flex border-r border-gray-100' 
          />
          <SocialMediaList orientation='vertical' />
        </div>
      </SectionWrapper>
      <SectionWrapper className='py-10 md:py-14 border-b-[1px]'>
        <h3 className='mb-6 text-2xl md:text-4xl text-center font-semibold'>Experience</h3>
        <table>
          <tbody>
            {userInfo.experience.map(item => (
              <tr key={uuid()}>
                <td className='text-xs md:text-base h-full pr-2 md:pr-6 align-top'>
                  {`${formatDate(item.periodFrom, 'month/year')}-${formatDate(item.periodTo, 'month/year')}`}
                </td>
                <td>
                  <p className='text-sm md:text-lg font-semibold'>
                    {item.position}
                  </p>
                  <p className='text-xs md:text-base font-semibold'>
                    {item.company}
                  </p>
                  <p className='mt-2 text-xs md:text-base font-semibold italic'>Responsibilities:</p>
                  <div 
                    dangerouslySetInnerHTML={{ __html: item.responsibilities }} 
                    className='content-list text-xs md:text-base' 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionWrapper>
      <SectionWrapper className='relative w-full py-10 md:py-14 flex flex-col md:flex-row justify-between gap-6 border-b-[1px]'>
        <div className='w-full lg:w-1/3'>
          <h3 className='mb-6 text-xl md:text-3xl text-center md:text-start font-semibold'>Technical Skills</h3>
          <ul className='flex flex-wrap gap-3'>
            {technicalSkills.map((skill: Skill) => (
              <li key={uuid()} className='px-5 py-2 border-none rounded-full bg-gray-100'>
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full lg:w-1/3'>
          <h3 className='mb-6 text-xl md:text-3xl text-center md:text-start font-semibold'>Additional Skills</h3>
          <ul className='flex flex-wrap gap-3'>
            {additionalSkills.map((skill: Skill) => (
              <li key={uuid()} className='px-5 py-2 border-none rounded-full bg-gray-100'>
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full lg:w-1/3'>
          <h3 className='mb-6 text-xl md:text-3xl text-center md:text-start font-semibold'>Education</h3>
          <table>
            <tbody>
              {userInfo.education.map(item => (
                <tr key={uuid()}>
                  <td className='pr-6 h-full text-xs md:text-base  align-top'>
                    {`${formatDate(item.periodFrom, 'year')}-${formatDate(item.periodTo, 'year')}`}
                  </td>
                  <td>
                    <p className='text-sm md:text-lg font-semibold'>
                      {item.institution}
                    </p>
                    <p className='text-xs md:text-base font-semibold'>
                      {item.degree}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>
      <SectionWrapper className='pt-10 md:pt-14'>
        <h3 className='mb-6 text-2xl md:text-4xl text-center font-semibold'>Courses & Certifications</h3>
        <p className='px-10 md:px-24 lg:px-52 text-xs md:text-base text-center'>From the first day when I first got into front-end development until now, I have completed plenty of courses and learning programs. I gained a solid understanding of web development standards and principles.</p>
        <ul className='py-6 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-5'>
          {certifications.reverse().map(certificate => (
            <li key={uuid()} className='relative border border-gray-100 rounded-lg overflow-hidden shadow-md'>
              <CertificateModal 
                imageUrl={certificate.imageUrl} 
                verificationUrl={certificate.verificationUrl} 
              />
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </div>
  );
};

export default About;
import { ArrowDownToLine, ArrowRight, ArrowUpRight } from 'lucide-react';
import { AnimatedLink, CertificateList, PageSection, SkillItem } from '@/components/layout';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { ADDITIONAL_SKILLS, EXPERIENCE, SKILLS } from '@/lib/constants';
import { getCertificates } from '@/lib/queries/certificates';


export default function AboutPage() {
  const certificates = getCertificates();

  return (
    <div className='w-full min-h-[calc(100vh-6rem)]'>
      <div className='relative mx-auto px-3 md:px-0 pb-10 container '>
        <h1 className='py-6 text-6xl text-primary '>
          About me
        </h1>
        <div className='w-full flex flex-col md:flex-row gap-10'>
          <div className='relative w-fit space-y-10'>
            <PageSection className='mx-auto py-6 max-w-1/2 w-fit space-y-10'>
              <p className='text-secondary text-balance leading-7'>
                Hi, my name is Ivan Danyliuk, and I am a Front-End Engineer with a strong passion for web development. 
                Originally, I earned a Master’s degree in Management of Organizations, but I decided to switch 
                careers and pursue my passion for programming.
                I started learning front-end development on my own, then took courses on platforms like Udemy and Coursera. 
                In 2021, I had the opportunity to study at the corporate university of one of Ukraine’s largest IT 
                companies, followed by a six-month internship there.
                I am constantly exploring new technologies and improving my coding skills to follow the best practices 
                and industry standards. Front-end development excites me, and I enjoy working on projects that enhance 
                user experience and performance.
              </p>
              <div className='w-full flex gap-3'>
                <AnimatedLink href='/Ivan_Danyliuk_CV.pdf' text='Download CV' download>
                  <ArrowDownToLine className='w-5 h-5' />
                </AnimatedLink>
                <AnimatedLink href='/projects' text='See my projects'>
                  <ArrowRight className='w-5 h-5' />
                </AnimatedLink>
                <AnimatedLink href='/contact' text='Let&apos;s talk'>
                  <ArrowUpRight className='w-5 h-5' />
                </AnimatedLink>
              </div>
            </PageSection>
            <PageSection className='py-6 w-full space-y-10'>
              <h3 className='mb-3 text-4xl text-primary'>
                Certifications
              </h3>
              <CertificateList certificates={certificates} />
            </PageSection>
          </div>
          <div className='relative w-fit space-y-10'>
            <PageSection className='md:p-6 w-full'>
              <h3 className='mb-6 text-4xl text-primary'>
                My skills
              </h3>
              <ul className='flex flex-wrap gap-3'>
                {SKILLS.map(skill => (
                  <li key={crypto.randomUUID()} >
                    <SkillItem 
                      icon={skill.icon} 
                      label={skill.label} 
                    />
                  </li>
                ))}
              </ul>
            </PageSection>
            <PageSection className='md:p-10 w-full'>
              <h3 className='mb-3 text-4xl text-primary'>
                Experience
              </h3>
              <Table>
                <TableBody>
                  {EXPERIENCE.map(item => (
                    <TableRow key={crypto.randomUUID()} className='flex md:block flex-col'>
                      <TableCell className='align-top text-nowrap'>
                        <p className='text-base text-primary font-semibold'>
                          {`${item.company} (${item.country})`}
                        </p>
                        <p className='text-secondary'>
                          {item.period}
                        </p>
                      </TableCell>
                      <TableCell className='align-top text-secondary'>
                        <p className='text-base text-primary font-semibold'>
                          {item.position}
                        </p>
                        <ul className='pl-5 list-disc text-secondary'>
                          {item.reponsibilities.map(resp => (
                            <li key={crypto.randomUUID()}>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </PageSection>
            <PageSection className='md:p-10 w-full'>
              <h3 className='mb-6 text-4xl text-primary'>
                Additional skills
              </h3>
              <ul className='pl-5 list-disc'>
                {ADDITIONAL_SKILLS.map(skill => (
                  <li key={crypto.randomUUID()} className='text-sm text-secondary'>
                    {skill}
                  </li>
                ))}
              </ul>
            </PageSection>
          </div>
        </div>
      </div>
    </div>
  );
};
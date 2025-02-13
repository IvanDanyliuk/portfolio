import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowDown, 
  ArrowDownToLine, 
  ArrowRight, 
  ArrowUpRight, 
  MoveRight
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { 
  ActionLink, 
  ScrollToTopButton, 
  SkillItem, 
  PageSection, 
  Chip, 
  SocialMediaLinks 
} from '@/components/layout';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { getProjects } from '@/lib/projects';
import { splitStringWithRestItems } from '@/lib/utils';
import { 
  ADDITIONAL_SKILLS, 
  EXPERIENCE, 
  MENU_LINKS, 
  SKILLS 
} from '@/lib/constants';
import Portrait from '../../public/portrait.png';


export default function Home() {
  const currentYear = new Date().getFullYear();
  const projects = getProjects();

  return (
    <>
      <PageSection id='home' className='relative mx-auto container flex flex-col flex-1'>
        <div className='relative min-h-[calc(100vh-96px)] flex flex-1 gap-3'>
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
                <ArrowDownToLine className='w-5 h-5' />
              </ActionLink>
              <ActionLink 
                href='/projects' 
                label='See my projects'
              >
                <ArrowRight className='w-5 h-5' />
              </ActionLink>
              <ActionLink 
                href='/contact' 
                label='Let&apos;s talk'
              >
                <ArrowUpRight className='w-5 h-5' />
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
            <Link 
              href='#about' 
              className='hidden md:flex items-center gap-2 text-base text-secondary font-semibold'
            >
              <span>
                Scroll down
              </span>
              <ArrowDown className='w-5 h-5' />
            </Link>
          </div>
          <div className='relative md:min-h-[calc(100vh-96px)] flex flex-row-reverse md:flex-row justify-between md:justify-end items-end gap-10'>
            <Image 
              src={Portrait} 
              alt='portrait' 
              width={0} 
              height={0} 
              className='w-auto max-w-full h-full md:h-[80vh] object-contain' 
            />
            <SocialMediaLinks />
          </div>
        </div>
        </div>
      </PageSection>
      <PageSection id='about'>
        <h2 className='main-page-heading bg-tertiary'>
          About me
        </h2>
        <p className='mx-auto px-3 py-6 container text-center text-secondary'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eius dolorem. Itaque placeat hic est nam aliquam beatae 
          culpa libero minus in dolore at vero voluptatibus, repudiandae iusto mollitia consequuntur excepturi dolorem iste eligendi? 
          Temporibus mollitia error repellat aliquam perspiciatis repudiandae, corporis doloribus consequatur cumque nesciunt porro? 
          Distinctio illo veniam incidunt commodi tempore, perspiciatis dolore eveniet culpa eum enim non, necessitatibus repellat! 
          Exercitationem architecto excepturi et atque nisi esse veritatis recusandae earum quo perspiciatis tenetur doloremque, enim 
          vero officia assumenda asperiores labore? Omnis, itaque libero facilis autem aut dolorum sequi consectetur provident distinctio 
          obcaecati. Ex laborum fugit dolor quasi animi aut repellendus ducimus consequuntur deleniti voluptates, aliquid quos vitae 
          expedita? Natus consequatur incidunt ex facere ad animi neque, hic iusto totam? Aliquam doloremque ab beatae obcaecati, delectus 
          nisi nam vero dicta exercitationem, recusandae distinctio laboriosam quis commodi iste impedit esse dolorem asperiores, 
          incidunt facilis. Quia corporis rem in ut ab architecto aliquid facilis beatae doloribus tempore. Eius nam non minus. Alias 
          molestiae natus quas, nobis maxime quisquam, numquam, laboriosam dolore recusandae ut quidem placeat? Id quibusdam ullam laborum 
          maxime eaque harum ipsa vitae. Impedit laudantium quas mollitia veniam exercitationem quod omnis, enim sapiente fugiat beatae 
          rerum optio voluptate? Autem hic nam ratione eos consectetur amet quod totam, odio libero deserunt nostrum dolorum aperiam 
          officiis minus fugit odit possimus debitis est ut! Excepturi incidunt dolorem ad, fugit delectus quae. Beatae eligendi consequatur 
          voluptate sequi quae omnis harum aliquam asperiores ad aut perspiciatis soluta, vitae doloremque eum repellendus aperiam mollitia 
          repudiandae non voluptatum tenetur? Earum, assumenda ullam dolor consectetur est sit perferendis totam nesciunt fugit! 
          Impedit dignissimos eius maiores modi veritatis cum cupiditate distinctio, nostrum quod saepe accusamus illo odit, architecto, 
          ullam fugiat! Omnis officiis illum assumenda est distinctio quasi, deserunt sunt dolor consequatur, hic, nobis modi? Inventore, 
          assumenda. Laborum labore, quis molestiae quia quae amet dolorem fuga eveniet quidem earum odit distinctio delectus magni, 
          sint non, repudiandae sed? Illum sapiente vero quisquam cumque voluptatibus ratione pariatur harum voluptate officia excepturi, 
          ex ad exercitationem assumenda necessitatibus quae distinctio nesciunt tenetur odio, aspernatur incidunt similique aliquid dolore 
          accusantium blanditiis. Suscipit ullam reiciendis a nemo, ab incidunt perspiciatis hic at consectetur! Harum dolore eius error 
          possimus commodi sit debitis ex excepturi repellat doloremque id voluptate accusantium exercitationem, earum omnis, ipsam quasi 
          eos sapiente? Ullam ratione fugit quasi ipsum, magnam consequuntur aspernatur harum nisi molestiae culpa enim officia tempore. 
          Debitis possimus tempore, reprehenderit eum impedit, omnis molestias officia fugit ad illum error praesentium asperiores! 
          Quidem reprehenderit, ut optio, similique molestias temporibus omnis placeat at debitis nisi rerum animi nesciunt non iste iure 
          aut veritatis quibusdam sapiente maiores laboriosam! Perferendis, consequuntur consequatur, delectus quisquam fugiat nisi vero 
          necessitatibus dolorum exercitationem rerum est laborum facilis voluptatum tempora inventore deserunt sunt fuga alias eveniet 
          velit blanditiis? Sunt nihil natus dolor. Quam eius debitis dolor assumenda quod sunt deserunt eum laboriosam atque provident 
          cupiditate odio sed quaerat exercitationem, libero officia, consequatur fugiat at cumque fugit. Sapiente et aperiam quaerat 
          veritatis quidem voluptatum aliquid facilis, error, iure voluptatem asperiores voluptates!
        </p>
        <div className='mx-auto px-3 md:px-0 py-6 container flex flex-wrap gap-10 md:gap-0'>
          <div className='md:p-10 w-full md:w-1/2'>
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
          </div>
          <div className='md:p-10 w-full md:w-1/2'>
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
          </div>
          <div className='md:p-10 w-full md:w-1/2'>
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
          </div>
        </div>
      </PageSection>
      <PageSection 
        id='projects' 
        className='w-full bg-tertiary'
      >
        <div className='relative mx-auto min-h-full h-full container flex flex-col justify-between'>
          <h2 className='main-page-heading'>
            My latest projects
          </h2>
          <ul className='px-3 relative w-full grid grid-cols-1 md:grid-cols-3 grow gap-6'>
            {projects.slice(0, 3).map((project) => (
              <li 
                key={crypto.randomUUID()} 
                className='relative col-span-1 group bg-white rounded-xl overflow-hidden'
              >
                <Link 
                  href={`/projects/${project.slug}`} 
                  className='block'
                >
                  <div className='relative w-full h-72 overflow-hidden'>
                    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100 z-10'>
                      <Button className='w-16 h-16 text-white bg-primary rounded-full'>
                        <ArrowUpRight />
                      </Button>
                      <Chip 
                        value={project.type} 
                        className='absolute bottom-3 left-3' 
                      />
                      <Chip 
                        value={splitStringWithRestItems(project.stack)} 
                        className='absolute bottom-3 right-3' 
                      />
                    </div>
                    <Image 
                      src={project.titleImage} 
                      alt={project.slug} 
                      fill 
                      objectFit='cover' 
                    />
                  </div>
                  <p className='px-3 py-6 text-lg font-semibold'>
                    {project.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href='/projects' 
            className='mx-auto my-10 w-fit flex items-center'
          >
            Check out more 
            <MoveRight className='ml-5 mr-2' />
            <span className='font-semibold'>
              See more  
            </span> 
          </Link>
        </div>
      </PageSection>
      <PageSection id='contact' className='w-full flex flex-col justify-center items-center bg-white'>
        <h2 className='main-page-heading'>
          Let&apos;s talk
        </h2>
        <p className='text-base md:text-xl text-center text-secondary text-balance'>
          I’m always excited to collaborate on new and innovative projects.
        </p>
        <Link href='/contact' className='mx-auto my-24 w-fit flex items-center gap-2'>
          <span className='relative py-1 after:absolute after:w-full after:h-[2px] after:bottom-1 after:left-0 after:bg-primary'>
            Contact me
          </span>
          <ArrowUpRight className='w-5 h-5' />
        </Link>
      </PageSection>
      <PageSection className='w-full bg-primary'>
        <footer className='mx-auto py-16 md:py-24 container flex flex-col md:flex-row justify-between items-center gap-10'>
          <ul className='flex flex-col md:flex-row items-center gap-6 md:gap-16'>
            {MENU_LINKS.map(link => (
              <li key={crypto.randomUUID()}>
                <Link 
                  href={link.href}
                  className='relative text-white font-medium'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className='text-white text-sm tracking-widest'>
            {`Ivan Danyliuk. ${currentYear}`}
          </p>
        </footer>
      </PageSection>
      <ScrollToTopButton />
    </>
  );
};

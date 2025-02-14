import { AnimatedLink, SkillItem } from '@/components/layout';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { ADDITIONAL_SKILLS, EXPERIENCE, SKILLS } from '@/lib/constants';
import { ArrowDownToLine, ArrowRight, ArrowUpRight } from 'lucide-react';


export default function AboutPage() {
  return (
    <div className='w-full min-h-[calc(100vh-6rem)]'>
      <div className='relative mx-auto px-3 md:px-0 container '>
        <h1 className='py-6 text-6xl text-primary '>
          About me
        </h1>
        <div className='w-full flex flex-col md:flex-row gap-10'>
          <p className='mx-auto py-6 max-w-1/2 w-fit text-secondary'>
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
          <div className='relative w-fit space-y-10'>
            <div className='md:p-6 w-full'>
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
            <div className='md:p-10 w-full'>
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
            <div className='md:p-10 w-full'>
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
            <div className='w-full flex justify-end gap-3'>
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
          </div>
        </div>
      </div>
    </div>
  );
};
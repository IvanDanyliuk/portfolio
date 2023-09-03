'use client'

import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'
import Input from '@/components/Input'
import Editor from '@/components/Editor'
import Button from '@/components/Button'
import Chip from '@/components/Chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import SkillFormModal from '@/components/SkillFormModal'

interface FormState {
  greeting: string;
  biography: string;
}

const techSkills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux/ReduxToolkit',
  'HTML', 'CSS/SASS/SCSS', 'Node.js', 'MongoDB', 'MaterialUI', 'TailwindCSS'
]

const education = [
  {
    period: '2021-2022',
    place: 'SoftServe IT Academy',
    degree: '',
  },
  {
    period: '2008-2014',
    place: 'Donetsk State University of Management',
    degree: 'Master of Management',
  }
]

const Biography = () => {
  const { 
    register,
    control, 
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormState>();

  const handleBiographySubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <section>
        <h3 className='mb-3 text-xl font-semibold'>Biography</h3>
        <form 
          onSubmit={handleSubmit(handleBiographySubmit)} 
          className='relative w-full flex flex-col gap-3 form'
        >
          <Input 
            name='greeting' 
            label='Greeting'
            register={register} 
            registerOptions={{ required: 'Greeting is required!' }} 
            error={errors.greeting}
          />
          <Editor 
            name='biography' 
            label='Biography'
            control={control} 
            register={register} 
            error={errors.biography} 
          />
          <Button type='submit' title='Submit' />
        </form>
      </section>
      <div className='my-10 w-full h-[1px] bg-gray-100' />
      <section className='flex flex-col'>
        <div className='w-full flex justify-between items-center'>
          <h3 className='mb-3 text-xl font-semibold'>Skills</h3>
          <SkillFormModal />
        </div>
        <div className='flex gap-3'>
          <div className='w-2/3'>
            <h4 className='mb-3 text-lg font-semibold'>Technical</h4>
            <ul className='flex flex-wrap gap-3'>
              {techSkills.map(skill => (
                <li key={uuid()}>
                  <Chip title={skill} onClose={() => {}} />
                </li>
              ))}
            </ul>
          </div>
          <div className='w-1/3'>
            <h4 className='mb-3 text-lg font-semibold'>Additional</h4>
            <ul className='flex flex-wrap gap-3'>
              {techSkills.map(skill => (
                <li key={uuid()}>
                  <Chip title={skill} onClose={() => {}} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className='my-10 w-full h-[1px] bg-gray-100' />
      <section>
        <div className='w-full flex justify-between items-center'>
          <h3 className='mb-3 text-xl font-semibold'>Education</h3>
          <button>Add</button>
        </div>
        <table className='w-full'>
          <tbody className='w-full'>
            {education.map(item => (
              <tr key={uuid()} className='relative w-full border-b-2'>
                <td className='w-2/12 py-4'>
                  {item.period}
                </td>
                <td className='w-5/12 py-4'>
                  {item.place}
                </td>
                <td className='w-4/12 py-4'>
                  {item.degree}
                </td>
                <td className='w-1/12 py-4'>
                  <FontAwesomeIcon icon={faXmark} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Biography
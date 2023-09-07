import SkillFormModal from '@/components/forms/SkillFormModal'
import EducationFormModal from '@/components/forms/EducationFormModal'
import { fetchUserData } from '@/lib/actions/user.actions'
import BiographyForm from '@/components/forms/BiographyForm'
import SkillsList from '@/components/ui/SkillsList'
import EducationList from '@/components/ui/EducationList'

// const techSkills = [
//   { id: '1', title: 'JavaScript' }, { id: '2', title: 'TypeScript' }, { id: '3', title: 'React' }, 
//   { id: '4', title: 'Next.js' }, { id: '5', title: 'Redux/ReduxToolkit' }, { id: '6', title: 'HTML' }, 
//   { id: '7', title: 'CSS/SASS/SCSS' }, { id: '8', title: 'Node.js' }, { id: '9', title: 'MongoDB' }, 
//   { id: '10', title: 'MaterialUI' }, { id: '11', title: 'TailwindCSS' }
// ]

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

const Biography: React.FC = async () => {
  const userData = await fetchUserData();
  const user = JSON.parse(JSON.stringify(userData))
  const techSkills = user.skills ? user.skills.filter((skill: any) => !skill.isAdditional) : [];
  const additionalSkills = user.skills ? user.skills.filter((skill: any) => skill.isAdditional) : [];

  
  return (
    <div>
      <section>
        <h3 className='mb-3 text-xl font-semibold'>Biography</h3>
        <BiographyForm data={user.generalData} />
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
            <SkillsList skills={techSkills} />
          </div>
          <div className='w-1/3'>
            <h4 className='mb-3 text-lg font-semibold'>Additional</h4>
            <SkillsList skills={additionalSkills} />
          </div>
        </div>
      </section>
      <div className='my-10 w-full h-[1px] bg-gray-100' />
      <section>
        <div className='w-full flex justify-between items-center'>
          <h3 className='mb-3 text-xl font-semibold'>Education</h3>
          <EducationFormModal />
        </div>
        <EducationList data={user.education} />
      </section>
    </div>
  )
}

export default Biography
import SkillFormModal from '@/components/forms/SkillFormModal'
import EducationFormModal from '@/components/forms/EducationFormModal'
import { fetchUserData } from '@/lib/actions/user.actions'
import BiographyForm from '@/components/forms/BiographyForm'
import SkillsList from '@/components/ui/SkillsList'
import EducationList from '@/components/ui/EducationList'
import ExperienceFormModal from '@/components/forms/ExperienceFormModal'
import ExperienceList from '@/components/ui/ExperienceList'

const Biography: React.FC = async () => {
  const userData = await fetchUserData();
  const user = JSON.parse(JSON.stringify(userData));
  
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
      <div className='my-10 w-full h-[1px] bg-gray-100' />
      <section>
        <div className='w-full flex justify-between items-center'>
          <h3 className='mb-3 text-xl font-semibold'>Experience</h3>
          <ExperienceFormModal />
        </div>
        <ExperienceList data={user.experience} />
      </section>
    </div>
  )
}

export default Biography
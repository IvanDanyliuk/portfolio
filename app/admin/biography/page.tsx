import SkillFormModal from '@/components/forms/SkillFormModal'
import EducationFormModal from '@/components/forms/EducationFormModal'
import { fetchUserData } from '@/lib/actions/user.actions'
import BiographyForm from '@/components/forms/BiographyForm'
import SkillsList from '@/components/ui/SkillsList'
import EducationList from '@/components/ui/EducationList'
import ExperienceFormModal from '@/components/forms/ExperienceFormModal'
import ExperienceList from '@/components/ui/ExperienceList'
import SectionTitle from '@/components/ui/SectionTitle'

const Biography: React.FC = async () => {
  const userData = await fetchUserData();
  const user = JSON.parse(JSON.stringify(userData));
  
  const techSkills = user.skills ? user.skills.filter((skill: any) => !skill.isAdditional) : [];
  const additionalSkills = user.skills ? user.skills.filter((skill: any) => skill.isAdditional) : [];
  
  return (
    <div>
      <section>
        <SectionTitle title='Biography' />
        <BiographyForm data={user.generalData} />
      </section>
      <div className='my-10 w-full h-[1px] bg-gray-100' />
      <section className='flex flex-col'>
        <SectionTitle title='Skills'>
          <SkillFormModal />
        </SectionTitle>
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
        <SectionTitle title='Education'>
          <EducationFormModal />
        </SectionTitle>
        <EducationList data={user.education} />
      </section>
      <div className='my-10 w-full h-[1px] bg-gray-100' />
      <section>
        <SectionTitle title='Experience'>
          <ExperienceFormModal />
        </SectionTitle>
        <ExperienceList data={user.experience} />
      </section>
    </div>
  )
}

export default Biography
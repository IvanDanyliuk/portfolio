import TechnologyForm from '@/components/forms/TechnologyForm';
import { fetchTechnologies } from '@/lib/actions/technologies.actions';
import TechnologiesList from '@/components/ui/TechnologiesList';
import SectionTitle from '@/components/ui/SectionTitle';

const Index = async () => {
  const technologies = await fetchTechnologies();
  
  return (
    <div className='flex flex-col gap-3'>
      <section>Summary</section>
      <section>Number of views</section>
      <section>CV downloads count</section>
      <section>Other additional information...</section>
      <section>
        <SectionTitle title='Technologies'>
          <TechnologyForm />
        </SectionTitle>
        <TechnologiesList technologies={technologies} />
      </section>
    </div>
  )
}

export default Index
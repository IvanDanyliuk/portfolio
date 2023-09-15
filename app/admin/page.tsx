import TechnologyForm from '@/components/forms/TechnologyForm';
import { fetchTechnologies } from '@/lib/actions/technologies.actions';
import TechnologiesList from '@/components/ui/TechnologiesList';

const Index = async () => {
  const technologies = await fetchTechnologies();
  
  return (
    <div className='flex flex-col gap-3'>
      <section>Summary</section>
      <section>Number of views</section>
      <section>CV downloads count</section>
      <section>Other additional information...</section>
      <section>
        <div className='flex justify-between'>
          <h3 className='mb-3 text-xl font-semibold'>Technologies</h3>
          <TechnologyForm />
        </div>
        <TechnologiesList technologies={technologies} />
      </section>
    </div>
  )
}

export default Index
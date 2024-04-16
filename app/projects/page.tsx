import ProjectFilters from "@/components/ui/projects/ProjectFilters";
import ProjectList from "@/components/ui/projects/ProjectList";
import { projectCategories } from "@/constants";
import { fetchProjects } from "@/lib/actions/project.actions";
import { fetchTechnologies } from "@/lib/actions/technologies.actions";

type SearchParams = {
  categories?: string | null;
  technologies?: string | null;
}

type Props = {
  searchParams: SearchParams;
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

const Projects = async ({ searchParams: { categories, technologies } }: Props) => {
  const data = await fetchProjects(categories, technologies);
  const projects = JSON.parse(JSON.stringify(data));
  const technologiesData = await fetchTechnologies();

  return (
    <div className='container mx-auto py-3 relative w-full flex grow gap-10'>
      <ProjectFilters 
        categories={projectCategories} 
        technologies={technologiesData} 
      />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
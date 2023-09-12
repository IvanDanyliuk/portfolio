import Link from "next/link"

const Projects = () => {
  return (
    <div>
      <div className='w-full flex justify-between items-center'>
        <h3 className='mb-3 text-xl font-semibold'>Projects</h3>
        <Link href='/admin/projects/create-project' className='btn'>New Project</Link>
      </div>
    </div>
  )
}

export default Projects
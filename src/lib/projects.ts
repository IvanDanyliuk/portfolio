import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const projectsDirectory = path.join(process.cwd(), 'src/projects');

export const getProjects = () => {
  const filenames = fs.readdirSync(projectsDirectory);

  return filenames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const filePath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    };
  });
};
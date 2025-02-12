import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


interface IProject {
  title: string;
  type: string;
  stack: string[];
  createdAt: string;
  titleImage: string;
  images: string[];
  repoLink: string;
  deploymentLink: string;
  intro: string;
};


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
      ...data as IProject,
      createdAt: new Date(data.createdAt).getTime(),
      content,
    };
  }).sort((a, b) => b.createdAt - a.createdAt);
};
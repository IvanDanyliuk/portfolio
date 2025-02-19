import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ICertificate } from '../types';


const certificatesDirectory = path.join(process.cwd(), 'src/content/certificates');

export const getCertificates = () => {
  const filenames = fs.readdirSync(certificatesDirectory);

  return filenames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const filePath = path.join(certificatesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data as ICertificate,
    };
  });
};
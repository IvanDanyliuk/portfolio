import Link from 'next/link';
import { ArrowDownToLine } from 'lucide-react';


export const DownloadCV: React.FC = () => {
  return (
    <Link href='/Ivan_Danyliuk_CV.pdf' download>
      Download CV
      <ArrowDownToLine className='ml-2' />
    </Link>
  );
};
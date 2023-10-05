import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  children?: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, children }) => {
  return (
    <div className='flex justify-between items-center'>
      <h3 className='text-lg md:text-xl font-semibold'>
        {title}
      </h3>
      {children}
    </div>
  )
}

export default SectionTitle
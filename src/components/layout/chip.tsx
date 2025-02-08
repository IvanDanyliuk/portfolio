import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';


interface IChip {
  icon: StaticImport | string;
  label: string;
};


export const Chip: React.FC<IChip> = ({ 
  icon, 
  label 
}) => {
  return (
    <div className='px-4 py-2 flex items-center gap-2 border border-secondary rounded-full'>
      <Image 
        src={icon} 
        alt={`Icon for ${label}`} 
        width={30} 
        height={30} 
      />
      <span className='text-sm text-secondary'>
        {label}
      </span>
    </div>
  );
};
import { cn } from "@/lib/utils";

interface IChip {
  value: string;
  className?: string;
};


export const Chip: React.FC<IChip> = ({ value, className }) => {
  return (
    <p className={cn(
      className, 
      'px-4 py-2 w-fit bg-primary text-xs text-white rounded-full'
    )}>
      {value}
    </p>
  );
};
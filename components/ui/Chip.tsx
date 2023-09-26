import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ChipProps {
  title: string;
  maxLength?: number;
  onClose?: () => void;
}

const Chip: React.FC<ChipProps> = ({ title, maxLength, onClose }) => {
  return (
    <div className='px-5 py-2 flex items-center gap-3 bg-black text-sm text-white rounded-full'>
      <span className='text-xs md:text-sm'>
        {maxLength ? `${title.slice(0, maxLength)}${title.length > maxLength ? '...' : ''}` : title}
      </span>
      {onClose && (
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  )
}

export default Chip
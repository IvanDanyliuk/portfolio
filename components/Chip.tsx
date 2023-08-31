import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ChipProps {
  title: string;
  onClose?: () => void;
}

const Chip: React.FC<ChipProps> = ({ title, onClose }) => {
  return (
    <div className='px-5 py-2 flex items-center gap-3 bg-black text-sm text-white rounded-full'>
      <span>{title}</span>
      {onClose && (
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  )
}

export default Chip
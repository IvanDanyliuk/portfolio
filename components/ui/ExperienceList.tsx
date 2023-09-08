'use client'

import { usePathname } from 'next/navigation'
import { v4 as uuid } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { deleteExperienceItem } from '@/lib/actions/experience.actions'
import NoDataMessage from './NoDataMessage'

interface ExperienceListProps {
  data: {
    _id: string;
    company: string;
    position: string;
    periodFrom: string;
    periodTo: string;
  }[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ data }) => {
  const pathname = usePathname();

  const handleExperienceItemDelete = async (id: string) => {
    await deleteExperienceItem({ id, pathname });
  }

  return (
    <>
      {data.length > 0 ? (
        <table className='w-full'>
          <tbody className='w-full'>
            {data.map((item: any) => (
              <tr key={uuid()} className='relative w-full border-b-2'>
                <td className='w-2/12 py-4'>
                  {`${item.periodFrom}-${item.periodTo}`}
                </td>
                <td className='w-5/12 py-4'>
                  {item.company}
                </td>
                <td className='w-4/12 py-4'>
                  {item.position}
                </td>
                <td className='w-1/12 py-4'>
                  <button onClick={() => handleExperienceItemDelete(item._id)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NoDataMessage message='Add you experience' />
      )}
    </>
  )
}

export default ExperienceList
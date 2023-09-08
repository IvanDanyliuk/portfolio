'use client'

import { usePathname } from 'next/navigation'
import { v4 as uuid } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { deleteEducationItem } from '@/lib/actions/education.actions'
import NoDataMessage from './NoDataMessage'
import { formatDate } from '@/lib/helpers/heplers'

interface EducationListProps {
  data: {
    _id: string;
    institution: string;
    degree?: string;
    periodFrom: string;
    periodTo: string;
  }[];
}

const EducationList: React.FC<EducationListProps> = ({ data }) => {
  const pathname = usePathname();

  const handleEducationItemDelete = async (id: string) => {
    await deleteEducationItem({ id, pathname });
  }

  return (
    <>
      {data.length > 0 ? (
        <table className='w-full'>
          <tbody className='w-full'>
            {data.map((item: any) => (
              <tr key={uuid()} className='relative w-full border-b-2'>
                <td className='w-2/12 py-4'>
                  {`${formatDate(item.periodFrom, 'year')} - ${formatDate(item.periodTo, 'year')}`}
                </td>
                <td className='w-5/12 py-4'>
                  {item.institution}
                </td>
                <td className='w-4/12 py-4'>
                  {item.degree}
                </td>
                <td className='w-1/12 py-4'>
                  <button onClick={() => handleEducationItemDelete(item._id)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NoDataMessage message='Add information about your education' />
      )}
    </>
  )
}

export default EducationList
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuid } from 'uuid'
import { deleteCertification } from '@/lib/actions/certifications.actions';

interface CertificationListProps {
  certifications: {
    _id: string;
    imageUrl: string;
    verificationUrl?: string;
  }[]
}

const CertificationsList: React.FC<CertificationListProps> = ({ certifications }) => {
  const pathname = usePathname();

  const handleCertificateDelete = async (id: string) => {
    await deleteCertification({ id, pathname });
  }

  return (
    <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
      {certifications.map(item => (
        <div key={uuid()} className='group relative border border-slate-500'>
          <button onClick={() => handleCertificateDelete(item._id)} className='absolute top-3 right-4'>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div>
            {item.verificationUrl ? (
              <Link href={item.verificationUrl}>
                <Image src={item.imageUrl} alt='certificate' width={500} height={300} />
              </Link>
            ) : (
              <Image src={item.imageUrl} alt='certificate' width={500} height={300} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CertificationsList
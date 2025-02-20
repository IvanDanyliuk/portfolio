import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ICertificate } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';


interface ICertificateList {
  certificates: ICertificate[];
};


export const CertificateList: React.FC<ICertificateList> = ({ certificates }) => {
  return (
    <Carousel>
      <CarouselContent>
        {certificates.map((certificate, i) => (
          <CarouselItem key={crypto.randomUUID()} className='relative w-auto min-h-96'>
            <Dialog>
              <DialogTrigger>
                <Image 
                  src={certificate.thumbnail} 
                  alt={`certificate_${i + 1}`} 
                  fill 
                  className='object-contain' 
                />
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className='hidden' />
                <div className='min-h-96'>
                  <Image 
                    src={certificate.thumbnail} 
                    alt={`certificate_${i + 1}`} 
                    fill 
                    className='object-contain' 
                  />
                </div>
                <Link 
                  href={certificate.verificationLink} 
                  target='_blank' 
                  className='verification-link'
                >
                  Verify
                </Link>
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
import CertificationFormModal from "@/components/forms/CertificationFormModal"
import CertificationsList from "@/components/ui/CertificationsList";
import { fetchCertifications } from "@/lib/actions/certifications.actions"

const Certifications = async () => {
  const data = await fetchCertifications();

  const certifications = data.map(item => JSON.parse(JSON.stringify(item)));

  return (
    <div>
      <div className='w-full flex justify-between items-center'>
        <h3 className='mb-3 text-xl font-semibold'>Certifications</h3>
        <CertificationFormModal />
      </div>
      <CertificationsList certifications={certifications} />
    </div>
  )
}

export default Certifications
import CertificationFormModal from "@/components/forms/CertificationFormModal"
import CertificationsList from "@/components/ui/CertificationsList";
import SectionTitle from "@/components/ui/SectionTitle";
import { fetchCertifications } from "@/lib/actions/certifications.actions"

const Certifications = async () => {
  const data = await fetchCertifications();

  const certifications = data.map(item => JSON.parse(JSON.stringify(item)));

  return (
    <div>
      <SectionTitle title='Certifications'>
        <CertificationFormModal />
      </SectionTitle>
      <CertificationsList certifications={certifications} />
    </div>
  )
}

export default Certifications
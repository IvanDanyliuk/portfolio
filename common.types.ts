export interface User {
  userId: string;
  biography: string;
  photoUrl: string;
  skills: { title: string }[];
  education: {
    institution: string;
    degree?: string;
    periodFrom: string;
    periodTo: string;
  }[];
  experience: {
    company: string;
    position: string;
    periodFrom: string;
    periodTo: string;
  }[];
  certifications: {
    imageUrl: string;
    verificationUrl: string;
  }[];
}
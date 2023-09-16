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

export interface Skill {
  title: string;
  isAdditional: boolean;
}

export interface EducationItem {
  institution: string;
  degree?: string;
  periodFrom: string;
  periodTo: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  periodFrom: string;
  periodTo: string;
}

export interface Project {
  name: string;
  summary: string;
  category: string[];
  imageUrl: string;
  technologies: string[];
  features: Feature[];
  credentials: Credential[];
}

export interface Technology {
  title: string;
}

export interface Feature {
  title: string;
  description: string;
  featureImageUrl: string;
}

export interface Credential {
  title: string;
  description: string;
}
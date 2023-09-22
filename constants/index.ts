import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBook, faCircleInfo, faFileContract, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export const navLinks = [
  { label: 'HOME', link: '/' },
  { label: 'ABOUT', link: '/about' },
  { label: 'PROJECTS', link: '/projects' },
  { label: 'CONTACT', link: '/contact' },
];

export const adminPanelLinks = [
  { label: 'Summary', icon: faCircleInfo, link: '/admin' },
  { label: 'Biography & Skills', icon: faBook, link: '/admin/biography' },
  { label: 'Certifications', icon: faFileContract, link: '/admin/certifications' },
  { label: 'Projects', icon: faLaptopCode, link: '/admin/projects' },
  
]

export const socialMediaLinks = [
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/ivan-danyliuk/'
  },
  {
    icon: faSquareGithub,
    url: 'https://github.com/IvanDanyliuk'
  },
  {
    icon: faSquareFacebook,
    url: 'https://www.facebook.com/ivan.a.danyliuk'
  },
  {
    icon: faSquareInstagram,
    url: 'https://www.instagram.com/daniliuk.ivan/'
  }
];

export const projectCategories = ['Frontend', 'Backend', 'Fullstack'];
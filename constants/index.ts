import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

export const navLinks = [
  { label: 'HOME', link: '/' },
  { label: 'ABOUT', link: '/about' },
  { label: 'PROJECTS', link: '/projects' },
  { label: 'CONTACT', link: '/contact' },
];

export const adminPanelLinks = [
  { label: 'Summary', link: '/admin' },
  { label: 'Biography & Skills', link: '/admin/biography' },
  { label: 'Certifications', link: '/admin/certifications' },
  { label: 'Projects', link: '/admin/projects' },
  
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
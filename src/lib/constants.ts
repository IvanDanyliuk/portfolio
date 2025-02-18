import LinkedIn from '../../public/social-media-icons/icons8-linked-in.svg';
import Github from '../../public/social-media-icons/icons8-github.svg';
import Instagram from '../../public/social-media-icons/icons8-instagram.svg';
import Facebook from '../../public/social-media-icons/icons8-facebook.svg';
import HTML from '../../public/skill-icons/html.svg';
import CSS from '../../public/skill-icons/css.svg';
import JS from '../../public/skill-icons/javascript.svg';
import TS from '../../public/skill-icons/typescript.svg';
import React from '../../public/skill-icons/react-native.svg';
import Redux from '../../public/skill-icons/redux.svg';
import NextJS from '../../public/skill-icons/nextjs.svg';
import NodeJS from '../../public/skill-icons/node-js.svg';
import TailwindCSS from '../../public/skill-icons/tailwindcss.svg';
import RESTAPI from '../../public/skill-icons/rest-api.svg';
import MongoDB from '../../public/skill-icons/mongodb.svg';
import Prisma from '../../public/skill-icons/prisma.svg';
import GraphQL from '../../public/skill-icons/graphql.svg';


export const MENU_LINKS = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: 'https://www.linkedin.com/in/ivan-danyliuk/',
    label: 'Linked In',
    icon: LinkedIn,
  },
  {
    href: 'https://github.com/IvanDanyliuk',
    label: 'Github',
    icon: Github,
  },
  {
    href: 'https://www.instagram.com/daniliuk.ivan/',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: 'https://www.facebook.com/ivan.a.danyliuk',
    label: 'Facebook',
    icon: Facebook,
  },
];

export const SKILLS = [
  {
    icon: HTML,
    label: 'HTML',
    value: 'html'
  },
  {
    icon: CSS,
    label: 'CSS',
    value: 'css'
  },
  {
    icon: JS,
    label: 'JavaScript',
    value: 'javascript'
  },
  {
    icon: TS,
    label: 'TypeScript',
    value: 'typescript'
  },
  {
    icon: React,
    label: 'React',
    value: 'react'
  },
  {
    icon: Redux,
    label: 'Redux',
    value: 'redux'
  },
  {
    icon: NextJS,
    label: 'Next.js',
    value: 'nextjs'
  },
  {
    icon: NodeJS,
    label: 'Node.js',
    value: 'nodejs'
  },
  {
    icon: TailwindCSS,
    label: 'Tailwind CSS',
    value: 'tailwindcss'
  },
  {
    icon: RESTAPI,
    label: 'REST API',
    value: 'restapi'
  },
  {
    icon: MongoDB,
    label: 'MongoDB',
    value: 'mongodb'
  },
  {
    icon: Prisma,
    label: 'Prisma',
    value: 'prisma'
  },
  {
    icon: RESTAPI,
    label: 'Mongoose',
    value: 'mongoose'
  },
  {
    icon: GraphQL,
    label: 'GraphQL',
    value: 'graphql'
  }
];

export const EXPERIENCE = [
  {
    company: 'SoftServe',
    country: 'Ukraine',
    period: 'September 2021 - February 2022',
    position: 'Internship - WebUI Software Engineer',
    reponsibilities: [
      'Implementing robust solutions using React.js',
      'Developing and maintaining unit tests to ensure code quality',
      'Collaborate with backend developers and business analysts to implement new features and improve user experience',
      'Participating in code reviews to maintain best practices',
    ],
  },
];

export const ADDITIONAL_SKILLS = [
  'English (B1)',
  'Git',
  'Figma',
];

export const PROJECT_TYPES = [
  {
    value: 'fullstack',
    label: 'Fullstack'
  },
  {
    value: 'frontend',
    label: 'Front-end'
  },
  {
    value: 'backend',
    label: 'Backend'
  },
];
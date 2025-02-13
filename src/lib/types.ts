export enum ActionStatus {
  Succeded = 'Succeeded',
  Failed = 'Failed',
};

export interface IProject {
  title: string;
  type: string;
  stack: string[];
  createdAt: string;
  titleImage: string;
  images: string[];
  repoLink: string;
  deploymentLink: string;
  intro: string;
};
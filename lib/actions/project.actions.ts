'use server'

import { connectToDB } from "../mongoose";

interface CreateProjectQuery {
  name: string;
  summary: string;
  category: string[];
  technologies: string[];
  features: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
  credentials: {
    title: string;
    description: string;
  }[];
  pathname: string;
}

export const createProject = async ({ 
  name, 
  summary, 
  category, 
  technologies, 
  features, 
  credentials, 
  pathname 
}: CreateProjectQuery) => {
  try {
    connectToDB();
  } catch (error: any) {
    throw new Error(`Cannot create a new project: ${error.message}`)
  }
}
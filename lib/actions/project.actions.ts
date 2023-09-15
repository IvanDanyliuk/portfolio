'use server'

import { connectToDB } from '../mongoose';
import ProjectModel from '../models/project.model';
import { revalidatePath } from 'next/cache';
import { uploadImage } from './common.actions';

interface CreateProjectQuery {
  name: string;
  summary: string;
  imageUrl: string;
  category: string[];
  technologies: string[];
  features: {
    title: string;
    description: string;
    featureImageUrl: string;
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
  imageUrl, 
  category, 
  technologies, 
  features, 
  credentials, 
  pathname 
}: CreateProjectQuery) => {
  try {
    connectToDB();

    const projectImageUrl = await uploadImage(imageUrl, pathname);
    const modifiedFeatures = await Promise.all(features.map(async (feature) => {
      const uploadedImageUrl = await uploadImage(feature.featureImageUrl, pathname);
      return {
        ...feature,
        featureImageUrl: uploadedImageUrl.url
      };
    }));

    await ProjectModel.create({
      name, 
      summary, 
      imageUrl: projectImageUrl.url,
      category, 
      technologies, 
      features: modifiedFeatures, 
      credentials
    });

    if(pathname === '/admin/projects/create-project') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot create a new project: ${error.message}`)
  }
}
'use server'

import { connectToDB } from '../mongoose';
import ProjectModel from '../models/project.model';
import { revalidatePath } from 'next/cache';
import { uploadImage } from './common.actions';
import { Project } from '@/common.types';

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

export const fetchProjects = async () => {
  try {
    connectToDB();
    return await ProjectModel.find({});
  } catch (error: any) {
    throw new Error(`Cannot find available projects: ${error.message}`);
  }
};

export const fetchProject = async (id: string) => {
  try {
    connectToDB();

    return await ProjectModel.findById(id);
  } catch (error: any) {
    throw new Error(`Cannot fetch a project with id ${id}: ${error.message}`);
  }
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
};

export const updateProject = async ({ id, data, pathname }: { id: string, data: Project, pathname: string }) => {
  try {
    connectToDB();
    await ProjectModel.findByIdAndUpdate(id, data);
    revalidatePath(pathname);
  } catch (error: any) {
    throw new Error(`Cannot update a project with id ${id}: ${error.message}`);
  }
}

export const deleteProject = async ({ id, pathname }: { id: string, pathname: string }) => {
  try {
    connectToDB();
    await ProjectModel.findByIdAndDelete(id);

    if(pathname === '/admin/projects') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot delete the project: ${error.message}`);
  }
};
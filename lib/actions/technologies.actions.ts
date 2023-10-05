'use server'

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../services/mongoose';
import TechnologyModel from '../models/technology.model';
import { Technology } from '@/common.types';

export const fetchTechnologies = async () => {
  try {
    connectToDB();
    return await TechnologyModel.find({});
  } catch (error: any) {
    throw new Error(`Cannot find any available technologies: ${error.message}`);
  }
};

export const addTechnology = async ({ technology, pathname }: { technology: Technology, pathname: string }) => {
  try {
    connectToDB();

    await TechnologyModel.create(technology);

    if(pathname === '/admin') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot update skills: ${error.message}`);
  }
};

export const deleteTechnology = async ({ id, pathname }: { id: string, pathname: string }) => {
  try {
    connectToDB();

    await TechnologyModel.findByIdAndDelete(id);

    if(pathname === '/admin') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot delete skill: ${error.message}`);
  }
};
'use server'

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import ExperienceModel from '../models/experience.model';
import { ExperienceItem } from '@/common.types';

export const addExperienceItem = async ({ experience, pathname }: { experience: ExperienceItem, pathname: string }) => {
  try {
    connectToDB();

    await ExperienceModel.create(experience);

    if(pathname === '/admin/biography') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot update experience: ${error.message}`);
  }
};

export const deleteExperienceItem = async ({ id, pathname }: { id: string, pathname: string }) => {
  try {
    connectToDB();

    await ExperienceModel.findByIdAndDelete(id);

    if(pathname === '/admin/biography') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot delete experience: ${error.message}`);
  }
};
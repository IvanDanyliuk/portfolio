'use server'

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import EducationModel from '../models/education.model';
import { EducationItem } from '@/common.types';

export const addEducationItem = async ({ educationItem, pathname }: { educationItem: EducationItem, pathname: string }) => {
  try {
    connectToDB();

    await EducationModel.create(educationItem);

    if(pathname === '/admin/biography') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot update skills: ${error.message}`);
  }
};

export const deleteEducationItem = async ({ id, pathname }: { id: string, pathname: string }) => {
  try {
    connectToDB();

    await EducationModel.findByIdAndDelete(id);

    if(pathname === '/admin/biography') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot delete skill: ${error.message}`);
  }
};
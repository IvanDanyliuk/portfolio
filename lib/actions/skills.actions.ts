'use server'

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import SkillModel from '../models/skill.model';
import { Skill } from '@/common.types';

export const addSkill = async ({ skill, pathname }: { skill: Skill, pathname: string }) => {
  try {
    connectToDB();

    await SkillModel.create(skill);

    if(pathname === '/admin/biography') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot update skills: ${error.message}`);
  }
};

export const deleteSkill = async ({ id, pathname }: { id: string, pathname: string }) => {
  try {
    connectToDB();

    await SkillModel.findByIdAndDelete(id);

    if(pathname === '/admin/biography') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot delete skill: ${error.message}`);
  }
};
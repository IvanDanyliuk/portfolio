'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../services/mongoose';
import General from '../models/general.model';
import Skill from '../models/skill.model';
import Education from '../models/education.model';
import Experience from '../models/experience.model';

export const fetchUserData = async () => {
  try {
    connectToDB();

    const generalData = await General.findOne({});
    const skills = await Skill.find({});
    const education = await Education.find({});
    const experience = await Experience.find({});

    return {
      generalData,
      skills,
      education,
      experience
    };
  } catch (error: any) {
    throw new Error(`User Data not found: ${error.message}`);
  }
};

interface GeneralData {
  userId: string;
  biography: string;
  photoUrl: string;
  pathname: string;
}

export const updateGeneralData = async ({ userId, biography, photoUrl, pathname }: GeneralData) => {
  try {
    connectToDB();

    await General.findOneAndUpdate(
      { userId }, 
      { userId, biography, photoUrl },
      { upsert: true }
    );

    if(pathname === '/admin/biography') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Cannot update general data: ${error.message}`);
  }
};
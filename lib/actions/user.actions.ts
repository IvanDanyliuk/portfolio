'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import User from '../models/user.model';

interface UserData {
  userId: string;
  path: string;
  greeting: string;
  bio: string;
  skills: { title: string }[];
  education: {
    institution: string;
    degree?: string;
    periodFrom: string;
    periodTo: string;
  }[];
  experience: {
    company: string;
    position: string;
    periodFrom: string;
    periodTo: string;
  }[];
  certifications: {
    imageUrl: string;
    verificationUrl: string;
  }[];
}

export const updateUser = async ({ 
  userId,
  path,
  greeting, 
  bio, 
  skills, 
  education, 
  certifications, 
  experience 
}: UserData) => {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        greeting, 
        bio, 
        skills, 
        education, 
        certifications, 
        experience
      }, 
      { upsert: true }
    );

    if(path === '/admin/biography') {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to update user data: ${error.message}`);
  }
};

export const fetchUser = async () => {
  try {
    connectToDB();
    return await User.findOne({}).populate('skills').populate('certifications');
  } catch (error: any) {
    throw new Error(`User noit found: ${error.message}`);
  }
}
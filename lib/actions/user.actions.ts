'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import User from '../models/user.model';

interface UserData {
  userId: string;
  pathname: string;
  biography: string;
  photoUrl: string;
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
  pathname,
  biography, 
  photoUrl,
  skills, 
  education, 
  certifications, 
  experience 
}: UserData) => {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { userId },
      {
        biography, 
        photoUrl,
        skills, 
        education, 
        certifications, 
        experience
      }, 
      { upsert: true }
    );

    if(pathname === '/admin/biography') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Failed to update user data: ${error.message}`);
  }
};

export const fetchUser = async () => {
  try {
    connectToDB();
    return await User.findOne({})
  } catch (error: any) {
    throw new Error(`User noit found: ${error.message}`);
  }
}
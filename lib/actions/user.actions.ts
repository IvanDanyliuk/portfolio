'use server';

import { revalidatePath } from 'next/cache';
import { connectToDB } from '../mongoose';
import General from '../models/general.model';
import Skill from '../models/skill.model';
import Education from '../models/education.model';
import Experience from '../models/experience.model';
// import User from '../models/user.model';

// interface UserData {
//   userId: string;
//   pathname: string;
//   biography: string;
//   photoUrl: string;
//   skills: { title: string }[];
//   education: {
//     institution: string;
//     degree?: string;
//     periodFrom: string;
//     periodTo: string;
//   }[];
//   experience: {
//     company: string;
//     position: string;
//     periodFrom: string;
//     periodTo: string;
//   }[];
//   certifications: {
//     imageUrl: string;
//     verificationUrl: string;
//   }[];
// }

// export const updateUser = async ({ 
//   userId,
//   pathname,
//   biography, 
//   photoUrl,
//   skills, 
//   education, 
//   certifications, 
//   experience 
// }: UserData) => {
//   try {
//     connectToDB();

//     await User.findOneAndUpdate(
//       { userId },
//       {
//         biography, 
//         photoUrl,
//         skills, 
//         education, 
//         certifications, 
//         experience
//       }, 
//       { upsert: true }
//     );

//     if(pathname === '/admin/biography') {
//       revalidatePath(pathname);
//     }
//   } catch (error: any) {
//     throw new Error(`Failed to update user data: ${error.message}`);
//   }
// };

// export const deleteSkill = async (userId: string, skillTitle: string) => {
//   console.log('Skill Delete', { userId, skillTitle })
//   const user = await User.findOne({ userId });
//   user.skills = user.skills.filter((skill: any) => skill.title !== skillTitle);
//   await user.save();
// };

// export const fetchUser = async () => {
//   try {
//     connectToDB();
//     return await User.findOne({})
//   } catch (error: any) {
//     throw new Error(`User noit found: ${error.message}`);
//   }
// };

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
}

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
}
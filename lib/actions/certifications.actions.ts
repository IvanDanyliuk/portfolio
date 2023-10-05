'use server'

import { connectToDB } from "../services/mongoose";
import { revalidatePath } from "next/cache";
import Certification from "../models/certification.model";
import { uploadImage } from "./common.actions";

export const addCertification = async ({ imageUrl, verificationUrl, pathname }: { imageUrl: string, verificationUrl?: string, pathname: string }) => {
  try {
    connectToDB();

    const uploadedImageUrl = await uploadImage(imageUrl, pathname);
    
    await Certification.create({ imageUrl: uploadedImageUrl!.url!, verificationUrl });

    // in case of having an error on production/deploying, delete the conditional 
    // statement below to turn off path revalidation (probably this is a Vercel bug)
    if(pathname === '/admin/certifications') {
      revalidatePath(pathname)
    }
  } catch (error: any) {
    throw new Error(`Cannot create a new certification: ${error.message}`);
  }
};

export const fetchCertifications = async () => {
  try {
    connectToDB();

    return await Certification.find({});
  } catch (error: any) {
    throw new Error(`Cannot find available certifications: ${error.message}`);
  }
}

export const deleteCertification = async ({ id, pathname }: { id: string, pathname: string }) => {
  try {
    connectToDB();

    await Certification.findByIdAndDelete(id);

    if(pathname === '/admin/certifications') {
      revalidatePath(pathname);
    }
  } catch (error: any) {
    throw new Error(`Failed to delete certification: ${error.message}`);
  }
}
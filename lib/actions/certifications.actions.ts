'use server'

import { connectToDB } from "../mongoose";
import Certification from "../models/certification.model";
import { uploadImage } from "./common.actions";

export const addCertification = async ({ imageUrl, verificationUrl }: { imageUrl: string, verificationUrl?: string }) => {
  try {
    connectToDB();

    const uploadedImageUrl = await uploadImage(imageUrl);

    await Certification.create({ imageUrl: uploadedImageUrl.url, verificationUrl });
  } catch (error: any) {
    throw new Error(`Cannot create a new certification: ${error.message}`);
  }
};
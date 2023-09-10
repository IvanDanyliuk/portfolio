import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const POST = async (request: Request) => {
  const { imageUrl } = await request.json();

  if(!imageUrl) {
    return NextResponse.json({ message: 'Image path is required' }, { status: 400 });
  }

  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    const result = await cloudinary.uploader.upload(imageUrl, options);

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Failed to upload image on Cloudinary' }, { status: 500 });
  }
};
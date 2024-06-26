'use server'

import { Resend } from 'resend';

const isProduction = process.env.NODE_ENV === 'production';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

export const uploadImage = async (imageUrl: string, pathname: string) => {
  try {
    const response = await fetch(`${serverUrl}/api/upload`, {
      method: 'POST',
      body: JSON.stringify({
        imageUrl,
      }),
      next: {
        tags: ['certifications']
      },
      cache: 'no-store'
    });

    return response.json();
  } catch (error: any) {
    throw new Error(`Uploading image error: ${error.message}`);
  }
};

export const sendEmail = async (formData: FormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY!)

  const data = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ['ivandaniliuk@gmail.com'],
    subject: 'example',
    text: 'This is a message!'
  });

  return {
    success: true,
    data
  }
};
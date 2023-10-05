'use server'

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
}



export const sendContactFormData = async ({ name, subject, email, message }: { name: string, subject: string, email: string, message: string }) => {
  try {
    await fetch(`${serverUrl}/api/nodemailer`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        subject, 
        email, 
        message
      }),
      cache: 'no-store'
    });
  } catch (error: any) {
    throw new Error(`Cannot send a message: ${error.message}`);
  }
}
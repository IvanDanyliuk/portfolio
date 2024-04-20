'use server';

import { Resend } from 'resend';


export const sendEmail = async (formData: FormData) => {
  console.log('MAIL DATA', formData)
  const resend = new Resend(process.env.RESEND_API_KEY!)

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ivandaniliuk@gmail.com',
    subject: 'example',
    text: 'This is a message!'
  })
}
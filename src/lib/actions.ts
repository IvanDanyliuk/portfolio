'use server';

import { revalidatePath } from 'next/cache';
import nodemailer from 'nodemailer';
import { contactFormDataSchema } from './schema';
import { ActionStatus } from './types';


export const sendMessage = async (formData: FormData) => {
  try {
    const validatedContactFormData = contactFormDataSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });

    if(!validatedContactFormData.success) {
      return {
        status: ActionStatus.Failed,
        fieldError: validatedContactFormData.error.flatten().fieldErrors,
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${validatedContactFormData.data.name}" <${validatedContactFormData.data.email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: validatedContactFormData.data.subject,
      text: validatedContactFormData.data.message,
      replyTo: `"${validatedContactFormData.data.name}" <${validatedContactFormData.data.email}>`,
      html: `
        <p>Name: ${validatedContactFormData.data.name}</p>
        <p>Email: ${validatedContactFormData.data.email}</p>
        <p>Subject: ${validatedContactFormData.data.subject}</p>
        <p>Message: ${validatedContactFormData.data.message}</p>
      `
    })

    revalidatePath('/contact');

    return {
      status: ActionStatus.Succeded,
      error: null,
    };
  } catch (error: any) {
    return {
      status: ActionStatus.Failed,
      error: error.message,
    };
  }
};
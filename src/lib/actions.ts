'use server';

import { revalidatePath } from 'next/cache';
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

    
    console.log('FORM DATA', formData);

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
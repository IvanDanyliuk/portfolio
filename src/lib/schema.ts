import { z as zod } from 'zod';


export const contactFormDataSchema = zod.object({
  name: zod.string().min(1, 'Name is required!'),
  email: zod.string().min(1, 'Email is required!').email('Email is not valid!'),
  subject: zod.string().min(1, 'Subject is required!'),
  message: zod.string().min(1, 'What do you want to talking about?')
});

export type ContactFormData = zod.infer<typeof contactFormDataSchema>;
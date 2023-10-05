'use server'

import { transporter, mailOptions, generateEmailBody } from '../services/nodemailer';

export const sendContactFormData = async (data: any) => {
  try {
    console.log('Contact form has been submitted', data)
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailBody(data),
      subject: data.subject,
    })
  } catch (error: any) {
    throw new Error(`Cannot send a message: ${error.message}`);
  }
}
import { contactMessageFields } from '@/constants';
import nodemailer from 'nodemailer';

const email = process.env.NODEMAILER_AUTH_USER;
const password = process.env.NODEMAILER_AUTH_PASS;

export const generateEmailBody = (data: any) => {
  const textData = Object.entries(data).reduce((str, [key, val]): any => {
    return str += `${contactMessageFields[key]}: \n${val} \n \n`;
  }, '');

  const htmlData = Object.entries(data).reduce((str, [key, val]): any => {
    return str += `<h2>${contactMessageFields[key]}</h2><p>${val}</p>`;
  }, '');

  return {
    text: textData,
    html: htmlData,
  };
};

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: false,
  auth: {
    user: email,
    pass: password,
  }
});

export const mailOptions = {
  from: email,
  to: email,
};

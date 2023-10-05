import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateEmailBody } from '@/lib/services/nodemailer'

const emailAddress = process.env.NODEMAILER_AUTH_USER;
const password = process.env.NODEMAILER_AUTH_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailAddress,
    pass: password,
  }
});

const mailOptions = {
  from: emailAddress,
  to: emailAddress,
};

export const POST = async (request: Request) => {
  const { name, subject, email, message } = await request.json();

  if(!name || !email || !message) {
    return NextResponse.json(
      { message: 'Something went wrong. Try again!' }, 
      { status: 500 }
    );
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailBody({ name, subject, email, message }),
      subject: subject,
    })
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}

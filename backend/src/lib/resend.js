import nodemailer from 'nodemailer';
import { ENV } from './env.js';

// Create transporter with SMTP configuration
export const transporter = nodemailer.createTransport({
  host: ENV.EMAIL_HOST,
  port: parseInt(ENV.EMAIL_PORT),
  secure: ENV.EMAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: ENV.EMAIL_USER,
    pass: ENV.EMAIL_PASSWORD,
  },
});

export const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME || 'Messenger',
};

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

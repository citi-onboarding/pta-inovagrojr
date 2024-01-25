import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

type emailConfig = {
   destination: string;
   subject: string;
   html: string;
};

const mailServer = async (config: emailConfig) => {
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.EMAIL,
         pass: process.env.PASSWORD,
      },
   });

   const mailOptions = {
      from: process.env.EMAIL,
      to: config.destination,
      subject: config.subject,
      html: config.html,
   };

   await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Email sent: ' + info.response);
      }
   });
};

export { mailServer };
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_KEY,
  },
});

export const mailOptions = {
  from: process.env.GMAIL_EMAIL,
  to: process.env.GMAIL_EMAIL,
};

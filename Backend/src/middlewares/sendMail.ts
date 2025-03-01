import { createTransport } from "nodemailer";

const sendMail = async (
  email: string,
  subject: string,
  data: { firstname: string; otp: number }
) => {
  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use TLS
    auth: {
      user: process.env.Gmail,
      pass: process.env.Password,
    },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background: #f4f4f4;">
        <h2 style="color: #7b68ee;">OTP Verification</h2>
        <p>Hello <strong>${data.firstname}</strong>, your OTP for account verification is:</p>
        <h3 style="color: red;">${data.otp}</h3>
        <p style="color: #666;">This OTP will expire in 5 minutes. Do not share it with anyone.</p>
    </div>`;

  await transport.sendMail({
    from: `urMentor <${process.env.Gmail}>`,
    to: email,
    subject,
    html,
  });
};

export default sendMail;

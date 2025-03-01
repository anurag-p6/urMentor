import { createTransport } from "nodemailer";

const sendmail = async (email:string, subject:string, data:string) => {
  const transport = createTransport({
    host:"smtp.gmail.com",
    port:465,
    auth: {
      user:process.env.Gmail
    }
  })

}
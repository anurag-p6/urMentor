import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { userModel } from '../models/userModel'
import bcrypt from 'bcrypt'
import { string, z } from 'zod'
import jwt, { JwtPayload } from 'jsonwebtoken'
import sendMail from '../middlewares/sendMail'

export const signup = async (req: Request, res: Response) => {
  const { firstname, lastname, contact_no, email, password } = req.body;

  const signupSchema = z.object({
    firstname: z.string().min(3, 'Firstname must be atleast 2 characters'),
    lastname: z.string().min(2, 'Lastname must be atleast 2 characters'),
    email: z.string().email('Invalid email format'),
    password: z.string()
      .min(6, 'Password must be atleast of 6 characters')
      .regex(/[A-Z]/, 'Password must include at least one uppercase letter')
      .regex(/[a-z]/, 'Password must include at least one lowercase letter')
      .regex(/[0-9]/, 'Password must include at least one number')
      .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must include at least one special character')
  })

  const validateData = signupSchema.safeParse(req.body);

  if (!validateData.success) {
    res.status(400).json({ errors: validateData.error.format() });
    return;
  }

  if (!firstname || !lastname || !contact_no || !email || !password) {
    res.status(400).json({
      message: "All fields are required"
    })
  }
  try {
    let user: object | null = await userModel.findOne({
      email
    })

    if (user) {
      res.status(400).json({
        message: "User already exists"
      })
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    user = {
      firstname,
      lastname,
      contact_no,
      email,
      password: hashedPassword
    }

    const otp = Math.floor(Math.random() * 1000000);

    const JWT_SECRET = process.env.JWT_SECRET as string;

    const activationToken = jwt.sign({
      user,
      otp
    }, JWT_SECRET,
      {
        expiresIn: '5m',
      }
    )

    const data = {
      firstname,
      lastname,
      otp
    }

    try {
      await sendMail(email, "Your OTP Code", { firstname, otp });
      res.status(200).json({
        message: `otp sent to ${firstname}`,
        activationToken,
      })
      return;
    } catch (error) {
      res.status(500).json({ message: "Failed to send OTP", error });
      return;
    }


  } catch (error: any) {
    console.log(error.errmsg)
    res.status(400).json({
      message: error
    });
    return;
  }
}

export const verifyUser = async (req: Request, res: Response) => {
  const { otp, activationToken } = req.body;

  try {
    const verify = jwt.verify(activationToken, process.env.JWT_SECRET as string) as JwtPayload;

    if (!verify) {
      res.status(400).json({
        messsage: "OTP Expired",
      });
      return;
    } else if (verify.otp !== otp) {
      res.status(400).json({
        message: "Invalid OTP"
      });
      return;
    }

    await userModel.create({
      firstname: verify.user.firstname,
      lastname: verify.user.lastname,
      contact_no: verify.user.contact_no,
      email: verify.user.email,
      password: verify.user.password
    })

    res.status(200).json({
      message: "Signin Sucessfully"
    });
    return;

  } catch (error) {
    res.status(400).json({
      message: (error as Error).message
    })
    return;
  }
}
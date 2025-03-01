import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { userModel } from '../models/userModel'
import bcrypt from 'bcrypt'
import { string, z } from 'zod'
import jwt  from 'jsonwebtoken'
  
export const signup = async (req: Request, res: Response) => {
  const { firstname,lastname,contact_no, email, password } = req.body;

  const signupSchema = z.object({
    firstname:z.string().min(3,'Firstname must be atleast 2 characters'),
    lastname:z.string().min(2, 'Lastname must be atleast 2 characters'),
    email:z.string().email('Invalid email format'),
    password:z.string()
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

  if(!firstname || !lastname || !contact_no || !email || !password) {
   res.status(400).json({
      message:"All fields are required"
    })
  }
  try {
    const user = await userModel.findOne({
      email
    })

    if(user) {
      res.status(400).json({
        message:"User already exists"
      })
    }
  
    const hashedPassword = await bcrypt.hash(password,12);

    const otp = Math.floor(Math.random()*1000000);

    const JWT_SECRET = process.env.JWT_SECRET as string;

    const activationToken = jwt.sign({
      email,
      otp
    },JWT_SECRET,{
       expiresIn: '5m',
    })
    
    const data = {
      firstname,
      lastname,
      otp
    }

    await userModel.create({
      firstname,
      lastname,
      contact_no,
      email,
      password:hashedPassword
    })

    res.status(200).json({
      message:"Signup succesfully"
    })
  } catch(error:any) {
    console.log(error.errmsg)
    res.status(400).json({
      message:error 
    })
  }
}
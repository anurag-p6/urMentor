import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { userModel } from '../models/userModel'
import bcrypt from 'bcrypt'
  
export const signup = async (req: Request, res: Response) => {
  
  try {
  const { firstname, lastname, contact_no, email, password } = req.body;

  if (!firstname || !lastname || !contact_no || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  let user = await userModel.findOne({
    email,
  });

  if (user) {
    return res.status(400).json({
      message: 'User already exists'
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  await userModel.create({
    firstname,  
    lastname,
    contact_no,
    email,
    password: hashedPassword,
  });

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error:any) {
    return res.status(500).json({
       message:error.message,
    });
  }
};
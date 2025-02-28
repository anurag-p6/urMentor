import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { userModel } from '../models/usermodel'
import bcrypt from 'bcrypt'

export const signup = async (req: Request, res: Response) => {
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

};
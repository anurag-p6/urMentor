import express, { Express, Request, Response } from "express";
import { userModel } from "../models/userModel";
import bcrypt from 'bcrypt'
import { IUser } from "../models/userModel";
import jwt from 'jsonwebtoken'

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user: IUser | null = await userModel.findOne({
    email
  });

  try {
    if (!user) {
      res.status(400).json({
        message: "Invalid Username"
      })
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      res.status(400).json({
        message: "Invalid Password"
      });
      return;
    }
    
    if(user) {
    const token = jwt.sign({
      id:user._id,
    },process.env.JWT_SECRET as string)

    res.status(200).json({
      message: "Login Sucessful",
      token
    });
  } 
 

  } catch(error) {
     res.status(200).json({
      message:error
     })
  }
} 
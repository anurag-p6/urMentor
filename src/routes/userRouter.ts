import express,{Request,Response}  from "express";
import mongoose from "mongoose";
import { userModal } from "../models/userModel.js";

 export const userRouter = express.Router();

userRouter.post('/signin', async (req:Request,res:Response) => {
    const { email, password } = req.body;
    const { firstname, lastname,contact_No } = req.body;

    await userModal.create({
      firstname,
      lastname,
      contact_No,
      email,
      password,
    })
})
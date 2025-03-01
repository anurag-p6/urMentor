import express, { Express, Request, Response } from "express";
import { userModel } from "../models/userModel";

export const signin = async (req:Request, res:Response) => {
  const { email, password } = req.body;

  const user: object | null = await userModel.findOne({
    email
  });

  if(!user) {
    res.status(400).json({
      message:"Invalid Username"
    })
  }
}
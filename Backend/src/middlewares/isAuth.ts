import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { userModel } from "../models/userModel";
import { IUser } from "../models/userModel";
import { decode } from "punycode";
import mongoose from "mongoose";


interface AuthenticatedRequest extends Request {
  user?: IUser | null;
}
export const isAuth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.token as string | undefined;

  try {
    if (!token) {
      res.status(403).json({
        message: "Login First"
      });
      return;
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    
    const user = await userModel.findById(decodedData.id);
    req.user = user;

    console.log(req.user); 
    if (!req.user) {
      res.status(404).json({
        message: "User not found" 
      });
      return;
    }

    next();
  } catch (error) {
    console.log(error as Error);
    res.status(400).json({
      message: (error as Error).message
    });
    return;
  }

}
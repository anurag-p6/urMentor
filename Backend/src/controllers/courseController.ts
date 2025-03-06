import express, { Request, Response } from 'express'
import { courseModel, ICourse } from '../models/courseModel';
import { Schema } from 'zod';
import { IUser } from '../models/userModel';
import { AuthenticatedRequest } from '../middlewares/isAuth';
import {v4 as uuid} from 'uuid'

export const createCourse = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const { courseName,courseId, description, price, createdBy, duration, validity } = req.body;
        const user = req.user as IUser;

        if(!user) {
          res.status(401).json({
            message:"Unauthorized: User not found"
          });
          return;
        }

        console.log(user);

        const file = req.file;

        if(!req.file) {
            res.status(403).json({
             message:"Please Enter Your file"
            });
             return;
        }
        console.log(req.file);
        
        const imageurl = `../../uploads/${req.file.filename}`;

        await courseModel.create({
            courseName,
            courseId:(Math.floor(Math.random() * 100)),
            description,
            price,
            createdBy: (req.user as IUser)._id,
            duration,
            validity,
            imageurl
        });

        res.status(200).json({
            message: "Course created sucessfully"
        });
        return ;
    } catch (error) {
       res.status(403).json({
        message: (error as Error).message,
       });
       return; 
    }
}
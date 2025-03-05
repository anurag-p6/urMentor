import express, { Request, Response } from 'express'
import { courseModel, ICourse } from '../models/courseModel';


export const createCourse = async (req: Request, res: Response) => {
    try {
        const { courseName, description, price, createdBy, duration, validity } = req.body;

        const imageUrl = req.file;

        await courseModel.create({
            courseName,
            description,
            price,
            createdBy,
            duration,
            validity,
            imageurl: imageUrl?.path
        })

        res.status(200).json({
            message: "Course created sucessfully"
        });
        return ;
    } catch (error) {
       res.status(403).json({
        message: (error as Error).message
       });
       return; 
    }
}
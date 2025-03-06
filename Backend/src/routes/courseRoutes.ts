import express from 'express'
import { createCourse } from '../controllers/courseController';
import multer from 'multer';
import { isInstructor, isAuth } from '../middlewares/isAuth';
import { upload } from '../middlewares/multer.middleware';


export const courseRoute = express.Router();

courseRoute.post('/admin/create', isAuth, isInstructor, upload.single('courseImage'), createCourse)
import express from 'express'
import { createCourse } from '../controllers/courseController';
import multer from 'multer';
import { isAdmin, isAuth } from '../middlewares/isAuth';

const upload = multer({
  //@ts-ignore
  storage,
})

console.log(typeof upload)

export const courseRoute = express.Router();

courseRoute.post('/admin/create', isAuth, isAdmin, upload.single, createCourse)
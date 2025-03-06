import express, { Express, Request, Response } from "express";
import { isInstructor, isAuth } from "../middlewares/isAuth";
import { createCourse } from "../controllers/courseController";

const adminRouter = express.Router();

adminRouter.post('/course/new', isAuth, isInstructor, createCourse )

export default adminRouter;
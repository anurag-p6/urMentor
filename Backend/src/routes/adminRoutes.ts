import express, { Express, Request, Response } from "express";
import { isAdmin, isAuth } from "../middlewares/isAuth";

const adminRouter = express.Router();

adminRouter.post('/course/new', isAuth, isAdmin,)

export default adminRouter;
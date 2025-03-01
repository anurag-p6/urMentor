import express from 'express'
import { signin } from '../controllers/signinController';

export const signinRouter = express.Router();

signinRouter.post('/signin',signin)
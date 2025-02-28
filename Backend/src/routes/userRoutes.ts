import express,{Request,Response} from 'express';
import { signup } from '../controllers/usercontroller';

export const userRouter = express.Router();

userRouter.post('/signup', signup);

userRouter.post('/signin', signin);

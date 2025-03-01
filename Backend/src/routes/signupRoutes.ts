import express,{Request, response, Response} from 'express'
import { signup, verifyUser } from '../controllers/signupController'

export const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/verify',verifyUser);
import express,{Request, response, Response} from 'express'
import { signup, verifyUser } from '../controllers/signupController'

export const signupRouter = express.Router();

signupRouter.post('/signup', signup);
signupRouter.post('/verify',verifyUser);
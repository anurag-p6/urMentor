import express from 'express'
import { signin } from '../controllers/signinController';
import { isAuth } from '../middlewares/isAuth';
import { myprofile } from '../controllers/signinController';
export const signinRouter = express.Router();

signinRouter.post('/user/signin',signin)
signinRouter.get('/user/me', isAuth, myprofile) 